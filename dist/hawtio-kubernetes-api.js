/// Copyright 2014-2015 Red Hat, Inc. and/or its affiliates
/// and other contributors as indicated by the @author tags.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///   http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
/// <reference path="../libs/hawtio-utilities/defs.d.ts"/>
/// <reference path="../libs/hawtio-oauth/defs.d.ts"/>

//defs for third-party eventing library
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
    })();
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
    })();
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
    })();
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

/// <reference path="kubernetesApiInterfaces.ts"/>
/// <reference path="../../includes.ts"/>
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

/// <reference path="kubernetesApiHelpers.ts"/>
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
    })();
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
                if (_.any(KubernetesAPI.pollingOnly, function (kind) { return kind === _this.self.kind; })) {
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
    })();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5MSVNUIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuRU5EUE9JTlRTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuRVZFTlRTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuTkFNRVNQQUNFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLk5PREVTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUE9EUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUkVQTElDQV9TRVRTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuT0FVVEhfQ0xJRU5UUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlNFQ1JFVFMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5DT05GSUdfTUFQUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLklOR1JFU1NFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlJPVVRFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ERVBMT1lNRU5UUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLklNQUdFUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLklNQUdFX1NUUkVBTVMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyIsIkt1YmVybmV0ZXNBUEkuS2luZFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUE9MSUNZX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUFJPSkVDVFMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5LaW5kVHlwZXMuUk9MRVMiLCJLdWJlcm5ldGVzQVBJLktpbmRUeXBlcy5EQUVNT05TRVRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkxJU1QiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuRU5EUE9JTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVWRU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5PREVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9EUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VDUkVUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkNPTkZJR19NQVBTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklOR1JFU1NFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ0lFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5EQUVNT05TRVRTIiwiS3ViZXJuZXRlc0FQSS5FeHRlbnNpb25UeXBlcyIsIkt1YmVybmV0ZXNBUEkuRXh0ZW5zaW9uVHlwZXMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkV4dGVuc2lvblR5cGVzLmV4dGVuc2lvbnMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcyIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLklOSVQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlkiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BRERFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLk1PRElGSUVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCIsIkt1YmVybmV0ZXNBUEkuYXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5vc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkuZXh0UHJlZml4IiwiS3ViZXJuZXRlc0FQSS5tYXN0ZXJBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLm5hbWVzcGFjZWQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkuYXBpRm9yS2luZCIsIkt1YmVybmV0ZXNBUEkuYXBpVmVyc2lvbkZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLnByZWZpeEZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVVybCIsIkt1YmVybmV0ZXNBUEkuZ2V0RXJyb3JPYmplY3QiLCJLdWJlcm5ldGVzQVBJLndzU2NoZW1lIiwiS3ViZXJuZXRlc0FQSS50b0tpbmROYW1lIiwiS3ViZXJuZXRlc0FQSS50b0NvbGxlY3Rpb25OYW1lIiwiS3ViZXJuZXRlc0FQSS53c1VybCIsIkt1YmVybmV0ZXNBUEkuZXF1YWxzIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVMaXN0IiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVTaGFsbG93T2JqZWN0IiwiS3ViZXJuZXRlc0FQSS5maWx0ZXJCeUxhYmVsIiwiS3ViZXJuZXRlc0FQSS5hcHBseU5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuZnVsbE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldFVJRCIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5nZXRBcGlWZXJzaW9uIiwiS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldEtpbmQiLCJLdWJlcm5ldGVzQVBJLmdldFNlbGVjdG9yIiwiS3ViZXJuZXRlc0FQSS5nZXRIb3N0IiwiS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldFBvcnRzIiwiS3ViZXJuZXRlc0FQSS5nZXRDcmVhdGlvblRpbWVzdGFtcCIsIkt1YmVybmV0ZXNBUEkubGFiZWxzVG9TdHJpbmciLCJLdWJlcm5ldGVzQVBJLmlzUnVubmluZyIsIkt1YmVybmV0ZXNBUEkuc2VsZWN0b3JNYXRjaGVzIiwiS3ViZXJuZXRlc0FQSS5wb2RTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldEtleSIsIkt1YmVybmV0ZXNBUEkuYmVmb3JlU2VuZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5raW5kIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmluaXRpYWxpemUiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmdldE5hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5iZWxvbmdzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmFkZGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm1vZGlmaWVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmRlbGV0ZWQiLCJLdWJlcm5ldGVzQVBJLmNvbXBhcmUiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZG9HZXQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdGFydCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLnN0b3AiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmxpc3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuZXJyb3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5raW5kIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2V0SGFuZGxlcnMiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5zZW5kIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2hvdWxkQ2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbm1lc3NhZ2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbm9wZW4iLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbmNsb3NlIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25lcnJvciIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLm9wdGlvbnMiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLl9yZXN0VXJsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5fd3NVcmwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmdldEtleSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwud3NVUkwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnJlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLm5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwua2luZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5hZGRMYWJlbEZpbHRlciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXRQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnJlc3RVcmxGb3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC51bndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5wdXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlbGV0ZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZWZDb3VudCIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuYWRkUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5yZW1vdmVSZWYiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmNvbGxlY3Rpb24iLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRpc3Bvc2FibGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY3JlYXRlIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5nZXQiLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24iLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24uYWRkUmVzdWx0IiwiS3ViZXJuZXRlc0FQSS5oYW5kbGVMaXN0QWN0aW9uLm5leHQiLCJLdWJlcm5ldGVzQVBJLm5vcm1hbGl6ZU9wdGlvbnMiLCJLdWJlcm5ldGVzQVBJLmRlbCIsIkt1YmVybmV0ZXNBUEkucHV0IiwiS3ViZXJuZXRlc0FQSS53YXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCxHQUFHO0FBQ0gsbUVBQW1FO0FBQ25FLG9FQUFvRTtBQUNwRSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGdEQUFnRDtBQUNoRCxHQUFHO0FBQ0gsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSw0RUFBNEU7QUFDNUUsdUVBQXVFO0FBQ3ZFLGtDQUFrQztBQUVsQywwREFBMEQ7QUFDMUQsc0RBQXNEOztBQ2hCdEQsdUNBQXVDO0FBSXRDLENBQUM7QUFPRCxDQUFDO0FBRUYsSUFBTyxhQUFhLENBZ09uQjtBQWhPRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRXBCQTtRQUFBQztRQUVBQyxDQUFDQTtRQURDRCxzQkFBSUEseUNBQXFCQTtpQkFBekJBLGNBQXFDRSxNQUFNQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDdkVBLGFBQUNBO0lBQURBLENBRkFELEFBRUNDLElBQUFEO0lBRllBLG9CQUFNQSxTQUVsQkEsQ0FBQUE7SUFFVUEsdUJBQVNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0lBOENwQ0E7UUFBQUk7UUFrQ0FDLENBQUNBO1FBakNDRCxzQkFBa0JBLGlCQUFJQTtpQkFBdEJBLGNBQWtDRSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFGO1FB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QSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdkRBLEtBQUtBLHdCQUFVQSxDQUFDQSxTQUFTQSxFQUFHQSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdkRBLEtBQUtBLHdCQUFVQSxDQUFDQSxNQUFNQSxFQUFHQSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLEtBQUtBLHdCQUFVQSxDQUFDQSxhQUFhQSxFQUFHQSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDL0RBLEtBQUtBLHdCQUFVQSxDQUFDQSxNQUFNQSxFQUFHQSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLEtBQUtBLHdCQUFVQSxDQUFDQSxrQkFBa0JBLEVBQUdBLE1BQU1BLENBQUNBLHVCQUFTQSxDQUFDQSxrQkFBa0JBLENBQUNBO1lBQ3pFQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsV0FBV0EsRUFBR0EsTUFBTUEsQ0FBQ0EsdUJBQVNBLENBQUNBLFdBQVdBLENBQUNBO1lBQzNEQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsTUFBTUEsRUFBR0EsTUFBTUEsQ0FBQ0EsdUJBQVNBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2pEQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsYUFBYUEsRUFBR0EsTUFBTUEsQ0FBQ0EsdUJBQVNBLENBQUNBLGFBQWFBLENBQUNBO1lBQy9EQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsaUJBQWlCQSxFQUFHQSxNQUFNQSxDQUFDQSx1QkFBU0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQTtZQUN2RUEsS0FBS0Esd0JBQVVBLENBQUNBLFFBQVFBLEVBQUdBLE1BQU1BLENBQUNBLHVCQUFTQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNyREEsS0FBS0Esd0JBQVVBLENBQUNBLGVBQWVBLEVBQUdBLE1BQU1BLENBQUNBLHVCQUFTQSxDQUFDQSxlQUFlQSxDQUFDQTtZQUNuRUEsS0FBS0Esd0JBQVVBLENBQUNBLFFB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LHVCQUFTQSxDQUFDQSxTQUFTQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdkRBLEtBQUtBLHVCQUFTQSxDQUFDQSxTQUFTQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDdkRBLEtBQUtBLHVCQUFTQSxDQUFDQSxNQUFNQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLEtBQUtBLHVCQUFTQSxDQUFDQSxhQUFhQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDL0RBLEtBQUtBLHVCQUFTQSxDQUFDQSxNQUFNQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLEtBQUtBLHVCQUFTQSxDQUFDQSxrQkFBa0JBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxrQkFBa0JBLENBQUNBO1lBQ3pFQSxLQUFLQSx1QkFBU0EsQ0FBQ0EsV0FBV0EsRUFBR0EsTUFBTUEsQ0FBQ0Esd0JBQVVBLENBQUNBLFdBQVdBLENBQUNBO1lBQzNEQSxLQUFLQSx1QkFBU0EsQ0FBQ0EsTUFBTUEsRUFBR0EsTUFBTUEsQ0FBQ0Esd0JBQVVBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2pEQSxLQUFLQSx1QkFBU0EsQ0FBQ0EsYUFBYUEsRUFBR0EsTUFBTUEsQ0FBQ0Esd0JBQVVBLENBQUNBLGFBQWFBLENBQUNBO1lBQy9EQSxLQUFLQSx1QkFBU0EsQ0FBQ0EsaUJBQWlCQSxFQUFHQSxNQUFNQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTtZQUN2RUEsS0FBS0EsdUJBQVNBLENBQUNBLFFBQVFBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNyREEsS0FBS0EsdUJBQVNBLENBQUNBLGVBQWVBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxlQUFlQSxDQUFDQTtZQUNuRUEsS0FBS0EsdUJBQVNBLENBQUNBLFFBQVFBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUNyREEsS0FBS0EsdUJBQVNBLENBQUNBLGFBQWFBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxhQUFhQSxDQUFDQTtZQUMvREEsS0FBS0EsdUJBQVNBLENBQUNBLEtBQUtBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUMvQ0EsS0FBS0EsdUJBQVNBLENBQUNBLFVBQVVBLEVBQUdBLE1BQU1BLENBQUNBLHdCQUFVQSxDQUFDQSxVQUFVQSxDQUFDQTtZQUN6REEsU0FBU0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLENBQUNBO0lBQ0hBLENBQUNBO0lBdkNldEcsOEJBQWdCQSxtQkF1Qy9CQSxDQUFBQTtJQUtEQSxlQUFzQkEsR0FBVUE7UUFDOUJ1RyxJQUFJQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBSGV2RyxtQkFBS0EsUUFHcEJBLENBQUFBO0lBS0RBLGdCQUF1QkEsSUFBSUEsRUFBRUEsS0FBS0E7UUFDaEN3RyxJQUFJQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsSUFBSUEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4REEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsT0FBT0EsS0FBS0EsUUFBUUEsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBUGV4RyxvQkFBTUEsU0FPckJBLENBQUFBO0lBV0RBO1FBQTJCeUcsaUJBQWdCQTthQUFoQkEsV0FBZ0JBLENBQWhCQSxzQkFBZ0JBLENBQWhCQSxJQUFnQkE7WUFBaEJBLGdDQUFnQkE7O1FBQ3pDQSxJQUFJQSxNQUFNQSxHQUFHQTtZQUNYQSxVQUFVQSxFQUFFQSw2QkFBZUE7WUFDM0JBLElBQUlBLEVBQUVBLFVBQVVBLENBQUNBLHdCQUFVQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNqQ0EsT0FBT0EsRUFBRUEsRUFBRUE7U0FDWkEsQ0FBQUE7UUFDREEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBQ0EsTUFBTUE7WUFDeEJBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1QkEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBQ0EsQ0FBQ0E7b0JBQ2xCQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekJBLENBQUNBLENBQUNBLENBQUNBO1lBQ0xBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUM5QkEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSEEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBaEJlekcsd0JBQVVBLGFBZ0J6QkEsQ0FBQUE7SUFLREEsNkJBQW9DQSxJQUFXQSxFQUFFQSxJQUFXQSxFQUFFQSxTQUFpQkE7UUFDN0UwRyxNQUFNQSxDQUFDQTtZQUNMQSxVQUFVQSxFQUFFQSw2QkFBZUE7WUFDM0JBLElBQUlBLEVBQUVBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBO1lBQ3RCQSxRQUFRQSxFQUFFQTtnQkFDUkEsSUFBSUEsRUFBRUEsSUFBSUE7Z0JBQ1ZBLFNBQVNBLEVBQUVBLFNBQVNBO2FBQ3JCQTtTQUNGQSxDQUFDQTtJQUNKQSxDQUFDQTtJQVRlMUcsaUNBQW1CQSxzQkFTbENBLENBQUFBO0lBS0RBLHVCQUE4QkEsT0FBa0JBLEVBQUVBLGFBQXNCQTtRQUN0RTJHLElBQUlBLE9BQU9BLEdBQVNBLENBQUVBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQzlDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFDQSxNQUFNQTtZQUM5QkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcENBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBTGUzRywyQkFBYUEsZ0JBSzVCQSxDQUFBQTtJQUtEQSx3QkFBK0JBLEdBQU9BLEVBQUVBLFNBQWlCQTtRQUN2RDRHLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxnQkFBZ0JBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3RFQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxDQUFDQTtRQUNyQ0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFQZTVHLDRCQUFjQSxpQkFPN0JBLENBQUFBO0lBS0RBLGtCQUF5QkEsTUFBTUE7UUFDN0I2RyxJQUFJQSxTQUFTQSxHQUFHQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNyQ0EsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLElBQUlBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuRUEsQ0FBQ0E7SUFMZTdHLHNCQUFRQSxXQUt2QkEsQ0FBQUE7SUFFREEsZ0JBQXVCQSxNQUFNQTtRQUMzQjhHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO0lBQ25EQSxDQUFDQTtJQUZlOUcsb0JBQU1BLFNBRXJCQSxDQUFBQTtJQUVEQSxzQkFBNkJBLE1BQU1BO1FBQ2pDK0csSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFN0RBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUplL0csMEJBQVlBLGVBSTNCQSxDQUFBQTtJQUVEQSx1QkFBOEJBLE1BQU1BO1FBQ2xDZ0gsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLENBQUNBO0lBRmVoSCwyQkFBYUEsZ0JBRTVCQSxDQUFBQTtJQUVEQSxtQkFBMEJBLE1BQU1BO1FBQzlCaUgsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDMURBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUhlakgsdUJBQVNBLFlBR3hCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLE1BQU1BO1FBQzVCa0gsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbEhBLENBQUNBO0lBRmVsSCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLGlCQUF3QkEsTUFBTUE7UUFDNUJtSCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNwRkEsQ0FBQ0E7SUFGZW5ILHFCQUFPQSxVQUV0QkEsQ0FBQUE7SUFFREEscUJBQTRCQSxNQUFNQTtRQUNoQ29ILE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BEQSxDQUFDQTtJQUZlcEgseUJBQVdBLGNBRTFCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLEdBQUdBO1FBQ3pCcUgsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbklBLENBQUNBO0lBRmVySCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLG1CQUEwQkEsR0FBR0E7UUFDM0JzSCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxRQUFRQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFGZXRILHVCQUFTQSxZQUV4QkEsQ0FBQUE7SUFFREEsa0JBQXlCQSxPQUFPQTtRQUM5QnVILE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUZldkgsc0JBQVFBLFdBRXZCQSxDQUFBQTtJQUVEQSw4QkFBcUNBLE1BQU1BO1FBQ3pDd0gsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNqRUEsQ0FBQ0E7SUFGZXhILGtDQUFvQkEsdUJBRW5DQSxDQUFBQTtJQUFBQSxDQUFDQTtJQUtGQSx3QkFBK0JBLE1BQU1BLEVBQUVBLGFBQXdDQTtRQUF4Q3lILDZCQUF3Q0EsR0FBeENBLHNEQUF3Q0E7UUFDN0VBLElBQUlBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2hCQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFDQSxLQUFLQSxFQUFFQSxHQUFHQTtZQUNqQ0EsSUFBSUEsU0FBU0EsR0FBR0EsTUFBTUEsR0FBR0EsYUFBYUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDNUNBLE1BQU1BLElBQUlBLFNBQVNBLEdBQUdBLEdBQUdBLEdBQUdBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFQZXpILDRCQUFjQSxpQkFPN0JBLENBQUFBO0lBS0RBLG1CQUEwQkEsZUFBZUE7UUFDdkMwSCxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxlQUFlQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUMzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsSUFBSUEsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2pDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNmQSxDQUFDQTtJQUNIQSxDQUFDQTtJQVJlMUgsdUJBQVNBLFlBUXhCQSxDQUFBQTtJQUtEQSx5QkFBZ0NBLFFBQVFBLEVBQUVBLE1BQU1BO1FBQzlDMkgsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO1lBQ2xCQSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNkQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxLQUFLQSxFQUFFQSxHQUFHQTtnQkFDbkNBLEtBQUtBLEVBQUVBLENBQUNBO2dCQUNSQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcENBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7WUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDSEEsTUFBTUEsQ0FBQ0EsTUFBTUEsSUFBSUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO0lBQ0hBLENBQUNBO0lBZGUzSCw2QkFBZUEsa0JBYzlCQSxDQUFBQTtJQUVEQSxtQkFBMEJBLEdBQUdBO1FBQzNCNEgsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRmU1SCx1QkFBU0EsWUFFeEJBLENBQUFBO0FBRUhBLENBQUNBLEVBblpNLGFBQWEsS0FBYixhQUFhLFFBbVpuQjs7QUNyWkQsK0NBQStDO0FBSy9DLElBQU8sYUFBYSxDQWtIbkI7QUFsSEQsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUVUQSxxQkFBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0Esd0JBQVVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBRXBEQSxrQkFBa0JBLENBQUNBLHdCQUF3QkEsQ0FBQ0E7UUFDMUNBLElBQUlBLEVBQUVBLHFCQUFxQkE7UUFDM0JBLE9BQU9BLEVBQUVBLENBQUNBLG1CQUFtQkEsQ0FBQ0E7UUFDOUJBLElBQUlBLEVBQUVBLFVBQUNBLElBQUlBO1lBQ1RBLHdCQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxzQkFBUUEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsd0JBQVVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ25HQSx1QkFBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQVFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLFdBQVdBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLHVCQUFTQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN2R0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7S0FDRkEsQ0FBQ0EsQ0FBQ0E7SUFHSEEsa0JBQWtCQSxDQUFDQSx3QkFBd0JBLENBQUNBO1FBQzFDQSxJQUFJQSxFQUFFQSxnQkFBZ0JBO1FBQ3RCQSxPQUFPQSxFQUFFQSxDQUFDQSxtQkFBbUJBLENBQUNBO1FBQzlCQSxJQUFJQSxFQUFFQSxVQUFDQSxJQUFJQTtZQUNUQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSx5QkFBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxhQUFhQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtZQUN6RUEsQ0FBQ0E7WUFDREEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7S0FDRkEsQ0FBQ0EsQ0FBQ0E7SUFHSEEsa0JBQWtCQSxDQUFDQSx3QkFBd0JBLENBQUNBO1FBQzFDQSxJQUFJQSxFQUFFQSwyQkFBMkJBO1FBQ2pDQSxPQUFPQSxFQUFFQSxDQUFDQSxjQUFjQSxFQUFFQSxtQkFBbUJBLENBQUNBO1FBQzlDQSxJQUFJQSxFQUFFQSxVQUFDQSxJQUFJQTtZQUNUQSx5QkFBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFFcEJBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO1lBQzdFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFNQTtnQkFDVkEsR0FBR0EsRUFBRUEsT0FBT0E7Z0JBQ1pBLE1BQU1BLEVBQUVBLEtBQUtBO2dCQUNiQSxPQUFPQSxFQUFFQSxVQUFDQSxJQUFJQTtvQkFDWkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzVCQSxpQkFBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esa0NBQWtDQSxDQUFDQSxDQUFDQTtvQkFDN0NBLHlCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDbkJBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNUQSxDQUFDQTtnQkFDREEsS0FBS0EsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsVUFBVUEsRUFBRUEsV0FBV0E7b0JBQ3BDQSxpQkFBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxPQUFPQSxHQUFHQSwwRUFBMEVBLEVBQUVBLFVBQVVBLEVBQUVBLGdCQUFnQkEsRUFBRUEsV0FBV0EsRUFBRUEsbUJBQW1CQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDekxBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNUQSxDQUFDQTthQUNGQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtLQUNGQSxDQUFDQSxDQUFDQTtJQUVIQSxrQkFBa0JBLENBQUNBLHdCQUF3QkEsQ0FBQ0E7UUFDMUNBLElBQUlBLEVBQUVBLG1CQUFtQkE7UUFDekJBLElBQUlBLEVBQUVBLFVBQUNBLElBQUlBO1lBQ1RBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLHFCQUFxQkEsQ0FBQ0E7aUJBQy9CQSxJQUFJQSxDQUFDQSxVQUFDQSxNQUFNQSxFQUFFQSxVQUFVQTtnQkFDdkJBLElBQUlBLE1BQU1BLEdBQW9CQSxhQUFhQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO2dCQUNsRkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLHdCQUF3QkEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVDQSxJQUFJQSxNQUFNQSxHQUFVQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtnQkFDdENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO29CQUM1Q0EsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNFQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDekJBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUMzQ0EsQ0FBQ0E7b0JBQ0RBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRURBLGFBQWFBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBO2dCQUNqQ0EsaUJBQWlCQSxHQUFHQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDbENBLGNBQWNBLEdBQUdBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO2dCQUVqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzdCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDWkEsSUFBSUEsbUJBQW1CQSxHQUFHQSxhQUFhQSxDQUFDQSxtQkFBbUJBLENBQUNBO3dCQUM1REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDeEJBLElBQUlBLElBQUlBLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7NEJBQy9CQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTs0QkFDOUJBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNaQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQTtnQ0FDVEEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0NBQzdCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDWkEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0NBQ3BDQSxDQUFDQTs0QkFDSEEsQ0FBQ0E7d0JBQ0hBLENBQUNBO29CQUNIQSxDQUFDQTtnQkFDSEEsQ0FBQ0E7Z0JBRURBLElBQUlBLFdBQVdBLEdBQUdBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBLENBQUNBO2dCQUM1REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsSUFBSUEsTUFBTUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBSTlCQSxpQkFBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsNkRBQTZEQSxDQUFDQSxDQUFDQTtvQkFDeEVBLE1BQU1BLEdBQUdBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUM1Q0EsQ0FBQ0E7Z0JBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO29CQUVyQkEsaUJBQUdBLENBQUNBLElBQUlBLENBQUNBLHVEQUF1REEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xFQSxNQUFNQSxHQUFHQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDNURBLENBQUNBO2dCQUNEQSxpQkFBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsNEJBQTRCQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDL0NBLGFBQWFBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBO2dCQUNqQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDVEEsQ0FBQ0EsQ0FBQ0E7aUJBQ0RBLElBQUlBLENBQUNBLFVBQUNBLFFBQVFBO2dCQUNiQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsK0JBQStCQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDckRBLElBQUlBLEVBQUVBLENBQUNBO1lBQ1RBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO0tBQ0ZBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBRVRBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0Esd0JBQVVBLENBQUNBLENBQUNBO0FBQzNDQSxDQUFDQSxFQWxITSxhQUFhLEtBQWIsYUFBYSxRQWtIbkI7O0FDdkhELCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsOENBQThDO0FBRTlDLElBQU8sYUFBYSxDQXFrQ25CO0FBcmtDRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRXBCQSxJQUFJQSxHQUFHQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtJQUVwQ0EsZ0JBQWdCQSxJQUFXQSxFQUFFQSxTQUFrQkE7UUFDN0M2SCxNQUFNQSxDQUFDQSxTQUFTQSxHQUFHQSxTQUFTQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUNuREEsQ0FBQ0E7SUFFRDdILG9CQUFvQkEsT0FBT0E7UUFDekI4SCxJQUFJQSxLQUFLQSxHQUFHQSxXQUFXQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQTtRQUN4Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsT0FBT0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxlQUFlQSxFQUFFQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUMvREEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFHVTlILHlCQUFXQSxHQUFHQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsd0JBQVVBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7SUFLN0VBO1FBVUUrSCxvQkFBb0JBLEtBQVlBLEVBQVVBLFNBQWlCQTtZQVY3REMsaUJBK0lDQTtZQXJJcUJBLFVBQUtBLEdBQUxBLEtBQUtBLENBQU9BO1lBQVVBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVFBO1lBVHBEQSx3QkFBbUJBLEdBQUdBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBO2dCQUN0Q0EsS0FBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLENBQUNBLEdBQUdBLEVBQUVBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1lBQ2pEQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUVuQkEsUUFBR0EsR0FBZ0JBLFNBQVNBLENBQUNBO1lBQzdCQSxpQkFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDckJBLGFBQVFBLEdBQWNBLEVBQUVBLENBQUNBO1lBQ3pCQSxRQUFHQSxHQUFrQkEsR0FBR0EsQ0FBQ0E7WUFHL0JBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdENBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLDBCQUFZQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxNQUFNQTtvQkFDckNBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNsREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLDBCQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxNQUFNQTtvQkFDeENBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLEVBQUVBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLDBCQUFZQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFDQSxNQUFNQTtvQkFDdkNBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLEVBQUVBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNwREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLDBCQUFZQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFDQSxPQUFPQTtvQkFDcENBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLEtBQUlBLENBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO2dCQUNqREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLElBQUlBLENBQUNBLEdBQUdBLENBQUNB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QUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLENBQUNBLEtBQUtBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTs7UUFFTVYsNkJBQVFBLEdBQWZBLFVBQWdCQSxNQUFNQTtZQUF0QlcsaUJBb0JDQTtZQW5CQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzFCQSxNQUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakJBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLHdCQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0Q0EsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBQ0EsR0FBR0E7Z0JBQzVCQSxNQUFNQSxDQUFDQSxvQkFBTUEsQ0FBQ0EsR0FBR0EsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNIQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDbkJBLE1BQU1BLENBQUNBO1lBQ1RBLENBQUNBO1lBQ0RBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLEdBQUdBO2dCQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FB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QUFPQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFDREEsSUFBSUEsTUFBTUEsR0FBZ0JBLDhCQUFnQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDM0RBLElBQUlBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO1FBQ2xFQSxJQUFJQSxJQUFJQSxHQUFHQTtZQUNUQSxNQUFNQSxFQUFFQSxNQUFNQTtZQUNkQSxNQUFNQSxFQUFFQSxNQUFNQTtZQUNkQSxVQUFVQSxFQUFFQTtnQkFDVkEsOEJBQWdCQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNyREEsQ0FBQ0E7U0FDRkEsQ0FBQ0E7UUFDRkEsTUFBTUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDakJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBZmU1TSxtQkFBS0EsUUFlcEJBLENBQUFBO0FBRUhBLENBQUNBLEVBcmtDTSxhQUFhLEtBQWIsYUFBYSxRQXFrQ25CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby11dGlsaXRpZXMvZGVmcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLW9hdXRoL2RlZnMuZC50c1wiLz5cbiIsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBLaW5kVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJMaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJFbmRwb2ludFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRXZlbnRcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJOYW1lc3BhY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiTm9kZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiUGVyc2lzdGVudFZvbHVtZUNsYWltXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9kXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcIlJlcGxpY2F0aW9uQ29udHJvbGxlclwiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVwbGljYVNldFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUmVzb3VyY2VRdW90YVwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIk9BdXRoQ2xpZW50XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiU2VjcmV0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcIlNlcnZpY2VcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJTZXJ2aWNlQWNjb3VudFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJDb25maWdNYXBcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElOR1JFU1NFUygpOnN0cmluZyB7IHJldHVybiBcIkluZ3Jlc3NcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiVGVtcGxhdGVcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcIlJvdXRlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiQnVpbGRDb25maWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcIkJ1aWxkXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJEZXBsb3ltZW50Q29uZmlnXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UUygpOnN0cmluZyB7IHJldHVybiBcIkRlcGxveW1lbnRcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcIkltYWdlXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1cIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTV9UQUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiSW1hZ2VTdHJlYW1UYWdcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwiUG9saWN5XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJQb2xpY3lCaW5kaW5nXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcIlByb2plY3RcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlQmluZGluZ1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJSb2xlXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiRGFlbW9uU2V0XCI7IH1cbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBMSVNUKCk6c3RyaW5nIHsgcmV0dXJuIFwibGlzdFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUkVQTElDQV9TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXNldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcInJlc291cmNlcXVvdGFzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VjcmV0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQ09ORklHX01BUFMoKTpzdHJpbmcgeyByZXR1cm4gXCJjb25maWdtYXBzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTkdSRVNTRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbmdyZXNzZXNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXRhZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBEQUVNT05TRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGFlbW9uc2V0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgRXh0ZW5zaW9uVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGV4dGVuc2lvbnMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuREFFTU9OU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBX1NFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVFNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuQ09ORklHX01BUFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTkdSRVNTRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FfU0VUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuSU1BR0VTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U09wdGlvbnMge1xuICAgIGtpbmQ/OiBzdHJpbmc7XG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xuICAgIGFwaVZlcnNpb24/OiBzdHJpbmc7XG4gICAgbGFiZWxTZWxlY3Rvcj86IExhYmVsTWFwO1xuICAgIG9iamVjdD86IGFueTtcbiAgICBzdWNjZXNzPzogKG9ianM6YW55W10pID0+IHZvaWQ7XG4gICAgZXJyb3I/OiAoZXJyOmFueSkgPT4gdm9pZDtcbiAgICB1cmxGdW5jdGlvbj86IChvcHRpb25zOks4U09wdGlvbnMpID0+IHN0cmluZztcbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSU5JVCgpOnN0cmluZyB7IHJldHVybiBcIklOSVRcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9O1xuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBMYWJlbE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTogc3RyaW5nO1xuICB9XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb24ge1xuICAgIHdzVVJMOnN0cmluZztcbiAgICByZXN0VVJMOnN0cmluZztcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3QoKTtcbiAgICBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTp2b2lkO1xuICAgIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQ7XG4gICAgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCk6dm9pZDtcbiAgICBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZ2V0S2V5KCk6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNDbGllbnRGYWN0b3J5IHtcbiAgICBjcmVhdGUoa2luZDphbnksIG5hbWVzcGFjZT86IHN0cmluZyk6Q29sbGVjdGlvbjtcbiAgICBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPik6dm9pZDtcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxuXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcbiAgZXhwb3J0IHZhciBpc09wZW5TaGlmdCA9IGZhbHNlO1xuXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1BSRUZJWCA9ICdhcGlzJztcblxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIEs4U19FWFRfVkVSU0lPTiA9ICd2MWJldGExJztcbiAgZXhwb3J0IHZhciBLOFNfRVhURU5TSU9OUyA9ICdleHRlbnNpb25zJztcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcblxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGRlY2xhcmUgdmFyIEs4U0NsaWVudEZhY3Rvcnk6SzhTQ2xpZW50RmFjdG9yeTtcblxuICBleHBvcnQgZnVuY3Rpb24gYXBpUHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBPU19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZXh0UHJlZml4KCkge1xuICAgIHJldHVybiBLOFNfRVhUX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZWQoa2luZDpzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBST0pFQ1RTOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaUV4dGVuc2lvblByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEs4U19FWFRfUFJFRklYLCBLOFNfRVhURU5TSU9OUywgSzhTX0VYVF9WRVJTSU9OKTsgXG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaUZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSB7XG4gICAgICByZXR1cm4gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKF8uYW55KEV4dGVuc2lvblR5cGVzLmV4dGVuc2lvbnMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0VYVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpRXh0ZW5zaW9uUHJlZml4KCk7XG4gICAgICBjYXNlIEs4U19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgdmFyIGFwaSA9IGFwaUZvcktpbmQoa2luZCk7XG4gICAgc3dpdGNoKGFwaSkge1xuICAgICAgY2FzZSBLOFNfRVhUX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlFeHRlbnNpb25QcmVmaXgoKTtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgIGNhc2UgT1NfUFJFRklYOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgc2luZ2xlICdraW5kJyBvZiBhbiBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9LaW5kTmFtZShraW5kOmFueSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGtpbmQpKSB7XG4gICAgICByZXR1cm4gZ2V0S2luZChraW5kKTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTElTVDogcmV0dXJuIEtpbmRUeXBlcy5MSVNUO1xuICAgICAgY2FzZSBXYXRjaFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBLaW5kVHlwZXMuRU5EUE9JTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5FVkVOVFM6ICByZXR1cm4gS2luZFR5cGVzLkVWRU5UUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBLaW5kVHlwZXMuTkFNRVNQQUNFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuTk9ERVM6ICByZXR1cm4gS2luZFR5cGVzLk5PREVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gS2luZFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPRFM6ICByZXR1cm4gS2luZFR5cGVzLlBPRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5SRVBMSUNBX1NFVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBLaW5kVHlwZXMuUkVTT1VSQ0VfUVVPVEFTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5TRUNSRVRTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5TRVJWSUNFUzogIHJldHVybiBLaW5kVHlwZXMuU0VSVklDRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIEtpbmRUeXBlcy5DT05GSUdfTUFQUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIEtpbmRUeXBlcy5JTkdSRVNTRVM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBLaW5kVHlwZXMuVEVNUExBVEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST1VURVM6ICByZXR1cm4gS2luZFR5cGVzLlJPVVRFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERTOiAgcmV0dXJuIEtpbmRUeXBlcy5CVUlMRFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBLaW5kVHlwZXMuREVQTE9ZTUVOVFM7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLklNQUdFUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBLaW5kVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ0lFUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIEtpbmRUeXBlcy5QT0xJQ1lfQklORElOR1M7IFxuICAgICAgY2FzZSBXYXRjaFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIEtpbmRUeXBlcy5QUk9KRUNUUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzsgXG4gICAgICBjYXNlIFdhdGNoVHlwZXMuUk9MRVM6ICByZXR1cm4gS2luZFR5cGVzLlJPTEVTOyBcbiAgICAgIGNhc2UgV2F0Y2hUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIEtpbmRUeXBlcy5EQUVNT05TRVRTOyBcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBraW5kO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIGNvbGxlY3Rpb24ga2luZCBvZiBhbiBvYmplY3QgZnJvbSB0aGUgc2luZ3VsYXIga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvQ29sbGVjdGlvbk5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAga2luZCA9IGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLaW5kVHlwZXMuTElTVDogcmV0dXJuIFdhdGNoVHlwZXMuTElTVDtcbiAgICAgIGNhc2UgS2luZFR5cGVzLkVORFBPSU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkVORFBPSU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5FVkVOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5FVkVOVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTkFNRVNQQUNFUzogIHJldHVybiBXYXRjaFR5cGVzLk5BTUVTUEFDRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuTk9ERVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5OT0RFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPRFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5QT0RTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUkVQTElDQV9TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUkVQTElDQV9TRVRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlJFU09VUkNFX1FVT1RBUzogIHJldHVybiBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5PQVVUSF9DTElFTlRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRUNSRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuU0VDUkVUUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5TRVJWSUNFUzogIHJldHVybiBXYXRjaFR5cGVzLlNFUlZJQ0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFM6ICByZXR1cm4gV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkNPTkZJR19NQVBTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQ09ORklHX01BUFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuSU5HUkVTU0VTOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU5HUkVTU0VTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlRFTVBMQVRFUzogIHJldHVybiBXYXRjaFR5cGVzLlRFTVBMQVRFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ST1VURVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST1VURVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuQlVJTERTOiAgcmV0dXJuIFdhdGNoVHlwZXMuQlVJTERTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5ERVBMT1lNRU5UUzogIHJldHVybiBXYXRjaFR5cGVzLkRFUExPWU1FTlRTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLklNQUdFUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1TOiAgcmV0dXJuIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUzogIHJldHVybiBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBPTElDSUVTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNJRVM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUE9MSUNZX0JJTkRJTkdTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTOyBcbiAgICAgIGNhc2UgS2luZFR5cGVzLlBST0pFQ1RTOiAgcmV0dXJuIFdhdGNoVHlwZXMuUFJPSkVDVFM7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRV9CSU5ESU5HUzogIHJldHVybiBXYXRjaFR5cGVzLlJPTEVfQklORElOR1M7IFxuICAgICAgY2FzZSBLaW5kVHlwZXMuUk9MRVM6ICByZXR1cm4gV2F0Y2hUeXBlcy5ST0xFUzsgXG4gICAgICBjYXNlIEtpbmRUeXBlcy5EQUVNT05TRVRTOiAgcmV0dXJuIFdhdGNoVHlwZXMuREFFTU9OU0VUUzsgXG4gICAgICBkZWZhdWx0OiByZXR1cm4ga2luZDtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICB2YXIgbGVmdFVJRCA9IGdldFVJRChsZWZ0KTtcbiAgICB2YXIgcmlnaHRVSUQgPSBnZXRVSUQocmlnaHQpO1xuICAgIGlmICghbGVmdFVJRCAmJiAhcmlnaHRVSUQpIHtcbiAgICAgIHJldHVybiBhbmd1bGFyLnRvSnNvbihsZWZ0KSA9PT0gYW5ndWxhci50b0pzb24ocmlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdFVJRCA9PT0gcmlnaHRVSUQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogS3ViZXJuZXRlcyBvYmplY3QgaGVscGVyc1xuICAgKlxuICAgKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGxpc3Qgb2Yga3ViZXJuZXRlcyBvYmplY3RzIHN1aXRhYmxlIGZvciBwb3N0aW5nIGEgYnVuY2ggb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoLi4ub2JqZWN0czphbnlbXSkge1xuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCksXG4gICAgICBvYmplY3RzOiBbXVxuICAgIH1cbiAgICBfLmZvckVhY2gob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIF8uZm9yRWFjaChvYmplY3QsIChvKSA9PiB7XG4gICAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbnN3ZXIub2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gb2JqZWN0IHN1aXRhYmxlIGZvciBkZWxldGUvZGVsXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhbGxvd09iamVjdChuYW1lOnN0cmluZywga2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaVZlcnNpb246IEs4U19BUElfVkVSU0lPTixcbiAgICAgIGtpbmQ6IHRvS2luZE5hbWUoa2luZCksXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIGEgY29sbGVjdGlvbiBieSBsYWJlbFxuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeUxhYmVsKG9iamVjdHM6QXJyYXk8YW55PiwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgIHZhciBtYXRjaGVzID0gKDxhbnk+XykubWF0Y2hlcyhsYWJlbFNlbGVjdG9yKTtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqZWN0cywgKG9iamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXMoZ2V0TGFiZWxzKG9iamVjdCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBuYW1lc3BhY2UgdG8gYW4gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHkgc2V0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gYXBwbHlOYW1lc3BhY2Uob2JqOmFueSwgbmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIW9iai5raW5kIHx8ICFuYW1lc3BhY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShvYmoua2luZCkpICYmICFvYmoubWV0YWRhdGEubmFtZXNwYWNlKSB7XG4gICAgICBvYmoubWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbHkgc2NvcGVkIG5hbWUgd2l0aCB0aGUgbmFtZXNwYWNlL2tpbmQsIHN1aXRhYmxlIHRvIHVzZSBhcyBhIGtleSBpbiBtYXBzXG4gICAqKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGVudGl0eSkge1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoZW50aXR5KTtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKChuYW1lc3BhY2UgPyBuYW1lc3BhY2UgOiBcIlwiKSwga2luZCwgbmFtZSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXBpVmVyc2lvbihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydhcGlWZXJzaW9uJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6IFsnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBqZW5raW5zaGlmdCBpbiB2YW5pbGxhIGs4cywgbGV0J3MgcG9sbCBidWlsZCBjb25maWdzIGJ5IGRlZmF1bHRcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0FkZFBvbGxlZFR5cGVzJyxcbiAgICBkZXBlbmRzOiBbJ0t1YmVybmV0ZXNBcGlJbml0J10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgICAgS3ViZXJuZXRlc0FQSS5wb2xsaW5nT25seS5wdXNoKEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTKTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB3ZSdyZSBydW5uaW5nIGFnYWluc3Qgb3BlbnNoaWZ0IG9yIG5vdFxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FQSVByb3ZpZGVySW5pdCcsXG4gICAgZGVwZW5kczogWydoYXd0aW8tb2F1dGgnLCAnS3ViZXJuZXRlc0FwaUluaXQnXSxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgaXNPcGVuU2hpZnQgPSBmYWxzZTtcbiAgICAgIC8vIHByb2JlIC9vYXBpL3YxIGFzIGl0J3MgaGFzIGFsbCB0aGUgb3BlbnNoaWZ0IGV4dGVuc2lvbnNcbiAgICAgIHZhciB0ZXN0VVJMID0gbmV3IFVSSShLdWJlcm5ldGVzQVBJLm1hc3RlclVybCkuc2VnbWVudCgnb2FwaS92MScpLnRvU3RyaW5nKCk7XG4gICAgICAkLmFqYXgoPGFueT57XG4gICAgICAgIHVybDogdGVzdFVSTCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcbiAgICAgICAgICBsb2cuaW5mbyhcIkJhY2tlbmQgaXMgYW4gb3BlbnNoaWZ0IGluc3RhbmNlXCIpO1xuICAgICAgICAgIGlzT3BlblNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgIGxvZy5pbmZvKFwiRXJyb3IgcHJvYmluZyBcIiArIHRlc3RVUkwgKyBcIiBhc3N1bWluZyBiYWNrZW5kIGlzIG5vdCBhbiBvcGVuc2hpZnQgaW5zdGFuY2UuICBFcnJvciBkZXRhaWxzOiBzdGF0dXM6IFwiLCB0ZXh0U3RhdHVzLCBcIiBlcnJvclRocm93bjogXCIsIGVycm9yVGhyb3duLCBcIiBqcVhIUiBpbnN0YW5jZTogXCIsIGpxWEhSKTtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSdsbCBqdXN0IGdyYWIgdGhlIFVSSSBmb3IgdGhlIGRvY3VtZW50IGhlcmUgaW4gY2FzZSB3ZSBuZWVkIGl0XG4gICAgICAgICAgdmFyIGRvY3VtZW50VVJJID0gbmV3IFVSSSgpLnBhdGgoSGF3dGlvQ29yZS5kb2N1bWVudEJhc2UoKSk7XG4gICAgICAgICAgaWYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikge1xuICAgICAgICAgICAgLy8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgbG9nLmluZm8oXCJtYXN0ZXJfdXJsIHVuc2V0IG9yIHNldCB0byAnLycsIGFzc3VtaW5nIEFQSSBzZXJ2ZXIgaXMgYXQgL1wiKTtcbiAgICAgICAgICAgIG1hc3RlciA9IGRvY3VtZW50VVJJLnF1ZXJ5KFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXN0ZXIgPT09IFwiazhzXCIpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHVzaW5nIHRoZSBidWlsdC1pbiBrdWlzcCBwcm94eSB0byBhY2Nlc3MgdGhlIEFQSSBzZXJ2ZXJcbiAgICAgICAgICAgIGxvZy5pbmZvKFwibWFzdGVyX3VybCBzZXQgdG8gJ2s4cycsIGFzc3VtaW5nIHByb3h5IGlzIGJlaW5nIHVzZWRcIik7XG4gICAgICAgICAgICBtYXN0ZXIgPSBkb2N1bWVudFVSSS5xdWVyeShcIlwiKS5zZWdtZW50KG1hc3RlcikudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9nLmluZm8oXCJVc2luZyBrdWJlcm5ldGVzIEFQSSBVUkw6IFwiLCBtYXN0ZXIpO1xuICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgT0FVVEggY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCB0cnVlKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKCduZ1Jlc291cmNlJyk7XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlU2VuZChyZXF1ZXN0KSB7XG4gICAgdmFyIHRva2VuID0gSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IGNsaWVudHMgdG8gYWRkIG90aGVyIHR5cGVzIHRvIGZvcmNlIHBvbGxpbmcgdW5kZXIgd2hhdGV2ZXIgY2lyY3Vtc3RhbmNlc1xuICBleHBvcnQgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuUFJPSkVDVFMsIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IGxvZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2tpbmQ6c3RyaW5nLCBwcml2YXRlIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkXCIsIHRoaXMua2luZCwgXCI6XCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZFwiLCB0aGlzLmtpbmQsIFwiOlwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiY2hhbmdlZDpcIiwgb2JqZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuSU5JVCwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5JTklULCB0aGlzLl9vYmplY3RzKTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb2JqZWN0cyhvYmpzOmFueVtdKSB7XG4gICAgICB0aGlzLl9vYmplY3RzLmxlbmd0aCA9IDA7XG4gICAgICBfLmZvckVhY2gob2JqcywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoIW9iai5raW5kKSB7XG4gICAgICAgICAgb2JqLmtpbmQgPSB0b0tpbmROYW1lKHRoaXMua2luZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZWRJdGVtKG5hbWU6c3RyaW5nKSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgb3V0IG9iamVjdHMgZnJvbSBvdGhlciBuYW1lc3BhY2VzIHRoYXQgY291bGQgYmUgcmV0dXJuZWRcbiAgICBwcml2YXRlIGJlbG9uZ3Mob2JqZWN0KSB7XG4gICAgICBpZiAodGhpcy5uYW1lc3BhY2UgJiYgZ2V0TmFtZXNwYWNlKG9iamVjdCkgIT09IHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmplY3Qua2luZCkge1xuICAgICAgICBvYmplY3Qua2luZCA9IHRvS2luZE5hbWUodGhpcy5raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghdGhpcy5iZWxvbmdzKG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmplY3Qua2luZCkge1xuICAgICAgICBvYmplY3Qua2luZCA9IHRvS2luZE5hbWUodGhpcy5raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICghXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIXRoaXMuYmVsb25ncyhvYmplY3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWxldGVkID0gXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuREVMRVRFRCwgZGVsZXRlZFswXSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaW50ZXJmYWNlIENvbXBhcmVSZXN1bHQge1xuICAgIGFkZGVkOkFycmF5PGFueT47XG4gICAgbW9kaWZpZWQ6QXJyYXk8YW55PjtcbiAgICBkZWxldGVkOkFycmF5PGFueT47XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlKG9sZDpBcnJheTxhbnk+LCBfbmV3OkFycmF5PGFueT4pOkNvbXBhcmVSZXN1bHQge1xuICAgIHZhciBhbnN3ZXIgPSA8Q29tcGFyZVJlc3VsdD4ge1xuICAgICAgYWRkZWQ6IFtdLFxuICAgICAgbW9kaWZpZWQ6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9O1xuICAgIF8uZm9yRWFjaChfbmV3LCAobmV3T2JqKSA9PiB7XG4gICAgICB2YXIgb2xkT2JqID0gXy5maW5kKG9sZCwgKG8pID0+IGVxdWFscyhvLCBuZXdPYmopKTtcbiAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgIGFuc3dlci5hZGRlZC5wdXNoKG5ld09iaik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLnRvSnNvbihvbGRPYmopICE9PSBhbmd1bGFyLnRvSnNvbihuZXdPYmopKSB7XG4gICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKG9sZCwgKG9sZE9iaikgPT4ge1xuICAgICAgdmFyIG5ld09iaiA9IF8uZmluZChfbmV3LCAobykgPT4gZXF1YWxzKG8sIG9sZE9iaikpO1xuICAgICAgaWYgKCFuZXdPYmopIHtcbiAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAqL1xuICBjbGFzcyBPYmplY3RQb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBfbGFzdEZldGNoID0gPEFycmF5PGFueT4+IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ludGVydmFsID0gNTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRDYW5jZWw6YW55ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0VVJMOnN0cmluZywgcHJpdmF0ZSBoYW5kbGVyOldTSGFuZGxlcikge1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IFxuICAgICAgdGhpcy5fbGFzdEZldGNoID0gdGhpcy5oYW5kbGVyLmxpc3Qub2JqZWN0cztcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb25uZWN0ZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkb0dldCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gXG4gICAgICAkLmFqYXgodGhpcy5yZXN0VVJMLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2cuZGVidWcodGhpcy5oYW5kbGVyLmtpbmQsIFwiZmV0Y2hlZCBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgICB2YXIgaXRlbXMgID0gKGRhdGEgJiYgZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW107XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbXBhcmUodGhpcy5fbGFzdEZldGNoLCBpdGVtcyk7XG4gICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gaXRlbXM7XG4gICAgICAgICAgXy5mb3JJbihyZXN1bHQsIChpdGVtczphbnlbXSwgYWN0aW9uOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgXy5mb3JFYWNoKGl0ZW1zLCAoaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfLmNsb25lKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5vbm1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVyLmxpc3QuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcInBvbGxpbmdcIik7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmluZm8odGhpcy5oYW5kbGVyLmtpbmQsIFwiLSBGYWlsZWQgdG8gcG9sbCBvYmplY3RzLCB1c2VyIGlzIG5vdCBhdXRob3JpemVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIi0gT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyLmVycm9yKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1Zyh0aGlzLmhhbmRsZXIua2luZCwgXCItIEVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRpc2Nvbm5lY3RpbmdcIik7XG4gICAgICBpZiAodGhpcy50Q2FuY2VsKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGNhbmNlbGxpbmcgcG9sbGluZ1wiKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKHRoaXMuaGFuZGxlci5raW5kLCBcIiAtIGRlc3Ryb3llZFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVyIHtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgcG9sbGVyOk9iamVjdFBvbGxlcjtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbWVzc2FnZUxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ0t1YmVybmV0ZXNBUEkuV1NIYW5kbGVyJyk7IFxuICAgICAgdGhpcy5tZXNzYWdlTG9nID0gTG9nZ2VyLmdldCgnS3ViZXJuZXRlc0FQSS5XU0hhbmRlci5tZXNzYWdlcycpO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9saXN0IHx8IDxPYmplY3RMaXN0PiB7IG9iamVjdHM6IFtdIH07XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBnZXQgZXJyb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZi5vcHRpb25zLmVycm9yO1xuICAgIH1cblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGYua2luZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgdmFyIGV2dCA9IGtleS5yZXBsYWNlKCdvbicsICcnKTtcbiAgICAgICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcIkFkZGluZyBldmVudCBoYW5kbGVyIGZvciAnXCIgKyBldnQgKyBcIicgdXNpbmcgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxvZy5kZWJ1ZyhcInJlY2VpdmVkIHdlYnNvY2tldCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCAgJiYgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGRlc3Ryb3llZCBidXQgc3RpbGwgcmVjZWl2aW5nIG1lc3NhZ2VzLCBjbG9zaW5nIHdlYnNvY2tldCwga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3Npbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gbm90aGluZyB0byBkbywgYXNzdW1lIGl0J3MgYWxyZWFkeSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlNob3VsZCBiZSBjbG9zZWQhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVjZWl2ZWQgb3BlbiBldmVudCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgIGlmICh0aGlzLnNob3VsZENsb3NlKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlY2VpdmVkIGNsb3NlIGV2ZW50IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGRlc3Ryb3llZCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBuYW1lc3BhY2U6IFwiLCB0aGlzLnNlbGYubmFtZXNwYWNlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC53YXNDbGVhbikge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uZXJyb3IoZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIHJlY2VpdmVkIGFuIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkQ2xvc2UoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fCAodGhpcy5wb2xsZXIgJiYgdGhpcy5wb2xsZXIuY29ubmVjdGVkKTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIGEgY3VzdG9tIFVSTCBpcyBnb2luZyB0byBiZSB1c2VkXG4gICAgICBpZiAodGhpcy5zZWxmLnJlc3RVUkwgPT09ICcnICYmIHRoaXMuc2VsZi53c1VSTCA9PT0gJycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgIGlmIChfLmFueShwb2xsaW5nT25seSwgKGtpbmQpID0+IGtpbmQgPT09IHRoaXMuc2VsZi5raW5kKSkge1xuICAgICAgICAgIHRoaXMubG9nLmluZm8oXCJVc2luZyBwb2xsaW5nIGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZG9Db25uZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHdzVVJMID0gdGhpcy5zZWxmLndzVVJMO1xuICAgICAgICAgICAgaWYgKHdzVVJMKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGluZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh3c1VSTCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnModGhpcywgdGhpcy5zb2NrZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9nLmluZm8oXCJObyB3c1VSTCBmb3Iga2luZDogXCIgKyB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICAkLmFqYXgodGhpcy5zZWxmLnJlc3RVUkwsIDxhbnk+IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9saXN0Lm9iamVjdHMgPSBkYXRhLml0ZW1zIHx8IFtdO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGlmIChqcVhIUi5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmluZm8oXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YSB3aGlsZSBjb25uZWN0aW5nIHRvIGJhY2tlbmQgZm9yIHR5cGU6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIsIHVzZXIgaXMgbm90IGF1dGhvcml6ZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdC5vYmplY3RzID0gW107XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIkZhaWxlZCB0byBmZXRjaCBkYXRhIHdoaWxlIGNvbm5lY3RpbmcgdG8gYmFja2VuZCBmb3IgdHlwZTogXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkb0Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ2xvc2luZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNsb3NlIGNhbGxlZCBvbiB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5zZWxmLm5hbWVzcGFjZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvbGxlcikge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3lpbmcgcG9sbGVyIGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIG5hbWVzcGFjZTogXCIsIHRoaXMuc2VsZi5uYW1lc3BhY2UpO1xuICAgICAgICB0aGlzLnBvbGxlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIF9hcGlWZXJzaW9uOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX29wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgICAgdGhpcy5fa2luZCA9IF9vcHRpb25zLmtpbmQ7XG4gICAgICB0aGlzLl9hcGlWZXJzaW9uID0gX29wdGlvbnMuYXBpVmVyc2lvbjtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IF9vcHRpb25zLm5hbWVzcGFjZSB8fCBudWxsO1xuXG4gICAgICB2YXIgcHJlZiA9IHRoaXMuZ2V0UHJlZml4KCk7XG5cbiAgICAgIGlmICh0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCAnbmFtZXNwYWNlcycsIHRoaXMuX25hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXIodGhpcyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdCA9IG5ldyBPYmplY3RMaXN0KF9vcHRpb25zLmtpbmQsIF9vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgICAgbG9nLmRlYnVnKFwiY3JlYXRpbmcgbmV3IGNvbGxlY3Rpb24gZm9yXCIsIHRoaXMua2luZCwgXCIgbmFtZXNwYWNlOiBcIiwgdGhpcy5uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKTpLOFNPcHRpb25zIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9yZXN0VXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVVJJKGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd3NVcmwoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uICYmIGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24pKSB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gbnVsbCB8fCAhYW5zd2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdzVXJsKGFuc3dlcikucXVlcnkoPGFueT4ge1xuICAgICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCk7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IENvcmUud2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uICYmIHVybC5pbmRleE9mKFwiOi8vXCIpIDwgMCkge1xuICAgICAgICAgIHZhciBob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgICAgIGlmIChob3N0bmFtZSkge1xuICAgICAgICAgICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuICAgICAgICAgICAgaWYgKHBvcnQpIHtcbiAgICAgICAgICAgICAgaG9zdG5hbWUgKz0gXCI6XCIgKyBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKGhvc3RuYW1lLCBtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybCh1cmwpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl93c1VybCB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlc3RVUkwoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuX3Jlc3RVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgLypcbiAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdDtcbiAgICAgICovXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMYWJlbEZpbHRlcihjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3RvcjpMYWJlbE1hcCkge1xuICAgICAgbG9nLmRlYnVnKFwiQWRkaW5nIGxhYmVsIGZpbHRlcjogXCIsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgdmFyIGNiT2xkID0gY2I7XG4gICAgICByZXR1cm4gKGRhdGE6YW55W10pID0+IHtcbiAgICAgICAgZGF0YSA9IGZpbHRlckJ5TGFiZWwoZGF0YSwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICAgIGNiT2xkKGRhdGEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGltZSBmZXRjaCBvZiB0aGUgZGF0YS4uLlxuICAgIHB1YmxpYyBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKSB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbmNlKFdhdGNoQWN0aW9ucy5JTklULCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBnZXRQcmVmaXgoKSB7XG4gICAgICB2YXIgcHJlZiA9IHByZWZpeEZvcktpbmQodGhpcy5fa2luZCk7XG4gICAgICBpZiAoIXByZWYpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FwaVZlcnNpb24gJiYgXy5zdGFydHNXaXRoKHRoaXMuX2FwaVZlcnNpb24sICdleHRlbnNpb25zJykpIHtcbiAgICAgICAgICBwcmVmID0gVXJsSGVscGVycy5qb2luKEs4U19FWFRfUFJFRklYLCB0aGlzLl9hcGlWZXJzaW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24ga2luZDogJyArIHRoaXMuX2tpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJlZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc3RVcmxGb3IoaXRlbTphbnksIHVzZU5hbWU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIGlmICh1c2VOYW1lICYmICFuYW1lKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5hbWUgbWlzc2luZyBmcm9tIGl0ZW06IFwiLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgLy8gbGV0cyB0cnVzdCB0aGUgdXJsIHRvIGJlIGNvcnJlY3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VkKHRvQ29sbGVjdGlvbk5hbWUoaXRlbS5raW5kKSkpIHtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pIHx8IHRoaXMuX25hbWVzcGFjZTtcbiAgICAgICAgICB2YXIgcHJlZml4ID0gdGhpcy5nZXRQcmVmaXgoKTtcbiAgICAgICAgICB2YXIga2luZCA9IHRoaXMuX2tpbmQ7XG4gICAgICAgICAgaWYgKCFLdWJlcm5ldGVzQVBJLmlzT3BlblNoaWZ0ICYmIChraW5kID09PSBcImJ1aWxkY29uZmlnc1wiIHx8IGtpbmQgPT09IFwiQnVpbGRDb25maWdcIikpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IFVybEhlbHBlcnMuam9pbihcIi9hcGkvdjEvcHJveHkvbmFtZXNwYWNlc1wiLCBuYW1lc3BhY2UsIFwiL3NlcnZpY2VzL2plbmtpbnNoaWZ0OjgwL1wiLCBwcmVmaXgpO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiVXNpbmcgYnVpbGRjb25maWdzIFVSTCBvdmVycmlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXgsICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCBraW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHVzZU5hbWUpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKHVybCwgbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8vIGNvbnRpbnVhbGx5IGdldCB1cGRhdGVzXG4gICAgcHVibGljIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yPzpMYWJlbE1hcCk6KGRhdGE6YW55W10pID0+IHZvaWQge1xuICAgICAgaWYgKGxhYmVsU2VsZWN0b3IpIHtcbiAgICAgICAgY2IgPSB0aGlzLmFkZExhYmVsRmlsdGVyKGNiLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJwYXNzaW5nIGV4aXN0aW5nIG9iamVjdHM6XCIsIHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiYWRkaW5nIHdhdGNoIGNhbGxiYWNrOlwiLCBjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1Zyh0aGlzLmtpbmQsIFwiZ290IGRhdGE6XCIsIGRhdGEpO1xuICAgICAgICBjYihkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgbG9nLmRlYnVnKHRoaXMua2luZCwgXCJyZW1vdmluZyB3YXRjaCBjYWxsYmFjazpcIiwgY2IpO1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3VzdG9tIGNoZWNrcyBmb3Igc3BlY2lmaWMgY2FzZXNcbiAgICAgIHN3aXRjaCAodGhpcy5fa2luZCkge1xuICAgICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6XG4gICAgICAgICAgaWYgKGl0ZW0uc3BlYy5jbHVzdGVySVAgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgaXRlbS5zcGVjLmNsdXN0ZXJJUDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+IHtcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKGl0ZW0pLFxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIC8vIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUob3B0aW9uczogYW55LCBuYW1lc3BhY2U/OiBhbnkpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtpbmQgPSBvcHRpb25zO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICBraW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAodGhpcy5fY2xpZW50c1trZXldKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXR1cm5pbmcgZXhpc3RpbmcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoX29wdGlvbnMpKTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNyZWF0aW5nIG5ldyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICB0aGlzLl9jbGllbnRzW2tleV0gPSBjbGllbnQ7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pIHtcbiAgICAgIF8uZm9yRWFjaChoYW5kbGVzLCAoaGFuZGxlKSA9PiB7XG4gICAgICAgIGNsaWVudC51bndhdGNoKGhhbmRsZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBrZXkgPSBjbGllbnQuZ2V0S2V5KCk7XG4gICAgICBpZiAodGhpcy5fY2xpZW50c1trZXldKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjLnJlbW92ZVJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgaWYgKGMuZGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRGVzdHJveWVkIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5ID0gbmV3IEs4U0NsaWVudEZhY3RvcnlJbXBsKCk7XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLOFNDbGllbnRGYWN0b3J5JywgKCkgPT4ge1xuICAgIHJldHVybiBLOFNDbGllbnRGYWN0b3J5O1xuICB9KTtcblxuICB2YXIgTk9fS0lORCA9IFwiTm8ga2luZCBpbiBzdXBwbGllZCBvcHRpb25zXCI7XG4gIHZhciBOT19PQkpFQ1QgPSBcIk5vIG9iamVjdCBpbiBzdXBwbGllZCBvcHRpb25zXCI7XG4gIHZhciBOT19PQkpFQ1RTID0gXCJObyBvYmplY3RzIGluIGxpc3Qgb2JqZWN0XCI7XG5cbiAgLypcbiAgICogU3RhdGljIGZ1bmN0aW9ucyBmb3IgbWFuaXB1bGF0aW5nIGs4cyBvYmozY3RzXG4gICAqL1xuXG4gIC8qXG4gICAqIEdldCBhIGNvbGxlY3Rpb25cbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXQob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhOmFueVtdKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfVxuICAgIGNsaWVudC5nZXQoc3VjY2Vzcywgb3B0aW9ucy5sYWJlbFNlbGVjdG9yKTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zOmFueSwgYWN0aW9uOihvYmplY3Q6YW55LCBzdWNjZXNzOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I6KGVycjphbnkpID0+IHZvaWQpID0+IHZvaWQpIHtcbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0Lm9iamVjdHMpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVFM7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSB7fTtcbiAgICB2YXIgb2JqZWN0cyA9IF8uY2xvbmVEZWVwKG9wdGlvbnMub2JqZWN0Lm9iamVjdHMpO1xuICAgIGZ1bmN0aW9uIGFkZFJlc3VsdChpZCwgZGF0YSkge1xuICAgICAgYW5zd2VyW2lkXSA9IGRhdGE7XG4gICAgICBuZXh0KCk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgaWYgKG9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcInByb2Nlc3NlZCBhbGwgb2JqZWN0cywgcmV0dXJuaW5nIHN0YXR1c1wiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoYW5zd2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzLnNoaWZ0KCk7XG4gICAgICBsb2cuZGVidWcoXCJQcm9jZXNzaW5nIG9iamVjdDogXCIsIGdldE5hbWUob2JqZWN0KSk7XG4gICAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBhZGRSZXN1bHQoZnVsbE5hbWUob2JqZWN0KSwgZGF0YSk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICBhY3Rpb24ob2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuICAgIG5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9uczphbnkpIHtcbiAgICBsb2cuZGVidWcoXCJOb3JtYWxpemluZyBzdXBwbGllZCBvcHRpb25zOiBcIiwgb3B0aW9ucyk7XG4gICAgLy8gbGV0J3MgdHJ5IGFuZCBzdXBwb3J0IGFsc28ganVzdCBzdXBwbHlpbmcgazhzIG9iamVjdHMgZGlyZWN0bHlcbiAgICBpZiAob3B0aW9ucy5tZXRhZGF0YSB8fCBnZXRLaW5kKG9wdGlvbnMpID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIHZhciBvYmplY3QgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgb2JqZWN0OiBvYmplY3RcbiAgICAgIH07XG4gICAgICBpZiAob2JqZWN0Lm9iamVjdHMpIHtcbiAgICAgICAgb3B0aW9ucy5raW5kID0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMub2JqZWN0KSB7XG4gICAgICB0aHJvdyBOT19PQkpFQ1Q7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3Qua2luZCkge1xuICAgICAgaWYgKG9wdGlvbnMua2luZCkge1xuICAgICAgICBvcHRpb25zLm9iamVjdC5raW5kID0gdG9LaW5kTmFtZShvcHRpb25zLmtpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9nLmRlYnVnKFwiT3B0aW9ucyBvYmplY3Qgbm9ybWFsaXplZDogXCIsIG9wdGlvbnMpO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGRlbChvcHRpb25zOmFueSkge1xuICAgIG9wdGlvbnMgPSBub3JtYWxpemVPcHRpb25zKG9wdGlvbnMpO1xuICAgIC8vIHN1cHBvcnQgZGVsZXRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBkZWwoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgIH07XG4gICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICBjbGllbnQuZGVsZXRlKG9wdGlvbnMub2JqZWN0LCBzdWNjZXNzLCBlcnJvcik7XG4gIH1cblxuICAvKlxuICAgKiBBZGQvcmVwbGFjZSBhbiBvYmplY3QsIG9yIGEgbGlzdCBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gcHV0KG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBwdXR0aW5nIGEgbGlzdCBvZiBvYmplY3RzXG4gICAgaWYgKG9wdGlvbnMub2JqZWN0LmtpbmQgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgaGFuZGxlTGlzdEFjdGlvbihvcHRpb25zLCAob2JqZWN0OmFueSwgc3VjY2VzcywgZXJyb3IpID0+IHtcbiAgICAgICAgcHV0KHtcbiAgICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmtpbmQgPSBvcHRpb25zLmtpbmQgfHwgdG9Db2xsZWN0aW9uTmFtZShvcHRpb25zLm9iamVjdCk7XG4gICAgb3B0aW9ucy5uYW1lc3BhY2UgPSBuYW1lc3BhY2VkKG9wdGlvbnMua2luZCkgPyBvcHRpb25zLm5hbWVzcGFjZSB8fCBnZXROYW1lc3BhY2Uob3B0aW9ucy5vYmplY3QpIDogbnVsbDtcbiAgICBvcHRpb25zLmFwaVZlcnNpb24gPSBvcHRpb25zLmFwaVZlcnNpb24gfHwgZ2V0QXBpVmVyc2lvbihvcHRpb25zLm9iamVjdCk7XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIGNsaWVudC5nZXQoKG9iamVjdHMpID0+IHtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgdmFyIGVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvcHRpb25zLmVycm9yKGVycik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBlcnJvciBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEs4U0NsaWVudEZhY3RvcnkuZGVzdHJveShjbGllbnQpO1xuICAgICAgfTtcbiAgICAgIGNsaWVudC5wdXQob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9KTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdhdGNoKG9wdGlvbnM6SzhTT3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5raW5kKSB7XG4gICAgICB0aHJvdyBOT19LSU5EO1xuICAgIH1cbiAgICB2YXIgY2xpZW50ID0gPENvbGxlY3Rpb24+IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBoYW5kbGUgPSBjbGllbnQud2F0Y2gob3B0aW9ucy5zdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIHZhciBzZWxmID0ge1xuICAgICAgY2xpZW50OiBjbGllbnQsXG4gICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgIGRpc2Nvbm5lY3Q6ICgpID0+IHtcbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KHNlbGYuY2xpZW50LCBzZWxmLmhhbmRsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjbGllbnQuY29ubmVjdCgpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
