/// <reference path="kubernetesApiGlobals.ts"/>
/// <reference path="kubernetesApiHelpers.ts"/>
/// <reference path="kubernetesApiPlugin.ts"/>

module KubernetesAPI {

  var log = Logger.get('k8s-objects');

  function getKey(kind:string, namespace?: string) {
    return namespace ? namespace + '-' + kind : kind;
  }

  /**
   *  Manages the array of k8s objects for a client instance
   **/
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
      var deleted = _.remove(this._objects, (obj) => {
        return equals(obj, object);
      }, this);
      if (deleted) {
        this._ee.emit(WatchActions.DELETED, deleted[0]);
        this.triggerChangedEvent();
      }
    };
  };

  /**
   * Manages the websocket connection to the backend and passes events to the ObjectList
   */
  class WSHandlers {
    private retries:number = 0;
    private connectTime:number = 0;
    private socket:WebSocket;
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
      }
    };

    get connected():boolean {
      return this.socket && this.socket.readyState === WebSocket.OPEN;
    };

    connect() {
      if (!this.socket) {
        log.debug("Connecting watch ", this.self.kind);
        var ws = this.socket = new WebSocket(this.self.wsUrl);
        this.setHandlers(this, ws);
      }
    };

    destroy() {
      this.socket.onclose = () => {
        log.debug("Connection closed");
      }
      this.socket.close();
    }
  }

  /*
   * Implements the external API for working with k8s collections of objects
   **/
  export class CollectionImpl {

    private _kind:string;
    private _namespace:string;
    private _path:string;
    private _wsUrl:URI;
    private _restUrl:URI;
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

    public getKey() {
      return getKey(this._kind, this._namespace);
    }

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

    public connect() {
      if (!this.handlers.connected) {
        this.handlers.connect();
      }
    };

    public destroy() {
      this.handlers.destroy();
      delete this.handlers;
      delete this.list;
    }

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
      this.list.events.on(WatchActions.ANY, cb);
      return cb;
    };

    public unwatch(cb:() => void) {
      this.list.events.off(WatchActions.ANY, cb);
    }

    public put(item:any, cb:(data:any) => void, error?:(err:any) => void) {
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
          if (error) {
            var responseText = angular.fromJson(jqXHR.responseText);
            error(responseText);
          }
        }
      });
    };

    public delete(item:any, cb:(data:any) => void, error?:(err:any) => void) {
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
          if (error) {
            var responseText = angular.fromJson(jqXHR.responseText);
            error(responseText);
          }
        }
      });
    };
  };

  /*
   * Manages references to collection instances to allow them to be shared between views
   */
  class ClientInstance {
    private _refCount = 0;
    private _collection:CollectionImpl = undefined;

    constructor(_collection:CollectionImpl) {
      this._collection = _collection;
    };

    public get refCount() {
      return this._refCount;
    }

    public addRef() {
      this._refCount = this._refCount + 1;
    };

    public removeRef() {
      this._refCount = this._refCount - 1;
    };

    public get collection() {
      return this._collection;
    };

    public disposable() {
      return this._refCount <= 0;
    };

    public destroy() {
      this._collection.destroy();
      delete this._collection;
    }
  };

  interface ClientMap {
    [name:string]:ClientInstance;
  }

  /*
   * Factory implementation that's available as an angular service
   */
  class K8SClientFactoryImpl {
    private log:Logging.Logger = Logger.get('k8s-client-factory');
    private _clients = <ClientMap> {};
    public create(kind: string, namespace?: string) {
      var key = getKey(kind, namespace);
      if (key in this._clients) {
        var client = this._clients[key];
        client.addRef();
        this.log.debug("Returning existing client for key: ", key, " refcount is: ", client.refCount);
        return client.collection;
      } else {
        var client = new ClientInstance(new CollectionImpl(kind, namespace));
        client.addRef();
        this.log.debug("Creating new client for key: ", key, " refcount is: ", client.refCount);
        this._clients[key] = client;
        return client.collection;
      }
    }

    public destroy(client:any, ...handles:any[]) {
      _.forEach(handles, (handle) => {
        client.unwatch(handle);
      });
      var key = client.getKey();
      if (key in this._clients) {
        var c = this._clients[key];
        c.removeRef();
        this.log.debug("Removed reference to client with key: ", key, " refcount is: ", c.refCount);
        if (c.disposable()) {
          delete this._clients[key];
          c.destroy();
          this.log.debug("Destroyed client for key: ", key);
        }
      }
    }
  }

  _module.factory('K8SClientFactory', () => {
    return new K8SClientFactoryImpl()
  });



}


