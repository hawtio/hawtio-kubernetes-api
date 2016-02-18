

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
    })();
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
    })();
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
    })();
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
    })();
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
            case KubernetesAPI.WatchTypes.TEMPLATES:
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
                break;
            case KubernetesAPI.OS_API_VERSION:
                return openshiftApiPrefix();
                break;
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
                break;
            case KubernetesAPI.OS_PREFIX:
                return openshiftApiPrefix();
                break;
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
    })();
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
            log.warn("This: ", this);
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
    })();
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
    })();
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
    })();
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
    })();
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
    })();
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
            return;
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
            return;
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
            return;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5MSVNUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FVkVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VDUkVUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5JTklUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQU5ZIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQURERUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5NT0RJRklFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkRFTEVURUQiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkubmFtZXNwYWNlZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5hcGlGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5hcGlWZXJzaW9uRm9yS2luZCIsIkt1YmVybmV0ZXNBUEkucHJlZml4Rm9yS2luZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVVybCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5nZXRFcnJvck9iamVjdCIsIkt1YmVybmV0ZXNBUEkud3NTY2hlbWUiLCJLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUiLCJLdWJlcm5ldGVzQVBJLnRvQ29sbGVjdGlvbk5hbWUiLCJLdWJlcm5ldGVzQVBJLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5lcXVhbHMiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZUxpc3QiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZVNoYWxsb3dPYmplY3QiLCJLdWJlcm5ldGVzQVBJLmZpbHRlckJ5TGFiZWwiLCJLdWJlcm5ldGVzQVBJLmZ1bGxOYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRVSUQiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuZ2V0TGFiZWxzIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRLaW5kIiwiS3ViZXJuZXRlc0FQSS5nZXRTZWxlY3RvciIsIkt1YmVybmV0ZXNBUEkuZ2V0SG9zdCIsIkt1YmVybmV0ZXNBUEkuZ2V0U3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRQb3J0cyIsIkt1YmVybmV0ZXNBUEkuZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCJLdWJlcm5ldGVzQVBJLmxhYmVsc1RvU3RyaW5nIiwiS3ViZXJuZXRlc0FQSS5pc1J1bm5pbmciLCJLdWJlcm5ldGVzQVBJLnNlbGVjdG9yTWF0Y2hlcyIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLmJlZm9yZVNlbmQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmdldE5hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5jb21wYXJlIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmRvR2V0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuc3RhcnQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdG9wIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5saXN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLnNldEhhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ubWVzc2FnZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ub3BlbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbmVycm9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuX3Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLl93c1VybCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53c1VSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwubmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5raW5kIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmFkZExhYmVsRmlsdGVyIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnJlc3RVcmxGb3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC51bndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5wdXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlbGV0ZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZWZDb3VudCIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuYWRkUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZW1vdmVSZWYiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbGxlY3Rpb24iLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRpc3Bvc2FibGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY3JlYXRlIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5nZXQiLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24iLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24uYWRkUmVzdWx0IiwiS3ViZXJuZXRlc0FQSS5oYW5kbGVMaXN0QWN0aW9uLm5leHQiLCJLdWJlcm5ldGVzQVBJLm5vcm1hbGl6ZU9wdGlvbnMiLCJLdWJlcm5ldGVzQVBJLmRlbCIsIkt1YmVybmV0ZXNBUEkucHV0IiwiS3ViZXJuZXRlc0FQSS53YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0dDLENBQUM7QUFPRCxDQUFDO0FBRUYsSUFBTyxhQUFhLENBd0tuQjtBQXhLRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRXBCQTtRQUFBQztRQUVBQyxDQUFDQTtRQURDRCxzQkFBSUEseUNBQXFCQTtpQkFBekJBLGNBQXFDRSxNQUFNQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDdkVBLGFBQUNBO0lBQURBLENBRkFELEFBRUNDLElBQUFEO0lBRllBLG9CQUFNQSxTQUVsQkEsQ0FBQUE7SUFFVUEsdUJBQVNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0lBOENyQ0E7UUFBQUk7UUE2QkFDLENBQUNBO1FBNUJFRCxzQkFBa0JBLGtCQUFJQTtpQkFBdEJBLGNBQWtDRSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFGO1FBQ3BEQSxzQkFBa0JBLHVCQUFTQTtpQkFBM0JBLGNBQXVDRyxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFIO1FBQzVEQSxzQkFBa0JBLG9CQUFNQTtpQkFBeEJBLGNBQW9DSSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFKO1FBQ3BEQSxzQkFBa0JBLHdCQUFVQTtpQkFBNUJBLGNBQXdDSyxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFMO1FBQ2hFQSxzQkFBa0JBLG1CQUFLQTtpQkFBdkJBLGNBQW1DTSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFOO1FBQ3BEQSxzQkFBa0JBLGdDQUFrQkE7aUJBQXBDQSxjQUFnRE8sTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFQO1FBQzdF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QUNBLENBQUNBO1lBQ2xCQSxNQUFNQSxPQUFPQSxDQUFDQTtZQUNkQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxNQUFNQSxHQUFnQkEsOEJBQWdCQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUMzREEsSUFBSUEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLElBQUlBLElBQUlBLEdBQUdBO1lBQ1RBLE1BQU1BLEVBQUVBLE1BQU1BO1lBQ2RBLE1BQU1BLEVBQUVBLE1BQU1BO1lBQ2RBLFVBQVVBLEVBQUVBO2dCQUNWQSw4QkFBZ0JBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQTtTQUNGQSxDQUFDQTtRQUNGQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNqQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFoQmV0SixtQkFBS0EsUUFnQnBCQSxDQUFBQTtBQUVIQSxDQUFDQSxFQXQ1Qk0sYUFBYSxLQUFiLGFBQWEsUUFzNUJuQiIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy9kZWZzIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXRhZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lc3BhY2VkVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGs4c1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkVORFBPSU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FVkVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIC8vV2F0Y2hUeXBlcy5JTUFHRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgbGFiZWxTZWxlY3Rvcj86IExhYmVsTWFwO1xuICAgIG9iamVjdD86IGFueTtcbiAgICBzdWNjZXNzPzogKG9ianM6YW55W10pID0+IHZvaWQ7XG4gICAgZXJyb3I/OiAoZXJyOmFueSkgPT4gdm9pZDtcbiAgICB1cmxGdW5jdGlvbj86IChvcHRpb25zOks4U09wdGlvbnMpID0+IHN0cmluZztcbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSU5JVCgpOnN0cmluZyB7IHJldHVybiBcIklOSVRcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9O1xuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBMYWJlbE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTogc3RyaW5nO1xuICB9XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb24ge1xuICAgIHdzVVJMOnN0cmluZztcbiAgICByZXN0VVJMOnN0cmluZztcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3QoKTtcbiAgICBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTp2b2lkO1xuICAgIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQ7XG4gICAgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCk6dm9pZDtcbiAgICBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZ2V0S2V5KCk6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNDbGllbnRGYWN0b3J5IHtcbiAgICBjcmVhdGUoa2luZDphbnksIG5hbWVzcGFjZT86IHN0cmluZyk6Q29sbGVjdGlvbjtcbiAgICBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPik6dm9pZDtcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XHJcblxyXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XHJcblxyXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XHJcblxyXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcclxuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xyXG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XHJcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xyXG5cclxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xyXG5cclxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xyXG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XHJcblxyXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcclxuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XHJcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xyXG5cclxuICBleHBvcnQgdmFyIEs4U19QUkVGSVggPSAnYXBpJztcclxuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcclxuXHJcbiAgZXhwb3J0IHZhciBLOFNfQVBJX1ZFUlNJT04gPSAndjEnO1xyXG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xyXG5cclxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xyXG4gIGV4cG9ydCB2YXIgZGVmYXVsdE9TQXBpVmVyc2lvbiA9IE9TX0FQSV9WRVJTSU9OO1xyXG5cclxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xyXG4gIGV4cG9ydCB2YXIgZGVmYXVsdE5hbWVzcGFjZSA9IFwiZGVmYXVsdFwiO1xyXG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZGVjbGFyZSB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZWQoa2luZDpzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5PREVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVM6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT1NfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3RzIHRoZSBrOHMvb3BlbnNoaWZ0IGVycm9yIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck9iamVjdChqcVhIUikge1xuICAgIHZhciBhbnN3ZXI6YW55ID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgIHRyeSB7XG4gICAgICBhbnN3ZXIgPSBhbmd1bGFyLmZyb21Kc29uKGFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBub3RoaW5nIHRvIGRvLi4uXG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIGVpdGhlciBzZWN1cmUvaW5zZWN1cmUgd2Vic29ja2V0IHByb3RvY29sIGJhc2VkIG9uIHRoZSBtYXN0ZXIgVVJJIHByb3RvY29sXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NTY2hlbWUodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICBpZiAoXy5zdGFydHNXaXRoKHByb3RvY29sLCAnaHR0cHMnKSkge1xuICAgICAgcmV0dXJuICd3c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3dzJztcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBzaW5nbGUgJ2tpbmQnIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBjb2xsZWN0aW9uIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0tpbmROYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIHJldHVybiBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICByZXR1cm4gXy50cmltUmlnaHQoXy5jYXBpdGFsaXplKGtpbmQpLCAncycpO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgY29sbGVjdGlvbiBraW5kIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBzaW5ndWxhciBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9Db2xsZWN0aW9uTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICBraW5kID0gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgaWYgKCFraW5kKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUT0RPIHRoaXMgdHJpbVJpZ2h0IHdvcmtzIGZvciBub3csIGJ1dCBtaWdodCBub3Qgd29yayBhdCBzb21lIHBvaW50XG4gICAgcmV0dXJuIGtpbmQudG9Mb3dlckNhc2UoKSArICdzJztcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHdlYnNvY2tldCBVUkwgZm9yIHRoZSBzdXBwbGllZCBVUkxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1VybCh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gd3NTY2hlbWUodXJsKTtcbiAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gIH1cblxuICAvKlxuICAgKiBDb21wYXJlIHR3byBrOHMgb2JqZWN0cyBiYXNlZCBvbiB0aGVpciBVSURcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpOmJvb2xlYW4ge1xuICAgIHZhciBsZWZ0VUlEID0gZ2V0VUlEKGxlZnQpO1xuICAgIHZhciByaWdodFVJRCA9IGdldFVJRChyaWdodCk7XG4gICAgaWYgKCFsZWZ0VUlEICYmICFyaWdodFVJRCkge1xuICAgICAgcmV0dXJuIGFuZ3VsYXIudG9Kc29uKGxlZnQpID09PSBhbmd1bGFyLnRvSnNvbihyaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0VUlEID09PSByaWdodFVJRDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBLdWJlcm5ldGVzIG9iamVjdCBoZWxwZXJzXG4gICAqXG4gICAqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGlzdCBvZiBrdWJlcm5ldGVzIG9iamVjdHMgc3VpdGFibGUgZm9yIHBvc3RpbmcgYSBidW5jaCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCguLi5vYmplY3RzOmFueVtdKSB7XG4gICAgdmFyIGFuc3dlciA9IHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSxcbiAgICAgIG9iamVjdHM6IFtdXG4gICAgfVxuICAgIF8uZm9yRWFjaChvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgXy5mb3JFYWNoKG9iamVjdCwgKG8pID0+IHtcbiAgICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG8pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvYmplY3Qgc3VpdGFibGUgZm9yIGRlbGV0ZS9kZWxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFsbG93T2JqZWN0KG5hbWU6c3RyaW5nLCBraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShraW5kKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYSBjb2xsZWN0aW9uIGJ5IGxhYmVsXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5TGFiZWwob2JqZWN0czpBcnJheTxhbnk+LCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoPGFueT5fKS5tYXRjaGVzKGxhYmVsU2VsZWN0b3IpO1xuICAgIHJldHVybiBfLmZpbHRlcihvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhnZXRMYWJlbHMob2JqZWN0KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHNjb3BlZCBuYW1lIHdpdGggdGhlIG5hbWVzcGFjZS9raW5kLCBzdWl0YWJsZSB0byB1c2UgYXMgYSBrZXkgaW4gbWFwc1xuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmdWxsTmFtZShlbnRpdHkpIHtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbigobmFtZXNwYWNlID8gbmFtZXNwYWNlIDogXCJcIiksIGtpbmQsIG5hbWUpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxyXG5kZWNsYXJlIHZhciBPU09BdXRoQ29uZmlnOmFueTtcclxuZGVjbGFyZSB2YXIgR29vZ2xlT0F1dGhDb25maWc6YW55O1xyXG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XHJcblxyXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XHJcblxyXG4gIGV4cG9ydCB2YXIgX21vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKHBsdWdpbk5hbWUsIFtdKTtcclxuXHJcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XHJcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUNvbmZpZycsXHJcbiAgICBkZXBlbmRzOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxyXG4gICAgdGFzazogKG5leHQpID0+IHtcclxuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XHJcbiAgICAgIE9TX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdvcGVuc2hpZnQnLCAncHJlZml4J10pIHx8IE9TX1BSRUZJWCwgJy8nKTtcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcclxuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXHJcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xyXG4gICAgICAkLmdldFNjcmlwdCgnb3Njb25zb2xlL2NvbmZpZy5qcycpXHJcbiAgICAgICAgLmRvbmUoKHNjcmlwdCwgdGV4dFN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xyXG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xyXG4gICAgICAgICAgdmFyIG1hc3RlcjpzdHJpbmcgPSBjb25maWcubWFzdGVyX3VyaTtcclxuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcclxuICAgICAgICAgICAgdmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcclxuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hc3RlciA9IG1hc3RlclVyaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIE9TT0F1dGhDb25maWcgPSBjb25maWcub3BlbnNoaWZ0O1xyXG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xyXG4gICAgICAgICAgS2V5Y2xvYWtDb25maWcgPSBjb25maWcua2V5Y2xvYWs7XHJcblxyXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xyXG4gICAgICAgICAgICAvLyBUT0RPIGF1dGgubWFzdGVyX3VyaSBubyBsb25nZXIgdXNlZCByaWdodD9cclxuICAgICAgICAgICAgLy8gbWFzdGVyID0gT1NPQXV0aENvbmZpZy5tYXN0ZXJfdXJpO1xyXG4gICAgICAgICAgICBpZiAoIW1hc3Rlcikge1xyXG4gICAgICAgICAgICAgIHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xyXG4gICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgaWR4ICs9IDM7XHJcbiAgICAgICAgICAgICAgICAgIGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcclxuICAgICAgICAgICAgLy8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxyXG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcclxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcclxuICAgICAgICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICBpZiAoaHJlZikge1xyXG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFzdGVyKSB7XHJcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIEt1YmVybmV0ZXMgY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIG5leHQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgdHJ1ZSk7XHJcblxyXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcclxuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG5cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlU2VuZChyZXF1ZXN0KSB7XG4gICAgdmFyIHRva2VuID0gSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwb2xsaW5nT25seSA9IFtXYXRjaFR5cGVzLlBST0pFQ1RTLCBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDc1LCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHZhciBsb2dnZXJOYW1lID0gJ2s4cy1vYmplY3RzLycgKyAobmFtZXNwYWNlID8gVXJsSGVscGVycy5qb2luKG5hbWVzcGFjZSwga2luZCkgOiBraW5kKTtcbiAgICAgIHRoaXMubG9nID0gbG9nO1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJvYmplY3RzIGNoYW5nZWQ6IFwiLCBvYmplY3RzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZWQgPSB0aGlzLmluaXRpYWxpemVkO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5JTklULCB0aGlzLl9vYmplY3RzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb2JqZWN0cyhvYmpzOmFueVtdKSB7XG4gICAgICB0aGlzLl9vYmplY3RzLmxlbmd0aCA9IDA7XG4gICAgICBfLmZvckVhY2gob2JqcywgKG9iaikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZWRJdGVtKG5hbWU6c3RyaW5nKSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BRERFRCwgb2JqZWN0KTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgbW9kaWZpZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgdmFyIGRlbGV0ZWQgPSBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5ERUxFVEVELCBkZWxldGVkWzBdKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBpbnRlcmZhY2UgQ29tcGFyZVJlc3VsdCB7XG4gICAgYWRkZWQ6QXJyYXk8YW55PjtcbiAgICBtb2RpZmllZDpBcnJheTxhbnk+O1xuICAgIGRlbGV0ZWQ6QXJyYXk8YW55PjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmUob2xkOkFycmF5PGFueT4sIF9uZXc6QXJyYXk8YW55Pik6Q29tcGFyZVJlc3VsdCB7XG4gICAgdmFyIGFuc3dlciA9IDxDb21wYXJlUmVzdWx0PiB7XG4gICAgICBhZGRlZDogW10sXG4gICAgICBtb2RpZmllZDogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH07XG4gICAgXy5mb3JFYWNoKF9uZXcsIChuZXdPYmopID0+IHtcbiAgICAgIHZhciBvbGRPYmogPSBfLmZpbmQob2xkLCAobykgPT4gZXF1YWxzKG8sIG5ld09iaikpO1xuICAgICAgaWYgKCFvbGRPYmopIHtcbiAgICAgICAgYW5zd2VyLmFkZGVkLnB1c2gobmV3T2JqKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIudG9Kc29uKG9sZE9iaikgIT09IGFuZ3VsYXIudG9Kc29uKG5ld09iaikpIHtcbiAgICAgICAgYW5zd2VyLm1vZGlmaWVkLnB1c2gobmV3T2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfLmZvckVhY2gob2xkLCAob2xkT2JqKSA9PiB7XG4gICAgICB2YXIgbmV3T2JqID0gXy5maW5kKF9uZXcsIChvKSA9PiBlcXVhbHMobywgb2xkT2JqKSk7XG4gICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICBhbnN3ZXIuZGVsZXRlZC5wdXNoKG9sZE9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIE1hbmFnZXMgcG9sbGluZyB0aGUgc2VydmVyIGZvciBvYmplY3RzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB3ZWJzb2NrZXQgY29ubmVjdGlvbnNcbiAgICovXG4gIGNsYXNzIE9iamVjdFBvbGxlciB7XG5cbiAgICBwcml2YXRlIF9sYXN0RmV0Y2ggPSA8QXJyYXk8YW55Pj4gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSA1MDAwO1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdENhbmNlbDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RVUkw6c3RyaW5nLCBwcml2YXRlIGhhbmRsZXI6V1NIYW5kbGVyKSB7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgLy8gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMvJyArIGdldEtleShoYW5kbGVyLmNvbGxlY3Rpb24ua2luZCwgaGFuZGxlci5jb2xsZWN0aW9uLm5hbWVzcGFjZSkpO1xuICAgICAgdGhpcy5fbGFzdEZldGNoID0gdGhpcy5oYW5kbGVyLmxpc3Qub2JqZWN0cztcbiAgICAgIGxvZy53YXJuKFwiVGhpczogXCIsIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRvR2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpdGVtcyAgPSAoZGF0YSAmJiBkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY29tcGFyZSh0aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLl9sYXN0RmV0Y2ggPSBpdGVtcztcbiAgICAgICAgICBfLmZvckluKHJlc3VsdCwgKGl0ZW1zOmFueVtdLCBhY3Rpb246c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfLmZvckVhY2goaXRlbXMsIChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IF8uY2xvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IC8vTG9nZ2VyLmdldCgnazhzLW9iamVjdHMvJyArIGdldEtleShfc2VsZi5raW5kLCBfc2VsZi5uYW1lc3BhY2UpKTtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdCB8fCA8T2JqZWN0TGlzdD4geyBvYmplY3RzOiBbXSB9O1xuICAgIH1cblxuICAgIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlciwgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHdzW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIG9ubWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0ZWQ6IFwiLCBldmVudCk7XG4gICAgfTtcblxuICAgIG9uY2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJldHJpZXMgPCAzICYmIHRoaXMuY29ubmVjdFRpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5jb25uZWN0VGltZSkgPiA1MDAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXRyeWluZyBhZnRlciBjb25uZWN0aW9uIGNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBkaXNjb25uZWN0ZWQsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHNlbGYsIHdzKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBmb3IgXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBjbG9zZWQsIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJTd2l0Y2hpbmcgdG8gcG9sbGluZyBtb2RlXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25lcnJvcihldmVudCkge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWIgc29ja2V0IGVuY291bnRlcmVkIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHx8ICh0aGlzLnBvbGxlciAmJiB0aGlzLnBvbGxlci5jb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNvY2tldCAmJiAhdGhpcy5wb2xsZXIpIHtcbiAgICAgICAgaWYgKF8uYW55KHBvbGxpbmdPbmx5LCAoa2luZCkgPT4ga2luZCA9PT0gdGhpcy5zZWxmLmtpbmQpKSB7XG4gICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIlVzaW5nIHBvbGxpbmcgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChvcHRpb25zLmtpbmQsIG9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0IF9yZXN0VXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd3NVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKGFuc3dlcikucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl93c1VybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3RVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3Jlc3RVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKTtcbiAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgIGlmICh0aGlzLl9raW5kICE9PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMgJiYgbmFtZXNwYWNlICYmICF0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpLCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZCB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5ldmVudHMub24oV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJC5hamF4KHVybCwgPGFueT4ge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oaXRlbSksXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUob3B0aW9uczogYW55LCBuYW1lc3BhY2U/OiBhbnkpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtpbmQgPSBvcHRpb25zO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICBraW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHVybmluZyBleGlzdGluZyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IENsaWVudEluc3RhbmNlKG5ldyBDb2xsZWN0aW9uSW1wbChfb3B0aW9ucykpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3RvcnkgPSBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKTtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIEs4U0NsaWVudEZhY3Rvcnk7XG4gIH0pO1xuXG4gIHZhciBOT19LSU5EID0gXCJObyBraW5kIGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVCA9IFwiTm8gb2JqZWN0IGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcblxuICAvKlxuICAgKiBTdGF0aWMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgazhzIG9iajNjdHNcbiAgICovXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGE6YW55W10pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9XG4gICAgY2xpZW50LmdldChzdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnM6YW55LCBhY3Rpb246KG9iamVjdDphbnksIHN1Y2Nlc3M6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcjooZXJyOmFueSkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICghb3B0aW9ucy5vYmplY3Qub2JqZWN0cykge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUUztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHt9O1xuICAgIHZhciBvYmplY3RzID0gXy5jbG9uZURlZXAob3B0aW9ucy5vYmplY3Qub2JqZWN0cyk7XG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9nLmRlYnVnKFwicHJvY2Vzc2VkIGFsbCBvYmplY3RzLCByZXR1cm5pbmcgc3RhdHVzXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhhbnN3ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgZ2V0TmFtZShvYmplY3QpKTtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGFjdGlvbihvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zOmFueSkge1xuICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAvLyBsZXQncyB0cnkgYW5kIHN1cHBvcnQgYWxzbyBqdXN0IHN1cHBseWluZyBrOHMgb2JqZWN0cyBkaXJlY3RseVxuICAgIGlmIChvcHRpb25zLm1ldGFkYXRhIHx8IGdldEtpbmQob3B0aW9ucykgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgdmFyIG9iamVjdCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICAgIGlmIChvYmplY3Qub2JqZWN0cykge1xuICAgICAgICBvcHRpb25zLmtpbmQgPSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICBsb2cuZGVidWcoXCJPcHRpb25zIG9iamVjdCBub3JtYWxpemVkOiBcIiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVsKG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBkZWxldGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIGRlbCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICBjbGllbnQuZGVsZXRlKG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gIH1cblxuICAvKlxuICAgKiBBZGQvcmVwbGFjZSBhbiBvYmplY3QsIG9yIGEgbGlzdCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gcHV0KG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBwdXR0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgcHV0KHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICBjbGllbnQuZ2V0KChvYmplY3RzKSA9PiB7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICBjbGllbnQucHV0KG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3YXRjaChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IDxDb2xsZWN0aW9uPiBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgaGFuZGxlID0gY2xpZW50LndhdGNoKG9wdGlvbnMuc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBkaXNjb25uZWN0OiAoKSA9PiB7XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
