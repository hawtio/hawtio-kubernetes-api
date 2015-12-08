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

  var pollingOnly = ['projects'];

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
      this.log = log;
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
        var initialized = this.initialized;
        this._initialized = true;
        if (!initialized) {
          this._ee.emit(WatchActions.INIT, this._objects);
        }
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

    public set objects(objs:any[]) {
      this._objects.length = 0;
      _.forEach(objs, (obj) => {
        this._objects.push(obj);
      });
      this.triggerChangedEvent();
    }

    public hasNamedItem(item:any) {
      return _.any(this._objects, (obj:any) => {
        return getName(obj) === getName(item);
      });
    }

    public getNamedItem(name:string) {
      return _.find(this._objects, (obj:any) => {
        return getName(obj) === name;
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
      this.log = log; // Logger.get('k8s-objects/' + getKey(handler.collection.kind, handler.collection.namespace));
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
              item.kind = toCollectionName(item);
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
            this.log.debug("Out of retries, stopping polling, error: ", error);
            this.stop();
          } else {
            this.retries = this.retries + 1;
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
      this.log = log; //Logger.get('k8s-objects/' + getKey(_self.kind, _self.namespace));
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
        if (_.any(pollingOnly, (kind) => kind === this.self.kind)) {
          this.log.info("Using polling for kind: ", this.self.kind);
          this.poller = new ObjectPoller(this.self.restURL, this);
          this.poller.start();
        } else {
          var doConnect = () => {
            log.debug("Connecting websocket for kind: ", this.self.kind);
            var ws = this.socket = new WebSocket(this.self.wsURL);
            this.setHandlers(this, ws);
          }
          $.ajax(this.self.restURL, <any> {
            method: 'GET',
            processData: false,
            success: (data) => {
              this._list.objects = data.items || [];
              doConnect();
            }, error: (jqXHR, text, status) => {
              var err = getErrorObject(jqXHR);
              log.info("Failed to fetch data while connecting to backend for type: ", this.self.kind, " error: ", err);
              doConnect();
            },
            beforeSend: beforeSend

          });
        }
      }
    };

    destroy() {
      if (this.socket) {
        this.socket.onclose = () => {
          this.log.debug("Connection closed");
          delete this.socket;
        }
        try {
          this.socket.close();
        } catch (err) {
          // nothing to do, assume it's already closed
          delete this.socket;
        }
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

    private addLabelFilter(cb:(data:any[]) => void, labelSelector:LabelMap) {
      log.debug("Adding label filter: ", labelSelector);
      var cbOld = cb;
      return (data:any[]) => {
        data = filterByLabel(data, labelSelector);
        cbOld(data);
      };
    }

    // one time fetch of the data...
    public get(cb:(data:any[]) => void, labelSelector?:LabelMap) {
      if (labelSelector) {
        cb = this.addLabelFilter(cb, labelSelector);
      }
      if (!this.list.initialized) {
        this.list.events.once(WatchActions.INIT, cb);
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
    public watch(cb:(data:any[]) => void, labelSelector?:LabelMap):(data:any[]) => void {
      if (labelSelector) {
        cb = this.addLabelFilter(cb, labelSelector);
      }
      if (this.list.initialized) {
        setTimeout(() => {
          cb(this.list.objects);
        }, 10);
      }
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
      } else {
        // updating an existing object
        var resourceVersion = item.metadata.resourceVersion;
        if (!resourceVersion) {
          var current = this.list.getNamedItem(getName(item));
          resourceVersion = current.metadata.resourceVersion;
          item.metadata.resourceVersion = resourceVersion;
        }
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

  export var K8SClientFactory:K8SClientFactory = new K8SClientFactoryImpl();

  _module.factory('K8SClientFactory', () => {
    return K8SClientFactory;
  });

  var NO_KIND = "No kind in supplied options";
  var NO_OBJECT = "No object in supplied options";
  var NO_OBJECTS = "No objects in list object";

  /*
   * Static functions for manipulating k8s obj3cts
   */

  /*
   * Get a collection
   */
  export function get(options:K8SOptions) {
    if (!options.kind) {
      throw NO_KIND;
      return;
    }
    var client = K8SClientFactory.create(options.kind, options.namespace);
    var success = (data:any[]) => {
      if (options.success) {
        try {
          options.success(data);
        } catch (err) {
          log.debug("Supplied success callback threw error: ", err);
        }
      }
      K8SClientFactory.destroy(client);
    }
    client.get(success, options.labelSelector);
    client.connect();
  }

  function handleListAction(options:any, action:(object:any, success:(data:any) => void, error:(err:any) => void) => void) {
    if (!options.object.objects) {
      throw NO_OBJECTS;
      return;
    }
    var answer = {};
    var objects = _.cloneDeep(options.object.objects);
    function addResult(id, data) {
      answer[id] = data;
      next();
    };
    function next() {
      if (objects.length === 0) {
        log.debug("processed all objects, returning status");
        try {
          if (options.success) {
            options.success(answer);
          }
        } catch (err) {
          log.debug("Supplied success callback threw error: ", err);
        }
        return;
      }
      var object = objects.shift();
      log.debug("Processing object: ", getName(object));
      var success = (data) => {
      addResult(fullName(object), data);
      };
      var error = (data) => {
      addResult(fullName(object), data);
      };
      action(object, success, error);
    }
    next();
  }

  function normalizeOptions(options:any) {
    log.debug("Normalizing supplied options: ", options);
    // let's try and support also just supplying k8s objects directly
    if (options.metadata || getKind(options) === toKindName(WatchTypes.LIST)) {
      var object = options;
      options = {
        object: object
      };
      if (object.objects) {
        options.kind = toKindName(WatchTypes.LIST);
      }
    }
    if (!options.object) {
      throw NO_OBJECT;
    }
    if (!options.object.kind) {
      throw NO_KIND;
    }
    log.debug("Options object normalized: ", options);
    return options;
  }

  export function del(options:any) {
    options = normalizeOptions(options);
    // support deleting a list of objects
    if (options.object.kind === toKindName(WatchTypes.LIST)) {
      handleListAction(options, (object:any, success, error) => {
        del({
          object: object,
          success: success,
          error: error
        });
      });
      return;
    }
    var kind = toCollectionName(options.object);
    var namespace = getNamespace(options.object);
    var client = K8SClientFactory.create(kind, namespace);
    var success = (data) => {
      if (options.success) {
        try {
          options.success(data);
        } catch (err) {
          log.debug("Supplied success callback threw error: ", err);
        }
      }
      K8SClientFactory.destroy(client);
    };
    var error = (err) => {
      if (options.error) {
        try {
          options.error(err);
        } catch (err) {
          log.debug("Supplied error callback threw error: ", err);
        }
      }
      K8SClientFactory.destroy(client);
    };
    client.delete(options.object, success, error);
  }

  /*
   * Add/replace an object, or a list of objects
   */
  export function put(options:any) {
    options = normalizeOptions(options);
    // support putting a list of objects
    if (options.object.kind === toKindName(WatchTypes.LIST)) {
      handleListAction(options, (object:any, success, error) => {
        put({
          object: object,
          success: success,
          error: error
        });
      });
      return;
    }
    var kind = toCollectionName(options.object);
    var namespace = getNamespace(options.object);
    var client = K8SClientFactory.create(kind, namespace);
    client.get((objects) => {
      var success = (data) => {
        if (options.success) {
          try {
            options.success(data);
          } catch (err) {
            log.debug("Supplied success callback threw error: ", err);
          }
        }
        K8SClientFactory.destroy(client);
      };
      var error = (err) => {
        if (options.error) {
          try {
            options.error(err);
          } catch (err) {
            log.debug("Supplied error callback threw error: ", err);
          }
        }
        K8SClientFactory.destroy(client);
      };
      client.put(options.object, success, error);
    });
    client.connect();
  }

  export function watch(options:K8SOptions) {
    if (!options.kind) {
      throw NO_KIND;
      return;
    }
    var client = <Collection> K8SClientFactory.create(options.kind, options.namespace);
    var handle = client.watch(options.success, options.labelSelector);
    var self = {
      client: client,
      handle: handle,
      disconnect: () => {
        K8SClientFactory.destroy(self.client, self.handle);
      }
    };
    client.connect();
    return self;
  }

}


