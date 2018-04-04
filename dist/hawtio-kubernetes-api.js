//defs for third-party eventing library
;
;
var KubernetesAPI;
(function (KubernetesAPI) {
    var consts = /** @class */ (function () {
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
    var KindTypes = /** @class */ (function () {
        function KindTypes() {
        }
        Object.defineProperty(KindTypes, "LIST", {
            get: function () { return "List"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "ENDPOINTS", {
            get: function () { return "Endpoint"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "EVENTS", {
            get: function () { return "Event"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "NAMESPACES", {
            get: function () { return "Namespace"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "NODES", {
            get: function () { return "Node"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "PERSISTENT_VOLUMES", {
            get: function () { return "PersistentVolume"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "PERSISTENT_VOLUME_CLAIMS", {
            get: function () { return "PersistentVolumeClaim"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "PODS", {
            get: function () { return "Pod"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "REPLICATION_CONTROLLERS", {
            get: function () { return "ReplicationController"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "REPLICA_SETS", {
            get: function () { return "ReplicaSet"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "RESOURCE_QUOTAS", {
            get: function () { return "ResourceQuota"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "OAUTH_CLIENTS", {
            get: function () { return "OAuthClient"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "SECRETS", {
            get: function () { return "Secret"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "SERVICES", {
            get: function () { return "Service"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "SERVICE_ACCOUNTS", {
            get: function () { return "ServiceAccount"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "CONFIG_MAPS", {
            get: function () { return "ConfigMap"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "INGRESSES", {
            get: function () { return "Ingress"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "TEMPLATES", {
            get: function () { return "Template"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "ROUTES", {
            get: function () { return "Route"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "BUILD_CONFIGS", {
            get: function () { return "BuildConfig"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "BUILDS", {
            get: function () { return "Build"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "DEPLOYMENT_CONFIGS", {
            get: function () { return "DeploymentConfig"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "DEPLOYMENTS", {
            get: function () { return "Deployment"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "IMAGES", {
            get: function () { return "Image"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "IMAGE_STREAMS", {
            get: function () { return "ImageStream"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "IMAGE_STREAM_TAGS", {
            get: function () { return "ImageStreamTag"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "POLICIES", {
            get: function () { return "Policy"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "POLICY_BINDINGS", {
            get: function () { return "PolicyBinding"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "PROJECTS", {
            get: function () { return "Project"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "ROLE_BINDINGS", {
            get: function () { return "RoleBinding"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "ROLES", {
            get: function () { return "Role"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KindTypes, "DAEMONSETS", {
            get: function () { return "DaemonSet"; },
            enumerable: true,
            configurable: true
        });
        return KindTypes;
    }());
    KubernetesAPI.KindTypes = KindTypes;
    var WatchTypes = /** @class */ (function () {
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
    var ExtensionTypes = /** @class */ (function () {
        function ExtensionTypes() {
        }
        Object.defineProperty(ExtensionTypes, "extensions", {
            get: function () {
                return [
                    WatchTypes.DAEMONSETS,
                    WatchTypes.DEPLOYMENTS,
                    WatchTypes.INGRESSES,
                    WatchTypes.REPLICA_SETS
                ];
            },
            enumerable: true,
            configurable: true
        });
        return ExtensionTypes;
    }());
    KubernetesAPI.ExtensionTypes = ExtensionTypes;
    var NamespacedTypes = /** @class */ (function () {
        function NamespacedTypes() {
        }
        Object.defineProperty(NamespacedTypes, "k8sTypes", {
            get: function () {
                return [
                    WatchTypes.CONFIG_MAPS,
                    WatchTypes.DEPLOYMENTS,
                    WatchTypes.ENDPOINTS,
                    WatchTypes.EVENTS,
                    WatchTypes.NODES,
                    WatchTypes.PERSISTENT_VOLUMES,
                    WatchTypes.PERSISTENT_VOLUME_CLAIMS,
                    WatchTypes.PODS,
                    WatchTypes.REPLICA_SETS,
                    WatchTypes.REPLICATION_CONTROLLERS,
                    WatchTypes.RESOURCE_QUOTAS,
                    WatchTypes.SECRETS,
                    WatchTypes.SERVICE_ACCOUNTS,
                    WatchTypes.SERVICES
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NamespacedTypes, "osTypes", {
            get: function () {
                return [
                    WatchTypes.BUILDS,
                    WatchTypes.BUILD_CONFIGS,
                    WatchTypes.DEPLOYMENT_CONFIGS,
                    WatchTypes.IMAGE_STREAMS,
                    WatchTypes.IMAGE_STREAM_TAGS,
                    WatchTypes.OAUTH_CLIENTS,
                    WatchTypes.POLICIES,
                    WatchTypes.POLICY_BINDINGS,
                    WatchTypes.PROJECTS,
                    WatchTypes.ROLES,
                    WatchTypes.ROLE_BINDINGS,
                    WatchTypes.ROUTES,
                    WatchTypes.TEMPLATES
                ];
            },
            enumerable: true,
            configurable: true
        });
        return NamespacedTypes;
    }());
    KubernetesAPI.NamespacedTypes = NamespacedTypes;
    var WatchActions = /** @class */ (function () {
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
/// <reference path="kubernetesApiInterfaces.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    KubernetesAPI.pluginName = 'KubernetesAPI';
    KubernetesAPI.pluginPath = 'plugins/kubernetes-api/';
    KubernetesAPI.templatePath = KubernetesAPI.pluginPath + 'html/';
    KubernetesAPI.log = Logger.get(KubernetesAPI.pluginName);
    KubernetesAPI.keepPollingModel = true;
    KubernetesAPI.defaultIconUrl = Core.url("/img/kubernetes.svg");
    KubernetesAPI.hostIconUrl = Core.url("/img/host.svg");
    // this gets set as a pre-bootstrap task
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
/// <reference path="kubernetesApiGlobals.ts"/>
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
        if (_.some(KubernetesAPI.ExtensionTypes.extensions, function (t) { return t === kind; })) {
            return KubernetesAPI.K8S_EXT_PREFIX;
        }
        if (_.some(KubernetesAPI.NamespacedTypes.k8sTypes, function (t) { return t === kind; })) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.some(KubernetesAPI.NamespacedTypes.osTypes, function (t) { return t === kind; })) {
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
    /*
     * Extracts the k8s/openshift error response if present
     */
    function getErrorObject(jqXHR) {
        var answer = jqXHR.responseText;
        try {
            answer = angular.fromJson(answer);
        }
        catch (err) {
            // nothing to do...
        }
        return answer;
    }
    KubernetesAPI.getErrorObject = getErrorObject;
    /*
     * Returns either secure/insecure websocket protocol based on the master URI protocol
     */
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
    /*
     * Returns the single 'kind' of an object from the collection kind
     */
    function toKindName(kind) {
        if (angular.isObject(kind)) {
            return getKind(kind);
        }
        switch (kind) {
            case KubernetesAPI.WatchTypes.LIST: return KubernetesAPI.KindTypes.LIST;
            case KubernetesAPI.WatchTypes.ENDPOINTS: return KubernetesAPI.KindTypes.ENDPOINTS;
            case KubernetesAPI.WatchTypes.EVENTS: return KubernetesAPI.KindTypes.EVENTS;
            case KubernetesAPI.WatchTypes.NAMESPACES: return KubernetesAPI.KindTypes.NAMESPACES;
            case KubernetesAPI.WatchTypes.NODES: return KubernetesAPI.KindTypes.NODES;
            case KubernetesAPI.WatchTypes.PERSISTENT_VOLUMES: return KubernetesAPI.KindTypes.PERSISTENT_VOLUMES;
            case KubernetesAPI.WatchTypes.PERSISTENT_VOLUME_CLAIMS: return KubernetesAPI.KindTypes.PERSISTENT_VOLUME_CLAIMS;
            case KubernetesAPI.WatchTypes.PODS: return KubernetesAPI.KindTypes.PODS;
            case KubernetesAPI.WatchTypes.REPLICATION_CONTROLLERS: return KubernetesAPI.KindTypes.REPLICATION_CONTROLLERS;
            case KubernetesAPI.WatchTypes.REPLICA_SETS: return KubernetesAPI.KindTypes.REPLICA_SETS;
            case KubernetesAPI.WatchTypes.RESOURCE_QUOTAS: return KubernetesAPI.KindTypes.RESOURCE_QUOTAS;
            case KubernetesAPI.WatchTypes.OAUTH_CLIENTS: return KubernetesAPI.KindTypes.OAUTH_CLIENTS;
            case KubernetesAPI.WatchTypes.SECRETS: return KubernetesAPI.KindTypes.SECRETS;
            case KubernetesAPI.WatchTypes.SERVICES: return KubernetesAPI.KindTypes.SERVICES;
            case KubernetesAPI.WatchTypes.SERVICE_ACCOUNTS: return KubernetesAPI.KindTypes.SERVICE_ACCOUNTS;
            case KubernetesAPI.WatchTypes.CONFIG_MAPS: return KubernetesAPI.KindTypes.CONFIG_MAPS;
            case KubernetesAPI.WatchTypes.INGRESSES: return KubernetesAPI.KindTypes.INGRESSES;
            case KubernetesAPI.WatchTypes.TEMPLATES: return KubernetesAPI.KindTypes.TEMPLATES;
            case KubernetesAPI.WatchTypes.ROUTES: return KubernetesAPI.KindTypes.ROUTES;
            case KubernetesAPI.WatchTypes.BUILD_CONFIGS: return KubernetesAPI.KindTypes.BUILD_CONFIGS;
            case KubernetesAPI.WatchTypes.BUILDS: return KubernetesAPI.KindTypes.BUILDS;
            case KubernetesAPI.WatchTypes.DEPLOYMENT_CONFIGS: return KubernetesAPI.KindTypes.DEPLOYMENT_CONFIGS;
            case KubernetesAPI.WatchTypes.DEPLOYMENTS: return KubernetesAPI.KindTypes.DEPLOYMENTS;
            case KubernetesAPI.WatchTypes.IMAGES: return KubernetesAPI.KindTypes.IMAGES;
            case KubernetesAPI.WatchTypes.IMAGE_STREAMS: return KubernetesAPI.KindTypes.IMAGE_STREAMS;
            case KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS: return KubernetesAPI.KindTypes.IMAGE_STREAM_TAGS;
            case KubernetesAPI.WatchTypes.POLICIES: return KubernetesAPI.KindTypes.POLICIES;
            case KubernetesAPI.WatchTypes.POLICY_BINDINGS: return KubernetesAPI.KindTypes.POLICY_BINDINGS;
            case KubernetesAPI.WatchTypes.PROJECTS: return KubernetesAPI.KindTypes.PROJECTS;
            case KubernetesAPI.WatchTypes.ROLE_BINDINGS: return KubernetesAPI.KindTypes.ROLE_BINDINGS;
            case KubernetesAPI.WatchTypes.ROLES: return KubernetesAPI.KindTypes.ROLES;
            case KubernetesAPI.WatchTypes.DAEMONSETS: return KubernetesAPI.KindTypes.DAEMONSETS;
            default: return kind;
        }
    }
    KubernetesAPI.toKindName = toKindName;
    /*
     * Returns the collection kind of an object from the singular kind
     */
    function toCollectionName(kind) {
        if (angular.isObject(kind)) {
            kind = getKind(kind);
        }
        switch (kind) {
            case KubernetesAPI.KindTypes.LIST: return KubernetesAPI.WatchTypes.LIST;
            case KubernetesAPI.KindTypes.ENDPOINTS: return KubernetesAPI.WatchTypes.ENDPOINTS;
            case KubernetesAPI.KindTypes.EVENTS: return KubernetesAPI.WatchTypes.EVENTS;
            case KubernetesAPI.KindTypes.NAMESPACES: return KubernetesAPI.WatchTypes.NAMESPACES;
            case KubernetesAPI.KindTypes.NODES: return KubernetesAPI.WatchTypes.NODES;
            case KubernetesAPI.KindTypes.PERSISTENT_VOLUMES: return KubernetesAPI.WatchTypes.PERSISTENT_VOLUMES;
            case KubernetesAPI.KindTypes.PERSISTENT_VOLUME_CLAIMS: return KubernetesAPI.WatchTypes.PERSISTENT_VOLUME_CLAIMS;
            case KubernetesAPI.KindTypes.PODS: return KubernetesAPI.WatchTypes.PODS;
            case KubernetesAPI.KindTypes.REPLICATION_CONTROLLERS: return KubernetesAPI.WatchTypes.REPLICATION_CONTROLLERS;
            case KubernetesAPI.KindTypes.REPLICA_SETS: return KubernetesAPI.WatchTypes.REPLICA_SETS;
            case KubernetesAPI.KindTypes.RESOURCE_QUOTAS: return KubernetesAPI.WatchTypes.RESOURCE_QUOTAS;
            case KubernetesAPI.KindTypes.OAUTH_CLIENTS: return KubernetesAPI.WatchTypes.OAUTH_CLIENTS;
            case KubernetesAPI.KindTypes.SECRETS: return KubernetesAPI.WatchTypes.SECRETS;
            case KubernetesAPI.KindTypes.SERVICES: return KubernetesAPI.WatchTypes.SERVICES;
            case KubernetesAPI.KindTypes.SERVICE_ACCOUNTS: return KubernetesAPI.WatchTypes.SERVICE_ACCOUNTS;
            case KubernetesAPI.KindTypes.CONFIG_MAPS: return KubernetesAPI.WatchTypes.CONFIG_MAPS;
            case KubernetesAPI.KindTypes.INGRESSES: return KubernetesAPI.WatchTypes.INGRESSES;
            case KubernetesAPI.KindTypes.TEMPLATES: return KubernetesAPI.WatchTypes.TEMPLATES;
            case KubernetesAPI.KindTypes.ROUTES: return KubernetesAPI.WatchTypes.ROUTES;
            case KubernetesAPI.KindTypes.BUILD_CONFIGS: return KubernetesAPI.WatchTypes.BUILD_CONFIGS;
            case KubernetesAPI.KindTypes.BUILDS: return KubernetesAPI.WatchTypes.BUILDS;
            case KubernetesAPI.KindTypes.DEPLOYMENT_CONFIGS: return KubernetesAPI.WatchTypes.DEPLOYMENT_CONFIGS;
            case KubernetesAPI.KindTypes.DEPLOYMENTS: return KubernetesAPI.WatchTypes.DEPLOYMENTS;
            case KubernetesAPI.KindTypes.IMAGES: return KubernetesAPI.WatchTypes.IMAGES;
            case KubernetesAPI.KindTypes.IMAGE_STREAMS: return KubernetesAPI.WatchTypes.IMAGE_STREAMS;
            case KubernetesAPI.KindTypes.IMAGE_STREAM_TAGS: return KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS;
            case KubernetesAPI.KindTypes.POLICIES: return KubernetesAPI.WatchTypes.POLICIES;
            case KubernetesAPI.KindTypes.POLICY_BINDINGS: return KubernetesAPI.WatchTypes.POLICY_BINDINGS;
            case KubernetesAPI.KindTypes.PROJECTS: return KubernetesAPI.WatchTypes.PROJECTS;
            case KubernetesAPI.KindTypes.ROLE_BINDINGS: return KubernetesAPI.WatchTypes.ROLE_BINDINGS;
            case KubernetesAPI.KindTypes.ROLES: return KubernetesAPI.WatchTypes.ROLES;
            case KubernetesAPI.KindTypes.DAEMONSETS: return KubernetesAPI.WatchTypes.DAEMONSETS;
            default: return kind;
        }
    }
    KubernetesAPI.toCollectionName = toCollectionName;
    /*
     * Returns the websocket URL for the supplied URL
     */
    function wsUrl(url) {
        var protocol = wsScheme(url);
        return new URI(url).scheme(protocol);
    }
    KubernetesAPI.wsUrl = wsUrl;
    /*
     * Compare two k8s objects based on their UID
     */
    function equals(left, right) {
        var leftUID = getUID(left);
        var rightUID = getUID(right);
        if (!leftUID && !rightUID) {
            return angular.toJson(left) === angular.toJson(right);
        }
        return leftUID === rightUID;
    }
    KubernetesAPI.equals = equals;
    /**
     *
     * Kubernetes object helpers
     *
     **/
    /**
     * Create a list of kubernetes objects suitable for posting a bunch of objects
     */
    function createList() {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
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
    /**
     * Create an object suitable for delete/del
     */
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
    /**
     * Filter a collection by label
     **/
    function filterByLabel(objects, labelSelector) {
        var matches = _.matches(labelSelector);
        return _.filter(objects, function (object) {
            return matches(getLabels(object));
        });
    }
    KubernetesAPI.filterByLabel = filterByLabel;
    /**
     * Apply the given namespace to an object if it isn't already set
     */
    function applyNamespace(obj, namespace) {
        if (!obj.kind || !namespace) {
            return;
        }
        if (namespaced(toCollectionName(obj.kind)) && !obj.metadata.namespace) {
            obj.metadata.namespace = namespace;
        }
    }
    KubernetesAPI.applyNamespace = applyNamespace;
    /**
     * Returns a fully scoped name with the namespace/kind, suitable to use as a key in maps
     **/
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
        // some objects aren't namespaced, so this can return null;
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
    /**
     * Returns the labels text string using the <code>key1=value1,key2=value2,....</code> format
     */
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
    /**
     * Returns true if the current status of the pod is running
     */
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
    /**
     * Returns true if the labels object has all of the key/value pairs from the selector
     */
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
/// <reference path="kubernetesApiHelpers.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    addProductInfo.$inject = ["aboutService"];
    KubernetesAPI._module = angular.module(KubernetesAPI.pluginName, []);
    function addProductInfo(aboutService) {
        'ngInject';
        aboutService.addProductInfo('Hawtio Kubernetes API', '3.1.1');
    }
    KubernetesAPI._module.run(addProductInfo);
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesApiConfig',
        depends: ['KubernetesApiInit'],
        task: function (next) {
            KubernetesAPI.K8S_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'k8s', 'prefix']) || KubernetesAPI.K8S_PREFIX, '/');
            KubernetesAPI.OS_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']) || KubernetesAPI.OS_PREFIX, '/');
            next();
        }
    });
    // Since we're using jenkinshift in vanilla k8s, let's poll build configs by default
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
    // Detect if we're running against openshift or not
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesAPIProviderInit',
        depends: ['hawtio-oauth', 'KubernetesApiInit'],
        task: function (next) {
            KubernetesAPI.isOpenShift = false;
            // probe /oapi/v1 as it's has all the openshift extensions
            var testURL = new URI(KubernetesAPI.masterUrl).segment('oapi/v1').toString();
            $.ajax({
                url: testURL,
                method: 'GET',
                success: function (data) {
                    KubernetesAPI.log.info("Backend is an openshift instance");
                    KubernetesAPI.isOpenShift = true;
                    next();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    KubernetesAPI.log.info("Error probing " + testURL + " assuming backend is not an openshift instance.  Error details: status: ", textStatus, " errorThrown: ", errorThrown, " jqXHR instance: ", jqXHR);
                    next();
                }
            });
        }
    });
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'FetchConfig',
        task: function (next) {
            $.getScript('osconsole/config.js')
                .always(function () {
                KubernetesAPI.log.debug("Fetched openshift config: ", window['OPENSHIFT_CONFIG']);
                KubernetesAPI.log.debug("Fetched keycloak config: ", window['KeycloakConfig']);
                OSOAuthConfig = _.get(window, 'OPENSHIFT_CONFIG.openshift');
                GoogleOAuthConfig = _.get(window, 'OPENSHIFT_CONFIG.google');
                next();
            });
        }
    }, true);
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesApiInit',
        depends: ['FetchConfig'],
        task: function (next) {
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
            // We'll just grab the URI for the document here in case we need it
            var documentURI = new URI().path(HawtioCore.documentBase());
            if (!master || master === "/") {
                // lets default the master to the current protocol and host/port
                // in case the master url is "/" and we are
                // serving up static content from inside /api/v1/namespaces/default/services/fabric8 or something like that
                KubernetesAPI.log.info("master_url unset or set to '/', assuming API server is at /");
                master = documentURI.query("").toString();
            }
            if (master === "k8s") {
                // We're using the built-in kuisp proxy to access the API server
                KubernetesAPI.log.info("master_url set to 'k8s', assuming proxy is being used");
                master = documentURI.query("").segment(master).toString();
            }
            KubernetesAPI.log.info("Using kubernetes API URL: ", master);
            KubernetesAPI.masterUrl = master;
            next();
        }
    });
    hawtioPluginLoader.addModule(KubernetesAPI.pluginName);
})(KubernetesAPI || (KubernetesAPI = {}));
/// <reference path="kubernetesApiGlobals.ts"/>
/// <reference path="kubernetesApiHelpers.ts"/>
/// <reference path="kubernetesApiPlugin.ts"/>
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
    // Allow clients to add other types to force polling under whatever circumstances
    KubernetesAPI.pollingOnly = [KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS];
    /**
     *  Manages the array of k8s objects for a client instance
     **/
    var ObjectList = /** @class */ (function () {
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
                    if (!obj.kind) {
                        obj.kind = KubernetesAPI.toKindName(_this.kind);
                    }
                    _this._objects.push(obj);
                });
                this.initialize();
                this.triggerChangedEvent();
            },
            enumerable: true,
            configurable: true
        });
        ObjectList.prototype.hasNamedItem = function (item) {
            return _.some(this._objects, function (obj) {
                return KubernetesAPI.getName(obj) === KubernetesAPI.getName(item);
            });
        };
        ObjectList.prototype.getNamedItem = function (name) {
            return _.find(this._objects, function (obj) {
                return KubernetesAPI.getName(obj) === name;
            });
        };
        // filter out objects from other namespaces that could be returned
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
            if (!object.kind) {
                object.kind = KubernetesAPI.toKindName(this.kind);
            }
            if (_.some(this._objects, function (obj) {
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
            if (!object.kind) {
                object.kind = KubernetesAPI.toKindName(this.kind);
            }
            if (!_.some(this._objects, function (obj) {
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
            });
        };
        ;
        ObjectList.prototype.deleted = function (object) {
            if (!this.belongs(object)) {
                return;
            }
            var deleted = _.remove(this._objects, function (obj) {
                return KubernetesAPI.equals(obj, object);
            });
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
    /*
     * Manages polling the server for objects that don't support websocket connections
     */
    var ObjectPoller = /** @class */ (function () {
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
                    //log.debug("Result: ", result);
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
                    if (jqXHR.status === 403) {
                        _this.log.info(_this.handler.kind, "- Failed to poll objects, user is not authorized");
                        return;
                    }
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
    /**
     * Manages the websocket connection to the backend and passes events to the ObjectList
     */
    var WSHandler = /** @class */ (function () {
        function WSHandler(_self) {
            this._self = _self;
            this.retries = 0;
            this.connectTime = 0;
            this.self = undefined;
            this.log = undefined;
            this.messageLog = undefined;
            this.destroyed = false;
            this.self = _self;
            this.log = Logger.get('KubernetesAPI.WSHandler');
            this.messageLog = Logger.get('KubernetesAPI.WSHander.messages');
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
            var _this = this;
            _.forIn(self, function (value, key) {
                if (_.startsWith(key, 'on')) {
                    var evt = key.replace('on', '');
                    // this.log.debug("Adding event handler for '" + evt + "' using '" + key + "'");
                    ws.addEventListener(evt, function (event) {
                        _this.messageLog.debug("received websocket event: ", event);
                        self[key](event);
                    });
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
        WSHandler.prototype.shouldClose = function (event) {
            if (this.destroyed && this.socket && this.socket.readyState === WebSocket.OPEN) {
                this.log.debug("Connection destroyed but still receiving messages, closing websocket, kind: ", this.self.kind, " namespace: ", this.self.namespace);
                try {
                    this.log.debug("Closing websocket for kind: ", this.self.kind);
                    this.socket.close();
                }
                catch (err) {
                    // nothing to do, assume it's already closed
                }
                return true;
            }
            return false;
        };
        WSHandler.prototype.onmessage = function (event) {
            if (this.shouldClose(event)) {
                this.log.debug("Should be closed!");
                return;
            }
            var data = JSON.parse(event.data);
            var eventType = data.type.toLowerCase();
            this._list[eventType](data.object);
        };
        ;
        WSHandler.prototype.onopen = function (event) {
            this.log.debug("Received open event for kind: ", this.self.kind, " namespace: ", this.self.namespace);
            if (this.shouldClose(event)) {
                return;
            }
            this.retries = 0;
            this.connectTime = new Date().getTime();
        };
        ;
        WSHandler.prototype.onclose = function (event) {
            var _this = this;
            this.log.debug("Received close event for kind: ", this.self.kind, " namespace: ", this.self.namespace);
            if (this.destroyed) {
                this.log.debug("websocket destroyed for kind: ", this.self.kind, " namespace: ", this.self.namespace);
                delete this.socket;
                return;
            }
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
            this.log.debug("websocket for kind: ", this.self.kind, " received an error: ", event);
            if (this.shouldClose(event)) {
                return;
            }
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
            // in case a custom URL is going to be used
            if (this.self.restURL === '' && this.self.wsURL === '') {
                setTimeout(function () {
                    _this.connect();
                }, 500);
                return;
            }
            if (!this.socket && !this.poller) {
                if (_.some(KubernetesAPI.pollingOnly, function (kind) { return kind === _this.self.kind; })) {
                    this.log.info("Using polling for kind: ", this.self.kind);
                    this.poller = new ObjectPoller(this.self.restURL, this);
                    this.poller.start();
                }
                else {
                    var doConnect = function () {
                        var wsURL = _this.self.wsURL;
                        if (wsURL) {
                            _this.log.debug("Connecting websocket for kind: ", _this.self.kind);
                            _this.socket = new WebSocket(wsURL);
                            _this.setHandlers(_this, _this.socket);
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
                            setTimeout(function () {
                                doConnect();
                            }, 10);
                        }, error: function (jqXHR, text, status) {
                            var err = KubernetesAPI.getErrorObject(jqXHR);
                            if (jqXHR.status === 403) {
                                _this.log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, ", user is not authorized");
                                _this._list.objects = [];
                            }
                            else {
                                _this.log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, " error: ", err);
                                setTimeout(function () {
                                    doConnect();
                                }, 10);
                            }
                        },
                        beforeSend: beforeSend
                    });
                }
            }
        };
        ;
        WSHandler.prototype.destroy = function () {
            this.destroyed = true;
            if (this.socket && this.socket.readyState === WebSocket.OPEN) {
                try {
                    this.log.debug("Closing websocket for kind: ", this.self.kind, " namespace: ", this.self.namespace);
                    this.socket.close();
                    this.log.debug("Close called on websocket for kind: ", this.self.kind, " namespace: ", this.self.namespace);
                }
                catch (err) {
                    // nothing to do, assume it's already closed
                }
            }
            if (this.poller) {
                this.log.debug("Destroying poller for kind: ", this.self.kind, " namespace: ", this.self.namespace);
                this.poller.destroy();
            }
        };
        return WSHandler;
    }());
    /*
     * Implements the external API for working with k8s collections of objects
     */
    var CollectionImpl = /** @class */ (function () {
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
            log.debug("creating new collection for", this.kind, " namespace: ", this.namespace);
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
                    var url = UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path);
                    var location = Core.windowLocation();
                    if (location && url.indexOf("://") < 0) {
                        var hostname = location.hostname;
                        if (hostname) {
                            var port = location.port;
                            if (port) {
                                hostname += ":" + port;
                            }
                            url = UrlHelpers.join(hostname, KubernetesAPI.masterApiUrl(), this._path);
                        }
                    }
                    return KubernetesAPI.wsUrl(url).query({
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
            /*
            delete this.handlers;
            delete this.list;
            */
        };
        CollectionImpl.prototype.addLabelFilter = function (cb, labelSelector) {
            log.debug("Adding label filter: ", labelSelector);
            var cbOld = cb;
            return function (data) {
                data = KubernetesAPI.filterByLabel(data, labelSelector);
                cbOld(data);
            };
        };
        // one time fetch of the data...
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
                // lets trust the url to be correct
            }
            else {
                if (KubernetesAPI.namespaced(KubernetesAPI.toCollectionName(item.kind))) {
                    var namespace = KubernetesAPI.getNamespace(item) || this._namespace;
                    var prefix = this.getPrefix();
                    var kind = this._kind;
                    if (!KubernetesAPI.isOpenShift && (kind === "buildconfigs" || kind === "BuildConfig")) {
                        prefix = UrlHelpers.join("/api/v1/proxy/namespaces", namespace, "/services/jenkinshift:80/", prefix);
                        log.debug("Using buildconfigs URL override");
                    }
                    url = UrlHelpers.join(KubernetesAPI.masterApiUrl(), prefix, 'namespaces', namespace, kind);
                }
            }
            if (useName) {
                url = UrlHelpers.join(url, name);
            }
            return url;
        };
        // continually get updates
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
                // creating a new object
                method = 'POST';
                url = this.restUrlFor(item, false);
            }
            else {
                // updating an existing object
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
            // Custom checks for specific cases
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
    /*
     * Manages references to collection instances to allow them to be shared between views
     */
    var ClientInstance = /** @class */ (function () {
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
            // delete this._collection;
        };
        return ClientInstance;
    }());
    ;
    /*
     * Factory implementation that's available as an angular service
     */
    var K8SClientFactoryImpl = /** @class */ (function () {
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
            if (this._clients[key]) {
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
            if (this._clients[key]) {
                var c = this._clients[key];
                c.removeRef();
                this.log.debug("Removed reference to client with key: ", key, " refcount is: ", c.refCount);
                if (c.disposable()) {
                    this._clients[key] = undefined;
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
    /*
     * Static functions for manipulating k8s obj3cts
     */
    /*
     * Get a collection
     */
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
        // let's try and support also just supplying k8s objects directly
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
        // support deleting a list of objects
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
    /*
     * Add/replace an object, or a list of objects
     */
    function put(options) {
        options = normalizeOptions(options);
        // support putting a list of objects
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMva3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJjb21waWxlZC5qcyIsInBsdWdpbnMva3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUdsb2JhbHMudHMiLCJwbHVnaW5zL2t1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwicGx1Z2lucy9rdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpUGx1Z2luLnRzIiwicGx1Z2lucy9rdWJlcm5ldGVzLWFwaS90cy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFJQztBQU9BO0FBRUQsSUFBTztBQUFQLENBQUEsVUFBTyxlQUFhO0lBRWxCLElBQUEsd0JBQUEsWUFBQTtRQUFBLFNBQUEsU0FBQTs7UUFDRSxPQUFBLGVBQUksT0FBQSxXQUFBLHlCQUFxQjtZQ1BqQixLRE9SLFlBQUEsRUFBcUMsT0FBTztZQ05wQyxZQUFZO1lBQ1osY0FBYzs7UURNeEIsT0FBQTs7SUFGYSxjQUFBLFNBQU07SUFJUixjQUFBLFlBQVksSUFBSTtJQThDM0IsSUFBQSwyQkFBQSxZQUFBO1FBQUEsU0FBQSxZQUFBOztRQUNFLE9BQUEsZUFBa0IsV0FBQSxRQUFJO1lDN0NkLEtENkNSLFlBQUEsRUFBa0MsT0FBTztZQzVDakMsWUFBWTtZQUNaLGNBQWM7O1FENEN4QixPQUFBLGVBQWtCLFdBQUEsYUFBUztZQ3pDakIsS0R5Q1YsWUFBQSxFQUF1QyxPQUFPO1lDeENwQyxZQUFZO1lBQ1osY0FBYzs7UUR3Q3hCLE9BQUEsZUFBa0IsV0FBQSxVQUFNO1lDckNkLEtEcUNWLFlBQUEsRUFBb0MsT0FBTztZQ3BDakMsWUFBWTtZQUNaLGNBQWM7O1FEb0N0QixPQUFBLGVBQWtCLFdBQUEsY0FBVTtZQ2pDcEIsS0RpQ1IsWUFBQSxFQUF3QyxPQUFPO1lDaEN2QyxZQUFZO1lBQ1osY0FBYzs7UURnQ3hCLE9BQUEsZUFBa0IsV0FBQSxTQUFLO1lDN0JiLEtENkJWLFlBQUEsRUFBbUMsT0FBTztZQzVCaEMsWUFBWTtZQUNaLGNBQWM7O1FENEJ4QixPQUFBLGVBQWtCLFdBQUEsc0JBQWtCO1lDekIxQixLRHlCVixZQUFBLEVBQWdELE9BQU87WUN4QjdDLFlBQVk7WUFDWixjQUFjOztRRHdCeEIsT0FBQSxlQUFrQixXQUFBLDRCQUF3QjtZQ3JCaEMsS0RxQlYsWUFBQSxFQUFzRCxPQUFPO1lDcEJuRCxZQUFZO1lBQ1osY0FBYzs7UURvQnhCLE9BQUEsZUFBa0IsV0FBQSxRQUFJO1lDakJaLEtEaUJWLFlBQUEsRUFBa0MsT0FBTztZQ2hCL0IsWUFBWTtZQUNaLGNBQWM7O1FEZ0J4QixPQUFBLGVBQWtCLFdBQUEsMkJBQXVCO1lDYi9CLEtEYVYsWUFBQSxFQUFxRCxPQUFPO1lDWmxELFlBQVk7WUFDWixjQUFjOztRRFl0QixPQUFBLGVBQWtCLFdBQUEsZ0JBQVk7WUNUdEIsS0RTUixZQUFBLEVBQTBDLE9BQU87WUNSekMsWUFBWTtZQUNaLGNBQWM7O1FEUXhCLE9BQUEsZUFBa0IsV0FBQSxtQkFBZTtZQ0x2QixLREtWLFlBQUEsRUFBNkMsT0FBTztZQ0oxQyxZQUFZO1lBQ1osY0FBYzs7UURJeEIsT0FBQSxlQUFrQixXQUFBLGlCQUFhO1lDRHJCLEtEQ1YsWUFBQSxFQUEyQyxPQUFPO1lDQXhDLFlBQVk7WUFDWixjQUFjOztRREF4QixPQUFBLGVBQWtCLFdBQUEsV0FBTztZQ0dmLEtESFYsWUFBQSxFQUFxQyxPQUFPO1lDSWxDLFlBQVk7WUFDWixjQUFjOztRREp4QixPQUFBLGVBQWtCLFdBQUEsWUFBUTtZQ09oQixLRFBWLFlBQUEsRUFBc0MsT0FBTztZQ1FuQyxZQUFZO1lBQ1osY0FBYzs7UURSeEIsT0FBQSxlQUFrQixXQUFBLG9CQUFnQjtZQ1d4QixLRFhWLFlBQUEsRUFBOEMsT0FBTztZQ1kzQyxZQUFZO1lBQ1osY0FBYzs7UURaeEIsT0FBQSxlQUFrQixXQUFBLGVBQVc7WUNlbkIsS0RmVixZQUFBLEVBQXlDLE9BQU87WUNnQnRDLFlBQVk7WUFDWixjQUFjOztRRGhCeEIsT0FBQSxlQUFrQixXQUFBLGFBQVM7WUNtQmpCLEtEbkJWLFlBQUEsRUFBdUMsT0FBTztZQ29CcEMsWUFBWTtZQUNaLGNBQWM7O1FEbkJ4QixPQUFBLGVBQWtCLFdBQUEsYUFBUztZQ3NCakIsS0R0QlYsWUFBQSxFQUF1QyxPQUFPO1lDdUJwQyxZQUFZO1lBQ1osY0FBYzs7UUR2QnhCLE9BQUEsZUFBa0IsV0FBQSxVQUFNO1lDMEJkLEtEMUJWLFlBQUEsRUFBb0MsT0FBTztZQzJCakMsWUFBWTtZQUNaLGNBQWM7O1FEM0J4QixPQUFBLGVBQWtCLFdBQUEsaUJBQWE7WUM4QnJCLEtEOUJWLFlBQUEsRUFBMkMsT0FBTztZQytCeEMsWUFBWTtZQUNaLGNBQWM7O1FEL0J4QixPQUFBLGVBQWtCLFdBQUEsVUFBTTtZQ2tDZCxLRGxDVixZQUFBLEVBQW9DLE9BQU87WUNtQ2pDLFlBQVk7WUFDWixjQUFjOztRRG5DeEIsT0FBQSxlQUFrQixXQUFBLHNCQUFrQjtZQ3NDMUIsS0R0Q1YsWUFBQSxFQUFnRCxPQUFPO1lDdUM3QyxZQUFZO1lBQ1osY0FBYzs7UUR2Q3RCLE9BQUEsZUFBa0IsV0FBQSxlQUFXO1lDMENyQixLRDFDUixZQUFBLEVBQXlDLE9BQU87WUMyQ3hDLFlBQVk7WUFDWixjQUFjOztRRDNDeEIsT0FBQSxlQUFrQixXQUFBLFVBQU07WUM4Q2QsS0Q5Q1YsWUFBQSxFQUFvQyxPQUFPO1lDK0NqQyxZQUFZO1lBQ1osY0FBYzs7UUQvQ3hCLE9BQUEsZUFBa0IsV0FBQSxpQkFBYTtZQ2tEckIsS0RsRFYsWUFBQSxFQUEyQyxPQUFPO1lDbUR4QyxZQUFZO1lBQ1osY0FBYzs7UURuRHhCLE9BQUEsZUFBa0IsV0FBQSxxQkFBaUI7WUNzRHpCLEtEdERWLFlBQUEsRUFBK0MsT0FBTztZQ3VENUMsWUFBWTtZQUNaLGNBQWM7O1FEdkR4QixPQUFBLGVBQWtCLFdBQUEsWUFBUTtZQzBEaEIsS0QxRFYsWUFBQSxFQUFzQyxPQUFPO1lDMkRuQyxZQUFZO1lBQ1osY0FBYzs7UUQzRHhCLE9BQUEsZUFBa0IsV0FBQSxtQkFBZTtZQzhEdkIsS0Q5RFYsWUFBQSxFQUE2QyxPQUFPO1lDK0QxQyxZQUFZO1lBQ1osY0FBYzs7UUQvRHRCLE9BQUEsZUFBa0IsV0FBQSxZQUFRO1lDa0VsQixLRGxFUixZQUFBLEVBQXNDLE9BQU87WUNtRXJDLFlBQVk7WUFDWixjQUFjOztRRG5FeEIsT0FBQSxlQUFrQixXQUFBLGlCQUFhO1lDc0VyQixLRHRFVixZQUFBLEVBQTJDLE9BQU87WUN1RXhDLFlBQVk7WUFDWixjQUFjOztRRHZFeEIsT0FBQSxlQUFrQixXQUFBLFNBQUs7WUMwRWIsS0QxRVYsWUFBQSxFQUFtQyxPQUFPO1lDMkVoQyxZQUFZO1lBQ1osY0FBYzs7UUQzRXRCLE9BQUEsZUFBa0IsV0FBQSxjQUFVO1lDOEVwQixLRDlFUixZQUFBLEVBQXdDLE9BQU87WUMrRXZDLFlBQVk7WUFDWixjQUFjOztRRC9FeEIsT0FBQTs7SUFsQ2EsY0FBQSxZQUFTO0lBb0N2QixJQUFBLDRCQUFBLFlBQUE7UUFBQSxTQUFBLGFBQUE7O1FBQ0csT0FBQSxlQUFrQixZQUFBLFFBQUk7WUNxRmQsS0RyRlIsWUFBQSxFQUFrQyxPQUFPO1lDc0ZqQyxZQUFZO1lBQ1osY0FBYzs7UUR0RnhCLE9BQUEsZUFBa0IsWUFBQSxhQUFTO1lDeUZqQixLRHpGVixZQUFBLEVBQXVDLE9BQU87WUMwRnBDLFlBQVk7WUFDWixjQUFjOztRRDFGeEIsT0FBQSxlQUFrQixZQUFBLFVBQU07WUM2RmQsS0Q3RlYsWUFBQSxFQUFvQyxPQUFPO1lDOEZqQyxZQUFZO1lBQ1osY0FBYzs7UUQ5RnRCLE9BQUEsZUFBa0IsWUFBQSxjQUFVO1lDaUdwQixLRGpHUixZQUFBLEVBQXdDLE9BQU87WUNrR3ZDLFlBQVk7WUFDWixjQUFjOztRRGxHeEIsT0FBQSxlQUFrQixZQUFBLFNBQUs7WUNxR2IsS0RyR1YsWUFBQSxFQUFtQyxPQUFPO1lDc0doQyxZQUFZO1lBQ1osY0FBYzs7UUR0R3hCLE9BQUEsZUFBa0IsWUFBQSxzQkFBa0I7WUN5RzFCLEtEekdWLFlBQUEsRUFBZ0QsT0FBTztZQzBHN0MsWUFBWTtZQUNaLGNBQWM7O1FEMUd4QixPQUFBLGVBQWtCLFlBQUEsNEJBQXdCO1lDNkdoQyxLRDdHVixZQUFBLEVBQXNELE9BQU87WUM4R25ELFlBQVk7WUFDWixjQUFjOztRRDlHeEIsT0FBQSxlQUFrQixZQUFBLFFBQUk7WUNpSFosS0RqSFYsWUFBQSxFQUFrQyxPQUFPO1lDa0gvQixZQUFZO1lBQ1osY0FBYzs7UURsSHhCLE9BQUEsZUFBa0IsWUFBQSwyQkFBdUI7WUNxSC9CLEtEckhWLFlBQUEsRUFBcUQsT0FBTztZQ3NIbEQsWUFBWTtZQUNaLGNBQWM7O1FEdEh0QixPQUFBLGVBQWtCLFlBQUEsZ0JBQVk7WUN5SHRCLEtEekhSLFlBQUEsRUFBMEMsT0FBTztZQzBIekMsWUFBWTtZQUNaLGNBQWM7O1FEMUh4QixPQUFBLGVBQWtCLFlBQUEsbUJBQWU7WUM2SHZCLEtEN0hWLFlBQUEsRUFBNkMsT0FBTztZQzhIMUMsWUFBWTtZQUNaLGNBQWM7O1FEOUh4QixPQUFBLGVBQWtCLFlBQUEsaUJBQWE7WUNpSXJCLEtEaklWLFlBQUEsRUFBMkMsT0FBTztZQ2tJeEMsWUFBWTtZQUNaLGNBQWM7O1FEbEl4QixPQUFBLGVBQWtCLFlBQUEsV0FBTztZQ3FJZixLRHJJVixZQUFBLEVBQXFDLE9BQU87WUNzSWxDLFlBQVk7WUFDWixjQUFjOztRRHRJeEIsT0FBQSxlQUFrQixZQUFBLFlBQVE7WUN5SWhCLEtEeklWLFlBQUEsRUFBc0MsT0FBTztZQzBJbkMsWUFBWTtZQUNaLGNBQWM7O1FEMUl4QixPQUFBLGVBQWtCLFlBQUEsb0JBQWdCO1lDNkl4QixLRDdJVixZQUFBLEVBQThDLE9BQU87WUM4STNDLFlBQVk7WUFDWixjQUFjOztRRDlJeEIsT0FBQSxlQUFrQixZQUFBLGVBQVc7WUNpSm5CLEtEakpWLFlBQUEsRUFBeUMsT0FBTztZQ2tKdEMsWUFBWTtZQUNaLGNBQWM7O1FEbEp4QixPQUFBLGVBQWtCLFlBQUEsYUFBUztZQ3FKakIsS0RySlYsWUFBQSxFQUF1QyxPQUFPO1lDc0pwQyxZQUFZO1lBQ1osY0FBYzs7UURySnhCLE9BQUEsZUFBa0IsWUFBQSxhQUFTO1lDd0pqQixLRHhKVixZQUFBLEVBQXVDLE9BQU87WUN5SnBDLFlBQVk7WUFDWixjQUFjOztRRHpKeEIsT0FBQSxlQUFrQixZQUFBLFVBQU07WUM0SmQsS0Q1SlYsWUFBQSxFQUFvQyxPQUFPO1lDNkpqQyxZQUFZO1lBQ1osY0FBYzs7UUQ3SnhCLE9BQUEsZUFBa0IsWUFBQSxpQkFBYTtZQ2dLckIsS0RoS1YsWUFBQSxFQUEyQyxPQUFPO1lDaUt4QyxZQUFZO1lBQ1osY0FBYzs7UURqS3hCLE9BQUEsZUFBa0IsWUFBQSxVQUFNO1lDb0tkLEtEcEtWLFlBQUEsRUFBb0MsT0FBTztZQ3FLakMsWUFBWTtZQUNaLGNBQWM7O1FEckt4QixPQUFBLGVBQWtCLFlBQUEsc0JBQWtCO1lDd0sxQixLRHhLVixZQUFBLEVBQWdELE9BQU87WUN5SzdDLFlBQVk7WUFDWixjQUFjOztRRHpLdEIsT0FBQSxlQUFrQixZQUFBLGVBQVc7WUM0S3JCLEtENUtSLFlBQUEsRUFBeUMsT0FBTztZQzZLeEMsWUFBWTtZQUNaLGNBQWM7O1FEN0t4QixPQUFBLGVBQWtCLFlBQUEsVUFBTTtZQ2dMZCxLRGhMVixZQUFBLEVBQW9DLE9BQU87WUNpTGpDLFlBQVk7WUFDWixjQUFjOztRRGpMeEIsT0FBQSxlQUFrQixZQUFBLGlCQUFhO1lDb0xyQixLRHBMVixZQUFBLEVBQTJDLE9BQU87WUNxTHhDLFlBQVk7WUFDWixjQUFjOztRRHJMeEIsT0FBQSxlQUFrQixZQUFBLHFCQUFpQjtZQ3dMekIsS0R4TFYsWUFBQSxFQUErQyxPQUFPO1lDeUw1QyxZQUFZO1lBQ1osY0FBYzs7UUR6THhCLE9BQUEsZUFBa0IsWUFBQSxZQUFRO1lDNExoQixLRDVMVixZQUFBLEVBQXNDLE9BQU87WUM2TG5DLFlBQVk7WUFDWixjQUFjOztRRDdMeEIsT0FBQSxlQUFrQixZQUFBLG1CQUFlO1lDZ012QixLRGhNVixZQUFBLEVBQTZDLE9BQU87WUNpTTFDLFlBQVk7WUFDWixjQUFjOztRRGpNdEIsT0FBQSxlQUFrQixZQUFBLFlBQVE7WUNvTWxCLEtEcE1SLFlBQUEsRUFBc0MsT0FBTztZQ3FNckMsWUFBWTtZQUNaLGNBQWM7O1FEck14QixPQUFBLGVBQWtCLFlBQUEsaUJBQWE7WUN3TXJCLEtEeE1WLFlBQUEsRUFBMkMsT0FBTztZQ3lNeEMsWUFBWTtZQUNaLGNBQWM7O1FEek14QixPQUFBLGVBQWtCLFlBQUEsU0FBSztZQzRNYixLRDVNVixZQUFBLEVBQW1DLE9BQU87WUM2TWhDLFlBQVk7WUFDWixjQUFjOztRRDdNdEIsT0FBQSxlQUFrQixZQUFBLGNBQVU7WUNnTnBCLEtEaE5SLFlBQUEsRUFBd0MsT0FBTztZQ2lOdkMsWUFBWTtZQUNaLGNBQWM7O1FEak56QixPQUFBOztJQWxDYSxjQUFBLGFBQVU7SUFvQ3RCLElBQUEsZ0NBQUEsWUFBQTtRQUFBLFNBQUEsaUJBQUE7O1FBQ0UsT0FBQSxlQUFrQixnQkFBQSxjQUFVO1lDdU5wQixLRHZOUixZQUFBO2dCQUNFLE9BQU87b0JBQ0wsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVzs7O1lDME5QLFlBQVk7WUFDWixjQUFjOztRRHhOeEIsT0FBQTs7SUFUYSxjQUFBLGlCQUFjO0lBVzNCLElBQUEsaUNBQUEsWUFBQTtRQUFBLFNBQUEsa0JBQUE7O1FBQ0UsT0FBQSxlQUFrQixpQkFBQSxZQUFRO1lDOE5sQixLRDlOUixZQUFBO2dCQUNFLE9BQU87b0JBQ0wsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXOzs7WUNpT1AsWUFBWTtZQUNaLGNBQWM7O1FEL050QixPQUFBLGVBQWtCLGlCQUFBLFdBQU87WUNrT2pCLEtEbE9SLFlBQUE7Z0JBQ0UsT0FBTztvQkFDTCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxXQUFXOzs7WUNxT1AsWUFBWTtZQUNaLGNBQWM7O1FEbk94QixPQUFBOztJQXBDYSxjQUFBLGtCQUFlO0lBaUQ3QixJQUFBLDhCQUFBLFlBQUE7UUFBQSxTQUFBLGVBQUE7O1FBQ0csT0FBQSxlQUFrQixjQUFBLFFBQUk7WUM4TmQsS0Q5TlIsWUFBQSxFQUFrQyxPQUFPO1lDK05qQyxZQUFZO1lBQ1osY0FBYzs7UURoTzRCO1FBQ3BELE9BQUEsZUFBa0IsY0FBQSxPQUFHO1lDbU9YLEtEbk9WLFlBQUEsRUFBaUMsT0FBTztZQ29POUIsWUFBWTtZQUNaLGNBQWM7O1FEck9zQjtRQUM5QyxPQUFBLGVBQWtCLGNBQUEsU0FBSztZQ3dPYixLRHhPVixZQUFBLEVBQW1DLE9BQU87WUN5T2hDLFlBQVk7WUFDWixjQUFjOztRRDFPNEI7UUFDcEQsT0FBQSxlQUFrQixjQUFBLFlBQVE7WUM2T2hCLEtEN09WLFlBQUEsRUFBc0MsT0FBTztZQzhPbkMsWUFBWTtZQUNaLGNBQWM7O1FEL09rQztRQUMxRCxPQUFBLGVBQWtCLGNBQUEsV0FBTztZQ2tQZixLRGxQVixZQUFBLEVBQXFDLE9BQU87WUNtUGxDLFlBQVk7WUFDWixjQUFjOztRRHBQZ0M7UUFDekQsT0FBQTs7SUFOYSxjQUFBLGVBQVk7R0F4TG5CLGtCQUFBLGdCQUFhOztBRVRwQixJQUFPO0FBQVAsQ0FBQSxVQUFPLGVBQWE7SUFFUCxjQUFBLGFBQWE7SUFDYixjQUFBLGFBQWE7SUFDYixjQUFBLGVBQWUsY0FBQSxhQUFhO0lBQzVCLGNBQUEsTUFBcUIsT0FBTyxJQUFJLGNBQUE7SUFFaEMsY0FBQSxtQkFBbUI7SUFFbkIsY0FBQSxpQkFBaUIsS0FBSyxJQUFJO0lBQzFCLGNBQUEsY0FBYyxLQUFLLElBQUk7O0lBR3ZCLGNBQUEsV0FBNEI7SUFDNUIsY0FBQSxZQUFZO0lBQ1osY0FBQSxjQUFjO0lBRWQsY0FBQSxhQUFhO0lBQ2IsY0FBQSxZQUFZO0lBQ1osY0FBQSxpQkFBaUI7SUFFakIsY0FBQSxrQkFBa0I7SUFDbEIsY0FBQSxpQkFBaUI7SUFDakIsY0FBQSxrQkFBa0I7SUFDbEIsY0FBQSxpQkFBaUI7SUFFakIsY0FBQSxvQkFBb0IsY0FBQTtJQUNwQixjQUFBLHNCQUFzQixjQUFBO0lBRXRCLGNBQUEsMkJBQTJCO0lBQzNCLGNBQUEsbUJBQW1CO0lBQ25CLGNBQUEsWUFBWTtHQS9CbEIsa0JBQUEsZ0JBQWE7O0FDRnBCLElBQU87QUFBUCxDQUFBLFVBQU8sZUFBYTtJQUlsQixTQUFBLFlBQUE7UUFDRSxPQUFPLGNBQUE7O0lBRE8sY0FBQSxZQUFTO0lBSXpCLFNBQUEsY0FBQTtRQUNFLE9BQU8sY0FBQTs7SUFETyxjQUFBLGNBQVc7SUFJM0IsU0FBQSxZQUFBO1FBQ0UsT0FBTyxjQUFBOztJQURPLGNBQUEsWUFBUztJQUl6QixTQUFBLGVBQUE7UUFDRSxPQUFPLGNBQUEsYUFBYTs7SUFETixjQUFBLGVBQVk7SUFJNUIsU0FBQSxXQUEyQixNQUFXO1FBQ3BDLFFBQVE7WUFDTixLQUFLLGNBQWMsV0FBVztZQUM5QixLQUFLLGNBQWMsV0FBVztZQUM5QixLQUFLLGNBQWMsV0FBVztZQUM5QixLQUFLLGNBQWMsV0FBVztZQUM5QixLQUFLLGNBQWMsV0FBVztZQUM5QixLQUFLLGNBQWMsV0FBVztnQkFDNUIsT0FBTztZQUVUO2dCQUNFLE9BQU87OztJQVhHLGNBQUEsYUFBVTtJQWUxQixTQUFBLHNCQUFBO1FBQ0UsT0FBTyxXQUFXLEtBQUssYUFBYSxjQUFBOztJQUR0QixjQUFBLHNCQUFtQjtJQUluQyxTQUFBLCtCQUFBO1FBQ0UsT0FBTyxXQUFXLEtBQUssY0FBQSxnQkFBZ0IsY0FBQSxnQkFBZ0IsY0FBQTs7SUFEekMsY0FBQSwrQkFBNEI7SUFJNUMsU0FBQSxxQkFBQTtRQUNFLE9BQU8sV0FBVyxLQUFLLGVBQWUsY0FBQTs7SUFEeEIsY0FBQSxxQkFBa0I7SUFJbEMsU0FBQSxXQUEyQixNQUFXO1FBQ3BDLElBQUksU0FBUyxjQUFBLFdBQVcsWUFBWTtZQUNsQyxPQUFPLGNBQUE7O1FBRVQsSUFBSSxFQUFFLEtBQUssY0FBQSxlQUFlLFlBQVksVUFBQyxHQUFDLEVBQUssT0FBQSxNQUFNLFVBQU87WUFDeEQsT0FBTyxjQUFBOztRQUVULElBQUksRUFBRSxLQUFLLGNBQUEsZ0JBQWdCLFVBQVUsVUFBQyxHQUFDLEVBQUssT0FBQSxNQUFNLFVBQU87WUFDdkQsT0FBTyxjQUFBOztRQUVULElBQUksRUFBRSxLQUFLLGNBQUEsZ0JBQWdCLFNBQVMsVUFBQyxHQUFDLEVBQUssT0FBQSxNQUFNLFVBQU87WUFDdEQsT0FBTyxjQUFBOztRQUVULElBQUksU0FBUyxjQUFBLFdBQVcsUUFBUTtZQUM5QixPQUFPLGNBQUE7O1FBRVQsT0FBTzs7SUFoQk8sY0FBQSxhQUFVO0lBbUIxQixTQUFBLGtCQUFrQyxNQUFXO1FBQzNDLElBQUksTUFBTSxXQUFXO1FBQ3JCLFFBQU87WUFDTCxLQUFLLGNBQUE7Z0JBQ0gsT0FBTztZQUNULEtBQUssY0FBQTtnQkFDSCxPQUFPO1lBQ1QsS0FBSyxjQUFBO2dCQUNILE9BQU87WUFDVDtnQkFDRSxPQUFPOzs7SUFWRyxjQUFBLG9CQUFpQjtJQWNqQyxTQUFBLGNBQThCLE1BQVc7UUFDdkMsSUFBSSxNQUFNLFdBQVc7UUFDckIsUUFBTztZQUNMLEtBQUssY0FBQTtnQkFDSCxPQUFPO1lBQ1QsS0FBSyxjQUFBO2dCQUNILE9BQU87WUFDVCxLQUFLLGNBQUE7Z0JBQ0gsT0FBTztZQUNUO2dCQUNFLE9BQU87OztJQVZHLGNBQUEsZ0JBQWE7SUFjN0IsU0FBQSxtQkFBQTtRQUNFLE9BQU8sV0FBVyxLQUFLLGdCQUFnQjs7SUFEekIsY0FBQSxtQkFBZ0I7SUFJaEMsU0FBQSxrQkFBQTtRQUNFLE9BQU8sV0FBVyxLQUFLLGdCQUFnQjs7SUFEekIsY0FBQSxrQkFBZTs7OztJQU8vQixTQUFBLGVBQStCLE9BQUs7UUFDbEMsSUFBSSxTQUFhLE1BQU07UUFDdkIsSUFBSTtZQUNGLFNBQVMsUUFBUSxTQUFTOztRQUMxQixPQUFPLEtBQUs7OztRQUdkLE9BQU87O0lBUE8sY0FBQSxpQkFBYzs7OztJQWE5QixTQUFBLFNBQXlCLEtBQVU7UUFDakMsSUFBSSxXQUFXLElBQUksSUFBSSxLQUFLLGNBQWM7UUFDMUMsSUFBSSxFQUFFLFdBQVcsVUFBVSxVQUFVO1lBQ25DLE9BQU87O2FBQ0Y7WUFDTCxPQUFPOzs7SUFMSyxjQUFBLFdBQVE7Ozs7SUFZeEIsU0FBQSxXQUEyQixNQUFRO1FBQ2pDLElBQUksUUFBUSxTQUFTLE9BQU87WUFDMUIsT0FBTyxRQUFROztRQUVqQixRQUFRO1lBQ04sS0FBSyxjQUFBLFdBQVcsTUFBTSxPQUFPLGNBQUEsVUFBVTtZQUN2QyxLQUFLLGNBQUEsV0FBVyxXQUFZLE9BQU8sY0FBQSxVQUFVO1lBQzdDLEtBQUssY0FBQSxXQUFXLFFBQVMsT0FBTyxjQUFBLFVBQVU7WUFDMUMsS0FBSyxjQUFBLFdBQVcsWUFBYSxPQUFPLGNBQUEsVUFBVTtZQUM5QyxLQUFLLGNBQUEsV0FBVyxPQUFRLE9BQU8sY0FBQSxVQUFVO1lBQ3pDLEtBQUssY0FBQSxXQUFXLG9CQUFxQixPQUFPLGNBQUEsVUFBVTtZQUN0RCxLQUFLLGNBQUEsV0FBVywwQkFBMkIsT0FBTyxjQUFBLFVBQVU7WUFDNUQsS0FBSyxjQUFBLFdBQVcsTUFBTyxPQUFPLGNBQUEsVUFBVTtZQUN4QyxLQUFLLGNBQUEsV0FBVyx5QkFBMEIsT0FBTyxjQUFBLFVBQVU7WUFDM0QsS0FBSyxjQUFBLFdBQVcsY0FBZSxPQUFPLGNBQUEsVUFBVTtZQUNoRCxLQUFLLGNBQUEsV0FBVyxpQkFBa0IsT0FBTyxjQUFBLFVBQVU7WUFDbkQsS0FBSyxjQUFBLFdBQVcsZUFBZ0IsT0FBTyxjQUFBLFVBQVU7WUFDakQsS0FBSyxjQUFBLFdBQVcsU0FBVSxPQUFPLGNBQUEsVUFBVTtZQUMzQyxLQUFLLGNBQUEsV0FBVyxVQUFXLE9BQU8sY0FBQSxVQUFVO1lBQzVDLEtBQUssY0FBQSxXQUFXLGtCQUFtQixPQUFPLGNBQUEsVUFBVTtZQUNwRCxLQUFLLGNBQUEsV0FBVyxhQUFjLE9BQU8sY0FBQSxVQUFVO1lBQy9DLEtBQUssY0FBQSxXQUFXLFdBQVksT0FBTyxjQUFBLFVBQVU7WUFDN0MsS0FBSyxjQUFBLFdBQVcsV0FBWSxPQUFPLGNBQUEsVUFBVTtZQUM3QyxLQUFLLGNBQUEsV0FBVyxRQUFTLE9BQU8sY0FBQSxVQUFVO1lBQzFDLEtBQUssY0FBQSxXQUFXLGVBQWdCLE9BQU8sY0FBQSxVQUFVO1lBQ2pELEtBQUssY0FBQSxXQUFXLFFBQVMsT0FBTyxjQUFBLFVBQVU7WUFDMUMsS0FBSyxjQUFBLFdBQVcsb0JBQXFCLE9BQU8sY0FBQSxVQUFVO1lBQ3RELEtBQUssY0FBQSxXQUFXLGFBQWMsT0FBTyxjQUFBLFVBQVU7WUFDL0MsS0FBSyxjQUFBLFdBQVcsUUFBUyxPQUFPLGNBQUEsVUFBVTtZQUMxQyxLQUFLLGNBQUEsV0FBVyxlQUFnQixPQUFPLGNBQUEsVUFBVTtZQUNqRCxLQUFLLGNBQUEsV0FBVyxtQkFBb0IsT0FBTyxjQUFBLFVBQVU7WUFDckQsS0FBSyxjQUFBLFdBQVcsVUFBVyxPQUFPLGNBQUEsVUFBVTtZQUM1QyxLQUFLLGNBQUEsV0FBVyxpQkFBa0IsT0FBTyxjQUFBLFVBQVU7WUFDbkQsS0FBSyxjQUFBLFdBQVcsVUFBVyxPQUFPLGNBQUEsVUFBVTtZQUM1QyxLQUFLLGNBQUEsV0FBVyxlQUFnQixPQUFPLGNBQUEsVUFBVTtZQUNqRCxLQUFLLGNBQUEsV0FBVyxPQUFRLE9BQU8sY0FBQSxVQUFVO1lBQ3pDLEtBQUssY0FBQSxXQUFXLFlBQWEsT0FBTyxjQUFBLFVBQVU7WUFDOUMsU0FBUyxPQUFPOzs7SUFyQ0osY0FBQSxhQUFVOzs7O0lBNEMxQixTQUFBLGlCQUFpQyxNQUFRO1FBQ3ZDLElBQUksUUFBUSxTQUFTLE9BQU87WUFDMUIsT0FBTyxRQUFROztRQUVqQixRQUFRO1lBQ04sS0FBSyxjQUFBLFVBQVUsTUFBTSxPQUFPLGNBQUEsV0FBVztZQUN2QyxLQUFLLGNBQUEsVUFBVSxXQUFZLE9BQU8sY0FBQSxXQUFXO1lBQzdDLEtBQUssY0FBQSxVQUFVLFFBQVMsT0FBTyxjQUFBLFdBQVc7WUFDMUMsS0FBSyxjQUFBLFVBQVUsWUFBYSxPQUFPLGNBQUEsV0FBVztZQUM5QyxLQUFLLGNBQUEsVUFBVSxPQUFRLE9BQU8sY0FBQSxXQUFXO1lBQ3pDLEtBQUssY0FBQSxVQUFVLG9CQUFxQixPQUFPLGNBQUEsV0FBVztZQUN0RCxLQUFLLGNBQUEsVUFBVSwwQkFBMkIsT0FBTyxjQUFBLFdBQVc7WUFDNUQsS0FBSyxjQUFBLFVBQVUsTUFBTyxPQUFPLGNBQUEsV0FBVztZQUN4QyxLQUFLLGNBQUEsVUFBVSx5QkFBMEIsT0FBTyxjQUFBLFdBQVc7WUFDM0QsS0FBSyxjQUFBLFVBQVUsY0FBZSxPQUFPLGNBQUEsV0FBVztZQUNoRCxLQUFLLGNBQUEsVUFBVSxpQkFBa0IsT0FBTyxjQUFBLFdBQVc7WUFDbkQsS0FBSyxjQUFBLFVBQVUsZUFBZ0IsT0FBTyxjQUFBLFdBQVc7WUFDakQsS0FBSyxjQUFBLFVBQVUsU0FBVSxPQUFPLGNBQUEsV0FBVztZQUMzQyxLQUFLLGNBQUEsVUFBVSxVQUFXLE9BQU8sY0FBQSxXQUFXO1lBQzVDLEtBQUssY0FBQSxVQUFVLGtCQUFtQixPQUFPLGNBQUEsV0FBVztZQUNwRCxLQUFLLGNBQUEsVUFBVSxhQUFjLE9BQU8sY0FBQSxXQUFXO1lBQy9DLEtBQUssY0FBQSxVQUFVLFdBQVksT0FBTyxjQUFBLFdBQVc7WUFDN0MsS0FBSyxjQUFBLFVBQVUsV0FBWSxPQUFPLGNBQUEsV0FBVztZQUM3QyxLQUFLLGNBQUEsVUFBVSxRQUFTLE9BQU8sY0FBQSxXQUFXO1lBQzFDLEtBQUssY0FBQSxVQUFVLGVBQWdCLE9BQU8sY0FBQSxXQUFXO1lBQ2pELEtBQUssY0FBQSxVQUFVLFFBQVMsT0FBTyxjQUFBLFdBQVc7WUFDMUMsS0FBSyxjQUFBLFVBQVUsb0JBQXFCLE9BQU8sY0FBQSxXQUFXO1lBQ3RELEtBQUssY0FBQSxVQUFVLGFBQWMsT0FBTyxjQUFBLFdBQVc7WUFDL0MsS0FBSyxjQUFBLFVBQVUsUUFBUyxPQUFPLGNBQUEsV0FBVztZQUMxQyxLQUFLLGNBQUEsVUFBVSxlQUFnQixPQUFPLGNBQUEsV0FBVztZQUNqRCxLQUFLLGNBQUEsVUFBVSxtQkFBb0IsT0FBTyxjQUFBLFdBQVc7WUFDckQsS0FBSyxjQUFBLFVBQVUsVUFBVyxPQUFPLGNBQUEsV0FBVztZQUM1QyxLQUFLLGNBQUEsVUFBVSxpQkFBa0IsT0FBTyxjQUFBLFdBQVc7WUFDbkQsS0FBSyxjQUFBLFVBQVUsVUFBVyxPQUFPLGNBQUEsV0FBVztZQUM1QyxLQUFLLGNBQUEsVUFBVSxlQUFnQixPQUFPLGNBQUEsV0FBVztZQUNqRCxLQUFLLGNBQUEsVUFBVSxPQUFRLE9BQU8sY0FBQSxXQUFXO1lBQ3pDLEtBQUssY0FBQSxVQUFVLFlBQWEsT0FBTyxjQUFBLFdBQVc7WUFDOUMsU0FBUyxPQUFPOzs7SUFyQ0osY0FBQSxtQkFBZ0I7Ozs7SUE0Q2hDLFNBQUEsTUFBc0IsS0FBVTtRQUM5QixJQUFJLFdBQVcsU0FBUztRQUN4QixPQUFPLElBQUksSUFBSSxLQUFLLE9BQU87O0lBRmIsY0FBQSxRQUFLOzs7O0lBUXJCLFNBQUEsT0FBdUIsTUFBTSxPQUFLO1FBQ2hDLElBQUksVUFBVSxPQUFPO1FBQ3JCLElBQUksV0FBVyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUN6QixPQUFPLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTzs7UUFFakQsT0FBTyxZQUFZOztJQU5MLGNBQUEsU0FBTTs7Ozs7Ozs7O0lBa0J0QixTQUFBLGFBQUE7UUFBMkIsSUFBQSxVQUFBO1FGK2RyQixLRS9kcUIsSUFBQSxLQUFBLEdBQUEsS0FBQSxVQUFBLFFBQUEsTUFBZ0I7WUFBaEIsUUFBQSxNQUFBLFVBQUE7O1FBQ3pCLElBQUksU0FBUztZQUNYLFlBQVksY0FBQTtZQUNaLE1BQU0sV0FBVyxjQUFBLFdBQVc7WUFDNUIsU0FBUzs7UUFFWCxFQUFFLFFBQVEsU0FBUyxVQUFDLFFBQU07WUFDeEIsSUFBSSxRQUFRLFFBQVEsU0FBUztnQkFDM0IsRUFBRSxRQUFRLFFBQVEsVUFBQyxHQUFDO29CQUNsQixPQUFPLFFBQVEsS0FBSzs7O2lCQUVqQjtnQkFDTCxPQUFPLFFBQVEsS0FBSzs7O1FBR3hCLE9BQU87O0lBZk8sY0FBQSxhQUFVOzs7O0lBcUIxQixTQUFBLG9CQUFvQyxNQUFhLE1BQWEsV0FBaUI7UUFDN0UsT0FBTztZQUNMLFlBQVksY0FBQTtZQUNaLE1BQU0sV0FBVztZQUNqQixVQUFVO2dCQUNSLE1BQU07Z0JBQ04sV0FBVzs7OztJQU5ELGNBQUEsc0JBQW1COzs7O0lBY25DLFNBQUEsY0FBOEIsU0FBb0IsZUFBc0I7UUFDdEUsSUFBSSxVQUFnQixFQUFHLFFBQVE7UUFDL0IsT0FBTyxFQUFFLE9BQU8sU0FBUyxVQUFDLFFBQU07WUFDOUIsT0FBTyxRQUFRLFVBQVU7OztJQUhiLGNBQUEsZ0JBQWE7Ozs7SUFVN0IsU0FBQSxlQUErQixLQUFTLFdBQWlCO1FBQ3ZELElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXO1lBQzNCOztRQUVGLElBQUksV0FBVyxpQkFBaUIsSUFBSSxVQUFVLENBQUMsSUFBSSxTQUFTLFdBQVc7WUFDckUsSUFBSSxTQUFTLFlBQVk7OztJQUxiLGNBQUEsaUJBQWM7Ozs7SUFZOUIsU0FBQSxTQUF5QixRQUFNO1FBQzdCLElBQUksWUFBWSxhQUFhO1FBQzdCLElBQUksT0FBTyxRQUFRO1FBQ25CLElBQUksT0FBTyxRQUFRO1FBQ25CLE9BQU8sV0FBVyxNQUFNLFlBQVksWUFBWSxLQUFLLE1BQU07O0lBSjdDLGNBQUEsV0FBUTtJQU94QixTQUFBLE9BQXVCLFFBQU07UUFDM0IsT0FBTyxLQUFLLFFBQVEsUUFBUSxDQUFDLFlBQVk7O0lBRDNCLGNBQUEsU0FBTTtJQUl0QixTQUFBLGFBQTZCLFFBQU07UUFDakMsSUFBSSxTQUFTLEtBQUssUUFBUSxRQUFRLENBQUMsWUFBWTs7UUFFL0MsT0FBTzs7SUFITyxjQUFBLGVBQVk7SUFNNUIsU0FBQSxjQUE4QixRQUFNO1FBQ2xDLE9BQU8sS0FBSyxRQUFRLFFBQVEsQ0FBQzs7SUFEZixjQUFBLGdCQUFhO0lBSTdCLFNBQUEsVUFBMEIsUUFBTTtRQUM5QixJQUFJLFNBQVMsS0FBSyxRQUFRLFFBQVEsQ0FBQyxZQUFZO1FBQy9DLE9BQU8sU0FBUyxTQUFTOztJQUZYLGNBQUEsWUFBUztJQUt6QixTQUFBLFFBQXdCLFFBQU07UUFDNUIsT0FBTyxLQUFLLFFBQVEsUUFBUSxDQUFDLFlBQVksWUFBWSxLQUFLLFFBQVEsUUFBUSxXQUFXLEtBQUssUUFBUSxRQUFROztJQUQ1RixjQUFBLFVBQU87SUFJdkIsU0FBQSxRQUF3QixRQUFNO1FBQzVCLE9BQU8sS0FBSyxRQUFRLFFBQVEsQ0FBQyxZQUFZLFlBQVksS0FBSyxRQUFRLFFBQVE7O0lBRDVELGNBQUEsVUFBTztJQUl2QixTQUFBLFlBQTRCLFFBQU07UUFDaEMsT0FBTyxLQUFLLFFBQVEsUUFBUSxDQUFDLFFBQVE7O0lBRHZCLGNBQUEsY0FBVztJQUkzQixTQUFBLFFBQXdCLEtBQUc7UUFDekIsT0FBTyxLQUFLLFFBQVEsS0FBSyxDQUFDLFFBQVEsWUFBWSxLQUFLLFFBQVEsS0FBSyxDQUFDLFFBQVEsZ0JBQWdCLEtBQUssUUFBUSxLQUFLLENBQUMsVUFBVTs7SUFEeEcsY0FBQSxVQUFPO0lBSXZCLFNBQUEsVUFBMEIsS0FBRztRQUMzQixPQUFPLEtBQUssUUFBUSxLQUFLLENBQUMsVUFBVTs7SUFEdEIsY0FBQSxZQUFTO0lBSXpCLFNBQUEsU0FBeUIsU0FBTztRQUM5QixPQUFPLEtBQUssUUFBUSxTQUFTLENBQUMsUUFBUTs7SUFEeEIsY0FBQSxXQUFRO0lBSXhCLFNBQUEscUJBQXFDLFFBQU07UUFDekMsT0FBTyxLQUFLLFFBQVEsUUFBUSxDQUFDLFlBQVk7O0lBRDNCLGNBQUEsdUJBQW9CO0lBRW5DOzs7O0lBS0QsU0FBQSxlQUErQixRQUFRLGVBQXdDO1FBQXhDLElBQUEsa0JBQUEsS0FBQSxHQUFBLEVBQUEsZ0JBQWdCLGNBQUE7UUFDckQsSUFBSSxTQUFTO1FBQ2IsUUFBUSxRQUFRLFFBQVEsVUFBQyxPQUFPLEtBQUc7WUFDakMsSUFBSSxZQUFZLFNBQVMsZ0JBQWdCO1lBQ3pDLFVBQVUsWUFBWSxNQUFNLE1BQU07O1FBRXBDLE9BQU87O0lBTk8sY0FBQSxpQkFBYzs7OztJQVk5QixTQUFBLFVBQTBCLGlCQUFlO1FBQ3ZDLElBQUksU0FBUyxDQUFDLG1CQUFtQixJQUFJO1FBQ3JDLElBQUksUUFBUTtZQUNWLElBQUksUUFBUSxPQUFPO1lBQ25CLE9BQU8sTUFBTSxXQUFXOzthQUNuQjtZQUNMLE9BQU87OztJQU5LLGNBQUEsWUFBUzs7OztJQWF6QixTQUFBLGdCQUFnQyxVQUFVLFFBQU07UUFDOUMsSUFBSSxRQUFRLFNBQVMsU0FBUztZQUM1QixJQUFJLFNBQVM7WUFDYixJQUFJLFFBQVE7WUFDWixRQUFRLFFBQVEsVUFBVSxVQUFDLE9BQU8sS0FBRztnQkFDbkM7Z0JBQ0EsSUFBSSxVQUFVLE9BQU8sU0FBUyxPQUFPO29CQUNuQyxTQUFTOzs7WUFHYixPQUFPLFVBQVUsUUFBUTs7YUFDcEI7WUFDTCxPQUFPOzs7SUFaSyxjQUFBLGtCQUFlO0lBZ0IvQixTQUFBLFVBQTBCLEtBQUc7UUFDM0IsT0FBTyxVQUFVOztJQURILGNBQUEsWUFBUztHQS9ZcEIsa0JBQUEsZ0JBQWE7O0FDQXBCLElBQU87OytDQUFQLENBQUEsVUFBTyxlQUFhO0lBRVAsY0FBQSxVQUFVLFFBQVEsT0FBTyxjQUFBLFlBQVk7SUFFaEQsU0FBQSxlQUF3QixjQUFnQztRQUN0RDtRQUNBLGFBQWEsZUFBZSx5QkFBeUI7O0lBR3ZELGNBQUEsUUFBUSxJQUFJO0lBRVosbUJBQW1CLHlCQUF5QjtRQUMxQyxNQUFNO1FBQ04sU0FBUyxDQUFDO1FBQ1YsTUFBTSxVQUFDLE1BQUk7WUFDVCxjQUFBLGFBQWEsS0FBSyxZQUFZLEtBQUssUUFBUSxjQUFBLFVBQVUsQ0FBQyxPQUFPLE9BQU8sY0FBYyxjQUFBLFlBQVk7WUFDOUYsY0FBQSxZQUFZLEtBQUssWUFBWSxLQUFLLFFBQVEsY0FBQSxVQUFVLENBQUMsT0FBTyxhQUFhLGNBQWMsY0FBQSxXQUFXO1lBQ2xHOzs7O0lBS0osbUJBQW1CLHlCQUF5QjtRQUMxQyxNQUFNO1FBQ04sU0FBUyxDQUFDO1FBQ1YsTUFBTSxVQUFDLE1BQUk7WUFDVCxJQUFJLENBQUMsY0FBQSxhQUFhO2dCQUNoQixjQUFjLFlBQVksS0FBSyxjQUFjLFdBQVc7O1lBRTFEOzs7O0lBS0osbUJBQW1CLHlCQUF5QjtRQUMxQyxNQUFNO1FBQ04sU0FBUyxDQUFDLGdCQUFnQjtRQUMxQixNQUFNLFVBQUMsTUFBSTtZQUNULGNBQUEsY0FBYzs7WUFFZCxJQUFJLFVBQVUsSUFBSSxJQUFJLGNBQWMsV0FBVyxRQUFRLFdBQVc7WUFDbEUsRUFBRSxLQUFVO2dCQUNWLEtBQUs7Z0JBQ0wsUUFBUTtnQkFDUixTQUFTLFVBQUMsTUFBSTtvQkFDWixjQUFBLElBQUksS0FBSztvQkFDVCxjQUFBLGNBQWM7b0JBQ2Q7O2dCQUVGLE9BQU8sVUFBQyxPQUFPLFlBQVksYUFBVztvQkFDcEMsY0FBQSxJQUFJLEtBQUssbUJBQW1CLFVBQVUsNEVBQTRFLFlBQVksa0JBQWtCLGFBQWEscUJBQXFCO29CQUNsTDs7Ozs7SUFNVCxtQkFBbUIseUJBQXlCO1FBQzNDLE1BQU07UUFDTixNQUFNLFVBQUMsTUFBSTtZQUNQLEVBQUUsVUFBVTtpQkFDVCxPQUFPLFlBQUE7Z0JBQ1gsY0FBQSxJQUFJLE1BQU0sOEJBQThCLE9BQU87Z0JBQy9DLGNBQUEsSUFBSSxNQUFNLDZCQUE2QixPQUFPO2dCQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLFFBQVE7Z0JBQzlCLG9CQUFvQixFQUFFLElBQUksUUFBUTtnQkFDdkM7OztPQUdEO0lBRUYsbUJBQW1CLHlCQUF5QjtRQUMxQyxNQUFNO1FBQ1IsU0FBUyxDQUFDO1FBQ1IsTUFBTSxVQUFDLE1BQUk7WUFDWixJQUFJLFNBQTBCLGNBQWMsV0FBVyxPQUFPO1lBQzlELGNBQUEsSUFBSSxNQUFNLDBCQUEwQjtZQUNwQyxJQUFJLFNBQWdCLE9BQU87WUFDM0IsSUFBSSxDQUFDLFVBQVUsT0FBTyxPQUFPLE9BQU8sSUFBSSxLQUFLO2dCQUM1QyxJQUFJLFlBQVksSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUksVUFBVSxLQUFLLElBQUksTUFBTTtnQkFDdkUsSUFBSSxPQUFPLElBQUksSUFBSSxPQUFPO29CQUN6QixVQUFVLFNBQVMsT0FBTyxJQUFJLElBQUk7O2dCQUVuQyxTQUFTLFVBQVU7O1lBR3BCLElBQUksaUJBQWlCLENBQUMsUUFBUTtnQkFDN0IsSUFBSSxDQUFDLFFBQVE7b0JBQ1osSUFBSSxzQkFBc0IsY0FBYztvQkFDeEMsSUFBSSxxQkFBcUI7d0JBQ3hCLElBQUksT0FBTzt3QkFDWCxJQUFJLE1BQU0sS0FBSyxRQUFRO3dCQUN0QixJQUFJLE1BQU0sR0FBRzs0QkFDWixPQUFPOzRCQUNQLE1BQU0sS0FBSyxRQUFRLEtBQUs7NEJBQ3hCLElBQUksTUFBTSxHQUFHO2dDQUNaLFNBQVMsS0FBSyxVQUFVLEdBQUcsRUFBRTs7Ozs7OztZQU9uQyxJQUFJLGNBQWMsSUFBSSxNQUFNLEtBQUssV0FBVztZQUM1QyxJQUFJLENBQUMsVUFBVSxXQUFXLEtBQUs7Ozs7Z0JBSTlCLGNBQUEsSUFBSSxLQUFLO2dCQUNULFNBQVMsWUFBWSxNQUFNLElBQUk7O1lBRWhDLElBQUksV0FBVyxPQUFPOztnQkFFckIsY0FBQSxJQUFJLEtBQUs7Z0JBQ1QsU0FBUyxZQUFZLE1BQU0sSUFBSSxRQUFRLFFBQVE7O1lBRWhELGNBQUEsSUFBSSxLQUFLLDhCQUE4QjtZQUN2QyxjQUFjLFlBQVk7WUFDMUI7OztJQUlELG1CQUFtQixVQUFVLGNBQUE7R0ExSHhCLGtCQUFBLGdCQUFhOzs7O0FDRXBCLElBQU87QUFBUCxDQUFBLFVBQU8sZUFBYTtJQUVsQixJQUFJLE1BQU0sT0FBTyxJQUFJO0lBRXJCLFNBQUEsT0FBZ0IsTUFBYSxXQUFrQjtRQUM3QyxPQUFPLFlBQVksWUFBWSxNQUFNLE9BQU87O0lBRzlDLFNBQUEsV0FBb0IsU0FBTztRQUN6QixJQUFJLFFBQVEsWUFBWTtRQUN4QixJQUFJLE9BQU87WUFDVCxRQUFRLGlCQUFpQixpQkFBaUIsWUFBWTs7OztJQUsvQyxjQUFBLGNBQWMsQ0FBQyxjQUFBLFdBQVc7Ozs7SUFLckMsSUFBQSw0QkFBQSxZQUFBO1FBVUUsU0FBQSxXQUFvQixPQUFzQixXQUFpQjtZQUEzRCxJQUFBLFFBQUE7WUFBb0IsS0FBQSxRQUFBO1lBQXNCLEtBQUEsWUFBQTtZQVRuQyxLQUFBLHNCQUFzQixFQUFFLFNBQVMsWUFBQTtnQkFDdEMsTUFBSyxJQUFJLEtBQUssY0FBQSxhQUFhLEtBQUssTUFBSztlQUNwQyxJQUFJLEVBQUUsVUFBVTtZQUVYLEtBQUEsTUFBbUI7WUFDbkIsS0FBQSxlQUFlO1lBQ2YsS0FBQSxXQUFzQjtZQUN0QixLQUFBLE1BQXFCO1lBRzNCLEtBQUssTUFBTSxhQUFhLFFBQVE7WUFDaEMsSUFBSSxLQUFLLElBQUksV0FBVyxPQUFPLFFBQVE7Z0JBQ3JDLEtBQUssSUFBSSxHQUFHLGNBQUEsYUFBYSxPQUFPLFVBQUMsUUFBTTtvQkFDckMsTUFBSyxJQUFJLE1BQU0sU0FBUyxNQUFLLE1BQU0sS0FBSzs7Z0JBRTFDLEtBQUssSUFBSSxHQUFHLGNBQUEsYUFBYSxVQUFVLFVBQUMsUUFBTTtvQkFDeEMsTUFBSyxJQUFJLE1BQU0sWUFBWSxNQUFLLE1BQU0sS0FBSzs7Z0JBRTdDLEtBQUssSUFBSSxHQUFHLGNBQUEsYUFBYSxTQUFTLFVBQUMsUUFBTTtvQkFDdkMsTUFBSyxJQUFJLE1BQU0sV0FBVyxNQUFLLE1BQU0sS0FBSzs7Z0JBRTVDLEtBQUssSUFBSSxHQUFHLGNBQUEsYUFBYSxLQUFLLFVBQUMsU0FBTztvQkFDcEMsTUFBSyxJQUFJLE1BQU0sTUFBSyxNQUFNLFlBQVk7O2dCQUV4QyxLQUFLLElBQUksR0FBRyxjQUFBLGFBQWEsTUFBTSxVQUFDLFNBQU87b0JBQ3JDLE1BQUssSUFBSSxNQUFNLE1BQUssTUFBTTs7O1lBRzlCLEtBQUssSUFBSSxHQUFHLGNBQUEsYUFBYSxLQUFLLFVBQUMsU0FBTztnQkFDcEMsTUFBSzs7O1FBRVI7UUFFRCxPQUFBLGVBQVcsV0FBQSxXQUFBLFFBQUk7WUo2K0JQLEtJNytCUixZQUFBO2dCQUNFLE9BQU8sS0FBSzs7WUorK0JOLFlBQVk7WUFDWixjQUFjOztRSTcrQmYsV0FBQSxVQUFBLGFBQVAsWUFBQTtZQUNFLElBQUksS0FBSyxhQUFhO2dCQUNwQjs7WUFFRixLQUFLLGVBQWU7WUFDcEIsS0FBSyxJQUFJLEtBQUssY0FBQSxhQUFhLE1BQU0sS0FBSztZQUN0QyxLQUFLOztRQUdQLE9BQUEsZUFBVyxXQUFBLFdBQUEsZUFBVztZSisrQmQsS0kvK0JSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLOztZSmkvQk4sWUFBWTtZQUNaLGNBQWM7O1FJLytCdEIsT0FBQSxlQUFXLFdBQUEsV0FBQSxVQUFNO1lKay9CVCxLSWwvQlIsWUFBQTtnQkFDRSxPQUFPLEtBQUs7O1lKby9CTixZQUFZO1lBQ1osY0FBYzs7UUlsL0J0QixPQUFBLGVBQVcsV0FBQSxXQUFBLFdBQU87WUpxL0JWLEtJci9CUixZQUFBO2dCQUNFLE9BQU8sS0FBSzs7WUp1L0JOLEtJcC9CUixVQUFtQixNQUFVO2dCQUE3QixJQUFBLFFBQUE7Z0JBQ0UsS0FBSyxTQUFTLFNBQVM7Z0JBQ3ZCLEVBQUUsUUFBUSxNQUFNLFVBQUMsS0FBRztvQkFDbEIsSUFBSSxDQUFDLElBQUksTUFBTTt3QkFDYixJQUFJLE9BQU8sY0FBQSxXQUFXLE1BQUs7O29CQUU3QixNQUFLLFNBQVMsS0FBSzs7Z0JBRXJCLEtBQUs7Z0JBQ0wsS0FBSzs7WUp1L0JDLFlBQVk7WUFDWixjQUFjOztRSXIvQmYsV0FBQSxVQUFBLGVBQVAsVUFBb0IsTUFBUTtZQUMxQixPQUFPLEVBQUUsS0FBSyxLQUFLLFVBQVUsVUFBQyxLQUFPO2dCQUNuQyxPQUFPLGNBQUEsUUFBUSxTQUFTLGNBQUEsUUFBUTs7O1FBSTdCLFdBQUEsVUFBQSxlQUFQLFVBQW9CLE1BQVc7WUFDN0IsT0FBTyxFQUFFLEtBQUssS0FBSyxVQUFVLFVBQUMsS0FBTztnQkFDbkMsT0FBTyxjQUFBLFFBQVEsU0FBUzs7OztRQUtwQixXQUFBLFVBQUEsVUFBUixVQUFnQixRQUFNO1lBQ3BCLElBQUksS0FBSyxhQUFhLGNBQUEsYUFBYSxZQUFZLEtBQUssV0FBVztnQkFDN0QsT0FBTzs7WUFFVCxPQUFPOztRQUdGLFdBQUEsVUFBQSxRQUFQLFVBQWEsUUFBTTtZQUNqQixJQUFJLENBQUMsS0FBSyxRQUFRLFNBQVM7Z0JBQ3pCOztZQUVGLElBQUksQ0FBQyxPQUFPLE1BQU07Z0JBQ2hCLE9BQU8sT0FBTyxjQUFBLFdBQVcsS0FBSzs7WUFFaEMsSUFBSSxFQUFFLEtBQUssS0FBSyxVQUFVLFVBQUMsS0FBRztnQkFDNUIsT0FBTyxjQUFBLE9BQU8sS0FBSztnQkFDakI7Z0JBQ0YsS0FBSyxTQUFTO2dCQUNkOztZQUVGLEtBQUssU0FBUyxLQUFLO1lBQ25CLEtBQUssSUFBSSxLQUFLLGNBQUEsYUFBYSxPQUFPO1lBQ2xDLEtBQUs7O1FBQ047UUFFTSxXQUFBLFVBQUEsV0FBUCxVQUFnQixRQUFNO1lBQXRCLElBQUEsUUFBQTtZQUNFLElBQUksQ0FBQyxLQUFLLFFBQVEsU0FBUztnQkFDekI7O1lBRUYsSUFBSSxDQUFDLE9BQU8sTUFBTTtnQkFDaEIsT0FBTyxPQUFPLGNBQUEsV0FBVyxLQUFLOztZQUVoQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssVUFBVSxVQUFDLEtBQUc7Z0JBQzdCLE9BQU8sY0FBQSxPQUFPLEtBQUs7Z0JBQ2pCO2dCQUNGLEtBQUssTUFBTTtnQkFDWDs7WUFFRixFQUFFLFFBQVEsS0FBSyxVQUFVLFVBQUMsS0FBRztnQkFDM0IsSUFBSSxjQUFBLE9BQU8sS0FBSyxTQUFTO29CQUN2QixRQUFRLEtBQUssUUFBUTtvQkFDckIsTUFBSyxJQUFJLEtBQUssY0FBQSxhQUFhLFVBQVU7b0JBQ3JDLE1BQUs7Ozs7UUFHVjtRQUVNLFdBQUEsVUFBQSxVQUFQLFVBQWUsUUFBTTtZQUNuQixJQUFJLENBQUMsS0FBSyxRQUFRLFNBQVM7Z0JBQ3pCOztZQUVGLElBQUksVUFBVSxFQUFFLE9BQU8sS0FBSyxVQUFVLFVBQUMsS0FBRztnQkFDeEMsT0FBTyxjQUFBLE9BQU8sS0FBSzs7WUFFckIsSUFBSSxTQUFTO2dCQUNYLEtBQUssSUFBSSxLQUFLLGNBQUEsYUFBYSxTQUFTLFFBQVE7Z0JBQzVDLEtBQUs7OztRQUVSO1FBQ0gsT0FBQTs7SUFBQztJQVFELFNBQUEsUUFBaUIsS0FBZ0IsTUFBZTtRQUM5QyxJQUFJLFNBQXlCO1lBQzNCLE9BQU87WUFDUCxVQUFVO1lBQ1YsU0FBUzs7UUFFWCxFQUFFLFFBQVEsTUFBTSxVQUFDLFFBQU07WUFDckIsSUFBSSxTQUFTLEVBQUUsS0FBSyxLQUFLLFVBQUMsR0FBQyxFQUFLLE9BQUEsY0FBQSxPQUFPLEdBQUc7WUFDMUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ1gsT0FBTyxNQUFNLEtBQUs7Z0JBQ2xCOztZQUVGLElBQUksUUFBUSxPQUFPLFlBQVksUUFBUSxPQUFPLFNBQVM7Z0JBQ3JELE9BQU8sU0FBUyxLQUFLOzs7UUFHekIsRUFBRSxRQUFRLEtBQUssVUFBQyxRQUFNO1lBQ3BCLElBQUksU0FBUyxFQUFFLEtBQUssTUFBTSxVQUFDLEdBQUMsRUFBSyxPQUFBLGNBQUEsT0FBTyxHQUFHO1lBQzNDLElBQUksQ0FBQyxRQUFRO2dCQUNYLE9BQU8sUUFBUSxLQUFLOzs7UUFHeEIsT0FBTzs7Ozs7SUFNVCxJQUFBLDhCQUFBLFlBQUE7UUFTRSxTQUFBLGFBQW9CLFNBQXdCLFNBQWlCO1lBQXpDLEtBQUEsVUFBQTtZQUF3QixLQUFBLFVBQUE7WUFQcEMsS0FBQSxhQUEwQjtZQUMxQixLQUFBLE1BQXFCO1lBQ3JCLEtBQUEsYUFBYTtZQUNiLEtBQUEsWUFBWTtZQUNaLEtBQUEsVUFBaUI7WUFDakIsS0FBQSxVQUFjO1lBR3BCLEtBQUssTUFBTTtZQUNYLEtBQUssYUFBYSxLQUFLLFFBQVEsS0FBSzs7UUFDckM7UUFFRCxPQUFBLGVBQVcsYUFBQSxXQUFBLGFBQVM7WUppL0JaLEtJai9CUixZQUFBO2dCQUNFLE9BQU8sS0FBSzs7WUptL0JOLFlBQVk7WUFDWixjQUFjOztRSW4vQnJCO1FBRU8sYUFBQSxVQUFBLFFBQVIsWUFBQTtZQUFBLElBQUEsUUFBQTtZQUNFLElBQUksQ0FBQyxLQUFLLFlBQVk7Z0JBQ3BCOztZQUVGLEVBQUUsS0FBSyxLQUFLLFNBQWM7Z0JBQ3hCLFFBQVE7Z0JBQ1IsU0FBUyxVQUFDLE1BQUk7b0JBQ1osSUFBSSxDQUFDLE1BQUssWUFBWTt3QkFDcEI7O29CQUVGLElBQUksTUFBTSxNQUFLLFFBQVEsTUFBTSxpQkFBaUI7b0JBQzlDLElBQUksUUFBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLEtBQUssUUFBUTtvQkFDakQsSUFBSSxTQUFTLFFBQVEsTUFBSyxZQUFZO29CQUN0QyxNQUFLLGFBQWE7b0JBQ2xCLEVBQUUsTUFBTSxRQUFRLFVBQUMsT0FBYSxRQUFhO3dCQUN6QyxFQUFFLFFBQVEsT0FBTyxVQUFDLE1BQVE7NEJBQ3hCLElBQUksUUFBUTtnQ0FDVixNQUFNLFFBQVEsT0FBTztvQ0FDbkIsTUFBTSxPQUFPO29DQUNiLFFBQVEsRUFBRSxNQUFNO21DQUNiOzs0QkFFUCxNQUFLLFFBQVEsVUFBVTs7O29CQUczQixNQUFLLFFBQVEsS0FBSzs7b0JBRWxCLElBQUksTUFBSyxZQUFZO3dCQUNuQixNQUFLLFVBQVUsV0FBVyxZQUFBOzRCQUN4QixJQUFJLE1BQU0sTUFBSyxRQUFRLE1BQU07NEJBQzdCLE1BQUs7MkJBQ0osTUFBSzs7O2dCQUdaLE9BQU8sVUFBQyxPQUFPLE1BQU0sUUFBTTtvQkFDekIsSUFBSSxDQUFDLE1BQUssWUFBWTt3QkFDcEI7O29CQUVGLElBQUksUUFBUSxjQUFBLGVBQWU7b0JBQzNCLElBQUksTUFBTSxXQUFXLEtBQUs7d0JBQ3hCLE1BQUssSUFBSSxLQUFLLE1BQUssUUFBUSxNQUFNO3dCQUNqQzs7b0JBRUYsSUFBSSxNQUFLLFdBQVcsR0FBRzt3QkFDckIsTUFBSyxJQUFJLE1BQU0sTUFBSyxRQUFRLE1BQU0sK0NBQStDO3dCQUNqRixNQUFLO3dCQUNMLElBQUksTUFBSyxRQUFRLE9BQU87NEJBQ3RCLE1BQUssUUFBUSxNQUFNOzs7eUJBRWhCO3dCQUNMLE1BQUssVUFBVSxNQUFLLFVBQVU7d0JBQzlCLE1BQUssSUFBSSxNQUFNLE1BQUssUUFBUSxNQUFNLDRCQUE0QixNQUFLLFVBQVUsR0FBRyxZQUFZO3dCQUM1RixNQUFLLFVBQVUsV0FBVyxZQUFBOzRCQUN4QixNQUFLOzJCQUNKLE1BQUs7OztnQkFHWixZQUFZOzs7UUFFZjtRQUVNLGFBQUEsVUFBQSxRQUFQLFlBQUE7WUFBQSxJQUFBLFFBQUE7WUFDRSxJQUFJLEtBQUssWUFBWTtnQkFDbkI7O1lBRUYsS0FBSyxhQUFhO1lBQ2xCLEtBQUssVUFBVSxXQUFXLFlBQUE7Z0JBQ3hCLE1BQUs7ZUFDSjs7UUFDSjtRQUVNLGFBQUEsVUFBQSxPQUFQLFlBQUE7WUFDRSxLQUFLLGFBQWE7WUFDbEIsS0FBSyxJQUFJLE1BQU0sS0FBSyxRQUFRLE1BQU07WUFDbEMsSUFBSSxLQUFLLFNBQVM7Z0JBQ2hCLEtBQUssSUFBSSxNQUFNLEtBQUssUUFBUSxNQUFNO2dCQUNsQyxhQUFhLEtBQUs7Z0JBQ2xCLEtBQUssVUFBVTs7O1FBRWxCO1FBRU0sYUFBQSxVQUFBLFVBQVAsWUFBQTtZQUNFLEtBQUs7WUFDTCxLQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsTUFBTTs7UUFHdEMsT0FBQTs7Ozs7SUFLQSxJQUFBLDJCQUFBLFlBQUE7UUFXRSxTQUFBLFVBQW9CLE9BQW9CO1lBQXBCLEtBQUEsUUFBQTtZQVZaLEtBQUEsVUFBaUI7WUFDakIsS0FBQSxjQUFxQjtZQUdyQixLQUFBLE9BQXNCO1lBRXRCLEtBQUEsTUFBcUI7WUFDckIsS0FBQSxhQUE0QjtZQUM1QixLQUFBLFlBQVk7WUFHbEIsS0FBSyxPQUFPO1lBQ1osS0FBSyxNQUFNLE9BQU8sSUFBSTtZQUN0QixLQUFLLGFBQWEsT0FBTyxJQUFJOztRQUcvQixPQUFBLGVBQUksVUFBQSxXQUFBLFFBQUk7WUptL0JBLEtJLytCUixZQUFBO2dCQUNFLE9BQU8sS0FBSyxTQUFzQixFQUFFLFNBQVM7O1lKaS9CdkMsS0l0L0JSLFVBQVMsT0FBZ0I7Z0JBQ3ZCLEtBQUssUUFBUTs7WUp3L0JQLFlBQVk7WUFDWixjQUFjOztRSWwvQnRCLE9BQUEsZUFBSSxVQUFBLFdBQUEsY0FBVTtZSnEvQk4sS0lyL0JSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLOztZSnUvQk4sWUFBWTtZQUNaLGNBQWM7O1FJci9CdEIsT0FBQSxlQUFJLFVBQUEsV0FBQSxTQUFLO1lKdy9CRCxLSXgvQlIsWUFBQTtnQkFDRSxPQUFPLEtBQUssTUFBTSxRQUFROztZSjAvQnBCLFlBQVk7WUFDWixjQUFjOztRSXgvQnRCLE9BQUEsZUFBSSxVQUFBLFdBQUEsUUFBSTtZSjIvQkEsS0kzL0JSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLLE1BQU07O1lKNi9CWixZQUFZO1lBQ1osY0FBYzs7UUkzL0JkLFVBQUEsVUFBQSxjQUFSLFVBQW9CLE1BQWdCLElBQVk7WUFBaEQsSUFBQSxRQUFBO1lBQ0UsRUFBRSxNQUFNLE1BQU0sVUFBQyxPQUFPLEtBQUc7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXLEtBQUssT0FBTztvQkFDM0IsSUFBSSxNQUFNLElBQUksUUFBUSxNQUFNOztvQkFFNUIsR0FBRyxpQkFBaUIsS0FBSyxVQUFDLE9BQUs7d0JBQzdCLE1BQUssV0FBVyxNQUFNLDhCQUE4Qjt3QkFDcEQsS0FBSyxLQUFLOzs7OztRQUlqQjtRQUVNLFVBQUEsVUFBQSxPQUFQLFVBQVksTUFBUTtZQUNsQixJQUFJLENBQUMsRUFBRSxTQUFTLE9BQU87Z0JBQ3JCLE9BQU8sUUFBUSxPQUFPOztZQUV4QixLQUFLLE9BQU8sS0FBSzs7UUFHbkIsVUFBQSxVQUFBLGNBQUEsVUFBWSxPQUFLO1lBQ2YsSUFBSSxLQUFLLGFBQWMsS0FBSyxVQUFVLEtBQUssT0FBTyxlQUFlLFVBQVUsTUFBTTtnQkFDL0UsS0FBSyxJQUFJLE1BQU0sZ0ZBQWdGLEtBQUssS0FBSyxNQUFNLGdCQUFnQixLQUFLLEtBQUs7Z0JBQ3pJLElBQUk7b0JBQ0YsS0FBSyxJQUFJLE1BQU0sZ0NBQWdDLEtBQUssS0FBSztvQkFDekQsS0FBSyxPQUFPOztnQkFDWixPQUFPLEtBQUs7OztnQkFHZCxPQUFPOztZQUVULE9BQU87O1FBR1QsVUFBQSxVQUFBLFlBQUEsVUFBVSxPQUFLO1lBQ2IsSUFBSSxLQUFLLFlBQVksUUFBUTtnQkFDM0IsS0FBSyxJQUFJLE1BQU07Z0JBQ2Y7O1lBRUYsSUFBSSxPQUFPLEtBQUssTUFBTSxNQUFNO1lBQzVCLElBQUksWUFBWSxLQUFLLEtBQUs7WUFDMUIsS0FBSyxNQUFNLFdBQVcsS0FBSzs7UUFDNUI7UUFFRCxVQUFBLFVBQUEsU0FBQSxVQUFPLE9BQUs7WUFDVixLQUFLLElBQUksTUFBTSxrQ0FBa0MsS0FBSyxLQUFLLE1BQU0sZ0JBQWdCLEtBQUssS0FBSztZQUMzRixJQUFJLEtBQUssWUFBWSxRQUFRO2dCQUMzQjs7WUFFRixLQUFLLFVBQVU7WUFDZixLQUFLLGNBQWMsSUFBSSxPQUFPOztRQUMvQjtRQUVELFVBQUEsVUFBQSxVQUFBLFVBQVEsT0FBSztZQUFiLElBQUEsUUFBQTtZQUNFLEtBQUssSUFBSSxNQUFNLG1DQUFtQyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsS0FBSyxLQUFLO1lBQzVGLElBQUksS0FBSyxXQUFXO2dCQUNsQixLQUFLLElBQUksTUFBTSxrQ0FBa0MsS0FBSyxLQUFLLE1BQU0sZ0JBQWdCLEtBQUssS0FBSztnQkFDM0YsT0FBTyxLQUFLO2dCQUNaOztZQUVGLElBQUksS0FBSyxVQUFVLEtBQUssS0FBSyxlQUFlLENBQUMsSUFBSSxPQUFPLFlBQVksS0FBSyxlQUFlLE1BQU07Z0JBQzVGLElBQUksT0FBTztnQkFDWCxXQUFXLFlBQUE7b0JBQ1QsTUFBSyxJQUFJLE1BQU0sc0NBQXNDO29CQUNyRCxNQUFLLFVBQVUsTUFBSyxVQUFVO29CQUM5QixNQUFLLElBQUksTUFBTSxVQUFVLE1BQUssS0FBSyxNQUFNLDBCQUEwQixNQUFLO29CQUN4RSxJQUFJLEtBQUssTUFBSyxTQUFTLElBQUksVUFBVSxNQUFLLEtBQUs7b0JBQy9DLE1BQUssWUFBWSxNQUFNO21CQUN0Qjs7aUJBQ0U7Z0JBQ0wsS0FBSyxJQUFJLE1BQU0sa0JBQWtCLEtBQUssS0FBSyxNQUFNLG9CQUFvQjtnQkFDckUsSUFBSSxDQUFDLE1BQU0sVUFBVTtvQkFDbkIsS0FBSyxJQUFJLE1BQU07b0JBQ2YsT0FBTyxLQUFLO29CQUNaLEtBQUssU0FBUyxJQUFJLGFBQWEsS0FBSyxLQUFLLFNBQVM7b0JBQ2xELEtBQUssT0FBTzs7OztRQUdqQjtRQUVELFVBQUEsVUFBQSxVQUFBLFVBQVEsT0FBSztZQUNYLEtBQUssSUFBSSxNQUFNLHdCQUF3QixLQUFLLEtBQUssTUFBTSx3QkFBd0I7WUFDL0UsSUFBSSxLQUFLLFlBQVksUUFBUTtnQkFDM0I7OztRQUlKLE9BQUEsZUFBSSxVQUFBLFdBQUEsYUFBUztZSisvQkwsS0kvL0JSLFlBQUE7Z0JBQ0UsT0FBTyxDQUFDLEtBQUssVUFBVSxLQUFLLE9BQU8sZUFBZSxVQUFVLFVBQVUsS0FBSyxVQUFVLEtBQUssT0FBTzs7WUppZ0MzRixZQUFZO1lBQ1osY0FBYzs7UUlqZ0NyQjtRQUVELFVBQUEsVUFBQSxVQUFBLFlBQUE7WUFBQSxJQUFBLFFBQUE7WUFDRSxJQUFJLEtBQUssV0FBVztnQkFDbEI7OztZQUdGLElBQUksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxJQUFJO2dCQUN0RCxXQUFXLFlBQUE7b0JBQ1QsTUFBSzttQkFDSjtnQkFDSDs7WUFFRixJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsS0FBSyxRQUFRO2dCQUNoQyxJQUFJLEVBQUUsS0FBSyxjQUFBLGFBQWEsVUFBQyxNQUFJLEVBQUssT0FBQSxTQUFTLE1BQUssS0FBSyxVQUFPO29CQUMxRCxLQUFLLElBQUksS0FBSyw0QkFBNEIsS0FBSyxLQUFLO29CQUNwRCxLQUFLLFNBQVMsSUFBSSxhQUFhLEtBQUssS0FBSyxTQUFTO29CQUNsRCxLQUFLLE9BQU87O3FCQUNQO29CQUNMLElBQUksWUFBWSxZQUFBO3dCQUNkLElBQUksUUFBUSxNQUFLLEtBQUs7d0JBQ3RCLElBQUksT0FBTzs0QkFDVCxNQUFLLElBQUksTUFBTSxtQ0FBbUMsTUFBSyxLQUFLOzRCQUM1RCxNQUFLLFNBQVMsSUFBSSxVQUFVOzRCQUM1QixNQUFLLFlBQVksT0FBTSxNQUFLOzs2QkFDdkI7NEJBQ0wsSUFBSSxLQUFLLHdCQUF3QixNQUFLLEtBQUs7OztvQkFHL0MsRUFBRSxLQUFLLEtBQUssS0FBSyxTQUFlO3dCQUM5QixRQUFRO3dCQUNSLGFBQWE7d0JBQ2IsU0FBUyxVQUFDLE1BQUk7NEJBQ1osTUFBSyxNQUFNLFVBQVUsS0FBSyxTQUFTOzRCQUNuQyxXQUFXLFlBQUE7Z0NBQ1Q7K0JBQ0M7MkJBQ0YsT0FBTyxVQUFDLE9BQU8sTUFBTSxRQUFNOzRCQUM1QixJQUFJLE1BQU0sY0FBQSxlQUFlOzRCQUN6QixJQUFJLE1BQU0sV0FBVyxLQUFLO2dDQUN4QixNQUFLLElBQUksS0FBSywrREFBK0QsTUFBSyxLQUFLLE1BQU07Z0NBQzdGLE1BQUssTUFBTSxVQUFVOztpQ0FDaEI7Z0NBQ0wsTUFBSyxJQUFJLEtBQUssK0RBQStELE1BQUssS0FBSyxNQUFNLFlBQVk7Z0NBQ3pHLFdBQVcsWUFBQTtvQ0FDVDttQ0FDQzs7O3dCQUdQLFlBQVk7Ozs7O1FBSW5CO1FBRUQsVUFBQSxVQUFBLFVBQUEsWUFBQTtZQUNFLEtBQUssWUFBWTtZQUNqQixJQUFJLEtBQUssVUFBVSxLQUFLLE9BQU8sZUFBZSxVQUFVLE1BQU07Z0JBQzVELElBQUk7b0JBQ0YsS0FBSyxJQUFJLE1BQU0sZ0NBQWdDLEtBQUssS0FBSyxNQUFNLGdCQUFnQixLQUFLLEtBQUs7b0JBQ3pGLEtBQUssT0FBTztvQkFDWixLQUFLLElBQUksTUFBTSx3Q0FBd0MsS0FBSyxLQUFLLE1BQU0sZ0JBQWdCLEtBQUssS0FBSzs7Z0JBQ2pHLE9BQU8sS0FBSzs7OztZQUloQixJQUFJLEtBQUssUUFBUTtnQkFDZixLQUFLLElBQUksTUFBTSxnQ0FBZ0MsS0FBSyxLQUFLLE1BQU0sZ0JBQWdCLEtBQUssS0FBSztnQkFDekYsS0FBSyxPQUFPOzs7UUFHbEIsT0FBQTs7Ozs7SUFLQSxJQUFBLGdDQUFBLFlBQUE7UUFTRSxTQUFBLGVBQW9CLFVBQW1CO1lBQW5CLEtBQUEsV0FBQTtZQUhaLEtBQUEsV0FBcUI7WUFDckIsS0FBQSxPQUFrQjtZQUd4QixLQUFLLFFBQVEsU0FBUztZQUN0QixLQUFLLGNBQWMsU0FBUztZQUM1QixLQUFLLGFBQWEsU0FBUyxhQUFhO1lBRXhDLElBQUksT0FBTyxLQUFLO1lBRWhCLElBQUksS0FBSyxZQUFZO2dCQUNuQixLQUFLLFFBQVEsV0FBVyxLQUFLLE1BQU0sY0FBYyxLQUFLLFlBQVksS0FBSzs7aUJBQ2xFO2dCQUNMLEtBQUssUUFBUSxXQUFXLEtBQUssTUFBTSxLQUFLOztZQUUxQyxLQUFLLFdBQVcsSUFBSSxVQUFVO1lBQzlCLElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxXQUFXLFNBQVMsTUFBTSxTQUFTO1lBQzlELEtBQUssU0FBUyxPQUFPO1lBQ3JCLElBQUksTUFBTSwrQkFBK0IsS0FBSyxNQUFNLGdCQUFnQixLQUFLOztRQUMxRTtRQUVELE9BQUEsZUFBVyxlQUFBLFdBQUEsV0FBTztZSmtnQ1YsS0lsZ0NSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLOztZSm9nQ04sWUFBWTtZQUNaLGNBQWM7O1FJbGdDdEIsT0FBQSxlQUFZLGVBQUEsV0FBQSxZQUFRO1lKcWdDWixLSXJnQ1IsWUFBQTtnQkFDRSxJQUFJLEtBQUssUUFBUSxlQUFlLFFBQVEsV0FBVyxLQUFLLFFBQVEsY0FBYztvQkFDNUUsSUFBSSxTQUFTLEtBQUssUUFBUSxZQUFZLEtBQUs7b0JBQzNDLElBQUksV0FBVyxRQUFRLENBQUMsUUFBUTt3QkFDOUIsT0FBTzs7b0JBRVQsT0FBTyxJQUFJLElBQUk7O3FCQUNWO29CQUNMLE9BQU8sSUFBSSxJQUFJLFdBQVcsS0FBSyxjQUFBLGdCQUFnQixLQUFLOzs7WUp5Z0NoRCxZQUFZO1lBQ1osY0FBYzs7UUl0Z0N0QixPQUFBLGVBQVksZUFBQSxXQUFBLFVBQU07WUp5Z0NWLEtJemdDUixZQUFBO2dCQUNFLElBQUksS0FBSyxRQUFRLGVBQWUsUUFBUSxXQUFXLEtBQUssUUFBUSxjQUFjO29CQUM1RSxJQUFJLFNBQVMsS0FBSyxRQUFRLFlBQVksS0FBSztvQkFDM0MsSUFBSSxXQUFXLFFBQVEsQ0FBQyxRQUFRO3dCQUM5QixPQUFPOztvQkFFVCxPQUFPLGNBQUEsTUFBTSxRQUFRLE1BQVk7d0JBQy9CLE9BQU87d0JBQ1AsY0FBYyxZQUFZOzs7cUJBRXZCO29CQUNMLElBQUksTUFBTSxXQUFXLEtBQUssY0FBQSxnQkFBZ0IsS0FBSztvQkFDL0MsSUFBSSxXQUFXLEtBQUs7b0JBQ3BCLElBQUksWUFBWSxJQUFJLFFBQVEsU0FBUyxHQUFHO3dCQUN0QyxJQUFJLFdBQVcsU0FBUzt3QkFDeEIsSUFBSSxVQUFVOzRCQUNaLElBQUksT0FBTyxTQUFTOzRCQUNwQixJQUFJLE1BQU07Z0NBQ1IsWUFBWSxNQUFNOzs0QkFFcEIsTUFBTSxXQUFXLEtBQUssVUFBVSxjQUFBLGdCQUFnQixLQUFLOzs7b0JBR3pELE9BQU8sY0FBQSxNQUFNLEtBQUssTUFBWTt3QkFDNUIsT0FBTzt3QkFDUCxjQUFjLFlBQVk7Ozs7WUo4Z0N4QixZQUFZO1lBQ1osY0FBYzs7UUkxZ0NmLGVBQUEsVUFBQSxTQUFQLFlBQUE7WUFDRSxPQUFPLE9BQU8sS0FBSyxPQUFPLEtBQUs7O1FBQ2hDO1FBRUQsT0FBQSxlQUFXLGVBQUEsV0FBQSxTQUFLO1lKNmdDUixLSTdnQ1IsWUFBQTtnQkFDRSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUk7O1lKK2dDckIsWUFBWTtZQUNaLGNBQWM7O1FJL2dDckI7UUFFRCxPQUFBLGVBQVcsZUFBQSxXQUFBLFdBQU87WUppaENWLEtJamhDUixZQUFBO2dCQUNFLE9BQU8sQ0FBQyxLQUFLLFlBQVksSUFBSTs7WUptaEN2QixZQUFZO1lBQ1osY0FBYzs7UUluaENyQjtRQUVELE9BQUEsZUFBSSxlQUFBLFdBQUEsYUFBUztZSnFoQ0wsS0lyaENSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLOztZSnVoQ04sWUFBWTtZQUNaLGNBQWM7O1FJdmhDckI7UUFFRCxPQUFBLGVBQUksZUFBQSxXQUFBLFFBQUk7WUp5aENBLEtJemhDUixZQUFBO2dCQUNFLE9BQU8sS0FBSzs7WUoyaENOLFlBQVk7WUFDWixjQUFjOztRSTNoQ3JCO1FBRUQsT0FBQSxlQUFJLGVBQUEsV0FBQSxhQUFTO1lKNmhDTCxLSTdoQ1IsWUFBQTtnQkFDRSxPQUFPLEtBQUssU0FBUzs7WUoraENmLFlBQVk7WUFDWixjQUFjOztRSS9oQ3JCO1FBRU0sZUFBQSxVQUFBLFVBQVAsWUFBQTtZQUNFLElBQUksQ0FBQyxLQUFLLFNBQVMsV0FBVztnQkFDNUIsS0FBSyxTQUFTOzs7UUFFakI7UUFFTSxlQUFBLFVBQUEsVUFBUCxZQUFBO1lBQ0UsS0FBSyxTQUFTOzs7Ozs7UUFPUixlQUFBLFVBQUEsaUJBQVIsVUFBdUIsSUFBeUIsZUFBc0I7WUFDcEUsSUFBSSxNQUFNLHlCQUF5QjtZQUNuQyxJQUFJLFFBQVE7WUFDWixPQUFPLFVBQUMsTUFBVTtnQkFDaEIsT0FBTyxjQUFBLGNBQWMsTUFBTTtnQkFDM0IsTUFBTTs7OztRQUtILGVBQUEsVUFBQSxNQUFQLFVBQVcsSUFBeUIsZUFBdUI7WUFBM0QsSUFBQSxRQUFBO1lBQ0UsSUFBSSxlQUFlO2dCQUNqQixLQUFLLEtBQUssZUFBZSxJQUFJOztZQUUvQixJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWE7Z0JBQzFCLEtBQUssS0FBSyxPQUFPLEtBQUssY0FBQSxhQUFhLE1BQU07O2lCQUNwQztnQkFDTCxXQUFXLFlBQUE7b0JBQ1QsR0FBRyxNQUFLLEtBQUs7bUJBQ1o7OztRQUVOO1FBRU8sZUFBQSxVQUFBLFlBQVIsWUFBQTtZQUNFLElBQUksT0FBTyxjQUFBLGNBQWMsS0FBSztZQUM5QixJQUFJLENBQUMsTUFBTTtnQkFDVCxJQUFJLEtBQUssZUFBZSxFQUFFLFdBQVcsS0FBSyxhQUFhLGVBQWU7b0JBQ3BFLE9BQU8sV0FBVyxLQUFLLGNBQUEsZ0JBQWdCLEtBQUs7O3FCQUN2QztvQkFDTCxNQUFNLElBQUksTUFBTSxtQkFBbUIsS0FBSzs7O1lBRzVDLE9BQU87O1FBR0QsZUFBQSxVQUFBLGFBQVIsVUFBbUIsTUFBVSxTQUFzQjtZQUF0QixJQUFBLFlBQUEsS0FBQSxHQUFBLEVBQUEsVUFBQTtZQUMzQixJQUFJLE9BQU8sY0FBQSxRQUFRO1lBQ25CLElBQUksV0FBVyxDQUFDLE1BQU07Z0JBQ3BCLElBQUksTUFBTSw0QkFBNEI7Z0JBQ3RDLE9BQU87O1lBRVQsSUFBSSxNQUFNLFdBQVcsS0FBSyxLQUFLLFNBQVM7WUFDeEMsSUFBSSxLQUFLLFFBQVEsZUFBZSxRQUFRLFdBQVcsS0FBSyxRQUFRLGNBQWM7OztpQkFFdkU7Z0JBQ0wsSUFBSSxjQUFBLFdBQVcsY0FBQSxpQkFBaUIsS0FBSyxRQUFRO29CQUMzQyxJQUFJLFlBQVksY0FBQSxhQUFhLFNBQVMsS0FBSztvQkFDM0MsSUFBSSxTQUFTLEtBQUs7b0JBQ2xCLElBQUksT0FBTyxLQUFLO29CQUNoQixJQUFJLENBQUMsY0FBYyxnQkFBZ0IsU0FBUyxrQkFBa0IsU0FBUyxnQkFBZ0I7d0JBQ3JGLFNBQVMsV0FBVyxLQUFLLDRCQUE0QixXQUFXLDZCQUE2Qjt3QkFDN0YsSUFBSSxNQUFNOztvQkFFWixNQUFNLFdBQVcsS0FBSyxjQUFBLGdCQUFnQixRQUFRLGNBQWMsV0FBVzs7O1lBRzNFLElBQUksU0FBUztnQkFDWCxNQUFNLFdBQVcsS0FBSyxLQUFLOztZQUU3QixPQUFPOzs7UUFJRixlQUFBLFVBQUEsUUFBUCxVQUFhLElBQXlCLGVBQXVCO1lBQTdELElBQUEsUUFBQTtZQUNFLElBQUksZUFBZTtnQkFDakIsS0FBSyxLQUFLLGVBQWUsSUFBSTs7WUFFL0IsSUFBSSxLQUFLLEtBQUssYUFBYTtnQkFDekIsV0FBVyxZQUFBO29CQUNULElBQUksTUFBTSxNQUFLLE1BQU0sNkJBQTZCLE1BQUssS0FBSztvQkFDNUQsR0FBRyxNQUFLLEtBQUs7bUJBQ1o7O1lBRUwsSUFBSSxNQUFNLEtBQUssTUFBTSwwQkFBMEI7WUFDL0MsS0FBSyxLQUFLLE9BQU8sR0FBRyxjQUFBLGFBQWEsS0FBSyxVQUFDLE1BQUk7Z0JBQ3pDLElBQUksTUFBTSxNQUFLLE1BQU0sYUFBYTtnQkFDbEMsR0FBRzs7WUFFTCxPQUFPOztRQUNSO1FBRU0sZUFBQSxVQUFBLFVBQVAsVUFBZSxJQUF1QjtZQUNwQyxJQUFJLE1BQU0sS0FBSyxNQUFNLDRCQUE0QjtZQUNqRCxLQUFLLEtBQUssT0FBTyxJQUFJLGNBQUEsYUFBYSxLQUFLOztRQUdsQyxlQUFBLFVBQUEsTUFBUCxVQUFXLE1BQVUsSUFBdUIsT0FBd0I7WUFDbEUsSUFBSSxTQUFTO1lBQ2IsSUFBSSxNQUFNLEtBQUssV0FBVztZQUMxQixJQUFJLENBQUMsS0FBSyxLQUFLLGFBQWEsT0FBTzs7Z0JBRWpDLFNBQVM7Z0JBQ1QsTUFBTSxLQUFLLFdBQVcsTUFBTTs7aUJBQ3ZCOztnQkFFTCxJQUFJLGtCQUFrQixLQUFLLFNBQVM7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUI7b0JBQ3BCLElBQUksVUFBVSxLQUFLLEtBQUssYUFBYSxjQUFBLFFBQVE7b0JBQzdDLGtCQUFrQixRQUFRLFNBQVM7b0JBQ25DLEtBQUssU0FBUyxrQkFBa0I7OztZQUdwQyxJQUFJLENBQUMsS0FBSztnQkFDUjs7O1lBR0YsUUFBUSxLQUFLO2dCQUNYLEtBQUssY0FBQSxXQUFXO29CQUNkLElBQUksS0FBSyxLQUFLLGNBQWMsSUFBSTt3QkFDOUIsT0FBTyxLQUFLLEtBQUs7O29CQUVuQjtnQkFDRjs7WUFHRixJQUFJO2dCQUNGLEVBQUUsS0FBSyxLQUFXO29CQUNoQixRQUFRO29CQUNSLGFBQWE7b0JBQ2IsTUFBTSxRQUFRLE9BQU87b0JBQ3JCLGFBQWE7b0JBQ2IsU0FBUyxVQUFDLE1BQUk7d0JBQ1osSUFBSTs0QkFDRixJQUFJLFdBQVcsUUFBUSxTQUFTOzRCQUNoQyxHQUFHOzt3QkFDSCxPQUFPLEtBQUs7NEJBQ1osR0FBRzs7O29CQUdQLE9BQU8sVUFBQyxPQUFPLE1BQU0sUUFBTTt3QkFDekIsSUFBSSxNQUFNLGNBQUEsZUFBZTt3QkFDekIsSUFBSSxNQUFNLHVDQUF1Qzt3QkFDakQsSUFBSSxPQUFPOzRCQUNULE1BQU07OztvQkFHVixZQUFZOzs7WUFFZCxPQUFPLEtBQUs7Z0JBQ1osTUFBTTs7O1FBRVQ7UUFFTSxlQUFBLFVBQUEsU0FBUCxVQUFjLE1BQVUsSUFBdUIsT0FBd0I7WUFBdkUsSUFBQSxRQUFBO1lBQ0UsSUFBSSxNQUFNLEtBQUssV0FBVztZQUMxQixJQUFJLENBQUMsS0FBSztnQkFDUjs7WUFFRixLQUFLLEtBQUssUUFBUTtZQUNsQixLQUFLLEtBQUs7WUFDVixJQUFJO2dCQUNGLEVBQUUsS0FBSyxLQUFVO29CQUNmLFFBQVE7b0JBQ1IsU0FBUyxVQUFDLE1BQUk7d0JBQ1osSUFBSTs0QkFDRixJQUFJLFdBQVcsUUFBUSxTQUFTOzRCQUNoQyxHQUFHOzt3QkFDSCxPQUFPLEtBQUs7NEJBQ1osR0FBRzs7O29CQUdQLE9BQU8sVUFBQyxPQUFPLE1BQU0sUUFBTTt3QkFDekIsSUFBSSxNQUFNLGNBQUEsZUFBZTt3QkFDekIsSUFBSSxNQUFNLDZCQUE2Qjt3QkFDdkMsTUFBSyxLQUFLLE1BQU07d0JBQ2hCLE1BQUssS0FBSzt3QkFDVixJQUFJLE9BQU87NEJBQ1QsTUFBTTs7O29CQUdWLFlBQVk7OztZQUVkLE9BQU8sS0FBSztnQkFDWixNQUFNOzs7UUFFVDtRQUNILE9BQUE7O0lBL1JhLGNBQUEsaUJBQWM7SUErUjFCOzs7O0lBS0QsSUFBQSxnQ0FBQSxZQUFBO1FBSUUsU0FBQSxlQUFZLGFBQTBCO1lBSDlCLEtBQUEsWUFBWTtZQUNaLEtBQUEsY0FBNkI7WUFHbkMsS0FBSyxjQUFjOztRQUNwQjtRQUVELE9BQUEsZUFBVyxlQUFBLFdBQUEsWUFBUTtZSnlpQ1gsS0l6aUNSLFlBQUE7Z0JBQ0UsT0FBTyxLQUFLOztZSjJpQ04sWUFBWTtZQUNaLGNBQWM7O1FJemlDZixlQUFBLFVBQUEsU0FBUCxZQUFBO1lBQ0UsS0FBSyxZQUFZLEtBQUssWUFBWTs7UUFDbkM7UUFFTSxlQUFBLFVBQUEsWUFBUCxZQUFBO1lBQ0UsS0FBSyxZQUFZLEtBQUssWUFBWTs7UUFDbkM7UUFFRCxPQUFBLGVBQVcsZUFBQSxXQUFBLGNBQVU7WUo0aUNiLEtJNWlDUixZQUFBO2dCQUNFLE9BQU8sS0FBSzs7WUo4aUNOLFlBQVk7WUFDWixjQUFjOztRSTlpQ3JCO1FBRU0sZUFBQSxVQUFBLGFBQVAsWUFBQTtZQUNFLE9BQU8sS0FBSyxhQUFhOztRQUMxQjtRQUVNLGVBQUEsVUFBQSxVQUFQLFlBQUE7WUFDRSxLQUFLLFlBQVk7OztRQUdyQixPQUFBOztJQUFDOzs7O0lBU0QsSUFBQSxzQ0FBQSxZQUFBO1FBQUEsU0FBQSx1QkFBQTtZQUNVLEtBQUEsTUFBcUIsT0FBTyxJQUFJO1lBQ2hDLEtBQUEsV0FBdUI7O1FBQ3hCLHFCQUFBLFVBQUEsU0FBUCxVQUFjLFNBQWMsV0FBZTtZQUN6QyxJQUFJLE9BQU87WUFDWCxJQUFJLFlBQVk7WUFDaEIsSUFBSSxXQUFXO1lBQ2YsSUFBSSxRQUFRLFNBQVMsVUFBVTtnQkFDN0IsT0FBTyxRQUFRO2dCQUNmLFlBQVksUUFBUSxhQUFhOztpQkFDNUI7Z0JBQ0wsV0FBVztvQkFDVCxNQUFNO29CQUNOLFdBQVc7OztZQUdmLElBQUksTUFBTSxPQUFPLE1BQU07WUFDdkIsSUFBSSxLQUFLLFNBQVMsTUFBTTtnQkFDdEIsSUFBSSxTQUFTLEtBQUssU0FBUztnQkFDM0IsT0FBTztnQkFDUCxLQUFLLElBQUksTUFBTSx1Q0FBdUMsS0FBSyxrQkFBa0IsT0FBTztnQkFDcEYsT0FBTyxPQUFPOztpQkFDVDtnQkFDTCxJQUFJLFNBQVMsSUFBSSxlQUFlLElBQUksZUFBZTtnQkFDbkQsT0FBTztnQkFDUCxLQUFLLElBQUksTUFBTSxpQ0FBaUMsS0FBSyxrQkFBa0IsT0FBTztnQkFDOUUsS0FBSyxTQUFTLE9BQU87Z0JBQ3JCLE9BQU8sT0FBTzs7O1FBSVgscUJBQUEsVUFBQSxVQUFQLFVBQWUsUUFBaUI7WUFBRSxJQUFBLFVBQUE7WUppakMxQixLSWpqQzBCLElBQUEsS0FBQSxHQUFBLEtBQUEsVUFBQSxRQUFBLE1BQXNDO2dCQUF0QyxRQUFBLEtBQUEsS0FBQSxVQUFBOztZQUNoQyxFQUFFLFFBQVEsU0FBUyxVQUFDLFFBQU07Z0JBQ3hCLE9BQU8sUUFBUTs7WUFFakIsSUFBSSxNQUFNLE9BQU87WUFDakIsSUFBSSxLQUFLLFNBQVMsTUFBTTtnQkFDdEIsSUFBSSxJQUFJLEtBQUssU0FBUztnQkFDdEIsRUFBRTtnQkFDRixLQUFLLElBQUksTUFBTSwwQ0FBMEMsS0FBSyxrQkFBa0IsRUFBRTtnQkFDbEYsSUFBSSxFQUFFLGNBQWM7b0JBQ2xCLEtBQUssU0FBUyxPQUFPO29CQUNyQixFQUFFO29CQUNGLEtBQUssSUFBSSxNQUFNLDhCQUE4Qjs7OztRQUlyRCxPQUFBOztJQUVXLGNBQUEsbUJBQW9DLElBQUk7SUFFbkQsY0FBQSxRQUFRLFFBQVEsb0JBQW9CLFlBQUE7UUFDbEMsT0FBTyxjQUFBOztJQUdULElBQUksVUFBVTtJQUNkLElBQUksWUFBWTtJQUNoQixJQUFJLGFBQWE7Ozs7Ozs7SUFTakIsU0FBQSxJQUFvQixTQUFrQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxNQUFNO1lBQ2pCLE1BQU07O1FBRVIsSUFBSSxTQUFTLGNBQUEsaUJBQWlCLE9BQU87UUFDckMsSUFBSSxVQUFVLFVBQUMsTUFBVTtZQUN2QixJQUFJLFFBQVEsU0FBUztnQkFDbkIsSUFBSTtvQkFDRixRQUFRLFFBQVE7O2dCQUNoQixPQUFPLEtBQUs7b0JBQ1osSUFBSSxNQUFNLDJDQUEyQzs7O1lBR3pELGNBQUEsaUJBQWlCLFFBQVE7O1FBRTNCLE9BQU8sSUFBSSxTQUFTLFFBQVE7UUFDNUIsT0FBTzs7SUFoQk8sY0FBQSxNQUFHO0lBbUJuQixTQUFBLGlCQUEwQixTQUFhLFFBQWdGO1FBQ3JILElBQUksQ0FBQyxRQUFRLE9BQU8sU0FBUztZQUMzQixNQUFNOztRQUVSLElBQUksU0FBUztRQUNiLElBQUksVUFBVSxFQUFFLFVBQVUsUUFBUSxPQUFPO1FBQ3pDLFNBQUEsVUFBbUIsSUFBSSxNQUFJO1lBQ3pCLE9BQU8sTUFBTTtZQUNiOztRQUNEO1FBQ0QsU0FBQSxPQUFBO1lBQ0UsSUFBSSxRQUFRLFdBQVcsR0FBRztnQkFDeEIsSUFBSSxNQUFNO2dCQUNWLElBQUk7b0JBQ0YsSUFBSSxRQUFRLFNBQVM7d0JBQ25CLFFBQVEsUUFBUTs7O2dCQUVsQixPQUFPLEtBQUs7b0JBQ1osSUFBSSxNQUFNLDJDQUEyQzs7Z0JBRXZEOztZQUVGLElBQUksU0FBUyxRQUFRO1lBQ3JCLElBQUksTUFBTSx1QkFBdUIsY0FBQSxRQUFRO1lBQ3pDLElBQUksVUFBVSxVQUFDLE1BQUk7Z0JBQ25CLFVBQVUsY0FBQSxTQUFTLFNBQVM7O1lBRTVCLElBQUksUUFBUSxVQUFDLE1BQUk7Z0JBQ2pCLFVBQVUsY0FBQSxTQUFTLFNBQVM7O1lBRTVCLE9BQU8sUUFBUSxTQUFTOztRQUUxQjs7SUFHRixTQUFBLGlCQUEwQixTQUFXO1FBQ25DLElBQUksTUFBTSxrQ0FBa0M7O1FBRTVDLElBQUksUUFBUSxZQUFZLGNBQUEsUUFBUSxhQUFhLGNBQUEsV0FBVyxjQUFBLFdBQVcsT0FBTztZQUN4RSxJQUFJLFNBQVM7WUFDYixVQUFVO2dCQUNSLFFBQVE7O1lBRVYsSUFBSSxPQUFPLFNBQVM7Z0JBQ2xCLFFBQVEsT0FBTyxjQUFBLFdBQVcsY0FBQSxXQUFXOzs7UUFHekMsSUFBSSxDQUFDLFFBQVEsUUFBUTtZQUNuQixNQUFNOztRQUVSLElBQUksQ0FBQyxRQUFRLE9BQU8sTUFBTTtZQUN4QixJQUFJLFFBQVEsTUFBTTtnQkFDaEIsUUFBUSxPQUFPLE9BQU8sY0FBQSxXQUFXLFFBQVE7O2lCQUNwQztnQkFDTCxNQUFNOzs7UUFHVixJQUFJLE1BQU0sK0JBQStCO1FBQ3pDLE9BQU87O0lBR1QsU0FBQSxJQUFvQixTQUFXO1FBQzdCLFVBQVUsaUJBQWlCOztRQUUzQixJQUFJLFFBQVEsT0FBTyxTQUFTLGNBQUEsV0FBVyxjQUFBLFdBQVcsT0FBTztZQUN2RCxpQkFBaUIsU0FBUyxVQUFDLFFBQVksU0FBUyxPQUFLO2dCQUNuRCxJQUFJO29CQUNGLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxPQUFPOzs7WUFHWDs7UUFFRixRQUFRLE9BQU8sUUFBUSxRQUFRLGNBQUEsaUJBQWlCLFFBQVE7UUFDeEQsUUFBUSxZQUFZLGNBQUEsV0FBVyxRQUFRLFFBQVEsUUFBUSxhQUFhLGNBQUEsYUFBYSxRQUFRLFVBQVU7UUFDbkcsUUFBUSxhQUFhLFFBQVEsY0FBYyxjQUFBLGNBQWMsUUFBUTtRQUNqRSxJQUFJLFNBQVMsY0FBQSxpQkFBaUIsT0FBTztRQUNyQyxJQUFJLFVBQVUsVUFBQyxNQUFJO1lBQ2pCLElBQUksUUFBUSxTQUFTO2dCQUNuQixJQUFJO29CQUNGLFFBQVEsUUFBUTs7Z0JBQ2hCLE9BQU8sS0FBSztvQkFDWixJQUFJLE1BQU0sMkNBQTJDOzs7WUFHekQsY0FBQSxpQkFBaUIsUUFBUTs7UUFFM0IsSUFBSSxRQUFRLFVBQUMsS0FBRztZQUNkLElBQUksUUFBUSxPQUFPO2dCQUNqQixJQUFJO29CQUNGLFFBQVEsTUFBTTs7Z0JBQ2QsT0FBTyxLQUFLO29CQUNaLElBQUksTUFBTSx5Q0FBeUM7OztZQUd2RCxjQUFBLGlCQUFpQixRQUFROztRQUUzQixPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVM7O0lBckN6QixjQUFBLE1BQUc7Ozs7SUEyQ25CLFNBQUEsSUFBb0IsU0FBVztRQUM3QixVQUFVLGlCQUFpQjs7UUFFM0IsSUFBSSxRQUFRLE9BQU8sU0FBUyxjQUFBLFdBQVcsY0FBQSxXQUFXLE9BQU87WUFDdkQsaUJBQWlCLFNBQVMsVUFBQyxRQUFZLFNBQVMsT0FBSztnQkFDbkQsSUFBSTtvQkFDRixRQUFRO29CQUNSLFNBQVM7b0JBQ1QsT0FBTzs7O1lBR1g7O1FBRUYsUUFBUSxPQUFPLFFBQVEsUUFBUSxjQUFBLGlCQUFpQixRQUFRO1FBQ3hELFFBQVEsWUFBWSxjQUFBLFdBQVcsUUFBUSxRQUFRLFFBQVEsYUFBYSxjQUFBLGFBQWEsUUFBUSxVQUFVO1FBQ25HLFFBQVEsYUFBYSxRQUFRLGNBQWMsY0FBQSxjQUFjLFFBQVE7UUFDakUsSUFBSSxTQUFTLGNBQUEsaUJBQWlCLE9BQU87UUFDckMsT0FBTyxJQUFJLFVBQUMsU0FBTztZQUNqQixJQUFJLFVBQVUsVUFBQyxNQUFJO2dCQUNqQixJQUFJLFFBQVEsU0FBUztvQkFDbkIsSUFBSTt3QkFDRixRQUFRLFFBQVE7O29CQUNoQixPQUFPLEtBQUs7d0JBQ1osSUFBSSxNQUFNLDJDQUEyQzs7O2dCQUd6RCxjQUFBLGlCQUFpQixRQUFROztZQUUzQixJQUFJLFFBQVEsVUFBQyxLQUFHO2dCQUNkLElBQUksUUFBUSxPQUFPO29CQUNqQixJQUFJO3dCQUNGLFFBQVEsTUFBTTs7b0JBQ2QsT0FBTyxLQUFLO3dCQUNaLElBQUksTUFBTSx5Q0FBeUM7OztnQkFHdkQsY0FBQSxpQkFBaUIsUUFBUTs7WUFFM0IsT0FBTyxJQUFJLFFBQVEsUUFBUSxTQUFTOztRQUV0QyxPQUFPOztJQXhDTyxjQUFBLE1BQUc7SUEyQ25CLFNBQUEsTUFBc0IsU0FBa0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsTUFBTTtZQUNqQixNQUFNOztRQUVSLElBQUksU0FBc0IsY0FBQSxpQkFBaUIsT0FBTztRQUNsRCxJQUFJLFNBQVMsT0FBTyxNQUFNLFFBQVEsU0FBUyxRQUFRO1FBQ25ELElBQUksT0FBTztZQUNULFFBQVE7WUFDUixRQUFRO1lBQ1IsWUFBWSxZQUFBO2dCQUNWLGNBQUEsaUJBQWlCLFFBQVEsS0FBSyxRQUFRLEtBQUs7OztRQUcvQyxPQUFPO1FBQ1AsT0FBTzs7SUFkTyxjQUFBLFFBQUs7R0FwakNoQixrQkFBQSxnQkFBYTtBSjJuRXBCIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWZzIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEtpbmRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTElTVCgpOnN0cmluZyB7IHJldHVybiBcIkxpc3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcIkVuZHBvaW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJFdmVudFwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIk5hbWVzcGFjZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJOb2RlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQZXJzaXN0ZW50Vm9sdW1lXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQZXJzaXN0ZW50Vm9sdW1lQ2xhaW1cIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVwbGljYXRpb25Db250cm9sbGVyXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBX1NFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJSZXBsaWNhU2V0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSZXNvdXJjZVF1b3RhXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiT0F1dGhDbGllbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZWNyZXRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VydmljZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcIlNlcnZpY2VBY2NvdW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBDT05GSUdfTUFQUygpOnN0cmluZyB7IHJldHVybiBcIkNvbmZpZ01hcFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU5HUkVTU0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW5ncmVzc1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJUZW1wbGF0ZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUm91dGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJCdWlsZENvbmZpZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQnVpbGRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcIkRlcGxveW1lbnRDb25maWdcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGVwbG95bWVudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVN0cmVhbVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVN0cmVhbVRhZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2xpY3lcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcIlBvbGljeUJpbmRpbmdcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUHJvamVjdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcIlJvbGVCaW5kaW5nXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcIlJvbGVcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERBRU1PTlNFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJEYWVtb25TZXRcIjsgfVxuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBX1NFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhc2V0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVzb3VyY2VxdW90YXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJvYXV0aGNsaWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZWFjY291bnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBDT05GSUdfTUFQUygpOnN0cmluZyB7IHJldHVybiBcImNvbmZpZ21hcHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcImluZ3Jlc3Nlc1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJ0ZW1wbGF0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcInJvdXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50Y29uZmlnc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1fVEFHUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtdGFnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY2llc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWN5YmluZGluZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlYmluZGluZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZXNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERBRU1PTlNFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJkYWVtb25zZXRzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBFeHRlbnNpb25UeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXh0ZW5zaW9ucygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5EQUVNT05TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLklOR1JFU1NFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRVNcbiAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9zVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuVEVNUExBVEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvL2RlZnMgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcbjtcbjtcbnZhciBLdWJlcm5ldGVzQVBJO1xuKGZ1bmN0aW9uIChLdWJlcm5ldGVzQVBJKSB7XG4gICAgdmFyIGNvbnN0cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gY29uc3RzKCkge1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHMucHJvdG90eXBlLCBcIk5BTUVTUEFDRV9TVE9SQUdFX0tFWVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb25zdHM7XG4gICAgfSgpKTtcbiAgICBLdWJlcm5ldGVzQVBJLmNvbnN0cyA9IGNvbnN0cztcbiAgICBLdWJlcm5ldGVzQVBJLkNvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcbiAgICB2YXIgS2luZFR5cGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBLaW5kVHlwZXMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJMSVNUXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJMaXN0XCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIkVORFBPSU5UU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiRW5kcG9pbnRcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiRVZFTlRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJFdmVudFwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJOQU1FU1BBQ0VTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJOYW1lc3BhY2VcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiTk9ERVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIk5vZGVcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiUEVSU0lTVEVOVF9WT0xVTUVTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJQZXJzaXN0ZW50Vm9sdW1lXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZUNsYWltXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlBPRFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlBvZFwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJSRVBMSUNBVElPTl9DT05UUk9MTEVSU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUmVwbGljYXRpb25Db250cm9sbGVyXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlJFUExJQ0FfU0VUU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUmVwbGljYVNldFwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJSRVNPVVJDRV9RVU9UQVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlJlc291cmNlUXVvdGFcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiT0FVVEhfQ0xJRU5UU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiT0F1dGhDbGllbnRcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiU0VDUkVUU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiU2VjcmV0XCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlNFUlZJQ0VTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJTZXJ2aWNlXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlNFUlZJQ0VfQUNDT1VOVFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlNlcnZpY2VBY2NvdW50XCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIkNPTkZJR19NQVBTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJDb25maWdNYXBcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiSU5HUkVTU0VTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJJbmdyZXNzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlRFTVBMQVRFU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiVGVtcGxhdGVcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLaW5kVHlwZXMsIFwiUk9VVEVTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJSb3V0ZVwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJCVUlMRF9DT05GSUdTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJCdWlsZENvbmZpZ1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJCVUlMRFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIkJ1aWxkXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIkRFUExPWU1FTlRfQ09ORklHU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiRGVwbG95bWVudENvbmZpZ1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJERVBMT1lNRU5UU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiRGVwbG95bWVudFwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJJTUFHRVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIkltYWdlXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIklNQUdFX1NUUkVBTVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIkltYWdlU3RyZWFtXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIklNQUdFX1NUUkVBTV9UQUdTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJJbWFnZVN0cmVhbVRhZ1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJQT0xJQ0lFU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUG9saWN5XCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2luZFR5cGVzLCBcIlBPTElDWV9CSU5ESU5HU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUG9saWN5QmluZGluZ1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJQUk9KRUNUU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUHJvamVjdFwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJST0xFX0JJTkRJTkdTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJSb2xlQmluZGluZ1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJST0xFU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiUm9sZVwiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtpbmRUeXBlcywgXCJEQUVNT05TRVRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJEYWVtb25TZXRcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBLaW5kVHlwZXM7XG4gICAgfSgpKTtcbiAgICBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcyA9IEtpbmRUeXBlcztcbiAgICB2YXIgV2F0Y2hUeXBlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gV2F0Y2hUeXBlcygpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJMSVNUXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJsaXN0XCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJFTkRQT0lOVFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiRVZFTlRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJldmVudHNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIk5BTUVTUEFDRVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIk5PREVTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJub2Rlc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUEVSU0lTVEVOVF9WT0xVTUVTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJQT0RTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJwb2RzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJSRVBMSUNBVElPTl9DT05UUk9MTEVSU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUkVQTElDQV9TRVRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJyZXBsaWNhc2V0c1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUkVTT1VSQ0VfUVVPVEFTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiT0FVVEhfQ0xJRU5UU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJTRUNSRVRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJTRVJWSUNFU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIlNFUlZJQ0VfQUNDT1VOVFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiQ09ORklHX01BUFNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImNvbmZpZ21hcHNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIklOR1JFU1NFU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiaW5ncmVzc2VzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJURU1QTEFURVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUk9VVEVTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIkJVSUxEX0NPTkZJR1NcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiQlVJTERTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJidWlsZHNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIkRFUExPWU1FTlRfQ09ORklHU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIkRFUExPWU1FTlRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJkZXBsb3ltZW50c1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiSU1BR0VTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJpbWFnZXNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIklNQUdFX1NUUkVBTVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiSU1BR0VfU1RSRUFNX1RBR1NcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcImltYWdlc3RyZWFtdGFnc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUE9MSUNJRVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInBvbGljaWVzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJQT0xJQ1lfQklORElOR1NcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJQUk9KRUNUU1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXYXRjaFR5cGVzLCBcIlJPTEVfQklORElOR1NcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoVHlwZXMsIFwiUk9MRVNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcInJvbGVzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hUeXBlcywgXCJEQUVNT05TRVRTXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJkYWVtb25zZXRzXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gV2F0Y2hUeXBlcztcbiAgICB9KCkpO1xuICAgIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyA9IFdhdGNoVHlwZXM7XG4gICAgdmFyIEV4dGVuc2lvblR5cGVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBFeHRlbnNpb25UeXBlcygpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXh0ZW5zaW9uVHlwZXMsIFwiZXh0ZW5zaW9uc1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLkRBRU1PTlNFVFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuSU5HUkVTU0VTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUU1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEV4dGVuc2lvblR5cGVzO1xuICAgIH0oKSk7XG4gICAgS3ViZXJuZXRlc0FQSS5FeHRlbnNpb25UeXBlcyA9IEV4dGVuc2lvblR5cGVzO1xuICAgIHZhciBOYW1lc3BhY2VkVHlwZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE5hbWVzcGFjZWRUeXBlcygpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmFtZXNwYWNlZFR5cGVzLCBcIms4c1R5cGVzXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgICAgICAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgICAgICAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgICAgICAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRVNcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYW1lc3BhY2VkVHlwZXMsIFwib3NUeXBlc1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLkJVSUxEUyxcbiAgICAgICAgICAgICAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyxcbiAgICAgICAgICAgICAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlBST0pFQ1RTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlJPTEVTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlJPTEVfQklORElOR1MsXG4gICAgICAgICAgICAgICAgICAgIFdhdGNoVHlwZXMuUk9VVEVTLFxuICAgICAgICAgICAgICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFU1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE5hbWVzcGFjZWRUeXBlcztcbiAgICB9KCkpO1xuICAgIEt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzID0gTmFtZXNwYWNlZFR5cGVzO1xuICAgIHZhciBXYXRjaEFjdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFdhdGNoQWN0aW9ucygpIHtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F0Y2hBY3Rpb25zLCBcIklOSVRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIklOSVRcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoQWN0aW9ucywgXCJBTllcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBcIipcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoQWN0aW9ucywgXCJBRERFRFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiQURERURcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoQWN0aW9ucywgXCJNT0RJRklFRFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdGNoQWN0aW9ucywgXCJERUxFVEVEXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJERUxFVEVEXCI7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICA7XG4gICAgICAgIHJldHVybiBXYXRjaEFjdGlvbnM7XG4gICAgfSgpKTtcbiAgICBLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucyA9IFdhdGNoQWN0aW9ucztcbn0pKEt1YmVybmV0ZXNBUEkgfHwgKEt1YmVybmV0ZXNBUEkgPSB7fSkpO1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxudmFyIEt1YmVybmV0ZXNBUEk7XG4oZnVuY3Rpb24gKEt1YmVybmV0ZXNBUEkpIHtcbiAgICBLdWJlcm5ldGVzQVBJLnBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gICAgS3ViZXJuZXRlc0FQSS5wbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgICBLdWJlcm5ldGVzQVBJLnRlbXBsYXRlUGF0aCA9IEt1YmVybmV0ZXNBUEkucGx1Z2luUGF0aCArICdodG1sLyc7XG4gICAgS3ViZXJuZXRlc0FQSS5sb2cgPSBMb2dnZXIuZ2V0KEt1YmVybmV0ZXNBUEkucGx1Z2luTmFtZSk7XG4gICAgS3ViZXJuZXRlc0FQSS5rZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcbiAgICBLdWJlcm5ldGVzQVBJLmRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICAgIEt1YmVybmV0ZXNBUEkuaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG4gICAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICAgIEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB1bmRlZmluZWQ7XG4gICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBcIlwiO1xuICAgIEt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgPSBmYWxzZTtcbiAgICBLdWJlcm5ldGVzQVBJLks4U19QUkVGSVggPSAnYXBpJztcbiAgICBLdWJlcm5ldGVzQVBJLk9TX1BSRUZJWCA9ICdvYXBpJztcbiAgICBLdWJlcm5ldGVzQVBJLks4U19FWFRfUFJFRklYID0gJ2FwaXMnO1xuICAgIEt1YmVybmV0ZXNBUEkuSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgICBLdWJlcm5ldGVzQVBJLk9TX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgICBLdWJlcm5ldGVzQVBJLks4U19FWFRfVkVSU0lPTiA9ICd2MWJldGExJztcbiAgICBLdWJlcm5ldGVzQVBJLks4U19FWFRFTlNJT05TID0gJ2V4dGVuc2lvbnMnO1xuICAgIEt1YmVybmV0ZXNBUEkuZGVmYXVsdEFwaVZlcnNpb24gPSBLdWJlcm5ldGVzQVBJLks4U19BUElfVkVSU0lPTjtcbiAgICBLdWJlcm5ldGVzQVBJLmRlZmF1bHRPU0FwaVZlcnNpb24gPSBLdWJlcm5ldGVzQVBJLk9TX0FQSV9WRVJTSU9OO1xuICAgIEt1YmVybmV0ZXNBUEkubGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG4gICAgS3ViZXJuZXRlc0FQSS5kZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gICAgS3ViZXJuZXRlc0FQSS5hcHBTdWZmaXggPSBcIi5hcHBcIjtcbn0pKEt1YmVybmV0ZXNBUEkgfHwgKEt1YmVybmV0ZXNBUEkgPSB7fSkpO1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxudmFyIEt1YmVybmV0ZXNBUEk7XG4oZnVuY3Rpb24gKEt1YmVybmV0ZXNBUEkpIHtcbiAgICBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLks4U19QUkVGSVg7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuYXBpUHJlZml4ID0gYXBpUHJlZml4O1xuICAgIGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgICAgICByZXR1cm4gS3ViZXJuZXRlc0FQSS5PU19QUkVGSVg7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXggPSBvc0FwaVByZWZpeDtcbiAgICBmdW5jdGlvbiBleHRQcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLks4U19FWFRfUFJFRklYO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmV4dFByZWZpeCA9IGV4dFByZWZpeDtcbiAgICBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCB8fCBcIlwiO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCA9IG1hc3RlckFwaVVybDtcbiAgICBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQpIHtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkubmFtZXNwYWNlZCA9IG5hbWVzcGFjZWQ7XG4gICAgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgS3ViZXJuZXRlc0FQSS5LOFNfQVBJX1ZFUlNJT04pO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlQcmVmaXggPSBrdWJlcm5ldGVzQXBpUHJlZml4O1xuICAgIGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FQSS5LOFNfRVhUX1BSRUZJWCwgS3ViZXJuZXRlc0FQSS5LOFNfRVhURU5TSU9OUywgS3ViZXJuZXRlc0FQSS5LOFNfRVhUX1ZFUlNJT04pO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXggPSBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4O1xuICAgIGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvc0FwaVByZWZpeCgpLCBLdWJlcm5ldGVzQVBJLk9TX0FQSV9WRVJTSU9OKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlQcmVmaXggPSBvcGVuc2hpZnRBcGlQcmVmaXg7XG4gICAgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kKSB7XG4gICAgICAgIGlmIChraW5kID09PSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgICAgICAgcmV0dXJuIEt1YmVybmV0ZXNBUEkuSzhTX1BSRUZJWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5zb21lKEt1YmVybmV0ZXNBUEkuRXh0ZW5zaW9uVHlwZXMuZXh0ZW5zaW9ucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPT09IGtpbmQ7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gS3ViZXJuZXRlc0FQSS5LOFNfRVhUX1BSRUZJWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5zb21lKEt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA9PT0ga2luZDsgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLks4U19QUkVGSVg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8uc29tZShLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA9PT0ga2luZDsgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLk9TX1BSRUZJWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2luZCA9PT0gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFUykge1xuICAgICAgICAgICAgcmV0dXJuIEt1YmVybmV0ZXNBUEkuT1NfUFJFRklYO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmFwaUZvcktpbmQgPSBhcGlGb3JLaW5kO1xuICAgIGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQpIHtcbiAgICAgICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgICAgIHN3aXRjaCAoYXBpKSB7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LOFNfQVBJX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5PU19BUElfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuYXBpVmVyc2lvbkZvcktpbmQgPSBhcGlWZXJzaW9uRm9yS2luZDtcbiAgICBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQpIHtcbiAgICAgICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgICAgIHN3aXRjaCAoYXBpKSB7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LOFNfUFJFRklYOlxuICAgICAgICAgICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuT1NfUFJFRklYOlxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kID0gcHJlZml4Rm9yS2luZDtcbiAgICBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlVcmwgPSBrdWJlcm5ldGVzQXBpVXJsO1xuICAgIGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVVybCA9IG9wZW5zaGlmdEFwaVVybDtcbiAgICAvKlxuICAgICAqIEV4dHJhY3RzIHRoZSBrOHMvb3BlbnNoaWZ0IGVycm9yIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRFcnJvck9iamVjdChqcVhIUikge1xuICAgICAgICB2YXIgYW5zd2VyID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmdldEVycm9yT2JqZWN0ID0gZ2V0RXJyb3JPYmplY3Q7XG4gICAgLypcbiAgICAgKiBSZXR1cm5zIGVpdGhlciBzZWN1cmUvaW5zZWN1cmUgd2Vic29ja2V0IHByb3RvY29sIGJhc2VkIG9uIHRoZSBtYXN0ZXIgVVJJIHByb3RvY29sXG4gICAgICovXG4gICAgZnVuY3Rpb24gd3NTY2hlbWUodXJsKSB7XG4gICAgICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnd3NzJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnd3MnO1xuICAgICAgICB9XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkud3NTY2hlbWUgPSB3c1NjaGVtZTtcbiAgICAvKlxuICAgICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZCkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5MSVNUOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuTElTVDtcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkVORFBPSU5UUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVWRU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkVWRU5UUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5OQU1FU1BBQ0VTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5OT0RFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPRFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5QT0RTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FfU0VUUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJFUExJQ0FfU0VUUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5PQVVUSF9DTElFTlRTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VDUkVUUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlNFQ1JFVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlNFUlZJQ0VTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5DT05GSUdfTUFQUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkNPTkZJR19NQVBTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuSU5HUkVTU0VTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuSU5HUkVTU0VTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuVEVNUExBVEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuVEVNUExBVEVTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUk9VVEVTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkJVSUxEX0NPTkZJR1M7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5CVUlMRFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkRFUExPWU1FTlRTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuSU1BR0VTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuSU1BR0VTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLklNQUdFX1NUUkVBTVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5QT0xJQ0lFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBPTElDWV9CSU5ESU5HUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUFJPSkVDVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUk9MRV9CSU5ESU5HUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUk9MRVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5EQUVNT05TRVRTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuREFFTU9OU0VUUztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgICAgICB9XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkudG9LaW5kTmFtZSA9IHRvS2luZE5hbWU7XG4gICAgLypcbiAgICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgICAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5MSVNUOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1Q7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkVORFBPSU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FTkRQT0lOVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkVWRU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FVkVOVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLk5BTUVTUEFDRVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuTk9ERVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBPRFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9EUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJFUExJQ0FfU0VUUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLk9BVVRIX0NMSUVOVFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuU0VDUkVUUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRUNSRVRTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5TRVJWSUNFUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5DT05GSUdfTUFQUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5DT05GSUdfTUFQUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuSU5HUkVTU0VTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklOR1JFU1NFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuVEVNUExBVEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUk9VVEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPVVRFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuQlVJTERfQ09ORklHUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5CVUlMRFM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ERVBMT1lNRU5UUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuSU1BR0VTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuSU1BR0VfU1RSRUFNUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUztcbiAgICAgICAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUE9MSUNJRVM6IHJldHVybiBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBPTElDWV9CSU5ESU5HUzogcmV0dXJuIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1M7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBST0pFQ1RTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ST0xFX0JJTkRJTkdTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVfQklORElOR1M7XG4gICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJPTEVTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTO1xuICAgICAgICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5EQUVNT05TRVRTOiByZXR1cm4gS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRBRU1PTlNFVFM7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4ga2luZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLnRvQ29sbGVjdGlvbk5hbWUgPSB0b0NvbGxlY3Rpb25OYW1lO1xuICAgIC8qXG4gICAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdzVXJsKHVybCkge1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgICAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkud3NVcmwgPSB3c1VybDtcbiAgICAvKlxuICAgICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCkge1xuICAgICAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICAgICAgaWYgKCFsZWZ0VUlEICYmICFyaWdodFVJRCkge1xuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIudG9Kc29uKGxlZnQpID09PSBhbmd1bGFyLnRvSnNvbihyaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmVxdWFscyA9IGVxdWFscztcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICAgKlxuICAgICAqKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgb2JqZWN0c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiBLdWJlcm5ldGVzQVBJLks4U19BUElfVkVSU0lPTixcbiAgICAgICAgICAgIGtpbmQ6IHRvS2luZE5hbWUoS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgICAgICAgb2JqZWN0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgXy5mb3JFYWNoKG9iamVjdHMsIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChvYmplY3QsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmNyZWF0ZUxpc3QgPSBjcmVhdGVMaXN0O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBvYmplY3Qgc3VpdGFibGUgZm9yIGRlbGV0ZS9kZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVTaGFsbG93T2JqZWN0KG5hbWUsIGtpbmQsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBpVmVyc2lvbjogS3ViZXJuZXRlc0FQSS5LOFNfQVBJX1ZFUlNJT04sXG4gICAgICAgICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuY3JlYXRlU2hhbGxvd09iamVjdCA9IGNyZWF0ZVNoYWxsb3dPYmplY3Q7XG4gICAgLyoqXG4gICAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgICAqKi9cbiAgICBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHMsIGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBfLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBfLmZpbHRlcihvYmplY3RzLCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcyhnZXRMYWJlbHMob2JqZWN0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmZpbHRlckJ5TGFiZWwgPSBmaWx0ZXJCeUxhYmVsO1xuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAgICovXG4gICAgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgaWYgKCFvYmoua2luZCB8fCAhbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuYXBwbHlOYW1lc3BhY2UgPSBhcHBseU5hbWVzcGFjZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAgICoqL1xuICAgIGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgICAgIHZhciBraW5kID0gZ2V0S2luZChlbnRpdHkpO1xuICAgICAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbigobmFtZXNwYWNlID8gbmFtZXNwYWNlIDogXCJcIiksIGtpbmQsIG5hbWUpO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gICAgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuZ2V0VUlEID0gZ2V0VUlEO1xuICAgIGZ1bmN0aW9uIGdldE5hbWVzcGFjZShlbnRpdHkpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAgICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXROYW1lc3BhY2UgPSBnZXROYW1lc3BhY2U7XG4gICAgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnYXBpVmVyc2lvbiddKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXRBcGlWZXJzaW9uID0gZ2V0QXBpVmVyc2lvbjtcbiAgICBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMgPSBnZXRMYWJlbHM7XG4gICAgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuZ2V0TmFtZSA9IGdldE5hbWU7XG4gICAgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmdldEtpbmQgPSBnZXRLaW5kO1xuICAgIGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXRTZWxlY3RvciA9IGdldFNlbGVjdG9yO1xuICAgIGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmdldEhvc3QgPSBnZXRIb3N0O1xuICAgIGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICAgICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMgPSBnZXRTdGF0dXM7XG4gICAgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgICAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gICAgfVxuICAgIEt1YmVybmV0ZXNBUEkuZ2V0UG9ydHMgPSBnZXRQb3J0cztcbiAgICBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmdldENyZWF0aW9uVGltZXN0YW1wID0gZ2V0Q3JlYXRpb25UaW1lc3RhbXA7XG4gICAgO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAgICovXG4gICAgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0KSB7XG4gICAgICAgIGlmIChzZXBlcmF0b3JUZXh0ID09PSB2b2lkIDApIHsgc2VwZXJhdG9yVGV4dCA9IEt1YmVybmV0ZXNBUEkubGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yOyB9XG4gICAgICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmxhYmVsc1RvU3RyaW5nID0gbGFiZWxzVG9TdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSAocG9kQ3VycmVudFN0YXRlIHx8IHt9KS5waGFzZTtcbiAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLmlzUnVubmluZyA9IGlzUnVubmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlciAmJiBsYWJlbHNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYW5zd2VyICYmIGNvdW50ID4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLnNlbGVjdG9yTWF0Y2hlcyA9IHNlbGVjdG9yTWF0Y2hlcztcbiAgICBmdW5jdGlvbiBwb2RTdGF0dXMocG9kKSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5wb2RTdGF0dXMgPSBwb2RTdGF0dXM7XG59KShLdWJlcm5ldGVzQVBJIHx8IChLdWJlcm5ldGVzQVBJID0ge30pKTtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbnZhciBLdWJlcm5ldGVzQVBJO1xuKGZ1bmN0aW9uIChLdWJlcm5ldGVzQVBJKSB7XG4gICAgS3ViZXJuZXRlc0FQSS5fbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoS3ViZXJuZXRlc0FQSS5wbHVnaW5OYW1lLCBbXSk7XG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdEluZm8oYWJvdXRTZXJ2aWNlKSB7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIGFib3V0U2VydmljZS5hZGRQcm9kdWN0SW5mbygnSGF3dGlvIEt1YmVybmV0ZXMgQVBJJywgJ1BBQ0tBR0VfVkVSU0lPTl9QTEFDRUhPTERFUicpO1xuICAgIH1cbiAgICBLdWJlcm5ldGVzQVBJLl9tb2R1bGUucnVuKGFkZFByb2R1Y3RJbmZvKTtcbiAgICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICAgICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgICAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgICAgIHRhc2s6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLks4U19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChLdWJlcm5ldGVzQVBJLm9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEt1YmVybmV0ZXNBUEkuSzhTX1BSRUZJWCwgJy8nKTtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQoS3ViZXJuZXRlc0FQSS5vc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBLdWJlcm5ldGVzQVBJLk9TX1BSRUZJWCwgJy8nKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIGplbmtpbnNoaWZ0IGluIHZhbmlsbGEgazhzLCBsZXQncyBwb2xsIGJ1aWxkIGNvbmZpZ3MgYnkgZGVmYXVsdFxuICAgIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgICAgICBuYW1lOiAnQWRkUG9sbGVkVHlwZXMnLFxuICAgICAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgICAgIHRhc2s6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAoIUt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgICAgICAgICBLdWJlcm5ldGVzQVBJLnBvbGxpbmdPbmx5LnB1c2goS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gRGV0ZWN0IGlmIHdlJ3JlIHJ1bm5pbmcgYWdhaW5zdCBvcGVuc2hpZnQgb3Igbm90XG4gICAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgICAgIG5hbWU6ICdLdWJlcm5ldGVzQVBJUHJvdmlkZXJJbml0JyxcbiAgICAgICAgZGVwZW5kczogWydoYXd0aW8tb2F1dGgnLCAnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICAgICAgdGFzazogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHByb2JlIC9vYXBpL3YxIGFzIGl0J3MgaGFzIGFsbCB0aGUgb3BlbnNoaWZ0IGV4dGVuc2lvbnNcbiAgICAgICAgICAgIHZhciB0ZXN0VVJMID0gbmV3IFVSSShLdWJlcm5ldGVzQVBJLm1hc3RlclVybCkuc2VnbWVudCgnb2FwaS92MScpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGVzdFVSTCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubG9nLmluZm8oXCJCYWNrZW5kIGlzIGFuIG9wZW5zaGlmdCBpbnN0YW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubG9nLmluZm8oXCJFcnJvciBwcm9iaW5nIFwiICsgdGVzdFVSTCArIFwiIGFzc3VtaW5nIGJhY2tlbmQgaXMgbm90IGFuIG9wZW5zaGlmdCBpbnN0YW5jZS4gIEVycm9yIGRldGFpbHM6IHN0YXR1czogXCIsIHRleHRTdGF0dXMsIFwiIGVycm9yVGhyb3duOiBcIiwgZXJyb3JUaHJvd24sIFwiIGpxWEhSIGluc3RhbmNlOiBcIiwganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICAgICAgbmFtZTogJ0ZldGNoQ29uZmlnJyxcbiAgICAgICAgdGFzazogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBLdWJlcm5ldGVzQVBJLmxvZy5kZWJ1ZyhcIkZldGNoZWQgb3BlbnNoaWZ0IGNvbmZpZzogXCIsIHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddKTtcbiAgICAgICAgICAgICAgICBLdWJlcm5ldGVzQVBJLmxvZy5kZWJ1ZyhcIkZldGNoZWQga2V5Y2xvYWsgY29uZmlnOiBcIiwgd2luZG93WydLZXljbG9ha0NvbmZpZyddKTtcbiAgICAgICAgICAgICAgICBPU09BdXRoQ29uZmlnID0gXy5nZXQod2luZG93LCAnT1BFTlNISUZUX0NPTkZJRy5vcGVuc2hpZnQnKTtcbiAgICAgICAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IF8uZ2V0KHdpbmRvdywgJ09QRU5TSElGVF9DT05GSUcuZ29vZ2xlJyk7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB0cnVlKTtcbiAgICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICAgICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICAgICAgZGVwZW5kczogWydGZXRjaENvbmZpZyddLFxuICAgICAgICB0YXNrOiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuICAgICAgICAgICAgdmFyIG1hc3RlciA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xuICAgICAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggKz0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlJ2xsIGp1c3QgZ3JhYiB0aGUgVVJJIGZvciB0aGUgZG9jdW1lbnQgaGVyZSBpbiBjYXNlIHdlIG5lZWQgaXRcbiAgICAgICAgICAgIHZhciBkb2N1bWVudFVSSSA9IG5ldyBVUkkoKS5wYXRoKEhhd3Rpb0NvcmUuZG9jdW1lbnRCYXNlKCkpO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikge1xuICAgICAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcbiAgICAgICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubG9nLmluZm8oXCJtYXN0ZXJfdXJsIHVuc2V0IG9yIHNldCB0byAnLycsIGFzc3VtaW5nIEFQSSBzZXJ2ZXIgaXMgYXQgL1wiKTtcbiAgICAgICAgICAgICAgICBtYXN0ZXIgPSBkb2N1bWVudFVSSS5xdWVyeShcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hc3RlciA9PT0gXCJrOHNcIikge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3JlIHVzaW5nIHRoZSBidWlsdC1pbiBrdWlzcCBwcm94eSB0byBhY2Nlc3MgdGhlIEFQSSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBLdWJlcm5ldGVzQVBJLmxvZy5pbmZvKFwibWFzdGVyX3VybCBzZXQgdG8gJ2s4cycsIGFzc3VtaW5nIHByb3h5IGlzIGJlaW5nIHVzZWRcIik7XG4gICAgICAgICAgICAgICAgbWFzdGVyID0gZG9jdW1lbnRVUkkucXVlcnkoXCJcIikuc2VnbWVudChtYXN0ZXIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLmxvZy5pbmZvKFwiVXNpbmcga3ViZXJuZXRlcyBBUEkgVVJMOiBcIiwgbWFzdGVyKTtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShLdWJlcm5ldGVzQVBJLnBsdWdpbk5hbWUpO1xufSkoS3ViZXJuZXRlc0FQSSB8fCAoS3ViZXJuZXRlc0FQSSA9IHt9KSk7XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cbnZhciBLdWJlcm5ldGVzQVBJO1xuKGZ1bmN0aW9uIChLdWJlcm5ldGVzQVBJKSB7XG4gICAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG4gICAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgICAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFsbG93IGNsaWVudHMgdG8gYWRkIG90aGVyIHR5cGVzIHRvIGZvcmNlIHBvbGxpbmcgdW5kZXIgd2hhdGV2ZXIgY2lyY3Vtc3RhbmNlc1xuICAgIEt1YmVybmV0ZXNBUEkucG9sbGluZ09ubHkgPSBbS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcbiAgICAvKipcbiAgICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAgICoqL1xuICAgIHZhciBPYmplY3RMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBPYmplY3RMaXN0KF9raW5kLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9raW5kID0gX2tpbmQ7XG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCA9IF8uZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9lZS5lbWl0KEt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSwgX3RoaXMuX29iamVjdHMpO1xuICAgICAgICAgICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLl9lZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RzID0gW107XG4gICAgICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICAgICAgICAgIHRoaXMuX2VlID0gc21va2VzaWduYWxzLmNvbnZlcnQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2cuZW5hYmxlZEZvcihMb2dnZXIuREVCVUcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWUub24oS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQURERUQsIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKFwiYWRkZWRcIiwgX3RoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWUub24oS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuTU9ESUZJRUQsIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKFwibW9kaWZpZWRcIiwgX3RoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWUub24oS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCwgZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2cuZGVidWcoXCJkZWxldGVkXCIsIF90aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2VlLm9uKEt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSwgZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKF90aGlzLmtpbmQsIFwiY2hhbmdlZDpcIiwgb2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWUub24oS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuSU5JVCwgZnVuY3Rpb24gKG9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKF90aGlzLmtpbmQsIFwiaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9lZS5vbihLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlksIGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0TGlzdC5wcm90b3R5cGUsIFwia2luZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3RMaXN0LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lZS5lbWl0KEt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3RMaXN0LnByb3RvdHlwZSwgXCJpbml0aWFsaXplZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdExpc3QucHJvdG90eXBlLCBcImV2ZW50c1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdExpc3QucHJvdG90eXBlLCBcIm9iamVjdHNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob2Jqcykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2JqZWN0cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChvYmpzLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2JqLmtpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5raW5kID0gS3ViZXJuZXRlc0FQSS50b0tpbmROYW1lKF90aGlzLmtpbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3RMaXN0LnByb3RvdHlwZS5oYXNOYW1lZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF8uc29tZSh0aGlzLl9vYmplY3RzLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEt1YmVybmV0ZXNBUEkuZ2V0TmFtZShvYmopID09PSBLdWJlcm5ldGVzQVBJLmdldE5hbWUoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0TGlzdC5wcm90b3R5cGUuZ2V0TmFtZWRJdGVtID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLmdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBmaWx0ZXIgb3V0IG9iamVjdHMgZnJvbSBvdGhlciBuYW1lc3BhY2VzIHRoYXQgY291bGQgYmUgcmV0dXJuZWRcbiAgICAgICAgT2JqZWN0TGlzdC5wcm90b3R5cGUuYmVsb25ncyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSAmJiBLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZShvYmplY3QpICE9PSB0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3RMaXN0LnByb3RvdHlwZS5hZGRlZCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmtpbmQgPSBLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUodGhpcy5raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNvbWUodGhpcy5fb2JqZWN0cywgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLmVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZWQob2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMuX2VlLmVtaXQoS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBPYmplY3RMaXN0LnByb3RvdHlwZS5tb2RpZmllZCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvYmplY3Qua2luZCkge1xuICAgICAgICAgICAgICAgIG9iamVjdC5raW5kID0gS3ViZXJuZXRlc0FQSS50b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV8uc29tZSh0aGlzLl9vYmplY3RzLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEt1YmVybmV0ZXNBUEkuZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKEt1YmVybmV0ZXNBUEkuZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZWUuZW1pdChLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE9iamVjdExpc3QucHJvdG90eXBlLmRlbGV0ZWQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRlbGV0ZWQgPSBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEt1YmVybmV0ZXNBUEkuZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lZS5lbWl0KEt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIHJldHVybiBPYmplY3RMaXN0O1xuICAgIH0oKSk7XG4gICAgO1xuICAgIGZ1bmN0aW9uIGNvbXBhcmUob2xkLCBfbmV3KSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICAgICAgICBhZGRlZDogW10sXG4gICAgICAgICAgICBtb2RpZmllZDogW10sXG4gICAgICAgICAgICBkZWxldGVkOiBbXVxuICAgICAgICB9O1xuICAgICAgICBfLmZvckVhY2goX25ldywgZnVuY3Rpb24gKG5ld09iaikge1xuICAgICAgICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIGZ1bmN0aW9uIChvKSB7IHJldHVybiBLdWJlcm5ldGVzQVBJLmVxdWFscyhvLCBuZXdPYmopOyB9KTtcbiAgICAgICAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyLmFkZGVkLnB1c2gobmV3T2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICAgICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfLmZvckVhY2gob2xkLCBmdW5jdGlvbiAob2xkT2JqKSB7XG4gICAgICAgICAgICB2YXIgbmV3T2JqID0gXy5maW5kKF9uZXcsIGZ1bmN0aW9uIChvKSB7IHJldHVybiBLdWJlcm5ldGVzQVBJLmVxdWFscyhvLCBvbGRPYmopOyB9KTtcbiAgICAgICAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG4gICAgLypcbiAgICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAgICovXG4gICAgdmFyIE9iamVjdFBvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gT2JqZWN0UG9sbGVyKHJlc3RVUkwsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdFVSTCA9IHJlc3RVUkw7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gW107XG4gICAgICAgICAgICB0aGlzLmxvZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSA1MDAwO1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMubG9nID0gbG9nO1xuICAgICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gdGhpcy5oYW5kbGVyLmxpc3Qub2JqZWN0cztcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3RQb2xsZXIucHJvdG90eXBlLCBcImNvbm5lY3RlZFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0UG9sbGVyLnByb3RvdHlwZS5kb0dldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhfdGhpcy5oYW5kbGVyLmtpbmQsIFwiZmV0Y2hlZCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gKGRhdGEgJiYgZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW107XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKF90aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICBfLmZvckluKHJlc3VsdCwgZnVuY3Rpb24gKGl0ZW1zLCBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfLmNsb25lKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZXIubGlzdC5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoX3RoaXMuaGFuZGxlci5raW5kLCBcInBvbGxpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHQsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBLdWJlcm5ldGVzQVBJLmdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2cuaW5mbyhfdGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBGYWlsZWQgdG8gcG9sbCBvYmplY3RzLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZy5kZWJ1ZyhfdGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBPdXQgb2YgcmV0cmllcywgc3RvcHBpbmcgcG9sbGluZywgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaGFuZGxlci5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmV0cmllcyA9IF90aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKF90aGlzLmhhbmRsZXIua2luZCwgXCItIEVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgX3RoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBfdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBPYmplY3RQb2xsZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE9iamVjdFBvbGxlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGlzY29ubmVjdGluZ1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBjYW5jZWxsaW5nIHBvbGxpbmdcIik7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIE9iamVjdFBvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGVzdHJveWVkXCIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0UG9sbGVyO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICAgKi9cbiAgICB2YXIgV1NIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBXU0hhbmRsZXIoX3NlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGYgPSBfc2VsZjtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2VsZiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMubG9nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTG9nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KCdLdWJlcm5ldGVzQVBJLldTSGFuZGxlcicpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTG9nID0gTG9nZ2VyLmdldCgnS3ViZXJuZXRlc0FQSS5XU0hhbmRlci5tZXNzYWdlcycpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXU0hhbmRsZXIucHJvdG90eXBlLCBcImxpc3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3QgfHwgeyBvYmplY3RzOiBbXSB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKF9saXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXU0hhbmRsZXIucHJvdG90eXBlLCBcImNvbGxlY3Rpb25cIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdTSGFuZGxlci5wcm90b3R5cGUsIFwiZXJyb3JcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGYub3B0aW9ucy5lcnJvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV1NIYW5kbGVyLnByb3RvdHlwZSwgXCJraW5kXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxmLmtpbmQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgV1NIYW5kbGVyLnByb3RvdHlwZS5zZXRIYW5kbGVycyA9IGZ1bmN0aW9uIChzZWxmLCB3cykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIF8uZm9ySW4oc2VsZiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zdGFydHNXaXRoKGtleSwgJ29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dCA9IGtleS5yZXBsYWNlKCdvbicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJBZGRpbmcgZXZlbnQgaGFuZGxlciBmb3IgJ1wiICsgZXZ0ICsgXCInIHVzaW5nICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubWVzc2FnZUxvZy5kZWJ1ZyhcInJlY2VpdmVkIHdlYnNvY2tldCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIFdTSGFuZGxlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIV8uaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBXU0hhbmRsZXIucHJvdG90eXBlLnNob3VsZENsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQgJiYgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gZGVzdHJveWVkIGJ1dCBzdGlsbCByZWNlaXZpbmcgbWVzc2FnZXMsIGNsb3Npbmcgd2Vic29ja2V0LCBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ2xvc2luZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFdTSGFuZGxlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlNob3VsZCBiZSBjbG9zZWQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgIHZhciBldmVudFR5cGUgPSBkYXRhLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RbZXZlbnRUeXBlXShkYXRhLm9iamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgV1NIYW5kbGVyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVjZWl2ZWQgb3BlbiBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgV1NIYW5kbGVyLnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZWNlaXZlZCBjbG9zZSBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGRlc3Ryb3llZCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXRyaWVzID0gX3RoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCBfdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCBfdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdzID0gX3RoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChfdGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBXU0hhbmRsZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIHJlY2VpdmVkIGFuIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV1NIYW5kbGVyLnByb3RvdHlwZSwgXCJjb25uZWN0ZWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgO1xuICAgICAgICBXU0hhbmRsZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc29tZShLdWJlcm5ldGVzQVBJLnBvbGxpbmdPbmx5LCBmdW5jdGlvbiAoa2luZCkgeyByZXR1cm4ga2luZCA9PT0gX3RoaXMuc2VsZi5raW5kOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3NVUkwgPSBfdGhpcy5zZWxmLndzVVJMO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGluZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCBfdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQod3NVUkwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldEhhbmRsZXJzKF90aGlzLCBfdGhpcy5zb2NrZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJObyB3c1VSTCBmb3Iga2luZDogXCIgKyBfdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgodGhpcy5zZWxmLnJlc3RVUkwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9saXN0Lm9iamVjdHMgPSBkYXRhLml0ZW1zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0LCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gS3ViZXJuZXRlc0FQSS5nZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgX3RoaXMuc2VsZi5raW5kLCBcIiwgdXNlciBpcyBub3QgYXV0aG9yaXplZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xpc3Qub2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCBfdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBXU0hhbmRsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3NlIGNhbGxlZCBvbiB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3lpbmcgcG9sbGVyIGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFdTSGFuZGxlcjtcbiAgICB9KCkpO1xuICAgIC8qXG4gICAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICAgKi9cbiAgICB2YXIgQ29sbGVjdGlvbkltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5fa2luZCA9IF9vcHRpb25zLmtpbmQ7XG4gICAgICAgICAgICB0aGlzLl9hcGlWZXJzaW9uID0gX29wdGlvbnMuYXBpVmVyc2lvbjtcbiAgICAgICAgICAgIHRoaXMuX25hbWVzcGFjZSA9IF9vcHRpb25zLm5hbWVzcGFjZSB8fCBudWxsO1xuICAgICAgICAgICAgdmFyIHByZWYgPSB0aGlzLmdldFByZWZpeCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChfb3B0aW9ucy5raW5kLCBfb3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG5ldyBjb2xsZWN0aW9uIGZvclwiLCB0aGlzLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMubmFtZXNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xsZWN0aW9uSW1wbC5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLCBcIl9yZXN0VXJsXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FQSS5tYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLCBcIl93c1VybFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS3ViZXJuZXRlc0FQSS53c1VybChhbnN3ZXIpLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBUEkubWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBDb3JlLndpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiAmJiB1cmwuaW5kZXhPZihcIjovL1wiKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lICs9IFwiOlwiICsgcG9ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKGhvc3RuYW1lLCBLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS3ViZXJuZXRlc0FQSS53c1VybCh1cmwpLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS5nZXRLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZSwgXCJ3c1VSTFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuX3dzVXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLCBcInJlc3RVUkxcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLCBcIm5hbWVzcGFjZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZSwgXCJraW5kXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZSwgXCJjb25uZWN0ZWRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMuY29ubmVjdGVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIDtcbiAgICAgICAgQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgICAgICAgICAqL1xuICAgICAgICB9O1xuICAgICAgICBDb2xsZWN0aW9uSW1wbC5wcm90b3R5cGUuYWRkTGFiZWxGaWx0ZXIgPSBmdW5jdGlvbiAoY2IsIGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IEt1YmVybmV0ZXNBUEkuZmlsdGVyQnlMYWJlbChkYXRhLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoY2IsIGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5JTklULCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoX3RoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIDtcbiAgICAgICAgQ29sbGVjdGlvbkltcGwucHJvdG90eXBlLmdldFByZWZpeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcmVmID0gS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FwaVZlcnNpb24gJiYgXy5zdGFydHNXaXRoKHRoaXMuX2FwaVZlcnNpb24sICdleHRlbnNpb25zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQVBJLks4U19FWFRfUFJFRklYLCB0aGlzLl9hcGlWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByZWY7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS5yZXN0VXJsRm9yID0gZnVuY3Rpb24gKGl0ZW0sIHVzZU5hbWUpIHtcbiAgICAgICAgICAgIGlmICh1c2VOYW1lID09PSB2b2lkIDApIHsgdXNlTmFtZSA9IHRydWU7IH1cbiAgICAgICAgICAgIHZhciBuYW1lID0gS3ViZXJuZXRlc0FQSS5nZXROYW1lKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXRzIHRydXN0IHRoZSB1cmwgdG8gYmUgY29ycmVjdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKEt1YmVybmV0ZXNBUEkubmFtZXNwYWNlZChLdWJlcm5ldGVzQVBJLnRvQ29sbGVjdGlvbk5hbWUoaXRlbS5raW5kKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IEt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlKGl0ZW0pIHx8IHRoaXMuX25hbWVzcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBraW5kID0gdGhpcy5fa2luZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFLdWJlcm5ldGVzQVBJLmlzT3BlblNoaWZ0ICYmIChraW5kID09PSBcImJ1aWxkY29uZmlnc1wiIHx8IGtpbmQgPT09IFwiQnVpbGRDb25maWdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IFVybEhlbHBlcnMuam9pbihcIi9hcGkvdjEvcHJveHkvbmFtZXNwYWNlc1wiLCBuYW1lc3BhY2UsIFwiL3NlcnZpY2VzL2plbmtpbnNoaWZ0OjgwL1wiLCBwcmVmaXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiVXNpbmcgYnVpbGRjb25maWdzIFVSTCBvdmVycmlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FQSS5tYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwga2luZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZU5hbWUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnRpbnVhbGx5IGdldCB1cGRhdGVzXG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIChjYiwgbGFiZWxTZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKF90aGlzLmtpbmQsIFwicGFzc2luZyBleGlzdGluZyBvYmplY3RzOlwiLCBfdGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBjYihfdGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiYWRkaW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKEt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoX3RoaXMua2luZCwgXCJnb3QgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjYjtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBDb2xsZWN0aW9uSW1wbC5wcm90b3R5cGUudW53YXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJyZW1vdmluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICAgIH07XG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoaXRlbSwgY2IsIGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JqZWN0XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgICAgICAgICB2YXIgcmVzb3VyY2VWZXJzaW9uID0gaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0TmFtZWRJdGVtKEt1YmVybmV0ZXNBUEkuZ2V0TmFtZShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlVmVyc2lvbiA9IGN1cnJlbnQubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEN1c3RvbSBjaGVja3MgZm9yIHNwZWNpZmljIGNhc2VzXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2tpbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc3BlYy5jbHVzdGVySVAgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5zcGVjLmNsdXN0ZXJJUDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHQsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IEt1YmVybmV0ZXNBUEkuZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIENvbGxlY3Rpb25JbXBsLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoaXRlbSwgY2IsIGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dCwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gS3ViZXJuZXRlc0FQSS5nZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gQ29sbGVjdGlvbkltcGw7XG4gICAgfSgpKTtcbiAgICBLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsID0gQ29sbGVjdGlvbkltcGw7XG4gICAgO1xuICAgIC8qXG4gICAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICAgKi9cbiAgICB2YXIgQ2xpZW50SW5zdGFuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENsaWVudEluc3RhbmNlKF9jb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENsaWVudEluc3RhbmNlLnByb3RvdHlwZSwgXCJyZWZDb3VudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgQ2xpZW50SW5zdGFuY2UucHJvdG90eXBlLmFkZFJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIENsaWVudEluc3RhbmNlLnByb3RvdHlwZS5yZW1vdmVSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICAgICAgfTtcbiAgICAgICAgO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2xpZW50SW5zdGFuY2UucHJvdG90eXBlLCBcImNvbGxlY3Rpb25cIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgO1xuICAgICAgICBDbGllbnRJbnN0YW5jZS5wcm90b3R5cGUuZGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgICAgICB9O1xuICAgICAgICA7XG4gICAgICAgIENsaWVudEluc3RhbmNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIENsaWVudEluc3RhbmNlO1xuICAgIH0oKSk7XG4gICAgO1xuICAgIC8qXG4gICAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgICAqL1xuICAgIHZhciBLOFNDbGllbnRGYWN0b3J5SW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gSzhTQ2xpZW50RmFjdG9yeUltcGwoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50cyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnlJbXBsLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICB2YXIga2luZCA9IG9wdGlvbnM7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAga2luZCA9IG9wdGlvbnMua2luZDtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoX29wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGllbnRzW2tleV0gPSBjbGllbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBLOFNDbGllbnRGYWN0b3J5SW1wbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmZvckVhY2goaGFuZGxlcywgZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIGNsaWVudC51bndhdGNoKGhhbmRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBjbGllbnQuZ2V0S2V5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xpZW50c1trZXldKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYy5kaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEs4U0NsaWVudEZhY3RvcnlJbXBsO1xuICAgIH0oKSk7XG4gICAgS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5ID0gbmV3IEs4U0NsaWVudEZhY3RvcnlJbXBsKCk7XG4gICAgS3ViZXJuZXRlc0FQSS5fbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3Rvcnk7XG4gICAgfSk7XG4gICAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICAgIHZhciBOT19PQkpFQ1QgPSBcIk5vIG9iamVjdCBpbiBzdXBwbGllZCBvcHRpb25zXCI7XG4gICAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcbiAgICAvKlxuICAgICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgICAqL1xuICAgIC8qXG4gICAgICogR2V0IGEgY29sbGVjdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldChvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbGllbnQgPSBLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGNsaWVudC5nZXQoc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5nZXQgPSBnZXQ7XG4gICAgZnVuY3Rpb24gaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbnN3ZXIgPSB7fTtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICAgICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICAgICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgS3ViZXJuZXRlc0FQSS5nZXROYW1lKG9iamVjdCkpO1xuICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGFkZFJlc3VsdChLdWJlcm5ldGVzQVBJLmZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgYWRkUmVzdWx0KEt1YmVybmV0ZXNBUEkuZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAgICAgLy8gbGV0J3MgdHJ5IGFuZCBzdXBwb3J0IGFsc28ganVzdCBzdXBwbHlpbmcgazhzIG9iamVjdHMgZGlyZWN0bHlcbiAgICAgICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgS3ViZXJuZXRlc0FQSS5nZXRLaW5kKG9wdGlvbnMpID09PSBLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUoS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmtpbmQgPSBLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUoS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgICAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmtpbmQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9iamVjdC5raW5kID0gS3ViZXJuZXRlc0FQSS50b0tpbmROYW1lKG9wdGlvbnMua2luZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSBLdWJlcm5ldGVzQVBJLnRvS2luZE5hbWUoS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICAgICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIGZ1bmN0aW9uIChvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZGVsKHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IEt1YmVybmV0ZXNBUEkudG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgICAgIG9wdGlvbnMubmFtZXNwYWNlID0gS3ViZXJuZXRlc0FQSS5uYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgICAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgS3ViZXJuZXRlc0FQSS5nZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICAgICAgdmFyIGNsaWVudCA9IEt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5kZWwgPSBkZWw7XG4gICAgLypcbiAgICAgKiBBZGQvcmVwbGFjZSBhbiBvYmplY3QsIG9yIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHV0KG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIC8vIHN1cHBvcnQgcHV0dGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgICAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gS3ViZXJuZXRlc0FQSS50b0tpbmROYW1lKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCBmdW5jdGlvbiAob2JqZWN0LCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHB1dCh7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCBLdWJlcm5ldGVzQVBJLnRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgICAgICBvcHRpb25zLm5hbWVzcGFjZSA9IEt1YmVybmV0ZXNBUEkubmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgS3ViZXJuZXRlc0FQSS5nZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICAgICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IEt1YmVybmV0ZXNBUEkuZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgICAgIHZhciBjbGllbnQgPSBLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgICBjbGllbnQuZ2V0KGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xpZW50LnB1dChvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS5wdXQgPSBwdXQ7XG4gICAgZnVuY3Rpb24gd2F0Y2gob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50ID0gS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIGhhbmRsZSA9IGNsaWVudC53YXRjaChvcHRpb25zLnN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgICAgIHZhciBzZWxmID0ge1xuICAgICAgICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gICAgS3ViZXJuZXRlc0FQSS53YXRjaCA9IHdhdGNoO1xufSkoS3ViZXJuZXRlc0FQSSB8fCAoS3ViZXJuZXRlc0FQSSA9IHt9KSk7XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuICBleHBvcnQgdmFyIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuICBleHBvcnQgdmFyIEs4U19FWFRfUFJFRklYID0gJ2FwaXMnO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVF9WRVJTSU9OID0gJ3YxYmV0YTEnO1xuICBleHBvcnQgdmFyIEs4U19FWFRFTlNJT05TID0gJ2V4dGVuc2lvbnMnO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEFwaVZlcnNpb24gPSBLOFNfQVBJX1ZFUlNJT047XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE9TQXBpVmVyc2lvbiA9IE9TX0FQSV9WRVJTSU9OO1xuXG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE5hbWVzcGFjZSA9IFwiZGVmYXVsdFwiO1xuICBleHBvcnQgdmFyIGFwcFN1ZmZpeCA9IFwiLmFwcFwiO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZGVjbGFyZSB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBleHRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlZChraW5kOnN0cmluZykge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5PREVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFM6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oSzhTX0VYVF9QUkVGSVgsIEs4U19FWFRFTlNJT05TLCBLOFNfRVhUX1ZFUlNJT04pOyBcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvc0FwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5zb21lKEV4dGVuc2lvblR5cGVzLmV4dGVuc2lvbnMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5zb21lKE5hbWVzcGFjZWRUeXBlcy5rOHNUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uc29tZShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5JTUFHRVMpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfRVhUX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19FWFRfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpO1xuICAgICAgY2FzZSBLOFNfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19QUkVGSVg6XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3RzIHRoZSBrOHMvb3BlbnNoaWZ0IGVycm9yIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck9iamVjdChqcVhIUikge1xuICAgIHZhciBhbnN3ZXI6YW55ID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgIHRyeSB7XG4gICAgICBhbnN3ZXIgPSBhbmd1bGFyLmZyb21Kc29uKGFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBub3RoaW5nIHRvIGRvLi4uXG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIGVpdGhlciBzZWN1cmUvaW5zZWN1cmUgd2Vic29ja2V0IHByb3RvY29sIGJhc2VkIG9uIHRoZSBtYXN0ZXIgVVJJIHByb3RvY29sXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NTY2hlbWUodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICBpZiAoXy5zdGFydHNXaXRoKHByb3RvY29sLCAnaHR0cHMnKSkge1xuICAgICAgcmV0dXJuICd3c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3dzJztcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBzaW5nbGUgJ2tpbmQnIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBjb2xsZWN0aW9uIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0tpbmROYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIHJldHVybiBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5MSVNUOiByZXR1cm4gS2luZFR5cGVzLkxJU1Q7XG4gICAgICBjYXNlIFdhdGNoVHlwZXMuRU5EUE9JTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5FTkRQT0lOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkVWRU5UUzogIHJldHVybiBLaW5kVHlwZXMuRVZFTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5OQU1FU1BBQ0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5OT0RFUzogIHJldHVybiBLaW5kVHlwZXMuTk9ERVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogIHJldHVybiBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6ICByZXR1cm4gS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9EUzogIHJldHVybiBLaW5kVHlwZXMuUE9EUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6ICByZXR1cm4gS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFM6ICByZXR1cm4gS2luZFR5cGVzLlJFUExJQ0FfU0VUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVNPVVJDRV9RVU9UQVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6ICByZXR1cm4gS2luZFR5cGVzLk9BVVRIX0NMSUVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFQ1JFVFM6ICByZXR1cm4gS2luZFR5cGVzLlNFQ1JFVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRVJWSUNFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogIHJldHVybiBLaW5kVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQ09ORklHX01BUFM6ICByZXR1cm4gS2luZFR5cGVzLkNPTkZJR19NQVBTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTkdSRVNTRVM6ICByZXR1cm4gS2luZFR5cGVzLklOR1JFU1NFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuVEVNUExBVEVTOiAgcmV0dXJuIEtpbmRUeXBlcy5URU1QTEFURVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJPVVRFUzogIHJldHVybiBLaW5kVHlwZXMuUk9VVEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5CVUlMRF9DT05GSUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5CVUlMRFM6ICByZXR1cm4gS2luZFR5cGVzLkJVSUxEUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRFUExPWU1FTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5ERVBMT1lNRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU1BR0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVM6ICByZXR1cm4gS2luZFR5cGVzLklNQUdFX1NUUkVBTVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9MSUNJRVM6ICByZXR1cm4gS2luZFR5cGVzLlBPTElDSUVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1M6ICByZXR1cm4gS2luZFR5cGVzLlBPTElDWV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUFJPSkVDVFM6ICByZXR1cm4gS2luZFR5cGVzLlBST0pFQ1RTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTOiAgcmV0dXJuIEtpbmRUeXBlcy5ST0xFX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST0xFUzogIHJldHVybiBLaW5kVHlwZXMuUk9MRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRBRU1PTlNFVFM6ICByZXR1cm4gS2luZFR5cGVzLkRBRU1PTlNFVFM7IFxuICAgICAgZGVmYXVsdDogcmV0dXJuIGtpbmQ7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgY29sbGVjdGlvbiBraW5kIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBzaW5ndWxhciBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9Db2xsZWN0aW9uTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICBraW5kID0gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtpbmRUeXBlcy5MSVNUOiByZXR1cm4gV2F0Y2hUeXBlcy5MSVNUO1xuICAgICAgY2FzZSBLaW5kVHlwZXMuRU5EUE9JTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuRU5EUE9JTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkVWRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkVWRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5OQU1FU1BBQ0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuTkFNRVNQQUNFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5OT0RFUzogIHJldHVybiBXYXRjaFR5cGVzLk5PREVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogIHJldHVybiBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9EUzogIHJldHVybiBXYXRjaFR5cGVzLlBPRFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6ICByZXR1cm4gV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5SRVBMSUNBX1NFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLk9BVVRIX0NMSUVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFQ1JFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRUNSRVRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFUlZJQ0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VSVklDRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogIHJldHVybiBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQ09ORklHX01BUFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5DT05GSUdfTUFQUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTkdSRVNTRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTkdSRVNTRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuVEVNUExBVEVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuVEVNUExBVEVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJPVVRFUzogIHJldHVybiBXYXRjaFR5cGVzLlJPVVRFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5CVUlMRF9DT05GSUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5CVUlMRFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5CVUlMRFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRFUExPWU1FTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU1BR0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFX1NUUkVBTVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9MSUNJRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0xJQ0lFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QT0xJQ1lfQklORElOR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUFJPSkVDVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QUk9KRUNUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST0xFX0JJTkRJTkdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST0xFUzogIHJldHVybiBXYXRjaFR5cGVzLlJPTEVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRBRU1PTlNFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5EQUVNT05TRVRTOyBcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHdlYnNvY2tldCBVUkwgZm9yIHRoZSBzdXBwbGllZCBVUkxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1VybCh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gd3NTY2hlbWUodXJsKTtcbiAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gIH1cblxuICAvKlxuICAgKiBDb21wYXJlIHR3byBrOHMgb2JqZWN0cyBiYXNlZCBvbiB0aGVpciBVSURcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpOmJvb2xlYW4ge1xuICAgIHZhciBsZWZ0VUlEID0gZ2V0VUlEKGxlZnQpO1xuICAgIHZhciByaWdodFVJRCA9IGdldFVJRChyaWdodCk7XG4gICAgaWYgKCFsZWZ0VUlEICYmICFyaWdodFVJRCkge1xuICAgICAgcmV0dXJuIGFuZ3VsYXIudG9Kc29uKGxlZnQpID09PSBhbmd1bGFyLnRvSnNvbihyaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0VUlEID09PSByaWdodFVJRDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBLdWJlcm5ldGVzIG9iamVjdCBoZWxwZXJzXG4gICAqXG4gICAqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGlzdCBvZiBrdWJlcm5ldGVzIG9iamVjdHMgc3VpdGFibGUgZm9yIHBvc3RpbmcgYSBidW5jaCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCguLi5vYmplY3RzOmFueVtdKSB7XG4gICAgdmFyIGFuc3dlciA9IHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSxcbiAgICAgIG9iamVjdHM6IFtdXG4gICAgfVxuICAgIF8uZm9yRWFjaChvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgXy5mb3JFYWNoKG9iamVjdCwgKG8pID0+IHtcbiAgICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG8pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvYmplY3Qgc3VpdGFibGUgZm9yIGRlbGV0ZS9kZWxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFsbG93T2JqZWN0KG5hbWU6c3RyaW5nLCBraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShraW5kKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYSBjb2xsZWN0aW9uIGJ5IGxhYmVsXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5TGFiZWwob2JqZWN0czpBcnJheTxhbnk+LCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoPGFueT5fKS5tYXRjaGVzKGxhYmVsU2VsZWN0b3IpO1xuICAgIHJldHVybiBfLmZpbHRlcihvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhnZXRMYWJlbHMob2JqZWN0KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGdpdmVuIG5hbWVzcGFjZSB0byBhbiBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeSBzZXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBhcHBseU5hbWVzcGFjZShvYmo6YW55LCBuYW1lc3BhY2U6IHN0cmluZykge1xuICAgIGlmICghb2JqLmtpbmQgfHwgIW5hbWVzcGFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKG9iai5raW5kKSkgJiYgIW9iai5tZXRhZGF0YS5uYW1lc3BhY2UpIHtcbiAgICAgIG9iai5tZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBzY29wZWQgbmFtZSB3aXRoIHRoZSBuYW1lc3BhY2Uva2luZCwgc3VpdGFibGUgdG8gdXNlIGFzIGEga2V5IGluIG1hcHNcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZnVsbE5hbWUoZW50aXR5KSB7XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShlbnRpdHkpO1xuICAgIHZhciBraW5kID0gZ2V0S2luZChlbnRpdHkpO1xuICAgIHZhciBuYW1lID0gZ2V0TmFtZShlbnRpdHkpO1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oKG5hbWVzcGFjZSA/IG5hbWVzcGFjZSA6IFwiXCIpLCBraW5kLCBuYW1lKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRVSUQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnbWV0YWRhdGEnLCAndWlkJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVzcGFjZShlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lc3BhY2VcIl0pO1xuICAgIC8vIHNvbWUgb2JqZWN0cyBhcmVuJ3QgbmFtZXNwYWNlZCwgc28gdGhpcyBjYW4gcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBcGlWZXJzaW9uKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ2FwaVZlcnNpb24nXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgZnVuY3Rpb24gYWRkUHJvZHVjdEluZm8oYWJvdXRTZXJ2aWNlOiBBYm91dC5BYm91dFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIGFib3V0U2VydmljZS5hZGRQcm9kdWN0SW5mbygnSGF3dGlvIEt1YmVybmV0ZXMgQVBJJywgJ1BBQ0tBR0VfVkVSU0lPTl9QTEFDRUhPTERFUicpO1xuICB9XG5cbiAgX21vZHVsZS5ydW4oYWRkUHJvZHVjdEluZm8pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIEs4U19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKSB8fCBLOFNfUFJFRklYLCAnLycpO1xuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2luY2Ugd2UncmUgdXNpbmcgamVua2luc2hpZnQgaW4gdmFuaWxsYSBrOHMsIGxldCdzIHBvbGwgYnVpbGQgY29uZmlncyBieSBkZWZhdWx0XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdBZGRQb2xsZWRUeXBlcycsXG4gICAgZGVwZW5kczogWydLdWJlcm5ldGVzQXBpSW5pdCddLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICAgIEt1YmVybmV0ZXNBUEkucG9sbGluZ09ubHkucHVzaChLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyk7XG4gICAgICB9XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBEZXRlY3QgaWYgd2UncmUgcnVubmluZyBhZ2FpbnN0IG9wZW5zaGlmdCBvciBub3RcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBUElQcm92aWRlckluaXQnLFxuICAgIGRlcGVuZHM6IFsnaGF3dGlvLW9hdXRoJywgJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG4gICAgICAvLyBwcm9iZSAvb2FwaS92MSBhcyBpdCdzIGhhcyBhbGwgdGhlIG9wZW5zaGlmdCBleHRlbnNpb25zXG4gICAgICB2YXIgdGVzdFVSTCA9IG5ldyBVUkkoS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwpLnNlZ21lbnQoJ29hcGkvdjEnKS50b1N0cmluZygpO1xuICAgICAgJC5hamF4KDxhbnk+e1xuICAgICAgICB1cmw6IHRlc3RVUkwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgbG9nLmluZm8oXCJCYWNrZW5kIGlzIGFuIG9wZW5zaGlmdCBpbnN0YW5jZVwiKTtcbiAgICAgICAgICBpc09wZW5TaGlmdCA9IHRydWU7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9LCBcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICBsb2cuaW5mbyhcIkVycm9yIHByb2JpbmcgXCIgKyB0ZXN0VVJMICsgXCIgYXNzdW1pbmcgYmFja2VuZCBpcyBub3QgYW4gb3BlbnNoaWZ0IGluc3RhbmNlLiAgRXJyb3IgZGV0YWlsczogc3RhdHVzOiBcIiwgdGV4dFN0YXR1cywgXCIgZXJyb3JUaHJvd246IFwiLCBlcnJvclRocm93biwgXCIganFYSFIgaW5zdGFuY2U6IFwiLCBqcVhIUik7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG5cdGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuXHRcdG5hbWU6ICdGZXRjaENvbmZpZycsXG5cdFx0dGFzazogKG5leHQpID0+IHtcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0bG9nLmRlYnVnKFwiRmV0Y2hlZCBvcGVuc2hpZnQgY29uZmlnOiBcIiwgd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ10pO1xuXHRcdFx0XHRcdGxvZy5kZWJ1ZyhcIkZldGNoZWQga2V5Y2xvYWsgY29uZmlnOiBcIiwgd2luZG93WydLZXljbG9ha0NvbmZpZyddKTtcbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gXy5nZXQod2luZG93LCAnT1BFTlNISUZUX0NPTkZJRy5vcGVuc2hpZnQnKTtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IF8uZ2V0KHdpbmRvdywgJ09QRU5TSElGVF9DT05GSUcuZ29vZ2xlJyk7XG5cdFx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0XHR9KVxuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0Jyxcblx0XHRkZXBlbmRzOiBbJ0ZldGNoQ29uZmlnJ10sXG4gICAgdGFzazogKG5leHQpID0+IHtcblx0XHRcdHZhciBjb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcblx0XHRcdGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcblx0XHRcdHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG5cdFx0XHRpZiAoIW1hc3RlciAmJiBjb25maWcuYXBpICYmIGNvbmZpZy5hcGkuazhzKSB7XG5cdFx0XHRcdHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcblx0XHRcdFx0aWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG5cdFx0XHRcdFx0bWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuXHRcdFx0XHRpZiAoIW1hc3Rlcikge1xuXHRcdFx0XHRcdHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xuXHRcdFx0XHRcdGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG5cdFx0XHRcdFx0XHR2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlkeCArPSAzO1xuXHRcdFx0XHRcdFx0XHRcdGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaWR4ID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gV2UnbGwganVzdCBncmFiIHRoZSBVUkkgZm9yIHRoZSBkb2N1bWVudCBoZXJlIGluIGNhc2Ugd2UgbmVlZCBpdFxuXHRcdFx0dmFyIGRvY3VtZW50VVJJID0gbmV3IFVSSSgpLnBhdGgoSGF3dGlvQ29yZS5kb2N1bWVudEJhc2UoKSk7XG5cdFx0XHRpZiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSB7XG5cdFx0XHRcdC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcblx0XHRcdFx0Ly8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG5cdFx0XHRcdC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cdFx0XHRcdGxvZy5pbmZvKFwibWFzdGVyX3VybCB1bnNldCBvciBzZXQgdG8gJy8nLCBhc3N1bWluZyBBUEkgc2VydmVyIGlzIGF0IC9cIik7XG5cdFx0XHRcdG1hc3RlciA9IGRvY3VtZW50VVJJLnF1ZXJ5KFwiXCIpLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWFzdGVyID09PSBcIms4c1wiKSB7XG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIHRoZSBidWlsdC1pbiBrdWlzcCBwcm94eSB0byBhY2Nlc3MgdGhlIEFQSSBzZXJ2ZXJcblx0XHRcdFx0bG9nLmluZm8oXCJtYXN0ZXJfdXJsIHNldCB0byAnazhzJywgYXNzdW1pbmcgcHJveHkgaXMgYmVpbmcgdXNlZFwiKTtcblx0XHRcdFx0bWFzdGVyID0gZG9jdW1lbnRVUkkucXVlcnkoXCJcIikuc2VnbWVudChtYXN0ZXIpLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRsb2cuaW5mbyhcIlVzaW5nIGt1YmVybmV0ZXMgQVBJIFVSTDogXCIsIG1hc3Rlcik7XG5cdFx0XHRLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3Rlcjtcblx0XHRcdG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlU2VuZChyZXF1ZXN0KSB7XG4gICAgdmFyIHRva2VuID0gSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IGNsaWVudHMgdG8gYWRkIG90aGVyIHR5cGVzIHRvIGZvcmNlIHBvbGxpbmcgdW5kZXIgd2hhdGV2ZXIgY2lyY3Vtc3RhbmNlc1xuICBleHBvcnQgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IGxvZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2tpbmQ6c3RyaW5nLCBwcml2YXRlIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiY2hhbmdlZDpcIiwgb2JqZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuSU5JVCwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5JTklULCB0aGlzLl9vYmplY3RzKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb2JqZWN0cyhvYmpzOmFueVtdKSB7XG4gICAgICB0aGlzLl9vYmplY3RzLmxlbmd0aCA9IDA7XG4gICAgICBfLmZvckVhY2gob2JqcywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoIW9iai5raW5kKSB7XG4gICAgICAgICAgb2JqLmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uc29tZSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWVkSXRlbShuYW1lOnN0cmluZykge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIGZyb20gb3RoZXIgbmFtZXNwYWNlcyB0aGF0IGNvdWxkIGJlIHJldHVybmVkXG4gICAgcHJpdmF0ZSBiZWxvbmdzKG9iamVjdCkge1xuICAgICAgaWYgKHRoaXMubmFtZXNwYWNlICYmIGdldE5hbWVzcGFjZShvYmplY3QpICE9PSB0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghb2JqZWN0LmtpbmQpIHtcbiAgICAgICAgb2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5zb21lKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgIG9iamVjdC5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKCFfLnNvbWUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWxldGVkID0gXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuREVMRVRFRCwgZGVsZXRlZFswXSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaW50ZXJmYWNlIENvbXBhcmVSZXN1bHQge1xuICAgIGFkZGVkOkFycmF5PGFueT47XG4gICAgbW9kaWZpZWQ6QXJyYXk8YW55PjtcbiAgICBkZWxldGVkOkFycmF5PGFueT47XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlKG9sZDpBcnJheTxhbnk+LCBfbmV3OkFycmF5PGFueT4pOkNvbXBhcmVSZXN1bHQge1xuICAgIHZhciBhbnN3ZXIgPSA8Q29tcGFyZVJlc3VsdD4ge1xuICAgICAgYWRkZWQ6IFtdLFxuICAgICAgbW9kaWZpZWQ6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9O1xuICAgIF8uZm9yRWFjaChfbmV3LCAobmV3T2JqKSA9PiB7XG4gICAgICB2YXIgb2xkT2JqID0gXy5maW5kKG9sZCwgKG8pID0+IGVxdWFscyhvLCBuZXdPYmopKTtcbiAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgIGFuc3dlci5hZGRlZC5wdXNoKG5ld09iaik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLnRvSnNvbihvbGRPYmopICE9PSBhbmd1bGFyLnRvSnNvbihuZXdPYmopKSB7XG4gICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKG9sZCwgKG9sZE9iaikgPT4ge1xuICAgICAgdmFyIG5ld09iaiA9IF8uZmluZChfbmV3LCAobykgPT4gZXF1YWxzKG8sIG9sZE9iaikpO1xuICAgICAgaWYgKCFuZXdPYmopIHtcbiAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAqL1xuICBjbGFzcyBPYmplY3RQb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBfbGFzdEZldGNoID0gPEFycmF5PGFueT4+IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ludGVydmFsID0gNTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRDYW5jZWw6YW55ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0VVJMOnN0cmluZywgcHJpdmF0ZSBoYW5kbGVyOldTSGFuZGxlcikge1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IFxuICAgICAgdGhpcy5fbGFzdEZldGNoID0gdGhpcy5oYW5kbGVyLmxpc3Qub2JqZWN0cztcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb25uZWN0ZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkb0dldCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gXG4gICAgICAkLmFqYXgodGhpcy5yZXN0VVJMLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiZmV0Y2hlZCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgICB2YXIgaXRlbXMgID0gKGRhdGEgJiYgZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW107XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbXBhcmUodGhpcy5fbGFzdEZldGNoLCBpdGVtcyk7XG4gICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gaXRlbXM7XG4gICAgICAgICAgXy5mb3JJbihyZXN1bHQsIChpdGVtczphbnlbXSwgYWN0aW9uOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgXy5mb3JFYWNoKGl0ZW1zLCAoaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfLmNsb25lKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5vbm1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVyLmxpc3QuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcInBvbGxpbmdcIik7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmluZm8odGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBGYWlsZWQgdG8gcG9sbCBvYmplY3RzLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLmVycm9yKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIEVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRpc2Nvbm5lY3RpbmdcIik7XG4gICAgICBpZiAodGhpcy50Q2FuY2VsKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGNhbmNlbGxpbmcgcG9sbGluZ1wiKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRlc3Ryb3llZFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVyIHtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgcG9sbGVyOk9iamVjdFBvbGxlcjtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbWVzc2FnZUxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ0t1YmVybmV0ZXNBUEkuV1NIYW5kbGVyJyk7IFxuICAgICAgdGhpcy5tZXNzYWdlTG9nID0gTG9nZ2VyLmdldCgnS3ViZXJuZXRlc0FQSS5XU0hhbmRlci5tZXNzYWdlcycpO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5vcHRpb25zLmVycm9yO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgdmFyIGV2dCA9IGtleS5yZXBsYWNlKCdvbicsICcnKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcIkFkZGluZyBldmVudCBoYW5kbGVyIGZvciAnXCIgKyBldnQgKyBcIicgdXNpbmcgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxvZy5kZWJ1ZyhcInJlY2VpdmVkIHdlYnNvY2tldCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCAgJiYgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGRlc3Ryb3llZCBidXQgc3RpbGwgcmVjZWl2aW5nIG1lc3NhZ2VzLCBjbG9zaW5nIHdlYnNvY2tldCwga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlNob3VsZCBiZSBjbG9zZWQhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVjZWl2ZWQgb3BlbiBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlY2VpdmVkIGNsb3NlIGV2ZW50IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGRlc3Ryb3llZCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC53YXNDbGVhbikge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uZXJyb3IoZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIHJlY2VpdmVkIGFuIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fCAodGhpcy5wb2xsZXIgJiYgdGhpcy5wb2xsZXIuY29ubmVjdGVkKTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIGEgY3VzdG9tIFVSTCBpcyBnb2luZyB0byBiZSB1c2VkXG4gICAgICBpZiAodGhpcy5zZWxmLnJlc3RVUkwgPT09ICcnICYmIHRoaXMuc2VsZi53c1VSTCA9PT0gJycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgIGlmIChfLnNvbWUocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciB3c1VSTCA9IHRoaXMuc2VsZi53c1VSTDtcbiAgICAgICAgICAgIGlmICh3c1VSTCkge1xuICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQod3NVUkwpO1xuICAgICAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHRoaXMuc29ja2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiTm8gd3NVUkwgZm9yIGtpbmQ6IFwiICsgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgJC5hamF4KHRoaXMuc2VsZi5yZXN0VVJMLCA8YW55PiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbGlzdC5vYmplY3RzID0gZGF0YS5pdGVtcyB8fCBbXTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH0sIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDbG9zZSBjYWxsZWQgb24gd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvLCBhc3N1bWUgaXQncyBhbHJlYWR5IGNsb3NlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95aW5nIHBvbGxlciBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEltcGxlbWVudHMgdGhlIGV4dGVybmFsIEFQSSBmb3Igd29ya2luZyB3aXRoIGs4cyBjb2xsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkltcGwgaW1wbGVtZW50cyBDb2xsZWN0aW9uIHtcblxuICAgIHByaXZhdGUgX2tpbmQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWVzcGFjZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXBpVmVyc2lvbjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBoYW5kbGVyczpXU0hhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBsaXN0Ok9iamVjdExpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2tpbmQgPSBfb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IF9vcHRpb25zLmFwaVZlcnNpb247XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBfb3B0aW9ucy5uYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSB0aGlzLmdldFByZWZpeCgpO1xuXG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChfb3B0aW9ucy5raW5kLCBfb3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICAgIGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG5ldyBjb2xsZWN0aW9uIGZvclwiLCB0aGlzLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMubmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6SzhTT3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfcmVzdFVybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVSSShhbnN3ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dzVXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybChhbnN3ZXIpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBDb3JlLndpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIGlmIChsb2NhdGlvbiAmJiB1cmwuaW5kZXhPZihcIjovL1wiKSA8IDApIHtcbiAgICAgICAgICB2YXIgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgICBpZiAoaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcbiAgICAgICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICAgIGhvc3RuYW1lICs9IFwiOlwiICsgcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihob3N0bmFtZSwgbWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwodXJsKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fd3NVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIC8qXG4gICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgICAqL1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0UHJlZml4KCkge1xuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcGlWZXJzaW9uICYmIF8uc3RhcnRzV2l0aCh0aGlzLl9hcGlWZXJzaW9uLCAnZXh0ZW5zaW9ucycpKSB7XG4gICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgdGhpcy5fYXBpVmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIC8vIGxldHMgdHJ1c3QgdGhlIHVybCB0byBiZSBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKGl0ZW0ua2luZCkpKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKSB8fCB0aGlzLl9uYW1lc3BhY2U7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLl9raW5kO1xuICAgICAgICAgIGlmICghS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCAmJiAoa2luZCA9PT0gXCJidWlsZGNvbmZpZ3NcIiB8fCBraW5kID09PSBcIkJ1aWxkQ29uZmlnXCIpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBVcmxIZWxwZXJzLmpvaW4oXCIvYXBpL3YxL3Byb3h5L25hbWVzcGFjZXNcIiwgbmFtZXNwYWNlLCBcIi9zZXJ2aWNlcy9qZW5raW5zaGlmdDo4MC9cIiwgcHJlZml4KTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlVzaW5nIGJ1aWxkY29uZmlncyBVUkwgb3ZlcnJpZGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwga2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicGFzc2luZyBleGlzdGluZyBvYmplY3RzOlwiLCB0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImFkZGluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImdvdCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgY2IoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicmVtb3Zpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXBkYXRpbmcgYW4gZXhpc3Rpbmcgb2JqZWN0XG4gICAgICAgIHZhciByZXNvdXJjZVZlcnNpb24gPSBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgaWYgKCFyZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMubGlzdC5nZXROYW1lZEl0ZW0oZ2V0TmFtZShpdGVtKSk7XG4gICAgICAgICAgcmVzb3VyY2VWZXJzaW9uID0gY3VycmVudC5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgICAgaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb24gPSByZXNvdXJjZVZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEN1c3RvbSBjaGVja3MgZm9yIHNwZWNpZmljIGNhc2VzXG4gICAgICBzd2l0Y2ggKHRoaXMuX2tpbmQpIHtcbiAgICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOlxuICAgICAgICAgIGlmIChpdGVtLnNwZWMuY2x1c3RlcklQID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3BlYy5jbHVzdGVySVA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKlxuICAgKiBNYW5hZ2VzIHJlZmVyZW5jZXMgdG8gY29sbGVjdGlvbiBpbnN0YW5jZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3c1xuICAgKi9cbiAgY2xhc3MgQ2xpZW50SW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlZkNvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSBfY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZWZDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCArIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyByZW1vdmVSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBkaXNwb3NhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50IDw9IDA7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICAvLyBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgaW50ZXJmYWNlIENsaWVudE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTpDbGllbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qXG4gICAqIEZhY3RvcnkgaW1wbGVtZW50YXRpb24gdGhhdCdzIGF2YWlsYWJsZSBhcyBhbiBhbmd1bGFyIHNlcnZpY2VcbiAgICovXG4gIGNsYXNzIEs4U0NsaWVudEZhY3RvcnlJbXBsIHtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgIHByaXZhdGUgX2NsaWVudHMgPSA8Q2xpZW50TWFwPiB7fTtcbiAgICBwdWJsaWMgY3JlYXRlKG9wdGlvbnM6IGFueSwgbmFtZXNwYWNlPzogYW55KTpDb2xsZWN0aW9uIHtcbiAgICAgIHZhciBraW5kID0gb3B0aW9ucztcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAga2luZCA9IG9wdGlvbnMua2luZDtcbiAgICAgICAgbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29wdGlvbnMgPSB7XG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIGlmIChvcHRpb25zLmtpbmQpIHtcbiAgICAgICAgb3B0aW9ucy5vYmplY3Qua2luZCA9IHRvS2luZE5hbWUob3B0aW9ucy5raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgY2xpZW50LmRlbGV0ZShvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICB9XG5cbiAgLypcbiAgICogQWRkL3JlcGxhY2UgYW4gb2JqZWN0LCBvciBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHB1dChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgcHV0dGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIHB1dCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICBjbGllbnQuZ2V0KChvYmplY3RzKSA9PiB7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICBjbGllbnQucHV0KG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3YXRjaChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IDxDb2xsZWN0aW9uPiBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgaGFuZGxlID0gY2xpZW50LndhdGNoKG9wdGlvbnMuc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBkaXNjb25uZWN0OiAoKSA9PiB7XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59XG5cblxuIl19
