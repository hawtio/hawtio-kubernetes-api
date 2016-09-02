

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FDR0MsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0FnT25CO0FBaE9ELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEI7UUFBQTtRQUVBLENBQUM7UUFEQyxzQkFBSSx5Q0FBcUI7aUJBQXpCLGNBQXFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7OztXQUFBO1FBQ3ZFLGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9CQUFNLFNBRWxCLENBQUE7SUFFVSx1QkFBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUE4Q3BDO1FBQUE7UUFrQ0EsQ0FBQztRQWpDQyxzQkFBa0IsaUJBQUk7aUJBQXRCLGNBQWtDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNwRCxzQkFBa0Isc0JBQVM7aUJBQTNCLGNBQXVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMzRCxzQkFBa0IsbUJBQU07aUJBQXhCLGNBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNuRCxzQkFBa0IsdUJBQVU7aUJBQTVCLGNBQXdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUMvRCxzQkFBa0Isa0JBQUs7aUJBQXZCLGNBQW1DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7V0FBQTtRQUNu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QUM7SUFDbkIsQ0FBQztJQXpDZSxpQkFBRyxNQXlDbEIsQ0FBQTtJQUVELGVBQXNCLE9BQWtCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxPQUFPLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksTUFBTSxHQUFnQiw4QkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsOEJBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBZmUsbUJBQUssUUFlcEIsQ0FBQTtBQUVILENBQUMsRUFoaUNNLGFBQWEsS0FBYixhQUFhLFFBZ2lDbkIiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBLaW5kVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJMaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJFbmRwb2ludFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRXZlbnRcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJOYW1lc3BhY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiTm9kZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZUNsYWltXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9kXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcIlJlcGxpY2F0aW9uQ29udHJvbGxlclwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVwbGljYVNldFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVzb3VyY2VRdW90YVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIk9BdXRoQ2xpZW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VjcmV0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcIlNlcnZpY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZXJ2aWNlQWNjb3VudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJDb25maWdNYXBcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcIkluZ3Jlc3NcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiVGVtcGxhdGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcIlJvdXRlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQnVpbGRDb25maWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcIkJ1aWxkXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJEZXBsb3ltZW50Q29uZmlnXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcIkRlcGxveW1lbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1cIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1UYWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9saWN5XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2xpY3lCaW5kaW5nXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcIlByb2plY3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlQmluZGluZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGFlbW9uU2V0XCI7IH1cbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwibGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXNldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcInJlc291cmNlcXVvdGFzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VjcmV0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJjb25maWdtYXBzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTkdSRVNTRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbmdyZXNzZXNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXRhZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGFlbW9uc2V0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgRXh0ZW5zaW9uVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGV4dGVuc2lvbnMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuREFFTU9OU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTkdSRVNTRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuSU1BR0VTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U09wdGlvbnMge1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xuICAgIGFwaVZlcnNpb24/OiBzdHJpbmc7XG4gICAgbGFiZWxTZWxlY3Rvcj86IExhYmVsTWFwO1xuICAgIG9iamVjdD86IGFueTtcbiAgICBzdWNjZXNzPzogKG9ianM6YW55W10pID0+IHZvaWQ7XG4gICAgZXJyb3I/OiAoZXJyOmFueSkgPT4gdm9pZDtcbiAgICB1cmxGdW5jdGlvbj86IChvcHRpb25zOks4U09wdGlvbnMpID0+IHN0cmluZztcbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSU5JVCgpOnN0cmluZyB7IHJldHVybiBcIklOSVRcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9O1xuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBMYWJlbE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTogc3RyaW5nO1xuICB9XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb24ge1xuICAgIHdzVVJMOnN0cmluZztcbiAgICByZXN0VVJMOnN0cmluZztcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3QoKTtcbiAgICBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTp2b2lkO1xuICAgIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQ7XG4gICAgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCk6dm9pZDtcbiAgICBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZ2V0S2V5KCk6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNDbGllbnRGYWN0b3J5IHtcbiAgICBjcmVhdGUoa2luZDphbnksIG5hbWVzcGFjZT86IHN0cmluZyk6Q29sbGVjdGlvbjtcbiAgICBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPik6dm9pZDtcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxuXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcbiAgZXhwb3J0IHZhciBpc09wZW5TaGlmdCA9IGZhbHNlO1xuXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1BSRUZJWCA9ICdhcGlzJztcblxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIEs4U19FWFRfVkVSU0lPTiA9ICd2MWJldGExJztcbiAgZXhwb3J0IHZhciBLOFNfRVhURU5TSU9OUyA9ICdleHRlbnNpb25zJztcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcblxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGRlY2xhcmUgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeTtcblxuICBleHBvcnQgZnVuY3Rpb24gYXBpUHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBPU19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZXh0UHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfRVhUX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZWQoa2luZDpzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEs4U19FWFRfUFJFRklYLCBLOFNfRVhURU5TSU9OUywgSzhTX0VYVF9WRVJTSU9OKTsgXG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaUZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSB7XG4gICAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uYW55KEV4dGVuc2lvblR5cGVzLmV4dGVuc2lvbnMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCk7XG4gICAgICBjYXNlIEs4U19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfRVhUX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgc2luZ2xlICdraW5kJyBvZiBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9LaW5kTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICByZXR1cm4gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTElTVDogcmV0dXJuIEtpbmRUeXBlcy5MSVNUO1xuICAgICAgY2FzZSBXYXRjaFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBLaW5kVHlwZXMuRU5EUE9JTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5FVkVOVFM6ICByZXR1cm4gS2luZFR5cGVzLkVWRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBLaW5kVHlwZXMuTkFNRVNQQUNFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTk9ERVM6ICByZXR1cm4gS2luZFR5cGVzLk5PREVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPRFM6ICByZXR1cm4gS2luZFR5cGVzLlBPRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBX1NFVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBLaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRUNSRVRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFUzogIHJldHVybiBLaW5kVHlwZXMuU0VSVklDRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIEtpbmRUeXBlcy5DT05GSUdfTUFQUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTkdSRVNTRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBLaW5kVHlwZXMuVEVNUExBVEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST1VURVM6ICByZXR1cm4gS2luZFR5cGVzLlJPVVRFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERTOiAgcmV0dXJuIEtpbmRUeXBlcy5CVUlMRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ0lFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ1lfQklORElOR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIEtpbmRUeXBlcy5QUk9KRUNUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRVM6ICByZXR1cm4gS2luZFR5cGVzLlJPTEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5EQUVNT05TRVRTOyBcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbGxlY3Rpb24ga2luZCBvZiBhbiBvYmplY3QgZnJvbSB0aGUgc2luZ3VsYXIga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvQ29sbGVjdGlvbk5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAga2luZCA9IGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLaW5kVHlwZXMuTElTVDogcmV0dXJuIFdhdGNoVHlwZXMuTElTVDtcbiAgICAgIGNhc2UgS2luZFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkVORFBPSU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5FVkVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5FVkVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBXYXRjaFR5cGVzLk5BTUVTUEFDRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTk9ERVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5OT0RFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPRFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0RTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VDUkVUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRVJWSUNFUzogIHJldHVybiBXYXRjaFR5cGVzLlNFUlZJQ0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQ09ORklHX01BUFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU5HUkVTU0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBXYXRjaFR5cGVzLlRFTVBMQVRFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST1VURVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST1VURVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQlVJTERTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNJRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUFJPSkVDVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBXYXRjaFR5cGVzLlJPTEVfQklORElOR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST0xFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREFFTU9OU0VUUzsgXG4gICAgICBkZWZhdWx0OiByZXR1cm4ga2luZDtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICB2YXIgcmlnaHRVSUQgPSBnZXRVSUQocmlnaHQpO1xuICAgIGlmICghbGVmdFVJRCAmJiAhcmlnaHRVSUQpIHtcbiAgICAgIHJldHVybiBhbmd1bGFyLnRvSnNvbihsZWZ0KSA9PT0gYW5ndWxhci50b0pzb24ocmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdFVJRCA9PT0gcmlnaHRVSUQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogS3ViZXJuZXRlcyBvYmplY3QgaGVscGVyc1xuICAgKlxuICAgKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2Yga3ViZXJuZXRlcyBvYmplY3RzIHN1aXRhYmxlIGZvciBwb3N0aW5nIGEgYnVuY2ggb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoLi4ub2JqZWN0czphbnlbXSkge1xuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCksXG4gICAgICBvYmplY3RzOiBbXVxuICAgIH1cbiAgICBfLmZvckVhY2gob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIF8uZm9yRWFjaChvYmplY3QsIChvKSA9PiB7XG4gICAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb2JqZWN0IHN1aXRhYmxlIGZvciBkZWxldGUvZGVsXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhbGxvd09iamVjdChuYW1lOnN0cmluZywga2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoa2luZCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHM6QXJyYXk8YW55PiwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgIHZhciBtYXRjaGVzID0gKDxhbnk+XykubWF0Y2hlcyhsYWJlbFNlbGVjdG9yKTtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoZ2V0TGFiZWxzKG9iamVjdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqOmFueSwgbmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIW9iai5raW5kIHx8ICFuYW1lc3BhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydhcGlWZXJzaW9uJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBqZW5raW5zaGlmdCBpbiB2YW5pbGxhIGs4cywgbGV0J3MgcG9sbCBidWlsZCBjb25maWdzIGJ5IGRlZmF1bHRcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0FkZFBvbGxlZFR5cGVzJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgS3ViZXJuZXRlc0FQSS5wb2xsaW5nT25seS5wdXNoKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTKTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcbiAgICAgICAgICAgIC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICBsb2cuaW5mbyhcIm1hc3Rlcl91cmwgdW5zZXQgb3Igc2V0IHRvICcvJywgYXNzdW1pbmcgQVBJIHNlcnZlciBpcyBhdCAvXCIpO1xuICAgICAgICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXN0ZXIgPT09IFwiazhzXCIpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwibWFzdGVyX3VybCBzZXQgdG8gJ2s4cycsIGFzc3VtaW5nIHByb3h5IGlzIGJlaW5nIHVzZWRcIik7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBtYXN0ZXIgPSBuZXcgVVJJKGhyZWYpLnF1ZXJ5KFwiXCIpLnBhdGgobWFzdGVyKS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIGt1YmVybmV0ZXMgQVBJIFVSTDogXCIsIG1hc3Rlcik7XG4gICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJFcnJvciBmZXRjaGluZyBPQVVUSCBjb25maWc6IFwiLCByZXNwb25zZSk7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVTZW5kKHJlcXVlc3QpIHtcbiAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgY2xpZW50cyB0byBhZGQgb3RoZXIgdHlwZXMgdG8gZm9yY2UgcG9sbGluZyB1bmRlciB3aGF0ZXZlciBjaXJjdW1zdGFuY2VzXG4gIGV4cG9ydCB2YXIgcG9sbGluZ09ubHkgPSBbV2F0Y2hUeXBlcy5QUk9KRUNUUywgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHU107XG5cbiAgLyoqXG4gICAqICBNYW5hZ2VzIHRoZSBhcnJheSBvZiBrOHMgb2JqZWN0cyBmb3IgYSBjbGllbnQgaW5zdGFuY2VcbiAgICoqL1xuICBjbGFzcyBPYmplY3RMaXN0IHtcbiAgICBwdWJsaWMgdHJpZ2dlckNoYW5nZWRFdmVudCA9IF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQU5ZLCB0aGlzLl9vYmplY3RzKTtcbiAgICB9LCA3NSwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcblxuICAgIHByaXZhdGUgX2VlOkV2ZW50RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX29iamVjdHM6QXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gbG9nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfa2luZDpzdHJpbmcsIHByaXZhdGUgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2VlID0gc21va2VzaWduYWxzLmNvbnZlcnQodGhpcyk7XG4gICAgICBpZiAodGhpcy5sb2cuZW5hYmxlZEZvcihMb2dnZXIuREVCVUcpKSB7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BRERFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiYWRkZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwibW9kaWZpZWRcIiwgdGhpcy5raW5kLCBcIjpcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5ERUxFVEVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJkZWxldGVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMua2luZCwgXCJjaGFuZ2VkOlwiLCBvYmplY3RzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5JTklULCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMua2luZCwgXCJpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGtpbmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2luZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvYmplY3RzKG9ianM6YW55W10pIHtcbiAgICAgIHRoaXMuX29iamVjdHMubGVuZ3RoID0gMDtcbiAgICAgIF8uZm9yRWFjaChvYmpzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmICghb2JqLmtpbmQpIHtcbiAgICAgICAgICBvYmoua2luZCA9IHRvS2luZE5hbWUodGhpcy5raW5kKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmFtZWRJdGVtKGl0ZW06YW55KSB7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lZEl0ZW0obmFtZTpzdHJpbmcpIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgb2JqZWN0cyBmcm9tIG90aGVyIG5hbWVzcGFjZXMgdGhhdCBjb3VsZCBiZSByZXR1cm5lZFxuICAgIHByaXZhdGUgYmVsb25ncyhvYmplY3QpIHtcbiAgICAgIGlmICh0aGlzLm5hbWVzcGFjZSAmJiBnZXROYW1lc3BhY2Uob2JqZWN0KSAhPT0gdGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZGVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgIG9iamVjdC5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCF0aGlzLmJlbG9uZ3Mob2JqZWN0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIW9iamVjdC5raW5kKSB7XG4gICAgICAgIG9iamVjdC5raW5kID0gdG9LaW5kTmFtZSh0aGlzLmtpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKCFfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgIGFuZ3VsYXIuY29weShvYmplY3QsIG9iaik7XG4gICAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIG9iamVjdCk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGRlbGV0ZWQgPSBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5ERUxFVEVELCBkZWxldGVkWzBdKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBpbnRlcmZhY2UgQ29tcGFyZVJlc3VsdCB7XG4gICAgYWRkZWQ6QXJyYXk8YW55PjtcbiAgICBtb2RpZmllZDpBcnJheTxhbnk+O1xuICAgIGRlbGV0ZWQ6QXJyYXk8YW55PjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmUob2xkOkFycmF5PGFueT4sIF9uZXc6QXJyYXk8YW55Pik6Q29tcGFyZVJlc3VsdCB7XG4gICAgdmFyIGFuc3dlciA9IDxDb21wYXJlUmVzdWx0PiB7XG4gICAgICBhZGRlZDogW10sXG4gICAgICBtb2RpZmllZDogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH07XG4gICAgXy5mb3JFYWNoKF9uZXcsIChuZXdPYmopID0+IHtcbiAgICAgIHZhciBvbGRPYmogPSBfLmZpbmQob2xkLCAobykgPT4gZXF1YWxzKG8sIG5ld09iaikpO1xuICAgICAgaWYgKCFvbGRPYmopIHtcbiAgICAgICAgYW5zd2VyLmFkZGVkLnB1c2gobmV3T2JqKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIudG9Kc29uKG9sZE9iaikgIT09IGFuZ3VsYXIudG9Kc29uKG5ld09iaikpIHtcbiAgICAgICAgYW5zd2VyLm1vZGlmaWVkLnB1c2gobmV3T2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfLmZvckVhY2gob2xkLCAob2xkT2JqKSA9PiB7XG4gICAgICB2YXIgbmV3T2JqID0gXy5maW5kKF9uZXcsIChvKSA9PiBlcXVhbHMobywgb2xkT2JqKSk7XG4gICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICBhbnN3ZXIuZGVsZXRlZC5wdXNoKG9sZE9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIE1hbmFnZXMgcG9sbGluZyB0aGUgc2VydmVyIGZvciBvYmplY3RzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB3ZWJzb2NrZXQgY29ubmVjdGlvbnNcbiAgICovXG4gIGNsYXNzIE9iamVjdFBvbGxlciB7XG5cbiAgICBwcml2YXRlIF9sYXN0RmV0Y2ggPSA8QXJyYXk8YW55Pj4gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSA1MDAwO1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdENhbmNlbDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RVUkw6c3RyaW5nLCBwcml2YXRlIGhhbmRsZXI6V1NIYW5kbGVyKSB7XG4gICAgICB0aGlzLmxvZyA9IGxvZzsgXG4gICAgICB0aGlzLl9sYXN0RmV0Y2ggPSB0aGlzLmhhbmRsZXIubGlzdC5vYmplY3RzO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRvR2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCJmZXRjaGVkIGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICAgIHZhciBpdGVtcyAgPSAoZGF0YSAmJiBkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY29tcGFyZSh0aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLl9sYXN0RmV0Y2ggPSBpdGVtcztcbiAgICAgICAgICBfLmZvckluKHJlc3VsdCwgKGl0ZW1zOmFueVtdLCBhY3Rpb246c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfLmZvckVhY2goaXRlbXMsIChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IF8uY2xvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmhhbmRsZXIubGlzdC5pbml0aWFsaXplKCk7XG4gICAgICAgICAgLy9sb2cuZGVidWcoXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBsb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwicG9sbGluZ1wiKTtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVycm9yID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGlmIChqcVhIUi5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgdGhpcy5sb2cuaW5mbyh0aGlzLmhhbmRsZXIua2luZCwgXCItIEZhaWxlZCB0byBwb2xsIG9iamVjdHMsIHVzZXIgaXMgbm90IGF1dGhvcml6ZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnJldHJpZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBPdXQgb2YgcmV0cmllcywgc3RvcHBpbmcgcG9sbGluZywgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXIuZXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gRXJyb3IgcG9sbGluZywgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMgKyAxLCBcIiBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgIH0sIDEpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RvcCgpIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGlzY29ubmVjdGluZ1wiKTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gY2FuY2VsbGluZyBwb2xsaW5nXCIpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50Q2FuY2VsKTtcbiAgICAgICAgdGhpcy50Q2FuY2VsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiIC0gZGVzdHJveWVkXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZXMgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uIHRvIHRoZSBiYWNrZW5kIGFuZCBwYXNzZXMgZXZlbnRzIHRvIHRoZSBPYmplY3RMaXN0XG4gICAqL1xuICBjbGFzcyBXU0hhbmRsZXIge1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29ubmVjdFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNvY2tldDpXZWJTb2NrZXQ7XG4gICAgcHJpdmF0ZSBwb2xsZXI6T2JqZWN0UG9sbGVyO1xuICAgIHByaXZhdGUgc2VsZjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9saXN0Ok9iamVjdExpc3Q7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IFxuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5vcHRpb25zLmVycm9yO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYiBzb2NrZXQgZW5jb3VudGVyZWQgZXJyb3I6IFwiLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICBpZiAoXy5hbnkocG9sbGluZ09ubHksIChraW5kKSA9PiBraW5kID09PSB0aGlzLnNlbGYua2luZCkpIHtcbiAgICAgICAgICB0aGlzLmxvZy5pbmZvKFwiVXNpbmcgcG9sbGluZyBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRvQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciB3c1VSTCA9IHRoaXMuc2VsZi53c1VSTDtcbiAgICAgICAgICAgIGlmICh3c1VSTCkge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHdzVVJMKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2cuaW5mbyhcIk5vIHdzVVJMIGZvciBraW5kOiBcIiArIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGlmIChqcVhIUi5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvLCBhc3N1bWUgaXQncyBhbHJlYWR5IGNsb3NlZFxuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9sbGVyKSB7XG4gICAgICAgIHRoaXMucG9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucG9sbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEltcGxlbWVudHMgdGhlIGV4dGVybmFsIEFQSSBmb3Igd29ya2luZyB3aXRoIGs4cyBjb2xsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkltcGwgaW1wbGVtZW50cyBDb2xsZWN0aW9uIHtcblxuICAgIHByaXZhdGUgX2tpbmQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWVzcGFjZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXBpVmVyc2lvbjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBoYW5kbGVyczpXU0hhbmRsZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBsaXN0Ok9iamVjdExpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2tpbmQgPSBfb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IF9vcHRpb25zLmFwaVZlcnNpb247XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBfb3B0aW9ucy5uYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSB0aGlzLmdldFByZWZpeCgpO1xuXG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVyKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChfb3B0aW9ucy5raW5kLCBfb3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICAgIGxvZy5kZWJ1ZyhcImNyZWF0aW5nIG5ldyBjb2xsZWN0aW9uIGZvclwiLCB0aGlzLmtpbmQpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTpLOFNPcHRpb25zIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9yZXN0VXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd3NVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKGFuc3dlcikucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCk7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IENvcmUud2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uICYmIHVybC5pbmRleE9mKFwiOi8vXCIpIDwgMCkge1xuICAgICAgICAgIHZhciBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuICAgICAgICAgICAgaWYgKHBvcnQpIHtcbiAgICAgICAgICAgICAgaG9zdG5hbWUgKz0gXCI6XCIgKyBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKGhvc3RuYW1lLCBtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybCh1cmwpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl93c1VybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3RVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3Jlc3RVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTGFiZWxGaWx0ZXIoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkFkZGluZyBsYWJlbCBmaWx0ZXI6IFwiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIHZhciBjYk9sZCA9IGNiO1xuICAgICAgcmV0dXJuIChkYXRhOmFueVtdKSA9PiB7XG4gICAgICAgIGRhdGEgPSBmaWx0ZXJCeUxhYmVsKGRhdGEsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgICBjYk9sZChkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gb25lIHRpbWUgZmV0Y2ggb2YgdGhlIGRhdGEuLi5cbiAgICBwdWJsaWMgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCkge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuSU5JVCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0UHJlZml4KCkge1xuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIGlmICh0aGlzLl9hcGlWZXJzaW9uICYmIF8uc3RhcnRzV2l0aCh0aGlzLl9hcGlWZXJzaW9uLCAnZXh0ZW5zaW9ucycpKSB7XG4gICAgICAgICAgcHJlZiA9IFVybEhlbHBlcnMuam9pbihLOFNfRVhUX1BSRUZJWCwgdGhpcy5fYXBpVmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZWY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIC8vIGxldHMgdHJ1c3QgdGhlIHVybCB0byBiZSBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZXNwYWNlZCh0b0NvbGxlY3Rpb25OYW1lKGl0ZW0ua2luZCkpKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKSB8fCB0aGlzLl9uYW1lc3BhY2U7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IHRoaXMuZ2V0UHJlZml4KCk7XG4gICAgICAgICAgdmFyIGtpbmQgPSB0aGlzLl9raW5kO1xuICAgICAgICAgIGlmICghS3ViZXJuZXRlc0FQSS5pc09wZW5TaGlmdCAmJiAoa2luZCA9PT0gXCJidWlsZGNvbmZpZ3NcIiB8fCBraW5kID09PSBcIkJ1aWxkQ29uZmlnXCIpKSB7XG4gICAgICAgICAgICBwcmVmaXggPSBVcmxIZWxwZXJzLmpvaW4oXCIvYXBpL3YxL3Byb3h5L25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9qZW5raW5zaGlmdDo4MC9cIiwgcHJlZml4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgYnVpbGRjb25maWdzIFVSTCBvdmVycmlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXgsICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCBraW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHVzZU5hbWUpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKHVybCwgbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8vIGNvbnRpbnVhbGx5IGdldCB1cGRhdGVzXG4gICAgcHVibGljIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJwYXNzaW5nIGV4aXN0aW5nIG9iamVjdHM6XCIsIHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiYWRkaW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiZ290IGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICBjYihkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJyZW1vdmluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3VzdG9tIGNoZWNrcyBmb3Igc3BlY2lmaWMgY2FzZXNcbiAgICAgIHN3aXRjaCAodGhpcy5fa2luZCkge1xuICAgICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6XG4gICAgICAgICAgaWYgKGl0ZW0uc3BlYy5jbHVzdGVySVAgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgaXRlbS5zcGVjLmNsdXN0ZXJJUDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+IHtcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKGl0ZW0pLFxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUob3B0aW9uczogYW55LCBuYW1lc3BhY2U/OiBhbnkpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtpbmQgPSBvcHRpb25zO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICBraW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHVybmluZyBleGlzdGluZyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IENsaWVudEluc3RhbmNlKG5ldyBDb2xsZWN0aW9uSW1wbChfb3B0aW9ucykpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3RvcnkgPSBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKTtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIEs4U0NsaWVudEZhY3Rvcnk7XG4gIH0pO1xuXG4gIHZhciBOT19LSU5EID0gXCJObyBraW5kIGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVCA9IFwiTm8gb2JqZWN0IGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcblxuICAvKlxuICAgKiBTdGF0aWMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgazhzIG9iajNjdHNcbiAgICovXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGE6YW55W10pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9XG4gICAgY2xpZW50LmdldChzdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnM6YW55LCBhY3Rpb246KG9iamVjdDphbnksIHN1Y2Nlc3M6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcjooZXJyOmFueSkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICghb3B0aW9ucy5vYmplY3Qub2JqZWN0cykge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUUztcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHt9O1xuICAgIHZhciBvYmplY3RzID0gXy5jbG9uZURlZXAob3B0aW9ucy5vYmplY3Qub2JqZWN0cyk7XG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9nLmRlYnVnKFwicHJvY2Vzc2VkIGFsbCBvYmplY3RzLCByZXR1cm5pbmcgc3RhdHVzXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhhbnN3ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgZ2V0TmFtZShvYmplY3QpKTtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGFjdGlvbihvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zOmFueSkge1xuICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAvLyBsZXQncyB0cnkgYW5kIHN1cHBvcnQgYWxzbyBqdXN0IHN1cHBseWluZyBrOHMgb2JqZWN0cyBkaXJlY3RseVxuICAgIGlmIChvcHRpb25zLm1ldGFkYXRhIHx8IGdldEtpbmQob3B0aW9ucykgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgdmFyIG9iamVjdCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICAgIGlmIChvYmplY3Qub2JqZWN0cykge1xuICAgICAgICBvcHRpb25zLmtpbmQgPSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5raW5kKSB7XG4gICAgICBpZiAob3B0aW9ucy5raW5kKSB7XG4gICAgICAgIG9wdGlvbnMub2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKG9wdGlvbnMua2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2cuZGVidWcoXCJPcHRpb25zIG9iamVjdCBub3JtYWxpemVkOiBcIiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVsKG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBkZWxldGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIGRlbCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgY2xpZW50LmdldCgob2JqZWN0cykgPT4ge1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgY2xpZW50LnB1dChvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH0pO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2F0Y2gob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSA8Q29sbGVjdGlvbj4gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIGhhbmRsZSA9IGNsaWVudC53YXRjaChvcHRpb25zLnN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgdmFyIHNlbGYgPSB7XG4gICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgZGlzY29ubmVjdDogKCkgPT4ge1xuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koc2VsZi5jbGllbnQsIHNlbGYuaGFuZGxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
