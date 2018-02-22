

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
    var KindTypes = (function () {
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
    var NamespacedTypes = (function () {
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
        name: 'KubernetesAPIProviderInit',
        depends: ['hawtio-oauth', 'KubernetesApiInit'],
        task: function (next) {
            KubernetesAPI.isOpenShift = false;
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
            var documentURI = new URI().path(HawtioCore.documentBase());
            if (!master || master === "/") {
                KubernetesAPI.log.info("master_url unset or set to '/', assuming API server is at /");
                master = documentURI.query("").toString();
            }
            if (master === "k8s") {
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
    var WSHandler = (function () {
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
                            _this._list.objects = JSON.parse(data).items || [];
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
                }
            }
            if (this.poller) {
                this.log.debug("Destroying poller for kind: ", this.self.kind, " namespace: ", this.self.namespace);
                this.poller.destroy();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0E2Tm5CO0FBN05ELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3BDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDQyxzQkFBa0IsaUJBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRCxzQkFBa0IsdUJBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxzQkFBa0Isa0JBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNu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LENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLEdBQUc7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFO2dCQUNWLDhCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxDQUFDO1NBQ0YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWZlLG1CQUFLLFFBZXBCLENBQUE7QUFFSCxDQUFDLEVBcmtDTSxhQUFhLEtBQWIsYUFBYSxRQXFrQ25CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvL2RlZnMgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcblxuaW50ZXJmYWNlIFNtb2tlU2lnbmFscyB7XG4gIGNvbnZlcnQob2JqOmFueSwgaGFuZGxlcnM/OmFueSk7XG59O1xuXG5pbnRlcmZhY2UgRXZlbnRFbmFibGVkIHtcbiAgb24oZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9uY2UoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9mZihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgZW1pdChldmVudE5hbWU6c3RyaW5nLCAuLi5hcmdzOmFueVtdKTtcbn07XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgY2xhc3MgY29uc3RzIHtcbiAgICBnZXQgTkFNRVNQQUNFX1NUT1JBR0VfS0VZKCk6c3RyaW5nIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBDb25zdGFudHMgPSBuZXcgY29uc3RzKCk7XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9uIHtcbiAgICBwcm90bz86c3RyaW5nO1xuICAgIGhvc3RQb3J0OnN0cmluZztcbiAgICBwcmVmaXg6c3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9ucyB7XG4gICAgb3BlbnNoaWZ0PzogQXBpTG9jYXRpb247XG4gICAgazhzPzogQXBpTG9jYXRpb247XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNDb25maWcge1xuICAgIG1hc3Rlcl91cmk/OiBzdHJpbmc7XG4gICAgYXBpPzogQXBpTG9jYXRpb25zO1xuICAgIG9wZW5zaGlmdD86IE9wZW5TaGlmdE9BdXRoQ29uZmlnO1xuICAgIGdvb2dsZT86IEdvb2dsZU9BdXRoQ29uZmlnO1xuICAgIGtleWNsb2FrPzogS2V5Q2xvYWtBdXRoQ29uZmlnO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuU2hpZnRPQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlT0F1dGhDb25maWcge1xuICAgIGF1dGhlbnRpY2F0aW9uVVJJOnN0cmluZztcbiAgICBhdXRob3JpemF0aW9uVVJJOnN0cmluZztcbiAgICBjbGllbnRJZDpzdHJpbmc7XG4gICAgY2xpZW50U2VjcmV0OnN0cmluZztcbiAgICByZWRpcmVjdFVSSTpzdHJpbmc7XG4gICAgc2NvcGU6c3RyaW5nO1xuICAgIHRva2VuVVJJPzpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEtleUNsb2FrQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc1N0YXRlIHtcbiAgICBuYW1lc3BhY2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHNlbGVjdGVkTmFtZXNwYWNlOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgS2luZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwiTGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRW5kcG9pbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcIkV2ZW50XCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBOQU1FU1BBQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiTmFtZXNwYWNlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIk5vZGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcIlBlcnNpc3RlbnRWb2x1bWVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUygpOnN0cmluZyB7IHJldHVybiBcIlBlcnNpc3RlbnRWb2x1bWVDbGFpbVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcIlBvZFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJSZXBsaWNhdGlvbkNvbnRyb2xsZXJcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FfU0VUUygpOnN0cmluZyB7IHJldHVybiBcIlJlcGxpY2FTZXRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcIlJlc291cmNlUXVvdGFcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJPQXV0aENsaWVudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcIlNlY3JldFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZXJ2aWNlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VydmljZUFjY291bnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IENPTkZJR19NQVBTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQ29uZmlnTWFwXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTkdSRVNTRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJJbmdyZXNzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcIlRlbXBsYXRlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSb3V0ZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcIkJ1aWxkQ29uZmlnXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJCdWlsZFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGVwbG95bWVudENvbmZpZ1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJEZXBsb3ltZW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcIkltYWdlU3RyZWFtXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1fVEFHUygpOnN0cmluZyB7IHJldHVybiBcIkltYWdlU3RyZWFtVGFnXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcIlBvbGljeVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9saWN5QmluZGluZ1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJQcm9qZWN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUm9sZUJpbmRpbmdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUm9sZVwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREFFTU9OU0VUUygpOnN0cmluZyB7IHJldHVybiBcIkRhZW1vblNldFwiOyB9XG4gIH1cblxuXHRleHBvcnQgY2xhc3MgV2F0Y2hUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTElTVCgpOnN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZXZlbnRzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBOQU1FU1BBQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwibmFtZXNwYWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJub2Rlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVjbGFpbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FfU0VUUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2FzZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IENPTkZJR19NQVBTKCk6c3RyaW5nIHsgcmV0dXJuIFwiY29uZmlnbWFwc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU5HUkVTU0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW5ncmVzc2VzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW10YWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREFFTU9OU0VUUygpOnN0cmluZyB7IHJldHVybiBcImRhZW1vbnNldHNcIjsgfVxuXHR9XG5cbiAgZXhwb3J0IGNsYXNzIEV4dGVuc2lvblR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBleHRlbnNpb25zKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkRBRU1PTlNFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU5HUkVTU0VTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5DT05GSUdfTUFQUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRVZFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLk5PREVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFQ1JFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNPcHRpb25zIHtcbiAgICBraW5kPzogc3RyaW5nO1xuICAgIG5hbWVzcGFjZT86IHN0cmluZztcbiAgICBhcGlWZXJzaW9uPzogc3RyaW5nO1xuICAgIGxhYmVsU2VsZWN0b3I/OiBMYWJlbE1hcDtcbiAgICBvYmplY3Q/OiBhbnk7XG4gICAgc3VjY2Vzcz86IChvYmpzOmFueVtdKSA9PiB2b2lkO1xuICAgIGVycm9yPzogKGVycjphbnkpID0+IHZvaWQ7XG4gICAgdXJsRnVuY3Rpb24/OiAob3B0aW9uczpLOFNPcHRpb25zKSA9PiBzdHJpbmc7XG4gIH1cblx0XG5cdGV4cG9ydCBjbGFzcyBXYXRjaEFjdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElOSVQoKTpzdHJpbmcgeyByZXR1cm4gXCJJTklUXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFEREVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiQURERURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBNT0RJRklFRCgpOnN0cmluZyB7IHJldHVybiBcIk1PRElGSUVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfTtcblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBPYmplY3RNYXAge1xuXHRcdFt1aWQ6c3RyaW5nXTogYW55O1x0XHRcblx0fVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFiZWxNYXAge1xuICAgIFtuYW1lOnN0cmluZ106IHN0cmluZztcbiAgfVxuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uIHtcbiAgICB3c1VSTDpzdHJpbmc7XG4gICAgcmVzdFVSTDpzdHJpbmc7XG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gICAga2luZDogc3RyaW5nO1xuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgICBjb25uZWN0KCk7XG4gICAgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6dm9pZDtcbiAgICB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkO1xuICAgIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGdldEtleSgpOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTQ2xpZW50RmFjdG9yeSB7XG4gICAgY3JlYXRlKGtpbmQ6YW55LCBuYW1lc3BhY2U/OiBzdHJpbmcpOkNvbGxlY3Rpb247XG4gICAgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pOnZvaWQ7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XG5cbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xuXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XG4gIGV4cG9ydCB2YXIgaXNPcGVuU2hpZnQgPSBmYWxzZTtcblxuICBleHBvcnQgdmFyIEs4U19QUkVGSVggPSAnYXBpJztcbiAgZXhwb3J0IHZhciBPU19QUkVGSVggPSAnb2FwaSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVF9QUkVGSVggPSAnYXBpcyc7XG5cbiAgZXhwb3J0IHZhciBLOFNfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIE9TX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1ZFUlNJT04gPSAndjFiZXRhMSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVEVOU0lPTlMgPSAnZXh0ZW5zaW9ucyc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBkZWNsYXJlIHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3Rvcnk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gT1NfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGV4dFByZWZpeCgpIHtcbiAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBuYW1lc3BhY2VkKGtpbmQ6c3RyaW5nKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUzpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBLOFNfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgSzhTX0VYVEVOU0lPTlMsIEs4U19FWFRfVkVSU0lPTik7IFxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIE9TX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLnNvbWUoRXh0ZW5zaW9uVHlwZXMuZXh0ZW5zaW9ucywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLnNvbWUoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5zb21lKE5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLklNQUdFUykge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpVmVyc2lvbkZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19FWFRfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpO1xuICAgICAgY2FzZSBLOFNfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCk7XG4gICAgICBjYXNlIEs4U19QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdHMgdGhlIGs4cy9vcGVuc2hpZnQgZXJyb3IgcmVzcG9uc2UgaWYgcHJlc2VudFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgZWl0aGVyIHNlY3VyZS9pbnNlY3VyZSB3ZWJzb2NrZXQgcHJvdG9jb2wgYmFzZWQgb24gdGhlIG1hc3RlciBVUkkgcHJvdG9jb2xcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBXYXRjaFR5cGVzLkxJU1Q6IHJldHVybiBLaW5kVHlwZXMuTElTVDtcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5FTkRQT0lOVFM6ICByZXR1cm4gS2luZFR5cGVzLkVORFBPSU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuRVZFTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5FVkVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLk5BTUVTUEFDRVM6ICByZXR1cm4gS2luZFR5cGVzLk5BTUVTUEFDRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLk5PREVTOiAgcmV0dXJuIEtpbmRUeXBlcy5OT0RFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOiAgcmV0dXJuIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzogIHJldHVybiBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QT0RTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0RTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzogIHJldHVybiBLaW5kVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUzogIHJldHVybiBLaW5kVHlwZXMuUkVQTElDQV9TRVRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVM6ICByZXR1cm4gS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzogIHJldHVybiBLaW5kVHlwZXMuT0FVVEhfQ0xJRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuU0VDUkVUUzogIHJldHVybiBLaW5kVHlwZXMuU0VDUkVUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6ICByZXR1cm4gS2luZFR5cGVzLlNFUlZJQ0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5DT05GSUdfTUFQUzogIHJldHVybiBLaW5kVHlwZXMuQ09ORklHX01BUFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklOR1JFU1NFUzogIHJldHVybiBLaW5kVHlwZXMuSU5HUkVTU0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5URU1QTEFURVM6ICByZXR1cm4gS2luZFR5cGVzLlRFTVBMQVRFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9VVEVTOiAgcmV0dXJuIEtpbmRUeXBlcy5ST1VURVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1M6ICByZXR1cm4gS2luZFR5cGVzLkJVSUxEX0NPTkZJR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkJVSUxEUzogIHJldHVybiBLaW5kVHlwZXMuQlVJTERTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M6ICByZXR1cm4gS2luZFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFM6ICByZXR1cm4gS2luZFR5cGVzLkRFUExPWU1FTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRVM6ICByZXR1cm4gS2luZFR5cGVzLklNQUdFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M6ICByZXR1cm4gS2luZFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QT0xJQ0lFUzogIHJldHVybiBLaW5kVHlwZXMuUE9MSUNJRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUzogIHJldHVybiBLaW5kVHlwZXMuUE9MSUNZX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QUk9KRUNUUzogIHJldHVybiBLaW5kVHlwZXMuUFJPSkVDVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJPTEVfQklORElOR1M6ICByZXR1cm4gS2luZFR5cGVzLlJPTEVfQklORElOR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJPTEVTOiAgcmV0dXJuIEtpbmRUeXBlcy5ST0xFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuREFFTU9OU0VUUzogIHJldHVybiBLaW5kVHlwZXMuREFFTU9OU0VUUzsgXG4gICAgICBkZWZhdWx0OiByZXR1cm4ga2luZDtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS2luZFR5cGVzLkxJU1Q6IHJldHVybiBXYXRjaFR5cGVzLkxJU1Q7XG4gICAgICBjYXNlIEtpbmRUeXBlcy5FTkRQT0lOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5FTkRQT0lOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuRVZFTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuRVZFTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLk5BTUVTUEFDRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLk5PREVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuTk9ERVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzogIHJldHVybiBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QT0RTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9EUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzogIHJldHVybiBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFUExJQ0FfU0VUUzogIHJldHVybiBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5SRVNPVVJDRV9RVU9UQVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuT0FVVEhfQ0xJRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuU0VDUkVUUzogIHJldHVybiBXYXRjaFR5cGVzLlNFQ1JFVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuU0VSVklDRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRVJWSUNFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5DT05GSUdfTUFQUzogIHJldHVybiBXYXRjaFR5cGVzLkNPTkZJR19NQVBTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklOR1JFU1NFUzogIHJldHVybiBXYXRjaFR5cGVzLklOR1JFU1NFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5URU1QTEFURVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5URU1QTEFURVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9VVEVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUk9VVEVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkJVSUxEX0NPTkZJR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkJVSUxEUzogIHJldHVybiBXYXRjaFR5cGVzLkJVSUxEUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuREVQTE9ZTUVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTUFHRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QT0xJQ0lFUzogIHJldHVybiBXYXRjaFR5cGVzLlBPTElDSUVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPTElDWV9CSU5ESU5HUzogIHJldHVybiBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QUk9KRUNUUzogIHJldHVybiBXYXRjaFR5cGVzLlBST0pFQ1RTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJPTEVfQklORElOR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJPTEVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUk9MRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuREFFTU9OU0VUUzogIHJldHVybiBXYXRjaFR5cGVzLkRBRU1PTlNFVFM7IFxuICAgICAgZGVmYXVsdDogcmV0dXJuIGtpbmQ7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgdmFyIGxlZnRVSUQgPSBnZXRVSUQobGVmdCk7XG4gICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICBpZiAoIWxlZnRVSUQgJiYgIXJpZ2h0VUlEKSB7XG4gICAgICByZXR1cm4gYW5ndWxhci50b0pzb24obGVmdCkgPT09IGFuZ3VsYXIudG9Kc29uKHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KC4uLm9iamVjdHM6YW55W10pIHtcbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgb2JqZWN0czogW11cbiAgICB9XG4gICAgXy5mb3JFYWNoKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBfLmZvckVhY2gob2JqZWN0LCAobykgPT4ge1xuICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9iamVjdCBzdWl0YWJsZSBmb3IgZGVsZXRlL2RlbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWxsb3dPYmplY3QobmFtZTpzdHJpbmcsIGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGNvbGxlY3Rpb24gYnkgbGFiZWxcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlMYWJlbChvYmplY3RzOkFycmF5PGFueT4sIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICg8YW55Pl8pLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGdldExhYmVscyhvYmplY3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgZ2l2ZW4gbmFtZXNwYWNlIHRvIGFuIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5IHNldFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFtZXNwYWNlKG9iajphbnksIG5hbWVzcGFjZTogc3RyaW5nKSB7XG4gICAgaWYgKCFvYmoua2luZCB8fCAhbmFtZXNwYWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2VkKHRvQ29sbGVjdGlvbk5hbWUob2JqLmtpbmQpKSAmJiAhb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSkge1xuICAgICAgb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHNjb3BlZCBuYW1lIHdpdGggdGhlIG5hbWVzcGFjZS9raW5kLCBzdWl0YWJsZSB0byB1c2UgYXMgYSBrZXkgaW4gbWFwc1xuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmdWxsTmFtZShlbnRpdHkpIHtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbigobmFtZXNwYWNlID8gbmFtZXNwYWNlIDogXCJcIiksIGtpbmQsIG5hbWUpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVZlcnNpb24oZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnYXBpVmVyc2lvbiddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibGFiZWxzXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDoge307XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcIm5hbWVcIikgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJpZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRLaW5kKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImtpbmRcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwia2luZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RvcihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0KHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwicGhhc2VcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRzKHNlcnZpY2UpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRpb25UaW1lc3RhbXAoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYWJlbHMgdGV4dCBzdHJpbmcgdXNpbmcgdGhlIDxjb2RlPmtleTE9dmFsdWUxLGtleTI9dmFsdWUyLC4uLi48L2NvZGU+IGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvU3RyaW5nKGxhYmVscywgc2VwZXJhdG9yVGV4dCA9IGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvcikge1xuICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChsYWJlbHMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gYW5zd2VyID8gc2VwZXJhdG9yVGV4dCA6IFwiXCI7XG4gICAgICBhbnN3ZXIgKz0gc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHBvZCBpcyBydW5uaW5nXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gaXNSdW5uaW5nKHBvZEN1cnJlbnRTdGF0ZSkge1xuICAgIHZhciBzdGF0dXMgPSAocG9kQ3VycmVudFN0YXRlIHx8IHt9KS5waGFzZTtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbGFiZWxzIG9iamVjdCBoYXMgYWxsIG9mIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSB0aGUgc2VsZWN0b3JcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGxhYmVscykge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGxhYmVscykpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0cnVlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZWxlY3RvciwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGFuc3dlciAmJiBsYWJlbHNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyICYmIGNvdW50ID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwb2RTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIGdldFN0YXR1cyhwb2QpO1xuICB9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgR29vZ2xlT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgS2V5Y2xvYWtDb25maWc6YW55O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIEs4U19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKSB8fCBLOFNfUFJFRklYLCAnLycpO1xuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2luY2Ugd2UncmUgdXNpbmcgamVua2luc2hpZnQgaW4gdmFuaWxsYSBrOHMsIGxldCdzIHBvbGwgYnVpbGQgY29uZmlncyBieSBkZWZhdWx0XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdBZGRQb2xsZWRUeXBlcycsXG4gICAgZGVwZW5kczogWydLdWJlcm5ldGVzQXBpSW5pdCddLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICAgIEt1YmVybmV0ZXNBUEkucG9sbGluZ09ubHkucHVzaChLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyk7XG4gICAgICB9XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBEZXRlY3QgaWYgd2UncmUgcnVubmluZyBhZ2FpbnN0IG9wZW5zaGlmdCBvciBub3RcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBUElQcm92aWRlckluaXQnLFxuICAgIGRlcGVuZHM6IFsnaGF3dGlvLW9hdXRoJywgJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG4gICAgICAvLyBwcm9iZSAvb2FwaS92MSBhcyBpdCdzIGhhcyBhbGwgdGhlIG9wZW5zaGlmdCBleHRlbnNpb25zXG4gICAgICB2YXIgdGVzdFVSTCA9IG5ldyBVUkkoS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwpLnNlZ21lbnQoJ29hcGkvdjEnKS50b1N0cmluZygpO1xuICAgICAgJC5hamF4KDxhbnk+e1xuICAgICAgICB1cmw6IHRlc3RVUkwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgbG9nLmluZm8oXCJCYWNrZW5kIGlzIGFuIG9wZW5zaGlmdCBpbnN0YW5jZVwiKTtcbiAgICAgICAgICBpc09wZW5TaGlmdCA9IHRydWU7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9LCBcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICBsb2cuaW5mbyhcIkVycm9yIHByb2JpbmcgXCIgKyB0ZXN0VVJMICsgXCIgYXNzdW1pbmcgYmFja2VuZCBpcyBub3QgYW4gb3BlbnNoaWZ0IGluc3RhbmNlLiAgRXJyb3IgZGV0YWlsczogc3RhdHVzOiBcIiwgdGV4dFN0YXR1cywgXCIgZXJyb3JUaHJvd246IFwiLCBlcnJvclRocm93biwgXCIganFYSFIgaW5zdGFuY2U6IFwiLCBqcVhIUik7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG5cdGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuXHRcdG5hbWU6ICdGZXRjaENvbmZpZycsXG5cdFx0dGFzazogKG5leHQpID0+IHtcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0bG9nLmRlYnVnKFwiRmV0Y2hlZCBvcGVuc2hpZnQgY29uZmlnOiBcIiwgd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ10pO1xuXHRcdFx0XHRcdGxvZy5kZWJ1ZyhcIkZldGNoZWQga2V5Y2xvYWsgY29uZmlnOiBcIiwgd2luZG93WydLZXljbG9ha0NvbmZpZyddKTtcbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gXy5nZXQod2luZG93LCAnT1BFTlNISUZUX0NPTkZJRy5vcGVuc2hpZnQnKTtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IF8uZ2V0KHdpbmRvdywgJ09QRU5TSElGVF9DT05GSUcuZ29vZ2xlJyk7XG5cdFx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0XHR9KVxuXHRcdH1cblx0fSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0Jyxcblx0XHRkZXBlbmRzOiBbJ0ZldGNoQ29uZmlnJ10sXG4gICAgdGFzazogKG5leHQpID0+IHtcblx0XHRcdHZhciBjb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcblx0XHRcdGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcblx0XHRcdHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG5cdFx0XHRpZiAoIW1hc3RlciAmJiBjb25maWcuYXBpICYmIGNvbmZpZy5hcGkuazhzKSB7XG5cdFx0XHRcdHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcblx0XHRcdFx0aWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG5cdFx0XHRcdFx0bWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuXHRcdFx0XHRpZiAoIW1hc3Rlcikge1xuXHRcdFx0XHRcdHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xuXHRcdFx0XHRcdGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG5cdFx0XHRcdFx0XHR2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGlkeCArPSAzO1xuXHRcdFx0XHRcdFx0XHRcdGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaWR4ID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gV2UnbGwganVzdCBncmFiIHRoZSBVUkkgZm9yIHRoZSBkb2N1bWVudCBoZXJlIGluIGNhc2Ugd2UgbmVlZCBpdFxuXHRcdFx0dmFyIGRvY3VtZW50VVJJID0gbmV3IFVSSSgpLnBhdGgoSGF3dGlvQ29yZS5kb2N1bWVudEJhc2UoKSk7XG5cdFx0XHRpZiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSB7XG5cdFx0XHRcdC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcblx0XHRcdFx0Ly8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG5cdFx0XHRcdC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG5cdFx0XHRcdGxvZy5pbmZvKFwibWFzdGVyX3VybCB1bnNldCBvciBzZXQgdG8gJy8nLCBhc3N1bWluZyBBUEkgc2VydmVyIGlzIGF0IC9cIik7XG5cdFx0XHRcdG1hc3RlciA9IGRvY3VtZW50VVJJLnF1ZXJ5KFwiXCIpLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWFzdGVyID09PSBcIms4c1wiKSB7XG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIHRoZSBidWlsdC1pbiBrdWlzcCBwcm94eSB0byBhY2Nlc3MgdGhlIEFQSSBzZXJ2ZXJcblx0XHRcdFx0bG9nLmluZm8oXCJtYXN0ZXJfdXJsIHNldCB0byAnazhzJywgYXNzdW1pbmcgcHJveHkgaXMgYmVpbmcgdXNlZFwiKTtcblx0XHRcdFx0bWFzdGVyID0gZG9jdW1lbnRVUkkucXVlcnkoXCJcIikuc2VnbWVudChtYXN0ZXIpLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRsb2cuaW5mbyhcIlVzaW5nIGt1YmVybmV0ZXMgQVBJIFVSTDogXCIsIG1hc3Rlcik7XG5cdFx0XHRLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3Rlcjtcblx0XHRcdG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlU2VuZChyZXF1ZXN0KSB7XG4gICAgdmFyIHRva2VuID0gSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IGNsaWVudHMgdG8gYWRkIG90aGVyIHR5cGVzIHRvIGZvcmNlIHBvbGxpbmcgdW5kZXIgd2hhdGV2ZXIgY2lyY3Vtc3RhbmNlc1xuICBleHBvcnQgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuUFJPSkVDVFMsIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IGxvZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2tpbmQ6c3RyaW5nLCBwcml2YXRlIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiY2hhbmdlZDpcIiwgb2JqZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuSU5JVCwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5JTklULCB0aGlzLl9vYmplY3RzKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb2JqZWN0cyhvYmpzOmFueVtdKSB7XG4gICAgICB0aGlzLl9vYmplY3RzLmxlbmd0aCA9IDA7XG4gICAgICBfLmZvckVhY2gob2JqcywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoIW9iai5raW5kKSB7XG4gICAgICAgICAgb2JqLmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uc29tZSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWVkSXRlbShuYW1lOnN0cmluZykge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIGZyb20gb3RoZXIgbmFtZXNwYWNlcyB0aGF0IGNvdWxkIGJlIHJldHVybmVkXG4gICAgcHJpdmF0ZSBiZWxvbmdzKG9iamVjdCkge1xuICAgICAgaWYgKHRoaXMubmFtZXNwYWNlICYmIGdldE5hbWVzcGFjZShvYmplY3QpICE9PSB0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghb2JqZWN0LmtpbmQpIHtcbiAgICAgICAgb2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5zb21lKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgIG9iamVjdC5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKCFfLnNvbWUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWxldGVkID0gXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuREVMRVRFRCwgZGVsZXRlZFswXSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaW50ZXJmYWNlIENvbXBhcmVSZXN1bHQge1xuICAgIGFkZGVkOkFycmF5PGFueT47XG4gICAgbW9kaWZpZWQ6QXJyYXk8YW55PjtcbiAgICBkZWxldGVkOkFycmF5PGFueT47XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlKG9sZDpBcnJheTxhbnk+LCBfbmV3OkFycmF5PGFueT4pOkNvbXBhcmVSZXN1bHQge1xuICAgIHZhciBhbnN3ZXIgPSA8Q29tcGFyZVJlc3VsdD4ge1xuICAgICAgYWRkZWQ6IFtdLFxuICAgICAgbW9kaWZpZWQ6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9O1xuICAgIF8uZm9yRWFjaChfbmV3LCAobmV3T2JqKSA9PiB7XG4gICAgICB2YXIgb2xkT2JqID0gXy5maW5kKG9sZCwgKG8pID0+IGVxdWFscyhvLCBuZXdPYmopKTtcbiAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgIGFuc3dlci5hZGRlZC5wdXNoKG5ld09iaik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLnRvSnNvbihvbGRPYmopICE9PSBhbmd1bGFyLnRvSnNvbihuZXdPYmopKSB7XG4gICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKG9sZCwgKG9sZE9iaikgPT4ge1xuICAgICAgdmFyIG5ld09iaiA9IF8uZmluZChfbmV3LCAobykgPT4gZXF1YWxzKG8sIG9sZE9iaikpO1xuICAgICAgaWYgKCFuZXdPYmopIHtcbiAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAqL1xuICBjbGFzcyBPYmplY3RQb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBfbGFzdEZldGNoID0gPEFycmF5PGFueT4+IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ludGVydmFsID0gNTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRDYW5jZWw6YW55ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0VVJMOnN0cmluZywgcHJpdmF0ZSBoYW5kbGVyOldTSGFuZGxlcikge1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IFxuICAgICAgdGhpcy5fbGFzdEZldGNoID0gdGhpcy5oYW5kbGVyLmxpc3Qub2JqZWN0cztcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb25uZWN0ZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkb0dldCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gXG4gICAgICAkLmFqYXgodGhpcy5yZXN0VVJMLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiZmV0Y2hlZCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgICB2YXIgaXRlbXMgID0gKGRhdGEgJiYgZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW107XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbXBhcmUodGhpcy5fbGFzdEZldGNoLCBpdGVtcyk7XG4gICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gaXRlbXM7XG4gICAgICAgICAgXy5mb3JJbihyZXN1bHQsIChpdGVtczphbnlbXSwgYWN0aW9uOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgXy5mb3JFYWNoKGl0ZW1zLCAoaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfLmNsb25lKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5vbm1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVyLmxpc3QuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcInBvbGxpbmdcIik7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmluZm8odGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBGYWlsZWQgdG8gcG9sbCBvYmplY3RzLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLmVycm9yKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIEVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRpc2Nvbm5lY3RpbmdcIik7XG4gICAgICBpZiAodGhpcy50Q2FuY2VsKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGNhbmNlbGxpbmcgcG9sbGluZ1wiKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRlc3Ryb3llZFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVyIHtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgcG9sbGVyOk9iamVjdFBvbGxlcjtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbWVzc2FnZUxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ0t1YmVybmV0ZXNBUEkuV1NIYW5kbGVyJyk7IFxuICAgICAgdGhpcy5tZXNzYWdlTG9nID0gTG9nZ2VyLmdldCgnS3ViZXJuZXRlc0FQSS5XU0hhbmRlci5tZXNzYWdlcycpO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5vcHRpb25zLmVycm9yO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgdmFyIGV2dCA9IGtleS5yZXBsYWNlKCdvbicsICcnKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcIkFkZGluZyBldmVudCBoYW5kbGVyIGZvciAnXCIgKyBldnQgKyBcIicgdXNpbmcgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxvZy5kZWJ1ZyhcInJlY2VpdmVkIHdlYnNvY2tldCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCAgJiYgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGRlc3Ryb3llZCBidXQgc3RpbGwgcmVjZWl2aW5nIG1lc3NhZ2VzLCBjbG9zaW5nIHdlYnNvY2tldCwga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlNob3VsZCBiZSBjbG9zZWQhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVjZWl2ZWQgb3BlbiBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlY2VpdmVkIGNsb3NlIGV2ZW50IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGRlc3Ryb3llZCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC53YXNDbGVhbikge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uZXJyb3IoZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIHJlY2VpdmVkIGFuIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fCAodGhpcy5wb2xsZXIgJiYgdGhpcy5wb2xsZXIuY29ubmVjdGVkKTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIGEgY3VzdG9tIFVSTCBpcyBnb2luZyB0byBiZSB1c2VkXG4gICAgICBpZiAodGhpcy5zZWxmLnJlc3RVUkwgPT09ICcnICYmIHRoaXMuc2VsZi53c1VSTCA9PT0gJycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgIGlmIChfLnNvbWUocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciB3c1VSTCA9IHRoaXMuc2VsZi53c1VSTDtcbiAgICAgICAgICAgIGlmICh3c1VSTCkge1xuICAgICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQod3NVUkwpO1xuICAgICAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHRoaXMuc29ja2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiTm8gd3NVUkwgZm9yIGtpbmQ6IFwiICsgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgJC5hamF4KHRoaXMuc2VsZi5yZXN0VVJMLCA8YW55PiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fbGlzdC5vYmplY3RzID0gSlNPTi5wYXJzZShkYXRhKS5pdGVtcyB8fCBbXTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH0sIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDbG9zZSBjYWxsZWQgb24gd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvLCBhc3N1bWUgaXQncyBhbHJlYWR5IGNsb3NlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95aW5nIHBvbGxlciBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEltcGxlbWVudHMgdGhlIGV4dGVybmFsIEFQSSBmb3Igd29ya2luZyB3aXRoIGs4cyBjb2xsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkltcGwgaW1wbGVtZW50cyBDb2xsZWN0aW9uIHtcblxuICAgIHByaXZhdGUgX2tpbmQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWVzcGFjZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXBpVmVyc2lvbjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBoYW5kbGVyczpXU0hhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBsaXN0Ok9iamVjdExpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2tpbmQgPSBfb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IF9vcHRpb25zLmFwaVZlcnNpb247XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBfb3B0aW9ucy5uYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSB0aGlzLmdldFByZWZpeCgpO1xuXG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChfb3B0aW9ucy5raW5kLCBfb3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICAgIGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG5ldyBjb2xsZWN0aW9uIGZvclwiLCB0aGlzLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMubmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6SzhTT3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfcmVzdFVybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVSSShhbnN3ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dzVXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybChhbnN3ZXIpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBDb3JlLndpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIGlmIChsb2NhdGlvbiAmJiB1cmwuaW5kZXhPZihcIjovL1wiKSA8IDApIHtcbiAgICAgICAgICB2YXIgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgICBpZiAoaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcbiAgICAgICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICAgIGhvc3RuYW1lICs9IFwiOlwiICsgcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihob3N0bmFtZSwgbWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwodXJsKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fd3NVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIC8qXG4gICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgICAqL1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0UHJlZml4KCkge1xuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcGlWZXJzaW9uICYmIF8uc3RhcnRzV2l0aCh0aGlzLl9hcGlWZXJzaW9uLCAnZXh0ZW5zaW9ucycpKSB7XG4gICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgdGhpcy5fYXBpVmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIC8vIGxldHMgdHJ1c3QgdGhlIHVybCB0byBiZSBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKGl0ZW0ua2luZCkpKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKSB8fCB0aGlzLl9uYW1lc3BhY2U7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLl9raW5kO1xuICAgICAgICAgIGlmICghS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCAmJiAoa2luZCA9PT0gXCJidWlsZGNvbmZpZ3NcIiB8fCBraW5kID09PSBcIkJ1aWxkQ29uZmlnXCIpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBVcmxIZWxwZXJzLmpvaW4oXCIvYXBpL3YxL3Byb3h5L25hbWVzcGFjZXNcIiwgbmFtZXNwYWNlLCBcIi9zZXJ2aWNlcy9qZW5raW5zaGlmdDo4MC9cIiwgcHJlZml4KTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlVzaW5nIGJ1aWxkY29uZmlncyBVUkwgb3ZlcnJpZGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwga2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicGFzc2luZyBleGlzdGluZyBvYmplY3RzOlwiLCB0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImFkZGluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImdvdCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgY2IoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicmVtb3Zpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXBkYXRpbmcgYW4gZXhpc3Rpbmcgb2JqZWN0XG4gICAgICAgIHZhciByZXNvdXJjZVZlcnNpb24gPSBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgaWYgKCFyZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMubGlzdC5nZXROYW1lZEl0ZW0oZ2V0TmFtZShpdGVtKSk7XG4gICAgICAgICAgcmVzb3VyY2VWZXJzaW9uID0gY3VycmVudC5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgICAgaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb24gPSByZXNvdXJjZVZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEN1c3RvbSBjaGVja3MgZm9yIHNwZWNpZmljIGNhc2VzXG4gICAgICBzd2l0Y2ggKHRoaXMuX2tpbmQpIHtcbiAgICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOlxuICAgICAgICAgIGlmIChpdGVtLnNwZWMuY2x1c3RlcklQID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3BlYy5jbHVzdGVySVA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKlxuICAgKiBNYW5hZ2VzIHJlZmVyZW5jZXMgdG8gY29sbGVjdGlvbiBpbnN0YW5jZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3c1xuICAgKi9cbiAgY2xhc3MgQ2xpZW50SW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlZkNvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSBfY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZWZDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCArIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyByZW1vdmVSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBkaXNwb3NhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50IDw9IDA7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICAvLyBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgaW50ZXJmYWNlIENsaWVudE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTpDbGllbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qXG4gICAqIEZhY3RvcnkgaW1wbGVtZW50YXRpb24gdGhhdCdzIGF2YWlsYWJsZSBhcyBhbiBhbmd1bGFyIHNlcnZpY2VcbiAgICovXG4gIGNsYXNzIEs4U0NsaWVudEZhY3RvcnlJbXBsIHtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgIHByaXZhdGUgX2NsaWVudHMgPSA8Q2xpZW50TWFwPiB7fTtcbiAgICBwdWJsaWMgY3JlYXRlKG9wdGlvbnM6IGFueSwgbmFtZXNwYWNlPzogYW55KTpDb2xsZWN0aW9uIHtcbiAgICAgIHZhciBraW5kID0gb3B0aW9ucztcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAga2luZCA9IG9wdGlvbnMua2luZDtcbiAgICAgICAgbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29wdGlvbnMgPSB7XG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIGlmIChvcHRpb25zLmtpbmQpIHtcbiAgICAgICAgb3B0aW9ucy5vYmplY3Qua2luZCA9IHRvS2luZE5hbWUob3B0aW9ucy5raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgY2xpZW50LmRlbGV0ZShvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICB9XG5cbiAgLypcbiAgICogQWRkL3JlcGxhY2UgYW4gb2JqZWN0LCBvciBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHB1dChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgcHV0dGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIHB1dCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICBjbGllbnQuZ2V0KChvYmplY3RzKSA9PiB7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICBjbGllbnQucHV0KG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3YXRjaChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IDxDb2xsZWN0aW9uPiBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgaGFuZGxlID0gY2xpZW50LndhdGNoKG9wdGlvbnMuc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBkaXNjb25uZWN0OiAoKSA9PiB7XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
