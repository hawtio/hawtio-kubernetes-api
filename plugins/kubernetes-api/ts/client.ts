/// <reference path="kubernetesApiGlobals.ts"/>
/// <reference path="kubernetesApiHelpers.ts"/>
/// <reference path="kubernetesApiPlugin.ts"/>

module KubernetesAPI {

  var log = Logger.get('k8s-objects');

  class ObjectList {
    public triggerChangedEvent = _.debounce(() => {
      this._ee.emit(WatchActions.ANY, this._objects);
    }, 500, { trailing: true });

    private _ee:EventEnabled = undefined;
    private _initialized = false;
    private _objects:Array<any> = [];
    private log:Logging.Logger = undefined;

    constructor(kind:string, namespace?:string) {
      var loggerName = 'k8s-objects/' + (namespace ? UrlHelpers.join(namespace, kind) : kind);
      this.log = Logger.get(loggerName);
      this._ee = smokesignals.convert(this);
      if (this.log.enabledFor(Logger.DEBUG)) {
        this._ee.on(WatchActions.ADDED, (object) => {
          this.log.debug("added object: ", object);
        });
        this._ee.on(WatchActions.MODIFIED, (object) => {
          this.log.debug("modified object: ", object);
        });
        this._ee.on(WatchActions.DELETED, (object) => {
          this.log.debug("deleted object: ", object);
        });
        this._ee.on(WatchActions.ANY, (objects) => {
          this.log.debug("objects changed: ", objects);
        });
      }
      this._ee.on(WatchActions.ANY, (objects) => {
        this.initialized = true;
      });
    };

    public get initialized() {
      return this._initialized;
    }

    public get events() {
      return this._ee;
    }
    
    public get objects() {
      return this._objects;
    }

    public hasNamedItem(item:any) {
      return _.any(this._objects, (obj:any) => {
        return getName(obj) === getName(item);
      });
    }

    public added(object) {
      if (_.any(this._objects, (obj) => {
        return equals(obj, object);
      })) {
        this.modified(object);
        return;
      }
      this._objects.push(object);
      this._ee.emit(WatchActions.ADDED, object);
      this.triggerChangedEvent();
    };

    public modified(object) {
      if (!_.any(this._objects, (obj) => {
        return equals(obj, object);
      })) {
        this.added(object);
        return;
      }
      _.forEach(this._objects, (obj) => {
        if (equals(obj, object)) {
          angular.copy(object, obj);
          this._ee.emit(WatchActions.MODIFIED, object);
          this.triggerChangedEvent();
        }
      }, this);
    };

    public deleted(object) {
      //log.debug("deleted object: ", object);
      _.remove(this._objects, (obj) => {
        this._ee.emit(WatchActions.DELETED, object);
        this.triggerChangedEvent();
        return equals(obj, object);
      }, this);
    };
  };

  class WSHandlers {
    private retries:number = 0;
    private connectTime:number = 0;
    public socket:WebSocket;
    private self:CollectionImpl = undefined;
    private _list:ObjectList;

    constructor(private _self:CollectionImpl) {
      this.self = _self;
    }

    set list(_list:ObjectList) {
      this._list = _list;
    }

    private setHandlers(self:WSHandlers, ws:WebSocket) {
      _.forIn(self, (value, key) => {
        if (_.startsWith(key, 'on')) {
          ws[key] = (event) => {
            self[key](event);
          }
        }
      });
    };

    public send(data:any) {
      if (!_.isString(data)) {
        data = angular.toJson(data);
      }
      this.socket.send(data);
    }

    onmessage(event) {
      var data = JSON.parse(event.data);
      var eventType = data.type.toLowerCase();
      // log.debug("event: ", eventType, " object: ", data.object);
      this._list[eventType](data.object);
    };

    onopen(event) {
      this.retries = 0;
      this.connectTime = new Date().getTime();
      log.debug("Connected: ", event);
      //this.emitter.emit(eventName('open'), event);
    };

    onclose(event) {
      if (this.retries < 3 && this.connectTime && (new Date().getTime() - this.connectTime) > 5000) {
        var self = this;
        setTimeout(() => {
          log.debug("Retrying after connection closed: ", event);
          this.retries = this.retries + 1;
          log.debug("watch ", this.self.kind, " disconnected, retry #", this.retries);
          var ws = this.socket = new WebSocket(this.self.wsUrl);
          this.setHandlers(self, ws);
        }, 5000);
      } else {
        log.debug("Watch for ", this.self.kind, " failed");
        log.debug("Closed: ", event);
        //this.emitter.emit(eventName('close'), event);
      }
    };

    get connected():boolean {
      return this.socket && this.socket.readyState === WebSocket.OPEN;
    };

