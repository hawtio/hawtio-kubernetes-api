/// <reference path="kubernetesApiGlobals.ts"/>
/// <reference path="kubernetesApiHelpers.ts"/>
/// <reference path="kubernetesApiPlugin.ts"/>

module KubernetesAPI {

  var log = Logger.get('k8s-objects');

  function getKey(kind:string, namespace?: string) {
    return namespace ? namespace + '-' + kind : kind;
  }

  function beforeSend(request) {
    var token = HawtioOAuth.getOAuthToken();
    if (token) {
      request.setRequestHeader('Authorization', 'Bearer ' + token);
    }
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

  interface CompareResult {
    added:Array<any>;
    modified:Array<any>;
    deleted:Array<any>;
  }

  function compare(old:Array<any>, _new:Array<any>):CompareResult {
    var answer = <CompareResult> {
      added: [],
      modified: [],
      deleted: []
    };
    _.forEach(_new, (newObj) => {
      var oldObj = _.find(old, (o) => equals(o, newObj));
      if (!oldObj) {
        answer.added.push(newObj);
        return;
      }
      if (angular.toJson(oldObj) !== angular.toJson(newObj)) {
        answer.modified.push(newObj);
      }
    });
    _.forEach(old, (oldObj) => {
      var newObj = _.find(_new, (o) => equals(o, oldObj));
      if (!newObj) {
        answer.deleted.push(oldObj);
      }
    });
    return answer;
  }

  /*
   * Manages polling the server for objects that don't support websocket connections
   */
  class ObjectPoller {

    private _lastFetch = <Array<any>> [];
    private log:Logging.Logger = undefined;
    private _connected = false;
    private _interval = 5000;
    private retries:number = 0;
    private tCancel:any = undefined;

    constructor(private restURL:string, private handler:WSHandler) {
      this.log = Logger.get('k8s-objects/' + getKey(handler.collection.kind, handler.collection.namespace));
    };

    public get connected () {
      return this._connected;
    };

    private doGet() {
      if (!this._connected) {
        return;
      } 
      $.ajax(this.restURL, <any>{
        method: 'GET',
        success: (data) => {
          if (!this._connected) {
            return;
          }
          var items  = (data && data.items) ? data.items : [];
          var result = compare(this._lastFetch, items);
          this._lastFetch = items;
          _.forIn(result, (items:any[], action:string) => {
            _.forEach(items, (item:any) => {
              // don't want to modify the original object
              item = _.cloneDeep(item);
              // TODO this trimRight works for now, but might not work at some point
              item.kind = _.trimRight(_.capitalize(this.handler.collection.kind), 's');
              item.apiVersion = apiVersionForKind(this.handler.collection.kind);
              this.handler.collection.namespace ? item.namespace = this.handler.collection.namespace : false;
              var event = {
                data: angular.toJson({
                  type: action.toUpperCase(),
                  object: item
                  }, true)
                };
              this.handler.onmessage(event);
            });
          });
          //log.debug("Result: ", result);
          if (this._connected) {
            this.tCancel = setTimeout(() => {
              this.doGet();
            }, this._interval);
          }
        },
        error: (jqXHR, text, status) => {
          if (!this._connected) {
            return;
          }
          var error = getErrorObject(jqXHR);
          if (this.retries >= 3) {
            this._connected = false;
            this.log.debug("Out of retries, stopping polling, error: ", error);
          } else {
            this.retries = this.retries - 1;
            this.log.debug("Error polling, retry #", this.retries + 1, " error: ", error);
            this.tCancel = setTimeout(() => {
              this.doGet();
            }, this._interval);
          }
        },
        beforeSend: beforeSend
      });
    };

    public start() {
      if (this._connected) {
        return;
      }
      this._connected = true;
      this.tCancel = setTimeout(() => {
        this.doGet();
      }, 1);
    };

    public stop() {
      this._connected = false;
      if (this.tCancel) {
        clearTimeout(this.tCancel);
        this.tCancel = undefined;
      }
    };

    public destroy() {
      this.stop();
      this.log.debug("Connection closed");
    }

  }

  /**
   * Manages the websocket connection to the backend and passes events to the ObjectList
   */
  class WSHandler {
    private retries:number = 0;
    private connectTime:number = 0;
    private socket:WebSocket;
    private poller:ObjectPoller;
    private self:CollectionImpl = undefined;
    private _list:ObjectList;
    private log:Logging.Logger = undefined;

    constructor(private _self:CollectionImpl) {
      this.self = _self;
      this.log = Logger.get('k8s-objects/' + getKey(_self.kind, _self.namespace));
    }

    set list(_list:ObjectList) {
      this._list = _list;
    }

    get collection() {
      return this._self;
    }

    private setHandlers(self:WSHandler, ws:WebSocket) {
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
      this.log.debug("Event: ", data);
      var eventType = data.type.toLowerCase();
      // this.log.debug("event: ", eventType, " object: ", data.object);
      this._list[eventType](data.object);
    };

    onopen(event) {
      this.retries = 0;
      this.connectTime = new Date().getTime();
      this.log.debug("Connected: ", event);
    };

    onclose(event) {
      if (this.retries < 3 && this.connectTime && (new Date().getTime() - this.connectTime) > 5000) {
        var self = this;
        setTimeout(() => {
          this.log.debug("Retrying after connection closed: ", event);
          this.retries = this.retries + 1;
          this.log.debug("watch ", this.self.kind, " disconnected, retry #", this.retries);
          var ws = this.socket = new WebSocket(this.self.wsURL);
          this.setHandlers(self, ws);
        }, 5000);
      } else {
        this.log.debug("websocket for ", this.self.kind, " closed, event: ", event);
        if (!event.wasClean) {
          this.log.debug("Switching to polling mode");
          delete this.socket;
          this.poller = new ObjectPoller(this.self.restURL, this);
          this.poller.start();
        }
      }
    };

    onerror(event) {
      this.log.debug("web socket encountered error: ", event);
    }

    get connected():boolean {
      return (this.socket && this.socket.readyState === WebSocket.OPEN) || (this.poller && this.poller.connected);
    };

    connect() {
      if (!this.socket && !this.poller) {
        this.log.debug("Connecting websocket for kind: ", this.self.kind);
        var ws = this.socket = new WebSocket(this.self.wsURL);
        this.setHandlers(this, ws);
      }
    };

    destroy() {
      if (this.socket) {
        this.socket.onclose = () => {
          this.log.debug("Connection closed");
          delete this.socket;
        }
        this.socket.close();
      }
      if (this.poller) {
        this.poller.destroy();
        delete this.poller;
      }
    }
  }

  /*
   * Implements the external API for working with k8s collections of objects
   */
  export class CollectionImpl implements Collection {

    private _kind:string;
    private _namespace:string;
    private _path:string;
    private _wsUrl:URI;
    private _restUrl:URI;
    private handlers:WSHandler = undefined;
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
      this.handlers = new WSHandler(this);
      var list = this.list = new ObjectList(kind, namespace);
      this.handlers.list = list;
    };

    public getKey() {
      return getKey(this._kind, this._namespace);
    };

    public get wsURL() {
      return this._wsUrl.toString();
    };

    public get restURL() {
      return this._restUrl.toString();
    };

    get namespace() {
      return this._namespace;
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
    public get(cb:(data:any[]) => void) {
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
    public watch(cb:(data:any[]) => void) {
      this.list.events.on(WatchActions.ANY, cb);
      return cb;
    };

    public unwatch(cb:(data:any[]) => void) {
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
          var err = getErrorObject(jqXHR);
          log.debug("Failed to create or update, error: ", err);
          if (error) {
            error(err);
          }
        },
        beforeSend: beforeSend
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
          var err = getErrorObject(jqXHR);
          log.debug("Failed to delete, error: ", err);
          this.list.added(item);
          this.list.triggerChangedEvent();
          if (error) {
            error(err);
          }
        },
        beforeSend: beforeSend
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
    public create(kind: string, namespace?: string):Collection {
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

    public destroy(client:Collection, ...handles:Array<(data:any[]) => void>) {
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


