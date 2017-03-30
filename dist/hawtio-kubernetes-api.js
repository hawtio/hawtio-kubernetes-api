

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
                    console.log("data: ", data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0FnT25CO0FBaE9ELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3BDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDQyxzQkFBa0IsaUJBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRCxzQkFBa0IsdUJBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxzQkFBa0Isa0JBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRCxzQkFBa0IsK0JBQWtCO2lCQUFwQyxjQUFnRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RSxzQkFBa0IscUNBQXdCO2lCQUExQyxjQUFzRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN2RixzQkFBa0IsaUJBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNqRCxzQkFBa0Isb0NBQXVCO2lCQUF6QyxjQUFxRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRixzQkFBa0IseUJBQVk7aUJBQTlCLGNBQTBDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0IsNEJBQWU7aUJBQWpDLGNBQTZDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN0RSxzQkFBa0IsMEJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0Isb0JBQU87aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN2RCxzQkFBa0IscUJBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN6RCxzQkFBa0IsNkJBQWdCO2lCQUFsQyxjQUE4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN4RSxzQkFBa0Isd0JBQVc7aUJBQTdCLGNBQXlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM5RCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUUxRCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNyRCxzQkFBa0IsMEJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNyRCxzQkFBa0IsK0JBQWtCO2lCQUFwQyxjQUFnRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMxRSxzQkFBa0Isd0JBQVc7aUJBQTdCLGNBQXlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNqRSxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNyRCxzQkFBa0IsMEJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0IsOEJBQWlCO2lCQUFuQyxjQUErQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN6RSxzQkFBa0IscUJBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN4RCxzQkFBa0IsNEJBQWU7aUJBQWpDLGNBQTZDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRSxzQkFBa0IscUJBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsMEJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0Isa0JBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNqRCxzQkFBa0IsdUJBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxnQkFBQztJQUFELENBbENBLEFBa0NDLElBQUE7SUFsQ1ksdUJBQVMsWUFrQ3JCLENBQUE7SUFFRjtRQUFBO1FBa0NBLENBQUM7UUFqQ0Usc0JBQWtCLGtCQUFJO2lCQUF0QixjQUFrQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDcEQsc0JBQWtCLHVCQUFTO2lCQUEzQixjQUF1QyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDNUQsc0JBQWtCLG9CQUFNO2lCQUF4QixjQUFvQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDcEQsc0JBQWtCLHdCQUFVO2lCQUE1QixjQUF3QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDaEUsc0JBQWtCLG1CQUFLO2lCQUF2QixjQUFtQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDcEQsc0JBQWtCLGdDQUFrQjtpQkFBcEMsY0FBZ0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDN0Usc0JBQWtCLHNDQUF3QjtpQkFBMUMsY0FBc0QsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDeEYsc0JBQWtCLGtCQUFJO2lCQUF0QixjQUFrQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDbEQsc0JBQWtCLHFDQUF1QjtpQkFBekMsY0FBcUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDckYsc0JBQWtCLDBCQUFZO2lCQUE5QixjQUEwQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7UUFDbkUsc0JBQWtCLDZCQUFlO2lCQUFqQyxjQUE2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN2RSxzQkFBa0IsMkJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRSxzQkFBa0IscUJBQU87aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN4RCxzQkFBa0Isc0JBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMxRCxzQkFBa0IsOEJBQWdCO2lCQUFsQyxjQUE4QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN6RSxzQkFBa0IseUJBQVc7aUJBQTdCLGNBQXlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUU1RCxzQkFBa0IsdUJBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUM1RCxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN0RCxzQkFBa0IsMkJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRSxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN0RCxzQkFBa0IsZ0NBQWtCO2lCQUFwQyxjQUFnRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRSxzQkFBa0IseUJBQVc7aUJBQTdCLGNBQXlDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNsRSxzQkFBa0Isb0JBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUN0RCxzQkFBa0IsMkJBQWE7aUJBQS9CLGNBQTJDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRSxzQkFBa0IsK0JBQWlCO2lCQUFuQyxjQUErQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMxRSxzQkFBa0Isc0JBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMxRCxzQkFBa0IsNkJBQWU7aUJBQWpDLGNBQTZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3JFLHNCQUFrQixzQkFBUTtpQkFBMUIsY0FBc0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQzVELHNCQUFrQiwyQkFBYTtpQkFBL0IsY0FBMkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ25FLHNCQUFrQixtQkFBSztpQkFBdkIsY0FBbUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ2xELHNCQUFrQix3QkFBVTtpQkFBNUIsY0FBd0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ2pFLGlCQUFDO0lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtJQWxDWSx3QkFBVSxhQWtDdEIsQ0FBQTtJQUVBO1FBQUE7UUFRQSxDQUFDO1FBUEMsc0JBQWtCLDRCQUFVO2lCQUE1QjtnQkFDRSxNQUFNLENBQUM7b0JBQ0wsVUFBVSxDQUFDLFVBQVU7b0JBQ3JCLFVBQVUsQ0FBQyxZQUFZO29CQUN2QixVQUFVLENBQUMsV0FBVztpQkFDdkIsQ0FBQztZQUNKLENBQUM7OztXQUFBO1FBQ0gscUJBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLDRCQUFjLGlCQVExQixDQUFBO0lBRUQ7UUFBQTtRQXdDQSxDQUFDO1FBdkNDLHNCQUFrQiwyQkFBUTtpQkFBMUI7Z0JBQ0UsTUFBTSxDQUFDO29CQUNMLFVBQVUsQ0FBQyxXQUFXO29CQUN0QixVQUFVLENBQUMsU0FBUztvQkFDcEIsVUFBVSxDQUFDLE1BQU07b0JBQ2pCLFVBQVUsQ0FBQyxTQUFTO29CQUNwQixVQUFVLENBQUMsS0FBSztvQkFDaEIsVUFBVSxDQUFDLGtCQUFrQjtvQkFDN0IsVUFBVSxDQUFDLHdCQUF3QjtvQkFDbkMsVUFBVSxDQUFDLElBQUk7b0JBQ2YsVUFBVSxDQUFDLHVCQUF1QjtvQkFDbEMsVUFBVSxDQUFDLGVBQWU7b0JBQzFCLFVBQVUsQ0FBQyxrQkFBa0I7b0JBQzdCLFVBQVUsQ0FBQyxPQUFPO29CQUNsQixVQUFVLENBQUMsUUFBUTtvQkFDbkIsVUFBVSxDQUFDLGdCQUFnQjtvQkFDM0IsVUFBVSxDQUFDLFlBQVk7b0JBQ3ZCLFVBQVUsQ0FBQyxXQUFXO2lCQUN2QixDQUFDO1lBQ0osQ0FBQzs7O1dBQUE7UUFDRCxzQkFBa0IsMEJBQU87aUJBQXpCO2dCQUNFLE1BQU0sQ0FBQztvQkFDTCxVQUFVLENBQUMsU0FBUztvQkFDcEIsVUFBVSxDQUFDLGFBQWE7b0JBQ3hCLFVBQVUsQ0FBQyxNQUFNO29CQUNqQixVQUFVLENBQUMsTUFBTTtvQkFDakIsVUFBVSxDQUFDLGFBQWE7b0JBQ3hCLFVBQVUsQ0FBQyxrQkFBa0I7b0JBRTdCLFVBQVUsQ0FBQyxhQUFhO29CQUN4QixVQUFVLENBQUMsaUJBQWlCO29CQUM1QixVQUFVLENBQUMsYUFBYTtvQkFDeEIsVUFBVSxDQUFDLFFBQVE7b0JBQ25CLFVBQVUsQ0FBQyxlQUFlO29CQUMxQixVQUFVLENBQUMsUUFBUTtvQkFDbkIsVUFBVSxDQUFDLGFBQWE7b0JBQ3hCLFVBQVUsQ0FBQyxLQUFLO2lCQUNqQixDQUFDO1lBQ0osQ0FBQzs7O1dBQUE7UUFDSCxzQkFBQztJQUFELENBeENBLEFBd0NDLElBQUE7SUF4Q1ksNkJBQWUsa0JBd0MzQixDQUFBO0lBYUY7UUFBQTtRQU1BLENBQUM7UUFMRSxzQkFBa0Isb0JBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTs7UUFDcEQsc0JBQWtCLG1CQUFHO2lCQUFyQixjQUFpQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7O1FBQzlDLHNCQUFrQixxQkFBSztpQkFBdkIsY0FBbUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztXQUFBOztRQUNwRCxzQkFBa0Isd0JBQVE7aUJBQTFCLGNBQXNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTs7UUFDMUQsc0JBQWtCLHVCQUFPO2lCQUF6QixjQUFxQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O1dBQUE7O1FBQ3pELG1CQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSwwQkFBWSxlQU14QixDQUFBO0FBK0JGLENBQUMsRUFoT00sYUFBYSxLQUFiLGFBQWEsUUFnT25COztBQ3hPRCxJQUFPLGFBQWEsQ0FnQ25CO0FBaENELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFVCx3QkFBVSxHQUFHLGVBQWUsQ0FBQztJQUM3Qix3QkFBVSxHQUFHLHlCQUF5QixDQUFDO0lBQ3ZDLDBCQUFZLEdBQUcsd0JBQVUsR0FBRyxPQUFPLENBQUM7SUFDcEMsaUJBQUcsR0FBa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDLENBQUM7SUFFNUMsOEJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBRXhCLDRCQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pELHlCQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUd4QyxzQkFBUSxHQUFvQixTQUFTLENBQUM7SUFDdEMsdUJBQVMsR0FBRyxFQUFFLENBQUM7SUFDZix5QkFBVyxHQUFHLEtBQUssQ0FBQztJQUVwQix3QkFBVSxHQUFHLEtBQUssQ0FBQztJQUNuQix1QkFBUyxHQUFHLE1BQU0sQ0FBQztJQUNuQiw0QkFBYyxHQUFHLE1BQU0sQ0FBQztJQUV4Qiw2QkFBZSxHQUFHLElBQUksQ0FBQztJQUN2Qiw0QkFBYyxHQUFHLElBQUksQ0FBQztJQUN0Qiw2QkFBZSxHQUFHLFNBQVMsQ0FBQztJQUM1Qiw0QkFBYyxHQUFHLFlBQVksQ0FBQztJQUU5QiwrQkFBaUIsR0FBRyw2QkFBZSxDQUFDO0lBQ3BDLGlDQUFtQixHQUFHLDRCQUFjLENBQUM7SUFFckMsc0NBQXdCLEdBQUcsR0FBRyxDQUFDO0lBQy9CLDhCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUM3Qix1QkFBUyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxDQUFDLEVBaENNLGFBQWEsS0FBYixhQUFhLFFBZ0NuQjs7QUNuQ0QsSUFBTyxhQUFhLENBbVpuQjtBQW5aRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBSXBCO1FBQ0UsTUFBTSxDQUFDLHdCQUFVLENBQUM7SUFDcEIsQ0FBQztJQUZlLHVCQUFTLFlBRXhCLENBQUE7SUFFRDtRQUNFLE1BQU0sQ0FBQyx1QkFBUyxDQUFDO0lBQ25CLENBQUM7SUFGZSx5QkFBVyxjQUUxQixDQUFBO0lBRUQ7UUFDRSxNQUFNLENBQUMsNEJBQWMsQ0FBQztJQUN4QixDQUFDO0lBRmUsdUJBQVMsWUFFeEIsQ0FBQTtJQUVEO1FBQ0UsTUFBTSxDQUFDLHVCQUFTLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFGZSwwQkFBWSxlQUUzQixDQUFBO0lBRUQsb0JBQTJCLElBQVc7UUFDcEMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkMsS0FBSyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUM1QyxLQUFLLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3pDLEtBQUssYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDcEMsS0FBSyxhQUFhLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ2pELEtBQUssYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBRWY7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQWJlLHdCQUFVLGFBYXpCLENBQUE7SUFFRDtRQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLDZCQUFlLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRmUsaUNBQW1CLHNCQUVsQyxDQUFBO0lBRUQ7UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyw0QkFBYyxFQUFFLDRCQUFjLEVBQUUsNkJBQWUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFGZSwwQ0FBNEIsK0JBRTNDLENBQUE7SUFFRDtRQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLDRCQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRmUsZ0NBQWtCLHFCQUVqQyxDQUFBO0lBRUQsb0JBQTJCLElBQVc7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsd0JBQVUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBYyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyw0QkFBYyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUFlLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLHdCQUFVLENBQUM7UUFDcEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsNkJBQWUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsdUJBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsdUJBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFqQmUsd0JBQVUsYUFpQnpCLENBQUE7SUFFRCwyQkFBa0MsSUFBVztRQUMzQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssNEJBQWM7Z0JBQ2pCLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1lBQ3hDLEtBQUssNkJBQWU7Z0JBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQy9CLEtBQUssNEJBQWM7Z0JBQ2pCLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzlCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFaZSwrQkFBaUIsb0JBWWhDLENBQUE7SUFFRCx1QkFBOEIsSUFBVztRQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssNEJBQWM7Z0JBQ2pCLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1lBQ3hDLEtBQUssd0JBQVU7Z0JBQ2IsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDL0IsS0FBSyx1QkFBUztnQkFDWixNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBWmUsMkJBQWEsZ0JBWTVCLENBQUE7SUFFRDtRQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRmUsOEJBQWdCLG1CQUUvQixDQUFBO0lBRUQ7UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUZlLDZCQUFlLGtCQUU5QixDQUFBO0lBS0Qsd0JBQStCLEtBQUs7UUFDbEMsSUFBSSxNQUFNLEdBQU8sS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNwQyxJQUFJLENBQUM7WUFDSCxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFFO1FBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVmLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFSZSw0QkFBYyxpQkFRN0IsQ0FBQTtJQUtELGtCQUF5QixHQUFVO1FBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQVBlLHNCQUFRLFdBT3ZCLENBQUE7SUFLRCxvQkFBMkIsSUFBUTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyx3QkFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsdUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsS0FBSyx3QkFBVSxDQUFDLFNBQVMsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDdkQsS0FBSyx3QkFBVSxDQUFDLE1BQU0sRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxNQUFNLENBQUM7WUFDakQsS0FBSyx3QkFBVSxDQUFDLFVBQVUsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDekQsS0FBSyx3QkFBVSxDQUFDLEtBQUssRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDL0MsS0FBSyx3QkFBVSxDQUFDLGtCQUFrQixFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLGtCQUFrQixDQUFDO1lBQ3pFLEtBQUssd0JBQVUsQ0FBQyx3QkFBd0IsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyRixLQUFLLHdCQUFVLENBQUMsSUFBSSxFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLElBQUksQ0FBQztZQUM3QyxLQUFLLHdCQUFVLENBQUMsdUJBQXVCLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsdUJBQXVCLENBQUM7WUFDbkYsS0FBSyx3QkFBVSxDQUFDLFlBQVksRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0QsS0FBSyx3QkFBVSxDQUFDLGVBQWUsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxlQUFlLENBQUM7WUFDbkUsS0FBSyx3QkFBVSxDQUFDLGFBQWEsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxhQUFhLENBQUM7WUFDL0QsS0FBSyx3QkFBVSxDQUFDLE9BQU8sRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkQsS0FBSyx3QkFBVSxDQUFDLFFBQVEsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckQsS0FBSyx3QkFBVSxDQUFDLGdCQUFnQixFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ3JFLEtBQUssd0JBQVUsQ0FBQyxXQUFXLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzNELEtBQUssd0JBQVUsQ0FBQyxTQUFTLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3ZELEtBQUssd0JBQVUsQ0FBQyxTQUFTLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsU0FBUyxDQUFDO1lBQ3ZELEtBQUssd0JBQVUsQ0FBQyxNQUFNLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsTUFBTSxDQUFDO1lBQ2pELEtBQUssd0JBQVUsQ0FBQyxhQUFhLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsYUFBYSxDQUFDO1lBQy9ELEtBQUssd0JBQVUsQ0FBQyxNQUFNLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsTUFBTSxDQUFDO1lBQ2pELEtBQUssd0JBQVUsQ0FBQyxrQkFBa0IsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQztZQUN6RSxLQUFLLHdCQUFVLENBQUMsV0FBVyxFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxLQUFLLHdCQUFVLENBQUMsTUFBTSxFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxLQUFLLHdCQUFVLENBQUMsYUFBYSxFQUFHLE1BQU0sQ0FBQyx1QkFBUyxDQUFDLGFBQWEsQ0FBQztZQUMvRCxLQUFLLHdCQUFVLENBQUMsaUJBQWlCLEVBQUcsTUFBTSxDQUFDLHVCQUFTLENBQUMsaUJBQWlCLENBQUM7WUFDdkUsS0FBSyx3QkFBVSxDQUFDLFFBQVEsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckQsS0FBSyx3QkFBVSxDQUFDLGVBQWUsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxlQUFlLENBQUM7WUFDbkUsS0FBSyx3QkFBVSxDQUFDLFFBQVEsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckQsS0FBSyx3QkFBVSxDQUFDLGFBQWEsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxhQUFhLENBQUM7WUFDL0QsS0FBSyx3QkFBVSxDQUFDLEtBQUssRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDL0MsS0FBSyx3QkFBVSxDQUFDLFVBQVUsRUFBRyxNQUFNLENBQUMsdUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDekQsU0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBdkNlLHdCQUFVLGFBdUN6QixDQUFBO0lBS0QsMEJBQWlDLElBQVE7UUFDdkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssdUJBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLHdCQUFVLENBQUMsSUFBSSxDQUFDO1lBQzVDLEtBQUssdUJBQVMsQ0FBQyxTQUFTLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsU0FBUyxDQUFDO1lBQ3ZELEtBQUssdUJBQVMsQ0FBQyxNQUFNLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2pELEtBQUssdUJBQVMsQ0FBQyxVQUFVLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3pELEtBQUssdUJBQVMsQ0FBQyxLQUFLLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsS0FBSyxDQUFDO1lBQy9DLEtBQUssdUJBQVMsQ0FBQyxrQkFBa0IsRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxrQkFBa0IsQ0FBQztZQUN6RSxLQUFLLHVCQUFTLENBQUMsd0JBQXdCLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsd0JBQXdCLENBQUM7WUFDckYsS0FBSyx1QkFBUyxDQUFDLElBQUksRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxJQUFJLENBQUM7WUFDN0MsS0FBSyx1QkFBUyxDQUFDLHVCQUF1QixFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQ25GLEtBQUssdUJBQVMsQ0FBQyxZQUFZLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsWUFBWSxDQUFDO1lBQzdELEtBQUssdUJBQVMsQ0FBQyxlQUFlLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsZUFBZSxDQUFDO1lBQ25FLEtBQUssdUJBQVMsQ0FBQyxhQUFhLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsYUFBYSxDQUFDO1lBQy9ELEtBQUssdUJBQVMsQ0FBQyxPQUFPLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsT0FBTyxDQUFDO1lBQ25ELEtBQUssdUJBQVMsQ0FBQyxRQUFRLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JELEtBQUssdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyRSxLQUFLLHVCQUFTLENBQUMsV0FBVyxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLFdBQVcsQ0FBQztZQUMzRCxLQUFLLHVCQUFTLENBQUMsU0FBUyxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLFNBQVMsQ0FBQztZQUN2RCxLQUFLLHVCQUFTLENBQUMsU0FBUyxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLFNBQVMsQ0FBQztZQUN2RCxLQUFLLHVCQUFTLENBQUMsTUFBTSxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLE1BQU0sQ0FBQztZQUNqRCxLQUFLLHVCQUFTLENBQUMsYUFBYSxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLGFBQWEsQ0FBQztZQUMvRCxLQUFLLHVCQUFTLENBQUMsTUFBTSxFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLE1BQU0sQ0FBQztZQUNqRCxLQUFLLHVCQUFTLENBQUMsa0JBQWtCLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsa0JBQWtCLENBQUM7WUFDekUsS0FBSyx1QkFBUyxDQUFDLFdBQVcsRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxXQUFXLENBQUM7WUFDM0QsS0FBSyx1QkFBUyxDQUFDLE1BQU0sRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxNQUFNLENBQUM7WUFDakQsS0FBSyx1QkFBUyxDQUFDLGFBQWEsRUFBRyxNQUFNLENBQUMsd0JBQVUsQ0FBQyxhQUFhLENBQUM7WUFDL0QsS0FBSyx1QkFBUyxDQUFDLGlCQUFpQixFQUFHLE1BQU0sQ0FBQyx3QkFBVSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZFLEtBQUssdUJBQVMsQ0FBQyxRQUFRLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JELEtBQUssdUJBQVMsQ0FBQyxlQUFlLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsZUFBZSxDQUFDO1lBQ25FLEtBQUssdUJBQVMsQ0FBQyxRQUFRLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JELEtBQUssdUJBQVMsQ0FBQyxhQUFhLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsYUFBYSxDQUFDO1lBQy9ELEtBQUssdUJBQVMsQ0FBQyxLQUFLLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsS0FBSyxDQUFDO1lBQy9DLEtBQUssdUJBQVMsQ0FBQyxVQUFVLEVBQUcsTUFBTSxDQUFDLHdCQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3pELFNBQVMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQXZDZSw4QkFBZ0IsbUJBdUMvQixDQUFBO0lBS0QsZUFBc0IsR0FBVTtRQUM5QixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSGUsbUJBQUssUUFHcEIsQ0FBQTtJQUtELGdCQUF1QixJQUFJLEVBQUUsS0FBSztRQUNoQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBUGUsb0JBQU0sU0FPckIsQ0FBQTtJQVdEO1FBQTJCLGlCQUFnQjthQUFoQixXQUFnQixDQUFoQixzQkFBZ0IsQ0FBaEIsSUFBZ0I7WUFBaEIsZ0NBQWdCOztRQUN6QyxJQUFJLE1BQU0sR0FBRztZQUNYLFVBQVUsRUFBRSw2QkFBZTtZQUMzQixJQUFJLEVBQUUsVUFBVSxDQUFDLHdCQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQTtRQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTTtZQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDO29CQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBaEJlLHdCQUFVLGFBZ0J6QixDQUFBO0lBS0QsNkJBQW9DLElBQVcsRUFBRSxJQUFXLEVBQUUsU0FBaUI7UUFDN0UsTUFBTSxDQUFDO1lBQ0wsVUFBVSxFQUFFLDZCQUFlO1lBQzNCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3RCLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsU0FBUzthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBVGUsaUNBQW1CLHNCQVNsQyxDQUFBO0lBS0QsdUJBQThCLE9BQWtCLEVBQUUsYUFBc0I7UUFDdEUsSUFBSSxPQUFPLEdBQVMsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTGUsMkJBQWEsZ0JBSzVCLENBQUE7SUFLRCx3QkFBK0IsR0FBTyxFQUFFLFNBQWlCO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFQZSw0QkFBYyxpQkFPN0IsQ0FBQTtJQUtELGtCQUF5QixNQUFNO1FBQzdCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUxlLHNCQUFRLFdBS3ZCLENBQUE7SUFFRCxnQkFBdUIsTUFBTTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRmUsb0JBQU0sU0FFckIsQ0FBQTtJQUVELHNCQUE2QixNQUFNO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBSmUsMEJBQVksZUFJM0IsQ0FBQTtJQUVELHVCQUE4QixNQUFNO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUZlLDJCQUFhLGdCQUU1QixDQUFBO0lBRUQsbUJBQTBCLE1BQU07UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUhlLHVCQUFTLFlBR3hCLENBQUE7SUFFRCxpQkFBd0IsTUFBTTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRmUscUJBQU8sVUFFdEIsQ0FBQTtJQUVELGlCQUF3QixNQUFNO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFGZSxxQkFBTyxVQUV0QixDQUFBO0lBRUQscUJBQTRCLE1BQU07UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUZlLHlCQUFXLGNBRTFCLENBQUE7SUFFRCxpQkFBd0IsR0FBRztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkksQ0FBQztJQUZlLHFCQUFPLFVBRXRCLENBQUE7SUFFRCxtQkFBMEIsR0FBRztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRmUsdUJBQVMsWUFFeEIsQ0FBQTtJQUVELGtCQUF5QixPQUFPO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFGZSxzQkFBUSxXQUV2QixDQUFBO0lBRUQsOEJBQXFDLE1BQU07UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRmUsa0NBQW9CLHVCQUVuQyxDQUFBO0lBQUEsQ0FBQztJQUtGLHdCQUErQixNQUFNLEVBQUUsYUFBd0M7UUFBeEMsNkJBQXdDLEdBQXhDLHNEQUF3QztRQUM3RSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUNqQyxJQUFJLFNBQVMsR0FBRyxNQUFNLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUM1QyxNQUFNLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBUGUsNEJBQWMsaUJBTzdCLENBQUE7SUFLRCxtQkFBMEIsZUFBZTtRQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFSZSx1QkFBUyxZQVF4QixDQUFBO0lBS0QseUJBQWdDLFFBQVEsRUFBRSxNQUFNO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUNuQyxLQUFLLEVBQUUsQ0FBQztnQkFDUixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFkZSw2QkFBZSxrQkFjOUIsQ0FBQTtJQUVELG1CQUEwQixHQUFHO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUZlLHVCQUFTLFlBRXhCLENBQUE7QUFFSCxDQUFDLEVBblpNLGFBQWEsS0FBYixhQUFhLFFBbVpuQjs7QUNoWkQsSUFBTyxhQUFhLENBc0huQjtBQXRIRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRVQscUJBQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLHdCQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFcEQsa0JBQWtCLENBQUMsd0JBQXdCLENBQUM7UUFDMUMsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5QixJQUFJLEVBQUUsVUFBQyxJQUFJO1lBQ1Qsd0JBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSx3QkFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25HLHVCQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksdUJBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2RyxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUM7S0FDRixDQUFDLENBQUM7SUFHSCxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLElBQUksRUFBRSxVQUFDLElBQUk7WUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7WUFDRCxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUM7S0FDRixDQUFDLENBQUM7SUFHSCxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUMxQyxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQztRQUM5QyxJQUFJLEVBQUUsVUFBQyxJQUFJO1lBQ1QseUJBQVcsR0FBRyxLQUFLLENBQUM7WUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3RSxDQUFDLENBQUMsSUFBSSxDQUFNO2dCQUNWLEdBQUcsRUFBRSxPQUFPO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxVQUFDLElBQUk7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVCLGlCQUFHLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7b0JBQzdDLHlCQUFXLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDO2dCQUNELEtBQUssRUFBRSxVQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVztvQkFDcEMsaUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLDBFQUEwRSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3pMLElBQUksRUFBRSxDQUFDO2dCQUNULENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUosa0JBQWtCLENBQUMsd0JBQXdCLENBQUM7UUFDM0MsSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLFVBQUMsSUFBSTtZQUNQLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7aUJBQy9CLE1BQU0sQ0FBQztnQkFDWCxpQkFBRyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxpQkFBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztnQkFDNUQsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxFQUFFLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRCxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVIsa0JBQWtCLENBQUMsd0JBQXdCLENBQUM7UUFDMUMsSUFBSSxFQUFFLG1CQUFtQjtRQUMzQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEIsSUFBSSxFQUFFLFVBQUMsSUFBSTtZQUNaLElBQUksTUFBTSxHQUFvQixhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xGLGlCQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksTUFBTSxHQUFVLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzFCLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNiLElBQUksbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO29CQUM1RCxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksSUFBSSxHQUFHLG1CQUFtQixDQUFDO3dCQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDYixHQUFHLElBQUksQ0FBQyxDQUFDOzRCQUNULEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ25DLENBQUM7d0JBQ0YsQ0FBQztvQkFDSCxDQUFDO2dCQUNGLENBQUM7WUFDRixDQUFDO1lBRUQsSUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBSS9CLGlCQUFHLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7Z0JBQ3hFLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFdEIsaUJBQUcsQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztnQkFDbEUsTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzNELENBQUM7WUFDRCxpQkFBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQyxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztRQUNOLENBQUM7S0FDRixDQUFDLENBQUM7SUFFSCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0Msa0JBQWtCLENBQUMsU0FBUyxDQUFDLHdCQUFVLENBQUMsQ0FBQztBQUMzQyxDQUFDLEVBdEhNLGFBQWEsS0FBYixhQUFhLFFBc0huQjs7QUN2SEQsSUFBTyxhQUFhLENBcWtDbkI7QUFya0NELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwQyxnQkFBZ0IsSUFBVyxFQUFFLFNBQWtCO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCxvQkFBb0IsT0FBTztRQUN6QixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBR1UseUJBQVcsR0FBRyxDQUFDLHdCQUFVLENBQUMsUUFBUSxFQUFFLHdCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUs3RTtRQVVFLG9CQUFvQixLQUFZLEVBQVUsU0FBaUI7WUFWN0QsaUJBK0lDO1lBcklxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBUTtZQVRwRCx3QkFBbUIsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRW5CLFFBQUcsR0FBZ0IsU0FBUyxDQUFDO1lBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLGFBQVEsR0FBYyxFQUFFLENBQUM7WUFDekIsUUFBRyxHQUFrQixHQUFHLENBQUM7WUFHL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLDBCQUFZLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBTTtvQkFDckMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQywwQkFBWSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQU07b0JBQ3hDLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsMEJBQVksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO29CQUN2QyxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLDBCQUFZLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTztvQkFDcEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLDBCQUFZLENBQUMsSUFBSSxFQUFFLFVBQUMsT0FBTztvQkFDckMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsMEJBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxPQUFPO2dCQUNwQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOztRQUVELHNCQUFXLDRCQUFJO2lCQUFmO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7OztXQUFBO1FBRU0sK0JBQVUsR0FBakI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBRUQsc0JBQVcsbUNBQVc7aUJBQXRCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsOEJBQU07aUJBQWpCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2xCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsK0JBQU87aUJBQWxCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUM7aUJBRUQsVUFBbUIsSUFBVTtnQkFBN0IsaUJBVUM7Z0JBVEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2QsR0FBRyxDQUFDLElBQUksR0FBRyx3QkFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsQ0FBQztvQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixDQUFDOzs7V0FaQTtRQWNNLGlDQUFZLEdBQW5CLFVBQW9CLElBQVE7WUFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQU87Z0JBQ25DLE1BQU0sQ0FBQyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLHFCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU0saUNBQVksR0FBbkIsVUFBb0IsSUFBVztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBTztnQkFDbkMsTUFBTSxDQUFDLHFCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUdPLDRCQUFPLEdBQWYsVUFBZ0IsTUFBTTtZQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLDBCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFTSwwQkFBSyxHQUFaLFVBQWEsTUFBTTtZQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksR0FBRyx3QkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRztnQkFDNUIsTUFBTSxDQUFDLG9CQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0IsQ0FBQzs7UUFFTSw2QkFBUSxHQUFmLFVBQWdCLE1BQU07WUFBdEIsaUJBb0JDO1lBbkJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLHdCQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUc7Z0JBQzdCLE1BQU0sQ0FBQyxvQkFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUc7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLG9CQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUM7O1FBRU0sNEJBQU8sR0FBZCxVQUFlLE1BQU07WUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUc7Z0JBQ3hDLE1BQU0sQ0FBQyxvQkFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixDQUFDO1FBQ0gsQ0FBQzs7UUFDSCxpQkFBQztJQUFELENBL0lBLEFBK0lDLElBQUE7SUFBQSxDQUFDO0lBUUYsaUJBQWlCLEdBQWMsRUFBRSxJQUFlO1FBQzlDLElBQUksTUFBTSxHQUFtQjtZQUMzQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNO1lBQ3JCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsb0JBQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQU07WUFDcEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxvQkFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFLRDtRQVNFLHNCQUFvQixPQUFjLEVBQVUsT0FBaUI7WUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBTztZQUFVLFlBQU8sR0FBUCxPQUFPLENBQVU7WUFQckQsZUFBVSxHQUFnQixFQUFFLENBQUM7WUFDN0IsUUFBRyxHQUFrQixTQUFTLENBQUM7WUFDL0IsZUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLFlBQU8sR0FBVSxDQUFDLENBQUM7WUFDbkIsWUFBTyxHQUFPLFNBQVMsQ0FBQztZQUc5QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlDLENBQUM7O1FBRUQsc0JBQVcsbUNBQVM7aUJBQXBCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBOztRQUVPLDRCQUFLLEdBQWI7WUFBQSxpQkEyREM7WUExREMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBTztnQkFDeEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLFVBQUMsSUFBSTtvQkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxLQUFLLEdBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNwRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBVyxFQUFFLE1BQWE7d0JBQ3pDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBUTs0QkFDeEIsSUFBSSxLQUFLLEdBQUc7Z0NBQ1YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0NBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO29DQUMxQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7aUNBQ3BCLEVBQUUsSUFBSSxDQUFDOzZCQUNULENBQUM7NEJBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUUvQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7NEJBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDZixDQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsS0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNO29CQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFDRCxJQUFJLEtBQUssR0FBRyw0QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGtEQUFrRCxDQUFDLENBQUM7d0JBQ3JGLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsNkNBQTZDLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3hGLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDWixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM1QixDQUFDO29CQUNILENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNuRyxLQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs0QkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNmLENBQUMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxVQUFVLEVBQUUsVUFBVTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDOztRQUVNLDRCQUFLLEdBQVo7WUFBQSxpQkFRQztZQVBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7O1FBRU0sMkJBQUksR0FBWDtZQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7Z0JBQzNELFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDOztRQUVNLDhCQUFPLEdBQWQ7WUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUgsbUJBQUM7SUFBRCxDQXhHQSxBQXdHQyxJQUFBO0lBS0Q7UUFXRSxtQkFBb0IsS0FBb0I7WUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtZQVZoQyxZQUFPLEdBQVUsQ0FBQyxDQUFDO1lBQ25CLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1lBR3ZCLFNBQUksR0FBa0IsU0FBUyxDQUFDO1lBRWhDLFFBQUcsR0FBa0IsU0FBUyxDQUFDO1lBQy9CLGVBQVUsR0FBa0IsU0FBUyxDQUFDO1lBQ3RDLGNBQVMsR0FBRyxLQUFLLENBQUM7WUFHeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUVELHNCQUFJLDJCQUFJO2lCQUlSO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFpQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNwRCxDQUFDO2lCQU5ELFVBQVMsS0FBZ0I7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLENBQUM7OztXQUFBO1FBTUQsc0JBQUksaUNBQVU7aUJBQWQ7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSw0QkFBSztpQkFBVDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2xDLENBQUM7OztXQUFBO1FBRUQsc0JBQUksMkJBQUk7aUJBQVI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBRU8sK0JBQVcsR0FBbkIsVUFBb0IsSUFBYyxFQUFFLEVBQVk7WUFBaEQsaUJBV0M7WUFWQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUVoQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSzt3QkFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7UUFFTSx3QkFBSSxHQUFYLFVBQVksSUFBUTtZQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVELCtCQUFXLEdBQVgsVUFBWSxLQUFLO1lBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4RUFBOEUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEosSUFBSSxDQUFDO29CQUNILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ3JCLENBQUU7Z0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFZixDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBSztZQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDOztRQUVELDBCQUFNLEdBQU4sVUFBTyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7UUFFRCwyQkFBTyxHQUFQLFVBQVEsS0FBSztZQUFiLGlCQXlCQztZQXhCQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbkIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakYsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM1RSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO29CQUM1QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQzs7UUFFRCwyQkFBTyxHQUFQLFVBQVEsS0FBSztZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUM7WUFDVCxDQUFDO1FBQ0gsQ0FBQztRQUVELHNCQUFJLGdDQUFTO2lCQUFiO2dCQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlHLENBQUM7OztXQUFBOztRQUVELDJCQUFPLEdBQVA7WUFBQSxpQkFtREM7WUFsREMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQztZQUNULENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkQsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksU0FBUyxHQUFHO3dCQUNkLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ2xFLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25DLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25ELENBQUM7b0JBQ0gsQ0FBQyxDQUFDO29CQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQVE7d0JBQzlCLE1BQU0sRUFBRSxLQUFLO3dCQUNiLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixPQUFPLEVBQUUsVUFBQyxJQUFJOzRCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUN0QyxVQUFVLENBQUM7Z0NBQ1QsU0FBUyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNULENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU07NEJBQzVCLElBQUksR0FBRyxHQUFHLDRCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDekIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkRBQTZELEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztnQ0FDekgsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOzRCQUMxQixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDZEQUE2RCxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDOUcsVUFBVSxDQUFDO29DQUNULFNBQVMsRUFBRSxDQUFDO2dDQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDVCxDQUFDO3dCQUNILENBQUM7d0JBQ0QsVUFBVSxFQUFFLFVBQVU7cUJBQ3ZCLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7O1FBRUQsMkJBQU8sR0FBUDtZQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQztvQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlHLENBQUU7Z0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFZixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FyTUEsQUFxTUMsSUFBQTtJQUtEO1FBU0Usd0JBQW9CLFFBQW1CO1lBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7WUFIL0IsYUFBUSxHQUFhLFNBQVMsQ0FBQztZQUMvQixTQUFJLEdBQWMsU0FBUyxDQUFDO1lBR2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztZQUU3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hGLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUMxQixHQUFHLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RixDQUFDOztRQUVELHNCQUFXLG1DQUFPO2lCQUFsQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN2QixDQUFDOzs7V0FBQTtRQUVELHNCQUFZLG9DQUFRO2lCQUFwQjtnQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztZQUNILENBQUM7OztXQUFBO1FBRUQsc0JBQVksa0NBQU07aUJBQWxCO2dCQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxNQUFNLENBQUMsbUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQU87d0JBQy9CLEtBQUssRUFBRSxJQUFJO3dCQUNYLFlBQVksRUFBRSxXQUFXLENBQUMsYUFBYSxFQUFFO3FCQUMxQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQzt3QkFDakMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDYixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOzRCQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dDQUNULFFBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixDQUFDOzRCQUNELEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSwwQkFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5RCxDQUFDO29CQUNILENBQUM7b0JBQ0QsTUFBTSxDQUFDLG1CQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFPO3dCQUM1QixLQUFLLEVBQUUsSUFBSTt3QkFDWCxZQUFZLEVBQUUsV0FBVyxDQUFDLGFBQWEsRUFBRTtxQkFDMUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDOzs7V0FBQTtRQUVNLCtCQUFNLEdBQWI7WUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7O1FBRUQsc0JBQVcsaUNBQUs7aUJBQWhCO2dCQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsQ0FBQzs7O1dBQUE7O1FBRUQsc0JBQVcsbUNBQU87aUJBQWxCO2dCQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUMsQ0FBQzs7O1dBQUE7O1FBRUQsc0JBQUkscUNBQVM7aUJBQWI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsQ0FBQzs7O1dBQUE7O1FBRUQsc0JBQUksZ0NBQUk7aUJBQVI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQzs7O1dBQUE7O1FBRUQsc0JBQUkscUNBQVM7aUJBQWI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ2pDLENBQUM7OztXQUFBOztRQUVNLGdDQUFPLEdBQWQ7WUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQzs7UUFFTSxnQ0FBTyxHQUFkO1lBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUsxQixDQUFDO1FBRU8sdUNBQWMsR0FBdEIsVUFBdUIsRUFBdUIsRUFBRSxhQUFzQjtZQUNwRSxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLE1BQU0sQ0FBQyxVQUFDLElBQVU7Z0JBQ2hCLElBQUksR0FBRywyQkFBYSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUdNLDRCQUFHLEdBQVYsVUFBVyxFQUF1QixFQUFFLGFBQXVCO1lBQTNELGlCQVdDO1lBVkMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixVQUFVLENBQUM7b0JBQ1QsRUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNULENBQUM7UUFDSCxDQUFDOztRQUVPLGtDQUFTLEdBQWpCO1lBQ0UsSUFBSSxJQUFJLEdBQUcsMkJBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckUsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsNEJBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFTyxtQ0FBVSxHQUFsQixVQUFtQixJQUFRLEVBQUUsT0FBc0I7WUFBdEIsdUJBQXNCLEdBQXRCLGNBQXNCO1lBQ2pELElBQUksSUFBSSxHQUFHLHFCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxDQUFDLENBQUMsd0JBQVUsQ0FBQyw4QkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksU0FBUyxHQUFHLDBCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxJQUFJLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RGLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDckcsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUMvQyxDQUFDO29CQUNELEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLDBCQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztZQUNILENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFHTSw4QkFBSyxHQUFaLFVBQWEsRUFBdUIsRUFBRSxhQUF1QjtZQUE3RCxpQkFnQkM7WUFmQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsVUFBVSxDQUFDO29CQUNULEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyRSxFQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsQ0FBQztZQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsMEJBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxJQUFJO2dCQUN6QyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWixDQUFDOztRQUVNLGdDQUFPLEdBQWQsVUFBZSxFQUF1QjtZQUNwQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUFZLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFTSw0QkFBRyxHQUFWLFVBQVcsSUFBUSxFQUFFLEVBQXFCLEVBQUUsS0FBd0I7WUFDbEUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWxDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRU4sSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ3BELEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxlQUFlLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7b0JBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztnQkFDbEQsQ0FBQztZQUNILENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUVELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLHdCQUFVLENBQUMsUUFBUTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1IsUUFBUTtZQUVWLENBQUM7WUFDRCxJQUFJLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVE7b0JBQ2hCLE1BQU0sRUFBRSxNQUFNO29CQUNkLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDMUIsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLE9BQU8sRUFBRSxVQUFDLElBQUk7d0JBQ1osSUFBSSxDQUFDOzRCQUNILElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDZixDQUFFO3dCQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNULENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU07d0JBQ3pCLElBQUksR0FBRyxHQUFHLDRCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3RELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxVQUFVLEVBQUUsVUFBVTtpQkFDdkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBRTtZQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztRQUNILENBQUM7O1FBRU0sK0JBQU0sR0FBYixVQUFjLElBQVEsRUFBRSxFQUFxQixFQUFFLEtBQXdCO1lBQXZFLGlCQWdDQztZQS9CQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBTztvQkFDZixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsT0FBTyxFQUFFLFVBQUMsSUFBSTt3QkFDWixJQUFJLENBQUM7NEJBQ0gsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNmLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDYixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ1QsQ0FBQztvQkFDSCxDQUFDO29CQUNELEtBQUssRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTTt3QkFDekIsSUFBSSxHQUFHLEdBQUcsNEJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RCLEtBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDVixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2IsQ0FBQztvQkFDSCxDQUFDO29CQUNELFVBQVUsRUFBRSxVQUFVO2lCQUN2QixDQUFDLENBQUM7WUFDTCxDQUFFO1lBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDO1FBQ0gsQ0FBQzs7UUFDSCxxQkFBQztJQUFELENBL1JBLEFBK1JDLElBQUE7SUEvUlksNEJBQWMsaUJBK1IxQixDQUFBO0lBQUEsQ0FBQztJQUtGO1FBSUUsd0JBQVksV0FBMEI7WUFIOUIsY0FBUyxHQUFHLENBQUMsQ0FBQztZQUNkLGdCQUFXLEdBQWtCLFNBQVMsQ0FBQztZQUc3QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNqQyxDQUFDOztRQUVELHNCQUFXLG9DQUFRO2lCQUFuQjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixDQUFDOzs7V0FBQTtRQUVNLCtCQUFNLEdBQWI7WUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7O1FBRU0sa0NBQVMsR0FBaEI7WUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7O1FBRUQsc0JBQVcsc0NBQVU7aUJBQXJCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFCLENBQUM7OztXQUFBOztRQUVNLG1DQUFVLEdBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7O1FBRU0sZ0NBQU8sR0FBZDtZQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFN0IsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtJQUFBLENBQUM7SUFTRjtRQUFBO1lBQ1UsUUFBRyxHQUFrQixNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdEQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQTZDcEMsQ0FBQztRQTVDUSxxQ0FBTSxHQUFiLFVBQWMsT0FBWSxFQUFFLFNBQWU7WUFDekMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ25CLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNwQixTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUM7WUFDN0MsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLFFBQVEsR0FBRztvQkFDVCxJQUFJLEVBQUUsSUFBSTtvQkFDVixTQUFTLEVBQUUsU0FBUztpQkFDckIsQ0FBQztZQUNKLENBQUM7WUFDRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlGLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQztRQUVNLHNDQUFPLEdBQWQsVUFBZSxNQUFpQjtZQUFFLGlCQUFzQztpQkFBdEMsV0FBc0MsQ0FBdEMsc0JBQXNDLENBQXRDLElBQXNDO2dCQUF0QyxnQ0FBc0M7O1lBQ3RFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTTtnQkFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVGLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUMvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtJQUVVLDhCQUFnQixHQUFvQixJQUFJLG9CQUFvQixFQUFFLENBQUM7SUFFMUUscUJBQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUU7UUFDbEMsTUFBTSxDQUFDLDhCQUFnQixDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxPQUFPLEdBQUcsNkJBQTZCLENBQUM7SUFDNUMsSUFBSSxTQUFTLEdBQUcsK0JBQStCLENBQUM7SUFDaEQsSUFBSSxVQUFVLEdBQUcsMkJBQTJCLENBQUM7SUFTN0MsYUFBb0IsT0FBa0I7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLE9BQU8sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsOEJBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksT0FBTyxHQUFHLFVBQUMsSUFBVTtZQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDO29CQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUU7Z0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDYixHQUFHLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQztZQUNELDhCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUE7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFqQmUsaUJBQUcsTUFpQmxCLENBQUE7SUFFRCwwQkFBMEIsT0FBVyxFQUFFLE1BQWdGO1FBQ3JILEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sVUFBVSxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELG1CQUFtQixFQUFFLEVBQUUsSUFBSTtZQUN6QixNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQztRQUFBLENBQUM7UUFDRjtZQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUM7b0JBQ0gsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0gsQ0FBRTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0QsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QixHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLE9BQU8sR0FBRyxVQUFDLElBQUk7Z0JBQ25CLFNBQVMsQ0FBQyxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLFVBQUMsSUFBSTtnQkFDakIsU0FBUyxDQUFDLHNCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELDBCQUEwQixPQUFXO1FBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFckQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLHdCQUFVLENBQUMsd0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLE9BQU8sR0FBRztnQkFDUixNQUFNLEVBQUUsTUFBTTthQUNmLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLElBQUksR0FBRyx3QkFBVSxDQUFDLHdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsd0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sT0FBTyxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDO1FBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxhQUFvQixPQUFXO1FBQzdCLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyx3QkFBVSxDQUFDLHdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQVUsRUFBRSxPQUFPLEVBQUUsS0FBSztnQkFDbkQsR0FBRyxDQUFDO29CQUNGLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksOEJBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsd0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSwwQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEcsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLDJCQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pFLElBQUksTUFBTSxHQUFHLDhCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sR0FBRyxVQUFDLElBQUk7WUFDakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQztvQkFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztZQUNILENBQUM7WUFDRCw4QkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsVUFBQyxHQUFHO1lBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQztvQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztZQUNILENBQUM7WUFDRCw4QkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBdENlLGlCQUFHLE1Bc0NsQixDQUFBO0lBS0QsYUFBb0IsT0FBVztRQUM3QixPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssd0JBQVUsQ0FBQyx3QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUs7Z0JBQ25ELEdBQUcsQ0FBQztvQkFDRixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLDhCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsU0FBUyxHQUFHLHdCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksMEJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSwyQkFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RSxJQUFJLE1BQU0sR0FBRyw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU87WUFDakIsSUFBSSxPQUFPLEdBQUcsVUFBQyxJQUFJO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDO3dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixHQUFHLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM1RCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsOEJBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFHLFVBQUMsR0FBRztnQkFDZCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDO3dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixHQUFHLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO2dCQUNILENBQUM7Z0JBQ0QsOEJBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXpDZSxpQkFBRyxNQXlDbEIsQ0FBQTtJQUVELGVBQXNCLE9BQWtCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksTUFBTSxHQUFnQiw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsOEJBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBZmUsbUJBQUssUUFlcEIsQ0FBQTtBQUVILENBQUMsRUFya0NNLGFBQWEsS0FBYixhQUFhLFFBcWtDbkIiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBLaW5kVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJMaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJFbmRwb2ludFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRXZlbnRcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJOYW1lc3BhY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiTm9kZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZUNsYWltXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9kXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcIlJlcGxpY2F0aW9uQ29udHJvbGxlclwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVwbGljYVNldFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVzb3VyY2VRdW90YVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIk9BdXRoQ2xpZW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VjcmV0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcIlNlcnZpY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZXJ2aWNlQWNjb3VudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJDb25maWdNYXBcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcIkluZ3Jlc3NcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiVGVtcGxhdGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcIlJvdXRlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQnVpbGRDb25maWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcIkJ1aWxkXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJEZXBsb3ltZW50Q29uZmlnXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcIkRlcGxveW1lbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1cIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1UYWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9saWN5XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2xpY3lCaW5kaW5nXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcIlByb2plY3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlQmluZGluZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGFlbW9uU2V0XCI7IH1cbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwibGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXNldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcInJlc291cmNlcXVvdGFzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VjcmV0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJjb25maWdtYXBzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTkdSRVNTRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbmdyZXNzZXNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXRhZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGFlbW9uc2V0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgRXh0ZW5zaW9uVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGV4dGVuc2lvbnMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuREFFTU9OU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTkdSRVNTRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuSU1BR0VTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U09wdGlvbnMge1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xuICAgIGFwaVZlcnNpb24/OiBzdHJpbmc7XG4gICAgbGFiZWxTZWxlY3Rvcj86IExhYmVsTWFwO1xuICAgIG9iamVjdD86IGFueTtcbiAgICBzdWNjZXNzPzogKG9ianM6YW55W10pID0+IHZvaWQ7XG4gICAgZXJyb3I/OiAoZXJyOmFueSkgPT4gdm9pZDtcbiAgICB1cmxGdW5jdGlvbj86IChvcHRpb25zOks4U09wdGlvbnMpID0+IHN0cmluZztcbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSU5JVCgpOnN0cmluZyB7IHJldHVybiBcIklOSVRcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9O1xuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBMYWJlbE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTogc3RyaW5nO1xuICB9XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb24ge1xuICAgIHdzVVJMOnN0cmluZztcbiAgICByZXN0VVJMOnN0cmluZztcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3QoKTtcbiAgICBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTp2b2lkO1xuICAgIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQ7XG4gICAgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCk6dm9pZDtcbiAgICBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZ2V0S2V5KCk6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNDbGllbnRGYWN0b3J5IHtcbiAgICBjcmVhdGUoa2luZDphbnksIG5hbWVzcGFjZT86IHN0cmluZyk6Q29sbGVjdGlvbjtcbiAgICBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPik6dm9pZDtcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxuXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcbiAgZXhwb3J0IHZhciBpc09wZW5TaGlmdCA9IGZhbHNlO1xuXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1BSRUZJWCA9ICdhcGlzJztcblxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIEs4U19FWFRfVkVSU0lPTiA9ICd2MWJldGExJztcbiAgZXhwb3J0IHZhciBLOFNfRVhURU5TSU9OUyA9ICdleHRlbnNpb25zJztcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcblxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGRlY2xhcmUgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeTtcblxuICBleHBvcnQgZnVuY3Rpb24gYXBpUHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBPU19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZXh0UHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfRVhUX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZWQoa2luZDpzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEs4U19FWFRfUFJFRklYLCBLOFNfRVhURU5TSU9OUywgSzhTX0VYVF9WRVJTSU9OKTsgXG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaUZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSB7XG4gICAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uc29tZShFeHRlbnNpb25UeXBlcy5leHRlbnNpb25zLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfRVhUX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uc29tZShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLnNvbWUoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCk7XG4gICAgICBjYXNlIEs4U19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfRVhUX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgc2luZ2xlICdraW5kJyBvZiBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9LaW5kTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICByZXR1cm4gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTElTVDogcmV0dXJuIEtpbmRUeXBlcy5MSVNUO1xuICAgICAgY2FzZSBXYXRjaFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBLaW5kVHlwZXMuRU5EUE9JTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5FVkVOVFM6ICByZXR1cm4gS2luZFR5cGVzLkVWRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBLaW5kVHlwZXMuTkFNRVNQQUNFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTk9ERVM6ICByZXR1cm4gS2luZFR5cGVzLk5PREVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPRFM6ICByZXR1cm4gS2luZFR5cGVzLlBPRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBX1NFVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBLaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRUNSRVRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFUzogIHJldHVybiBLaW5kVHlwZXMuU0VSVklDRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIEtpbmRUeXBlcy5DT05GSUdfTUFQUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTkdSRVNTRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBLaW5kVHlwZXMuVEVNUExBVEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST1VURVM6ICByZXR1cm4gS2luZFR5cGVzLlJPVVRFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERTOiAgcmV0dXJuIEtpbmRUeXBlcy5CVUlMRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ0lFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ1lfQklORElOR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIEtpbmRUeXBlcy5QUk9KRUNUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRVM6ICByZXR1cm4gS2luZFR5cGVzLlJPTEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5EQUVNT05TRVRTOyBcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbGxlY3Rpb24ga2luZCBvZiBhbiBvYmplY3QgZnJvbSB0aGUgc2luZ3VsYXIga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvQ29sbGVjdGlvbk5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAga2luZCA9IGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLaW5kVHlwZXMuTElTVDogcmV0dXJuIFdhdGNoVHlwZXMuTElTVDtcbiAgICAgIGNhc2UgS2luZFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkVORFBPSU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5FVkVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5FVkVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBXYXRjaFR5cGVzLk5BTUVTUEFDRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTk9ERVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5OT0RFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPRFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0RTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VDUkVUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRVJWSUNFUzogIHJldHVybiBXYXRjaFR5cGVzLlNFUlZJQ0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQ09ORklHX01BUFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU5HUkVTU0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBXYXRjaFR5cGVzLlRFTVBMQVRFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST1VURVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST1VURVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQlVJTERTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNJRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUFJPSkVDVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBXYXRjaFR5cGVzLlJPTEVfQklORElOR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST0xFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREFFTU9OU0VUUzsgXG4gICAgICBkZWZhdWx0OiByZXR1cm4ga2luZDtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICB2YXIgcmlnaHRVSUQgPSBnZXRVSUQocmlnaHQpO1xuICAgIGlmICghbGVmdFVJRCAmJiAhcmlnaHRVSUQpIHtcbiAgICAgIHJldHVybiBhbmd1bGFyLnRvSnNvbihsZWZ0KSA9PT0gYW5ndWxhci50b0pzb24ocmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdFVJRCA9PT0gcmlnaHRVSUQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogS3ViZXJuZXRlcyBvYmplY3QgaGVscGVyc1xuICAgKlxuICAgKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2Yga3ViZXJuZXRlcyBvYmplY3RzIHN1aXRhYmxlIGZvciBwb3N0aW5nIGEgYnVuY2ggb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoLi4ub2JqZWN0czphbnlbXSkge1xuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCksXG4gICAgICBvYmplY3RzOiBbXVxuICAgIH1cbiAgICBfLmZvckVhY2gob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIF8uZm9yRWFjaChvYmplY3QsIChvKSA9PiB7XG4gICAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb2JqZWN0IHN1aXRhYmxlIGZvciBkZWxldGUvZGVsXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhbGxvd09iamVjdChuYW1lOnN0cmluZywga2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoa2luZCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHM6QXJyYXk8YW55PiwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgIHZhciBtYXRjaGVzID0gKDxhbnk+XykubWF0Y2hlcyhsYWJlbFNlbGVjdG9yKTtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoZ2V0TGFiZWxzKG9iamVjdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqOmFueSwgbmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIW9iai5raW5kIHx8ICFuYW1lc3BhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydhcGlWZXJzaW9uJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBqZW5raW5zaGlmdCBpbiB2YW5pbGxhIGs4cywgbGV0J3MgcG9sbCBidWlsZCBjb25maWdzIGJ5IGRlZmF1bHRcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0FkZFBvbGxlZFR5cGVzJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgS3ViZXJuZXRlc0FQSS5wb2xsaW5nT25seS5wdXNoKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTKTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB3ZSdyZSBydW5uaW5nIGFnYWluc3Qgb3BlbnNoaWZ0IG9yIG5vdFxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FQSVByb3ZpZGVySW5pdCcsXG4gICAgZGVwZW5kczogWydoYXd0aW8tb2F1dGgnLCAnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgaXNPcGVuU2hpZnQgPSBmYWxzZTtcbiAgICAgIC8vIHByb2JlIC9vYXBpL3YxIGFzIGl0J3MgaGFzIGFsbCB0aGUgb3BlbnNoaWZ0IGV4dGVuc2lvbnNcbiAgICAgIHZhciB0ZXN0VVJMID0gbmV3IFVSSShLdWJlcm5ldGVzQVBJLm1hc3RlclVybCkuc2VnbWVudCgnb2FwaS92MScpLnRvU3RyaW5nKCk7XG4gICAgICAkLmFqYXgoPGFueT57XG4gICAgICAgIHVybDogdGVzdFVSTCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcbiAgICAgICAgICBsb2cuaW5mbyhcIkJhY2tlbmQgaXMgYW4gb3BlbnNoaWZ0IGluc3RhbmNlXCIpO1xuICAgICAgICAgIGlzT3BlblNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgIGxvZy5pbmZvKFwiRXJyb3IgcHJvYmluZyBcIiArIHRlc3RVUkwgKyBcIiBhc3N1bWluZyBiYWNrZW5kIGlzIG5vdCBhbiBvcGVuc2hpZnQgaW5zdGFuY2UuICBFcnJvciBkZXRhaWxzOiBzdGF0dXM6IFwiLCB0ZXh0U3RhdHVzLCBcIiBlcnJvclRocm93bjogXCIsIGVycm9yVGhyb3duLCBcIiBqcVhIUiBpbnN0YW5jZTogXCIsIGpxWEhSKTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cblx0aGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG5cdFx0bmFtZTogJ0ZldGNoQ29uZmlnJyxcblx0XHR0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRsb2cuZGVidWcoXCJGZXRjaGVkIG9wZW5zaGlmdCBjb25maWc6IFwiLCB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXSk7XG5cdFx0XHRcdFx0bG9nLmRlYnVnKFwiRmV0Y2hlZCBrZXljbG9hayBjb25maWc6IFwiLCB3aW5kb3dbJ0tleWNsb2FrQ29uZmlnJ10pO1xuICAgICAgICAgIE9TT0F1dGhDb25maWcgPSBfLmdldCh3aW5kb3csICdPUEVOU0hJRlRfQ09ORklHLm9wZW5zaGlmdCcpO1xuICAgICAgICAgIEdvb2dsZU9BdXRoQ29uZmlnID0gXy5nZXQod2luZG93LCAnT1BFTlNISUZUX0NPTkZJRy5nb29nbGUnKTtcblx0XHRcdFx0XHRuZXh0KCk7XG5cdFx0XHRcdH0pXG5cdFx0fVxuXHR9LCB0cnVlKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuXHRcdGRlcGVuZHM6IFsnRmV0Y2hDb25maWcnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuXHRcdFx0dmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuXHRcdFx0bG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuXHRcdFx0dmFyIG1hc3RlcjpzdHJpbmcgPSBjb25maWcubWFzdGVyX3VyaTtcblx0XHRcdGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcblx0XHRcdFx0dmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xuXHRcdFx0XHRpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcblx0XHRcdFx0XHRtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hc3RlciA9IG1hc3RlclVyaS50b1N0cmluZygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG5cdFx0XHRcdGlmICghbWFzdGVyKSB7XG5cdFx0XHRcdFx0dmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG5cdFx0XHRcdFx0aWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcblx0XHRcdFx0XHRcdHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcblx0XHRcdFx0XHRcdHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWR4ICs9IDM7XG5cdFx0XHRcdFx0XHRcdFx0aWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpZHggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBXZSdsbCBqdXN0IGdyYWIgdGhlIFVSSSBmb3IgdGhlIGRvY3VtZW50IGhlcmUgaW4gY2FzZSB3ZSBuZWVkIGl0XG5cdFx0XHR2YXIgZG9jdW1lbnRVUkkgPSBuZXcgVVJJKCkucGF0aChIYXd0aW9Db3JlLmRvY3VtZW50QmFzZSgpKTtcblx0XHRcdGlmICghbWFzdGVyIHx8IG1hc3RlciA9PT0gXCIvXCIpIHtcblx0XHRcdFx0Ly8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxuXHRcdFx0XHQvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcblx0XHRcdFx0Ly8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcblx0XHRcdFx0bG9nLmluZm8oXCJtYXN0ZXJfdXJsIHVuc2V0IG9yIHNldCB0byAnLycsIGFzc3VtaW5nIEFQSSBzZXJ2ZXIgaXMgYXQgL1wiKTtcblx0XHRcdFx0bWFzdGVyID0gZG9jdW1lbnRVUkkucXVlcnkoXCJcIikudG9TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmIChtYXN0ZXIgPT09IFwiazhzXCIpIHtcblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgdGhlIGJ1aWx0LWluIGt1aXNwIHByb3h5IHRvIGFjY2VzcyB0aGUgQVBJIHNlcnZlclxuXHRcdFx0XHRsb2cuaW5mbyhcIm1hc3Rlcl91cmwgc2V0IHRvICdrOHMnLCBhc3N1bWluZyBwcm94eSBpcyBiZWluZyB1c2VkXCIpO1xuXHRcdFx0XHRtYXN0ZXIgPSBkb2N1bWVudFVSSS5xdWVyeShcIlwiKS5zZWdtZW50KG1hc3RlcikudG9TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGxvZy5pbmZvKFwiVXNpbmcga3ViZXJuZXRlcyBBUEkgVVJMOiBcIiwgbWFzdGVyKTtcblx0XHRcdEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuXHRcdFx0bmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKHBsdWdpbk5hbWUpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBjbGllbnRzIHRvIGFkZCBvdGhlciB0eXBlcyB0byBmb3JjZSBwb2xsaW5nIHVuZGVyIHdoYXRldmVyIGNpcmN1bXN0YW5jZXNcbiAgZXhwb3J0IHZhciBwb2xsaW5nT25seSA9IFtXYXRjaFR5cGVzLlBST0pFQ1RTLCBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDc1LCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBsb2c7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9raW5kOnN0cmluZywgcHJpdmF0ZSBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImNoYW5nZWQ6XCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLklOSVQsIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImluaXRpYWxpemVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuSU5JVCwgdGhpcy5fb2JqZWN0cyk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9iamVjdHMob2JqczphbnlbXSkge1xuICAgICAgdGhpcy5fb2JqZWN0cy5sZW5ndGggPSAwO1xuICAgICAgXy5mb3JFYWNoKG9ianMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKCFvYmoua2luZCkge1xuICAgICAgICAgIG9iai5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLnNvbWUodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lZEl0ZW0obmFtZTpzdHJpbmcpIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgb2JqZWN0cyBmcm9tIG90aGVyIG5hbWVzcGFjZXMgdGhhdCBjb3VsZCBiZSByZXR1cm5lZFxuICAgIHByaXZhdGUgYmVsb25ncyhvYmplY3QpIHtcbiAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSAmJiBnZXROYW1lc3BhY2Uob2JqZWN0KSAhPT0gdGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgIG9iamVjdC5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKF8uc29tZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmplY3Qua2luZCkge1xuICAgICAgICBvYmplY3Qua2luZCA9IHRvS2luZE5hbWUodGhpcy5raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICghXy5zb21lKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyBcbiAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IHRoaXMuaGFuZGxlci5saXN0Lm9iamVjdHM7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcImZldGNoZWQgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogXy5jbG9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFuZGxlci5saXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJwb2xsaW5nXCIpO1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXJyb3IgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5pbmZvKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gRmFpbGVkIHRvIHBvbGwgb2JqZWN0cywgdXNlciBpcyBub3QgYXV0aG9yaXplZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIE91dCBvZiByZXRyaWVzLCBzdG9wcGluZyBwb2xsaW5nLCBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5lcnJvcikge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBFcnJvciBwb2xsaW5nLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdG9wKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkaXNjb25uZWN0aW5nXCIpO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBjYW5jZWxsaW5nIHBvbGxpbmdcIik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRDYW5jZWwpO1xuICAgICAgICB0aGlzLnRDYW5jZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkZXN0cm95ZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIG1lc3NhZ2VMb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KCdLdWJlcm5ldGVzQVBJLldTSGFuZGxlcicpOyBcbiAgICAgIHRoaXMubWVzc2FnZUxvZyA9IExvZ2dlci5nZXQoJ0t1YmVybmV0ZXNBUEkuV1NIYW5kZXIubWVzc2FnZXMnKTtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdCB8fCA8T2JqZWN0TGlzdD4geyBvYmplY3RzOiBbXSB9O1xuICAgIH1cblxuICAgIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYub3B0aW9ucy5lcnJvcjtcbiAgICB9XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmLmtpbmQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlciwgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHZhciBldnQgPSBrZXkucmVwbGFjZSgnb24nLCAnJyk7XG4gICAgICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJBZGRpbmcgZXZlbnQgaGFuZGxlciBmb3IgJ1wiICsgZXZ0ICsgXCInIHVzaW5nICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKGV2dCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMb2cuZGVidWcoXCJyZWNlaXZlZCB3ZWJzb2NrZXQgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgICBzZWxmW2tleV0oZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZENsb3NlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQgICYmIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBkZXN0cm95ZWQgYnV0IHN0aWxsIHJlY2VpdmluZyBtZXNzYWdlcywgY2xvc2luZyB3ZWJzb2NrZXQsIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDbG9zaW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJTaG91bGQgYmUgY2xvc2VkIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlY2VpdmVkIG9wZW4gZXZlbnQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgIHRoaXMuY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZWNlaXZlZCBjbG9zZSBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBkZXN0cm95ZWQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiByZWNlaXZlZCBhbiBlcnJvcjogXCIsIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICBpZiAoXy5zb21lKHBvbGxpbmdPbmx5LCAoa2luZCkgPT4ga2luZCA9PT0gdGhpcy5zZWxmLmtpbmQpKSB7XG4gICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIlVzaW5nIHBvbGxpbmcgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgd3NVUkwgPSB0aGlzLnNlbGYud3NVUkw7XG4gICAgICAgICAgICBpZiAod3NVUkwpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHdzVVJMKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB0aGlzLnNvY2tldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2cuaW5mbyhcIk5vIHdzVVJMIGZvciBraW5kOiBcIiArIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9LCBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIkZhaWxlZCB0byBmZXRjaCBkYXRhIHdoaWxlIGNvbm5lY3RpbmcgdG8gYmFja2VuZCBmb3IgdHlwZTogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiwgdXNlciBpcyBub3QgYXV0aG9yaXplZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0Lm9iamVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDbG9zaW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ2xvc2UgY2FsbGVkIG9uIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9sbGVyKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRGVzdHJveWluZyBwb2xsZXIgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgIHRoaXMucG9sbGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIGltcGxlbWVudHMgQ29sbGVjdGlvbiB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX2FwaVZlcnNpb246c3RyaW5nO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbGlzdDpPYmplY3RMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gX29wdGlvbnMua2luZDtcbiAgICAgIHRoaXMuX2FwaVZlcnNpb24gPSBfb3B0aW9ucy5hcGlWZXJzaW9uO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gX29wdGlvbnMubmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gdGhpcy5nZXRQcmVmaXgoKTtcblxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3QoX29wdGlvbnMua2luZCwgX29wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgICBsb2cuZGVidWcoXCJjcmVhdGluZyBuZXcgY29sbGVjdGlvbiBmb3JcIiwgdGhpcy5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLm5hbWVzcGFjZSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgb3B0aW9ucygpOks4U09wdGlvbnMge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3Jlc3RVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoYW5zd2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVVJJKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF93c1VybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwoYW5zd2VyKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKTtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gQ29yZS53aW5kb3dMb2NhdGlvbigpO1xuICAgICAgICBpZiAobG9jYXRpb24gJiYgdXJsLmluZGV4T2YoXCI6Ly9cIikgPCAwKSB7XG4gICAgICAgICAgdmFyIGhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgICAgaWYgKGhvc3RuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG4gICAgICAgICAgICBpZiAocG9ydCkge1xuICAgICAgICAgICAgICBob3N0bmFtZSArPSBcIjpcIiArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4oaG9zdG5hbWUsIG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKHVybCkucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgd3NVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3dzVXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVzdFVSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fcmVzdFVybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBnZXQgbmFtZXNwYWNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgICB9O1xuXG4gICAgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9O1xuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMuY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5oYW5kbGVycy5kZXN0cm95KCk7XG4gICAgICAvKlxuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgICAgKi9cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExhYmVsRmlsdGVyKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgICBsb2cuZGVidWcoXCJBZGRpbmcgbGFiZWwgZmlsdGVyOiBcIiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB2YXIgY2JPbGQgPSBjYjtcbiAgICAgIHJldHVybiAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgICBkYXRhID0gZmlsdGVyQnlMYWJlbChkYXRhLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgY2JPbGQoZGF0YSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uY2UoV2F0Y2hBY3Rpb25zLklOSVQsIGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGdldFByZWZpeCgpIHtcbiAgICAgIHZhciBwcmVmID0gcHJlZml4Rm9yS2luZCh0aGlzLl9raW5kKTtcbiAgICAgIGlmICghcHJlZikge1xuICAgICAgICBpZiAodGhpcy5fYXBpVmVyc2lvbiAmJiBfLnN0YXJ0c1dpdGgodGhpcy5fYXBpVmVyc2lvbiwgJ2V4dGVuc2lvbnMnKSkge1xuICAgICAgICAgIHByZWYgPSBVcmxIZWxwZXJzLmpvaW4oSzhTX0VYVF9QUkVGSVgsIHRoaXMuX2FwaVZlcnNpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICAvLyBsZXRzIHRydXN0IHRoZSB1cmwgdG8gYmUgY29ycmVjdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShpdGVtLmtpbmQpKSkge1xuICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoaXRlbSkgfHwgdGhpcy5fbmFtZXNwYWNlO1xuICAgICAgICAgIHZhciBwcmVmaXggPSB0aGlzLmdldFByZWZpeCgpO1xuICAgICAgICAgIHZhciBraW5kID0gdGhpcy5fa2luZDtcbiAgICAgICAgICBpZiAoIUt1YmVybmV0ZXNBUEkuaXNPcGVuU2hpZnQgJiYgKGtpbmQgPT09IFwiYnVpbGRjb25maWdzXCIgfHwga2luZCA9PT0gXCJCdWlsZENvbmZpZ1wiKSkge1xuICAgICAgICAgICAgcHJlZml4ID0gVXJsSGVscGVycy5qb2luKFwiL2FwaS92MS9wcm94eS9uYW1lc3BhY2VzXCIsIG5hbWVzcGFjZSwgXCIvc2VydmljZXMvamVua2luc2hpZnQ6ODAvXCIsIHByZWZpeCk7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJVc2luZyBidWlsZGNvbmZpZ3MgVVJMIG92ZXJyaWRlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeCwgJ25hbWVzcGFjZXMnLCBuYW1lc3BhY2UsIGtpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZCB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcInBhc3NpbmcgZXhpc3Rpbmcgb2JqZWN0czpcIiwgdGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJhZGRpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub24oV2F0Y2hBY3Rpb25zLkFOWSwgKGRhdGEpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJnb3QgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgIGNiKGRhdGEpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKSB7XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcInJlbW92aW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciBtZXRob2QgPSAnUFVUJztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXRoaXMubGlzdC5oYXNOYW1lZEl0ZW0oaXRlbSkpIHtcbiAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JqZWN0XG4gICAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVwZGF0aW5nIGFuIGV4aXN0aW5nIG9iamVjdFxuICAgICAgICB2YXIgcmVzb3VyY2VWZXJzaW9uID0gaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgIGlmICghcmVzb3VyY2VWZXJzaW9uKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0TmFtZWRJdGVtKGdldE5hbWUoaXRlbSkpO1xuICAgICAgICAgIHJlc291cmNlVmVyc2lvbiA9IGN1cnJlbnQubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICAgIGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uID0gcmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBDdXN0b20gY2hlY2tzIGZvciBzcGVjaWZpYyBjYXNlc1xuICAgICAgc3dpdGNoICh0aGlzLl9raW5kKSB7XG4gICAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFUzpcbiAgICAgICAgICBpZiAoaXRlbS5zcGVjLmNsdXN0ZXJJUCA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnNwZWMuY2x1c3RlcklQO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT4ge1xuICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oaXRlbSksXG4gICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QuZGVsZXRlZChpdGVtKTtcbiAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PntcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgLy8gZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShvcHRpb25zOiBhbnksIG5hbWVzcGFjZT86IGFueSk6Q29sbGVjdGlvbiB7XG4gICAgICB2YXIga2luZCA9IG9wdGlvbnM7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIGtpbmQgPSBvcHRpb25zLmtpbmQ7XG4gICAgICAgIG5hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG5hbWVzcGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vcHRpb25zID0ge1xuICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmICh0aGlzLl9jbGllbnRzW2tleV0pIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHVybmluZyBleGlzdGluZyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IENsaWVudEluc3RhbmNlKG5ldyBDb2xsZWN0aW9uSW1wbChfb3B0aW9ucykpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmICh0aGlzLl9jbGllbnRzW2tleV0pIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGMucmVtb3ZlUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVtb3ZlZCByZWZlcmVuY2UgdG8gY2xpZW50IHdpdGgga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGMucmVmQ291bnQpO1xuICAgICAgICBpZiAoYy5kaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLl9jbGllbnRzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3RvcnkgPSBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKTtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIEs4U0NsaWVudEZhY3Rvcnk7XG4gIH0pO1xuXG4gIHZhciBOT19LSU5EID0gXCJObyBraW5kIGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVCA9IFwiTm8gb2JqZWN0IGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcblxuICAvKlxuICAgKiBTdGF0aWMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgazhzIG9iajNjdHNcbiAgICovXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGE6YW55W10pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9XG4gICAgY2xpZW50LmdldChzdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnM6YW55LCBhY3Rpb246KG9iamVjdDphbnksIHN1Y2Nlc3M6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcjooZXJyOmFueSkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICghb3B0aW9ucy5vYmplY3Qub2JqZWN0cykge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUUztcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHt9O1xuICAgIHZhciBvYmplY3RzID0gXy5jbG9uZURlZXAob3B0aW9ucy5vYmplY3Qub2JqZWN0cyk7XG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9nLmRlYnVnKFwicHJvY2Vzc2VkIGFsbCBvYmplY3RzLCByZXR1cm5pbmcgc3RhdHVzXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhhbnN3ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgZ2V0TmFtZShvYmplY3QpKTtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGFjdGlvbihvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zOmFueSkge1xuICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAvLyBsZXQncyB0cnkgYW5kIHN1cHBvcnQgYWxzbyBqdXN0IHN1cHBseWluZyBrOHMgb2JqZWN0cyBkaXJlY3RseVxuICAgIGlmIChvcHRpb25zLm1ldGFkYXRhIHx8IGdldEtpbmQob3B0aW9ucykgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgdmFyIG9iamVjdCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICAgIGlmIChvYmplY3Qub2JqZWN0cykge1xuICAgICAgICBvcHRpb25zLmtpbmQgPSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5raW5kKSB7XG4gICAgICBpZiAob3B0aW9ucy5raW5kKSB7XG4gICAgICAgIG9wdGlvbnMub2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKG9wdGlvbnMua2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2cuZGVidWcoXCJPcHRpb25zIG9iamVjdCBub3JtYWxpemVkOiBcIiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVsKG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBkZWxldGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIGRlbCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgY2xpZW50LmdldCgob2JqZWN0cykgPT4ge1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgY2xpZW50LnB1dChvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH0pO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2F0Y2gob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSA8Q29sbGVjdGlvbj4gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIGhhbmRsZSA9IGNsaWVudC53YXRjaChvcHRpb25zLnN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgdmFyIHNlbGYgPSB7XG4gICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgZGlzY29ubmVjdDogKCkgPT4ge1xuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koc2VsZi5jbGllbnQsIHNlbGYuaGFuZGxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
