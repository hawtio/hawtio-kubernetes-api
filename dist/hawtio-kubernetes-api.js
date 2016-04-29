

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
        Object.defineProperty(WatchTypes, "CONFIG_MAPS", {
            get: function () { return "configmaps"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "INGRESSES", {
            get: function () { return "ingresses"; },
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
                    WatchTypes.CONFIG_MAPS,
                    WatchTypes.ENDPOINTS,
                    WatchTypes.EVENTS,
                    WatchTypes.INGRESSES,
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
    KubernetesAPI.isOpenShift = false;
    KubernetesAPI.K8S_PREFIX = 'api';
    KubernetesAPI.OS_PREFIX = 'oapi';
    KubernetesAPI.K8S_EXT_PREFIX = 'apis';
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
    function extPrefix() {
        return KubernetesAPI.K8S_EXT_PREFIX;
    }
    KubernetesAPI.extPrefix = extPrefix;
    function masterApiUrl() {
        return KubernetesAPI.masterUrl || "";
    }
    KubernetesAPI.masterApiUrl = masterApiUrl;
    function namespaced(kind) {
        switch (kind) {
            case KubernetesAPI.WatchTypes.POLICIES:
            case KubernetesAPI.WatchTypes.OAUTH_CLIENTS:
            case KubernetesAPI.WatchTypes.NAMESPACES:
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
    function applyNamespace(obj, namespace) {
        if (!obj.kind || !namespace) {
            return;
        }
        if (namespaced(toCollectionName(obj.kind)) && !obj.metadata.namespace) {
            obj.metadata.namespace = namespace;
        }
    }
    KubernetesAPI.applyNamespace = applyNamespace;
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
    function getApiVersion(entity) {
        return Core.pathGet(entity, ['apiVersion']);
    }
    KubernetesAPI.getApiVersion = getApiVersion;
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
        depends: ['KubernetesApiInit'],
        task: function (next) {
            KubernetesAPI.K8S_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'k8s', 'prefix']) || KubernetesAPI.K8S_PREFIX, '/');
            KubernetesAPI.OS_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']) || KubernetesAPI.OS_PREFIX, '/');
            next();
        }
    });
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'AddPolledTypes',
        depends: ['KubernetesApiInit'],
        task: function (next) {
            if (!KubernetesAPI.isOpenShift) {
                KubernetesAPI.pollingOnly.push(KubernetesAPI.WatchTypes.BUILD_CONFIGS);
            }
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
                if (OSOAuthConfig) {
                    KubernetesAPI.isOpenShift = true;
                    if (!master) {
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
    KubernetesAPI.pollingOnly = [KubernetesAPI.WatchTypes.PROJECTS, KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS];
    var ObjectList = (function () {
        function ObjectList(_kind, namespace) {
            var _this = this;
            this._kind = _kind;
            this.namespace = namespace;
            this.triggerChangedEvent = _.debounce(function () {
                _this._ee.emit(KubernetesAPI.WatchActions.ANY, _this._objects);
            }, 75, { trailing: true });
            this._ee = undefined;
            this._initialized = false;
            this._objects = [];
            this.log = log;
            this._ee = smokesignals.convert(this);
            if (this.log.enabledFor(Logger.DEBUG)) {
                this._ee.on(KubernetesAPI.WatchActions.ADDED, function (object) {
                    _this.log.debug("added", _this.kind, ":", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.MODIFIED, function (object) {
                    _this.log.debug("modified", _this.kind, ":", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.DELETED, function (object) {
                    _this.log.debug("deleted", _this.kind, ":", object);
                });
                this._ee.on(KubernetesAPI.WatchActions.ANY, function (objects) {
                    _this.log.debug(_this.kind, "changed:", objects);
                });
                this._ee.on(KubernetesAPI.WatchActions.INIT, function (objects) {
                    _this.log.debug(_this.kind, "initialized");
                });
            }
            this._ee.on(KubernetesAPI.WatchActions.ANY, function (objects) {
                _this.initialize();
            });
        }
        ;
        Object.defineProperty(ObjectList.prototype, "kind", {
            get: function () {
                return this._kind;
            },
            enumerable: true,
            configurable: true
        });
        ObjectList.prototype.initialize = function () {
            if (this.initialized) {
                return;
            }
            this._initialized = true;
            this._ee.emit(KubernetesAPI.WatchActions.INIT, this._objects);
            this.triggerChangedEvent();
        };
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
                this.initialize();
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
        ObjectList.prototype.belongs = function (object) {
            if (this.namespace && KubernetesAPI.getNamespace(object) !== this.namespace) {
                return false;
            }
            return true;
        };
        ObjectList.prototype.added = function (object) {
            if (!this.belongs(object)) {
                return;
            }
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
            if (!this.belongs(object)) {
                return;
            }
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
            if (!this.belongs(object)) {
                return;
            }
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
                    log.debug(_this.handler.kind, "fetched data:", data);
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
                    _this.handler.list.initialize();
                    if (_this._connected) {
                        _this.tCancel = setTimeout(function () {
                            log.debug(_this.handler.kind, "polling");
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
                        _this.log.debug(_this.handler.kind, "- Out of retries, stopping polling, error: ", error);
                        _this.stop();
                    }
                    else {
                        _this.retries = _this.retries + 1;
                        _this.log.debug(_this.handler.kind, "- Error polling, retry #", _this.retries + 1, " error: ", error);
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
            this.log.debug(this.handler.kind, " - disconnecting");
            if (this.tCancel) {
                this.log.debug(this.handler.kind, " - cancelling polling");
                clearTimeout(this.tCancel);
                this.tCancel = undefined;
            }
        };
        ;
        ObjectPoller.prototype.destroy = function () {
            this.stop();
            this.log.debug(this.handler.kind, " - destroyed");
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
            this.destroyed = false;
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
        Object.defineProperty(WSHandler.prototype, "kind", {
            get: function () {
                return this._self.kind;
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
            if (this.destroyed) {
                return;
            }
            if (this.self.restURL === '' && this.self.wsURL === '') {
                setTimeout(function () {
                    _this.connect();
                }, 500);
                return;
            }
            if (!this.socket && !this.poller) {
                if (_.any(KubernetesAPI.pollingOnly, function (kind) { return kind === _this.self.kind; })) {
                    this.log.info("Using polling for kind: ", this.self.kind);
                    this.poller = new ObjectPoller(this.self.restURL, this);
                    this.poller.start();
                }
                else {
                    var doConnect = function () {
                        var wsURL = _this.self.wsURL;
                        if (wsURL) {
                            log.debug("Connecting websocket for kind: ", _this.self.kind);
                            var ws = _this.socket = new WebSocket(wsURL);
                            _this.setHandlers(_this, ws);
                        }
                        else {
                            log.info("No wsURL for kind: " + _this.self.kind);
                        }
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
            this.destroyed = true;
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
            this._apiVersion = options.apiVersion;
            this._namespace = options.namespace || null;
            var pref = this.getPrefix();
            if (this._namespace) {
                this._path = UrlHelpers.join(pref, 'namespaces', this._namespace, this._kind);
            }
            else {
                this._path = UrlHelpers.join(pref, this._kind);
            }
            this.handlers = new WSHandler(this);
            var list = this.list = new ObjectList(options.kind, options.namespace);
            this.handlers.list = list;
            log.debug("creating new collection for", this.kind);
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
        CollectionImpl.prototype.getPrefix = function () {
            var pref = KubernetesAPI.prefixForKind(this._kind);
            if (!pref) {
                if (this._apiVersion && _.startsWith(this._apiVersion, 'extensions')) {
                    pref = UrlHelpers.join(KubernetesAPI.K8S_EXT_PREFIX, this._apiVersion);
                }
                else {
                    throw new Error('Unknown kind: ' + this._kind);
                }
            }
            return pref;
        };
        CollectionImpl.prototype.restUrlFor = function (item, useName) {
            if (useName === void 0) { useName = true; }
            var name = KubernetesAPI.getName(item);
            if (useName && !name) {
                log.debug("Name missing from item: ", item);
                return undefined;
            }
            var url = UrlHelpers.join(this._restUrl.toString());
            if (this.options.urlFunction && angular.isFunction(this.options.urlFunction)) {
            }
            else {
                if (KubernetesAPI.namespaced(KubernetesAPI.toCollectionName(item.kind))) {
                    var namespace = KubernetesAPI.getNamespace(item) || this._namespace;
                    var prefix = this.getPrefix();
                    var kind = this._kind;
                    if (!KubernetesAPI.isOpenShift && (kind === "buildconfigs" || kind === "BuildConfig")) {
                        prefix = UrlHelpers.join("/api/v1/proxy/namespaces/default/services/jenkinshift:80/", prefix);
                        console.log("Using buildconfigs URL override");
                    }
                    url = UrlHelpers.join(KubernetesAPI.masterApiUrl(), prefix, 'namespaces', namespace, kind);
                }
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
                    log.debug(_this.kind, "passing existing objects:", _this.list.objects);
                    cb(_this.list.objects);
                }, 10);
            }
            log.debug(this.kind, "adding watch callback:", cb);
            this.list.events.on(KubernetesAPI.WatchActions.ANY, function (data) {
                log.debug(_this.kind, "got data:", data);
                cb(data);
            });
            return cb;
        };
        ;
        CollectionImpl.prototype.unwatch = function (cb) {
            log.debug(this.kind, "removing watch callback:", cb);
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
            switch (this._kind) {
                case KubernetesAPI.WatchTypes.SERVICES:
                    if (item.spec.clusterIP === '') {
                        delete item.spec.clusterIP;
                    }
                    break;
                default:
            }
            try {
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
            }
            catch (err) {
                error(err);
            }
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
            try {
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
            }
            catch (err) {
                error(err);
            }
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
            if (options.kind) {
                options.object.kind = KubernetesAPI.toKindName(options.kind);
            }
            else {
                throw NO_KIND;
            }
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
        options.namespace = KubernetesAPI.namespaced(options.kind) ? options.namespace || KubernetesAPI.getNamespace(options.object) : null;
        options.apiVersion = options.apiVersion || KubernetesAPI.getApiVersion(options.object);
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
        options.namespace = KubernetesAPI.namespaced(options.kind) ? options.namespace || KubernetesAPI.getNamespace(options.object) : null;
        options.apiVersion = options.apiVersion || KubernetesAPI.getApiVersion(options.object);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0E4S25CO0FBOUtELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3JDO1FBQUE7UUFnQ0EsQ0FBQztRQS9CRSxzQkFBa0Isa0JBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RCxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isd0JBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNoRSxzQkFBa0IsbUJBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNw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Q0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXpDZSxpQkFBRyxNQXlDbEIsQ0FBQTtJQUVELGVBQXNCLE9BQWtCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksTUFBTSxHQUFnQiw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsOEJBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBZmUsbUJBQUssUUFlcEIsQ0FBQTtBQUVILENBQUMsRUF2L0JNLGFBQWEsS0FBYixhQUFhLFFBdS9CbkIiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwibGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVzb3VyY2VxdW90YXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJvYXV0aGNsaWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZWFjY291bnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBDT05GSUdfTUFQUygpOnN0cmluZyB7IHJldHVybiBcImNvbmZpZ21hcHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcImluZ3Jlc3Nlc1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJ0ZW1wbGF0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcInJvdXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50Y29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1fVEFHUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtdGFnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY2llc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWN5YmluZGluZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlYmluZGluZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZXNcIjsgfVxuICAgIC8vcHVibGljIHN0YXRpYyBnZXQgREFFTU9OU0VUUygpOnN0cmluZyB7IHJldHVybiBcImRhZW1vbnNldHNcIjsgfVxuXHR9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTkdSRVNTRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIC8vV2F0Y2hUeXBlcy5JTUFHRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuICBleHBvcnQgdmFyIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuICBleHBvcnQgdmFyIEs4U19FWFRfUFJFRklYID0gJ2FwaXMnO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBkZWNsYXJlIHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3Rvcnk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gT1NfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGV4dFByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQ6c3RyaW5nKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5JTUFHRVMpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgc2luZ2xlICdraW5kJyBvZiBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9LaW5kTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICByZXR1cm4gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgaWYgKCFraW5kKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUT0RPIHRoaXMgdHJpbVJpZ2h0IHdvcmtzIGZvciBub3csIGJ1dCBtaWdodCBub3Qgd29yayBhdCBzb21lIHBvaW50XG4gICAgcmV0dXJuIF8udHJpbVJpZ2h0KF8uY2FwaXRhbGl6ZShraW5kKSwgJ3MnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbGxlY3Rpb24ga2luZCBvZiBhbiBvYmplY3QgZnJvbSB0aGUgc2luZ3VsYXIga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvQ29sbGVjdGlvbk5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAga2luZCA9IGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBraW5kLnRvTG93ZXJDYXNlKCkgKyAncyc7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICB2YXIgcmlnaHRVSUQgPSBnZXRVSUQocmlnaHQpO1xuICAgIGlmICghbGVmdFVJRCAmJiAhcmlnaHRVSUQpIHtcbiAgICAgIHJldHVybiBhbmd1bGFyLnRvSnNvbihsZWZ0KSA9PT0gYW5ndWxhci50b0pzb24ocmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdFVJRCA9PT0gcmlnaHRVSUQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogS3ViZXJuZXRlcyBvYmplY3QgaGVscGVyc1xuICAgKlxuICAgKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2Yga3ViZXJuZXRlcyBvYmplY3RzIHN1aXRhYmxlIGZvciBwb3N0aW5nIGEgYnVuY2ggb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoLi4ub2JqZWN0czphbnlbXSkge1xuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCksXG4gICAgICBvYmplY3RzOiBbXVxuICAgIH1cbiAgICBfLmZvckVhY2gob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIF8uZm9yRWFjaChvYmplY3QsIChvKSA9PiB7XG4gICAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb2JqZWN0IHN1aXRhYmxlIGZvciBkZWxldGUvZGVsXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhbGxvd09iamVjdChuYW1lOnN0cmluZywga2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoa2luZCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHM6QXJyYXk8YW55PiwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgIHZhciBtYXRjaGVzID0gKDxhbnk+XykubWF0Y2hlcyhsYWJlbFNlbGVjdG9yKTtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoZ2V0TGFiZWxzKG9iamVjdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqOmFueSwgbmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIW9iai5raW5kIHx8ICFuYW1lc3BhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydhcGlWZXJzaW9uJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBqZW5raW5zaGlmdCBpbiB2YW5pbGxhIGs4cywgbGV0J3MgcG9sbCBidWlsZCBjb25maWdzIGJ5IGRlZmF1bHRcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0FkZFBvbGxlZFR5cGVzJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgS3ViZXJuZXRlc0FQSS5wb2xsaW5nT25seS5wdXNoKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTKTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgLy8gVE9ETyBhdXRoLm1hc3Rlcl91cmkgbm8gbG9uZ2VyIHVzZWQgcmlnaHQ/XG4gICAgICAgICAgICAgIC8vIG1hc3RlciA9IE9TT0F1dGhDb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICBpZiAob2F1dGhfYXV0aG9yaXplX3VyaSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFzdGVyKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KVxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIEt1YmVybmV0ZXMgY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBjbGllbnRzIHRvIGFkZCBvdGhlciB0eXBlcyB0byBmb3JjZSBwb2xsaW5nIHVuZGVyIHdoYXRldmVyIGNpcmN1bXN0YW5jZXNcbiAgZXhwb3J0IHZhciBwb2xsaW5nT25seSA9IFtXYXRjaFR5cGVzLlBST0pFQ1RTLCBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDc1LCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBsb2c7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9raW5kOnN0cmluZywgcHJpdmF0ZSBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImNoYW5nZWQ6XCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLklOSVQsIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImluaXRpYWxpemVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuSU5JVCwgdGhpcy5fb2JqZWN0cyk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9iamVjdHMob2JqczphbnlbXSkge1xuICAgICAgdGhpcy5fb2JqZWN0cy5sZW5ndGggPSAwO1xuICAgICAgXy5mb3JFYWNoKG9ianMsIChvYmopID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZWRJdGVtKG5hbWU6c3RyaW5nKSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgb3V0IG9iamVjdHMgZnJvbSBvdGhlciBuYW1lc3BhY2VzIHRoYXQgY291bGQgYmUgcmV0dXJuZWRcbiAgICBwcml2YXRlIGJlbG9uZ3Mob2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5uYW1lc3BhY2UgJiYgZ2V0TmFtZXNwYWNlKG9iamVjdCkgIT09IHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyBcbiAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IHRoaXMuaGFuZGxlci5saXN0Lm9iamVjdHM7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcImZldGNoZWQgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogXy5jbG9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFuZGxlci5saXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJwb2xsaW5nXCIpO1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXJyb3IgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIE91dCBvZiByZXRyaWVzLCBzdG9wcGluZyBwb2xsaW5nLCBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBFcnJvciBwb2xsaW5nLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdG9wKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkaXNjb25uZWN0aW5nXCIpO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBjYW5jZWxsaW5nIHBvbGxpbmdcIik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRDYW5jZWwpO1xuICAgICAgICB0aGlzLnRDYW5jZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkZXN0cm95ZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgXG4gICAgfVxuXG4gICAgc2V0IGxpc3QoX2xpc3Q6T2JqZWN0TGlzdCkge1xuICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgIH1cblxuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QgfHwgPE9iamVjdExpc3Q+IHsgb2JqZWN0czogW10gfTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYiBzb2NrZXQgZW5jb3VudGVyZWQgZXJyb3I6IFwiLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICBpZiAoXy5hbnkocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciB3c1VSTCA9IHRoaXMuc2VsZi53c1VSTDtcbiAgICAgICAgICAgIGlmICh3c1VSTCkge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHdzVVJMKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2cuaW5mbyhcIk5vIHdzVVJMIGZvciBraW5kOiBcIiArIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIF9hcGlWZXJzaW9uOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbjtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gdGhpcy5nZXRQcmVmaXgoKTtcblxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3Qob3B0aW9ucy5raW5kLCBvcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgICAgbG9nLmRlYnVnKFwiY3JlYXRpbmcgbmV3IGNvbGxlY3Rpb24gZm9yXCIsIHRoaXMua2luZCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0IF9yZXN0VXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd3NVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKGFuc3dlcikucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl93c1VybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3RVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3Jlc3RVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0UHJlZml4KCkge1xuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcGlWZXJzaW9uICYmIF8uc3RhcnRzV2l0aCh0aGlzLl9hcGlWZXJzaW9uLCAnZXh0ZW5zaW9ucycpKSB7XG4gICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgdGhpcy5fYXBpVmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIC8vIGxldHMgdHJ1c3QgdGhlIHVybCB0byBiZSBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKGl0ZW0ua2luZCkpKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKSB8fCB0aGlzLl9uYW1lc3BhY2U7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLl9raW5kO1xuICAgICAgICAgIGlmICghS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCAmJiAoa2luZCA9PT0gXCJidWlsZGNvbmZpZ3NcIiB8fCBraW5kID09PSBcIkJ1aWxkQ29uZmlnXCIpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBVcmxIZWxwZXJzLmpvaW4oXCIvYXBpL3YxL3Byb3h5L25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9qZW5raW5zaGlmdDo4MC9cIiwgcHJlZml4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgYnVpbGRjb25maWdzIFVSTCBvdmVycmlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXgsICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCBraW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHVzZU5hbWUpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKHVybCwgbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8vIGNvbnRpbnVhbGx5IGdldCB1cGRhdGVzXG4gICAgcHVibGljIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJwYXNzaW5nIGV4aXN0aW5nIG9iamVjdHM6XCIsIHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiYWRkaW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiZ290IGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICBjYihkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJyZW1vdmluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3VzdG9tIGNoZWNrcyBmb3Igc3BlY2lmaWMgY2FzZXNcbiAgICAgIHN3aXRjaCAodGhpcy5fa2luZCkge1xuICAgICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6XG4gICAgICAgICAgaWYgKGl0ZW0uc3BlYy5jbHVzdGVySVAgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgaXRlbS5zcGVjLmNsdXN0ZXJJUDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+IHtcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKGl0ZW0pLFxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUob3B0aW9uczogYW55LCBuYW1lc3BhY2U/OiBhbnkpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtpbmQgPSBvcHRpb25zO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICBraW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHVybmluZyBleGlzdGluZyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IENsaWVudEluc3RhbmNlKG5ldyBDb2xsZWN0aW9uSW1wbChfb3B0aW9ucykpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3RvcnkgPSBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKTtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIEs4U0NsaWVudEZhY3Rvcnk7XG4gIH0pO1xuXG4gIHZhciBOT19LSU5EID0gXCJObyBraW5kIGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVCA9IFwiTm8gb2JqZWN0IGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcblxuICAvKlxuICAgKiBTdGF0aWMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgazhzIG9iajNjdHNcbiAgICovXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGE6YW55W10pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9XG4gICAgY2xpZW50LmdldChzdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnM6YW55LCBhY3Rpb246KG9iamVjdDphbnksIHN1Y2Nlc3M6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcjooZXJyOmFueSkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICghb3B0aW9ucy5vYmplY3Qub2JqZWN0cykge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUUztcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHt9O1xuICAgIHZhciBvYmplY3RzID0gXy5jbG9uZURlZXAob3B0aW9ucy5vYmplY3Qub2JqZWN0cyk7XG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9nLmRlYnVnKFwicHJvY2Vzc2VkIGFsbCBvYmplY3RzLCByZXR1cm5pbmcgc3RhdHVzXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhhbnN3ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgZ2V0TmFtZShvYmplY3QpKTtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGFjdGlvbihvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zOmFueSkge1xuICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAvLyBsZXQncyB0cnkgYW5kIHN1cHBvcnQgYWxzbyBqdXN0IHN1cHBseWluZyBrOHMgb2JqZWN0cyBkaXJlY3RseVxuICAgIGlmIChvcHRpb25zLm1ldGFkYXRhIHx8IGdldEtpbmQob3B0aW9ucykgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgdmFyIG9iamVjdCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICAgIGlmIChvYmplY3Qub2JqZWN0cykge1xuICAgICAgICBvcHRpb25zLmtpbmQgPSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5raW5kKSB7XG4gICAgICBpZiAob3B0aW9ucy5raW5kKSB7XG4gICAgICAgIG9wdGlvbnMub2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKG9wdGlvbnMua2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2cuZGVidWcoXCJPcHRpb25zIG9iamVjdCBub3JtYWxpemVkOiBcIiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVsKG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBkZWxldGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIGRlbCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgY2xpZW50LmdldCgob2JqZWN0cykgPT4ge1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgY2xpZW50LnB1dChvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH0pO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2F0Y2gob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSA8Q29sbGVjdGlvbj4gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIGhhbmRsZSA9IGNsaWVudC53YXRjaChvcHRpb25zLnN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgdmFyIHNlbGYgPSB7XG4gICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgZGlzY29ubmVjdDogKCkgPT4ge1xuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koc2VsZi5jbGllbnQsIHNlbGYuaGFuZGxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
