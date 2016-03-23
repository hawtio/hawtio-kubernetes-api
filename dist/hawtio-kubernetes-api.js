

;
;
var KubernetesAPI;
(function (KubernetesAPI) {
    var consts = (function () {
        function consts() {
        }
        Object.defineProperty(consts.prototype, "NAMESPACE_STORAGE_KEY", {
            get: function () { return "k8sSelectedNamespace"; },
            enumerable: true,
            configurable: true
        });
        return consts;
    }());
    KubernetesAPI.consts = consts;
    KubernetesAPI.Constants = new consts();
    var WatchTypes = (function () {
        function WatchTypes() {
        }
        Object.defineProperty(WatchTypes, "LIST", {
            get: function () { return "list"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "ENDPOINTS", {
            get: function () { return "endpoints"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "EVENTS", {
            get: function () { return "events"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "NAMESPACES", {
            get: function () { return "namespaces"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "NODES", {
            get: function () { return "nodes"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "PERSISTENT_VOLUMES", {
            get: function () { return "persistentvolumes"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "PERSISTENT_VOLUME_CLAIMS", {
            get: function () { return "persistentvolumeclaims"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "PODS", {
            get: function () { return "pods"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "REPLICATION_CONTROLLERS", {
            get: function () { return "replicationcontrollers"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "RESOURCE_QUOTAS", {
            get: function () { return "resourcequotas"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "OAUTH_CLIENTS", {
            get: function () { return "oauthclients"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "SECRETS", {
            get: function () { return "secrets"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "SERVICES", {
            get: function () { return "services"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "SERVICE_ACCOUNTS", {
            get: function () { return "serviceaccounts"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "TEMPLATES", {
            get: function () { return "templates"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "ROUTES", {
            get: function () { return "routes"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "BUILD_CONFIGS", {
            get: function () { return "buildconfigs"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "BUILDS", {
            get: function () { return "builds"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "DEPLOYMENT_CONFIGS", {
            get: function () { return "deploymentconfigs"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "IMAGES", {
            get: function () { return "images"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "IMAGE_STREAMS", {
            get: function () { return "imagestreams"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "IMAGE_STREAM_TAGS", {
            get: function () { return "imagestreamtags"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "POLICIES", {
            get: function () { return "policies"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "POLICY_BINDINGS", {
            get: function () { return "policybindings"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "PROJECTS", {
            get: function () { return "projects"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "ROLE_BINDINGS", {
            get: function () { return "rolebindings"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "ROLES", {
            get: function () { return "roles"; },
            enumerable: true,
            configurable: true
        });
        return WatchTypes;
    }());
    KubernetesAPI.WatchTypes = WatchTypes;
    var NamespacedTypes = (function () {
        function NamespacedTypes() {
        }
        Object.defineProperty(NamespacedTypes, "k8sTypes", {
            get: function () {
                return [
                    WatchTypes.ENDPOINTS,
                    WatchTypes.EVENTS,
                    WatchTypes.NODES,
                    WatchTypes.PERSISTENT_VOLUMES,
                    WatchTypes.PERSISTENT_VOLUME_CLAIMS,
                    WatchTypes.PODS,
                    WatchTypes.REPLICATION_CONTROLLERS,
                    WatchTypes.RESOURCE_QUOTAS,
                    WatchTypes.PERSISTENT_VOLUMES,
                    WatchTypes.SECRETS,
                    WatchTypes.SERVICES,
                    WatchTypes.SERVICE_ACCOUNTS
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NamespacedTypes, "osTypes", {
            get: function () {
                return [
                    WatchTypes.TEMPLATES,
                    WatchTypes.BUILD_CONFIGS,
                    WatchTypes.ROUTES,
                    WatchTypes.BUILDS,
                    WatchTypes.BUILD_CONFIGS,
                    WatchTypes.DEPLOYMENT_CONFIGS,
                    WatchTypes.IMAGE_STREAMS,
                    WatchTypes.IMAGE_STREAM_TAGS,
                    WatchTypes.OAUTH_CLIENTS,
                    WatchTypes.POLICIES,
                    WatchTypes.POLICY_BINDINGS,
                    WatchTypes.PROJECTS,
                    WatchTypes.ROLE_BINDINGS,
                    WatchTypes.ROLES
                ];
            },
            enumerable: true,
            configurable: true
        });
        return NamespacedTypes;
    }());
    KubernetesAPI.NamespacedTypes = NamespacedTypes;
    var WatchActions = (function () {
        function WatchActions() {
        }
        Object.defineProperty(WatchActions, "INIT", {
            get: function () { return "INIT"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(WatchActions, "ANY", {
            get: function () { return "*"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(WatchActions, "ADDED", {
            get: function () { return "ADDED"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(WatchActions, "MODIFIED", {
            get: function () { return "MODIFIED"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(WatchActions, "DELETED", {
            get: function () { return "DELETED"; },
            enumerable: true,
            configurable: true
        });
        ;
        return WatchActions;
    }());
    KubernetesAPI.WatchActions = WatchActions;
})(KubernetesAPI || (KubernetesAPI = {}));

var KubernetesAPI;
(function (KubernetesAPI) {
    KubernetesAPI.pluginName = 'KubernetesAPI';
    KubernetesAPI.pluginPath = 'plugins/kubernetes-api/';
    KubernetesAPI.templatePath = KubernetesAPI.pluginPath + 'html/';
    KubernetesAPI.log = Logger.get(KubernetesAPI.pluginName);
    KubernetesAPI.keepPollingModel = true;
    KubernetesAPI.defaultIconUrl = Core.url("/img/kubernetes.svg");
    KubernetesAPI.hostIconUrl = Core.url("/img/host.svg");
    KubernetesAPI.osConfig = undefined;
    KubernetesAPI.masterUrl = "";
    KubernetesAPI.K8S_PREFIX = 'api';
    KubernetesAPI.OS_PREFIX = 'oapi';
    KubernetesAPI.K8S_API_VERSION = 'v1';
    KubernetesAPI.OS_API_VERSION = 'v1';
    KubernetesAPI.defaultApiVersion = KubernetesAPI.K8S_API_VERSION;
    KubernetesAPI.defaultOSApiVersion = KubernetesAPI.OS_API_VERSION;
    KubernetesAPI.labelFilterTextSeparator = ",";
    KubernetesAPI.defaultNamespace = "default";
    KubernetesAPI.appSuffix = ".app";
})(KubernetesAPI || (KubernetesAPI = {}));

var KubernetesAPI;
(function (KubernetesAPI) {
    function apiPrefix() {
        return KubernetesAPI.K8S_PREFIX;
    }
    KubernetesAPI.apiPrefix = apiPrefix;
    function osApiPrefix() {
        return KubernetesAPI.OS_PREFIX;
    }
    KubernetesAPI.osApiPrefix = osApiPrefix;
    function masterApiUrl() {
        return KubernetesAPI.masterUrl || "";
    }
    KubernetesAPI.masterApiUrl = masterApiUrl;
    function namespaced(kind) {
        switch (kind) {
            case KubernetesAPI.WatchTypes.POLICIES:
            case KubernetesAPI.WatchTypes.OAUTH_CLIENTS:
            case KubernetesAPI.WatchTypes.NODES:
            case KubernetesAPI.WatchTypes.PERSISTENT_VOLUMES:
            case KubernetesAPI.WatchTypes.PERSISTENT_VOLUME_CLAIMS:
            case KubernetesAPI.WatchTypes.PROJECTS:
                return false;
            default:
                return true;
        }
    }
    KubernetesAPI.namespaced = namespaced;
    function kubernetesApiPrefix() {
        return UrlHelpers.join(apiPrefix(), KubernetesAPI.OS_API_VERSION);
    }
    KubernetesAPI.kubernetesApiPrefix = kubernetesApiPrefix;
    function openshiftApiPrefix() {
        return UrlHelpers.join(osApiPrefix(), KubernetesAPI.K8S_API_VERSION);
    }
    KubernetesAPI.openshiftApiPrefix = openshiftApiPrefix;
    function apiForKind(kind) {
        if (kind === KubernetesAPI.WatchTypes.NAMESPACES) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.any(KubernetesAPI.NamespacedTypes.k8sTypes, function (t) { return t === kind; })) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.any(KubernetesAPI.NamespacedTypes.osTypes, function (t) { return t === kind; })) {
            return KubernetesAPI.OS_PREFIX;
        }
        if (kind === KubernetesAPI.WatchTypes.IMAGES) {
            return KubernetesAPI.OS_PREFIX;
        }
        return null;
    }
    KubernetesAPI.apiForKind = apiForKind;
    function apiVersionForKind(kind) {
        var api = apiForKind(kind);
        switch (api) {
            case KubernetesAPI.K8S_API_VERSION:
                return kubernetesApiPrefix();
            case KubernetesAPI.OS_API_VERSION:
                return openshiftApiPrefix();
            default:
                return null;
        }
    }
    KubernetesAPI.apiVersionForKind = apiVersionForKind;
    function prefixForKind(kind) {
        var api = apiForKind(kind);
        switch (api) {
            case KubernetesAPI.K8S_PREFIX:
                return kubernetesApiPrefix();
            case KubernetesAPI.OS_PREFIX:
                return openshiftApiPrefix();
            default:
                return null;
        }
    }
    KubernetesAPI.prefixForKind = prefixForKind;
    function kubernetesApiUrl() {
        return UrlHelpers.join(masterApiUrl(), kubernetesApiPrefix());
    }
    KubernetesAPI.kubernetesApiUrl = kubernetesApiUrl;
    function openshiftApiUrl() {
        return UrlHelpers.join(masterApiUrl(), openshiftApiPrefix());
    }
    KubernetesAPI.openshiftApiUrl = openshiftApiUrl;
    function getErrorObject(jqXHR) {
        var answer = jqXHR.responseText;
        try {
            answer = angular.fromJson(answer);
        }
        catch (err) {
        }
        return answer;
    }
    KubernetesAPI.getErrorObject = getErrorObject;
    function wsScheme(url) {
        var protocol = new URI(url).protocol() || 'http';
        if (_.startsWith(protocol, 'https')) {
            return 'wss';
        }
        else {
            return 'ws';
        }
    }
    KubernetesAPI.wsScheme = wsScheme;
    function toKindName(kind) {
        if (angular.isObject(kind)) {
            return getKind(kind);
        }
        if (!kind) {
            return undefined;
        }
        return _.trimRight(_.capitalize(kind), 's');
    }
    KubernetesAPI.toKindName = toKindName;
    function toCollectionName(kind) {
        if (angular.isObject(kind)) {
            kind = getKind(kind);
        }
        if (!kind) {
            return undefined;
        }
        return kind.toLowerCase() + 's';
    }
    KubernetesAPI.toCollectionName = toCollectionName;
    function wsUrl(url) {
        var protocol = wsScheme(url);
        return new URI(url).scheme(protocol);
    }
    KubernetesAPI.wsUrl = wsUrl;
    function equals(left, right) {
        var leftUID = getUID(left);
        var rightUID = getUID(right);
        if (!leftUID && !rightUID) {
            return angular.toJson(left) === angular.toJson(right);
        }
        return leftUID === rightUID;
    }
    KubernetesAPI.equals = equals;
    function createList() {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i - 0] = arguments[_i];
        }
        var answer = {
            apiVersion: KubernetesAPI.K8S_API_VERSION,
            kind: toKindName(KubernetesAPI.WatchTypes.LIST),
            objects: []
        };
        _.forEach(objects, function (object) {
            if (angular.isArray(object)) {
                _.forEach(object, function (o) {
                    answer.objects.push(o);
                });
            }
            else {
                answer.objects.push(object);
            }
        });
        return answer;
    }
    KubernetesAPI.createList = createList;
    function createShallowObject(name, kind, namespace) {
        return {
            apiVersion: KubernetesAPI.K8S_API_VERSION,
            kind: toKindName(kind),
            metadata: {
                name: name,
                namespace: namespace
            }
        };
    }
    KubernetesAPI.createShallowObject = createShallowObject;
    function filterByLabel(objects, labelSelector) {
        var matches = _.matches(labelSelector);
        return _.filter(objects, function (object) {
            return matches(getLabels(object));
        });
    }
    KubernetesAPI.filterByLabel = filterByLabel;
    function fullName(entity) {
        var namespace = getNamespace(entity);
        var kind = getKind(entity);
        var name = getName(entity);
        return UrlHelpers.join((namespace ? namespace : ""), kind, name);
    }
    KubernetesAPI.fullName = fullName;
    function getUID(entity) {
        return Core.pathGet(entity, ['metadata', 'uid']);
    }
    KubernetesAPI.getUID = getUID;
    function getNamespace(entity) {
        var answer = Core.pathGet(entity, ["metadata", "namespace"]);
        return answer;
    }
    KubernetesAPI.getNamespace = getNamespace;
    function getLabels(entity) {
        var answer = Core.pathGet(entity, ["metadata", "labels"]);
        return answer ? answer : {};
    }
    KubernetesAPI.getLabels = getLabels;
    function getName(entity) {
        return Core.pathGet(entity, ["metadata", "name"]) || Core.pathGet(entity, "name") || Core.pathGet(entity, "id");
    }
    KubernetesAPI.getName = getName;
    function getKind(entity) {
        return Core.pathGet(entity, ["metadata", "kind"]) || Core.pathGet(entity, "kind");
    }
    KubernetesAPI.getKind = getKind;
    function getSelector(entity) {
        return Core.pathGet(entity, ["spec", "selector"]);
    }
    KubernetesAPI.getSelector = getSelector;
    function getHost(pod) {
        return Core.pathGet(pod, ["spec", "host"]) || Core.pathGet(pod, ["spec", "nodeName"]) || Core.pathGet(pod, ["status", "hostIP"]);
    }
    KubernetesAPI.getHost = getHost;
    function getStatus(pod) {
        return Core.pathGet(pod, ["status", "phase"]);
    }
    KubernetesAPI.getStatus = getStatus;
    function getPorts(service) {
        return Core.pathGet(service, ["spec", "ports"]);
    }
    KubernetesAPI.getPorts = getPorts;
    function getCreationTimestamp(entity) {
        return Core.pathGet(entity, ["metadata", "creationTimestamp"]);
    }
    KubernetesAPI.getCreationTimestamp = getCreationTimestamp;
    ;
    function labelsToString(labels, seperatorText) {
        if (seperatorText === void 0) { seperatorText = KubernetesAPI.labelFilterTextSeparator; }
        var answer = "";
        angular.forEach(labels, function (value, key) {
            var separator = answer ? seperatorText : "";
            answer += separator + key + "=" + value;
        });
        return answer;
    }
    KubernetesAPI.labelsToString = labelsToString;
    function isRunning(podCurrentState) {
        var status = (podCurrentState || {}).phase;
        if (status) {
            var lower = status.toLowerCase();
            return lower.startsWith("run");
        }
        else {
            return false;
        }
    }
    KubernetesAPI.isRunning = isRunning;
    function selectorMatches(selector, labels) {
        if (angular.isObject(labels)) {
            var answer = true;
            var count = 0;
            angular.forEach(selector, function (value, key) {
                count++;
                if (answer && labels[key] !== value) {
                    answer = false;
                }
            });
            return answer && count > 0;
        }
        else {
            return false;
        }
    }
    KubernetesAPI.selectorMatches = selectorMatches;
    function podStatus(pod) {
        return getStatus(pod);
    }
    KubernetesAPI.podStatus = podStatus;
})(KubernetesAPI || (KubernetesAPI = {}));

var KubernetesAPI;
(function (KubernetesAPI) {
    KubernetesAPI._module = angular.module(KubernetesAPI.pluginName, []);
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesApiConfig',
        depends: 'KubernetesApiInit',
        task: function (next) {
            KubernetesAPI.K8S_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'k8s', 'prefix']) || KubernetesAPI.K8S_PREFIX, '/');
            KubernetesAPI.OS_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']) || KubernetesAPI.OS_PREFIX, '/');
            next();
        }
    });
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesApiInit',
        task: function (next) {
            $.getScript('osconsole/config.js')
                .done(function (script, textStatus) {
                var config = KubernetesAPI.osConfig = window['OPENSHIFT_CONFIG'];
                KubernetesAPI.log.debug("Fetched OAuth config: ", config);
                var master = config.master_uri;
                if (!master && config.api && config.api.k8s) {
                    var masterUri = new URI().host(config.api.k8s.hostPort).path("").query("");
                    if (config.api.k8s.proto) {
                        masterUri.protocol(config.api.k8s.proto);
                    }
                    master = masterUri.toString();
                }
                OSOAuthConfig = config.openshift;
                GoogleOAuthConfig = config.google;
                KeycloakConfig = config.keycloak;
                if (OSOAuthConfig && !master) {
                    if (!master) {
                        var oauth_authorize_uri = OSOAuthConfig.oauth_authorize_uri;
                        if (oauth_authorize_uri) {
                            var text = oauth_authorize_uri;
                            var idx = text.indexOf("://");
                            if (idx > 0) {
                                idx += 3;
                                idx = text.indexOf("/", idx);
                                if (idx > 0) {
                                    master = text.substring(0, ++idx);
                                }
                            }
                        }
                    }
                }
                if ((!KubernetesAPI.masterUrl || KubernetesAPI.masterUrl === "/") && (!master || master === "/")) {
                    var href = location.href;
                    if (href) {
                        master = new URI(href).query("").path("").toString();
                    }
                }
                if (master) {
                    KubernetesAPI.masterUrl = master;
                }
                next();
            })
                .fail(function (response) {
                KubernetesAPI.log.debug("Error fetching Kubernetes config: ", response);
                next();
            });
        }
    }, true);
    hawtioPluginLoader.addModule('ngResource');
    hawtioPluginLoader.addModule(KubernetesAPI.pluginName);
})(KubernetesAPI || (KubernetesAPI = {}));

var KubernetesAPI;
(function (KubernetesAPI) {
    var log = Logger.get('k8s-objects');
    function getKey(kind, namespace) {
        return namespace ? namespace + '-' + kind : kind;
    }
    function beforeSend(request) {
        var token = HawtioOAuth.getOAuthToken();
        if (token) {
            request.setRequestHeader('Authorization', 'Bearer ' + token);
        }
    }
    var pollingOnly = [KubernetesAPI.WatchTypes.PROJECTS, KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS];
    var ObjectList = (function () {
        function ObjectList(kind, namespace) {
            var _this = this;
            this.triggerChangedEvent = _.debounce(function () {
                _this._ee.emit(KubernetesAPI.WatchActions.ANY, _this._objects);
            }, 75, { trailing: true });
            this._ee = undefined;
            this._initialized = false;
            this._objects = [];
            this.log = undefined;
            var loggerName = 'k8s-objects/' + (namespace ? UrlHelpers.join(namespace, kind) : kind);
            this.log = log;
            this._ee = smokesignals.convert(this);
            if (this.log.enabledFor(Logger.DEBUG)) {
                this._ee.on(KubernetesAPI.WatchActions.ADDED, function (object) {
                    _this.log.debug("added object: ", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.MODIFIED, function (object) {
                    _this.log.debug("modified object: ", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.DELETED, function (object) {
                    _this.log.debug("deleted object: ", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.ANY, function (objects) {
                    _this.log.debug("objects changed: ", objects);
                });
            }
            this._ee.on(KubernetesAPI.WatchActions.ANY, function (objects) {
                var initialized = _this.initialized;
                _this._initialized = true;
                if (!initialized) {
                    _this._ee.emit(KubernetesAPI.WatchActions.INIT, _this._objects);
                }
            });
        }
        ;
        Object.defineProperty(ObjectList.prototype, "initialized", {
            get: function () {
                return this._initialized;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectList.prototype, "events", {
            get: function () {
                return this._ee;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectList.prototype, "objects", {
            get: function () {
                return this._objects;
            },
            set: function (objs) {
                var _this = this;
                this._objects.length = 0;
                _.forEach(objs, function (obj) {
                    _this._objects.push(obj);
                });
                this.triggerChangedEvent();
            },
            enumerable: true,
            configurable: true
        });
        ObjectList.prototype.hasNamedItem = function (item) {
            return _.any(this._objects, function (obj) {
                return KubernetesAPI.getName(obj) === KubernetesAPI.getName(item);
            });
        };
        ObjectList.prototype.getNamedItem = function (name) {
            return _.find(this._objects, function (obj) {
                return KubernetesAPI.getName(obj) === name;
            });
        };
        ObjectList.prototype.added = function (object) {
            if (_.any(this._objects, function (obj) {
                return KubernetesAPI.equals(obj, object);
            })) {
                this.modified(object);
                return;
            }
            this._objects.push(object);
            this._ee.emit(KubernetesAPI.WatchActions.ADDED, object);
            this.triggerChangedEvent();
        };
        ;
        ObjectList.prototype.modified = function (object) {
            var _this = this;
            if (!_.any(this._objects, function (obj) {
                return KubernetesAPI.equals(obj, object);
            })) {
                this.added(object);
                return;
            }
            _.forEach(this._objects, function (obj) {
                if (KubernetesAPI.equals(obj, object)) {
                    angular.copy(object, obj);
                    _this._ee.emit(KubernetesAPI.WatchActions.MODIFIED, object);
                    _this.triggerChangedEvent();
                }
            }, this);
        };
        ;
        ObjectList.prototype.deleted = function (object) {
            var deleted = _.remove(this._objects, function (obj) {
                return KubernetesAPI.equals(obj, object);
            }, this);
            if (deleted) {
                this._ee.emit(KubernetesAPI.WatchActions.DELETED, deleted[0]);
                this.triggerChangedEvent();
            }
        };
        ;
        return ObjectList;
    }());
    ;
    function compare(old, _new) {
        var answer = {
            added: [],
            modified: [],
            deleted: []
        };
        _.forEach(_new, function (newObj) {
            var oldObj = _.find(old, function (o) { return KubernetesAPI.equals(o, newObj); });
            if (!oldObj) {
                answer.added.push(newObj);
                return;
            }
            if (angular.toJson(oldObj) !== angular.toJson(newObj)) {
                answer.modified.push(newObj);
            }
        });
        _.forEach(old, function (oldObj) {
            var newObj = _.find(_new, function (o) { return KubernetesAPI.equals(o, oldObj); });
            if (!newObj) {
                answer.deleted.push(oldObj);
            }
        });
        return answer;
    }
    var ObjectPoller = (function () {
        function ObjectPoller(restURL, handler) {
            this.restURL = restURL;
            this.handler = handler;
            this._lastFetch = [];
            this.log = undefined;
            this._connected = false;
            this._interval = 5000;
            this.retries = 0;
            this.tCancel = undefined;
            this.log = log;
            this._lastFetch = this.handler.list.objects;
        }
        ;
        Object.defineProperty(ObjectPoller.prototype, "connected", {
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ObjectPoller.prototype.doGet = function () {
            var _this = this;
            if (!this._connected) {
                return;
            }
            $.ajax(this.restURL, {
                method: 'GET',
                success: function (data) {
                    if (!_this._connected) {
                        return;
                    }
                    var items = (data && data.items) ? data.items : [];
                    var result = compare(_this._lastFetch, items);
                    _this._lastFetch = items;
                    _.forIn(result, function (items, action) {
                        _.forEach(items, function (item) {
                            var event = {
                                data: angular.toJson({
                                    type: action.toUpperCase(),
                                    object: _.clone(item)
                                }, true)
                            };
                            _this.handler.onmessage(event);
                        });
                    });
                    if (_this._connected) {
                        _this.tCancel = setTimeout(function () {
                            _this.doGet();
                        }, _this._interval);
                    }
                },
                error: function (jqXHR, text, status) {
                    if (!_this._connected) {
                        return;
                    }
                    var error = KubernetesAPI.getErrorObject(jqXHR);
                    if (_this.retries >= 3) {
                        _this.log.debug("Out of retries, stopping polling, error: ", error);
                        _this.stop();
                    }
                    else {
                        _this.retries = _this.retries + 1;
                        _this.log.debug("Error polling, retry #", _this.retries + 1, " error: ", error);
                        _this.tCancel = setTimeout(function () {
                            _this.doGet();
                        }, _this._interval);
                    }
                },
                beforeSend: beforeSend
            });
        };
        ;
        ObjectPoller.prototype.start = function () {
            var _this = this;
            if (this._connected) {
                return;
            }
            this._connected = true;
            this.tCancel = setTimeout(function () {
                _this.doGet();
            }, 1);
        };
        ;
        ObjectPoller.prototype.stop = function () {
            this._connected = false;
            if (this.tCancel) {
                clearTimeout(this.tCancel);
                this.tCancel = undefined;
            }
        };
        ;
        ObjectPoller.prototype.destroy = function () {
            this.stop();
            this.log.debug("Connection closed");
        };
        return ObjectPoller;
    }());
    var WSHandler = (function () {
        function WSHandler(_self) {
            this._self = _self;
            this.retries = 0;
            this.connectTime = 0;
            this.self = undefined;
            this.log = undefined;
            this.self = _self;
            this.log = log;
        }
        Object.defineProperty(WSHandler.prototype, "list", {
            get: function () {
                return this._list || { objects: [] };
            },
            set: function (_list) {
                this._list = _list;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WSHandler.prototype, "collection", {
            get: function () {
                return this._self;
            },
            enumerable: true,
            configurable: true
        });
        WSHandler.prototype.setHandlers = function (self, ws) {
            _.forIn(self, function (value, key) {
                if (_.startsWith(key, 'on')) {
                    ws[key] = function (event) {
                        self[key](event);
                    };
                }
            });
        };
        ;
        WSHandler.prototype.send = function (data) {
            if (!_.isString(data)) {
                data = angular.toJson(data);
            }
            this.socket.send(data);
        };
        WSHandler.prototype.onmessage = function (event) {
            var data = JSON.parse(event.data);
            var eventType = data.type.toLowerCase();
            this._list[eventType](data.object);
        };
        ;
        WSHandler.prototype.onopen = function (event) {
            this.retries = 0;
            this.connectTime = new Date().getTime();
            this.log.debug("Connected: ", event);
        };
        ;
        WSHandler.prototype.onclose = function (event) {
            var _this = this;
            if (this.retries < 3 && this.connectTime && (new Date().getTime() - this.connectTime) > 5000) {
                var self = this;
                setTimeout(function () {
                    _this.log.debug("Retrying after connection closed: ", event);
                    _this.retries = _this.retries + 1;
                    _this.log.debug("watch ", _this.self.kind, " disconnected, retry #", _this.retries);
                    var ws = _this.socket = new WebSocket(_this.self.wsURL);
                    _this.setHandlers(self, ws);
                }, 5000);
            }
            else {
                this.log.debug("websocket for ", this.self.kind, " closed, event: ", event);
                if (!event.wasClean) {
                    this.log.debug("Switching to polling mode");
                    delete this.socket;
                    this.poller = new ObjectPoller(this.self.restURL, this);
                    this.poller.start();
                }
            }
        };
        ;
        WSHandler.prototype.onerror = function (event) {
            this.log.debug("web socket encountered error: ", event);
        };
        Object.defineProperty(WSHandler.prototype, "connected", {
            get: function () {
                return (this.socket && this.socket.readyState === WebSocket.OPEN) || (this.poller && this.poller.connected);
            },
            enumerable: true,
            configurable: true
        });
        ;
        WSHandler.prototype.connect = function () {
            var _this = this;
            if (this.self.restURL === '' && this.self.wsURL === '') {
                setTimeout(function () {
                    _this.connect();
                }, 2500);
                return;
            }
            if (!this.socket && !this.poller) {
                if (_.any(pollingOnly, function (kind) { return kind === _this.self.kind; })) {
                    this.log.info("Using polling for kind: ", this.self.kind);
                    this.poller = new ObjectPoller(this.self.restURL, this);
                    this.poller.start();
                }
                else {
                    var doConnect = function () {
                        log.debug("Connecting websocket for kind: ", _this.self.kind);
                        var ws = _this.socket = new WebSocket(_this.self.wsURL);
                        _this.setHandlers(_this, ws);
                    };
                    $.ajax(this.self.restURL, {
                        method: 'GET',
                        processData: false,
                        success: function (data) {
                            _this._list.objects = data.items || [];
                            doConnect();
                        }, error: function (jqXHR, text, status) {
                            var err = KubernetesAPI.getErrorObject(jqXHR);
                            log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, " error: ", err);
                            doConnect();
                        },
                        beforeSend: beforeSend
                    });
                }
            }
        };
        ;
        WSHandler.prototype.destroy = function () {
            var _this = this;
            if (this.socket) {
                this.socket.onclose = function () {
                    _this.log.debug("Connection closed");
                    delete _this.socket;
                };
                try {
                    this.socket.close();
                }
                catch (err) {
                    delete this.socket;
                }
            }
            if (this.poller) {
                this.poller.destroy();
                delete this.poller;
            }
        };
        return WSHandler;
    }());
    var CollectionImpl = (function () {
        function CollectionImpl(options) {
            this.options = options;
            this.handlers = undefined;
            this.list = undefined;
            this._kind = options.kind;
            this._namespace = options.namespace || null;
            var pref = KubernetesAPI.prefixForKind(this._kind);
            if (!pref) {
                throw new Error('Unknown kind: ' + this._kind);
            }
            if (this._namespace) {
                this._path = UrlHelpers.join(pref, 'namespaces', this._namespace, this._kind);
            }
            else {
                this._path = UrlHelpers.join(pref, this._kind);
            }
            this.handlers = new WSHandler(this);
            var list = this.list = new ObjectList(options.kind, options.namespace);
            this.handlers.list = list;
        }
        ;
        Object.defineProperty(CollectionImpl.prototype, "_restUrl", {
            get: function () {
                if (this.options.urlFunction && angular.isFunction(this.options.urlFunction)) {
                    var answer = this.options.urlFunction(this.options);
                    if (answer === null || !answer) {
                        return null;
                    }
                    return new URI(answer);
                }
                else {
                    return new URI(UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CollectionImpl.prototype, "_wsUrl", {
            get: function () {
                if (this.options.urlFunction && angular.isFunction(this.options.urlFunction)) {
                    var answer = this.options.urlFunction(this.options);
                    if (answer === null || !answer) {
                        return null;
                    }
                    return KubernetesAPI.wsUrl(answer).query({
                        watch: true,
                        access_token: HawtioOAuth.getOAuthToken()
                    });
                }
                else {
                    return KubernetesAPI.wsUrl(UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path)).query({
                        watch: true,
                        access_token: HawtioOAuth.getOAuthToken()
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        CollectionImpl.prototype.getKey = function () {
            return getKey(this._kind, this._namespace);
        };
        ;
        Object.defineProperty(CollectionImpl.prototype, "wsURL", {
            get: function () {
                return (this._wsUrl || "").toString();
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "restURL", {
            get: function () {
                return (this._restUrl || "").toString();
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "namespace", {
            get: function () {
                return this._namespace;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "kind", {
            get: function () {
                return this._kind;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "connected", {
            get: function () {
                return this.handlers.connected;
            },
            enumerable: true,
            configurable: true
        });
        ;
        CollectionImpl.prototype.connect = function () {
            if (!this.handlers.connected) {
                this.handlers.connect();
            }
        };
        ;
        CollectionImpl.prototype.destroy = function () {
            this.handlers.destroy();
            delete this.handlers;
            delete this.list;
        };
        CollectionImpl.prototype.addLabelFilter = function (cb, labelSelector) {
            log.debug("Adding label filter: ", labelSelector);
            var cbOld = cb;
            return function (data) {
                data = KubernetesAPI.filterByLabel(data, labelSelector);
                cbOld(data);
            };
        };
        CollectionImpl.prototype.get = function (cb, labelSelector) {
            var _this = this;
            if (labelSelector) {
                cb = this.addLabelFilter(cb, labelSelector);
            }
            if (!this.list.initialized) {
                this.list.events.once(KubernetesAPI.WatchActions.INIT, cb);
            }
            else {
                setTimeout(function () {
                    cb(_this.list.objects);
                }, 10);
            }
        };
        ;
        CollectionImpl.prototype.restUrlFor = function (item, useName) {
            if (useName === void 0) { useName = true; }
            var name = KubernetesAPI.getName(item);
            if (useName && !name) {
                log.debug("Name missing from item: ", item);
                return undefined;
            }
            var namespace = KubernetesAPI.getNamespace(item);
            var url = UrlHelpers.join(this._restUrl.toString());
            if (this._kind !== KubernetesAPI.WatchTypes.NAMESPACES && namespace && !this._namespace) {
                url = UrlHelpers.join(KubernetesAPI.masterApiUrl(), KubernetesAPI.prefixForKind(this._kind), 'namespaces', namespace, this._kind);
            }
            if (useName) {
                url = UrlHelpers.join(url, name);
            }
            return url;
        };
        CollectionImpl.prototype.watch = function (cb, labelSelector) {
            var _this = this;
            if (labelSelector) {
                cb = this.addLabelFilter(cb, labelSelector);
            }
            if (this.list.initialized) {
                setTimeout(function () {
                    cb(_this.list.objects);
                }, 10);
            }
            this.list.events.on(KubernetesAPI.WatchActions.ANY, cb);
            return cb;
        };
        ;
        CollectionImpl.prototype.unwatch = function (cb) {
            this.list.events.off(KubernetesAPI.WatchActions.ANY, cb);
        };
        CollectionImpl.prototype.put = function (item, cb, error) {
            var method = 'PUT';
            var url = this.restUrlFor(item);
            if (!this.list.hasNamedItem(item)) {
                method = 'POST';
                url = this.restUrlFor(item, false);
            }
            else {
                var resourceVersion = item.metadata.resourceVersion;
                if (!resourceVersion) {
                    var current = this.list.getNamedItem(KubernetesAPI.getName(item));
                    resourceVersion = current.metadata.resourceVersion;
                    item.metadata.resourceVersion = resourceVersion;
                }
            }
            if (!url) {
                return;
            }
            switch (item.metadata.kind) {
                case 'Service':
                    if (item.spec.clusterIP === '') {
                        delete item.spec.clusterIP;
                    }
                    break;
                default:
            }
            $.ajax(url, {
                method: method,
                contentType: 'application/json',
                data: angular.toJson(item),
                processData: false,
                success: function (data) {
                    try {
                        var response = angular.fromJson(data);
                        cb(response);
                    }
                    catch (err) {
                        cb({});
                    }
                },
                error: function (jqXHR, text, status) {
                    var err = KubernetesAPI.getErrorObject(jqXHR);
                    log.debug("Failed to create or update, error: ", err);
                    if (error) {
                        error(err);
                    }
                },
                beforeSend: beforeSend
            });
        };
        ;
        CollectionImpl.prototype.delete = function (item, cb, error) {
            var _this = this;
            var url = this.restUrlFor(item);
            if (!url) {
                return;
            }
            this.list.deleted(item);
            this.list.triggerChangedEvent();
            $.ajax(url, {
                method: 'DELETE',
                success: function (data) {
                    try {
                        var response = angular.fromJson(data);
                        cb(response);
                    }
                    catch (err) {
                        cb({});
                    }
                },
                error: function (jqXHR, text, status) {
                    var err = KubernetesAPI.getErrorObject(jqXHR);
                    log.debug("Failed to delete, error: ", err);
                    _this.list.added(item);
                    _this.list.triggerChangedEvent();
                    if (error) {
                        error(err);
                    }
                },
                beforeSend: beforeSend
            });
        };
        ;
        return CollectionImpl;
    }());
    KubernetesAPI.CollectionImpl = CollectionImpl;
    ;
    var ClientInstance = (function () {
        function ClientInstance(_collection) {
            this._refCount = 0;
            this._collection = undefined;
            this._collection = _collection;
        }
        ;
        Object.defineProperty(ClientInstance.prototype, "refCount", {
            get: function () {
                return this._refCount;
            },
            enumerable: true,
            configurable: true
        });
        ClientInstance.prototype.addRef = function () {
            this._refCount = this._refCount + 1;
        };
        ;
        ClientInstance.prototype.removeRef = function () {
            this._refCount = this._refCount - 1;
        };
        ;
        Object.defineProperty(ClientInstance.prototype, "collection", {
            get: function () {
                return this._collection;
            },
            enumerable: true,
            configurable: true
        });
        ;
        ClientInstance.prototype.disposable = function () {
            return this._refCount <= 0;
        };
        ;
        ClientInstance.prototype.destroy = function () {
            this._collection.destroy();
            delete this._collection;
        };
        return ClientInstance;
    }());
    ;
    var K8SClientFactoryImpl = (function () {
        function K8SClientFactoryImpl() {
            this.log = Logger.get('k8s-client-factory');
            this._clients = {};
        }
        K8SClientFactoryImpl.prototype.create = function (options, namespace) {
            var kind = options;
            var namespace = namespace;
            var _options = options;
            if (angular.isObject(options)) {
                kind = options.kind;
                namespace = options.namespace || namespace;
            }
            else {
                _options = {
                    kind: kind,
                    namespace: namespace
                };
            }
            var key = getKey(kind, namespace);
            if (key in this._clients) {
                var client = this._clients[key];
                client.addRef();
                this.log.debug("Returning existing client for key: ", key, " refcount is: ", client.refCount);
                return client.collection;
            }
            else {
                var client = new ClientInstance(new CollectionImpl(_options));
                client.addRef();
                this.log.debug("Creating new client for key: ", key, " refcount is: ", client.refCount);
                this._clients[key] = client;
                return client.collection;
            }
        };
        K8SClientFactoryImpl.prototype.destroy = function (client) {
            var handles = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                handles[_i - 1] = arguments[_i];
            }
            _.forEach(handles, function (handle) {
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
        };
        return K8SClientFactoryImpl;
    }());
    KubernetesAPI.K8SClientFactory = new K8SClientFactoryImpl();
    KubernetesAPI._module.factory('K8SClientFactory', function () {
        return KubernetesAPI.K8SClientFactory;
    });
    var NO_KIND = "No kind in supplied options";
    var NO_OBJECT = "No object in supplied options";
    var NO_OBJECTS = "No objects in list object";
    function get(options) {
        if (!options.kind) {
            throw NO_KIND;
        }
        var client = KubernetesAPI.K8SClientFactory.create(options);
        var success = function (data) {
            if (options.success) {
                try {
                    options.success(data);
                }
                catch (err) {
                    log.debug("Supplied success callback threw error: ", err);
                }
            }
            KubernetesAPI.K8SClientFactory.destroy(client);
        };
        client.get(success, options.labelSelector);
        client.connect();
    }
    KubernetesAPI.get = get;
    function handleListAction(options, action) {
        if (!options.object.objects) {
            throw NO_OBJECTS;
        }
        var answer = {};
        var objects = _.cloneDeep(options.object.objects);
        function addResult(id, data) {
            answer[id] = data;
            next();
        }
        ;
        function next() {
            if (objects.length === 0) {
                log.debug("processed all objects, returning status");
                try {
                    if (options.success) {
                        options.success(answer);
                    }
                }
                catch (err) {
                    log.debug("Supplied success callback threw error: ", err);
                }
                return;
            }
            var object = objects.shift();
            log.debug("Processing object: ", KubernetesAPI.getName(object));
            var success = function (data) {
                addResult(KubernetesAPI.fullName(object), data);
            };
            var error = function (data) {
                addResult(KubernetesAPI.fullName(object), data);
            };
            action(object, success, error);
        }
        next();
    }
    function normalizeOptions(options) {
        log.debug("Normalizing supplied options: ", options);
        if (options.metadata || KubernetesAPI.getKind(options) === KubernetesAPI.toKindName(KubernetesAPI.WatchTypes.LIST)) {
            var object = options;
            options = {
                object: object
            };
            if (object.objects) {
                options.kind = KubernetesAPI.toKindName(KubernetesAPI.WatchTypes.LIST);
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
    function del(options) {
        options = normalizeOptions(options);
        if (options.object.kind === KubernetesAPI.toKindName(KubernetesAPI.WatchTypes.LIST)) {
            handleListAction(options, function (object, success, error) {
                del({
                    object: object,
                    success: success,
                    error: error
                });
            });
            return;
        }
        options.kind = options.kind || KubernetesAPI.toCollectionName(options.object);
        options.namespace = options.namespace || KubernetesAPI.getNamespace(options.object);
        var client = KubernetesAPI.K8SClientFactory.create(options);
        var success = function (data) {
            if (options.success) {
                try {
                    options.success(data);
                }
                catch (err) {
                    log.debug("Supplied success callback threw error: ", err);
                }
            }
            KubernetesAPI.K8SClientFactory.destroy(client);
        };
        var error = function (err) {
            if (options.error) {
                try {
                    options.error(err);
                }
                catch (err) {
                    log.debug("Supplied error callback threw error: ", err);
                }
            }
            KubernetesAPI.K8SClientFactory.destroy(client);
        };
        client.delete(options.object, success, error);
    }
    KubernetesAPI.del = del;
    function put(options) {
        options = normalizeOptions(options);
        if (options.object.kind === KubernetesAPI.toKindName(KubernetesAPI.WatchTypes.LIST)) {
            handleListAction(options, function (object, success, error) {
                put({
                    object: object,
                    success: success,
                    error: error
                });
            });
            return;
        }
        options.kind = options.kind || KubernetesAPI.toCollectionName(options.object);
        options.namespace = options.namespace || KubernetesAPI.getNamespace(options.object);
        var client = KubernetesAPI.K8SClientFactory.create(options);
        client.get(function (objects) {
            var success = function (data) {
                if (options.success) {
                    try {
                        options.success(data);
                    }
                    catch (err) {
                        log.debug("Supplied success callback threw error: ", err);
                    }
                }
                KubernetesAPI.K8SClientFactory.destroy(client);
            };
            var error = function (err) {
                if (options.error) {
                    try {
                        options.error(err);
                    }
                    catch (err) {
                        log.debug("Supplied error callback threw error: ", err);
                    }
                }
                KubernetesAPI.K8SClientFactory.destroy(client);
            };
            client.put(options.object, success, error);
        });
        client.connect();
    }
    KubernetesAPI.put = put;
    function watch(options) {
        if (!options.kind) {
            throw NO_KIND;
        }
        var client = KubernetesAPI.K8SClientFactory.create(options);
        var handle = client.watch(options.success, options.labelSelector);
        var self = {
            client: client,
            handle: handle,
            disconnect: function () {
                KubernetesAPI.K8SClientFactory.destroy(self.client, self.handle);
            }
        };
        client.connect();
        return self;
    }
    KubernetesAPI.watch = watch;
})(KubernetesAPI || (KubernetesAPI = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0F5S25CO0FBektELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3JDO1FBQUE7UUE4QkEsQ0FBQztRQTdCRSxzQkFBa0Isa0JBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RCxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isd0JBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNoRSxzQkFBa0IsbUJBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNw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Q0FBQztRQUNELElBQUksTUFBTSxHQUFnQiw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsOEJBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBZmUsbUJBQUssUUFlcEIsQ0FBQTtBQUVILENBQUMsRUE1NUJNLGFBQWEsS0FBYixhQUFhLFFBNDVCbkIiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwibGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVzb3VyY2VxdW90YXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJvYXV0aGNsaWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZWFjY291bnRzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW10YWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG4gICAgLy9wdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGFlbW9uc2V0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRVZFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLk5PREVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFQ1JFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuSU1BR0VTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U09wdGlvbnMge1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xuICAgIGxhYmVsU2VsZWN0b3I/OiBMYWJlbE1hcDtcbiAgICBvYmplY3Q/OiBhbnk7XG4gICAgc3VjY2Vzcz86IChvYmpzOmFueVtdKSA9PiB2b2lkO1xuICAgIGVycm9yPzogKGVycjphbnkpID0+IHZvaWQ7XG4gICAgdXJsRnVuY3Rpb24/OiAob3B0aW9uczpLOFNPcHRpb25zKSA9PiBzdHJpbmc7XG4gIH1cblx0XG5cdGV4cG9ydCBjbGFzcyBXYXRjaEFjdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElOSVQoKTpzdHJpbmcgeyByZXR1cm4gXCJJTklUXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFEREVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiQURERURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBNT0RJRklFRCgpOnN0cmluZyB7IHJldHVybiBcIk1PRElGSUVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfTtcblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBPYmplY3RNYXAge1xuXHRcdFt1aWQ6c3RyaW5nXTogYW55O1x0XHRcblx0fVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFiZWxNYXAge1xuICAgIFtuYW1lOnN0cmluZ106IHN0cmluZztcbiAgfVxuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uIHtcbiAgICB3c1VSTDpzdHJpbmc7XG4gICAgcmVzdFVSTDpzdHJpbmc7XG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gICAga2luZDogc3RyaW5nO1xuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgICBjb25uZWN0KCk7XG4gICAgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6dm9pZDtcbiAgICB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkO1xuICAgIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGdldEtleSgpOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTQ2xpZW50RmFjdG9yeSB7XG4gICAgY3JlYXRlKGtpbmQ6YW55LCBuYW1lc3BhY2U/OiBzdHJpbmcpOkNvbGxlY3Rpb247XG4gICAgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pOnZvaWQ7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxyXG5cclxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xyXG5cclxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xyXG5cclxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XHJcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcclxuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xyXG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcclxuXHJcbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcclxuXHJcbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcclxuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xyXG5cclxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXHJcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xyXG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcclxuXHJcbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XHJcbiAgZXhwb3J0IHZhciBPU19QUkVGSVggPSAnb2FwaSc7XHJcblxyXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcclxuICBleHBvcnQgdmFyIE9TX0FQSV9WRVJTSU9OID0gJ3YxJztcclxuXHJcbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcclxuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcclxuXHJcbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcclxuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcclxuICBleHBvcnQgdmFyIGFwcFN1ZmZpeCA9IFwiLmFwcFwiO1xyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGRlY2xhcmUgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeTtcblxuICBleHBvcnQgZnVuY3Rpb24gYXBpUHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBPU19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQ6c3RyaW5nKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTOlxuICAgICAgLy9jYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVM6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdHMgdGhlIGs4cy9vcGVuc2hpZnQgZXJyb3IgcmVzcG9uc2UgaWYgcHJlc2VudFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgZWl0aGVyIHNlY3VyZS9pbnNlY3VyZSB3ZWJzb2NrZXQgcHJvdG9jb2wgYmFzZWQgb24gdGhlIG1hc3RlciBVUkkgcHJvdG9jb2xcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBfLnRyaW1SaWdodChfLmNhcGl0YWxpemUoa2luZCksICdzJyk7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICByZXR1cm4ga2luZC50b0xvd2VyQ2FzZSgpICsgJ3MnO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgdmFyIGxlZnRVSUQgPSBnZXRVSUQobGVmdCk7XG4gICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICBpZiAoIWxlZnRVSUQgJiYgIXJpZ2h0VUlEKSB7XG4gICAgICByZXR1cm4gYW5ndWxhci50b0pzb24obGVmdCkgPT09IGFuZ3VsYXIudG9Kc29uKHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KC4uLm9iamVjdHM6YW55W10pIHtcbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgb2JqZWN0czogW11cbiAgICB9XG4gICAgXy5mb3JFYWNoKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBfLmZvckVhY2gob2JqZWN0LCAobykgPT4ge1xuICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9iamVjdCBzdWl0YWJsZSBmb3IgZGVsZXRlL2RlbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWxsb3dPYmplY3QobmFtZTpzdHJpbmcsIGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGNvbGxlY3Rpb24gYnkgbGFiZWxcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlMYWJlbChvYmplY3RzOkFycmF5PGFueT4sIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICg8YW55Pl8pLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGdldExhYmVscyhvYmplY3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XHJcbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xyXG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XHJcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcclxuXHJcbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcclxuXHJcbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xyXG5cclxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcclxuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcclxuICAgIGRlcGVuZHM6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXHJcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xyXG4gICAgICBLOFNfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ2s4cycsICdwcmVmaXgnXSkgfHwgSzhTX1BSRUZJWCwgJy8nKTtcclxuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xyXG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcclxuICAgIHRhc2s6IChuZXh0KSA9PiB7XHJcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcclxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XHJcbiAgICAgICAgICBsb2cuZGVidWcoXCJGZXRjaGVkIE9BdXRoIGNvbmZpZzogXCIsIGNvbmZpZyk7XHJcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xyXG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xyXG4gICAgICAgICAgICB2YXIgbWFzdGVyVXJpID0gbmV3IFVSSSgpLmhvc3QoY29uZmlnLmFwaS5rOHMuaG9zdFBvcnQpLnBhdGgoXCJcIikucXVlcnkoXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xyXG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XHJcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XHJcbiAgICAgICAgICBLZXljbG9ha0NvbmZpZyA9IGNvbmZpZy5rZXljbG9haztcclxuXHJcbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gYXV0aC5tYXN0ZXJfdXJpIG5vIGxvbmdlciB1c2VkIHJpZ2h0P1xyXG4gICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XHJcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XHJcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBpZHggKz0gMztcclxuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCghS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgfHwgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPT09IFwiL1wiKSAmJiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XHJcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxyXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxyXG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlmIChocmVmKSB7XHJcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXN0ZXIpIHtcclxuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgS3ViZXJuZXRlcyBjb25maWc6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCB0cnVlKTtcclxuXHJcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xyXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XHJcblxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVTZW5kKHJlcXVlc3QpIHtcbiAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuUFJPSkVDVFMsIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdmFyIGxvZ2dlck5hbWUgPSAnazhzLW9iamVjdHMvJyArIChuYW1lc3BhY2UgPyBVcmxIZWxwZXJzLmpvaW4obmFtZXNwYWNlLCBraW5kKSA6IGtpbmQpO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHZhciBpbml0aWFsaXplZCA9IHRoaXMuaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvYmplY3RzKG9ianM6YW55W10pIHtcbiAgICAgIHRoaXMuX29iamVjdHMubGVuZ3RoID0gMDtcbiAgICAgIF8uZm9yRWFjaChvYmpzLCAob2JqKSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmFtZWRJdGVtKGl0ZW06YW55KSB7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lZEl0ZW0obmFtZTpzdHJpbmcpIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyAvLyBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KGhhbmRsZXIuY29sbGVjdGlvbi5raW5kLCBoYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlKSk7XG4gICAgICB0aGlzLl9sYXN0RmV0Y2ggPSB0aGlzLmhhbmRsZXIubGlzdC5vYmplY3RzO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRvR2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpdGVtcyAgPSAoZGF0YSAmJiBkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY29tcGFyZSh0aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLl9sYXN0RmV0Y2ggPSBpdGVtcztcbiAgICAgICAgICBfLmZvckluKHJlc3VsdCwgKGl0ZW1zOmFueVtdLCBhY3Rpb246c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfLmZvckVhY2goaXRlbXMsIChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IF8uY2xvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IC8vTG9nZ2VyLmdldCgnazhzLW9iamVjdHMvJyArIGdldEtleShfc2VsZi5raW5kLCBfc2VsZi5uYW1lc3BhY2UpKTtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdCB8fCA8T2JqZWN0TGlzdD4geyBvYmplY3RzOiBbXSB9O1xuICAgIH1cblxuICAgIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlciwgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHdzW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIG9ubWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0ZWQ6IFwiLCBldmVudCk7XG4gICAgfTtcblxuICAgIG9uY2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJldHJpZXMgPCAzICYmIHRoaXMuY29ubmVjdFRpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5jb25uZWN0VGltZSkgPiA1MDAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXRyeWluZyBhZnRlciBjb25uZWN0aW9uIGNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBkaXNjb25uZWN0ZWQsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHNlbGYsIHdzKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBmb3IgXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBjbG9zZWQsIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJTd2l0Y2hpbmcgdG8gcG9sbGluZyBtb2RlXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25lcnJvcihldmVudCkge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWIgc29ja2V0IGVuY291bnRlcmVkIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHx8ICh0aGlzLnBvbGxlciAmJiB0aGlzLnBvbGxlci5jb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNvY2tldCAmJiAhdGhpcy5wb2xsZXIpIHtcbiAgICAgICAgaWYgKF8uYW55KHBvbGxpbmdPbmx5LCAoa2luZCkgPT4ga2luZCA9PT0gdGhpcy5zZWxmLmtpbmQpKSB7XG4gICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIlVzaW5nIHBvbGxpbmcgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChvcHRpb25zLmtpbmQsIG9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0IF9yZXN0VXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd3NVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKGFuc3dlcikucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl93c1VybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3RVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3Jlc3RVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKTtcbiAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgIGlmICh0aGlzLl9raW5kICE9PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMgJiYgbmFtZXNwYWNlICYmICF0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpLCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZCB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5ldmVudHMub24oV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3VzdG9tIGNoZWNrcyBmb3Igc3BlY2lmaWMgY2FzZXNcbiAgICAgIHN3aXRjaCAoaXRlbS5tZXRhZGF0YS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ1NlcnZpY2UnOlxuICAgICAgICAgIGlmIChpdGVtLnNwZWMuY2x1c3RlcklQID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3BlYy5jbHVzdGVySVA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QuZGVsZXRlZChpdGVtKTtcbiAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAkLmFqYXgodXJsLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShvcHRpb25zOiBhbnksIG5hbWVzcGFjZT86IGFueSk6Q29sbGVjdGlvbiB7XG4gICAgICB2YXIga2luZCA9IG9wdGlvbnM7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIGtpbmQgPSBvcHRpb25zLmtpbmQ7XG4gICAgICAgIG5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG5hbWVzcGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vcHRpb25zID0ge1xuICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjLnJlbW92ZVJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgaWYgKGMuZGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIGNsaWVudC5nZXQoKG9iamVjdHMpID0+IHtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIGNsaWVudC5wdXQob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9KTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdhdGNoKG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gPENvbGxlY3Rpb24+IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBoYW5kbGUgPSBjbGllbnQud2F0Y2gob3B0aW9ucy5zdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIHZhciBzZWxmID0ge1xuICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGRpc2Nvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KHNlbGYuY2xpZW50LCBzZWxmLmhhbmRsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