    connect() {
      log.debug("Connecting watch ", this.self.kind);
      var ws = this.socket = new WebSocket(this.self.wsUrl);
      this.setHandlers(this, ws);
    };
  }

  export class CollectionImpl {

    private _kind:string;
    private _namespace:string;
    private _path:string;
    private _wsUrl:URI;
    private _restUrl:URI;
    private _cb:(data:any) => void = undefined;
    private handlers:WSHandlers = undefined;
    private list:ObjectList = undefined;

    constructor(kind:string, namespace?:string) {
      this._kind = kind;
      this._namespace = namespace || null;

      var pref = prefixForKind(this._kind);
      if (!pref) {
        throw new Error('Unknown kind: ' + this._kind);
      }
      if (this._namespace) {
        this._path = UrlHelpers.join(pref, 'namespaces', this._namespace, this._kind);
      } else {
        this._path = UrlHelpers.join(pref, this._kind);
      }

      this._restUrl = new URI(UrlHelpers.join(masterApiUrl(), this._path));
      this._wsUrl = wsUrl(UrlHelpers.join(masterApiUrl(), this._path)).query(<any>{
        watch: true,
        access_token: HawtioOAuth.getOAuthToken()
      });
      this.handlers = new WSHandlers(this);
      var list = this.list = new ObjectList(kind, namespace);
      this.handlers.list = list;
    };

    public get wsUrl() {
      return this._wsUrl.toString();
    };

    get namespace() {
      return this._namespace;
    };

    set namespace(ns:string) {
      this._namespace = ns;
    };

    get kind() {
      return this._kind;
    };

    get connected():boolean {
      return this.handlers.connected;
    };

    private initializeCallback(cb:(data:any) => void) {
      if (this._cb !== cb) {
        this.list.events.off(WatchActions.ANY, this._cb);
        this.list.events.off(WatchActions.ADDED, this._cb);
        this.list.events.off(WatchActions.MODIFIED, this._cb);
        this.list.events.off(WatchActions.DELETED, this._cb);
        this._cb = cb;
      }
    }

    public connect() {
      if (!this.handlers.connected) {
        this.handlers.connect();
      }
    };

    // one time fetch of the data...
    public get(cb:(data:any) => void) {
      if (!this.list.initialized) {
        this.list.events.once(WatchActions.ANY, cb);
      } else {
        setTimeout(() => {
          cb(this.list.objects);
        }, 10);
      }
    };

    private restUrlFor(item:any, useName:boolean = true) {
      var name = getName(item);
      if (useName && !name) {
        log.debug("Name missing from item: ", item);
        return undefined;
      }
      var namespace = getNamespace(item);
      var url = UrlHelpers.join(this._restUrl.toString());
      if (this._kind !== WatchTypes.NAMESPACES && namespace && !this._namespace) {
        url = UrlHelpers.join(masterApiUrl(), prefixForKind(this._kind), 'namespaces', namespace, this._kind);
      }
      if (useName) {
        url = UrlHelpers.join(url, name);
      }
      return url;
    }

    // continually get updates
    public watch(cb:() => void) {
      this.initializeCallback(cb);
      this.list.events.on(WatchActions.ANY, cb);
    };

    public put(item:any, cb:(data:any) => void) {
      var method = 'PUT';
      var url = this.restUrlFor(item);
      if (!this.list.hasNamedItem(item)) {
        // creating a new object
        method = 'POST';
        url = this.restUrlFor(item, false);
      }
      if (!url) {
        return;
      }
      $.ajax(url, <any> {
        method: method,
        data: angular.toJson(item),
        processData: false,
        success: (data) => {
          try {
            var response = angular.fromJson(data);
            cb(response);
          } catch (err) {
            cb({});
          }
        }, 
        error: (jqXHR, text, status) => {
          log.debug("Failed to create or update ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
        }
      });
    };

    public delete(item:any, cb:(data:any) => void) {
      var url = this.restUrlFor(item);
      if (!url) {
        return;
      }
      this.list.deleted(item);
      this.list.triggerChangedEvent();
      $.ajax(url, <any>{
        method: 'DELETE',
        success: (data) => {
          try {
            var response = angular.fromJson(data);
            cb(response);
          } catch (err) {
            cb({});
          }
        },
        error: (jqXHR, text, status) => {
          log.debug("Failed to delete ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
          this.list.added(item);
          this.list.triggerChangedEvent();
        }
      });
    };
  }

  class K8SClientFactoryImpl {
    public create(kind: string, namespace?: string) {
      return new CollectionImpl(kind, namespace);
    }
  }

  _module.factory('K8SClientFactory', () => {
    return new K8SClientFactoryImpl()
  });



}


