

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5MSVNUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FVkVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VDUkVUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5JTklUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQU5ZIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQURERUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5NT0RJRklFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkRFTEVURUQiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkubmFtZXNwYWNlZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5hcGlGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5hcGlWZXJzaW9uRm9yS2luZCIsIkt1YmVybmV0ZXNBUEkucHJlZml4Rm9yS2luZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVVybCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5nZXRFcnJvck9iamVjdCIsIkt1YmVybmV0ZXNBUEkud3NTY2hlbWUiLCJLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUiLCJLdWJlcm5ldGVzQVBJLnRvQ29sbGVjdGlvbk5hbWUiLCJLdWJlcm5ldGVzQVBJLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5lcXVhbHMiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZUxpc3QiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZVNoYWxsb3dPYmplY3QiLCJLdWJlcm5ldGVzQVBJLmZpbHRlckJ5TGFiZWwiLCJLdWJlcm5ldGVzQVBJLmZ1bGxOYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRVSUQiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuZ2V0TGFiZWxzIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRLaW5kIiwiS3ViZXJuZXRlc0FQSS5nZXRTZWxlY3RvciIsIkt1YmVybmV0ZXNBUEkuZ2V0SG9zdCIsIkt1YmVybmV0ZXNBUEkuZ2V0U3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRQb3J0cyIsIkt1YmVybmV0ZXNBUEkuZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCJLdWJlcm5ldGVzQVBJLmxhYmVsc1RvU3RyaW5nIiwiS3ViZXJuZXRlc0FQSS5pc1J1bm5pbmciLCJLdWJlcm5ldGVzQVBJLnNlbGVjdG9yTWF0Y2hlcyIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLmJlZm9yZVNlbmQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmdldE5hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5jb21wYXJlIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmRvR2V0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuc3RhcnQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdG9wIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5saXN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLnNldEhhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ubWVzc2FnZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ub3BlbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbmVycm9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuX3Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLl93c1VybCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53c1VSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwubmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5raW5kIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmFkZExhYmVsRmlsdGVyIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnJlc3RVcmxGb3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC51bndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5wdXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlbGV0ZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZWZDb3VudCIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuYWRkUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZW1vdmVSZWYiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbGxlY3Rpb24iLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRpc3Bvc2FibGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY3JlYXRlIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5nZXQiLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24iLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24uYWRkUmVzdWx0IiwiS3ViZXJuZXRlc0FQSS5oYW5kbGVMaXN0QWN0aW9uLm5leHQiLCJLdWJlcm5ldGVzQVBJLm5vcm1hbGl6ZU9wdGlvbnMiLCJLdWJlcm5ldGVzQVBJLmRlbCIsIkt1YmVybmV0ZXNBUEkucHV0IiwiS3ViZXJuZXRlc0FQSS53YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0dDLENBQUM7QUFPRCxDQUFDO0FBRUYsSUFBTyxhQUFhLENBd0tuQjtBQXhLRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRXBCQTtRQUFBQztRQUVBQyxDQUFDQTtRQURDRCxzQkFBSUEseUNBQXFCQTtpQkFBekJBLGNBQXFDRSxNQUFNQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDdkVBLGFBQUNBO0lBQURBLENBRkFELEFBRUNDLElBQUFEO0lBRllBLG9CQUFNQSxTQUVsQkEsQ0FBQUE7SUFFVUEsdUJBQVNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0lBOENyQ0E7UUFBQUk7UUE2QkFDLENBQUNBO1FBNUJFRCxzQkFBa0JBLGtCQUFJQTtpQkFBdEJBLGNBQWtDRSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFGO1FBQ3BEQSxzQkFBa0JBLHVCQUFTQTtpQkFBM0JBLGNBQXVDRyxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFIO1FBQzVEQSxzQkFBa0JBLG9CQUFNQTtpQkFBeEJBLGNBQW9DSSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFKO1FBQ3BEQSxzQkFBa0JBLHdCQUFVQTtpQkFBNUJBLGNBQXdDSyxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFMO1FBQ2hFQSxzQkFBa0JBLG1CQUFLQTtpQkFBdkJBLGNBQW1DTSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFOO1FBQ3BEQSxzQkFBa0JBLGdDQUFrQkE7aUJBQXBDQSxjQUFnRE8sTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFQO1FBQzdF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LENBQUNBO1lBQ2RBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLE1BQU1BLEdBQWdCQSw4QkFBZ0JBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQzNEQSxJQUFJQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUNsRUEsSUFBSUEsSUFBSUEsR0FBR0E7WUFDVEEsTUFBTUEsRUFBRUEsTUFBTUE7WUFDZEEsTUFBTUEsRUFBRUEsTUFBTUE7WUFDZEEsVUFBVUEsRUFBRUE7Z0JBQ1ZBLDhCQUFnQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDckRBLENBQUNBO1NBQ0ZBLENBQUNBO1FBQ0ZBLE1BQU1BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ2pCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQWhCZXRKLG1CQUFLQSxRQWdCcEJBLENBQUFBO0FBRUhBLENBQUNBLEVBcjVCTSxhQUFhLEtBQWIsYUFBYSxRQXE1Qm5CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvL2RlZnMgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcblxuaW50ZXJmYWNlIFNtb2tlU2lnbmFscyB7XG4gIGNvbnZlcnQob2JqOmFueSwgaGFuZGxlcnM/OmFueSk7XG59O1xuXG5pbnRlcmZhY2UgRXZlbnRFbmFibGVkIHtcbiAgb24oZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9uY2UoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9mZihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgZW1pdChldmVudE5hbWU6c3RyaW5nLCAuLi5hcmdzOmFueVtdKTtcbn07XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgY2xhc3MgY29uc3RzIHtcbiAgICBnZXQgTkFNRVNQQUNFX1NUT1JBR0VfS0VZKCk6c3RyaW5nIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBDb25zdGFudHMgPSBuZXcgY29uc3RzKCk7XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9uIHtcbiAgICBwcm90bz86c3RyaW5nO1xuICAgIGhvc3RQb3J0OnN0cmluZztcbiAgICBwcmVmaXg6c3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9ucyB7XG4gICAgb3BlbnNoaWZ0PzogQXBpTG9jYXRpb247XG4gICAgazhzPzogQXBpTG9jYXRpb247XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNDb25maWcge1xuICAgIG1hc3Rlcl91cmk/OiBzdHJpbmc7XG4gICAgYXBpPzogQXBpTG9jYXRpb25zO1xuICAgIG9wZW5zaGlmdD86IE9wZW5TaGlmdE9BdXRoQ29uZmlnO1xuICAgIGdvb2dsZT86IEdvb2dsZU9BdXRoQ29uZmlnO1xuICAgIGtleWNsb2FrPzogS2V5Q2xvYWtBdXRoQ29uZmlnO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuU2hpZnRPQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlT0F1dGhDb25maWcge1xuICAgIGF1dGhlbnRpY2F0aW9uVVJJOnN0cmluZztcbiAgICBhdXRob3JpemF0aW9uVVJJOnN0cmluZztcbiAgICBjbGllbnRJZDpzdHJpbmc7XG4gICAgY2xpZW50U2VjcmV0OnN0cmluZztcbiAgICByZWRpcmVjdFVSSTpzdHJpbmc7XG4gICAgc2NvcGU6c3RyaW5nO1xuICAgIHRva2VuVVJJPzpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEtleUNsb2FrQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc1N0YXRlIHtcbiAgICBuYW1lc3BhY2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHNlbGVjdGVkTmFtZXNwYWNlOiBzdHJpbmc7XG4gIH1cblxuXHRleHBvcnQgY2xhc3MgV2F0Y2hUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTElTVCgpOnN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZXZlbnRzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBOQU1FU1BBQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwibmFtZXNwYWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJub2Rlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVjbGFpbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcInJlc291cmNlcXVvdGFzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VjcmV0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJ0ZW1wbGF0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcInJvdXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50Y29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1fVEFHUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtdGFnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY2llc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWN5YmluZGluZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlYmluZGluZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZXNcIjsgfVxuXHR9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFNcbiAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9zVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuVEVNUExBVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9VVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyxcbiAgICAgICAgLy9XYXRjaFR5cGVzLklNQUdFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTLFxuICAgICAgICBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlBST0pFQ1RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRVNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNPcHRpb25zIHtcbiAgICBraW5kPzogc3RyaW5nO1xuICAgIG5hbWVzcGFjZT86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cclxuXHJcbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcclxuXHJcbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcclxuXHJcbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xyXG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XHJcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcclxuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XHJcblxyXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XHJcblxyXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XHJcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcclxuXHJcbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xyXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcclxuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XHJcblxyXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xyXG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xyXG5cclxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XHJcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XHJcblxyXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEFwaVZlcnNpb24gPSBLOFNfQVBJX1ZFUlNJT047XHJcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XHJcblxyXG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XHJcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XHJcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBkZWNsYXJlIHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3Rvcnk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gT1NfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlZChraW5kOnN0cmluZykge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5JTUFHRVMpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPU19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdHMgdGhlIGs4cy9vcGVuc2hpZnQgZXJyb3IgcmVzcG9uc2UgaWYgcHJlc2VudFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgZWl0aGVyIHNlY3VyZS9pbnNlY3VyZSB3ZWJzb2NrZXQgcHJvdG9jb2wgYmFzZWQgb24gdGhlIG1hc3RlciBVUkkgcHJvdG9jb2xcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBfLnRyaW1SaWdodChfLmNhcGl0YWxpemUoa2luZCksICdzJyk7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICByZXR1cm4ga2luZC50b0xvd2VyQ2FzZSgpICsgJ3MnO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgdmFyIGxlZnRVSUQgPSBnZXRVSUQobGVmdCk7XG4gICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICBpZiAoIWxlZnRVSUQgJiYgIXJpZ2h0VUlEKSB7XG4gICAgICByZXR1cm4gYW5ndWxhci50b0pzb24obGVmdCkgPT09IGFuZ3VsYXIudG9Kc29uKHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KC4uLm9iamVjdHM6YW55W10pIHtcbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgb2JqZWN0czogW11cbiAgICB9XG4gICAgXy5mb3JFYWNoKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBfLmZvckVhY2gob2JqZWN0LCAobykgPT4ge1xuICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9iamVjdCBzdWl0YWJsZSBmb3IgZGVsZXRlL2RlbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWxsb3dPYmplY3QobmFtZTpzdHJpbmcsIGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGNvbGxlY3Rpb24gYnkgbGFiZWxcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlMYWJlbChvYmplY3RzOkFycmF5PGFueT4sIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICg8YW55Pl8pLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGdldExhYmVscyhvYmplY3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XHJcbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xyXG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XHJcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcclxuXHJcbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcclxuXHJcbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xyXG5cclxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcclxuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcclxuICAgIGRlcGVuZHM6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXHJcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xyXG4gICAgICBLOFNfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ2s4cycsICdwcmVmaXgnXSkgfHwgSzhTX1BSRUZJWCwgJy8nKTtcclxuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xyXG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcclxuICAgIHRhc2s6IChuZXh0KSA9PiB7XHJcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcclxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XHJcbiAgICAgICAgICBsb2cuZGVidWcoXCJGZXRjaGVkIE9BdXRoIGNvbmZpZzogXCIsIGNvbmZpZyk7XHJcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xyXG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xyXG4gICAgICAgICAgICB2YXIgbWFzdGVyVXJpID0gbmV3IFVSSSgpLmhvc3QoY29uZmlnLmFwaS5rOHMuaG9zdFBvcnQpLnBhdGgoXCJcIikucXVlcnkoXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xyXG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XHJcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XHJcbiAgICAgICAgICBLZXljbG9ha0NvbmZpZyA9IGNvbmZpZy5rZXljbG9haztcclxuXHJcbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gYXV0aC5tYXN0ZXJfdXJpIG5vIGxvbmdlciB1c2VkIHJpZ2h0P1xyXG4gICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XHJcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XHJcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBpZHggKz0gMztcclxuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCghS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgfHwgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPT09IFwiL1wiKSAmJiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XHJcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxyXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxyXG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIGlmIChocmVmKSB7XHJcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXN0ZXIpIHtcclxuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgS3ViZXJuZXRlcyBjb25maWc6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCB0cnVlKTtcclxuXHJcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xyXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XHJcblxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVTZW5kKHJlcXVlc3QpIHtcbiAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuUFJPSkVDVFMsIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdmFyIGxvZ2dlck5hbWUgPSAnazhzLW9iamVjdHMvJyArIChuYW1lc3BhY2UgPyBVcmxIZWxwZXJzLmpvaW4obmFtZXNwYWNlLCBraW5kKSA6IGtpbmQpO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHZhciBpbml0aWFsaXplZCA9IHRoaXMuaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvYmplY3RzKG9ianM6YW55W10pIHtcbiAgICAgIHRoaXMuX29iamVjdHMubGVuZ3RoID0gMDtcbiAgICAgIF8uZm9yRWFjaChvYmpzLCAob2JqKSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmFtZWRJdGVtKGl0ZW06YW55KSB7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lZEl0ZW0obmFtZTpzdHJpbmcpIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyAvLyBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KGhhbmRsZXIuY29sbGVjdGlvbi5raW5kLCBoYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlKSk7XG4gICAgICB0aGlzLl9sYXN0RmV0Y2ggPSB0aGlzLmhhbmRsZXIubGlzdC5vYmplY3RzO1xuICAgICAgbG9nLndhcm4oXCJUaGlzOiBcIiwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogXy5jbG9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVycm9yID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGlmICh0aGlzLnJldHJpZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJPdXQgb2YgcmV0cmllcywgc3RvcHBpbmcgcG9sbGluZywgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRXJyb3IgcG9sbGluZywgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMgKyAxLCBcIiBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgIH0sIDEpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RvcCgpIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50Q2FuY2VsKTtcbiAgICAgICAgdGhpcy50Q2FuY2VsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVyIHtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgcG9sbGVyOk9iamVjdFBvbGxlcjtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgLy9Mb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KF9zZWxmLmtpbmQsIF9zZWxmLm5hbWVzcGFjZSkpO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYiBzb2NrZXQgZW5jb3VudGVyZWQgZXJyb3I6IFwiLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAvLyBpbiBjYXNlIGEgY3VzdG9tIFVSTCBpcyBnb2luZyB0byBiZSB1c2VkXG4gICAgICBpZiAodGhpcy5zZWxmLnJlc3RVUkwgPT09ICcnICYmIHRoaXMuc2VsZi53c1VSTCA9PT0gJycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0sIDI1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICBpZiAoXy5hbnkocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHdzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJC5hamF4KHRoaXMuc2VsZi5yZXN0VVJMLCA8YW55PiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbGlzdC5vYmplY3RzID0gZGF0YS5pdGVtcyB8fCBbXTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LCBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgICAgbG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvbGxlcikge1xuICAgICAgICB0aGlzLnBvbGxlci5kZXN0cm95KCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbGxlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIGltcGxlbWVudHMgQ29sbGVjdGlvbiB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbGlzdDpPYmplY3RMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2tpbmQgPSBvcHRpb25zLmtpbmQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBudWxsO1xuXG4gICAgICB2YXIgcHJlZiA9IHByZWZpeEZvcktpbmQodGhpcy5fa2luZCk7XG4gICAgICBpZiAoIXByZWYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCAnbmFtZXNwYWNlcycsIHRoaXMuX25hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXIodGhpcyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdCA9IG5ldyBPYmplY3RMaXN0KG9wdGlvbnMua2luZCwgb3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBnZXQgX3Jlc3RVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoYW5zd2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVVJJKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF93c1VybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwoYW5zd2VyKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd3NVcmwoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSkucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgd3NVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3dzVXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVzdFVSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcmVzdFVybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBnZXQgbmFtZXNwYWNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgICB9O1xuXG4gICAgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9O1xuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMuY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5oYW5kbGVycy5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMYWJlbEZpbHRlcihjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgICAgbG9nLmRlYnVnKFwiQWRkaW5nIGxhYmVsIGZpbHRlcjogXCIsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgdmFyIGNiT2xkID0gY2I7XG4gICAgICByZXR1cm4gKGRhdGE6YW55W10pID0+IHtcbiAgICAgICAgZGF0YSA9IGZpbHRlckJ5TGFiZWwoZGF0YSwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICAgIGNiT2xkKGRhdGEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGltZSBmZXRjaCBvZiB0aGUgZGF0YS4uLlxuICAgIHB1YmxpYyBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKSB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbmNlKFdhdGNoQWN0aW9ucy5JTklULCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pO1xuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMuX2tpbmQgIT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUyAmJiBuYW1lc3BhY2UgJiYgIXRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeEZvcktpbmQodGhpcy5fa2luZCksICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciBtZXRob2QgPSAnUFVUJztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXRoaXMubGlzdC5oYXNOYW1lZEl0ZW0oaXRlbSkpIHtcbiAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JqZWN0XG4gICAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIGFuIGV4aXN0aW5nIG9iamVjdFxuICAgICAgICB2YXIgcmVzb3VyY2VWZXJzaW9uID0gaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgIGlmICghcmVzb3VyY2VWZXJzaW9uKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0TmFtZWRJdGVtKGdldE5hbWUoaXRlbSkpO1xuICAgICAgICAgIHJlc291cmNlVmVyc2lvbiA9IGN1cnJlbnQubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICAgIGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uID0gcmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QuZGVsZXRlZChpdGVtKTtcbiAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAkLmFqYXgodXJsLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShvcHRpb25zOiBhbnksIG5hbWVzcGFjZT86IGFueSk6Q29sbGVjdGlvbiB7XG4gICAgICB2YXIga2luZCA9IG9wdGlvbnM7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIGtpbmQgPSBvcHRpb25zLmtpbmQ7XG4gICAgICAgIG5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG5hbWVzcGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vcHRpb25zID0ge1xuICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjLnJlbW92ZVJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgaWYgKGMuZGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIGNsaWVudC5nZXQoKG9iamVjdHMpID0+IHtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIGNsaWVudC5wdXQob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9KTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdhdGNoKG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gPENvbGxlY3Rpb24+IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBoYW5kbGUgPSBjbGllbnQud2F0Y2gob3B0aW9ucy5zdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIHZhciBzZWxmID0ge1xuICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGRpc2Nvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KHNlbGYuY2xpZW50LCBzZWxmLmhhbmRsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
