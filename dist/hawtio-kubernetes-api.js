

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
        Object.defineProperty(WatchTypes, "REPLICA_SETS", {
            get: function () { return "replicaset"; },
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
        Object.defineProperty(WatchTypes, "DEPLOYMENTS", {
            get: function () { return "deployments"; },
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
                    WatchTypes.SERVICE_ACCOUNTS,
                    WatchTypes.REPLICA_SETS,
                    WatchTypes.DEPLOYMENTS
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
                        if (_this.handler.error) {
                            _this.handler.error(error);
                        }
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
        Object.defineProperty(WSHandler.prototype, "error", {
            get: function () {
                return this._self.options.error;
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
        function CollectionImpl(_options) {
            this._options = _options;
            this.handlers = undefined;
            this.list = undefined;
            this._kind = _options.kind;
            this._apiVersion = _options.apiVersion;
            this._namespace = _options.namespace || null;
            var pref = this.getPrefix();
            if (this._namespace) {
                this._path = UrlHelpers.join(pref, 'namespaces', this._namespace, this._kind);
            }
            else {
                this._path = UrlHelpers.join(pref, this._kind);
            }
            this.handlers = new WSHandler(this);
            var list = this.list = new ObjectList(_options.kind, _options.namespace);
            this.handlers.list = list;
            log.debug("creating new collection for", this.kind);
        }
        ;
        Object.defineProperty(CollectionImpl.prototype, "options", {
            get: function () {
                return this._options;
            },
            enumerable: true,
            configurable: true
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0FrTG5CO0FBbExELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3JDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDRSxzQkFBa0Isa0JBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RCxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isd0JBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNoRSxzQkFBa0IsbUJBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNw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Q1QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRTtnQkFDViw4QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsQ0FBQztTQUNGLENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFmZSxtQkFBSyxRQWVwQixDQUFBO0FBRUgsQ0FBQyxFQWxnQ00sYUFBYSxLQUFiLGFBQWEsUUFrZ0NuQiIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy9kZWZzIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBX1NFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhc2V0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IENPTkZJR19NQVBTKCk6c3RyaW5nIHsgcmV0dXJuIFwiY29uZmlnbWFwc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU5HUkVTU0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW5ncmVzc2VzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW10YWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG4gICAgLy9wdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGFlbW9uc2V0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5DT05GSUdfTUFQUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRVZFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLklOR1JFU1NFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIC8vV2F0Y2hUeXBlcy5JTUFHRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuICBleHBvcnQgdmFyIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuICBleHBvcnQgdmFyIEs4U19FWFRfUFJFRklYID0gJ2FwaXMnO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBkZWNsYXJlIHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3Rvcnk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gT1NfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGV4dFByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQ6c3RyaW5nKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5JTUFHRVMpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgc2luZ2xlICdraW5kJyBvZiBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9LaW5kTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICByZXR1cm4gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgaWYgKCFraW5kKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUT0RPIHRoaXMgdHJpbVJpZ2h0IHdvcmtzIGZvciBub3csIGJ1dCBtaWdodCBub3Qgd29yayBhdCBzb21lIHBvaW50XG4gICAgcmV0dXJuIF8udHJpbVJpZ2h0KF8uY2FwaXRhbGl6ZShraW5kKSwgJ3MnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbGxlY3Rpb24ga2luZCBvZiBhbiBvYmplY3QgZnJvbSB0aGUgc2luZ3VsYXIga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvQ29sbGVjdGlvbk5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAga2luZCA9IGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBraW5kLnRvTG93ZXJDYXNlKCkgKyAncyc7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICB2YXIgcmlnaHRVSUQgPSBnZXRVSUQocmlnaHQpO1xuICAgIGlmICghbGVmdFVJRCAmJiAhcmlnaHRVSUQpIHtcbiAgICAgIHJldHVybiBhbmd1bGFyLnRvSnNvbihsZWZ0KSA9PT0gYW5ndWxhci50b0pzb24ocmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdFVJRCA9PT0gcmlnaHRVSUQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogS3ViZXJuZXRlcyBvYmplY3QgaGVscGVyc1xuICAgKlxuICAgKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2Yga3ViZXJuZXRlcyBvYmplY3RzIHN1aXRhYmxlIGZvciBwb3N0aW5nIGEgYnVuY2ggb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoLi4ub2JqZWN0czphbnlbXSkge1xuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCksXG4gICAgICBvYmplY3RzOiBbXVxuICAgIH1cbiAgICBfLmZvckVhY2gob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIF8uZm9yRWFjaChvYmplY3QsIChvKSA9PiB7XG4gICAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb2JqZWN0IHN1aXRhYmxlIGZvciBkZWxldGUvZGVsXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhbGxvd09iamVjdChuYW1lOnN0cmluZywga2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoa2luZCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHM6QXJyYXk8YW55PiwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgIHZhciBtYXRjaGVzID0gKDxhbnk+XykubWF0Y2hlcyhsYWJlbFNlbGVjdG9yKTtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoZ2V0TGFiZWxzKG9iamVjdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqOmFueSwgbmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIW9iai5raW5kIHx8ICFuYW1lc3BhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydhcGlWZXJzaW9uJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBqZW5raW5zaGlmdCBpbiB2YW5pbGxhIGs4cywgbGV0J3MgcG9sbCBidWlsZCBjb25maWdzIGJ5IGRlZmF1bHRcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0FkZFBvbGxlZFR5cGVzJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgS3ViZXJuZXRlc0FQSS5wb2xsaW5nT25seS5wdXNoKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTKTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgLy8gVE9ETyBhdXRoLm1hc3Rlcl91cmkgbm8gbG9uZ2VyIHVzZWQgcmlnaHQ/XG4gICAgICAgICAgICAgIC8vIG1hc3RlciA9IE9TT0F1dGhDb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICBpZiAob2F1dGhfYXV0aG9yaXplX3VyaSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFzdGVyKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KVxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIEt1YmVybmV0ZXMgY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBjbGllbnRzIHRvIGFkZCBvdGhlciB0eXBlcyB0byBmb3JjZSBwb2xsaW5nIHVuZGVyIHdoYXRldmVyIGNpcmN1bXN0YW5jZXNcbiAgZXhwb3J0IHZhciBwb2xsaW5nT25seSA9IFtXYXRjaFR5cGVzLlBST0pFQ1RTLCBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDc1LCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBsb2c7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9raW5kOnN0cmluZywgcHJpdmF0ZSBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImNoYW5nZWQ6XCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLklOSVQsIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImluaXRpYWxpemVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuSU5JVCwgdGhpcy5fb2JqZWN0cyk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9iamVjdHMob2JqczphbnlbXSkge1xuICAgICAgdGhpcy5fb2JqZWN0cy5sZW5ndGggPSAwO1xuICAgICAgXy5mb3JFYWNoKG9ianMsIChvYmopID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZWRJdGVtKG5hbWU6c3RyaW5nKSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgb3V0IG9iamVjdHMgZnJvbSBvdGhlciBuYW1lc3BhY2VzIHRoYXQgY291bGQgYmUgcmV0dXJuZWRcbiAgICBwcml2YXRlIGJlbG9uZ3Mob2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5uYW1lc3BhY2UgJiYgZ2V0TmFtZXNwYWNlKG9iamVjdCkgIT09IHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyBcbiAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IHRoaXMuaGFuZGxlci5saXN0Lm9iamVjdHM7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcImZldGNoZWQgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogXy5jbG9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFuZGxlci5saXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJwb2xsaW5nXCIpO1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXJyb3IgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIE91dCBvZiByZXRyaWVzLCBzdG9wcGluZyBwb2xsaW5nLCBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5lcnJvcikge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBFcnJvciBwb2xsaW5nLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdG9wKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkaXNjb25uZWN0aW5nXCIpO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBjYW5jZWxsaW5nIHBvbGxpbmdcIik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRDYW5jZWwpO1xuICAgICAgICB0aGlzLnRDYW5jZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkZXN0cm95ZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgXG4gICAgfVxuXG4gICAgc2V0IGxpc3QoX2xpc3Q6T2JqZWN0TGlzdCkge1xuICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgIH1cblxuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QgfHwgPE9iamVjdExpc3Q+IHsgb2JqZWN0czogW10gfTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmO1xuICAgIH1cblxuICAgIGdldCBlcnJvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmLm9wdGlvbnMuZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5raW5kO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGFuZGxlcnMoc2VsZjpXU0hhbmRsZXIsIHdzOldlYlNvY2tldCkge1xuICAgICAgXy5mb3JJbihzZWxmLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoXy5zdGFydHNXaXRoKGtleSwgJ29uJykpIHtcbiAgICAgICAgICB3c1trZXldID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZWxmW2tleV0oZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzZW5kKGRhdGE6YW55KSB7XG4gICAgICBpZiAoIV8uaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGFuZ3VsYXIudG9Kc29uKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBkYXRhLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vIHRoaXMubG9nLmRlYnVnKFwiZXZlbnQ6IFwiLCBldmVudFR5cGUsIFwiIG9iamVjdDogXCIsIGRhdGEub2JqZWN0KTtcbiAgICAgIHRoaXMuX2xpc3RbZXZlbnRUeXBlXShkYXRhLm9iamVjdCk7XG4gICAgfTtcblxuICAgIG9ub3BlbihldmVudCkge1xuICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgIHRoaXMuY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGVkOiBcIiwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC53YXNDbGVhbikge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uZXJyb3IoZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwid2ViIHNvY2tldCBlbmNvdW50ZXJlZCBlcnJvcjogXCIsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fCAodGhpcy5wb2xsZXIgJiYgdGhpcy5wb2xsZXIuY29ubmVjdGVkKTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIGEgY3VzdG9tIFVSTCBpcyBnb2luZyB0byBiZSB1c2VkXG4gICAgICBpZiAodGhpcy5zZWxmLnJlc3RVUkwgPT09ICcnICYmIHRoaXMuc2VsZi53c1VSTCA9PT0gJycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgIGlmIChfLmFueShwb2xsaW5nT25seSwgKGtpbmQpID0+IGtpbmQgPT09IHRoaXMuc2VsZi5raW5kKSkge1xuICAgICAgICAgIHRoaXMubG9nLmluZm8oXCJVc2luZyBwb2xsaW5nIGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZG9Db25uZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHdzVVJMID0gdGhpcy5zZWxmLndzVVJMO1xuICAgICAgICAgICAgaWYgKHdzVVJMKSB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQod3NVUkwpO1xuICAgICAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiTm8gd3NVUkwgZm9yIGtpbmQ6IFwiICsgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgJC5hamF4KHRoaXMuc2VsZi5yZXN0VVJMLCA8YW55PiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbGlzdC5vYmplY3RzID0gZGF0YS5pdGVtcyB8fCBbXTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LCBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgICAgbG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvbGxlcikge1xuICAgICAgICB0aGlzLnBvbGxlci5kZXN0cm95KCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbGxlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIGltcGxlbWVudHMgQ29sbGVjdGlvbiB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX2FwaVZlcnNpb246c3RyaW5nO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbGlzdDpPYmplY3RMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gX29wdGlvbnMua2luZDtcbiAgICAgIHRoaXMuX2FwaVZlcnNpb24gPSBfb3B0aW9ucy5hcGlWZXJzaW9uO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gX29wdGlvbnMubmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gdGhpcy5nZXRQcmVmaXgoKTtcblxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3QoX29wdGlvbnMua2luZCwgX29wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgICBsb2cuZGVidWcoXCJjcmVhdGluZyBuZXcgY29sbGVjdGlvbiBmb3JcIiwgdGhpcy5raW5kKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6SzhTT3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfcmVzdFVybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVSSShhbnN3ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dzVXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybChhbnN3ZXIpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3c1VybChVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fd3NVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExhYmVsRmlsdGVyKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgICBsb2cuZGVidWcoXCJBZGRpbmcgbGFiZWwgZmlsdGVyOiBcIiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB2YXIgY2JPbGQgPSBjYjtcbiAgICAgIHJldHVybiAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgICBkYXRhID0gZmlsdGVyQnlMYWJlbChkYXRhLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgY2JPbGQoZGF0YSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uY2UoV2F0Y2hBY3Rpb25zLklOSVQsIGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGdldFByZWZpeCgpIHtcbiAgICAgIHZhciBwcmVmID0gcHJlZml4Rm9yS2luZCh0aGlzLl9raW5kKTtcbiAgICAgIGlmICghcHJlZikge1xuICAgICAgICBpZiAodGhpcy5fYXBpVmVyc2lvbiAmJiBfLnN0YXJ0c1dpdGgodGhpcy5fYXBpVmVyc2lvbiwgJ2V4dGVuc2lvbnMnKSkge1xuICAgICAgICAgIHByZWYgPSBVcmxIZWxwZXJzLmpvaW4oSzhTX0VYVF9QUkVGSVgsIHRoaXMuX2FwaVZlcnNpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICAvLyBsZXRzIHRydXN0IHRoZSB1cmwgdG8gYmUgY29ycmVjdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShpdGVtLmtpbmQpKSkge1xuICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoaXRlbSkgfHwgdGhpcy5fbmFtZXNwYWNlO1xuICAgICAgICAgIHZhciBwcmVmaXggPSB0aGlzLmdldFByZWZpeCgpO1xuICAgICAgICAgIHZhciBraW5kID0gdGhpcy5fa2luZDtcbiAgICAgICAgICBpZiAoIUt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgJiYgKGtpbmQgPT09IFwiYnVpbGRjb25maWdzXCIgfHwga2luZCA9PT0gXCJCdWlsZENvbmZpZ1wiKSkge1xuICAgICAgICAgICAgcHJlZml4ID0gVXJsSGVscGVycy5qb2luKFwiL2FwaS92MS9wcm94eS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvamVua2luc2hpZnQ6ODAvXCIsIHByZWZpeCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGJ1aWxkY29uZmlncyBVUkwgb3ZlcnJpZGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwga2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicGFzc2luZyBleGlzdGluZyBvYmplY3RzOlwiLCB0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImFkZGluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImdvdCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgY2IoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicmVtb3Zpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXBkYXRpbmcgYW4gZXhpc3Rpbmcgb2JqZWN0XG4gICAgICAgIHZhciByZXNvdXJjZVZlcnNpb24gPSBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgaWYgKCFyZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMubGlzdC5nZXROYW1lZEl0ZW0oZ2V0TmFtZShpdGVtKSk7XG4gICAgICAgICAgcmVzb3VyY2VWZXJzaW9uID0gY3VycmVudC5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgICAgaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb24gPSByZXNvdXJjZVZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEN1c3RvbSBjaGVja3MgZm9yIHNwZWNpZmljIGNhc2VzXG4gICAgICBzd2l0Y2ggKHRoaXMuX2tpbmQpIHtcbiAgICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOlxuICAgICAgICAgIGlmIChpdGVtLnNwZWMuY2x1c3RlcklQID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3BlYy5jbHVzdGVySVA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKlxuICAgKiBNYW5hZ2VzIHJlZmVyZW5jZXMgdG8gY29sbGVjdGlvbiBpbnN0YW5jZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3c1xuICAgKi9cbiAgY2xhc3MgQ2xpZW50SW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlZkNvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSBfY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZWZDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCArIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyByZW1vdmVSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBkaXNwb3NhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50IDw9IDA7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgaW50ZXJmYWNlIENsaWVudE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTpDbGllbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qXG4gICAqIEZhY3RvcnkgaW1wbGVtZW50YXRpb24gdGhhdCdzIGF2YWlsYWJsZSBhcyBhbiBhbmd1bGFyIHNlcnZpY2VcbiAgICovXG4gIGNsYXNzIEs4U0NsaWVudEZhY3RvcnlJbXBsIHtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgIHByaXZhdGUgX2NsaWVudHMgPSA8Q2xpZW50TWFwPiB7fTtcbiAgICBwdWJsaWMgY3JlYXRlKG9wdGlvbnM6IGFueSwgbmFtZXNwYWNlPzogYW55KTpDb2xsZWN0aW9uIHtcbiAgICAgIHZhciBraW5kID0gb3B0aW9ucztcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAga2luZCA9IG9wdGlvbnMua2luZDtcbiAgICAgICAgbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29wdGlvbnMgPSB7XG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXR1cm5pbmcgZXhpc3RpbmcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoX29wdGlvbnMpKTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNyZWF0aW5nIG5ldyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICB0aGlzLl9jbGllbnRzW2tleV0gPSBjbGllbnQ7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pIHtcbiAgICAgIF8uZm9yRWFjaChoYW5kbGVzLCAoaGFuZGxlKSA9PiB7XG4gICAgICAgIGNsaWVudC51bndhdGNoKGhhbmRsZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBrZXkgPSBjbGllbnQuZ2V0S2V5KCk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGMucmVtb3ZlUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVtb3ZlZCByZWZlcmVuY2UgdG8gY2xpZW50IHdpdGgga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGMucmVmQ291bnQpO1xuICAgICAgICBpZiAoYy5kaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICAgIGMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRGVzdHJveWVkIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5ID0gbmV3IEs4U0NsaWVudEZhY3RvcnlJbXBsKCk7XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLOFNDbGllbnRGYWN0b3J5JywgKCkgPT4ge1xuICAgIHJldHVybiBLOFNDbGllbnRGYWN0b3J5O1xuICB9KTtcblxuICB2YXIgTk9fS0lORCA9IFwiTm8ga2luZCBpbiBzdXBwbGllZCBvcHRpb25zXCI7XG4gIHZhciBOT19PQkpFQ1QgPSBcIk5vIG9iamVjdCBpbiBzdXBwbGllZCBvcHRpb25zXCI7XG4gIHZhciBOT19PQkpFQ1RTID0gXCJObyBvYmplY3RzIGluIGxpc3Qgb2JqZWN0XCI7XG5cbiAgLypcbiAgICogU3RhdGljIGZ1bmN0aW9ucyBmb3IgbWFuaXB1bGF0aW5nIGs4cyBvYmozY3RzXG4gICAqL1xuXG4gIC8qXG4gICAqIEdldCBhIGNvbGxlY3Rpb25cbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXQob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhOmFueVtdKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfVxuICAgIGNsaWVudC5nZXQoc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zOmFueSwgYWN0aW9uOihvYmplY3Q6YW55LCBzdWNjZXNzOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I6KGVycjphbnkpID0+IHZvaWQpID0+IHZvaWQpIHtcbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0Lm9iamVjdHMpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVFM7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSB7fTtcbiAgICB2YXIgb2JqZWN0cyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMub2JqZWN0Lm9iamVjdHMpO1xuICAgIGZ1bmN0aW9uIGFkZFJlc3VsdChpZCwgZGF0YSkge1xuICAgICAgYW5zd2VyW2lkXSA9IGRhdGE7XG4gICAgICBuZXh0KCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaWYgKG9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcInByb2Nlc3NlZCBhbGwgb2JqZWN0cywgcmV0dXJuaW5nIHN0YXR1c1wiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoYW5zd2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzLnNoaWZ0KCk7XG4gICAgICBsb2cuZGVidWcoXCJQcm9jZXNzaW5nIG9iamVjdDogXCIsIGdldE5hbWUob2JqZWN0KSk7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICBhY3Rpb24ob2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9uczphbnkpIHtcbiAgICBsb2cuZGVidWcoXCJOb3JtYWxpemluZyBzdXBwbGllZCBvcHRpb25zOiBcIiwgb3B0aW9ucyk7XG4gICAgLy8gbGV0J3MgdHJ5IGFuZCBzdXBwb3J0IGFsc28ganVzdCBzdXBwbHlpbmcgazhzIG9iamVjdHMgZGlyZWN0bHlcbiAgICBpZiAob3B0aW9ucy5tZXRhZGF0YSB8fCBnZXRLaW5kKG9wdGlvbnMpID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIHZhciBvYmplY3QgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgIH07XG4gICAgICBpZiAob2JqZWN0Lm9iamVjdHMpIHtcbiAgICAgICAgb3B0aW9ucy5raW5kID0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0KSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1Q7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3Qua2luZCkge1xuICAgICAgaWYgKG9wdGlvbnMua2luZCkge1xuICAgICAgICBvcHRpb25zLm9iamVjdC5raW5kID0gdG9LaW5kTmFtZShvcHRpb25zLmtpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nLmRlYnVnKFwiT3B0aW9ucyBvYmplY3Qgbm9ybWFsaXplZDogXCIsIG9wdGlvbnMpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGRlbChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgZGVsZXRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBkZWwoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICBjbGllbnQuZGVsZXRlKG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gIH1cblxuICAvKlxuICAgKiBBZGQvcmVwbGFjZSBhbiBvYmplY3QsIG9yIGEgbGlzdCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gcHV0KG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBwdXR0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgcHV0KHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIGNsaWVudC5nZXQoKG9iamVjdHMpID0+IHtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIGNsaWVudC5wdXQob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9KTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdhdGNoKG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gPENvbGxlY3Rpb24+IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBoYW5kbGUgPSBjbGllbnQud2F0Y2gob3B0aW9ucy5zdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIHZhciBzZWxmID0ge1xuICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGRpc2Nvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KHNlbGYuY2xpZW50LCBzZWxmLmhhbmRsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
