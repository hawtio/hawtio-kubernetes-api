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

//def for third-party eventing library
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
        Object.defineProperty(WatchTypes, "IMAGE_STREAMS", {
            get: function () { return "imagestreams"; },
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
        Object.defineProperty(WatchActions, "ANY", {
            get: function () { return "*"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchActions, "ADDED", {
            get: function () { return "ADDED"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchActions, "MODIFIED", {
            get: function () { return "MODIFIED"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchActions, "DELETED", {
            get: function () { return "DELETED"; },
            enumerable: true,
            configurable: true
        });
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

/// <reference path="kubernetesApiGlobals.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    function currentKubernetesNamespace() {
        var injector = HawtioCore.injector;
        if (injector) {
            var KubernetesState = injector.get("KubernetesState") || {};
            return KubernetesState.selectedNamespace || KubernetesAPI.defaultNamespace;
        }
        return KubernetesAPI.defaultNamespace;
    }
    KubernetesAPI.currentKubernetesNamespace = currentKubernetesNamespace;
    function kubernetesNamespacePath() {
        var ns = currentKubernetesNamespace();
        if (ns) {
            return "/namespaces/" + ns;
        }
        else {
            return "";
        }
    }
    KubernetesAPI.kubernetesNamespacePath = kubernetesNamespacePath;
    function apiPrefix() {
        var prefix = Core.pathGet(KubernetesAPI.osConfig, ['api', 'k8s', 'prefix']);
        if (!prefix) {
            prefix = KubernetesAPI.K8S_PREFIX;
        }
        return Core.trimLeading(prefix, '/');
    }
    KubernetesAPI.apiPrefix = apiPrefix;
    function osApiPrefix() {
        var prefix = Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']);
        if (!prefix) {
            prefix = KubernetesAPI.OS_PREFIX;
        }
        var answer = Core.trimLeading(prefix, '/');
        return answer;
    }
    KubernetesAPI.osApiPrefix = osApiPrefix;
    function masterApiUrl() {
        return KubernetesAPI.masterUrl || "";
    }
    KubernetesAPI.masterApiUrl = masterApiUrl;
    function kubernetesApiPrefix() {
        return UrlHelpers.join(apiPrefix(), KubernetesAPI.OS_API_VERSION);
    }
    KubernetesAPI.kubernetesApiPrefix = kubernetesApiPrefix;
    function openshiftApiPrefix() {
        return UrlHelpers.join(osApiPrefix(), KubernetesAPI.K8S_API_VERSION);
    }
    KubernetesAPI.openshiftApiPrefix = openshiftApiPrefix;
    function prefixForKind(kind) {
        if (kind === KubernetesAPI.WatchTypes.NAMESPACES) {
            return kubernetesApiPrefix();
        }
        if (_.any(KubernetesAPI.NamespacedTypes.k8sTypes, function (t) { return t === kind; })) {
            return kubernetesApiPrefix();
        }
        if (_.any(KubernetesAPI.NamespacedTypes.osTypes, function (t) { return t === kind; })) {
            return openshiftApiPrefix();
        }
        return null;
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
    function updateOrCreateObject(object, KubernetesModel, success, error) {
        var kind = getKind(object);
        if (kind === "List") {
            KubernetesAPI.log.debug("Object is a list, deploying all objects");
            _.forEach(object.items, function (obj) {
                KubernetesAPI.log.debug("Deploying: ", obj);
                updateOrCreateObject(obj, KubernetesModel, success, error);
            });
            return;
        }
        if (!kind) {
            KubernetesAPI.log.debug("Object: ", object, " has no object type");
            return;
        }
        kind = kind.toLowerCase().pluralize();
        var resource = KubernetesModel[kind + 'Resource'];
        if (!resource) {
            KubernetesAPI.log.debug("Unable to find resource for kind: ", kind);
            return;
        }
        var name = getName(object);
        if (!name) {
            KubernetesAPI.log.debug("Object has no name: ", object);
            return;
        }
        var isUpdate = _.any(KubernetesModel[kind], function (n) { return n === name; });
        var action = isUpdate ? "Modified" : "Added";
        var successInternal = function (data) {
            KubernetesAPI.log.debug(action, data);
            if (!isUpdate) {
                KubernetesModel[kind].push(data);
            }
            if (success) {
                success(data);
            }
        };
        var errorInternal = function (err) {
            KubernetesAPI.log.debug("Failed to add/modify object: ", object, " error: ", err);
            if (error) {
                error(err);
            }
        };
        if (isUpdate) {
            KubernetesAPI.log.debug("Object already exists, updating...");
            resource.save({ id: name }, object, successInternal, errorInternal);
        }
        else {
            KubernetesAPI.log.debug("Object doesn't exist, creating...");
            resource.create({}, object, successInternal, errorInternal);
        }
    }
    KubernetesAPI.updateOrCreateObject = updateOrCreateObject;
    function createResource(thing, urlTemplate, $resource, KubernetesModel) {
        var prefix = prefixForKind(thing);
        if (!prefix) {
            KubernetesAPI.log.debug("Invalid type given: ", thing);
            return null;
        }
        var params = {
            namespace: currentKubernetesNamespace
        };
        if (thing === "namespaces") {
            params = {};
        }
        var url = UrlHelpers.join(masterApiUrl(), prefix, urlTemplate);
        KubernetesAPI.log.debug("Url for ", thing, ": ", url);
        var resource = $resource(url, null, {
            query: { method: 'GET', isArray: false, params: params },
            create: { method: 'POST', params: params },
            save: { method: 'PUT', params: params },
            delete: { method: 'DELETE', params: _.extend({
                    id: '@id'
                }, params) }
        });
        return resource;
    }
    KubernetesAPI.createResource = createResource;
    function imageRepositoriesRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/imagestreams");
    }
    KubernetesAPI.imageRepositoriesRestURL = imageRepositoriesRestURL;
    function deploymentConfigsRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/deploymentconfigs");
    }
    KubernetesAPI.deploymentConfigsRestURL = deploymentConfigsRestURL;
    function buildsLogsRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/proxy/buildlogs");
    }
    KubernetesAPI.buildsLogsRestURL = buildsLogsRestURL;
    function buildsRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/builds");
    }
    KubernetesAPI.buildsRestURL = buildsRestURL;
    function buildConfigHooksRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/buildconfighooks");
    }
    KubernetesAPI.buildConfigHooksRestURL = buildConfigHooksRestURL;
    function buildConfigsRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/buildconfigs");
    }
    KubernetesAPI.buildConfigsRestURL = buildConfigsRestURL;
    function routesRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/routes");
    }
    KubernetesAPI.routesRestURL = routesRestURL;
    function templatesRestURL() {
        return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/templates");
    }
    KubernetesAPI.templatesRestURL = templatesRestURL;
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
    function wsUrl(url) {
        var protocol = wsScheme(url);
        return new URI(url).scheme(protocol);
    }
    KubernetesAPI.wsUrl = wsUrl;
    function equals(left, right) {
        return getUID(left) === getUID(right);
    }
    KubernetesAPI.equals = equals;
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
    var fabricDomain = "io.fabric8";
    KubernetesAPI.mbean = fabricDomain + ":type=Kubernetes";
    KubernetesAPI.managerMBean = fabricDomain + ":type=KubernetesManager";
    KubernetesAPI.appViewMBean = fabricDomain + ":type=AppView";
    function isKubernetes(workspace) {
        return true;
    }
    KubernetesAPI.isKubernetes = isKubernetes;
    function isKubernetesTemplateManager(workspace) {
        return true;
    }
    KubernetesAPI.isKubernetesTemplateManager = isKubernetesTemplateManager;
    function isAppView(workspace) {
        return true;
    }
    KubernetesAPI.isAppView = isAppView;
    function setJson($scope, id, collection) {
        $scope.id = id;
        if (!$scope.fetched) {
            return;
        }
        if (!id) {
            $scope.json = '';
            return;
        }
        if (!collection) {
            return;
        }
        var item = collection.find(function (item) { return getName(item) === id; });
        if (item) {
            $scope.json = angular.toJson(item, true);
            $scope.item = item;
        }
        else {
            $scope.id = undefined;
            $scope.json = '';
            $scope.item = undefined;
        }
    }
    KubernetesAPI.setJson = setJson;
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
    function serviceLinkUrl(service) {
        if (angular.isObject(service)) {
            var portalIP = service.$host;
            var port = null;
            var protocol = "http://";
            var spec = service.spec;
            if (spec) {
                if (!portalIP) {
                    portalIP = spec.portalIP;
                }
                var hasHttps = false;
                var hasHttp = false;
                angular.forEach(spec.ports, function (portSpec) {
                    var p = portSpec.port;
                    if (p) {
                        if (p === 443) {
                            hasHttps = true;
                        }
                        else if (p === 80) {
                            hasHttp = true;
                        }
                        if (!port) {
                            port = p;
                        }
                    }
                });
            }
            if (portalIP) {
                if (hasHttps) {
                    return "https://" + portalIP;
                }
                else if (hasHttp) {
                    return "http://" + portalIP;
                }
                else if (port) {
                    return protocol + portalIP + ":" + port + "/";
                }
                else {
                    return protocol + portalIP;
                }
            }
        }
        else if (service) {
            var serviceId = service.toString();
            if (serviceId) {
                var ServiceRegistry = getServiceRegistry();
                if (ServiceRegistry) {
                    return ServiceRegistry.serviceLink(serviceId) || "";
                }
            }
        }
        return "";
    }
    KubernetesAPI.serviceLinkUrl = serviceLinkUrl;
    function createPodCounters(selector, pods, outputPods, podLinkQuery) {
        if (outputPods === void 0) { outputPods = []; }
        if (podLinkQuery === void 0) { podLinkQuery = null; }
        var filterFn;
        if (angular.isFunction(selector)) {
            filterFn = selector;
        }
        else {
            filterFn = function (pod) { return selectorMatches(selector, getLabels(pod)); };
        }
        var answer = {
            podsLink: "",
            valid: 0,
            waiting: 0,
            error: 0
        };
        if (selector) {
            if (!podLinkQuery) {
                podLinkQuery = labelsToString(selector, " ");
            }
            answer.podsLink = Core.url("/kubernetes/pods?q=" + encodeURIComponent(podLinkQuery));
            angular.forEach(pods, function (pod) {
                if (filterFn(pod)) {
                    outputPods.push(pod);
                    var status = getStatus(pod);
                    if (status) {
                        var lower = status.toLowerCase();
                        if (lower.startsWith("run")) {
                            answer.valid += 1;
                        }
                        else if (lower.startsWith("wait") || lower.startsWith("pend")) {
                            answer.waiting += 1;
                        }
                        else if (lower.startsWith("term") || lower.startsWith("error") || lower.startsWith("fail")) {
                            answer.error += 1;
                        }
                    }
                    else {
                        answer.error += 1;
                    }
                }
            });
        }
        return answer;
    }
    KubernetesAPI.createPodCounters = createPodCounters;
    function convertKubernetesJsonToItems(json) {
        var items = json.items;
        if (angular.isArray(items)) {
            var answer = [];
            items.forEach(function (item) {
                if (item.kind === "Service") {
                    answer.push(item);
                }
            });
            items.forEach(function (item) {
                if (item.kind !== "Service") {
                    answer.push(item);
                }
            });
            return answer;
        }
        else {
            return [json];
        }
    }
    KubernetesAPI.convertKubernetesJsonToItems = convertKubernetesJsonToItems;
    function isV1beta1Or2() {
        return KubernetesAPI.defaultApiVersion === "v1beta1" || KubernetesAPI.defaultApiVersion === "v1beta2";
    }
    KubernetesAPI.isV1beta1Or2 = isV1beta1Or2;
    function entityPageLink(entity) {
        if (entity) {
            var id = getName(entity);
            var kind = getKind(entity);
            if (kind && id) {
                var path = kind.substring(0, 1).toLowerCase() + kind.substring(1) + "s";
                var namespace = getNamespace(entity);
                if (namespace && !isIgnoreNamespaceKind(kind)) {
                    return Core.url(UrlHelpers.join('/kubernetes/namespace', namespace, path, id));
                }
                else {
                    return Core.url(UrlHelpers.join('/kubernetes', path, id));
                }
            }
        }
        return null;
    }
    KubernetesAPI.entityPageLink = entityPageLink;
    function resourceKindToUriPath(kind) {
        var kindPath = kind.toLowerCase() + "s";
        if (kindPath === "replicationControllers" && !isV1beta1Or2()) {
            kindPath = "replicationcontrollers";
        }
        return kindPath;
    }
    KubernetesAPI.resourceKindToUriPath = resourceKindToUriPath;
    function isIgnoreNamespaceKind(kind) {
        return kind === "Host" || kind === "Minion";
    }
    function kubernetesUrlForKind(KubernetesApiURL, kind, namespace, path) {
        if (namespace === void 0) { namespace = null; }
        if (path === void 0) { path = null; }
        var pathSegment = "";
        if (path) {
            pathSegment = "/" + Core.trimLeading(path, "/");
        }
        var kindPath = resourceKindToUriPath(kind);
        var ignoreNamespace = isIgnoreNamespaceKind(kind);
        if (isV1beta1Or2() || ignoreNamespace) {
            var postfix = "";
            if (namespace && !ignoreNamespace) {
                postfix = "?namespace=" + namespace;
            }
            return UrlHelpers.join(KubernetesApiURL, kindPath, pathSegment, postfix);
        }
        else {
            return UrlHelpers.join(KubernetesApiURL, "/namespaces/", namespace, kindPath, pathSegment);
        }
    }
    KubernetesAPI.kubernetesUrlForKind = kubernetesUrlForKind;
    ;
    function kubernetesUrlForItemKind(KubernetesApiURL, json) {
        var kind = json.kind;
        if (kind) {
            return kubernetesUrlForKind(KubernetesApiURL, kind, json.namespace);
        }
        else {
            KubernetesAPI.log.warn("Ignoring missing kind " + kind + " for kubernetes json: " + angular.toJson(json));
            return null;
        }
    }
    KubernetesAPI.kubernetesUrlForItemKind = kubernetesUrlForItemKind;
    function kubernetesProxyUrlForService(KubernetesApiURL, service, path) {
        if (path === void 0) { path = null; }
        var pathSegment = "";
        if (path) {
            pathSegment = "/" + Core.trimLeading(path, "/");
        }
        else {
            pathSegment = "/";
        }
        var namespace = getNamespace(service);
        if (isV1beta1Or2()) {
            var postfix = "?namespace=" + namespace;
            return UrlHelpers.join(KubernetesApiURL, "/api/" + KubernetesAPI.defaultApiVersion + "/proxy" + kubernetesNamespacePath() + "/services/" + getName(service) + pathSegment + postfix);
        }
        else {
            return UrlHelpers.join(KubernetesApiURL, "/api/" + KubernetesAPI.defaultApiVersion + "/proxy/namespaces/" + namespace + "/services/" + getName(service) + pathSegment);
        }
    }
    KubernetesAPI.kubernetesProxyUrlForService = kubernetesProxyUrlForService;
    function buildConfigRestUrl(id) {
        return UrlHelpers.join(buildConfigsRestURL(), id);
    }
    KubernetesAPI.buildConfigRestUrl = buildConfigRestUrl;
    function deploymentConfigRestUrl(id) {
        return UrlHelpers.join(deploymentConfigsRestURL(), id);
    }
    KubernetesAPI.deploymentConfigRestUrl = deploymentConfigRestUrl;
    function imageRepositoryRestUrl(id) {
        return UrlHelpers.join(imageRepositoriesRestURL(), id);
    }
    KubernetesAPI.imageRepositoryRestUrl = imageRepositoryRestUrl;
    function buildRestUrl(id) {
        return UrlHelpers.join(buildsRestURL(), id);
    }
    KubernetesAPI.buildRestUrl = buildRestUrl;
    function buildLogsRestUrl(id) {
        return UrlHelpers.join(buildsLogsRestURL(), id);
    }
    KubernetesAPI.buildLogsRestUrl = buildLogsRestUrl;
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
    function getServiceRegistry() {
        var injector = HawtioCore.injector;
        return injector ? injector.get("ServiceRegistry") : null;
    }
    KubernetesAPI.getServiceRegistry = getServiceRegistry;
    function resizeController($http, KubernetesApiURL, replicationController, newReplicas, onCompleteFn) {
        if (onCompleteFn === void 0) { onCompleteFn = null; }
        var id = getName(replicationController);
        var namespace = getNamespace(replicationController) || "";
        var url = kubernetesUrlForKind(KubernetesApiURL, "ReplicationController", namespace, id);
        $http.get(url).
            success(function (data, status, headers, config) {
            if (data) {
                var desiredState = data.spec;
                if (!desiredState) {
                    desiredState = {};
                    data.spec = desiredState;
                }
                desiredState.replicas = newReplicas;
                $http.put(url, data).
                    success(function (data, status, headers, config) {
                    KubernetesAPI.log.debug("updated controller " + url);
                    if (angular.isFunction(onCompleteFn)) {
                        onCompleteFn();
                    }
                }).
                    error(function (data, status, headers, config) {
                    KubernetesAPI.log.warn("Failed to save " + url + " " + data + " " + status);
                });
            }
        }).
            error(function (data, status, headers, config) {
            KubernetesAPI.log.warn("Failed to load " + url + " " + data + " " + status);
        });
    }
    KubernetesAPI.resizeController = resizeController;
    function podStatus(pod) {
        return getStatus(pod);
    }
    KubernetesAPI.podStatus = podStatus;
    function gitPathToUrl(iconPath, branch) {
        if (branch === void 0) { branch = "master"; }
        return (HawtioCore.injector.get('AppLibraryURL') || '') + "/git/" + branch + iconPath;
    }
    KubernetesAPI.gitPathToUrl = gitPathToUrl;
    function toRawJson(item) {
        var o = angular.copy(item);
        angular.forEach(o, function (value, key) {
            if (key.startsWith("$") || key.startsWith("_")) {
                delete o[key];
            }
        });
        return JSON.stringify(o, null, 2);
    }
    KubernetesAPI.toRawJson = toRawJson;
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiHelpers.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    KubernetesAPI._module = angular.module(KubernetesAPI.pluginName, []);
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
                    next();
                    return;
                }
            })
                .fail(function (response) {
                KubernetesAPI.log.debug("Error fetching OAUTH config: ", response);
            })
                .always(function () {
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
    var ObjectList = (function () {
        function ObjectList(kind, namespace) {
            var _this = this;
            this.triggerChangedEvent = _.debounce(function () {
                _this._ee.emit(KubernetesAPI.WatchActions.ANY, _this._objects);
            }, 500, { trailing: true });
            this._ee = undefined;
            this._initialized = false;
            this._objects = [];
            this.log = undefined;
            var loggerName = 'k8s-objects/' + (namespace ? UrlHelpers.join(namespace, kind) : kind);
            this.log = Logger.get(loggerName);
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
                _this.initialized = true;
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
            enumerable: true,
            configurable: true
        });
        ObjectList.prototype.hasNamedItem = function (item) {
            return _.any(this._objects, function (obj) {
                return KubernetesAPI.getName(obj) === KubernetesAPI.getName(item);
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
            this.log = Logger.get('k8s-objects/' + getKey(handler.collection.kind, handler.collection.namespace));
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
                            item = _.cloneDeep(item);
                            item.kind = _this.handler.collection.kind;
                            _this.handler.collection.namespace ? item.namespace = _this.handler.collection.namespace : false;
                            var event = {
                                data: angular.toJson({
                                    type: action.toUpperCase(),
                                    object: item
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
                        _this._connected = false;
                        _this.log.debug("Out of retries, stopping polling, error: ", error);
                    }
                    else {
                        _this.retries = _this.retries - 1;
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
            this.log = Logger.get('k8s-objects/' + getKey(_self.kind, _self.namespace));
        }
        Object.defineProperty(WSHandler.prototype, "list", {
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
            this.log.debug("Event: ", data);
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
            if (!this.socket && !this.poller) {
                this.log.debug("Connecting websocket for kind: ", this.self.kind);
                var ws = this.socket = new WebSocket(this.self.wsURL);
                this.setHandlers(this, ws);
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
                this.socket.close();
            }
            if (this.poller) {
                this.poller.destroy();
                delete this.poller;
            }
        };
        return WSHandler;
    })();
    var CollectionImpl = (function () {
        function CollectionImpl(kind, namespace) {
            this.handlers = undefined;
            this.list = undefined;
            this._kind = kind;
            this._namespace = namespace || null;
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
            this._restUrl = new URI(UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path));
            this._wsUrl = KubernetesAPI.wsUrl(UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path)).query({
                watch: true,
                access_token: HawtioOAuth.getOAuthToken()
            });
            this.handlers = new WSHandler(this);
            var list = this.list = new ObjectList(kind, namespace);
            this.handlers.list = list;
        }
        ;
        CollectionImpl.prototype.getKey = function () {
            return getKey(this._kind, this._namespace);
        };
        ;
        Object.defineProperty(CollectionImpl.prototype, "wsURL", {
            get: function () {
                return this._wsUrl.toString();
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "restURL", {
            get: function () {
                return this._restUrl.toString();
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(CollectionImpl.prototype, "namespace", {
            get: function () {
                return this._namespace;
            },
            set: function (ns) {
                this._namespace = ns;
            },
            enumerable: true,
            configurable: true
        });
        ;
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
        CollectionImpl.prototype.get = function (cb) {
            var _this = this;
            if (!this.list.initialized) {
                this.list.events.once(KubernetesAPI.WatchActions.ANY, cb);
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
        CollectionImpl.prototype.watch = function (cb) {
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
        K8SClientFactoryImpl.prototype.create = function (kind, namespace) {
            var key = getKey(kind, namespace);
            if (key in this._clients) {
                var client = this._clients[key];
                client.addRef();
                this.log.debug("Returning existing client for key: ", key, " refcount is: ", client.refCount);
                return client.collection;
            }
            else {
                var client = new ClientInstance(new CollectionImpl(kind, namespace));
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
    KubernetesAPI._module.factory('K8SClientFactory', function () {
        return new K8SClientFactoryImpl();
    });
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiPlugin.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    KubernetesAPI._module.factory('ServiceRegistry', [function () {
            return new ServiceRegistryService();
        }]);
    var ServiceRegistryService = (function () {
        function ServiceRegistryService() {
            this.model = null;
        }
        ServiceRegistryService.prototype.hasService = function (serviceName) {
            return this.findService(serviceName) ? true : false;
        };
        ServiceRegistryService.prototype.findService = function (serviceName) {
            var answer = null;
            if (serviceName) {
                var model = this.getModel();
                if (model) {
                    var namespace = model.currentNamespace();
                    return model.getService(namespace, serviceName);
                }
            }
            return answer;
        };
        ServiceRegistryService.prototype.serviceLink = function (serviceName) {
            var service = this.findService(serviceName);
            return KubernetesAPI.serviceLinkUrl(service);
        };
        ServiceRegistryService.prototype.getModel = function () {
            var answer = this.model;
            if (!answer) {
                var injector = HawtioCore.injector;
                if (injector) {
                    this.model = injector.get('KubernetesModel');
                }
            }
            answer = this.model;
            return answer;
        };
        return ServiceRegistryService;
    })();
    KubernetesAPI.ServiceRegistryService = ServiceRegistryService;
})(KubernetesAPI || (KubernetesAPI = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FTkRQT0lOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuRVZFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFQ1JFVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlkiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BRERFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLk1PRElGSUVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCIsIkt1YmVybmV0ZXNBUEkuY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoIiwiS3ViZXJuZXRlc0FQSS5hcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm9zQXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5tYXN0ZXJBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkucHJlZml4Rm9yS2luZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVVybCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpVXJsIiwiS3ViZXJuZXRlc0FQSS51cGRhdGVPckNyZWF0ZU9iamVjdCIsIkt1YmVybmV0ZXNBUEkuY3JlYXRlUmVzb3VyY2UiLCJLdWJlcm5ldGVzQVBJLmltYWdlUmVwb3NpdG9yaWVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuZGVwbG95bWVudENvbmZpZ3NSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZHNMb2dzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdIb29rc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkQ29uZmlnc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLnJvdXRlc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLnRlbXBsYXRlc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmdldEVycm9yT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS53c1NjaGVtZSIsIkt1YmVybmV0ZXNBUEkud3NVcmwiLCJLdWJlcm5ldGVzQVBJLmVxdWFscyIsIkt1YmVybmV0ZXNBUEkuZ2V0VUlEIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLmdldExhYmVscyIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZSIsIkt1YmVybmV0ZXNBUEkuZ2V0S2luZCIsIkt1YmVybmV0ZXNBUEkuZ2V0U2VsZWN0b3IiLCJLdWJlcm5ldGVzQVBJLmdldEhvc3QiLCJLdWJlcm5ldGVzQVBJLmdldFN0YXR1cyIsIkt1YmVybmV0ZXNBUEkuZ2V0UG9ydHMiLCJLdWJlcm5ldGVzQVBJLmdldENyZWF0aW9uVGltZXN0YW1wIiwiS3ViZXJuZXRlc0FQSS5pc0t1YmVybmV0ZXMiLCJLdWJlcm5ldGVzQVBJLmlzS3ViZXJuZXRlc1RlbXBsYXRlTWFuYWdlciIsIkt1YmVybmV0ZXNBUEkuaXNBcHBWaWV3IiwiS3ViZXJuZXRlc0FQSS5zZXRKc29uIiwiS3ViZXJuZXRlc0FQSS5sYWJlbHNUb1N0cmluZyIsIkt1YmVybmV0ZXNBUEkuc2VydmljZUxpbmtVcmwiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZVBvZENvdW50ZXJzIiwiS3ViZXJuZXRlc0FQSS5jb252ZXJ0S3ViZXJuZXRlc0pzb25Ub0l0ZW1zIiwiS3ViZXJuZXRlc0FQSS5pc1YxYmV0YTFPcjIiLCJLdWJlcm5ldGVzQVBJLmVudGl0eVBhZ2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5yZXNvdXJjZUtpbmRUb1VyaVBhdGgiLCJLdWJlcm5ldGVzQVBJLmlzSWdub3JlTmFtZXNwYWNlS2luZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc1VybEZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNVcmxGb3JJdGVtS2luZCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc1Byb3h5VXJsRm9yU2VydmljZSIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdSZXN0VXJsIiwiS3ViZXJuZXRlc0FQSS5kZXBsb3ltZW50Q29uZmlnUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuaW1hZ2VSZXBvc2l0b3J5UmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRSZXN0VXJsIiwiS3ViZXJuZXRlc0FQSS5idWlsZExvZ3NSZXN0VXJsIiwiS3ViZXJuZXRlc0FQSS5pc1J1bm5pbmciLCJLdWJlcm5ldGVzQVBJLnNlbGVjdG9yTWF0Y2hlcyIsIkt1YmVybmV0ZXNBUEkuZ2V0U2VydmljZVJlZ2lzdHJ5IiwiS3ViZXJuZXRlc0FQSS5yZXNpemVDb250cm9sbGVyIiwiS3ViZXJuZXRlc0FQSS5wb2RTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdpdFBhdGhUb1VybCIsIkt1YmVybmV0ZXNBUEkudG9SYXdKc29uIiwiS3ViZXJuZXRlc0FQSS5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLmJlZm9yZVNlbmQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmFkZGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm1vZGlmaWVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmRlbGV0ZWQiLCJLdWJlcm5ldGVzQVBJLmNvbXBhcmUiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZG9HZXQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdGFydCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLnN0b3AiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmxpc3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2V0SGFuZGxlcnMiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5zZW5kIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25tZXNzYWdlIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25vcGVuIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25jbG9zZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uZXJyb3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25uZWN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndzVVJMIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5uYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmtpbmQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VXJsRm9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwudW53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucHV0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5kZWxldGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVmQ291bnQiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmFkZFJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVtb3ZlUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kaXNwb3NhYmxlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbCIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNyZWF0ZSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5oYXNTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmZpbmRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLnNlcnZpY2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmdldE1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSx1RUFBdUU7QUFDdkUsa0NBQWtDO0FBRWxDLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FDaEJ0RCxzQ0FBc0M7QUFJckMsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0FxSW5CO0FBcklELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBO1FBQUFDO1FBRUFDLENBQUNBO1FBRENELHNCQUFJQSx5Q0FBcUJBO2lCQUF6QkEsY0FBcUNFLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUN2RUEsYUFBQ0E7SUFBREEsQ0FGQUQsQUFFQ0MsSUFBQUQ7SUFGWUEsb0JBQU1BLFNBRWxCQSxDQUFBQTtJQUVVQSx1QkFBU0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUE4Q3JDQTtRQUFBSTtRQTBCQUMsQ0FBQ0E7UUF6QkFELHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNFLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDNURBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NHLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDcERBLHNCQUFrQkEsd0JBQVVBO2lCQUE1QkEsY0FBd0NJLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDaEVBLHNCQUFrQkEsbUJBQUtBO2lCQUF2QkEsY0FBbUNLLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDcERBLHNCQUFrQkEsZ0NBQWtCQTtpQkFBcENBLGNBQWdETSxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQU47UUFDN0VBLHNCQUFrQkEsc0NBQXdCQTtpQkFBMUNBLGNBQXNETyxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVA7UUFDeEZBLHNCQUFrQkEsa0JBQUlBO2lCQUF0QkEsY0FBa0NRLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVI7UUFDbERBLHNCQUFrQkEscUNBQXVCQTtpQkFBekNBLGNBQXFEUyxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVQ7UUFDdkZBLHNCQUFrQkEsNkJBQWVBO2lCQUFqQ0EsY0FBNkNVLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBVjtRQUN2RUEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ1csTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBWDtRQUNuRUEsc0JBQWtCQSxxQkFBT0E7aUJBQXpCQSxjQUFxQ1ksTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBWjtRQUN4REEsc0JBQWtCQSxzQkFBUUE7aUJBQTFCQSxjQUFzQ2EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBYjtRQUMxREEsc0JBQWtCQSw4QkFBZ0JBO2lCQUFsQ0EsY0FBOENjLE1BQU1BLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZDtRQUV6RUEsc0JBQWtCQSx1QkFBU0E7aUJBQTNCQSxjQUF1Q2UsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZjtRQUM1REEsc0JBQWtCQSxvQkFBTUE7aUJBQXhCQSxjQUFvQ2dCLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWhCO1FBQ3REQSxzQkFBa0JBLDJCQUFhQTtpQkFBL0JBLGNBQTJDaUIsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBakI7UUFDbkVBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NrQixNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFsQjtRQUN0REEsc0JBQWtCQSxnQ0FBa0JBO2lCQUFwQ0EsY0FBZ0RtQixNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQW5CO1FBQzdFQSxzQkFBa0JBLDJCQUFhQTtpQkFBL0JBLGNBQTJDb0IsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBcEI7UUFDbkVBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NxQixNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFyQjtRQUMxREEsc0JBQWtCQSw2QkFBZUE7aUJBQWpDQSxjQUE2Q3NCLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBdEI7UUFDckVBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0N1QixNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUF2QjtRQUM1REEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ3dCLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQXhCO1FBQ25FQSxzQkFBa0JBLG1CQUFLQTtpQkFBdkJBLGNBQW1DeUIsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBekI7UUFDckRBLGlCQUFDQTtJQUFEQSxDQTFCQUosQUEwQkNJLElBQUFKO0lBMUJZQSx3QkFBVUEsYUEwQnRCQSxDQUFBQTtJQUVBQTtRQUFBOEI7UUFrQ0FDLENBQUNBO1FBakNDRCxzQkFBa0JBLDJCQUFRQTtpQkFBMUJBO2dCQUNFRSxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxNQUFNQTtvQkFDakJBLFVBQVVBLENBQUNBLEtBQUtBO29CQUNoQkEsVUFBVUEsQ0FBQ0Esa0JBQWtCQTtvQkFDN0JBLFVBQVVBLENBQUNBLHdCQUF3QkE7b0JBQ25DQSxVQUFVQSxDQUFDQSxJQUFJQTtvQkFDZkEsVUFBVUEsQ0FBQ0EsdUJBQXVCQTtvQkFDbENBLFVBQVVBLENBQUNBLGVBQWVBO29CQUMxQkEsVUFBVUEsQ0FBQ0Esa0JBQWtCQTtvQkFDN0JBLFVBQVVBLENBQUNBLE9BQU9BO29CQUNsQkEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxnQkFBZ0JBO2lCQUM1QkEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7OztXQUFBRjtRQUNEQSxzQkFBa0JBLDBCQUFPQTtpQkFBekJBO2dCQUNFRyxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLE1BQU1BO29CQUNqQkEsVUFBVUEsQ0FBQ0EsTUFBTUE7b0JBQ2pCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLGtCQUFrQkE7b0JBQzdCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxlQUFlQTtvQkFDMUJBLFVBQVVBLENBQUNBLFFBQVFBO29CQUNuQkEsVUFBVUEsQ0FBQ0EsYUFBYUE7b0JBQ3hCQSxVQUFVQSxDQUFDQSxLQUFLQTtpQkFDakJBLENBQUNBO1lBQ0pBLENBQUNBOzs7V0FBQUg7UUFDSEEsc0JBQUNBO0lBQURBLENBbENBOUIsQUFrQ0M4QixJQUFBOUI7SUFsQ1lBLDZCQUFlQSxrQkFrQzNCQSxDQUFBQTtJQUVGQTtRQUFBa0M7UUFLQUMsQ0FBQ0E7UUFKQUQsc0JBQWtCQSxtQkFBR0E7aUJBQXJCQSxjQUFpQ0UsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUM5Q0Esc0JBQWtCQSxxQkFBS0E7aUJBQXZCQSxjQUFtQ0csTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBSDtRQUNwREEsc0JBQWtCQSx3QkFBUUE7aUJBQTFCQSxjQUFzQ0ksTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBSjtRQUMxREEsc0JBQWtCQSx1QkFBT0E7aUJBQXpCQSxjQUFxQ0ssTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBTDtRQUN6REEsbUJBQUNBO0lBQURBLENBTEFsQyxBQUtDa0MsSUFBQWxDO0lBTFlBLDBCQUFZQSxlQUt4QkEsQ0FBQUE7QUFZRkEsQ0FBQ0EsRUFySU0sYUFBYSxLQUFiLGFBQWEsUUFxSW5COztBQ2xKRCxrREFBa0Q7QUFDbEQseUNBQXlDO0FBSXpDLElBQU8sYUFBYSxDQTRCbkI7QUE1QkQsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUVUQSx3QkFBVUEsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFDN0JBLHdCQUFVQSxHQUFHQSx5QkFBeUJBLENBQUNBO0lBQ3ZDQSwwQkFBWUEsR0FBR0Esd0JBQVVBLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3BDQSxpQkFBR0EsR0FBa0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLHdCQUFVQSxDQUFDQSxDQUFDQTtJQUU1Q0EsOEJBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUV4QkEsNEJBQWNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDakRBLHlCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUd4Q0Esc0JBQVFBLEdBQW9CQSxTQUFTQSxDQUFDQTtJQUN0Q0EsdUJBQVNBLEdBQUdBLEVBQUVBLENBQUNBO0lBRWZBLHdCQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUNuQkEsdUJBQVNBLEdBQUdBLE1BQU1BLENBQUNBO0lBRW5CQSw2QkFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDdkJBLDRCQUFjQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUV0QkEsK0JBQWlCQSxHQUFHQSw2QkFBZUEsQ0FBQ0E7SUFDcENBLGlDQUFtQkEsR0FBR0EsNEJBQWNBLENBQUNBO0lBRXJDQSxzQ0FBd0JBLEdBQUdBLEdBQUdBLENBQUNBO0lBQy9CQSw4QkFBZ0JBLEdBQUdBLFNBQVNBLENBQUNBO0lBQzdCQSx1QkFBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDaENBLENBQUNBLEVBNUJNLGFBQWEsS0FBYixhQUFhLFFBNEJuQjs7QUNqQ0QsK0NBQStDO0FBRS9DLElBQU8sYUFBYSxDQXV3Qm5CO0FBdndCRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBS3BCQTtRQUNFd0MsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2JBLElBQUlBLGVBQWVBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNURBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLGlCQUFpQkEsSUFBSUEsOEJBQWdCQSxDQUFDQTtRQUMvREEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsOEJBQWdCQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFQZXhDLHdDQUEwQkEsNkJBT3pDQSxDQUFBQTtJQUVEQTtRQUNFeUMsSUFBSUEsRUFBRUEsR0FBR0EsMEJBQTBCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsTUFBTUEsQ0FBQ0EsY0FBY0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1FBQ1pBLENBQUNBO0lBQ0hBLENBQUNBO0lBUGV6QyxxQ0FBdUJBLDBCQU90Q0EsQ0FBQUE7SUFFREE7UUFDRTBDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHNCQUFRQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsTUFBTUEsR0FBR0Esd0JBQVVBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFOZTFDLHVCQUFTQSxZQU14QkEsQ0FBQUE7SUFFREE7UUFDRTJDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHNCQUFRQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxXQUFXQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsTUFBTUEsR0FBR0EsdUJBQVNBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUNEQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQU8zQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBYmUzQyx5QkFBV0EsY0FhMUJBLENBQUFBO0lBRURBO1FBQ0U0QyxNQUFNQSxDQUFDQSx1QkFBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRmU1QywwQkFBWUEsZUFFM0JBLENBQUFBO0lBRURBO1FBQ0U2QyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSw0QkFBY0EsQ0FBQ0EsQ0FBQ0E7SUFDdERBLENBQUNBO0lBRmU3QyxpQ0FBbUJBLHNCQUVsQ0EsQ0FBQUE7SUFFREE7UUFDRThDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLDZCQUFlQSxDQUFDQSxDQUFDQTtJQUN6REEsQ0FBQ0E7SUFGZTlDLGdDQUFrQkEscUJBRWpDQSxDQUFBQTtJQUVEQSx1QkFBOEJBLElBQVdBO1FBQ3ZDK0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0Esd0JBQVVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ25DQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBZUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsQ0FBQ0EsS0FBS0EsSUFBSUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkRBLE1BQU1BLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLDZCQUFlQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0REEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFYZS9DLDJCQUFhQSxnQkFXNUJBLENBQUFBO0lBRURBO1FBQ0VnRCxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxtQkFBbUJBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQTtJQUZlaEQsOEJBQWdCQSxtQkFFL0JBLENBQUFBO0lBRURBO1FBQ0VpRCxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxrQkFBa0JBLEVBQUVBLENBQUNBLENBQUNBO0lBQy9EQSxDQUFDQTtJQUZlakQsNkJBQWVBLGtCQUU5QkEsQ0FBQUE7SUFFREEsOEJBQXFDQSxNQUFNQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUF3QkEsRUFBRUEsS0FBdUJBO1FBQzdHa0QsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtZQUNyREEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsR0FBR0E7Z0JBQzFCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxvQkFBb0JBLENBQUNBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzdEQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsRUFBRUEscUJBQXFCQSxDQUFDQSxDQUFDQTtZQUNyREEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLFFBQVFBLEdBQUdBLGVBQWVBLENBQUNBLElBQUlBLEdBQUdBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNkQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esb0NBQW9DQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0REEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1ZBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxzQkFBc0JBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUVEQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFBQTtRQUM5REEsSUFBSUEsTUFBTUEsR0FBR0EsUUFBUUEsR0FBR0EsVUFBVUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFFN0NBLElBQUlBLGVBQWVBLEdBQUdBLFVBQUNBLElBQUlBO1lBQ3pCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDeEJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO2dCQUNkQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNuQ0EsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1pBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hCQSxDQUFDQTtRQUNIQSxDQUFDQSxDQUFDQTtRQUNGQSxJQUFJQSxhQUFhQSxHQUFHQSxVQUFDQSxHQUFHQTtZQUN0QkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLCtCQUErQkEsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDcEVBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNiQSxDQUFDQTtRQUNIQSxDQUFDQSxDQUFBQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNiQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esb0NBQW9DQSxDQUFDQSxDQUFDQTtZQUNoREEsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsSUFBSUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsZUFBZUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFDdEVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxtQ0FBbUNBLENBQUNBLENBQUNBO1lBQy9DQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUM5REEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFuRGVsRCxrQ0FBb0JBLHVCQW1EbkNBLENBQUFBO0lBRURBLHdCQUErQkEsS0FBWUEsRUFBRUEsV0FBa0JBLEVBQUVBLFNBQXVDQSxFQUFFQSxlQUFlQTtRQUN2SG1ELElBQUlBLE1BQU1BLEdBQUdBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esc0JBQXNCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUN6Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsSUFBSUEsTUFBTUEsR0FBU0E7WUFDakJBLFNBQVNBLEVBQUVBLDBCQUEwQkE7U0FDdENBLENBQUFBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEtBQUtBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO1lBQzNCQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxJQUFJQSxHQUFHQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTtRQUMvREEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3hDQSxJQUFJQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQTtZQUNsQ0EsS0FBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsRUFBRUEsT0FBT0EsRUFBRUEsS0FBS0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDdkRBLE1BQU1BLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBO1lBQ3pDQSxJQUFJQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUN0Q0EsTUFBTUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsUUFBUUEsRUFBRUEsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzNDQSxFQUFFQSxFQUFFQSxLQUFLQTtpQkFDVkEsRUFBRUEsTUFBTUEsQ0FBQ0EsRUFBQ0E7U0FDWkEsQ0FBQ0EsQ0FBQ0E7UUFDSEEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDbEJBLENBQUNBO0lBekJlbkQs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QSxDQUFDQSxDQUFDQTtvQkFDckJBLElBQUlBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUM1QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1hBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO3dCQUNqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzVCQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDcEJBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDaEVBLE1BQU1BLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO3dCQUN0QkEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUM3RkEsTUFBTUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3BCQSxDQUFDQTtvQkFDSEEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNOQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcEJBLENBQUNBO2dCQUNIQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUF0Q2VoRiwrQkFBaUJBLG9CQXNDaENBLENBQUFBO0lBTURBLHNDQUE2Q0EsSUFBSUE7UUFDL0NpRixJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUN2QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFJM0JBLElBQUlBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO1lBQ2hCQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFJQTtnQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO29CQUM1QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFJQTtnQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO29CQUM1QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDaEJBLENBQUNBO0lBQ0hBLENBQUNBO0lBckJlakYsMENBQTRCQSwrQkFxQjNDQSxDQUFBQTtJQUVEQTtRQUNFa0YsTUFBTUEsQ0FBQ0EsK0JBQWlCQSxLQUFLQSxTQUFTQSxJQUFJQSwrQkFBaUJBLEtBQUtBLFNBQVNBLENBQUNBO0lBQzVFQSxDQUFDQTtJQUZlbEYsMEJBQVlBLGVBRTNCQSxDQUFBQTtJQUtEQSx3QkFBK0JBLE1BQU1BO1FBQ25DbUYsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsSUFBSUEsRUFBRUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDekJBLElBQUlBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0E7Z0JBQ3hFQSxJQUFJQSxTQUFTQSxHQUFHQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDckNBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSx1QkFBdUJBLEVBQUVBLFNBQVNBLEVBQUVBLElBQUlBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNqRkEsQ0FBQ0E7Z0JBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUNOQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNURBLENBQUNBO1lBQ0hBLENBQUNBO1FBQ0hBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBZmVuRiw0QkFBY0EsaUJBZTdCQSxDQUFBQTtJQUdEQSwrQkFBc0NBLElBQUlBO1FBQ3hDb0YsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDeENBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEtBQUtBLHdCQUF3QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLFFBQVFBLEdBQUdBLHdCQUF3QkEsQ0FBQ0E7UUFDdENBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQU5lcEYsbUNBQXFCQSx3QkFNcENBLENBQUFBO0lBRURBLCtCQUErQkEsSUFBSUE7UUFDakNxRixNQUFNQSxDQUFDQSxJQUFJQSxLQUFLQSxNQUFNQSxJQUFJQSxJQUFJQSxLQUFLQSxRQUFRQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFLRHJGLDhCQUFxQ0EsZ0JBQWdCQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFnQkEsRUFBRUEsSUFBV0E7UUFBN0JzRix5QkFBZ0JBLEdBQWhCQSxnQkFBZ0JBO1FBQUVBLG9CQUFXQSxHQUFYQSxXQUFXQTtRQUN4RkEsSUFBSUEsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDckJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1RBLFdBQVdBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2xEQSxDQUFDQTtRQUNEQSxJQUFJQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzNDQSxJQUFJQSxlQUFlQSxHQUFHQSxxQkFBcUJBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxZQUFZQSxFQUFFQSxJQUFJQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0Q0EsSUFBSUEsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDakJBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNsQ0EsT0FBT0EsR0FBR0EsYUFBYUEsR0FBR0EsU0FBU0EsQ0FBQ0E7WUFDdENBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsUUFBUUEsRUFBRUEsV0FBV0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDM0VBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGdCQUFnQkEsRUFBRUEsY0FBY0EsRUFBRUEsU0FBU0EsRUFBR0EsUUFBUUEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDOUZBLENBQUNBO0lBQ0hBLENBQUNBO0lBaEJldEYsa0NBQW9CQSx1QkFnQm5DQSxDQUFBQTtJQUFBQSxDQUFDQTtJQUtGQSxrQ0FBeUNBLGdCQUFnQkEsRUFBRUEsSUFBSUE7UUFDN0R1RixJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBQ3RFQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxpQkFBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxJQUFJQSxHQUFHQSx3QkFBd0JBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQzVGQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtJQUNIQSxDQUFDQTtJQVJldkYsc0NBQXdCQSwyQkFRdkNBLENBQUFBO0lBRURBLHNDQUE2Q0EsZ0JBQWdCQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFXQTtRQUFYd0Ysb0JBQVdBLEdBQVhBLFdBQVdBO1FBQ2pGQSxJQUFJQSxXQUFXQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsV0FBV0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbERBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLFdBQVdBLEdBQUdBLEdBQUdBLENBQUNBO1FBQ3BCQSxDQUFDQTtRQUNEQSxJQUFJQSxTQUFTQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLElBQUlBLE9BQU9BLEdBQUdBLGFBQWFBLEdBQUdBLFNBQVNBLENBQUNBO1lBQ3hDQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLE9BQU9BLEdBQUdBLCtCQUFpQkEsR0FBR0EsUUFBUUEsR0FBR0EsdUJBQXVCQSxFQUFFQSxHQUFHQSxZQUFZQSxHQUFHQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxXQUFXQSxHQUFHQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUN6S0EsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxPQUFPQSxHQUFHQSwrQkFBaUJBLEdBQUdBLG9CQUFvQkEsR0FBR0EsU0FBU0EsR0FBR0EsWUFBWUEsR0FBR0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDM0pBLENBQUNBO0lBQ0hBLENBQUNBO0lBZGV4RiwwQ0FBNEJBLCtCQWMzQ0EsQ0FBQUE7SUFFREEsNEJBQW1DQSxFQUFFQTtRQUNuQ3lGLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDcERBLENBQUNBO0lBRmV6RixnQ0FBa0JBLHFCQUVqQ0EsQ0FBQUE7SUFFREEsaUNBQXdDQSxFQUFFQTtRQUN4QzBGLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBRmUxRixxQ0FBdUJBLDBCQUV0Q0EsQ0FBQUE7SUFFREEsZ0NBQXVDQSxFQUFFQTtRQUN2QzJGLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsRUFBRUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBRmUzRixvQ0FBc0JBLHlCQUVyQ0EsQ0FBQUE7SUFFREEsc0JBQTZCQSxFQUFFQTtRQUM3QjRGLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO0lBQzlDQSxDQUFDQTtJQUZlNUYsMEJBQVlBLGVBRTNCQSxDQUFBQTtJQUVEQSwwQkFBaUNBLEVBQUVBO1FBQ2pDNkYsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFGZTdGLDhCQUFnQkEsbUJBRS9CQSxDQUFBQTtJQXFEREEsbUJBQTBCQSxlQUFlQTtRQUN2QzhGLElBQUlBLE1BQU1BLEdBQUdBLENBQUNBLGVBQWVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBO1FBQzNDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNYQSxJQUFJQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtZQUNqQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakNBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO0lBQ0hBLENBQUNBO0lBUmU5Rix1QkFBU0EsWUFReEJBLENBQUFBO0lBS0RBLHlCQUFnQ0EsUUFBUUEsRUFBRUEsTUFBTUE7UUFDOUMrRixFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDbEJBLElBQUlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2RBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLEtBQUtBLEVBQUVBLEdBQUdBO2dCQUNuQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ1JBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO29CQUNwQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQSxNQUFNQSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFkZS9GLDZCQUFlQSxrQkFjOUJBLENBQUFBO0lBS0RBO1FBQ0VnRyxJQUFJQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUNuQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUMzREEsQ0FBQ0E7SUFIZWhHLGdDQUFrQkEscUJBR2pDQSxDQUFBQTtJQThDREEsMEJBQWlDQSxLQUFLQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLHFCQUFxQkEsRUFBRUEsV0FBV0EsRUFBRUEsWUFBbUJBO1FBQW5CaUcsNEJBQW1CQSxHQUFuQkEsbUJBQW1CQTtRQUMvR0EsSUFBSUEsRUFBRUEsR0FBR0EsT0FBT0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsU0FBU0EsR0FBR0EsWUFBWUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUMxREEsSUFBSUEsR0FBR0EsR0FBR0Esb0JBQW9CQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLHVCQUF1QkEsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDekZBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBO1lBQ1pBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLE1BQU1BO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNsQixZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxZQUFZLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO29CQUNsQixPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUM3QyxpQkFBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDdkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLFlBQVksRUFBRSxDQUFDO29CQUNqQixDQUFDO2dCQUNILENBQUMsQ0FBQztvQkFDSixLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNO29CQUMzQyxpQkFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQ0E7WUFDRkEsS0FBS0EsQ0FBQ0EsVUFBVUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsT0FBT0EsRUFBRUEsTUFBTUE7WUFDM0MsaUJBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUE1QmVqRyw4QkFBZ0JBLG1CQTRCL0JBLENBQUFBO0lBRURBLG1CQUEwQkEsR0FBR0E7UUFDM0JrRyxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFGZWxHLHVCQUFTQSxZQUV4QkEsQ0FBQUE7SUFLREEsc0JBQTZCQSxRQUFRQSxFQUFFQSxNQUFpQkE7UUFBakJtRyxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBO1FBQ3REQSxNQUFNQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxHQUFHQSxPQUFPQSxHQUFHQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFGZW5HLDBCQUFZQSxlQUUzQkEsQ0FBQUE7SUE2Q0RBLG1CQUEwQkEsSUFBSUE7UUFDNUJvRyxJQUFJQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMzQkEsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsR0FBR0E7WUFDNUJBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BDQSxDQUFDQTtJQVJlcEcsdUJBQVNBLFlBUXhCQSxDQUFBQTtBQUVIQSxDQUFDQSxFQXZ3Qk0sYUFBYSxLQUFiLGFBQWEsUUF1d0JuQjs7QUN6d0JELCtDQUErQztBQUsvQyxJQUFPLGFBQWEsQ0FxRW5CO0FBckVELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFVEEscUJBQU9BLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLHdCQUFVQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUVwREEsa0JBQWtCQSxDQUFDQSx3QkFBd0JBLENBQUNBO1FBQzFDQSxJQUFJQSxFQUFFQSxtQkFBbUJBO1FBQ3pCQSxJQUFJQSxFQUFFQSxVQUFDQSxJQUFJQTtZQUNUQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxxQkFBcUJBLENBQUNBO2lCQUMvQkEsSUFBSUEsQ0FBQ0EsVUFBQ0EsTUFBTUEsRUFBRUEsVUFBVUE7Z0JBQ3ZCQSxJQUFJQSxNQUFNQSxHQUFvQkEsYUFBYUEsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtnQkFDbEZBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSx3QkFBd0JBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUM1Q0EsSUFBSUEsTUFBTUEsR0FBVUEsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7Z0JBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxNQUFNQSxDQUFDQSxHQUFHQSxJQUFJQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNUNBLElBQUlBLFNBQVNBLEdBQUdBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUMzRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDM0NBLENBQUNBO29CQUNEQSxNQUFNQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUVEQSxhQUFhQSxHQUFHQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDakNBLGlCQUFpQkEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ2xDQSxjQUFjQSxHQUFHQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtnQkFFakNBLEVBQUVBLENBQUNBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO29CQUc3QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLElBQUlBLG1CQUFtQkEsR0FBR0EsYUFBYUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQTt3QkFDNURBLEVBQUVBLENBQUNBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3hCQSxJQUFJQSxJQUFJQSxHQUFHQSxtQkFBbUJBLENBQUNBOzRCQUMvQkEsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7NEJBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDWkEsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ1RBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dDQUM3QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQ1pBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLEVBQUVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dDQUNwQ0EsQ0FBQ0E7NEJBQ0hBLENBQUNBO3dCQUNIQSxDQUFDQTtvQkFDSEEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxJQUFJQSxhQUFhQSxDQUFDQSxTQUFTQSxLQUFLQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxNQUFNQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFJakdBLElBQUlBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBO29CQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1RBLE1BQU1BLEdBQUdBLElBQUlBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO29CQUN2REEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDWEEsYUFBYUEsQ0FBQ0EsU0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7b0JBQ2pDQSxJQUFJQSxFQUFFQSxDQUFDQTtvQkFDUEEsTUFBTUEsQ0FBQ0E7Z0JBQ1RBLENBQUNBO1lBQ0hBLENBQUNBLENBQUNBO2lCQUNIQSxJQUFJQSxDQUFDQSxVQUFDQSxRQUFRQTtnQkFDYkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLCtCQUErQkEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDdkRBLENBQUNBLENBQUNBO2lCQUNEQSxNQUFNQSxDQUFDQTtnQkFDTkEsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDVEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7S0FDRkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFFVEEsa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUMzQ0Esa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsQ0FBQ0E7QUFFM0NBLENBQUNBLEVBckVNLGFBQWEsS0FBYixhQUFhLFFBcUVuQjs7QUMxRUQsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFFOUMsSUFBTyxhQUFhLENBb21CbkI7QUFwbUJELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBLElBQUlBLEdBQUdBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO0lBRXBDQSxnQkFBZ0JBLElBQVdBLEVBQUVBLFNBQWtCQTtRQUM3Q3FHLE1BQU1BLENBQUNBLFNBQVNBLEdBQUdBLFNBQVNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ25EQSxDQUFDQTtJQUVEckcsb0JBQW9CQSxPQUFPQTtRQUN6QnNHLElBQUlBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ3hDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLGVBQWVBLEVBQUVBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBO1FBQy9EQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUtEdEc7UUFVRXVHLG9CQUFZQSxJQUFXQSxFQUFFQSxTQUFpQkE7WUFWNUNDLGlCQXdGQ0E7WUF2RlFBLHdCQUFtQkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ3RDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSwwQkFBWUEsQ0FBQ0EsR0FBR0EsRUFBRUEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFDakRBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO1lBRXBCQSxRQUFHQSxHQUFnQkEsU0FBU0EsQ0FBQ0E7WUFDN0JBLGlCQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNyQkEsYUFBUUEsR0FBY0EsRUFBRUEsQ0FBQ0E7WUFDekJBLFFBQUdBLEdBQWtCQSxTQUFTQSxDQUFDQTtZQUdyQ0EsSUFBSUEsVUFBVUEsR0FBR0EsY0FBY0EsR0FBR0EsQ0FBQ0EsU0FBU0EsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDeEZBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSwwQkFBWUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsTUFBTUE7b0JBQ3JDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0hBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLDBCQUFZQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxNQUFNQTtvQkFDeENBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLG1CQUFtQkEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDSEEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsMEJBQVlBLENBQUNBLE9BQU9BLEVBQUVBLFVBQUNBLE1BQU1BO29CQUN2Q0EsS0FBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBLENBQUNBLENBQUNBO2dCQUNIQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSwwQkFBWUEsQ0FBQ0EsR0FBR0EsRUFBRUEsVUFBQ0EsT0FBT0E7b0JBQ3BDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxtQkFBbUJBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDTEEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsMEJBQVlBLENBQUNBLEdBQUdBLEVBQUVBLFVBQUNBLE9BQU9BO2dCQUNwQ0EsS0FBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDMUJBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBOztRQUVERCxzQkFBV0EsbUNBQVdBO2lCQUF0QkE7Z0JBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBO1lBQzNCQSxDQUFDQTs7O1dBQUFGO1FBRURBLHNCQUFXQSw4QkFBTUE7aUJBQWpCQTtnQkFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDbEJBLENBQUNBOzs7V0FBQUg7UUFFREEsc0JBQVdBLCtCQUFPQTtpQkFBbEJBO2dCQUNFSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUN2QkEsQ0FBQ0E7OztXQUFBSjtRQUVNQSxpQ0FBWUEsR0FBbkJBLFVBQW9CQSxJQUFRQTtZQUMxQkssTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBQ0EsR0FBT0E7Z0JBQ2xDQSxNQUFNQSxDQUFDQSxxQkFBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EscUJBQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUVNTCwwQkFBS0EsR0FBWkEsVUFBYUEsTUFBTUE7WUFDakJNLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLEdBQUdBO2dCQUMzQkEsTUFBTUEsQ0FBQ0Esb0JBQU1BLENBQUNBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDSEEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxNQUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLENBQUNBLEtBQUtBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxJQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTs7UUFFTU4sNkJBQVFBLEdBQWZBLFVBQWdCQSxNQUFNQTtZQUF0Qk8saUJBY0NBO1lBYkNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLEdBQUdBO2dCQUM1QkEsTUFBTUEsQ0FBQ0Esb0JBQU1BLENBQUNBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDSEEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxNQUFNQSxDQUFDQTtZQUNUQSxDQUFDQTtZQUNEQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxHQUFHQTtnQkFDM0JBLEVBQUVBLENBQUNBLENBQUNBLG9CQUFNQSxDQUFDQSxHQUFHQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO29CQUMxQkEsS0FBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO29CQUM3Q0EsS0FBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO1lBQ0hBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ1hBLENBQUNBOztRQUVNUCw0QkFBT0EsR0FBZEEsVUFBZUEsTUFBTUE7WUFDbkJRLElBQUlBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLEdBQUdBO2dCQUN4Q0EsTUFBTUEsQ0FBQ0Esb0JBQU1BLENBQUNBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzdCQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNUQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLENBQUNBLE9BQU9BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNoREEsSUFBSUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtZQUM3QkEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7O1FBQ0hSLGlCQUFDQTtJQUFEQSxDQXhGQXZHLEFBd0ZDdUcsSUFBQXZHO0lBQUFBLENBQUNBO0lBUUZBLGlCQUFpQkEsR0FBY0EsRUFBRUEsSUFBZUE7UUFDOUNnSCxJQUFJQSxNQUFNQSxHQUFtQkE7WUFDM0JBLEtBQUtBLEVBQUVBLEVBQUVBO1lBQ1RBLFFBQVFBLEVBQUVBLEVBQUVBO1lBQ1pBLE9BQU9BLEVBQUVBLEVBQUVBO1NBQ1pBLENBQUNBO1FBQ0ZBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLFVBQUNBLE1BQU1BO1lBQ3JCQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxvQkFBTUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsTUFBTUEsQ0FBQ0EsRUFBakJBLENBQWlCQSxDQUFDQSxDQUFDQTtZQUNuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1pBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMxQkEsTUFBTUEsQ0FBQ0E7WUFDVEEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3REQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMvQkEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsVUFBQ0EsTUFBTUE7WUFDcEJBLElBQUlBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLG9CQUFNQSxDQUFDQSxDQUFDQSxFQUFFQSxNQUFNQSxDQUFDQSxFQUFqQkEsQ0FBaUJBLENBQUNBLENBQUNBO1lBQ3BEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDOUJBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0lBQ2hCQSxDQUFDQTtJQUtEaEg7UUFTRWlILHNCQUFvQkEsT0FBY0EsRUFBVUEsT0FBaUJBO1lBQXpDQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFPQTtZQUFVQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFVQTtZQVByREEsZUFBVUEsR0FBZ0JBLEVBQUVBLENBQUNBO1lBQzdCQSxRQUFHQSxHQUFrQkEsU0FBU0EsQ0FBQ0E7WUFDL0JBLGVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ25CQSxjQUFTQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUNqQkEsWUFBT0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7WUFDbkJBLFlBQU9BLEdBQU9BLFNBQVNBLENBQUNBO1lBRzlCQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxHQUFHQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN4R0EsQ0FBQ0E7O1FBRURELHNCQUFXQSxtQ0FBU0E7aUJBQXBCQTtnQkFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7WUFDekJBLENBQUNBOzs7V0FBQUY7O1FBRU9BLDRCQUFLQSxHQUFiQTtZQUFBRyxpQkFxRENBO1lBcERDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDckJBLE1BQU1BLENBQUNBO1lBQ1RBLENBQUNBO1lBQ0RBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEVBQU9BO2dCQUN4QkEsTUFBTUEsRUFBRUEsS0FBS0E7Z0JBQ2JBLE9BQU9BLEVBQUVBLFVBQUNBLElBQUlBO29CQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDckJBLE1BQU1BLENBQUNBO29CQUNUQSxDQUFDQTtvQkFDREEsSUFBSUEsS0FBS0EsR0FBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQ3BEQSxJQUFJQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDN0NBLEtBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN4QkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBQ0EsS0FBV0EsRUFBRUEsTUFBYUE7d0JBQ3pDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxJQUFRQTs0QkFFeEJBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUN6QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7NEJBQ3pDQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTs0QkFDL0ZBLElBQUlBLEtBQUtBLEdBQUdBO2dDQUNWQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQTtvQ0FDbkJBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLFdBQVdBLEVBQUVBO29DQUMxQkEsTUFBTUEsRUFBRUEsSUFBSUE7aUNBQ1hBLEVBQUVBLElBQUlBLENBQUNBOzZCQUNUQSxDQUFDQTs0QkFDSkEsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2hDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO3dCQUNwQkEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsVUFBVUEsQ0FBQ0E7NEJBQ3hCQSxLQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTt3QkFDZkEsQ0FBQ0EsRUFBRUEsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JCQSxDQUFDQTtnQkFDSEEsQ0FBQ0E7Z0JBQ0RBLEtBQUtBLEVBQUVBLFVBQUNBLEtBQUtBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BO29CQUN6QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JCQSxNQUFNQSxDQUFDQTtvQkFDVEEsQ0FBQ0E7b0JBQ0RBLElBQUlBLEtBQUtBLEdBQUdBLDRCQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbENBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN0QkEsS0FBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ3hCQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSwyQ0FBMkNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUNyRUEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNOQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDaENBLEtBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLHdCQUF3QkEsRUFBRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsRUFBRUEsVUFBVUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlFQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFVQSxDQUFDQTs0QkFDeEJBLEtBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO3dCQUNmQSxDQUFDQSxFQUFFQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDckJBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFDREEsVUFBVUEsRUFBRUEsVUFBVUE7YUFDdkJBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBOztRQUVNSCw0QkFBS0EsR0FBWkE7WUFBQUksaUJBUUNBO1lBUENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQkEsTUFBTUEsQ0FBQ0E7WUFDVEEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFVBQVVBLENBQUNBO2dCQUN4QkEsS0FBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7WUFDZkEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUkEsQ0FBQ0E7O1FBRU1KLDJCQUFJQSxHQUFYQTtZQUNFSyxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDM0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLENBQUNBO1lBQzNCQSxDQUFDQTtRQUNIQSxDQUFDQTs7UUFFTUwsOEJBQU9BLEdBQWRBO1lBQ0VNLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ1pBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLENBQUNBO1FBRUhOLG1CQUFDQTtJQUFEQSxDQS9GQWpILEFBK0ZDaUgsSUFBQWpIO0lBS0RBO1FBU0V3SCxtQkFBb0JBLEtBQW9CQTtZQUFwQkMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBZUE7WUFSaENBLFlBQU9BLEdBQVVBLENBQUNBLENBQUNBO1lBQ25CQSxnQkFBV0EsR0FBVUEsQ0FBQ0EsQ0FBQ0E7WUFHdkJBLFNBQUlBLEdBQWtCQSxTQUFTQSxDQUFDQTtZQUVoQ0EsUUFBR0EsR0FBa0JBLFNBQVNBLENBQUNBO1lBR3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNsQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUVBLENBQUNBO1FBRURELHNCQUFJQSwyQkFBSUE7aUJBQVJBLFVBQVNBLEtBQWdCQTtnQkFDdkJFLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3JCQSxDQUFDQTs7O1dBQUFGO1FBRURBLHNCQUFJQSxpQ0FBVUE7aUJBQWRBO2dCQUNFRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7OztXQUFBSDtRQUVPQSwrQkFBV0EsR0FBbkJBLFVBQW9CQSxJQUFjQSxFQUFFQSxFQUFZQTtZQUM5Q0ksQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsR0FBR0E7Z0JBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNUJBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUNkQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbkJBLENBQUNBLENBQUFBO2dCQUNIQSxDQUFDQTtZQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNMQSxDQUFDQTs7UUFFTUosd0JBQUlBLEdBQVhBLFVBQVlBLElBQVFBO1lBQ2xCSyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzlCQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFFREwsNkJBQVNBLEdBQVRBLFVBQVVBLEtBQUtBO1lBQ2JNLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoQ0EsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFFeENBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3JDQSxDQUFDQTs7UUFFRE4sMEJBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1lBQ1ZPLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBO1lBQ2pCQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxJQUFJQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtZQUN4Q0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBOztRQUVEUCwyQkFBT0EsR0FBUEEsVUFBUUEsS0FBS0E7WUFBYlEsaUJBbUJDQTtZQWxCQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdGQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDaEJBLFVBQVVBLENBQUNBO29CQUNUQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUM1REEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSx3QkFBd0JBLEVBQUVBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNqRkEsSUFBSUEsRUFBRUEsR0FBR0EsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3REQSxLQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDN0JBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ1hBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLGtCQUFrQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLDJCQUEyQkEsQ0FBQ0EsQ0FBQ0E7b0JBQzVDQSxPQUFPQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDbkJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUN4REEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQTtZQUNIQSxDQUFDQTtRQUNIQSxDQUFDQTs7UUFFRFIsMkJBQU9BLEdBQVBBLFVBQVFBLEtBQUtBO1lBQ1hTLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLGdDQUFnQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO1FBRURULHNCQUFJQSxnQ0FBU0E7aUJBQWJBO2dCQUNFVSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFVQSxLQUFLQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUM5R0EsQ0FBQ0E7OztXQUFBVjs7UUFFREEsMkJBQU9BLEdBQVBBO1lBQ0VXLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNqQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsaUNBQWlDQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbEVBLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUN0REEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLENBQUNBO1FBQ0hBLENBQUNBOztRQUVEWCwyQkFBT0EsR0FBUEE7WUFBQVksaUJBWUNBO1lBWENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNoQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsR0FBR0E7b0JBQ3BCQSxLQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO29CQUNwQ0EsT0FBT0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQSxDQUFBQTtnQkFDREEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7WUFDdEJBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO2dCQUNoQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ3RCQSxPQUFPQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNyQkEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFDSFosZ0JBQUNBO0lBQURBLENBdkdBeEgsQUF1R0N3SCxJQUFBeEg7SUFLREE7UUFVRXFJLHdCQUFZQSxJQUFXQSxFQUFFQSxTQUFpQkE7WUFIbENDLGFBQVFBLEdBQWFBLFNBQVNBLENBQUNBO1lBQy9CQSxTQUFJQSxHQUFjQSxTQUFTQSxDQUFDQTtZQUdsQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDbEJBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFNBQVNBLElBQUlBLElBQUlBLENBQUNBO1lBRXBDQSxJQUFJQSxJQUFJQSxHQUFHQSwyQkFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDckNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNWQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSxnQkFBZ0JBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2pEQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcEJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2hGQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDTkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDakRBLENBQUNBO1lBRURBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLDBCQUFZQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNyRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsbUJBQUtBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLDBCQUFZQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFD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Q0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsU0FBU0EsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBU2xEQSxDQUFDQTtZQUNIQSxDQUFDQTtZQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFRTUgsNENBQVdBLEdBQWxCQSxVQUFtQkEsV0FBbUJBO1lBQ3BDSSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUM1Q0EsTUFBTUEsQ0FBQ0EsNEJBQWNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2pDQSxDQUFDQTtRQUVPSix5Q0FBUUEsR0FBaEJBO1lBQ0VLLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBRXhCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDYkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtnQkFDL0NBLENBQUNBO1lBQ0hBLENBQUNBO1lBQ0RBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFDSEwsNkJBQUNBO0lBQURBLENBM0RBakssQUEyRENpSyxJQUFBaks7SUEzRFlBLG9DQUFzQkEseUJBMkRsQ0EsQ0FBQUE7QUFDSEEsQ0FBQ0EsRUF0RU0sYUFBYSxLQUFiLGFBQWEsUUFzRW5CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby11dGlsaXRpZXMvZGVmcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLW9hdXRoL2RlZnMuZC50c1wiLz5cbiIsIi8vZGVmIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRVZFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZXZlbnRzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBOQU1FU1BBQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwibmFtZXNwYWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTk9ERVMoKTpzdHJpbmcgeyByZXR1cm4gXCJub2Rlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVjbGFpbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFU09VUkNFX1FVT1RBUygpOnN0cmluZyB7IHJldHVybiBcInJlc291cmNlcXVvdGFzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBPQVVUSF9DTElFTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwib2F1dGhjbGllbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRUNSRVRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VjcmV0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRV9BQ0NPVU5UUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VhY2NvdW50c1wiOyB9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldCBURU1QTEFURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJ0ZW1wbGF0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPVVRFUygpOnN0cmluZyB7IHJldHVybiBcInJvdXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkY29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQlVJTERTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERVBMT1lNRU5UX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJkZXBsb3ltZW50Y29uZmlnc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNJRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY2llc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9MSUNZX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWN5YmluZGluZ3NcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IFBST0pFQ1RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicHJvamVjdHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlYmluZGluZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJPTEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZXNcIjsgfVxuXHR9XG5cbiAgZXhwb3J0IGNsYXNzIE5hbWVzcGFjZWRUeXBlcyB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgazhzVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuRU5EUE9JTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLkVWRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5OT0RFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TLFxuICAgICAgICBXYXRjaFR5cGVzLlBPRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMsXG4gICAgICAgIFdhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRUNSRVRTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VfQUNDT1VOVFNcbiAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9zVHlwZXMoKTpBcnJheTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFdhdGNoVHlwZXMuVEVNUExBVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9VVEVTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TLFxuICAgICAgICBXYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlBST0pFQ1RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRVNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBNT0RJRklFRCgpOnN0cmluZyB7IHJldHVybiBcIk1PRElGSUVEXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZVBvZCB7XG4gICAgaWQ6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTpzdHJpbmc7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XG5cbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xuXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBrdWJlcm5ldGVzIHNlbGVjdGVkIG5hbWVzcGFjZSBvciB0aGUgZGVmYXVsdCBvbmVcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSgpIHtcbiAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgdmFyIEt1YmVybmV0ZXNTdGF0ZSA9IGluamVjdG9yLmdldChcIkt1YmVybmV0ZXNTdGF0ZVwiKSB8fCB7fTtcbiAgICAgIHJldHVybiBLdWJlcm5ldGVzU3RhdGUuc2VsZWN0ZWROYW1lc3BhY2UgfHwgZGVmYXVsdE5hbWVzcGFjZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHROYW1lc3BhY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSB7XG4gICAgdmFyIG5zID0gY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UoKTtcbiAgICBpZiAobnMpIHtcbiAgICAgIHJldHVybiBcIi9uYW1lc3BhY2VzL1wiICsgbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgdmFyIHByZWZpeCA9IENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKTtcbiAgICBpZiAoIXByZWZpeCkge1xuICAgICAgcHJlZml4ID0gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIENvcmUudHJpbUxlYWRpbmcocHJlZml4LCAnLycpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHZhciBwcmVmaXggPSBDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSk7XG4gICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgIHByZWZpeCA9IE9TX1BSRUZJWDtcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IENvcmUudHJpbUxlYWRpbmcocHJlZml4LCAnLycpO1xuICAgIC8qXG4gICAgICBUT0RPIC0gbWF5IG5vdCBoYXZlIGEgY3VycmVudGx5IHNlbGVjdGVkIG5hbWVzcGFjZVxuICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIE9TX0FQSV9WRVJTSU9OLCBcInByb3h5XCIsIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwic2VydmljZXMvdGVtcGxhdGVzXCIsIGFuc3dlcik7XG4gICAgfVxuICAgICovXG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVPYmplY3Qob2JqZWN0LCBLdWJlcm5ldGVzTW9kZWwsIHN1Y2Nlc3M/OiAoZGF0YSkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyb3IpID0+IHZvaWQpIHtcbiAgICB2YXIga2luZCA9IGdldEtpbmQob2JqZWN0KTtcbiAgICBpZiAoa2luZCA9PT0gXCJMaXN0XCIpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBpcyBhIGxpc3QsIGRlcGxveWluZyBhbGwgb2JqZWN0c1wiKTtcbiAgICAgIF8uZm9yRWFjaChvYmplY3QuaXRlbXMsIChvYmopID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRGVwbG95aW5nOiBcIiwgb2JqKTtcbiAgICAgICAgdXBkYXRlT3JDcmVhdGVPYmplY3Qob2JqLCBLdWJlcm5ldGVzTW9kZWwsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdDogXCIsIG9iamVjdCwgXCIgaGFzIG5vIG9iamVjdCB0eXBlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBraW5kID0ga2luZC50b0xvd2VyQ2FzZSgpLnBsdXJhbGl6ZSgpO1xuICAgIHZhciByZXNvdXJjZSA9IEt1YmVybmV0ZXNNb2RlbFtraW5kICsgJ1Jlc291cmNlJ107XG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgbG9nLmRlYnVnKFwiVW5hYmxlIHRvIGZpbmQgcmVzb3VyY2UgZm9yIGtpbmQ6IFwiLCBraW5kKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKG9iamVjdCk7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgaGFzIG5vIG5hbWU6IFwiLCBvYmplY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1VwZGF0ZSA9IF8uYW55KEt1YmVybmV0ZXNNb2RlbFtraW5kXSwgKG4pID0+IG4gPT09IG5hbWUpXG4gICAgdmFyIGFjdGlvbiA9IGlzVXBkYXRlID8gXCJNb2RpZmllZFwiIDogXCJBZGRlZFwiO1xuXG4gICAgdmFyIHN1Y2Nlc3NJbnRlcm5hbCA9IChkYXRhKSA9PiB7XG4gICAgICBsb2cuZGVidWcoYWN0aW9uLCBkYXRhKTtcbiAgICAgIGlmICghaXNVcGRhdGUpIHtcbiAgICAgICAgS3ViZXJuZXRlc01vZGVsW2tpbmRdLnB1c2goZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBzdWNjZXNzKGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGVycm9ySW50ZXJuYWwgPSAoZXJyKSA9PiB7XG4gICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gYWRkL21vZGlmeSBvYmplY3Q6IFwiLCBvYmplY3QsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBhbHJlYWR5IGV4aXN0cywgdXBkYXRpbmcuLi5cIik7XG4gICAgICByZXNvdXJjZS5zYXZlKHsgaWQ6IG5hbWUgfSwgb2JqZWN0LCBzdWNjZXNzSW50ZXJuYWwsIGVycm9ySW50ZXJuYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgZG9lc24ndCBleGlzdCwgY3JlYXRpbmcuLi5cIik7XG4gICAgICByZXNvdXJjZS5jcmVhdGUoe30sIG9iamVjdCwgc3VjY2Vzc0ludGVybmFsLCBlcnJvckludGVybmFsKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2UodGhpbmc6c3RyaW5nLCB1cmxUZW1wbGF0ZTpzdHJpbmcsICRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSwgS3ViZXJuZXRlc01vZGVsKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeEZvcktpbmQodGhpbmcpO1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICBsb2cuZGVidWcoXCJJbnZhbGlkIHR5cGUgZ2l2ZW46IFwiLCB0aGluZyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW1zID0gPGFueT4ge1xuICAgICAgbmFtZXNwYWNlOiBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZVxuICAgIH1cbiAgICBpZiAodGhpbmcgPT09IFwibmFtZXNwYWNlc1wiKSB7XG4gICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXgsIHVybFRlbXBsYXRlKTtcbiAgICBsb2cuZGVidWcoXCJVcmwgZm9yIFwiLCB0aGluZywgXCI6IFwiLCB1cmwpO1xuICAgIHZhciByZXNvdXJjZSA9ICRyZXNvdXJjZSh1cmwsIG51bGwsIHtcbiAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IGZhbHNlLCBwYXJhbXM6IHBhcmFtc30sXG4gICAgICBjcmVhdGU6IHsgbWV0aG9kOiAnUE9TVCcsIHBhcmFtczogcGFyYW1zfSxcbiAgICAgIHNhdmU6IHsgbWV0aG9kOiAnUFVUJywgcGFyYW1zOiBwYXJhbXN9LFxuICAgICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScsIHBhcmFtczogXy5leHRlbmQoe1xuICAgICAgICBpZDogJ0BpZCdcbiAgICAgIH0sIHBhcmFtcyl9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc291cmNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGltYWdlUmVwb3NpdG9yaWVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9pbWFnZXN0cmVhbXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVwbG95bWVudENvbmZpZ3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2RlcGxveW1lbnRjb25maWdzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkc0xvZ3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL3Byb3h5L2J1aWxkbG9nc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZHNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2J1aWxkc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ0hvb2tzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9idWlsZGNvbmZpZ2hvb2tzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvYnVpbGRjb25maWdzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJvdXRlc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvcm91dGVzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvdGVtcGxhdGVzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1VybCh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gd3NTY2hlbWUodXJsKTtcbiAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0VUlEKGxlZnQpID09PSBnZXRVSUQocmlnaHQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLy92YXIgZmFicmljRG9tYWluID0gRmFicmljLmpteERvbWFpbjtcbiAgdmFyIGZhYnJpY0RvbWFpbiA9IFwiaW8uZmFicmljOFwiO1xuICBleHBvcnQgdmFyIG1iZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1LdWJlcm5ldGVzXCI7XG4gIGV4cG9ydCB2YXIgbWFuYWdlck1CZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1LdWJlcm5ldGVzTWFuYWdlclwiO1xuICBleHBvcnQgdmFyIGFwcFZpZXdNQmVhbiA9IGZhYnJpY0RvbWFpbiArIFwiOnR5cGU9QXBwVmlld1wiO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0t1YmVybmV0ZXMod29ya3NwYWNlKSB7XG4gICAgLy8gcmV0dXJuIHdvcmtzcGFjZS50cmVlQ29udGFpbnNEb21haW5BbmRQcm9wZXJ0aWVzKGZhYnJpY0RvbWFpbiwge3R5cGU6IFwiS3ViZXJuZXRlc1wifSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNLdWJlcm5ldGVzVGVtcGxhdGVNYW5hZ2VyKHdvcmtzcGFjZSkge1xuICAgIC8vIHJldHVybiB3b3Jrc3BhY2UudHJlZUNvbnRhaW5zRG9tYWluQW5kUHJvcGVydGllcyhmYWJyaWNEb21haW4sIHt0eXBlOiBcIkt1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXJcIn0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzQXBwVmlldyh3b3Jrc3BhY2UpIHtcbiAgICAvLyByZXR1cm4gd29ya3NwYWNlLnRyZWVDb250YWluc0RvbWFpbkFuZFByb3BlcnRpZXMoZmFicmljRG9tYWluLCB7dHlwZTogXCJBcHBWaWV3XCJ9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRKc29uKCRzY29wZSwgaWQsIGNvbGxlY3Rpb24pIHtcbiAgICAkc2NvcGUuaWQgPSBpZDtcbiAgICBpZiAoISRzY29wZS5mZXRjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaWQpIHtcbiAgICAgICRzY29wZS5qc29uID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IGNvbGxlY3Rpb24uZmluZCgoaXRlbSkgPT4geyByZXR1cm4gZ2V0TmFtZShpdGVtKSA9PT0gaWQ7IH0pO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICAkc2NvcGUuanNvbiA9IGFuZ3VsYXIudG9Kc29uKGl0ZW0sIHRydWUpO1xuICAgICAgJHNjb3BlLml0ZW0gPSBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAkc2NvcGUuanNvbiA9ICcnO1xuICAgICAgJHNjb3BlLml0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmljZSBsaW5rIFVSTCBmb3IgZWl0aGVyIHRoZSBzZXJ2aWNlIG5hbWUgb3IgdGhlIHNlcnZpY2Ugb2JqZWN0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VydmljZUxpbmtVcmwoc2VydmljZSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHNlcnZpY2UpKSB7XG4gICAgICB2YXIgcG9ydGFsSVAgPSBzZXJ2aWNlLiRob3N0O1xuICAgICAgLy8gbGV0cyBhc3N1bWUgbm8gY3VzdG9tIHBvcnQgZm9yIG5vdyBmb3IgZXh0ZXJuYWwgcm91dGVzXG4gICAgICB2YXIgcG9ydCA9IG51bGw7XG4gICAgICB2YXIgcHJvdG9jb2wgPSBcImh0dHA6Ly9cIjtcbiAgICAgIHZhciBzcGVjID0gc2VydmljZS5zcGVjO1xuICAgICAgaWYgKHNwZWMpIHtcbiAgICAgICAgaWYgKCFwb3J0YWxJUCkge1xuICAgICAgICAgIHBvcnRhbElQID0gc3BlYy5wb3J0YWxJUDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzSHR0cHMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0h0dHAgPSBmYWxzZTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNwZWMucG9ydHMsIChwb3J0U3BlYykgPT4ge1xuICAgICAgICAgIHZhciBwID0gcG9ydFNwZWMucG9ydDtcbiAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgaWYgKHAgPT09IDQ0Mykge1xuICAgICAgICAgICAgICBoYXNIdHRwcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IDgwKSB7XG4gICAgICAgICAgICAgIGhhc0h0dHAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgICAgICAgIHBvcnQgPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocG9ydGFsSVApIHtcbiAgICAgICAgaWYgKGhhc0h0dHBzKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIiArIHBvcnRhbElQO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0h0dHApIHtcbiAgICAgICAgICByZXR1cm4gXCJodHRwOi8vXCIgKyBwb3J0YWxJUDtcbiAgICAgICAgfSBlbHNlIGlmIChwb3J0KSB7XG4gICAgICAgICAgcmV0dXJuIHByb3RvY29sICsgcG9ydGFsSVAgKyBcIjpcIiArIHBvcnQgKyBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBwb3J0YWxJUDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VydmljZSkge1xuICAgICAgdmFyIHNlcnZpY2VJZCA9IHNlcnZpY2UudG9TdHJpbmcoKTtcbiAgICAgIGlmIChzZXJ2aWNlSWQpIHtcbiAgICAgICAgdmFyIFNlcnZpY2VSZWdpc3RyeSA9IGdldFNlcnZpY2VSZWdpc3RyeSgpO1xuICAgICAgICBpZiAoU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIFNlcnZpY2VSZWdpc3RyeS5zZXJ2aWNlTGluayhzZXJ2aWNlSWQpIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIGxpc3Qgb2YgcG9kcyBsZXRzIGl0ZXJhdGUgdGhyb3VnaCB0aGVtIGFuZCBmaW5kIGFsbCBwb2RzIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKiBhbmQgcmV0dXJuIGNvdW50ZXJzIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlIHBvZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvZENvdW50ZXJzKHNlbGVjdG9yLCBwb2RzLCBvdXRwdXRQb2RzID0gW10sIHBvZExpbmtRdWVyeSA9IG51bGwpIHtcbiAgICB2YXIgZmlsdGVyRm47XG4gICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIGZpbHRlckZuID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlckZuID0gKHBvZCkgPT4gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBnZXRMYWJlbHMocG9kKSk7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBwb2RzTGluazogXCJcIixcbiAgICAgIHZhbGlkOiAwLFxuICAgICAgd2FpdGluZzogMCxcbiAgICAgIGVycm9yOiAwXG4gICAgfTtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghcG9kTGlua1F1ZXJ5KSB7XG4gICAgICAgIHBvZExpbmtRdWVyeSA9IGxhYmVsc1RvU3RyaW5nKHNlbGVjdG9yLCBcIiBcIik7XG4gICAgICB9XG4gICAgICBhbnN3ZXIucG9kc0xpbmsgPSBDb3JlLnVybChcIi9rdWJlcm5ldGVzL3BvZHM/cT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwb2RMaW5rUXVlcnkpKTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChwb2RzLCBwb2QgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyRm4ocG9kKSkge1xuICAgICAgICAgIG91dHB1dFBvZHMucHVzaChwb2QpO1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBnZXRTdGF0dXMocG9kKTtcbiAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpKSB7XG4gICAgICAgICAgICAgIGFuc3dlci52YWxpZCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlci5zdGFydHNXaXRoKFwid2FpdFwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwicGVuZFwiKSkge1xuICAgICAgICAgICAgICBhbnN3ZXIud2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlci5zdGFydHNXaXRoKFwidGVybVwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwiZXJyb3JcIikgfHwgbG93ZXIuc3RhcnRzV2l0aChcImZhaWxcIikpIHtcbiAgICAgICAgICAgICAgYW5zd2VyLmVycm9yICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuc3dlci5lcnJvciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIGdpdmVuIGpzb24gaW50byBhbiBhcnJheSBvZiBpdGVtcy4gSWYgdGhlIGpzb24gY29udGFpbnMgYSBuZXN0ZWQgc2V0IG9mIGl0ZW1zIHRoZW4gdGhhdCBpcyBzb3J0ZWQ7IHNvIHRoYXQgc2VydmljZXNcbiAgICogYXJlIHByb2Nlc3NlZCBmaXJzdDsgdGhlbiB0dXJuZWQgaW50byBhbiBhcnJheS4gT3RoZXJ3aXNlIHRoZSBqc29uIGlzIHB1dCBpbnRvIGFuIGFycmF5IHNvIGl0IGNhbiBiZSBwcm9jZXNzZWQgcG9seW1vcnBoaWNhbGx5XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyhqc29uKSB7XG4gICAgdmFyIGl0ZW1zID0ganNvbi5pdGVtcztcbiAgICBpZiAoYW5ndWxhci5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgLy8gVE9ETyB3ZSBjb3VsZCBjaGVjayBmb3IgTGlzdCBvciBDb25maWcgdHlwZXMgaGVyZSBhbmQgd2FybiBpZiBub3RcblxuICAgICAgLy8gc29ydCB0aGUgc2VydmljZXMgZmlyc3RcbiAgICAgIHZhciBhbnN3ZXIgPSBbXTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJTZXJ2aWNlXCIpIHtcbiAgICAgICAgICBhbnN3ZXIucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgIT09IFwiU2VydmljZVwiKSB7XG4gICAgICAgICAgYW5zd2VyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtqc29uXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNWMWJldGExT3IyKCkge1xuICAgIHJldHVybiBkZWZhdWx0QXBpVmVyc2lvbiA9PT0gXCJ2MWJldGExXCIgfHwgZGVmYXVsdEFwaVZlcnNpb24gPT09IFwidjFiZXRhMlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaW5rIHRvIHRoZSBkZXRhaWwgcGFnZSBmb3IgdGhlIGdpdmVuIGVudGl0eVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVBhZ2VMaW5rKGVudGl0eSkge1xuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHZhciBpZCA9IGdldE5hbWUoZW50aXR5KTtcbiAgICAgIHZhciBraW5kID0gZ2V0S2luZChlbnRpdHkpO1xuICAgICAgaWYgKGtpbmQgJiYgaWQpIHtcbiAgICAgICAgdmFyIHBhdGggPSBraW5kLnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2luZC5zdWJzdHJpbmcoMSkgKyBcInNcIjtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShlbnRpdHkpO1xuICAgICAgICBpZiAobmFtZXNwYWNlICYmICFpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCkpIHtcbiAgICAgICAgICByZXR1cm4gQ29yZS51cmwoVXJsSGVscGVycy5qb2luKCcva3ViZXJuZXRlcy9uYW1lc3BhY2UnLCBuYW1lc3BhY2UsIHBhdGgsIGlkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIENvcmUudXJsKFVybEhlbHBlcnMuam9pbignL2t1YmVybmV0ZXMnLCBwYXRoLCBpZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxuICBleHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VLaW5kVG9VcmlQYXRoKGtpbmQpIHtcbiAgICB2YXIga2luZFBhdGggPSBraW5kLnRvTG93ZXJDYXNlKCkgKyBcInNcIjtcbiAgICBpZiAoa2luZFBhdGggPT09IFwicmVwbGljYXRpb25Db250cm9sbGVyc1wiICYmICFpc1YxYmV0YTFPcjIoKSkge1xuICAgICAga2luZFBhdGggPSBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGtpbmRQYXRoO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJZ25vcmVOYW1lc3BhY2VLaW5kKGtpbmQpIHtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJIb3N0XCIgfHwga2luZCA9PT0gXCJNaW5pb25cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IFVSTCBmb3IgdGhlIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzVXJsRm9yS2luZChLdWJlcm5ldGVzQXBpVVJMLCBraW5kLCBuYW1lc3BhY2UgPSBudWxsLCBwYXRoID0gbnVsbCkge1xuICAgIHZhciBwYXRoU2VnbWVudCA9IFwiXCI7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCIgKyBDb3JlLnRyaW1MZWFkaW5nKHBhdGgsIFwiL1wiKTtcbiAgICB9XG4gICAgdmFyIGtpbmRQYXRoID0gcmVzb3VyY2VLaW5kVG9VcmlQYXRoKGtpbmQpO1xuICAgIHZhciBpZ25vcmVOYW1lc3BhY2UgPSBpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCk7XG4gICAgaWYgKGlzVjFiZXRhMU9yMigpIHx8IGlnbm9yZU5hbWVzcGFjZSkge1xuICAgICAgdmFyIHBvc3RmaXggPSBcIlwiO1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhaWdub3JlTmFtZXNwYWNlKSB7XG4gICAgICAgIHBvc3RmaXggPSBcIj9uYW1lc3BhY2U9XCIgKyBuYW1lc3BhY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmRQYXRoLCBwYXRoU2VnbWVudCwgcG9zdGZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwgXCIvbmFtZXNwYWNlcy9cIiwgbmFtZXNwYWNlICwga2luZFBhdGgsIHBhdGhTZWdtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2UgVVJMIGZvciB0aGUga2luZCBvZiBrdWJlcm5ldGVzIHJlc291cmNlIG9yIG51bGwgaWYgaXQgY2Fubm90IGJlIGZvdW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc1VybEZvckl0ZW1LaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGpzb24pIHtcbiAgICB2YXIga2luZCA9IGpzb24ua2luZDtcbiAgICBpZiAoa2luZCkge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmQsIGpzb24ubmFtZXNwYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLndhcm4oXCJJZ25vcmluZyBtaXNzaW5nIGtpbmQgXCIgKyBraW5kICsgXCIgZm9yIGt1YmVybmV0ZXMganNvbjogXCIgKyBhbmd1bGFyLnRvSnNvbihqc29uKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc1Byb3h5VXJsRm9yU2VydmljZShLdWJlcm5ldGVzQXBpVVJMLCBzZXJ2aWNlLCBwYXRoID0gbnVsbCkge1xuICAgIHZhciBwYXRoU2VnbWVudCA9IFwiXCI7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCIgKyBDb3JlLnRyaW1MZWFkaW5nKHBhdGgsIFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIjtcbiAgICB9XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShzZXJ2aWNlKTtcbiAgICBpZiAoaXNWMWJldGExT3IyKCkpIHtcbiAgICAgIHZhciBwb3N0Zml4ID0gXCI/bmFtZXNwYWNlPVwiICsgbmFtZXNwYWNlO1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5XCIgKyBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpICsgXCIvc2VydmljZXMvXCIgKyBnZXROYW1lKHNlcnZpY2UpICsgcGF0aFNlZ21lbnQgKyBwb3N0Zml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5L25hbWVzcGFjZXMvXCIgKyBuYW1lc3BhY2UgKyBcIi9zZXJ2aWNlcy9cIiArIGdldE5hbWUoc2VydmljZSkgKyBwYXRoU2VnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRDb25maWdzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGRlcGxveW1lbnRDb25maWdzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaW1hZ2VSZXBvc2l0b3J5UmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZFJlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGJ1aWxkc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9nc1Jlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGJ1aWxkc0xvZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBhcHBsaWNhdGlvbiBKU09OXG4gICAqL1xuICAgICAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIHJ1bkFwcCgkbG9jYXRpb24sICRzY29wZSwgJGh0dHAsIEt1YmVybmV0ZXNBcGlVUkwsIGpzb24sIG5hbWUgPSBcIkFwcFwiLCBvblN1Y2Nlc3NGbiA9IG51bGwsIG5hbWVzcGFjZSA9IG51bGwsIG9uQ29tcGxldGVGbiA9IG51bGwpIHtcbiAgICBpZiAoanNvbikge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoanNvbikpIHtcbiAgICAgICAganNvbiA9IGFuZ3VsYXIuZnJvbUpzb24oanNvbik7XG4gICAgICB9XG4gICAgICBuYW1lID0gbmFtZSB8fCBcIkFwcFwiO1xuICAgICAgdmFyIHBvc3RmaXggPSBuYW1lc3BhY2UgPyBcIiBpbiBuYW1lc3BhY2UgXCIgKyBuYW1lc3BhY2UgOiBcIlwiO1xuXG4gICAgICB2YXIgaXRlbXMgPSBjb252ZXJ0S3ViZXJuZXRlc0pzb25Ub0l0ZW1zKGpzb24pO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKGl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICB2YXIgdXJsID0ga3ViZXJuZXRlc1VybEZvckl0ZW1LaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGl0ZW0pO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgJGh0dHAucG9zdCh1cmwsIGl0ZW0pLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiR290IHN0YXR1czogXCIgKyBzdGF0dXMgKyBcIiBvbiB1cmw6IFwiICsgdXJsICsgXCIgZGF0YTogXCIgKyBkYXRhICsgXCIgYWZ0ZXIgcG9zdGluZzogXCIgKyBhbmd1bGFyLnRvSnNvbihpdGVtKSk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ob25Db21wbGV0ZUZuKSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIENvcmUuJGFwcGx5KCRzY29wZSk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIHZhciByZWFzb24gPSBkYXRhLnJlYXNvbjtcbiAgICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gXCJBbHJlYWR5RXhpc3RzXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXRzIGlnbm9yZSBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiZW50aXR5IGFscmVhZHkgZXhpc3RzIGF0IFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJGYWlsZWQgdG8gUE9TVCB0byBcIiArIHVybCArIFwiIGdvdCBzdGF0dXM6IFwiICsgc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nLndhcm4oXCJGYWlsZWQgdG8gc2F2ZSBcIiArIHVybCArIFwiIHN0YXR1czogXCIgKyBzdGF0dXMgKyBcIiByZXNwb25zZTogXCIgKyBhbmd1bGFyLnRvSnNvbihkYXRhLCB0cnVlKSk7XG4gICAgICAgICAgICBDb3JlLm5vdGlmaWNhdGlvbignZXJyb3InLCBtZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gICovXG5cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlcnZpY2UgcmVnaXN0cnlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2aWNlUmVnaXN0cnkoKSB7XG4gICAgdmFyIGluamVjdG9yID0gSGF3dGlvQ29yZS5pbmplY3RvcjtcbiAgICByZXR1cm4gaW5qZWN0b3IgPyBpbmplY3Rvci5nZXQoXCJTZXJ2aWNlUmVnaXN0cnlcIikgOiBudWxsO1xuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpbmsgdG8gdGhlIGtpYmFuYSBsb2dzIHdlYiBhcHBsaWNhdGlvblxuICAgKi9cbiAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIGtpYmFuYUxvZ3NMaW5rKFNlcnZpY2VSZWdpc3RyeSkge1xuICAgIHZhciBsaW5rID0gU2VydmljZVJlZ2lzdHJ5LnNlcnZpY2VMaW5rKGtpYmFuYVNlcnZpY2VOYW1lKTtcbiAgICBpZiAobGluaykge1xuICAgICAgaWYgKCFsaW5rLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgICBsaW5rICs9IFwiL1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmsgKyBcIiMvZGFzaGJvYXJkL0ZhYnJpYzhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gICovXG5cbiAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5Mb2dzRm9yUG9kcyhTZXJ2aWNlUmVnaXN0cnksICR3aW5kb3csIG5hbWVzcGFjZSwgcG9kcykge1xuICAgIHZhciBsaW5rID0ga2liYW5hTG9nc0xpbmsoU2VydmljZVJlZ2lzdHJ5KTtcbiAgICBpZiAobGluaykge1xuICAgICAgdmFyIHF1ZXJ5ID0gXCJcIjtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2gocG9kcywgKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIGlkID0gZ2V0TmFtZShpdGVtKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdmFyIHNwYWNlID0gcXVlcnkgPyBcIiBPUiBcIiA6IFwiXCI7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICBxdWVyeSArPSBzcGFjZSArICdcIicgKyBpZCArICdcIic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICBxdWVyeSA9IFwiKFwiICsgcXVlcnkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeSA9ICdrdWJlcm5ldGVzLm5hbWVzcGFjZTpcIicgKyBuYW1lc3BhY2UgKyAnXCIgQU5EIGt1YmVybmV0ZXMucG9kX25hbWU6JyArIHF1ZXJ5O1xuICAgICAgICBsaW5rICs9IFwiP19hPShxdWVyeToocXVlcnlfc3RyaW5nOihxdWVyeTonXCIgKyBxdWVyeSArIFwiJykpKVwiO1xuICAgICAgICB2YXIgbmV3V2luZG93ID0gJHdpbmRvdy5vcGVuKGxpbmssIFwidmlld0xvZ3NcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICovXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZUNvbnRyb2xsZXIoJGh0dHAsIEt1YmVybmV0ZXNBcGlVUkwsIHJlcGxpY2F0aW9uQ29udHJvbGxlciwgbmV3UmVwbGljYXMsIG9uQ29tcGxldGVGbiA9IG51bGwpIHtcbiAgICB2YXIgaWQgPSBnZXROYW1lKHJlcGxpY2F0aW9uQ29udHJvbGxlcik7XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShyZXBsaWNhdGlvbkNvbnRyb2xsZXIpIHx8IFwiXCI7XG4gICAgdmFyIHVybCA9IGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIFwiUmVwbGljYXRpb25Db250cm9sbGVyXCIsIG5hbWVzcGFjZSwgaWQpO1xuICAgICRodHRwLmdldCh1cmwpLlxuICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB2YXIgZGVzaXJlZFN0YXRlID0gZGF0YS5zcGVjO1xuICAgICAgICAgIGlmICghZGVzaXJlZFN0YXRlKSB7XG4gICAgICAgICAgICBkZXNpcmVkU3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGRhdGEuc3BlYyA9IGRlc2lyZWRTdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVzaXJlZFN0YXRlLnJlcGxpY2FzID0gbmV3UmVwbGljYXM7XG4gICAgICAgICAgJGh0dHAucHV0KHVybCwgZGF0YSkuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJ1cGRhdGVkIGNvbnRyb2xsZXIgXCIgKyB1cmwpO1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKG9uQ29tcGxldGVGbikpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlRm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBzYXZlIFwiICsgdXJsICsgXCIgXCIgKyBkYXRhICsgXCIgXCIgKyBzdGF0dXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5cbiAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBsb2FkIFwiICsgdXJsICsgXCIgXCIgKyBkYXRhICsgXCIgXCIgKyBzdGF0dXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdCBwYXRoIGludG8gYW4gYWNjZXNzaWJsZSBVUkwgZm9yIHRoZSBicm93c2VyXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2l0UGF0aFRvVXJsKGljb25QYXRoLCBicmFuY2ggPSBcIm1hc3RlclwiKSB7XG4gICAgcmV0dXJuIChIYXd0aW9Db3JlLmluamVjdG9yLmdldCgnQXBwTGlicmFyeVVSTCcpIHx8ICcnKSArIFwiL2dpdC9cIiArIGJyYW5jaCArIGljb25QYXRoO1xuICB9XG5cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUganNvbiBzY2hlbWFcbiAgICovXG4gICAgICAgIC8qXG4gIGV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTY2hlbWEoKSB7XG4gICAgYW5ndWxhci5mb3JFYWNoKHNjaGVtYS5kZWZpbml0aW9ucywgKGRlZmluaXRpb24sIG5hbWUpID0+IHtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gZGVmaW5pdGlvbi5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIGhpZGVQcm9wZXJ0aWVzID0gW1wiY3JlYXRpb25UaW1lc3RhbXBcIiwgXCJraW5kXCIsIFwiYXBpVmVyc2lvblwiLCBcImFubm90YXRpb25zXCIsIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIiwgXCJuYW1lc3BhY2VcIiwgXCJyZXNvdXJjZVZlcnNpb25cIiwgXCJzZWxmTGlua1wiLCBcInVpZFwiXTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGhpZGVQcm9wZXJ0aWVzLCAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydHlbXCJoaWRkZW5cIl0gID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2gocHJvcGVydGllcywgKHByb3BlcnR5LCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICB2YXIgcmVmID0gcHJvcGVydHlbXCIkcmVmXCJdO1xuICAgICAgICAgIHZhciB0eXBlID0gcHJvcGVydHlbXCJ0eXBlXCJdO1xuICAgICAgICAgIGlmIChyZWYgJiYgKCF0eXBlIHx8IHR5cGUgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVtcInR5cGVcIl0gPSByZWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHByb3BlcnR5W1wiaXRlbXNcIl07XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgdmFyIHJlZiA9IGl0ZW1zW1wiJHJlZlwiXTtcbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSBpdGVtc1tcInR5cGVcIl07XG4gICAgICAgICAgICAgIGlmIChyZWYgJiYgKCF0eXBlIHx8IHR5cGUgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbXCJ0eXBlXCJdID0gcmVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2NoZW1hLmRlZmluaXRpb25zLm9zX2J1aWxkX1dlYkhvb2tUcmlnZ2VyLnByb3BlcnRpZXMuc2VjcmV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgfSlcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgKiBMZXRzIHJlbW92ZSBhbnkgZW5yaWNoZWQgZGF0YSB0byBsZWF2ZSB0aGUgb3JpZ2luYWwganNvbiBpbnRhY3RcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b1Jhd0pzb24oaXRlbSkge1xuICAgIHZhciBvID0gYW5ndWxhci5jb3B5KGl0ZW0pO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChvLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiJFwiKSB8fCBrZXkuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgZGVsZXRlIG9ba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobywgbnVsbCwgMik7IC8vIHNwYWNpbmcgbGV2ZWwgPSAyXG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuICAgICAgICAgICAgLy8gVE9ETyBhdXRoLm1hc3Rlcl91cmkgbm8gbG9uZ2VyIHVzZWQgcmlnaHQ/XG4gICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgICBpZiAoIW1hc3Rlcikge1xuICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWR4ICs9IDM7XG4gICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFzdGVyKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAuZmFpbCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgT0FVVEggY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5hbHdheXMoKCkgPT4ge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDUwMCwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcblxuICAgIHByaXZhdGUgX2VlOkV2ZW50RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX29iamVjdHM6QXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3Ioa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB2YXIgbG9nZ2VyTmFtZSA9ICdrOHMtb2JqZWN0cy8nICsgKG5hbWVzcGFjZSA/IFVybEhlbHBlcnMuam9pbihuYW1lc3BhY2UsIGtpbmQpIDoga2luZCk7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQobG9nZ2VyTmFtZSk7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZGVkKG9iamVjdCkge1xuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCFfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgIGFuZ3VsYXIuY29weShvYmplY3QsIG9iaik7XG4gICAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIG9iamVjdCk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlZChvYmplY3QpIHtcbiAgICAgIHZhciBkZWxldGVkID0gXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuREVMRVRFRCwgZGVsZXRlZFswXSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaW50ZXJmYWNlIENvbXBhcmVSZXN1bHQge1xuICAgIGFkZGVkOkFycmF5PGFueT47XG4gICAgbW9kaWZpZWQ6QXJyYXk8YW55PjtcbiAgICBkZWxldGVkOkFycmF5PGFueT47XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlKG9sZDpBcnJheTxhbnk+LCBfbmV3OkFycmF5PGFueT4pOkNvbXBhcmVSZXN1bHQge1xuICAgIHZhciBhbnN3ZXIgPSA8Q29tcGFyZVJlc3VsdD4ge1xuICAgICAgYWRkZWQ6IFtdLFxuICAgICAgbW9kaWZpZWQ6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9O1xuICAgIF8uZm9yRWFjaChfbmV3LCAobmV3T2JqKSA9PiB7XG4gICAgICB2YXIgb2xkT2JqID0gXy5maW5kKG9sZCwgKG8pID0+IGVxdWFscyhvLCBuZXdPYmopKTtcbiAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgIGFuc3dlci5hZGRlZC5wdXNoKG5ld09iaik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLnRvSnNvbihvbGRPYmopICE9PSBhbmd1bGFyLnRvSnNvbihuZXdPYmopKSB7XG4gICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKG9sZCwgKG9sZE9iaikgPT4ge1xuICAgICAgdmFyIG5ld09iaiA9IF8uZmluZChfbmV3LCAobykgPT4gZXF1YWxzKG8sIG9sZE9iaikpO1xuICAgICAgaWYgKCFuZXdPYmopIHtcbiAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAqL1xuICBjbGFzcyBPYmplY3RQb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBfbGFzdEZldGNoID0gPEFycmF5PGFueT4+IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ludGVydmFsID0gNTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRDYW5jZWw6YW55ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0VVJMOnN0cmluZywgcHJpdmF0ZSBoYW5kbGVyOldTSGFuZGxlcikge1xuICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KGhhbmRsZXIuY29sbGVjdGlvbi5raW5kLCBoYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlKSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gbW9kaWZ5IHRoZSBvcmlnaW5hbCBvYmplY3RcbiAgICAgICAgICAgICAgaXRlbSA9IF8uY2xvbmVEZWVwKGl0ZW0pO1xuICAgICAgICAgICAgICBpdGVtLmtpbmQgPSB0aGlzLmhhbmRsZXIuY29sbGVjdGlvbi5raW5kO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuY29sbGVjdGlvbi5uYW1lc3BhY2UgPyBpdGVtLm5hbWVzcGFjZSA9IHRoaXMuaGFuZGxlci5jb2xsZWN0aW9uLm5hbWVzcGFjZSA6IGZhbHNlO1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IGl0ZW1cbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJPdXQgb2YgcmV0cmllcywgc3RvcHBpbmcgcG9sbGluZywgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyAtIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KF9zZWxmLmtpbmQsIF9zZWxmLm5hbWVzcGFjZSkpO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxmO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGFuZGxlcnMoc2VsZjpXU0hhbmRsZXIsIHdzOldlYlNvY2tldCkge1xuICAgICAgXy5mb3JJbihzZWxmLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoXy5zdGFydHNXaXRoKGtleSwgJ29uJykpIHtcbiAgICAgICAgICB3c1trZXldID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZWxmW2tleV0oZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzZW5kKGRhdGE6YW55KSB7XG4gICAgICBpZiAoIV8uaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGFuZ3VsYXIudG9Kc29uKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiRXZlbnQ6IFwiLCBkYXRhKTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBkYXRhLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vIHRoaXMubG9nLmRlYnVnKFwiZXZlbnQ6IFwiLCBldmVudFR5cGUsIFwiIG9iamVjdDogXCIsIGRhdGEub2JqZWN0KTtcbiAgICAgIHRoaXMuX2xpc3RbZXZlbnRUeXBlXShkYXRhLm9iamVjdCk7XG4gICAgfTtcblxuICAgIG9ub3BlbihldmVudCkge1xuICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgIHRoaXMuY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGVkOiBcIiwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWJzb2NrZXQgZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgY2xvc2VkLCBldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC53YXNDbGVhbikge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiU3dpdGNoaW5nIHRvIHBvbGxpbmcgbW9kZVwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uZXJyb3IoZXZlbnQpIHtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwid2ViIHNvY2tldCBlbmNvdW50ZXJlZCBlcnJvcjogXCIsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB8fCAodGhpcy5wb2xsZXIgJiYgdGhpcy5wb2xsZXIuY29ubmVjdGVkKTtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGlmICghdGhpcy5zb2NrZXQgJiYgIXRoaXMucG9sbGVyKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGluZyB3ZWJzb2NrZXQgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX3dzVXJsOlVSSTtcbiAgICBwcml2YXRlIF9yZXN0VXJsOlVSSTtcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fa2luZCA9IGtpbmQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdFVybCA9IG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB0aGlzLl93c1VybCA9IHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+e1xuICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXIodGhpcyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdCA9IG5ldyBPYmplY3RMaXN0KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dzVXJsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVzdFVSTCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBzZXQgbmFtZXNwYWNlKG5zOnN0cmluZykge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gbnM7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnkpID0+IHZvaWQpIHtcbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pO1xuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMuX2tpbmQgIT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUyAmJiBuYW1lc3BhY2UgJiYgIXRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeEZvcktpbmQodGhpcy5fa2luZCksICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KCkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGNyZWF0ZSBvciB1cGRhdGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3QuZGVsZXRlZChpdGVtKTtcbiAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAkLmFqYXgodXJsLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShraW5kOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXR1cm5pbmcgZXhpc3RpbmcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoa2luZCwgbmFtZXNwYWNlKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OmFueSwgLi4uaGFuZGxlczphbnlbXSkge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLOFNDbGllbnRGYWN0b3J5JywgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKVxuICB9KTtcblxufVxuXG5cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdTZXJ2aWNlUmVnaXN0cnknLCBbKCkgPT4ge1xuICAgIHJldHVybiBuZXcgU2VydmljZVJlZ2lzdHJ5U2VydmljZSgpO1xuICB9XSk7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBzaW1wbGUgaW50ZXJmYWNlIHRvIHNlcnZpY2UgZGlzY292ZXJ5IHRoYXQgY2FuIGJlIHVzZWQgZWFybHkgb24gaW4gdGhlIGFwcGxpY2F0aW9uIGxpZmVjeWNsZSBiZWZvcmUgdGhlXG4gICAqIHVuZGVybHlpbmcgbW9kZWwgaGFzIGJlZW4gY3JlYXRlZCB2aWEgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAgICovXG4gIGV4cG9ydCBjbGFzcyBTZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1vZGVsOmFueSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYSBzZXJ2aWNlIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIElEIG9yIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGhhc1NlcnZpY2Uoc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZFNlcnZpY2Uoc2VydmljZU5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlcnZpY2UgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlIG5hbWUgKElEKSBvciBudWxsIGlmIGl0IGNhbm5vdCBiZSBmb3VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlcnZpY2VOYW1lIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGxvb2sgZm9yXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZFNlcnZpY2Uoc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgICAgdmFyIGFuc3dlciA9IG51bGw7XG4gICAgICBpZiAoc2VydmljZU5hbWUpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5nZXRNb2RlbCgpO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gbW9kZWwuY3VycmVudE5hbWVzcGFjZSgpO1xuICAgICAgICAgIHJldHVybiBtb2RlbC5nZXRTZXJ2aWNlKG5hbWVzcGFjZSAsc2VydmljZU5hbWUpO1xuLypcbiAgICAgICAgVE9ETyBsZXRzIG9ubHkgbG9vayBpbiB0aGUgY3VycmVudCBuYW1lc3BhY2VcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKG1vZGVsLnNlcnZpY2VzLCAoc2VydmljZSkgPT4ge1xuICAgICAgICAgIGlmIChzZXJ2aWNlTmFtZSA9PT0gZ2V0TmFtZShzZXJ2aWNlKSkge1xuICAgICAgICAgICAgYW5zd2VyID0gc2VydmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIGxpbmsgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZVxuICAgICAqIEByZXR1cm4ge251bGx9XG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VMaW5rKHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgdmFyIHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlTGlua1VybChzZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZGVsKCk6YW55IHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm1vZGVsO1xuICAgICAgLy8gbGV0cyBhbGxvdyBsYXp5IGxvYWQgc28gd2UgY2FuIGJlIGludm9rZWQgYmVmb3JlIHRoZSBpbmplY3RvciBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBpZiAoIWFuc3dlcikge1xuICAgICAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgICB0aGlzLm1vZGVsID0gaW5qZWN0b3IuZ2V0KCdLdWJlcm5ldGVzTW9kZWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYW5zd2VyID0gdGhpcy5tb2RlbDtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
