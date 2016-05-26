

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
            get: function () { return "replicasets"; },
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
        Object.defineProperty(WatchTypes, "DAEMONSETS", {
            get: function () { return "daemonsets"; },
            enumerable: true,
            configurable: true
        });
        return WatchTypes;
    }());
    KubernetesAPI.WatchTypes = WatchTypes;
    var ExtensionTypes = (function () {
        function ExtensionTypes() {
        }
        Object.defineProperty(ExtensionTypes, "extensions", {
            get: function () {
                return [
                    WatchTypes.DAEMONSETS,
                    WatchTypes.REPLICA_SETS,
                    WatchTypes.DEPLOYMENTS
                ];
            },
            enumerable: true,
            configurable: true
        });
        return ExtensionTypes;
    }());
    KubernetesAPI.ExtensionTypes = ExtensionTypes;
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
    KubernetesAPI.K8S_EXT_VERSION = 'v1beta1';
    KubernetesAPI.K8S_EXTENSIONS = 'extensions';
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
        return UrlHelpers.join(apiPrefix(), KubernetesAPI.K8S_API_VERSION);
    }
    KubernetesAPI.kubernetesApiPrefix = kubernetesApiPrefix;
    function kubernetesApiExtensionPrefix() {
        return UrlHelpers.join(KubernetesAPI.K8S_EXT_PREFIX, KubernetesAPI.K8S_EXTENSIONS, KubernetesAPI.K8S_EXT_VERSION);
    }
    KubernetesAPI.kubernetesApiExtensionPrefix = kubernetesApiExtensionPrefix;
    function openshiftApiPrefix() {
        return UrlHelpers.join(osApiPrefix(), KubernetesAPI.OS_API_VERSION);
    }
    KubernetesAPI.openshiftApiPrefix = openshiftApiPrefix;
    function apiForKind(kind) {
        if (kind === KubernetesAPI.WatchTypes.NAMESPACES) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.any(KubernetesAPI.ExtensionTypes.extensions, function (t) { return t === kind; })) {
            return KubernetesAPI.K8S_EXT_PREFIX;
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
            case KubernetesAPI.K8S_EXT_PREFIX:
                return kubernetesApiExtensionPrefix();
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
            case KubernetesAPI.K8S_EXT_PREFIX:
                return kubernetesApiExtensionPrefix();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0E0TG5CO0FBNUxELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3JDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDRSxzQkFBa0Isa0JBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RCxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isd0JBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNoRSxzQkFBa0IsbUJBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNw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LENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWZlLG1CQUFLLFFBZXBCLENBQUE7QUFFSCxDQUFDLEVBbGdDTSxhQUFhLEtBQWIsYUFBYSxRQWtnQ25CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvL2RlZnMgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcblxuaW50ZXJmYWNlIFNtb2tlU2lnbmFscyB7XG4gIGNvbnZlcnQob2JqOmFueSwgaGFuZGxlcnM/OmFueSk7XG59O1xuXG5pbnRlcmZhY2UgRXZlbnRFbmFibGVkIHtcbiAgb24oZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9uY2UoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9mZihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgZW1pdChldmVudE5hbWU6c3RyaW5nLCAuLi5hcmdzOmFueVtdKTtcbn07XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgY2xhc3MgY29uc3RzIHtcbiAgICBnZXQgTkFNRVNQQUNFX1NUT1JBR0VfS0VZKCk6c3RyaW5nIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBDb25zdGFudHMgPSBuZXcgY29uc3RzKCk7XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9uIHtcbiAgICBwcm90bz86c3RyaW5nO1xuICAgIGhvc3RQb3J0OnN0cmluZztcbiAgICBwcmVmaXg6c3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9ucyB7XG4gICAgb3BlbnNoaWZ0PzogQXBpTG9jYXRpb247XG4gICAgazhzPzogQXBpTG9jYXRpb247XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNDb25maWcge1xuICAgIG1hc3Rlcl91cmk/OiBzdHJpbmc7XG4gICAgYXBpPzogQXBpTG9jYXRpb25zO1xuICAgIG9wZW5zaGlmdD86IE9wZW5TaGlmdE9BdXRoQ29uZmlnO1xuICAgIGdvb2dsZT86IEdvb2dsZU9BdXRoQ29uZmlnO1xuICAgIGtleWNsb2FrPzogS2V5Q2xvYWtBdXRoQ29uZmlnO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuU2hpZnRPQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlT0F1dGhDb25maWcge1xuICAgIGF1dGhlbnRpY2F0aW9uVVJJOnN0cmluZztcbiAgICBhdXRob3JpemF0aW9uVVJJOnN0cmluZztcbiAgICBjbGllbnRJZDpzdHJpbmc7XG4gICAgY2xpZW50U2VjcmV0OnN0cmluZztcbiAgICByZWRpcmVjdFVSSTpzdHJpbmc7XG4gICAgc2NvcGU6c3RyaW5nO1xuICAgIHRva2VuVVJJPzpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEtleUNsb2FrQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc1N0YXRlIHtcbiAgICBuYW1lc3BhY2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHNlbGVjdGVkTmFtZXNwYWNlOiBzdHJpbmc7XG4gIH1cblxuXHRleHBvcnQgY2xhc3MgV2F0Y2hUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTElTVCgpOnN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZXZlbnRzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBOQU1FU1BBQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwibmFtZXNwYWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJub2Rlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVjbGFpbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FfU0VUUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2FzZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IENPTkZJR19NQVBTKCk6c3RyaW5nIHsgcmV0dXJuIFwiY29uZmlnbWFwc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU5HUkVTU0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW5ncmVzc2VzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW10YWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREFFTU9OU0VUUygpOnN0cmluZyB7IHJldHVybiBcImRhZW1vbnNldHNcIjsgfVxuXHR9XG5cbiAgZXhwb3J0IGNsYXNzIEV4dGVuc2lvblR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBleHRlbnNpb25zKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkRBRU1PTlNFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lc3BhY2VkVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGs4c1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkNPTkZJR19NQVBTLFxuICAgICAgICBXYXRjaFR5cGVzLkVORFBPSU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FVkVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU5HUkVTU0VTLFxuICAgICAgICBXYXRjaFR5cGVzLk5PREVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFQ1JFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFNcbiAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9zVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuVEVNUExBVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9VVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyxcbiAgICAgICAgLy9XYXRjaFR5cGVzLklNQUdFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTLFxuICAgICAgICBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlBST0pFQ1RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRVNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNPcHRpb25zIHtcbiAgICBraW5kPzogc3RyaW5nO1xuICAgIG5hbWVzcGFjZT86IHN0cmluZztcbiAgICBhcGlWZXJzaW9uPzogc3RyaW5nO1xuICAgIGxhYmVsU2VsZWN0b3I/OiBMYWJlbE1hcDtcbiAgICBvYmplY3Q/OiBhbnk7XG4gICAgc3VjY2Vzcz86IChvYmpzOmFueVtdKSA9PiB2b2lkO1xuICAgIGVycm9yPzogKGVycjphbnkpID0+IHZvaWQ7XG4gICAgdXJsRnVuY3Rpb24/OiAob3B0aW9uczpLOFNPcHRpb25zKSA9PiBzdHJpbmc7XG4gIH1cblx0XG5cdGV4cG9ydCBjbGFzcyBXYXRjaEFjdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElOSVQoKTpzdHJpbmcgeyByZXR1cm4gXCJJTklUXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFEREVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiQURERURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBNT0RJRklFRCgpOnN0cmluZyB7IHJldHVybiBcIk1PRElGSUVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfTtcblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBPYmplY3RNYXAge1xuXHRcdFt1aWQ6c3RyaW5nXTogYW55O1x0XHRcblx0fVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFiZWxNYXAge1xuICAgIFtuYW1lOnN0cmluZ106IHN0cmluZztcbiAgfVxuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uIHtcbiAgICB3c1VSTDpzdHJpbmc7XG4gICAgcmVzdFVSTDpzdHJpbmc7XG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gICAga2luZDogc3RyaW5nO1xuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgICBjb25uZWN0KCk7XG4gICAgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6dm9pZDtcbiAgICB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkO1xuICAgIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGdldEtleSgpOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTQ2xpZW50RmFjdG9yeSB7XG4gICAgY3JlYXRlKGtpbmQ6YW55LCBuYW1lc3BhY2U/OiBzdHJpbmcpOkNvbGxlY3Rpb247XG4gICAgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pOnZvaWQ7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XG5cbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xuXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XG4gIGV4cG9ydCB2YXIgaXNPcGVuU2hpZnQgPSBmYWxzZTtcblxuICBleHBvcnQgdmFyIEs4U19QUkVGSVggPSAnYXBpJztcbiAgZXhwb3J0IHZhciBPU19QUkVGSVggPSAnb2FwaSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVF9QUkVGSVggPSAnYXBpcyc7XG5cbiAgZXhwb3J0IHZhciBLOFNfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIE9TX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1ZFUlNJT04gPSAndjFiZXRhMSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVEVOU0lPTlMgPSAnZXh0ZW5zaW9ucyc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBkZWNsYXJlIHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3Rvcnk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gT1NfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGV4dFByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQ6c3RyaW5nKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBLOFNfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgSzhTX0VYVEVOU0lPTlMsIEs4U19FWFRfVkVSU0lPTik7IFxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIE9TX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShFeHRlbnNpb25UeXBlcy5leHRlbnNpb25zLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfRVhUX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5rOHNUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLklNQUdFUykge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpVmVyc2lvbkZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19FWFRfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpO1xuICAgICAgY2FzZSBLOFNfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCk7XG4gICAgICBjYXNlIEs4U19QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdHMgdGhlIGs4cy9vcGVuc2hpZnQgZXJyb3IgcmVzcG9uc2UgaWYgcHJlc2VudFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgZWl0aGVyIHNlY3VyZS9pbnNlY3VyZSB3ZWJzb2NrZXQgcHJvdG9jb2wgYmFzZWQgb24gdGhlIG1hc3RlciBVUkkgcHJvdG9jb2xcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBfLnRyaW1SaWdodChfLmNhcGl0YWxpemUoa2luZCksICdzJyk7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICByZXR1cm4ga2luZC50b0xvd2VyQ2FzZSgpICsgJ3MnO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgdmFyIGxlZnRVSUQgPSBnZXRVSUQobGVmdCk7XG4gICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICBpZiAoIWxlZnRVSUQgJiYgIXJpZ2h0VUlEKSB7XG4gICAgICByZXR1cm4gYW5ndWxhci50b0pzb24obGVmdCkgPT09IGFuZ3VsYXIudG9Kc29uKHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KC4uLm9iamVjdHM6YW55W10pIHtcbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgb2JqZWN0czogW11cbiAgICB9XG4gICAgXy5mb3JFYWNoKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBfLmZvckVhY2gob2JqZWN0LCAobykgPT4ge1xuICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9iamVjdCBzdWl0YWJsZSBmb3IgZGVsZXRlL2RlbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWxsb3dPYmplY3QobmFtZTpzdHJpbmcsIGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGNvbGxlY3Rpb24gYnkgbGFiZWxcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlMYWJlbChvYmplY3RzOkFycmF5PGFueT4sIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICg8YW55Pl8pLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGdldExhYmVscyhvYmplY3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgZ2l2ZW4gbmFtZXNwYWNlIHRvIGFuIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5IHNldFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFtZXNwYWNlKG9iajphbnksIG5hbWVzcGFjZTogc3RyaW5nKSB7XG4gICAgaWYgKCFvYmoua2luZCB8fCAhbmFtZXNwYWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2VkKHRvQ29sbGVjdGlvbk5hbWUob2JqLmtpbmQpKSAmJiAhb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSkge1xuICAgICAgb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHNjb3BlZCBuYW1lIHdpdGggdGhlIG5hbWVzcGFjZS9raW5kLCBzdWl0YWJsZSB0byB1c2UgYXMgYSBrZXkgaW4gbWFwc1xuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmdWxsTmFtZShlbnRpdHkpIHtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbigobmFtZXNwYWNlID8gbmFtZXNwYWNlIDogXCJcIiksIGtpbmQsIG5hbWUpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVZlcnNpb24oZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnYXBpVmVyc2lvbiddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibGFiZWxzXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDoge307XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcIm5hbWVcIikgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJpZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRLaW5kKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImtpbmRcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwia2luZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RvcihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0KHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwicGhhc2VcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRzKHNlcnZpY2UpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRpb25UaW1lc3RhbXAoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYWJlbHMgdGV4dCBzdHJpbmcgdXNpbmcgdGhlIDxjb2RlPmtleTE9dmFsdWUxLGtleTI9dmFsdWUyLC4uLi48L2NvZGU+IGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvU3RyaW5nKGxhYmVscywgc2VwZXJhdG9yVGV4dCA9IGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvcikge1xuICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChsYWJlbHMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gYW5zd2VyID8gc2VwZXJhdG9yVGV4dCA6IFwiXCI7XG4gICAgICBhbnN3ZXIgKz0gc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHBvZCBpcyBydW5uaW5nXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gaXNSdW5uaW5nKHBvZEN1cnJlbnRTdGF0ZSkge1xuICAgIHZhciBzdGF0dXMgPSAocG9kQ3VycmVudFN0YXRlIHx8IHt9KS5waGFzZTtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbGFiZWxzIG9iamVjdCBoYXMgYWxsIG9mIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSB0aGUgc2VsZWN0b3JcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGxhYmVscykge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGxhYmVscykpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0cnVlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZWxlY3RvciwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGFuc3dlciAmJiBsYWJlbHNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyICYmIGNvdW50ID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwb2RTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIGdldFN0YXR1cyhwb2QpO1xuICB9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgR29vZ2xlT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgS2V5Y2xvYWtDb25maWc6YW55O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIEs4U19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKSB8fCBLOFNfUFJFRklYLCAnLycpO1xuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2luY2Ugd2UncmUgdXNpbmcgamVua2luc2hpZnQgaW4gdmFuaWxsYSBrOHMsIGxldCdzIHBvbGwgYnVpbGQgY29uZmlncyBieSBkZWZhdWx0XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdBZGRQb2xsZWRUeXBlcycsXG4gICAgZGVwZW5kczogWydLdWJlcm5ldGVzQXBpSW5pdCddLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICAgIEt1YmVybmV0ZXNBUEkucG9sbGluZ09ubHkucHVzaChLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyk7XG4gICAgICB9XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgLmRvbmUoKHNjcmlwdCwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBjb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGZXRjaGVkIE9BdXRoIGNvbmZpZzogXCIsIGNvbmZpZyk7XG4gICAgICAgICAgdmFyIG1hc3RlcjpzdHJpbmcgPSBjb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICBpZiAoIW1hc3RlciAmJiBjb25maWcuYXBpICYmIGNvbmZpZy5hcGkuazhzKSB7XG4gICAgICAgICAgICB2YXIgbWFzdGVyVXJpID0gbmV3IFVSSSgpLmhvc3QoY29uZmlnLmFwaS5rOHMuaG9zdFBvcnQpLnBhdGgoXCJcIikucXVlcnkoXCJcIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcbiAgICAgICAgICAgICAgbWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hc3RlciA9IG1hc3RlclVyaS50b1N0cmluZygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIE9TT0F1dGhDb25maWcgPSBjb25maWcub3BlbnNoaWZ0O1xuICAgICAgICAgIEdvb2dsZU9BdXRoQ29uZmlnID0gY29uZmlnLmdvb2dsZTtcbiAgICAgICAgICBLZXljbG9ha0NvbmZpZyA9IGNvbmZpZy5rZXljbG9haztcblxuICAgICAgICAgIGlmIChPU09BdXRoQ29uZmlnKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLmlzT3BlblNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XG4gICAgICAgICAgICAgIC8vIFRPRE8gYXV0aC5tYXN0ZXJfdXJpIG5vIGxvbmdlciB1c2VkIHJpZ2h0P1xuICAgICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZHggKz0gMztcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFLdWJlcm5ldGVzQVBJLm1hc3RlclVybCB8fCBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9PT0gXCIvXCIpICYmICghbWFzdGVyIHx8IG1hc3RlciA9PT0gXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcbiAgICAgICAgICAgIC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICBtYXN0ZXIgPSBuZXcgVVJJKGhyZWYpLnF1ZXJ5KFwiXCIpLnBhdGgoXCJcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hc3Rlcikge1xuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSlcbiAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJFcnJvciBmZXRjaGluZyBLdWJlcm5ldGVzIGNvbmZpZzogXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB0cnVlKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKCduZ1Jlc291cmNlJyk7XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVTZW5kKHJlcXVlc3QpIHtcbiAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgY2xpZW50cyB0byBhZGQgb3RoZXIgdHlwZXMgdG8gZm9yY2UgcG9sbGluZyB1bmRlciB3aGF0ZXZlciBjaXJjdW1zdGFuY2VzXG4gIGV4cG9ydCB2YXIgcG9sbGluZ09ubHkgPSBbV2F0Y2hUeXBlcy5QUk9KRUNUUywgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHU107XG5cbiAgLyoqXG4gICAqICBNYW5hZ2VzIHRoZSBhcnJheSBvZiBrOHMgb2JqZWN0cyBmb3IgYSBjbGllbnQgaW5zdGFuY2VcbiAgICoqL1xuICBjbGFzcyBPYmplY3RMaXN0IHtcbiAgICBwdWJsaWMgdHJpZ2dlckNoYW5nZWRFdmVudCA9IF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQU5ZLCB0aGlzLl9vYmplY3RzKTtcbiAgICB9LCA3NSwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcblxuICAgIHByaXZhdGUgX2VlOkV2ZW50RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX29iamVjdHM6QXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gbG9nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfa2luZDpzdHJpbmcsIHByaXZhdGUgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2VlID0gc21va2VzaWduYWxzLmNvbnZlcnQodGhpcyk7XG4gICAgICBpZiAodGhpcy5sb2cuZW5hYmxlZEZvcihMb2dnZXIuREVCVUcpKSB7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BRERFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiYWRkZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwibW9kaWZpZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5ERUxFVEVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJkZWxldGVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMua2luZCwgXCJjaGFuZ2VkOlwiLCBvYmplY3RzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5JTklULCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMua2luZCwgXCJpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvYmplY3RzKG9ianM6YW55W10pIHtcbiAgICAgIHRoaXMuX29iamVjdHMubGVuZ3RoID0gMDtcbiAgICAgIF8uZm9yRWFjaChvYmpzLCAob2JqKSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWVkSXRlbShuYW1lOnN0cmluZykge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIGZyb20gb3RoZXIgbmFtZXNwYWNlcyB0aGF0IGNvdWxkIGJlIHJldHVybmVkXG4gICAgcHJpdmF0ZSBiZWxvbmdzKG9iamVjdCkge1xuICAgICAgaWYgKHRoaXMubmFtZXNwYWNlICYmIGdldE5hbWVzcGFjZShvYmplY3QpICE9PSB0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgIGFuZ3VsYXIuY29weShvYmplY3QsIG9iaik7XG4gICAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIG9iamVjdCk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRlbGV0ZWQgPSBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5ERUxFVEVELCBkZWxldGVkWzBdKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBpbnRlcmZhY2UgQ29tcGFyZVJlc3VsdCB7XG4gICAgYWRkZWQ6QXJyYXk8YW55PjtcbiAgICBtb2RpZmllZDpBcnJheTxhbnk+O1xuICAgIGRlbGV0ZWQ6QXJyYXk8YW55PjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmUob2xkOkFycmF5PGFueT4sIF9uZXc6QXJyYXk8YW55Pik6Q29tcGFyZVJlc3VsdCB7XG4gICAgdmFyIGFuc3dlciA9IDxDb21wYXJlUmVzdWx0PiB7XG4gICAgICBhZGRlZDogW10sXG4gICAgICBtb2RpZmllZDogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH07XG4gICAgXy5mb3JFYWNoKF9uZXcsIChuZXdPYmopID0+IHtcbiAgICAgIHZhciBvbGRPYmogPSBfLmZpbmQob2xkLCAobykgPT4gZXF1YWxzKG8sIG5ld09iaikpO1xuICAgICAgaWYgKCFvbGRPYmopIHtcbiAgICAgICAgYW5zd2VyLmFkZGVkLnB1c2gobmV3T2JqKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIudG9Kc29uKG9sZE9iaikgIT09IGFuZ3VsYXIudG9Kc29uKG5ld09iaikpIHtcbiAgICAgICAgYW5zd2VyLm1vZGlmaWVkLnB1c2gobmV3T2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfLmZvckVhY2gob2xkLCAob2xkT2JqKSA9PiB7XG4gICAgICB2YXIgbmV3T2JqID0gXy5maW5kKF9uZXcsIChvKSA9PiBlcXVhbHMobywgb2xkT2JqKSk7XG4gICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICBhbnN3ZXIuZGVsZXRlZC5wdXNoKG9sZE9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIE1hbmFnZXMgcG9sbGluZyB0aGUgc2VydmVyIGZvciBvYmplY3RzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB3ZWJzb2NrZXQgY29ubmVjdGlvbnNcbiAgICovXG4gIGNsYXNzIE9iamVjdFBvbGxlciB7XG5cbiAgICBwcml2YXRlIF9sYXN0RmV0Y2ggPSA8QXJyYXk8YW55Pj4gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSA1MDAwO1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdENhbmNlbDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RVUkw6c3RyaW5nLCBwcml2YXRlIGhhbmRsZXI6V1NIYW5kbGVyKSB7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgXG4gICAgICB0aGlzLl9sYXN0RmV0Y2ggPSB0aGlzLmhhbmRsZXIubGlzdC5vYmplY3RzO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRvR2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJmZXRjaGVkIGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICAgIHZhciBpdGVtcyAgPSAoZGF0YSAmJiBkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY29tcGFyZSh0aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLl9sYXN0RmV0Y2ggPSBpdGVtcztcbiAgICAgICAgICBfLmZvckluKHJlc3VsdCwgKGl0ZW1zOmFueVtdLCBhY3Rpb246c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfLmZvckVhY2goaXRlbXMsIChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IF8uY2xvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmhhbmRsZXIubGlzdC5pbml0aWFsaXplKCk7XG4gICAgICAgICAgLy9sb2cuZGVidWcoXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBsb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwicG9sbGluZ1wiKTtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVycm9yID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGlmICh0aGlzLnJldHJpZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBPdXQgb2YgcmV0cmllcywgc3RvcHBpbmcgcG9sbGluZywgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gRXJyb3IgcG9sbGluZywgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMgKyAxLCBcIiBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgIH0sIDEpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RvcCgpIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGlzY29ubmVjdGluZ1wiKTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gY2FuY2VsbGluZyBwb2xsaW5nXCIpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50Q2FuY2VsKTtcbiAgICAgICAgdGhpcy50Q2FuY2VsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGVzdHJveWVkXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZXMgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uIHRvIHRoZSBiYWNrZW5kIGFuZCBwYXNzZXMgZXZlbnRzIHRvIHRoZSBPYmplY3RMaXN0XG4gICAqL1xuICBjbGFzcyBXU0hhbmRsZXIge1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29ubmVjdFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNvY2tldDpXZWJTb2NrZXQ7XG4gICAgcHJpdmF0ZSBwb2xsZXI6T2JqZWN0UG9sbGVyO1xuICAgIHByaXZhdGUgc2VsZjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9saXN0Ok9iamVjdExpc3Q7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IFxuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5vcHRpb25zLmVycm9yO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYiBzb2NrZXQgZW5jb3VudGVyZWQgZXJyb3I6IFwiLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICBpZiAoXy5hbnkocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciB3c1VSTCA9IHRoaXMuc2VsZi53c1VSTDtcbiAgICAgICAgICAgIGlmICh3c1VSTCkge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHdzVVJMKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2cuaW5mbyhcIk5vIHdzVVJMIGZvciBraW5kOiBcIiArIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIF9hcGlWZXJzaW9uOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX29wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgICAgdGhpcy5fa2luZCA9IF9vcHRpb25zLmtpbmQ7XG4gICAgICB0aGlzLl9hcGlWZXJzaW9uID0gX29wdGlvbnMuYXBpVmVyc2lvbjtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IF9vcHRpb25zLm5hbWVzcGFjZSB8fCBudWxsO1xuXG4gICAgICB2YXIgcHJlZiA9IHRoaXMuZ2V0UHJlZml4KCk7XG5cbiAgICAgIGlmICh0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCAnbmFtZXNwYWNlcycsIHRoaXMuX25hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXIodGhpcyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdCA9IG5ldyBPYmplY3RMaXN0KF9vcHRpb25zLmtpbmQsIF9vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgICAgbG9nLmRlYnVnKFwiY3JlYXRpbmcgbmV3IGNvbGxlY3Rpb24gZm9yXCIsIHRoaXMua2luZCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOks4U09wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3Jlc3RVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoYW5zd2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVVJJKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF93c1VybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwoYW5zd2VyKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd3NVcmwoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSkucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgd3NVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3dzVXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVzdFVSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcmVzdFVybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBnZXQgbmFtZXNwYWNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgICB9O1xuXG4gICAgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9O1xuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMuY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5oYW5kbGVycy5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMYWJlbEZpbHRlcihjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgICAgbG9nLmRlYnVnKFwiQWRkaW5nIGxhYmVsIGZpbHRlcjogXCIsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgdmFyIGNiT2xkID0gY2I7XG4gICAgICByZXR1cm4gKGRhdGE6YW55W10pID0+IHtcbiAgICAgICAgZGF0YSA9IGZpbHRlckJ5TGFiZWwoZGF0YSwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICAgIGNiT2xkKGRhdGEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGltZSBmZXRjaCBvZiB0aGUgZGF0YS4uLlxuICAgIHB1YmxpYyBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKSB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbmNlKFdhdGNoQWN0aW9ucy5JTklULCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBnZXRQcmVmaXgoKSB7XG4gICAgICB2YXIgcHJlZiA9IHByZWZpeEZvcktpbmQodGhpcy5fa2luZCk7XG4gICAgICBpZiAoIXByZWYpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FwaVZlcnNpb24gJiYgXy5zdGFydHNXaXRoKHRoaXMuX2FwaVZlcnNpb24sICdleHRlbnNpb25zJykpIHtcbiAgICAgICAgICBwcmVmID0gVXJsSGVscGVycy5qb2luKEs4U19FWFRfUFJFRklYLCB0aGlzLl9hcGlWZXJzaW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24ga2luZDogJyArIHRoaXMuX2tpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc3RVcmxGb3IoaXRlbTphbnksIHVzZU5hbWU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIGlmICh1c2VOYW1lICYmICFuYW1lKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5hbWUgbWlzc2luZyBmcm9tIGl0ZW06IFwiLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgLy8gbGV0cyB0cnVzdCB0aGUgdXJsIHRvIGJlIGNvcnJlY3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VkKHRvQ29sbGVjdGlvbk5hbWUoaXRlbS5raW5kKSkpIHtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pIHx8IHRoaXMuX25hbWVzcGFjZTtcbiAgICAgICAgICB2YXIgcHJlZml4ID0gdGhpcy5nZXRQcmVmaXgoKTtcbiAgICAgICAgICB2YXIga2luZCA9IHRoaXMuX2tpbmQ7XG4gICAgICAgICAgaWYgKCFLdWJlcm5ldGVzQVBJLmlzT3BlblNoaWZ0ICYmIChraW5kID09PSBcImJ1aWxkY29uZmlnc1wiIHx8IGtpbmQgPT09IFwiQnVpbGRDb25maWdcIikpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IFVybEhlbHBlcnMuam9pbihcIi9hcGkvdjEvcHJveHkvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2plbmtpbnNoaWZ0OjgwL1wiLCBwcmVmaXgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2luZyBidWlsZGNvbmZpZ3MgVVJMIG92ZXJyaWRlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeCwgJ25hbWVzcGFjZXMnLCBuYW1lc3BhY2UsIGtpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZCB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcInBhc3NpbmcgZXhpc3Rpbmcgb2JqZWN0czpcIiwgdGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJhZGRpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub24oV2F0Y2hBY3Rpb25zLkFOWSwgKGRhdGEpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJnb3QgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgIGNiKGRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKSB7XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcInJlbW92aW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciBtZXRob2QgPSAnUFVUJztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXRoaXMubGlzdC5oYXNOYW1lZEl0ZW0oaXRlbSkpIHtcbiAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JqZWN0XG4gICAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIGFuIGV4aXN0aW5nIG9iamVjdFxuICAgICAgICB2YXIgcmVzb3VyY2VWZXJzaW9uID0gaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgIGlmICghcmVzb3VyY2VWZXJzaW9uKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0TmFtZWRJdGVtKGdldE5hbWUoaXRlbSkpO1xuICAgICAgICAgIHJlc291cmNlVmVyc2lvbiA9IGN1cnJlbnQubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICAgIGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uID0gcmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBDdXN0b20gY2hlY2tzIGZvciBzcGVjaWZpYyBjYXNlc1xuICAgICAgc3dpdGNoICh0aGlzLl9raW5kKSB7XG4gICAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFUzpcbiAgICAgICAgICBpZiAoaXRlbS5zcGVjLmNsdXN0ZXJJUCA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnNwZWMuY2x1c3RlcklQO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT4ge1xuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oaXRlbSksXG4gICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QuZGVsZXRlZChpdGVtKTtcbiAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PntcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShvcHRpb25zOiBhbnksIG5hbWVzcGFjZT86IGFueSk6Q29sbGVjdGlvbiB7XG4gICAgICB2YXIga2luZCA9IG9wdGlvbnM7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIGtpbmQgPSBvcHRpb25zLmtpbmQ7XG4gICAgICAgIG5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG5hbWVzcGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vcHRpb25zID0ge1xuICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjLnJlbW92ZVJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgaWYgKGMuZGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIGlmIChvcHRpb25zLmtpbmQpIHtcbiAgICAgICAgb3B0aW9ucy5vYmplY3Qua2luZCA9IHRvS2luZE5hbWUob3B0aW9ucy5raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgY2xpZW50LmRlbGV0ZShvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICB9XG5cbiAgLypcbiAgICogQWRkL3JlcGxhY2UgYW4gb2JqZWN0LCBvciBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHB1dChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgcHV0dGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIHB1dCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICBjbGllbnQuZ2V0KChvYmplY3RzKSA9PiB7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICBjbGllbnQucHV0KG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3YXRjaChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IDxDb2xsZWN0aW9uPiBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgaGFuZGxlID0gY2xpZW50LndhdGNoKG9wdGlvbnMuc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBkaXNjb25uZWN0OiAoKSA9PiB7XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
