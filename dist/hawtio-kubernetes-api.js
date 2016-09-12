

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
                if (!master || master === "/") {
                    KubernetesAPI.log.info("master_url unset or set to '/', assuming API server is at /");
                    var href = location.href;
                    if (href) {
                        master = new URI(href).query("").path("").toString();
                    }
                }
                if (master === "k8s") {
                    KubernetesAPI.log.info("master_url set to 'k8s', assuming proxy is being used");
                    var href = location.href;
                    master = new URI(href).query("").path(master).toString();
                }
                KubernetesAPI.log.info("Using kubernetes API URL: ", master);
                KubernetesAPI.masterUrl = master;
                next();
            })
                .fail(function (response) {
                KubernetesAPI.log.debug("Error fetching OAUTH config: ", response);
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
            if (!object.kind) {
                object.kind = KubernetesAPI.toKindName(this.kind);
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
            if (!object.kind) {
                object.kind = KubernetesAPI.toKindName(this.kind);
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
            _.forOwn(self, function (value, key) {
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
        WSHandler.prototype.shouldClose = function (event) {
            if (this.destroyed && this.socket.readyState === WebSocket.OPEN) {
                log.debug("Connection destroyed but still receiving messages, closing websocket");
                try {
                    log.debug("Closing websocket for kind: ", this.self.kind);
                    this.socket.close();
                    log.debug("Close called on websocket for kind: ", this.self.kind);
                }
                catch (err) {
                }
                return true;
            }
            return false;
        };
        WSHandler.prototype.onmessage = function (event) {
            if (this.shouldClose(event)) {
                return;
            }
            var data = JSON.parse(event.data);
            var eventType = data.type.toLowerCase();
            this._list[eventType](data.object);
        };
        ;
        WSHandler.prototype.onopen = function (event) {
            if (this.shouldClose(event)) {
                return;
            }
            this.retries = 0;
            this.connectTime = new Date().getTime();
            this.log.debug("Connected: ", event);
        };
        ;
        WSHandler.prototype.onclose = function (event) {
            var _this = this;
            if (this.destroyed) {
                log.debug("websocket for kind: ", this.self.kind, " destroyed: ", event);
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
            log.debug("websocket for kind: ", this.self.kind, " received an error: ", event);
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
                            if (jqXHR.status === 403) {
                                log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, ", user is not authorized");
                                _this._list.objects = [];
                            }
                            else {
                                log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, " error: ", err);
                                doConnect();
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
                    log.debug("Closing websocket for kind: ", this.self.kind);
                    this.socket.close();
                    log.debug("Close called on websocket for kind: ", this.self.kind);
                }
                catch (err) {
                }
            }
            if (this.poller) {
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
                        prefix = UrlHelpers.join("/api/v1/proxy/namespaces/default/services/jenkinshift:80/", prefix);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0FnT25CO0FBaE9ELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3BDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDQyxzQkFBa0IsaUJBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRCxzQkFBa0IsdUJBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxzQkFBa0Isa0JBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNu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T0FBa0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLE9BQU8sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQWdCLDhCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxHQUFHO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRTtnQkFDViw4QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsQ0FBQztTQUNGLENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFmZSxtQkFBSyxRQWVwQixDQUFBO0FBRUgsQ0FBQyxFQTFqQ00sYUFBYSxLQUFiLGFBQWEsUUEwakNuQiIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy9kZWZzIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEtpbmRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTElTVCgpOnN0cmluZyB7IHJldHVybiBcIkxpc3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcIkVuZHBvaW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJFdmVudFwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIk5hbWVzcGFjZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJOb2RlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQZXJzaXN0ZW50Vm9sdW1lXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQZXJzaXN0ZW50Vm9sdW1lQ2xhaW1cIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVwbGljYXRpb25Db250cm9sbGVyXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBX1NFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJSZXBsaWNhU2V0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSZXNvdXJjZVF1b3RhXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiT0F1dGhDbGllbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZWNyZXRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VydmljZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcIlNlcnZpY2VBY2NvdW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBDT05GSUdfTUFQUygpOnN0cmluZyB7IHJldHVybiBcIkNvbmZpZ01hcFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU5HUkVTU0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW5ncmVzc1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJUZW1wbGF0ZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUm91dGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJCdWlsZENvbmZpZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQnVpbGRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcIkRlcGxveW1lbnRDb25maWdcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGVwbG95bWVudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVN0cmVhbVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJJbWFnZVN0cmVhbVRhZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2xpY3lcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcIlBvbGljeUJpbmRpbmdcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUHJvamVjdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcIlJvbGVCaW5kaW5nXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcIlJvbGVcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERBRU1PTlNFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJEYWVtb25TZXRcIjsgfVxuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBX1NFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhc2V0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVzb3VyY2VxdW90YXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJvYXV0aGNsaWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZWFjY291bnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBDT05GSUdfTUFQUygpOnN0cmluZyB7IHJldHVybiBcImNvbmZpZ21hcHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcImluZ3Jlc3Nlc1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJ0ZW1wbGF0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcInJvdXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50Y29uZmlnc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1fVEFHUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtdGFnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY2llc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWN5YmluZGluZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlYmluZGluZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZXNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERBRU1PTlNFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJkYWVtb25zZXRzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBFeHRlbnNpb25UeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZXh0ZW5zaW9ucygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5EQUVNT05TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5DT05GSUdfTUFQUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRVZFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLklOR1JFU1NFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIC8vV2F0Y2hUeXBlcy5JTUFHRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuICBleHBvcnQgdmFyIGlzT3BlblNoaWZ0ID0gZmFsc2U7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuICBleHBvcnQgdmFyIEs4U19FWFRfUFJFRklYID0gJ2FwaXMnO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgSzhTX0VYVF9WRVJTSU9OID0gJ3YxYmV0YTEnO1xuICBleHBvcnQgdmFyIEs4U19FWFRFTlNJT05TID0gJ2V4dGVuc2lvbnMnO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEFwaVZlcnNpb24gPSBLOFNfQVBJX1ZFUlNJT047XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE9TQXBpVmVyc2lvbiA9IE9TX0FQSV9WRVJTSU9OO1xuXG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE5hbWVzcGFjZSA9IFwiZGVmYXVsdFwiO1xuICBleHBvcnQgdmFyIGFwcFN1ZmZpeCA9IFwiLmFwcFwiO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZGVjbGFyZSB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBleHRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlZChraW5kOnN0cmluZykge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5PREVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFM6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oSzhTX0VYVF9QUkVGSVgsIEs4U19FWFRFTlNJT05TLCBLOFNfRVhUX1ZFUlNJT04pOyBcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvc0FwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoRXh0ZW5zaW9uVHlwZXMuZXh0ZW5zaW9ucywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gSzhTX0VYVF9QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5JTUFHRVMpIHtcbiAgICAgIHJldHVybiBPU19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVZlcnNpb25Gb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfRVhUX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19FWFRfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpO1xuICAgICAgY2FzZSBLOFNfUFJFRklYOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19QUkVGSVg6XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3RzIHRoZSBrOHMvb3BlbnNoaWZ0IGVycm9yIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck9iamVjdChqcVhIUikge1xuICAgIHZhciBhbnN3ZXI6YW55ID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgIHRyeSB7XG4gICAgICBhbnN3ZXIgPSBhbmd1bGFyLmZyb21Kc29uKGFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBub3RoaW5nIHRvIGRvLi4uXG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIGVpdGhlciBzZWN1cmUvaW5zZWN1cmUgd2Vic29ja2V0IHByb3RvY29sIGJhc2VkIG9uIHRoZSBtYXN0ZXIgVVJJIHByb3RvY29sXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NTY2hlbWUodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICBpZiAoXy5zdGFydHNXaXRoKHByb3RvY29sLCAnaHR0cHMnKSkge1xuICAgICAgcmV0dXJuICd3c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3dzJztcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBzaW5nbGUgJ2tpbmQnIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBjb2xsZWN0aW9uIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0tpbmROYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIHJldHVybiBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5MSVNUOiByZXR1cm4gS2luZFR5cGVzLkxJU1Q7XG4gICAgICBjYXNlIFdhdGNoVHlwZXMuRU5EUE9JTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5FTkRQT0lOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkVWRU5UUzogIHJldHVybiBLaW5kVHlwZXMuRVZFTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5OQU1FU1BBQ0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5OT0RFUzogIHJldHVybiBLaW5kVHlwZXMuTk9ERVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogIHJldHVybiBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6ICByZXR1cm4gS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9EUzogIHJldHVybiBLaW5kVHlwZXMuUE9EUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6ICByZXR1cm4gS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFM6ICByZXR1cm4gS2luZFR5cGVzLlJFUExJQ0FfU0VUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVNPVVJDRV9RVU9UQVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFM6ICByZXR1cm4gS2luZFR5cGVzLk9BVVRIX0NMSUVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFQ1JFVFM6ICByZXR1cm4gS2luZFR5cGVzLlNFQ1JFVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRVJWSUNFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogIHJldHVybiBLaW5kVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQ09ORklHX01BUFM6ICByZXR1cm4gS2luZFR5cGVzLkNPTkZJR19NQVBTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTkdSRVNTRVM6ICByZXR1cm4gS2luZFR5cGVzLklOR1JFU1NFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuVEVNUExBVEVTOiAgcmV0dXJuIEtpbmRUeXBlcy5URU1QTEFURVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJPVVRFUzogIHJldHVybiBLaW5kVHlwZXMuUk9VVEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5CVUlMRF9DT05GSUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5CVUlMRFM6ICByZXR1cm4gS2luZFR5cGVzLkJVSUxEUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRFUExPWU1FTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5ERVBMT1lNRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU1BR0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVM6ICByZXR1cm4gS2luZFR5cGVzLklNQUdFX1NUUkVBTVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9MSUNJRVM6ICByZXR1cm4gS2luZFR5cGVzLlBPTElDSUVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1M6ICByZXR1cm4gS2luZFR5cGVzLlBPTElDWV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUFJPSkVDVFM6ICByZXR1cm4gS2luZFR5cGVzLlBST0pFQ1RTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTOiAgcmV0dXJuIEtpbmRUeXBlcy5ST0xFX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST0xFUzogIHJldHVybiBLaW5kVHlwZXMuUk9MRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRBRU1PTlNFVFM6ICByZXR1cm4gS2luZFR5cGVzLkRBRU1PTlNFVFM7IFxuICAgICAgZGVmYXVsdDogcmV0dXJuIGtpbmQ7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgY29sbGVjdGlvbiBraW5kIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBzaW5ndWxhciBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9Db2xsZWN0aW9uTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICBraW5kID0gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtpbmRUeXBlcy5MSVNUOiByZXR1cm4gV2F0Y2hUeXBlcy5MSVNUO1xuICAgICAgY2FzZSBLaW5kVHlwZXMuRU5EUE9JTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuRU5EUE9JTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkVWRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkVWRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5OQU1FU1BBQ0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuTkFNRVNQQUNFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5OT0RFUzogIHJldHVybiBXYXRjaFR5cGVzLk5PREVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzogIHJldHVybiBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9EUzogIHJldHVybiBXYXRjaFR5cGVzLlBPRFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM6ICByZXR1cm4gV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5SRVBMSUNBX1NFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLk9BVVRIX0NMSUVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFQ1JFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRUNSRVRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFUlZJQ0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VSVklDRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuU0VSVklDRV9BQ0NPVU5UUzogIHJldHVybiBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQ09ORklHX01BUFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5DT05GSUdfTUFQUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTkdSRVNTRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTkdSRVNTRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuVEVNUExBVEVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuVEVNUExBVEVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJPVVRFUzogIHJldHVybiBXYXRjaFR5cGVzLlJPVVRFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5CVUlMRF9DT05GSUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5CVUlMRFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5CVUlMRFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRFUExPWU1FTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU1BR0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFX1NUUkVBTVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9MSUNJRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0xJQ0lFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QT0xJQ1lfQklORElOR1M6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUFJPSkVDVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QUk9KRUNUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST0xFX0JJTkRJTkdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST0xFUzogIHJldHVybiBXYXRjaFR5cGVzLlJPTEVTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRBRU1PTlNFVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5EQUVNT05TRVRTOyBcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHdlYnNvY2tldCBVUkwgZm9yIHRoZSBzdXBwbGllZCBVUkxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1VybCh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gd3NTY2hlbWUodXJsKTtcbiAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gIH1cblxuICAvKlxuICAgKiBDb21wYXJlIHR3byBrOHMgb2JqZWN0cyBiYXNlZCBvbiB0aGVpciBVSURcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpOmJvb2xlYW4ge1xuICAgIHZhciBsZWZ0VUlEID0gZ2V0VUlEKGxlZnQpO1xuICAgIHZhciByaWdodFVJRCA9IGdldFVJRChyaWdodCk7XG4gICAgaWYgKCFsZWZ0VUlEICYmICFyaWdodFVJRCkge1xuICAgICAgcmV0dXJuIGFuZ3VsYXIudG9Kc29uKGxlZnQpID09PSBhbmd1bGFyLnRvSnNvbihyaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0VUlEID09PSByaWdodFVJRDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBLdWJlcm5ldGVzIG9iamVjdCBoZWxwZXJzXG4gICAqXG4gICAqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGlzdCBvZiBrdWJlcm5ldGVzIG9iamVjdHMgc3VpdGFibGUgZm9yIHBvc3RpbmcgYSBidW5jaCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCguLi5vYmplY3RzOmFueVtdKSB7XG4gICAgdmFyIGFuc3dlciA9IHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSxcbiAgICAgIG9iamVjdHM6IFtdXG4gICAgfVxuICAgIF8uZm9yRWFjaChvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgXy5mb3JFYWNoKG9iamVjdCwgKG8pID0+IHtcbiAgICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG8pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBvYmplY3Qgc3VpdGFibGUgZm9yIGRlbGV0ZS9kZWxcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFsbG93T2JqZWN0KG5hbWU6c3RyaW5nLCBraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShraW5kKSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYSBjb2xsZWN0aW9uIGJ5IGxhYmVsXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5TGFiZWwob2JqZWN0czpBcnJheTxhbnk+LCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoPGFueT5fKS5tYXRjaGVzKGxhYmVsU2VsZWN0b3IpO1xuICAgIHJldHVybiBfLmZpbHRlcihvYmplY3RzLCAob2JqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hlcyhnZXRMYWJlbHMob2JqZWN0KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGdpdmVuIG5hbWVzcGFjZSB0byBhbiBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeSBzZXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBhcHBseU5hbWVzcGFjZShvYmo6YW55LCBuYW1lc3BhY2U6IHN0cmluZykge1xuICAgIGlmICghb2JqLmtpbmQgfHwgIW5hbWVzcGFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKG9iai5raW5kKSkgJiYgIW9iai5tZXRhZGF0YS5uYW1lc3BhY2UpIHtcbiAgICAgIG9iai5tZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdWxseSBzY29wZWQgbmFtZSB3aXRoIHRoZSBuYW1lc3BhY2Uva2luZCwgc3VpdGFibGUgdG8gdXNlIGFzIGEga2V5IGluIG1hcHNcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZnVsbE5hbWUoZW50aXR5KSB7XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShlbnRpdHkpO1xuICAgIHZhciBraW5kID0gZ2V0S2luZChlbnRpdHkpO1xuICAgIHZhciBuYW1lID0gZ2V0TmFtZShlbnRpdHkpO1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oKG5hbWVzcGFjZSA/IG5hbWVzcGFjZSA6IFwiXCIpLCBraW5kLCBuYW1lKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRVSUQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnbWV0YWRhdGEnLCAndWlkJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVzcGFjZShlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lc3BhY2VcIl0pO1xuICAgIC8vIHNvbWUgb2JqZWN0cyBhcmVuJ3QgbmFtZXNwYWNlZCwgc28gdGhpcyBjYW4gcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBcGlWZXJzaW9uKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ2FwaVZlcnNpb24nXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG5kZWNsYXJlIHZhciBPU09BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEdvb2dsZU9BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgX21vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKHBsdWdpbk5hbWUsIFtdKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUNvbmZpZycsXG4gICAgZGVwZW5kczogWydLdWJlcm5ldGVzQXBpSW5pdCddLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICBLOFNfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ2s4cycsICdwcmVmaXgnXSkgfHwgSzhTX1BSRUZJWCwgJy8nKTtcbiAgICAgIE9TX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdvcGVuc2hpZnQnLCAncHJlZml4J10pIHx8IE9TX1BSRUZJWCwgJy8nKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIGplbmtpbnNoaWZ0IGluIHZhbmlsbGEgazhzLCBsZXQncyBwb2xsIGJ1aWxkIGNvbmZpZ3MgYnkgZGVmYXVsdFxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnQWRkUG9sbGVkVHlwZXMnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgaWYgKCFpc09wZW5TaGlmdCkge1xuICAgICAgICBLdWJlcm5ldGVzQVBJLnBvbGxpbmdPbmx5LnB1c2goS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MpO1xuICAgICAgfVxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICAkLmdldFNjcmlwdCgnb3Njb25zb2xlL2NvbmZpZy5qcycpXG4gICAgICAgIC5kb25lKChzY3JpcHQsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuICAgICAgICAgIHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xuICAgICAgICAgICAgdmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gY29uZmlnLm9wZW5zaGlmdDtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XG4gICAgICAgICAgS2V5Y2xvYWtDb25maWcgPSBjb25maWcua2V5Y2xvYWs7XG5cbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3Rlcikge1xuICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWR4ICs9IDM7XG4gICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbWFzdGVyIHx8IG1hc3RlciA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIGxvZy5pbmZvKFwibWFzdGVyX3VybCB1bnNldCBvciBzZXQgdG8gJy8nLCBhc3N1bWluZyBBUEkgc2VydmVyIGlzIGF0IC9cIik7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICBtYXN0ZXIgPSBuZXcgVVJJKGhyZWYpLnF1ZXJ5KFwiXCIpLnBhdGgoXCJcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hc3RlciA9PT0gXCJrOHNcIikge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJtYXN0ZXJfdXJsIHNldCB0byAnazhzJywgYXNzdW1pbmcgcHJveHkgaXMgYmVpbmcgdXNlZFwiKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChtYXN0ZXIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZy5pbmZvKFwiVXNpbmcga3ViZXJuZXRlcyBBUEkgVVJMOiBcIiwgbWFzdGVyKTtcbiAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIE9BVVRIIGNvbmZpZzogXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKHBsdWdpbk5hbWUpO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvdyBjbGllbnRzIHRvIGFkZCBvdGhlciB0eXBlcyB0byBmb3JjZSBwb2xsaW5nIHVuZGVyIHdoYXRldmVyIGNpcmN1bXN0YW5jZXNcbiAgZXhwb3J0IHZhciBwb2xsaW5nT25seSA9IFtXYXRjaFR5cGVzLlBST0pFQ1RTLCBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTXTtcblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDc1LCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBsb2c7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9raW5kOnN0cmluZywgcHJpdmF0ZSBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImNoYW5nZWQ6XCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLklOSVQsIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5raW5kLCBcImluaXRpYWxpemVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuSU5JVCwgdGhpcy5fb2JqZWN0cyk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG9iamVjdHMob2JqczphbnlbXSkge1xuICAgICAgdGhpcy5fb2JqZWN0cy5sZW5ndGggPSAwO1xuICAgICAgXy5mb3JFYWNoKG9ianMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKCFvYmoua2luZCkge1xuICAgICAgICAgIG9iai5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWVkSXRlbShuYW1lOnN0cmluZykge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBuYW1lO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCBvYmplY3RzIGZyb20gb3RoZXIgbmFtZXNwYWNlcyB0aGF0IGNvdWxkIGJlIHJldHVybmVkXG4gICAgcHJpdmF0ZSBiZWxvbmdzKG9iamVjdCkge1xuICAgICAgaWYgKHRoaXMubmFtZXNwYWNlICYmIGdldE5hbWVzcGFjZShvYmplY3QpICE9PSB0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghb2JqZWN0LmtpbmQpIHtcbiAgICAgICAgb2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICB9XG4gICAgICBpZiAoXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BRERFRCwgb2JqZWN0KTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgbW9kaWZpZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghb2JqZWN0LmtpbmQpIHtcbiAgICAgICAgb2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICB9XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyBcbiAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IHRoaXMuaGFuZGxlci5saXN0Lm9iamVjdHM7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcImZldGNoZWQgZGF0YTpcIiwgZGF0YSk7XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogXy5jbG9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaGFuZGxlci5saXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJwb2xsaW5nXCIpO1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXJyb3IgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5pbmZvKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gRmFpbGVkIHRvIHBvbGwgb2JqZWN0cywgdXNlciBpcyBub3QgYXV0aG9yaXplZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIE91dCBvZiByZXRyaWVzLCBzdG9wcGluZyBwb2xsaW5nLCBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlci5lcnJvcikge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBFcnJvciBwb2xsaW5nLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdG9wKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkaXNjb25uZWN0aW5nXCIpO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBjYW5jZWxsaW5nIHBvbGxpbmdcIik7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRDYW5jZWwpO1xuICAgICAgICB0aGlzLnRDYW5jZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCIgLSBkZXN0cm95ZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgXG4gICAgfVxuXG4gICAgc2V0IGxpc3QoX2xpc3Q6T2JqZWN0TGlzdCkge1xuICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgIH1cblxuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QgfHwgPE9iamVjdExpc3Q+IHsgb2JqZWN0czogW10gfTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmO1xuICAgIH1cblxuICAgIGdldCBlcnJvcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmLm9wdGlvbnMuZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5raW5kO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGFuZGxlcnMoc2VsZjpXU0hhbmRsZXIsIHdzOldlYlNvY2tldCkge1xuICAgICAgXy5mb3JPd24oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW9uIGRlc3Ryb3llZCBidXQgc3RpbGwgcmVjZWl2aW5nIG1lc3NhZ2VzLCBjbG9zaW5nIHdlYnNvY2tldFwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJDbG9zaW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNsb3NlIGNhbGxlZCBvbiB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgIHRoaXMuY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGVkOiBcIiwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRlc3Ryb3llZDogXCIsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICBsb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgcmVjZWl2ZWQgYW4gZXJyb3I6IFwiLCBldmVudCk7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHx8ICh0aGlzLnBvbGxlciAmJiB0aGlzLnBvbGxlci5jb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGluIGNhc2UgYSBjdXN0b20gVVJMIGlzIGdvaW5nIHRvIGJlIHVzZWRcbiAgICAgIGlmICh0aGlzLnNlbGYucmVzdFVSTCA9PT0gJycgJiYgdGhpcy5zZWxmLndzVVJMID09PSAnJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNvY2tldCAmJiAhdGhpcy5wb2xsZXIpIHtcbiAgICAgICAgaWYgKF8uYW55KHBvbGxpbmdPbmx5LCAoa2luZCkgPT4ga2luZCA9PT0gdGhpcy5zZWxmLmtpbmQpKSB7XG4gICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIlVzaW5nIHBvbGxpbmcgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgd3NVUkwgPSB0aGlzLnNlbGYud3NVUkw7XG4gICAgICAgICAgICBpZiAod3NVUkwpIHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiQ29ubmVjdGluZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh3c1VSTCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnModGhpcywgd3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9nLmluZm8oXCJObyB3c1VSTCBmb3Iga2luZDogXCIgKyB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICAkLmFqYXgodGhpcy5zZWxmLnJlc3RVUkwsIDxhbnk+IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9saXN0Lm9iamVjdHMgPSBkYXRhLml0ZW1zIHx8IFtdO1xuICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0sIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkZhaWxlZCB0byBmZXRjaCBkYXRhIHdoaWxlIGNvbm5lY3RpbmcgdG8gYmFja2VuZCBmb3IgdHlwZTogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiwgdXNlciBpcyBub3QgYXV0aG9yaXplZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0Lm9iamVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkZhaWxlZCB0byBmZXRjaCBkYXRhIHdoaWxlIGNvbm5lY3RpbmcgdG8gYmFja2VuZCBmb3IgdHlwZTogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiQ2xvc2UgY2FsbGVkIG9uIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9sbGVyKSB7XG4gICAgICAgIHRoaXMucG9sbGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIGltcGxlbWVudHMgQ29sbGVjdGlvbiB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX2FwaVZlcnNpb246c3RyaW5nO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbGlzdDpPYmplY3RMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gX29wdGlvbnMua2luZDtcbiAgICAgIHRoaXMuX2FwaVZlcnNpb24gPSBfb3B0aW9ucy5hcGlWZXJzaW9uO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gX29wdGlvbnMubmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gdGhpcy5nZXRQcmVmaXgoKTtcblxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3QoX29wdGlvbnMua2luZCwgX29wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgICBsb2cuZGVidWcoXCJjcmVhdGluZyBuZXcgY29sbGVjdGlvbiBmb3JcIiwgdGhpcy5raW5kKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBvcHRpb25zKCk6SzhTT3B0aW9ucyB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfcmVzdFVybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVSSShhbnN3ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dzVXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybChhbnN3ZXIpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBDb3JlLndpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIGlmIChsb2NhdGlvbiAmJiB1cmwuaW5kZXhPZihcIjovL1wiKSA8IDApIHtcbiAgICAgICAgICB2YXIgaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgICBpZiAoaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcbiAgICAgICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICAgIGhvc3RuYW1lICs9IFwiOlwiICsgcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihob3N0bmFtZSwgbWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3NVcmwodXJsKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fd3NVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIC8qXG4gICAgICBkZWxldGUgdGhpcy5oYW5kbGVycztcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3Q7XG4gICAgICAqL1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0UHJlZml4KCkge1xuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcGlWZXJzaW9uICYmIF8uc3RhcnRzV2l0aCh0aGlzLl9hcGlWZXJzaW9uLCAnZXh0ZW5zaW9ucycpKSB7XG4gICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgdGhpcy5fYXBpVmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIC8vIGxldHMgdHJ1c3QgdGhlIHVybCB0byBiZSBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKGl0ZW0ua2luZCkpKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKSB8fCB0aGlzLl9uYW1lc3BhY2U7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLl9raW5kO1xuICAgICAgICAgIGlmICghS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCAmJiAoa2luZCA9PT0gXCJidWlsZGNvbmZpZ3NcIiB8fCBraW5kID09PSBcIkJ1aWxkQ29uZmlnXCIpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBVcmxIZWxwZXJzLmpvaW4oXCIvYXBpL3YxL3Byb3h5L25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9qZW5raW5zaGlmdDo4MC9cIiwgcHJlZml4KTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlVzaW5nIGJ1aWxkY29uZmlncyBVUkwgb3ZlcnJpZGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwga2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOihkYXRhOmFueVtdKSA9PiB2b2lkIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicGFzc2luZyBleGlzdGluZyBvYmplY3RzOlwiLCB0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImFkZGluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcodGhpcy5raW5kLCBcImdvdCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgY2IoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwicmVtb3Zpbmcgd2F0Y2ggY2FsbGJhY2s6XCIsIGNiKTtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXBkYXRpbmcgYW4gZXhpc3Rpbmcgb2JqZWN0XG4gICAgICAgIHZhciByZXNvdXJjZVZlcnNpb24gPSBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgaWYgKCFyZXNvdXJjZVZlcnNpb24pIHtcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMubGlzdC5nZXROYW1lZEl0ZW0oZ2V0TmFtZShpdGVtKSk7XG4gICAgICAgICAgcmVzb3VyY2VWZXJzaW9uID0gY3VycmVudC5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb247XG4gICAgICAgICAgaXRlbS5tZXRhZGF0YS5yZXNvdXJjZVZlcnNpb24gPSByZXNvdXJjZVZlcnNpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEN1c3RvbSBjaGVja3MgZm9yIHNwZWNpZmljIGNhc2VzXG4gICAgICBzd2l0Y2ggKHRoaXMuX2tpbmQpIHtcbiAgICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VTOlxuICAgICAgICAgIGlmIChpdGVtLnNwZWMuY2x1c3RlcklQID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc3BlYy5jbHVzdGVySVA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgXG4gICAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKlxuICAgKiBNYW5hZ2VzIHJlZmVyZW5jZXMgdG8gY29sbGVjdGlvbiBpbnN0YW5jZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3c1xuICAgKi9cbiAgY2xhc3MgQ2xpZW50SW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlZkNvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSBfY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZWZDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCArIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyByZW1vdmVSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBkaXNwb3NhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50IDw9IDA7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICAvLyBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgaW50ZXJmYWNlIENsaWVudE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTpDbGllbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qXG4gICAqIEZhY3RvcnkgaW1wbGVtZW50YXRpb24gdGhhdCdzIGF2YWlsYWJsZSBhcyBhbiBhbmd1bGFyIHNlcnZpY2VcbiAgICovXG4gIGNsYXNzIEs4U0NsaWVudEZhY3RvcnlJbXBsIHtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgIHByaXZhdGUgX2NsaWVudHMgPSA8Q2xpZW50TWFwPiB7fTtcbiAgICBwdWJsaWMgY3JlYXRlKG9wdGlvbnM6IGFueSwgbmFtZXNwYWNlPzogYW55KTpDb2xsZWN0aW9uIHtcbiAgICAgIHZhciBraW5kID0gb3B0aW9ucztcbiAgICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAga2luZCA9IG9wdGlvbnMua2luZDtcbiAgICAgICAgbmFtZXNwYWNlID0gb3B0aW9ucy5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX29wdGlvbnMgPSB7XG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKF9vcHRpb25zKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKHRoaXMuX2NsaWVudHNba2V5XSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeSA9IG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gSzhTQ2xpZW50RmFjdG9yeTtcbiAgfSk7XG5cbiAgdmFyIE5PX0tJTkQgPSBcIk5vIGtpbmQgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUID0gXCJObyBvYmplY3QgaW4gc3VwcGxpZWQgb3B0aW9uc1wiO1xuICB2YXIgTk9fT0JKRUNUUyA9IFwiTm8gb2JqZWN0cyBpbiBsaXN0IG9iamVjdFwiO1xuXG4gIC8qXG4gICAqIFN0YXRpYyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyBrOHMgb2JqM2N0c1xuICAgKi9cblxuICAvKlxuICAgKiBHZXQgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0KG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnQuZ2V0KHN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9uczphbnksIGFjdGlvbjoob2JqZWN0OmFueSwgc3VjY2VzczooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yOihlcnI6YW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5vYmplY3RzKSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1RTO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge307XG4gICAgdmFyIG9iamVjdHMgPSBfLmNsb25lRGVlcChvcHRpb25zLm9iamVjdC5vYmplY3RzKTtcbiAgICBmdW5jdGlvbiBhZGRSZXN1bHQoaWQsIGRhdGEpIHtcbiAgICAgIGFuc3dlcltpZF0gPSBkYXRhO1xuICAgICAgbmV4dCgpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2cuZGVidWcoXCJwcm9jZXNzZWQgYWxsIG9iamVjdHMsIHJldHVybmluZyBzdGF0dXNcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGFuc3dlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0cy5zaGlmdCgpO1xuICAgICAgbG9nLmRlYnVnKFwiUHJvY2Vzc2luZyBvYmplY3Q6IFwiLCBnZXROYW1lKG9iamVjdCkpO1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgYWN0aW9uKG9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKG9wdGlvbnM6YW55KSB7XG4gICAgbG9nLmRlYnVnKFwiTm9ybWFsaXppbmcgc3VwcGxpZWQgb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuICAgIC8vIGxldCdzIHRyeSBhbmQgc3VwcG9ydCBhbHNvIGp1c3Qgc3VwcGx5aW5nIGs4cyBvYmplY3RzIGRpcmVjdGx5XG4gICAgaWYgKG9wdGlvbnMubWV0YWRhdGEgfHwgZ2V0S2luZChvcHRpb25zKSA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICB2YXIgb2JqZWN0ID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG9iamVjdDogb2JqZWN0XG4gICAgICB9O1xuICAgICAgaWYgKG9iamVjdC5vYmplY3RzKSB7XG4gICAgICAgIG9wdGlvbnMua2luZCA9IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdCkge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0LmtpbmQpIHtcbiAgICAgIGlmIChvcHRpb25zLmtpbmQpIHtcbiAgICAgICAgb3B0aW9ucy5vYmplY3Qua2luZCA9IHRvS2luZE5hbWUob3B0aW9ucy5raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgICB9XG4gICAgfVxuICAgIGxvZy5kZWJ1ZyhcIk9wdGlvbnMgb2JqZWN0IG5vcm1hbGl6ZWQ6IFwiLCBvcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWwob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IGRlbGV0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgY2xpZW50LmRlbGV0ZShvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICB9XG5cbiAgLypcbiAgICogQWRkL3JlcGxhY2UgYW4gb2JqZWN0LCBvciBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHB1dChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgcHV0dGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIHB1dCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICBjbGllbnQuZ2V0KChvYmplY3RzKSA9PiB7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIHZhciBlcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihlcnIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICBjbGllbnQucHV0KG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfSk7XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3YXRjaChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IDxDb2xsZWN0aW9uPiBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgaGFuZGxlID0gY2xpZW50LndhdGNoKG9wdGlvbnMuc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICB2YXIgc2VsZiA9IHtcbiAgICAgIGNsaWVudDogY2xpZW50LFxuICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICBkaXNjb25uZWN0OiAoKSA9PiB7XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShzZWxmLmNsaWVudCwgc2VsZi5oYW5kbGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
