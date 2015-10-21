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
        Object.defineProperty(WatchTypes, "NAMESPACES", {
            get: function () { return "namespaces"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WatchTypes, "ENDPOINTS", {
            get: function () { return "endpoints"; },
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
        Object.defineProperty(WatchTypes, "SERVICES", {
            get: function () { return "services"; },
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
                    WatchTypes.PODS,
                    WatchTypes.REPLICATION_CONTROLLERS,
                    WatchTypes.SERVICES
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
                    WatchTypes.POLICIES,
                    WatchTypes.POLICY_BINDINGS,
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
        return answer ? answer : KubernetesAPI.defaultNamespace;
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
            var _this = this;
            _.remove(this._objects, function (obj) {
                _this._ee.emit(KubernetesAPI.WatchActions.DELETED, object);
                _this.triggerChangedEvent();
                return KubernetesAPI.equals(obj, object);
            }, this);
        };
        ;
        return ObjectList;
    })();
    ;
    var WSHandlers = (function () {
        function WSHandlers(_self) {
            this._self = _self;
            this.retries = 0;
            this.connectTime = 0;
            this.self = undefined;
            this.self = _self;
        }
        Object.defineProperty(WSHandlers.prototype, "list", {
            set: function (_list) {
                this._list = _list;
            },
            enumerable: true,
            configurable: true
        });
        WSHandlers.prototype.setHandlers = function (self, ws) {
            _.forIn(self, function (value, key) {
                if (_.startsWith(key, 'on')) {
                    ws[key] = function (event) {
                        self[key](event);
                    };
                }
            });
        };
        ;
        WSHandlers.prototype.send = function (data) {
            if (!_.isString(data)) {
                data = angular.toJson(data);
            }
            this.socket.send(data);
        };
        WSHandlers.prototype.onmessage = function (event) {
            var data = JSON.parse(event.data);
            var eventType = data.type.toLowerCase();
            this._list[eventType](data.object);
        };
        ;
        WSHandlers.prototype.onopen = function (event) {
            this.retries = 0;
            this.connectTime = new Date().getTime();
            log.debug("Connected: ", event);
        };
        ;
        WSHandlers.prototype.onclose = function (event) {
            var _this = this;
            if (this.retries < 3 && this.connectTime && (new Date().getTime() - this.connectTime) > 5000) {
                var self = this;
                setTimeout(function () {
                    log.debug("Retrying after connection closed: ", event);
                    _this.retries = _this.retries + 1;
                    log.debug("watch ", _this.self.kind, " disconnected, retry #", _this.retries);
                    var ws = _this.socket = new WebSocket(_this.self.wsUrl);
                    _this.setHandlers(self, ws);
                }, 5000);
            }
            else {
                log.debug("Watch for ", this.self.kind, " failed");
                log.debug("Closed: ", event);
            }
        };
        ;
        Object.defineProperty(WSHandlers.prototype, "connected", {
            get: function () {
                return this.socket && this.socket.readyState === WebSocket.OPEN;
            },
            enumerable: true,
            configurable: true
        });
        ;
        WSHandlers.prototype.connect = function () {
            log.debug("Connecting watch ", this.self.kind);
            var ws = this.socket = new WebSocket(this.self.wsUrl);
            this.setHandlers(this, ws);
        };
        ;
        return WSHandlers;
    })();
    var CollectionImpl = (function () {
        function CollectionImpl(kind, namespace) {
            this._cb = undefined;
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
            this.handlers = new WSHandlers(this);
            var list = this.list = new ObjectList(kind, namespace);
            this.handlers.list = list;
        }
        ;
        Object.defineProperty(CollectionImpl.prototype, "wsUrl", {
            get: function () {
                return this._wsUrl.toString();
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
        CollectionImpl.prototype.initializeCallback = function (cb) {
            if (this._cb !== cb) {
                this.list.events.off(KubernetesAPI.WatchActions.ANY, this._cb);
                this.list.events.off(KubernetesAPI.WatchActions.ADDED, this._cb);
                this.list.events.off(KubernetesAPI.WatchActions.MODIFIED, this._cb);
                this.list.events.off(KubernetesAPI.WatchActions.DELETED, this._cb);
                this._cb = cb;
            }
        };
        CollectionImpl.prototype.connect = function () {
            if (!this.handlers.connected) {
                this.handlers.connect();
            }
        };
        ;
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
            this.initializeCallback(cb);
            this.list.events.on(KubernetesAPI.WatchActions.ANY, cb);
        };
        ;
        CollectionImpl.prototype.put = function (item, cb) {
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
                    log.debug("Failed to create or update ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
                }
            });
        };
        ;
        CollectionImpl.prototype.delete = function (item, cb) {
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
                    log.debug("Failed to delete ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
                    _this.list.added(item);
                    _this.list.triggerChangedEvent();
                }
            });
        };
        ;
        return CollectionImpl;
    })();
    KubernetesAPI.CollectionImpl = CollectionImpl;
    var K8SClientFactoryImpl = (function () {
        function K8SClientFactoryImpl() {
        }
        K8SClientFactoryImpl.prototype.create = function (kind, namespace) {
            return new CollectionImpl(kind, namespace);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFUlZJQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVfQklORElOR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9MRVMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcyIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFEREVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuTU9ESUZJRUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5ERUxFVEVEIiwiS3ViZXJuZXRlc0FQSS5jdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc05hbWVzcGFjZVBhdGgiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLnVwZGF0ZU9yQ3JlYXRlT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVSZXNvdXJjZSIsIkt1YmVybmV0ZXNBUEkuaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5kZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkc0xvZ3NSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZHNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZENvbmZpZ0hvb2tzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkucm91dGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkudGVtcGxhdGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkud3NTY2hlbWUiLCJLdWJlcm5ldGVzQVBJLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5lcXVhbHMiLCJLdWJlcm5ldGVzQVBJLmdldFVJRCIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldEtpbmQiLCJLdWJlcm5ldGVzQVBJLmdldFNlbGVjdG9yIiwiS3ViZXJuZXRlc0FQSS5nZXRIb3N0IiwiS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldFBvcnRzIiwiS3ViZXJuZXRlc0FQSS5nZXRDcmVhdGlvblRpbWVzdGFtcCIsIkt1YmVybmV0ZXNBUEkuaXNLdWJlcm5ldGVzIiwiS3ViZXJuZXRlc0FQSS5pc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIiLCJLdWJlcm5ldGVzQVBJLmlzQXBwVmlldyIsIkt1YmVybmV0ZXNBUEkuc2V0SnNvbiIsIkt1YmVybmV0ZXNBUEkubGFiZWxzVG9TdHJpbmciLCJLdWJlcm5ldGVzQVBJLnNlcnZpY2VMaW5rVXJsIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVQb2RDb3VudGVycyIsIkt1YmVybmV0ZXNBUEkuY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyIsIkt1YmVybmV0ZXNBUEkuaXNWMWJldGExT3IyIiwiS3ViZXJuZXRlc0FQSS5lbnRpdHlQYWdlTGluayIsIkt1YmVybmV0ZXNBUEkucmVzb3VyY2VLaW5kVG9VcmlQYXRoIiwiS3ViZXJuZXRlc0FQSS5pc0lnbm9yZU5hbWVzcGFjZUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNVcmxGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkQ29uZmlnUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmltYWdlUmVwb3NpdG9yeVJlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRMb2dzUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLmdldFNlcnZpY2VSZWdpc3RyeSIsIkt1YmVybmV0ZXNBUEkucmVzaXplQ29udHJvbGxlciIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5naXRQYXRoVG9VcmwiLCJLdWJlcm5ldGVzQVBJLnRvUmF3SnNvbiIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5pbml0aWFsaXplZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5ldmVudHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3Qub2JqZWN0cyIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5oYXNOYW1lZEl0ZW0iLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuYWRkZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QubW9kaWZpZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZGVsZXRlZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycyIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5saXN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLnNldEhhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLnNlbmQiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMub25tZXNzYWdlIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLm9ub3BlbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5vbmNsb3NlIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5jb25uZWN0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5uYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmtpbmQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuaW5pdGlhbGl6ZUNhbGxiYWNrIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnJlc3RVcmxGb3IiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndhdGNoIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5wdXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlbGV0ZSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jcmVhdGUiLCJLdWJlcm5ldGVzQVBJLlNlcnZpY2VSZWdpc3RyeVNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLlNlcnZpY2VSZWdpc3RyeVNlcnZpY2UuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLlNlcnZpY2VSZWdpc3RyeVNlcnZpY2UuaGFzU2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5maW5kU2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5zZXJ2aWNlTGluayIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5nZXRNb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCxHQUFHO0FBQ0gsbUVBQW1FO0FBQ25FLG9FQUFvRTtBQUNwRSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNILGdEQUFnRDtBQUNoRCxHQUFHO0FBQ0gsdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSw0RUFBNEU7QUFDNUUsdUVBQXVFO0FBQ3ZFLGtDQUFrQztBQUVsQywwREFBMEQ7QUFDMUQsc0RBQXNEOztBQ2hCdEQsc0NBQXNDO0FBSXJDLENBQUM7QUFPRCxDQUFDO0FBRUYsSUFBTyxhQUFhLENBNkhuQjtBQTdIRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRXBCQTtRQUFBQztRQUVBQyxDQUFDQTtRQURDRCxzQkFBSUEseUNBQXFCQTtpQkFBekJBLGNBQXFDRSxNQUFNQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDdkVBLGFBQUNBO0lBQURBLENBRkFELEFBRUNDLElBQUFEO0lBRllBLG9CQUFNQSxTQUVsQkEsQ0FBQUE7SUFFVUEsdUJBQVNBLEdBQUdBLElBQUlBLE1BQU1BLEVBQUVBLENBQUNBO0lBOENyQ0E7UUFBQUk7UUFnQkFDLENBQUNBO1FBZkFELHNCQUFrQkEsd0JBQVVBO2lCQUE1QkEsY0FBd0NFLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNHLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDNURBLHNCQUFrQkEsa0JBQUlBO2lCQUF0QkEsY0FBa0NJLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDbERBLHNCQUFrQkEscUNBQXVCQTtpQkFBekNBLGNBQXFESyxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDdkZBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NNLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQU47UUFDMURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNPLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVA7UUFDNURBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NRLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVI7UUFDdERBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNTLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVQ7UUFDbkVBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NVLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVY7UUFDdERBLHNCQUFrQkEsZ0NBQWtCQTtpQkFBcENBLGNBQWdEVyxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVg7UUFDN0VBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNZLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVo7UUFDbkVBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NhLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWI7UUFDMURBLHNCQUFrQkEsNkJBQWVBO2lCQUFqQ0EsY0FBNkNjLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZDtRQUN2RUEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ2UsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZjtRQUNuRUEsc0JBQWtCQSxtQkFBS0E7aUJBQXZCQSxjQUFtQ2dCLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWhCO1FBQ3JEQSxpQkFBQ0E7SUFBREEsQ0FoQkFKLEFBZ0JDSSxJQUFBSjtJQWhCWUEsd0JBQVVBLGFBZ0J0QkEsQ0FBQUE7SUFFQUE7UUFBQXFCO1FBd0JBQyxDQUFDQTtRQXZCQ0Qsc0JBQWtCQSwyQkFBUUE7aUJBQTFCQTtnQkFDRUUsTUFBTUEsQ0FBQ0E7b0JBQ0xBLFVBQVVBLENBQUNBLFNBQVNBO29CQUNwQkEsVUFBVUEsQ0FBQ0EsSUFBSUE7b0JBQ2ZBLFVBQVVBLENBQUNBLHVCQUF1QkE7b0JBQ2xDQSxVQUFVQSxDQUFDQSxRQUFRQTtpQkFDcEJBLENBQUNBO1lBQ0pBLENBQUNBOzs7V0FBQUY7UUFDREEsc0JBQWtCQSwwQkFBT0E7aUJBQXpCQTtnQkFDRUcsTUFBTUEsQ0FBQ0E7b0JBQ0xBLFVBQVVBLENBQUNBLFNBQVNBO29CQUNwQkEsVUFBVUEsQ0FBQ0EsYUFBYUE7b0JBQ3hCQSxVQUFVQSxDQUFDQSxNQUFNQTtvQkFDakJBLFVBQVVBLENBQUNBLE1BQU1BO29CQUNqQkEsVUFBVUEsQ0FBQ0EsYUFBYUE7b0JBQ3hCQSxVQUFVQSxDQUFDQSxrQkFBa0JBO29CQUM3QkEsVUFBVUEsQ0FBQ0EsYUFBYUE7b0JBQ3hCQSxVQUFVQSxDQUFDQSxRQUFRQTtvQkFDbkJBLFVBQVVBLENBQUNBLGVBQWVBO2lCQUczQkEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7OztXQUFBSDtRQUNIQSxzQkFBQ0E7SUFBREEsQ0F4QkFyQixBQXdCQ3FCLElBQUFyQjtJQXhCWUEsNkJBQWVBLGtCQXdCM0JBLENBQUFBO0lBRUZBO1FBQUF5QjtRQUtBQyxDQUFDQTtRQUpBRCxzQkFBa0JBLG1CQUFHQTtpQkFBckJBLGNBQWlDRSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFGO1FBQzlDQSxzQkFBa0JBLHFCQUFLQTtpQkFBdkJBLGNBQW1DRyxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFIO1FBQ3BEQSxzQkFBa0JBLHdCQUFRQTtpQkFBMUJBLGNBQXNDSSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFKO1FBQzFEQSxzQkFBa0JBLHVCQUFPQTtpQkFBekJBLGNBQXFDSyxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFMO1FBQ3pEQSxtQkFBQ0E7SUFBREEsQ0FMQXpCLEFBS0N5QixJQUFBekI7SUFMWUEsMEJBQVlBLGVBS3hCQSxDQUFBQTtBQXdCRkEsQ0FBQ0EsRUE3SE0sYUFBYSxLQUFiLGFBQWEsUUE2SG5COztBQzFJRCxrREFBa0Q7QUFDbEQseUNBQXlDO0FBSXpDLElBQU8sYUFBYSxDQTRCbkI7QUE1QkQsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUVUQSx3QkFBVUEsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFDN0JBLHdCQUFVQSxHQUFHQSx5QkFBeUJBLENBQUNBO0lBQ3ZDQSwwQkFBWUEsR0FBR0Esd0JBQVVBLEdBQUdBLE9BQU9BLENBQUNBO0lBQ3BDQSxpQkFBR0EsR0FBa0JBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLHdCQUFVQSxDQUFDQSxDQUFDQTtJQUU1Q0EsOEJBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUV4QkEsNEJBQWNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDakRBLHlCQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUd4Q0Esc0JBQVFBLEdBQW9CQSxTQUFTQSxDQUFDQTtJQUN0Q0EsdUJBQVNBLEdBQUdBLEVBQUVBLENBQUNBO0lBRWZBLHdCQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUNuQkEsdUJBQVNBLEdBQUdBLE1BQU1BLENBQUNBO0lBRW5CQSw2QkFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDdkJBLDRCQUFjQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUV0QkEsK0JBQWlCQSxHQUFHQSw2QkFBZUEsQ0FBQ0E7SUFDcENBLGlDQUFtQkEsR0FBR0EsNEJBQWNBLENBQUNBO0lBRXJDQSxzQ0FBd0JBLEdBQUdBLEdBQUdBLENBQUNBO0lBQy9CQSw4QkFBZ0JBLEdBQUdBLFNBQVNBLENBQUNBO0lBQzdCQSx1QkFBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDaENBLENBQUNBLEVBNUJNLGFBQWEsS0FBYixhQUFhLFFBNEJuQjs7QUNqQ0QsK0NBQStDO0FBRS9DLElBQU8sYUFBYSxDQTR2Qm5CO0FBNXZCRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBS3BCQTtRQUNFK0IsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2JBLElBQUlBLGVBQWVBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDNURBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLGlCQUFpQkEsSUFBSUEsOEJBQWdCQSxDQUFDQTtRQUMvREEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsOEJBQWdCQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFQZS9CLHdDQUEwQkEsNkJBT3pDQSxDQUFBQTtJQUVEQTtRQUNFZ0MsSUFBSUEsRUFBRUEsR0FBR0EsMEJBQTBCQSxFQUFFQSxDQUFDQTtRQUN0Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsTUFBTUEsQ0FBQ0EsY0FBY0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1FBQ1pBLENBQUNBO0lBQ0hBLENBQUNBO0lBUGVoQyxxQ0FBdUJBLDBCQU90Q0EsQ0FBQUE7SUFFREE7UUFDRWlDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHNCQUFRQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsTUFBTUEsR0FBR0Esd0JBQVVBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFOZWpDLHVCQUFTQSxZQU14QkEsQ0FBQUE7SUFFREE7UUFDRWtDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHNCQUFRQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxXQUFXQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsTUFBTUEsR0FBR0EsdUJBQVNBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUNEQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQU8zQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDaEJBLENBQUNBO0lBYmVsQyx5QkFBV0EsY0FhMUJBLENBQUFBO0lBRURBO1FBQ0VtQyxNQUFNQSxDQUFDQSx1QkFBU0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBRmVuQywwQkFBWUEsZUFFM0JBLENBQUFBO0lBRURBO1FBQ0VvQyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSw0QkFBY0EsQ0FBQ0EsQ0FBQ0E7SUFDdERBLENBQUNBO0lBRmVwQyxpQ0FBbUJBLHNCQUVsQ0EsQ0FBQUE7SUFFREE7UUFDRXFDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLDZCQUFlQSxDQUFDQSxDQUFDQTtJQUN6REEsQ0FBQ0E7SUFGZXJDLGdDQUFrQkEscUJBRWpDQSxDQUFBQTtJQUVEQSx1QkFBOEJBLElBQVdBO1FBQ3ZDc0MsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0Esd0JBQVVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ25DQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBZUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsQ0FBQ0EsS0FBS0EsSUFBSUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdkRBLE1BQU1BLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLDZCQUFlQSxDQUFDQSxPQUFPQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0REEsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQTtRQUM5QkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFYZXRDLDJCQUFhQSxnQkFXNUJBLENBQUFBO0lBRURBO1FBQ0V1QyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxtQkFBbUJBLEVBQUVBLENBQUNBLENBQUNBO0lBQ2hFQSxDQUFDQTtJQUZldkMsOEJBQWdCQSxtQkFFL0JBLENBQUFBO0lBRURBO1FBQ0V3QyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxrQkFBa0JBLEVBQUVBLENBQUNBLENBQUNBO0lBQy9EQSxDQUFDQTtJQUZleEMsNkJBQWVBLGtCQUU5QkEsQ0FBQUE7SUFFREEsOEJBQXFDQSxNQUFNQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUF3QkEsRUFBRUEsS0FBdUJBO1FBQzdHeUMsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EseUNBQXlDQSxDQUFDQSxDQUFDQTtZQUNyREEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsVUFBQ0EsR0FBR0E7Z0JBQzFCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxvQkFBb0JBLENBQUNBLEdBQUdBLEVBQUVBLGVBQWVBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzdEQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNIQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsRUFBRUEscUJBQXFCQSxDQUFDQSxDQUFDQTtZQUNyREEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7UUFDdENBLElBQUlBLFFBQVFBLEdBQUdBLGVBQWVBLENBQUNBLElBQUlBLEdBQUdBLFVBQVVBLENBQUNBLENBQUNBO1FBQ2xEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNkQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esb0NBQW9DQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN0REEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsSUFBSUEsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1ZBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxzQkFBc0JBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1lBQzFDQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUVEQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFBQTtRQUM5REEsSUFBSUEsTUFBTUEsR0FBR0EsUUFBUUEsR0FBR0EsVUFBVUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFFN0NBLElBQUlBLGVBQWVBLEdBQUdB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UUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDckJBLElBQUlBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUM1QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1hBLElBQUlBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO3dCQUNqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzVCQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDcEJBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDaEVBLE1BQU1BLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBO3dCQUN0QkEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUM3RkEsTUFBTUEsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ3BCQSxDQUFDQTtvQkFDSEEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNOQSxNQUFNQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcEJB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LElBQUlBLEtBQUtBLENBQUNBLGdCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDakRBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDaEZBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNOQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqREEsQ0FBQ0E7WUFFREEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLEVBQUVBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JFQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxtQkFBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsMEJBQVlBLEVBQUVBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQU1BO2dCQUMxRUEsS0FBS0EsRUFBRUEsSUFBSUE7Z0JBQ1hBLFlBQVlBLEVBQUVBLFdBQVdBLENBQUNBLGFBQWFBLEVBQUVBO2FBQzFDQSxDQUFDQSxDQUFDQTtZQUNIQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNyQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsVUFBVUEsQ0FBQ0Es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SSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUM1Q0EsTUFBTUEsQ0FBQ0EsNEJBQWNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2pDQSxDQUFDQTtRQUVPSix5Q0FBUUEsR0FBaEJBO1lBQ0VLLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBRXhCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDYkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtnQkFDL0NBLENBQUNBO1lBQ0hBLENBQUNBO1lBQ0RBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFDSEwsNkJBQUNBO0lBQURBLENBM0RBOUgsQUEyREM4SCxJQUFBOUg7SUEzRFlBLG9DQUFzQkEseUJBMkRsQ0EsQ0FBQUE7QUFDSEEsQ0FBQ0EsRUF0RU0sYUFBYSxLQUFiLGFBQWEsUUFzRW5CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby11dGlsaXRpZXMvZGVmcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLW9hdXRoL2RlZnMuZC50c1wiLz5cbiIsIi8vZGVmIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgLy9XYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfVxuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIFdhdGNoZXJTZXJ2aWNlIHtcblx0XHRoYXNXZWJTb2NrZXQ6IGJvb2xlYW47XG5cdFx0YWRkQ3VzdG9taXplcjogKHR5cGU6IHN0cmluZywgY3VzdG9taXplcjogKG9iajphbnkpID0+IHZvaWQpID0+IHZvaWQ7XG5cdFx0Z2V0VHlwZXM6ICgpID0+IEFycmF5PHN0cmluZz47XG5cdFx0Z2V0TmFtZXNwYWNlOiAoKSA9PiBzdHJpbmc7XG5cdFx0c2V0TmFtZXNwYWNlOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IHZvaWQ7XG5cdFx0Z2V0T2JqZWN0czogKHR5cGU6IHN0cmluZykgPT4gQXJyYXk8YW55Pjtcblx0XHRnZXRPYmplY3RNYXA6ICh0eXBlOiBzdHJpbmcpID0+IE9iamVjdE1hcDtcblx0XHRhZGRBY3Rpb246ICh0eXBlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBmbjogKG9iajphbnkpID0+IHZvaWQpID0+IHZvaWQ7XG5cdFx0cmVnaXN0ZXJMaXN0ZW5lcjogKGZuOihvYmplY3RzOk9iamVjdE1hcCkgPT4gdm9pZCkgPT4gdm9pZDtcblx0fVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZVBvZCB7XG4gICAgaWQ6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTpzdHJpbmc7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XG5cbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xuXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBrdWJlcm5ldGVzIHNlbGVjdGVkIG5hbWVzcGFjZSBvciB0aGUgZGVmYXVsdCBvbmVcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSgpIHtcbiAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgdmFyIEt1YmVybmV0ZXNTdGF0ZSA9IGluamVjdG9yLmdldChcIkt1YmVybmV0ZXNTdGF0ZVwiKSB8fCB7fTtcbiAgICAgIHJldHVybiBLdWJlcm5ldGVzU3RhdGUuc2VsZWN0ZWROYW1lc3BhY2UgfHwgZGVmYXVsdE5hbWVzcGFjZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHROYW1lc3BhY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSB7XG4gICAgdmFyIG5zID0gY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UoKTtcbiAgICBpZiAobnMpIHtcbiAgICAgIHJldHVybiBcIi9uYW1lc3BhY2VzL1wiICsgbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgdmFyIHByZWZpeCA9IENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKTtcbiAgICBpZiAoIXByZWZpeCkge1xuICAgICAgcHJlZml4ID0gSzhTX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIENvcmUudHJpbUxlYWRpbmcocHJlZml4LCAnLycpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9zQXBpUHJlZml4KCkge1xuICAgIHZhciBwcmVmaXggPSBDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSk7XG4gICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgIHByZWZpeCA9IE9TX1BSRUZJWDtcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IENvcmUudHJpbUxlYWRpbmcocHJlZml4LCAnLycpO1xuICAgIC8qXG4gICAgICBUT0RPIC0gbWF5IG5vdCBoYXZlIGEgY3VycmVudGx5IHNlbGVjdGVkIG5hbWVzcGFjZVxuICAgIGlmICghaXNPcGVuU2hpZnQpIHtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIE9TX0FQSV9WRVJTSU9OLCBcInByb3h5XCIsIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwic2VydmljZXMvdGVtcGxhdGVzXCIsIGFuc3dlcik7XG4gICAgfVxuICAgICovXG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVPYmplY3Qob2JqZWN0LCBLdWJlcm5ldGVzTW9kZWwsIHN1Y2Nlc3M/OiAoZGF0YSkgPT4gdm9pZCwgZXJyb3I/OiAoZXJyb3IpID0+IHZvaWQpIHtcbiAgICB2YXIga2luZCA9IGdldEtpbmQob2JqZWN0KTtcbiAgICBpZiAoa2luZCA9PT0gXCJMaXN0XCIpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBpcyBhIGxpc3QsIGRlcGxveWluZyBhbGwgb2JqZWN0c1wiKTtcbiAgICAgIF8uZm9yRWFjaChvYmplY3QuaXRlbXMsIChvYmopID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRGVwbG95aW5nOiBcIiwgb2JqKTtcbiAgICAgICAgdXBkYXRlT3JDcmVhdGVPYmplY3Qob2JqLCBLdWJlcm5ldGVzTW9kZWwsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdDogXCIsIG9iamVjdCwgXCIgaGFzIG5vIG9iamVjdCB0eXBlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBraW5kID0ga2luZC50b0xvd2VyQ2FzZSgpLnBsdXJhbGl6ZSgpO1xuICAgIHZhciByZXNvdXJjZSA9IEt1YmVybmV0ZXNNb2RlbFtraW5kICsgJ1Jlc291cmNlJ107XG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgbG9nLmRlYnVnKFwiVW5hYmxlIHRvIGZpbmQgcmVzb3VyY2UgZm9yIGtpbmQ6IFwiLCBraW5kKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKG9iamVjdCk7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgaGFzIG5vIG5hbWU6IFwiLCBvYmplY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1VwZGF0ZSA9IF8uYW55KEt1YmVybmV0ZXNNb2RlbFtraW5kXSwgKG4pID0+IG4gPT09IG5hbWUpXG4gICAgdmFyIGFjdGlvbiA9IGlzVXBkYXRlID8gXCJNb2RpZmllZFwiIDogXCJBZGRlZFwiO1xuXG4gICAgdmFyIHN1Y2Nlc3NJbnRlcm5hbCA9IChkYXRhKSA9PiB7XG4gICAgICBsb2cuZGVidWcoYWN0aW9uLCBkYXRhKTtcbiAgICAgIGlmICghaXNVcGRhdGUpIHtcbiAgICAgICAgS3ViZXJuZXRlc01vZGVsW2tpbmRdLnB1c2goZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBzdWNjZXNzKGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGVycm9ySW50ZXJuYWwgPSAoZXJyKSA9PiB7XG4gICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gYWRkL21vZGlmeSBvYmplY3Q6IFwiLCBvYmplY3QsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNVcGRhdGUpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBhbHJlYWR5IGV4aXN0cywgdXBkYXRpbmcuLi5cIik7XG4gICAgICByZXNvdXJjZS5zYXZlKHsgaWQ6IG5hbWUgfSwgb2JqZWN0LCBzdWNjZXNzSW50ZXJuYWwsIGVycm9ySW50ZXJuYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgZG9lc24ndCBleGlzdCwgY3JlYXRpbmcuLi5cIik7XG4gICAgICByZXNvdXJjZS5jcmVhdGUoe30sIG9iamVjdCwgc3VjY2Vzc0ludGVybmFsLCBlcnJvckludGVybmFsKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2UodGhpbmc6c3RyaW5nLCB1cmxUZW1wbGF0ZTpzdHJpbmcsICRyZXNvdXJjZTogbmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSwgS3ViZXJuZXRlc01vZGVsKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeEZvcktpbmQodGhpbmcpO1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICBsb2cuZGVidWcoXCJJbnZhbGlkIHR5cGUgZ2l2ZW46IFwiLCB0aGluZyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW1zID0gPGFueT4ge1xuICAgICAgbmFtZXNwYWNlOiBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZVxuICAgIH1cbiAgICBpZiAodGhpbmcgPT09IFwibmFtZXNwYWNlc1wiKSB7XG4gICAgICBwYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXgsIHVybFRlbXBsYXRlKTtcbiAgICBsb2cuZGVidWcoXCJVcmwgZm9yIFwiLCB0aGluZywgXCI6IFwiLCB1cmwpO1xuICAgIHZhciByZXNvdXJjZSA9ICRyZXNvdXJjZSh1cmwsIG51bGwsIHtcbiAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IGZhbHNlLCBwYXJhbXM6IHBhcmFtc30sXG4gICAgICBjcmVhdGU6IHsgbWV0aG9kOiAnUE9TVCcsIHBhcmFtczogcGFyYW1zfSxcbiAgICAgIHNhdmU6IHsgbWV0aG9kOiAnUFVUJywgcGFyYW1zOiBwYXJhbXN9LFxuICAgICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScsIHBhcmFtczogXy5leHRlbmQoe1xuICAgICAgICBpZDogJ0BpZCdcbiAgICAgIH0sIHBhcmFtcyl9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc291cmNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGltYWdlUmVwb3NpdG9yaWVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9pbWFnZXN0cmVhbXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVwbG95bWVudENvbmZpZ3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2RlcGxveW1lbnRjb25maWdzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkc0xvZ3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL3Byb3h5L2J1aWxkbG9nc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZHNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2J1aWxkc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ0hvb2tzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9idWlsZGNvbmZpZ2hvb2tzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvYnVpbGRjb25maWdzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJvdXRlc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvcm91dGVzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvdGVtcGxhdGVzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpOmJvb2xlYW4ge1xuICAgIHJldHVybiBnZXRVSUQobGVmdCkgPT09IGdldFVJRChyaWdodCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDogZGVmYXVsdE5hbWVzcGFjZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibGFiZWxzXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDoge307XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcIm5hbWVcIikgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJpZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRLaW5kKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImtpbmRcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwia2luZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RvcihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0KHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwicGhhc2VcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRzKHNlcnZpY2UpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRpb25UaW1lc3RhbXAoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICB9O1xuXG4gIC8vdmFyIGZhYnJpY0RvbWFpbiA9IEZhYnJpYy5qbXhEb21haW47XG4gIHZhciBmYWJyaWNEb21haW4gPSBcImlvLmZhYnJpYzhcIjtcbiAgZXhwb3J0IHZhciBtYmVhbiA9IGZhYnJpY0RvbWFpbiArIFwiOnR5cGU9S3ViZXJuZXRlc1wiO1xuICBleHBvcnQgdmFyIG1hbmFnZXJNQmVhbiA9IGZhYnJpY0RvbWFpbiArIFwiOnR5cGU9S3ViZXJuZXRlc01hbmFnZXJcIjtcbiAgZXhwb3J0IHZhciBhcHBWaWV3TUJlYW4gPSBmYWJyaWNEb21haW4gKyBcIjp0eXBlPUFwcFZpZXdcIjtcblxuICBleHBvcnQgZnVuY3Rpb24gaXNLdWJlcm5ldGVzKHdvcmtzcGFjZSkge1xuICAgIC8vIHJldHVybiB3b3Jrc3BhY2UudHJlZUNvbnRhaW5zRG9tYWluQW5kUHJvcGVydGllcyhmYWJyaWNEb21haW4sIHt0eXBlOiBcIkt1YmVybmV0ZXNcIn0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzS3ViZXJuZXRlc1RlbXBsYXRlTWFuYWdlcih3b3Jrc3BhY2UpIHtcbiAgICAvLyByZXR1cm4gd29ya3NwYWNlLnRyZWVDb250YWluc0RvbWFpbkFuZFByb3BlcnRpZXMoZmFicmljRG9tYWluLCB7dHlwZTogXCJLdWJlcm5ldGVzVGVtcGxhdGVNYW5hZ2VyXCJ9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0FwcFZpZXcod29ya3NwYWNlKSB7XG4gICAgLy8gcmV0dXJuIHdvcmtzcGFjZS50cmVlQ29udGFpbnNEb21haW5BbmRQcm9wZXJ0aWVzKGZhYnJpY0RvbWFpbiwge3R5cGU6IFwiQXBwVmlld1wifSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0SnNvbigkc2NvcGUsIGlkLCBjb2xsZWN0aW9uKSB7XG4gICAgJHNjb3BlLmlkID0gaWQ7XG4gICAgaWYgKCEkc2NvcGUuZmV0Y2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICAkc2NvcGUuanNvbiA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSBjb2xsZWN0aW9uLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGdldE5hbWUoaXRlbSkgPT09IGlkOyB9KTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgJHNjb3BlLmpzb24gPSBhbmd1bGFyLnRvSnNvbihpdGVtLCB0cnVlKTtcbiAgICAgICRzY29wZS5pdGVtID0gaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLmlkID0gdW5kZWZpbmVkO1xuICAgICAgJHNjb3BlLmpzb24gPSAnJztcbiAgICAgICRzY29wZS5pdGVtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYWJlbHMgdGV4dCBzdHJpbmcgdXNpbmcgdGhlIDxjb2RlPmtleTE9dmFsdWUxLGtleTI9dmFsdWUyLC4uLi48L2NvZGU+IGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvU3RyaW5nKGxhYmVscywgc2VwZXJhdG9yVGV4dCA9IGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvcikge1xuICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChsYWJlbHMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gYW5zd2VyID8gc2VwZXJhdG9yVGV4dCA6IFwiXCI7XG4gICAgICBhbnN3ZXIgKz0gc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlcnZpY2UgbGluayBVUkwgZm9yIGVpdGhlciB0aGUgc2VydmljZSBuYW1lIG9yIHRoZSBzZXJ2aWNlIG9iamVjdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VMaW5rVXJsKHNlcnZpY2UpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChzZXJ2aWNlKSkge1xuICAgICAgdmFyIHBvcnRhbElQID0gc2VydmljZS4kaG9zdDtcbiAgICAgIC8vIGxldHMgYXNzdW1lIG5vIGN1c3RvbSBwb3J0IGZvciBub3cgZm9yIGV4dGVybmFsIHJvdXRlc1xuICAgICAgdmFyIHBvcnQgPSBudWxsO1xuICAgICAgdmFyIHByb3RvY29sID0gXCJodHRwOi8vXCI7XG4gICAgICB2YXIgc3BlYyA9IHNlcnZpY2Uuc3BlYztcbiAgICAgIGlmIChzcGVjKSB7XG4gICAgICAgIGlmICghcG9ydGFsSVApIHtcbiAgICAgICAgICBwb3J0YWxJUCA9IHNwZWMucG9ydGFsSVA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc0h0dHBzID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNIdHRwID0gZmFsc2U7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzcGVjLnBvcnRzLCAocG9ydFNwZWMpID0+IHtcbiAgICAgICAgICB2YXIgcCA9IHBvcnRTcGVjLnBvcnQ7XG4gICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIGlmIChwID09PSA0NDMpIHtcbiAgICAgICAgICAgICAgaGFzSHR0cHMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwID09PSA4MCkge1xuICAgICAgICAgICAgICBoYXNIdHRwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgICBwb3J0ID0gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBvcnRhbElQKSB7XG4gICAgICAgIGlmIChoYXNIdHRwcykge1xuICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBwb3J0YWxJUDtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNIdHRwKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaHR0cDovL1wiICsgcG9ydGFsSVA7XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydCkge1xuICAgICAgICAgIHJldHVybiBwcm90b2NvbCArIHBvcnRhbElQICsgXCI6XCIgKyBwb3J0ICsgXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByb3RvY29sICsgcG9ydGFsSVA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHZhciBzZXJ2aWNlSWQgPSBzZXJ2aWNlLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHZhciBTZXJ2aWNlUmVnaXN0cnkgPSBnZXRTZXJ2aWNlUmVnaXN0cnkoKTtcbiAgICAgICAgaWYgKFNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgICAgIHJldHVybiBTZXJ2aWNlUmVnaXN0cnkuc2VydmljZUxpbmsoc2VydmljZUlkKSB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHRoZSBsaXN0IG9mIHBvZHMgbGV0cyBpdGVyYXRlIHRocm91Z2ggdGhlbSBhbmQgZmluZCBhbGwgcG9kcyBtYXRjaGluZyB0aGUgc2VsZWN0b3JcbiAgICogYW5kIHJldHVybiBjb3VudGVycyBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZSBwb2RcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2RDb3VudGVycyhzZWxlY3RvciwgcG9kcywgb3V0cHV0UG9kcyA9IFtdLCBwb2RMaW5rUXVlcnkgPSBudWxsKSB7XG4gICAgdmFyIGZpbHRlckZuO1xuICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICBmaWx0ZXJGbiA9IHNlbGVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJGbiA9IChwb2QpID0+IHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgZ2V0TGFiZWxzKHBvZCkpO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgcG9kc0xpbms6IFwiXCIsXG4gICAgICB2YWxpZDogMCxcbiAgICAgIHdhaXRpbmc6IDAsXG4gICAgICBlcnJvcjogMFxuICAgIH07XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoIXBvZExpbmtRdWVyeSkge1xuICAgICAgICBwb2RMaW5rUXVlcnkgPSBsYWJlbHNUb1N0cmluZyhzZWxlY3RvciwgXCIgXCIpO1xuICAgICAgfVxuICAgICAgYW5zd2VyLnBvZHNMaW5rID0gQ29yZS51cmwoXCIva3ViZXJuZXRlcy9wb2RzP3E9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocG9kTGlua1F1ZXJ5KSk7XG4gICAgICBhbmd1bGFyLmZvckVhY2gocG9kcywgcG9kID0+IHtcbiAgICAgICAgaWYgKGZpbHRlckZuKHBvZCkpIHtcbiAgICAgICAgICBvdXRwdXRQb2RzLnB1c2gocG9kKTtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gZ2V0U3RhdHVzKHBvZCk7XG4gICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAobG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKSkge1xuICAgICAgICAgICAgICBhbnN3ZXIudmFsaWQgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG93ZXIuc3RhcnRzV2l0aChcIndhaXRcIikgfHwgbG93ZXIuc3RhcnRzV2l0aChcInBlbmRcIikpIHtcbiAgICAgICAgICAgICAgYW5zd2VyLndhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG93ZXIuc3RhcnRzV2l0aChcInRlcm1cIikgfHwgbG93ZXIuc3RhcnRzV2l0aChcImVycm9yXCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJmYWlsXCIpKSB7XG4gICAgICAgICAgICAgIGFuc3dlci5lcnJvciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbnN3ZXIuZXJyb3IgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBnaXZlbiBqc29uIGludG8gYW4gYXJyYXkgb2YgaXRlbXMuIElmIHRoZSBqc29uIGNvbnRhaW5zIGEgbmVzdGVkIHNldCBvZiBpdGVtcyB0aGVuIHRoYXQgaXMgc29ydGVkOyBzbyB0aGF0IHNlcnZpY2VzXG4gICAqIGFyZSBwcm9jZXNzZWQgZmlyc3Q7IHRoZW4gdHVybmVkIGludG8gYW4gYXJyYXkuIE90aGVyd2lzZSB0aGUganNvbiBpcyBwdXQgaW50byBhbiBhcnJheSBzbyBpdCBjYW4gYmUgcHJvY2Vzc2VkIHBvbHltb3JwaGljYWxseVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRLdWJlcm5ldGVzSnNvblRvSXRlbXMoanNvbikge1xuICAgIHZhciBpdGVtcyA9IGpzb24uaXRlbXM7XG4gICAgaWYgKGFuZ3VsYXIuaXNBcnJheShpdGVtcykpIHtcbiAgICAgIC8vIFRPRE8gd2UgY291bGQgY2hlY2sgZm9yIExpc3Qgb3IgQ29uZmlnIHR5cGVzIGhlcmUgYW5kIHdhcm4gaWYgbm90XG5cbiAgICAgIC8vIHNvcnQgdGhlIHNlcnZpY2VzIGZpcnN0XG4gICAgICB2YXIgYW5zd2VyID0gW107XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgPT09IFwiU2VydmljZVwiKSB7XG4gICAgICAgICAgYW5zd2VyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5raW5kICE9PSBcIlNlcnZpY2VcIikge1xuICAgICAgICAgIGFuc3dlci5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbanNvbl07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzVjFiZXRhMU9yMigpIHtcbiAgICByZXR1cm4gZGVmYXVsdEFwaVZlcnNpb24gPT09IFwidjFiZXRhMVwiIHx8IGRlZmF1bHRBcGlWZXJzaW9uID09PSBcInYxYmV0YTJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGluayB0byB0aGUgZGV0YWlsIHBhZ2UgZm9yIHRoZSBnaXZlbiBlbnRpdHlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnRpdHlQYWdlTGluayhlbnRpdHkpIHtcbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICB2YXIgaWQgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgICB2YXIga2luZCA9IGdldEtpbmQoZW50aXR5KTtcbiAgICAgIGlmIChraW5kICYmIGlkKSB7XG4gICAgICAgIHZhciBwYXRoID0ga2luZC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtpbmQuc3Vic3RyaW5nKDEpICsgXCJzXCI7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoZW50aXR5KTtcbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhaXNJZ25vcmVOYW1lc3BhY2VLaW5kKGtpbmQpKSB7XG4gICAgICAgICAgcmV0dXJuIENvcmUudXJsKFVybEhlbHBlcnMuam9pbignL2t1YmVybmV0ZXMvbmFtZXNwYWNlJywgbmFtZXNwYWNlLCBwYXRoLCBpZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBDb3JlLnVybChVcmxIZWxwZXJzLmpvaW4oJy9rdWJlcm5ldGVzJywgcGF0aCwgaWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlS2luZFRvVXJpUGF0aChraW5kKSB7XG4gICAgdmFyIGtpbmRQYXRoID0ga2luZC50b0xvd2VyQ2FzZSgpICsgXCJzXCI7XG4gICAgaWYgKGtpbmRQYXRoID09PSBcInJlcGxpY2F0aW9uQ29udHJvbGxlcnNcIiAmJiAhaXNWMWJldGExT3IyKCkpIHtcbiAgICAgIGtpbmRQYXRoID0gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7XG4gICAgfVxuICAgIHJldHVybiBraW5kUGF0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSWdub3JlTmFtZXNwYWNlS2luZChraW5kKSB7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwiSG9zdFwiIHx8IGtpbmQgPT09IFwiTWluaW9uXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBVUkwgZm9yIHRoZSBraW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc1VybEZvcktpbmQoS3ViZXJuZXRlc0FwaVVSTCwga2luZCwgbmFtZXNwYWNlID0gbnVsbCwgcGF0aCA9IG51bGwpIHtcbiAgICB2YXIgcGF0aFNlZ21lbnQgPSBcIlwiO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXRoU2VnbWVudCA9IFwiL1wiICsgQ29yZS50cmltTGVhZGluZyhwYXRoLCBcIi9cIik7XG4gICAgfVxuICAgIHZhciBraW5kUGF0aCA9IHJlc291cmNlS2luZFRvVXJpUGF0aChraW5kKTtcbiAgICB2YXIgaWdub3JlTmFtZXNwYWNlID0gaXNJZ25vcmVOYW1lc3BhY2VLaW5kKGtpbmQpO1xuICAgIGlmIChpc1YxYmV0YTFPcjIoKSB8fCBpZ25vcmVOYW1lc3BhY2UpIHtcbiAgICAgIHZhciBwb3N0Zml4ID0gXCJcIjtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWlnbm9yZU5hbWVzcGFjZSkge1xuICAgICAgICBwb3N0Zml4ID0gXCI/bmFtZXNwYWNlPVwiICsgbmFtZXNwYWNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBraW5kUGF0aCwgcGF0aFNlZ21lbnQsIHBvc3RmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIFwiL25hbWVzcGFjZXMvXCIsIG5hbWVzcGFjZSAsIGtpbmRQYXRoLCBwYXRoU2VnbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYXNlIFVSTCBmb3IgdGhlIGtpbmQgb2Yga3ViZXJuZXRlcyByZXNvdXJjZSBvciBudWxsIGlmIGl0IGNhbm5vdCBiZSBmb3VuZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNVcmxGb3JJdGVtS2luZChLdWJlcm5ldGVzQXBpVVJMLCBqc29uKSB7XG4gICAgdmFyIGtpbmQgPSBqc29uLmtpbmQ7XG4gICAgaWYgKGtpbmQpIHtcbiAgICAgIHJldHVybiBrdWJlcm5ldGVzVXJsRm9yS2luZChLdWJlcm5ldGVzQXBpVVJMLCBraW5kLCBqc29uLm5hbWVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy53YXJuKFwiSWdub3JpbmcgbWlzc2luZyBraW5kIFwiICsga2luZCArIFwiIGZvciBrdWJlcm5ldGVzIGpzb246IFwiICsgYW5ndWxhci50b0pzb24oanNvbikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UoS3ViZXJuZXRlc0FwaVVSTCwgc2VydmljZSwgcGF0aCA9IG51bGwpIHtcbiAgICB2YXIgcGF0aFNlZ21lbnQgPSBcIlwiO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXRoU2VnbWVudCA9IFwiL1wiICsgQ29yZS50cmltTGVhZGluZyhwYXRoLCBcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCI7XG4gICAgfVxuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2Uoc2VydmljZSk7XG4gICAgaWYgKGlzVjFiZXRhMU9yMigpKSB7XG4gICAgICB2YXIgcG9zdGZpeCA9IFwiP25hbWVzcGFjZT1cIiArIG5hbWVzcGFjZTtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwgXCIvYXBpL1wiICsgZGVmYXVsdEFwaVZlcnNpb24gKyBcIi9wcm94eVwiICsga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSArIFwiL3NlcnZpY2VzL1wiICsgZ2V0TmFtZShzZXJ2aWNlKSArIHBhdGhTZWdtZW50ICsgcG9zdGZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwgXCIvYXBpL1wiICsgZGVmYXVsdEFwaVZlcnNpb24gKyBcIi9wcm94eS9uYW1lc3BhY2VzL1wiICsgbmFtZXNwYWNlICsgXCIvc2VydmljZXMvXCIgKyBnZXROYW1lKHNlcnZpY2UpICsgcGF0aFNlZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ1Jlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGJ1aWxkQ29uZmlnc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGRlcGxveW1lbnRDb25maWdSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihkZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGltYWdlUmVwb3NpdG9yeVJlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGltYWdlUmVwb3NpdG9yaWVzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihidWlsZHNSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZExvZ3NSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihidWlsZHNMb2dzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgZ2l2ZW4gYXBwbGljYXRpb24gSlNPTlxuICAgKi9cbiAgICAgIC8qXG4gIGV4cG9ydCBmdW5jdGlvbiBydW5BcHAoJGxvY2F0aW9uLCAkc2NvcGUsICRodHRwLCBLdWJlcm5ldGVzQXBpVVJMLCBqc29uLCBuYW1lID0gXCJBcHBcIiwgb25TdWNjZXNzRm4gPSBudWxsLCBuYW1lc3BhY2UgPSBudWxsLCBvbkNvbXBsZXRlRm4gPSBudWxsKSB7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGpzb24pKSB7XG4gICAgICAgIGpzb24gPSBhbmd1bGFyLmZyb21Kc29uKGpzb24pO1xuICAgICAgfVxuICAgICAgbmFtZSA9IG5hbWUgfHwgXCJBcHBcIjtcbiAgICAgIHZhciBwb3N0Zml4ID0gbmFtZXNwYWNlID8gXCIgaW4gbmFtZXNwYWNlIFwiICsgbmFtZXNwYWNlIDogXCJcIjtcblxuICAgICAgdmFyIGl0ZW1zID0gY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyhqc29uKTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChpdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHVybCA9IGt1YmVybmV0ZXNVcmxGb3JJdGVtS2luZChLdWJlcm5ldGVzQXBpVVJMLCBpdGVtKTtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICRodHRwLnBvc3QodXJsLCBpdGVtKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkdvdCBzdGF0dXM6IFwiICsgc3RhdHVzICsgXCIgb24gdXJsOiBcIiArIHVybCArIFwiIGRhdGE6IFwiICsgZGF0YSArIFwiIGFmdGVyIHBvc3Rpbmc6IFwiICsgYW5ndWxhci50b0pzb24oaXRlbSkpO1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKG9uQ29tcGxldGVGbikpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlRm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBDb3JlLiRhcHBseSgkc2NvcGUpO1xuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChkYXRhKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICB2YXIgcmVhc29uID0gZGF0YS5yZWFzb247XG4gICAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFwiQWxyZWFkeUV4aXN0c1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0cyBpZ25vcmUgZHVwbGljYXRlc1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcImVudGl0eSBhbHJlYWR5IGV4aXN0cyBhdCBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRmFpbGVkIHRvIFBPU1QgdG8gXCIgKyB1cmwgKyBcIiBnb3Qgc3RhdHVzOiBcIiArIHN0YXR1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIHNhdmUgXCIgKyB1cmwgKyBcIiBzdGF0dXM6IFwiICsgc3RhdHVzICsgXCIgcmVzcG9uc2U6IFwiICsgYW5ndWxhci50b0pzb24oZGF0YSwgdHJ1ZSkpO1xuICAgICAgICAgICAgQ29yZS5ub3RpZmljYXRpb24oJ2Vycm9yJywgbWVzc2FnZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAqL1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHBvZCBpcyBydW5uaW5nXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gaXNSdW5uaW5nKHBvZEN1cnJlbnRTdGF0ZSkge1xuICAgIHZhciBzdGF0dXMgPSAocG9kQ3VycmVudFN0YXRlIHx8IHt9KS5waGFzZTtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbGFiZWxzIG9iamVjdCBoYXMgYWxsIG9mIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSB0aGUgc2VsZWN0b3JcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGxhYmVscykge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGxhYmVscykpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0cnVlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZWxlY3RvciwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGFuc3dlciAmJiBsYWJlbHNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyICYmIGNvdW50ID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIHJlZ2lzdHJ5XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VydmljZVJlZ2lzdHJ5KCkge1xuICAgIHZhciBpbmplY3RvciA9IEhhd3Rpb0NvcmUuaW5qZWN0b3I7XG4gICAgcmV0dXJuIGluamVjdG9yID8gaW5qZWN0b3IuZ2V0KFwiU2VydmljZVJlZ2lzdHJ5XCIpIDogbnVsbDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaW5rIHRvIHRoZSBraWJhbmEgbG9ncyB3ZWIgYXBwbGljYXRpb25cbiAgICovXG4gIC8qXG4gIGV4cG9ydCBmdW5jdGlvbiBraWJhbmFMb2dzTGluayhTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICB2YXIgbGluayA9IFNlcnZpY2VSZWdpc3RyeS5zZXJ2aWNlTGluayhraWJhbmFTZXJ2aWNlTmFtZSk7XG4gICAgaWYgKGxpbmspIHtcbiAgICAgIGlmICghbGluay5lbmRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgbGluayArPSBcIi9cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaW5rICsgXCIjL2Rhc2hib2FyZC9GYWJyaWM4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAqL1xuXG4gIC8qXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuTG9nc0ZvclBvZHMoU2VydmljZVJlZ2lzdHJ5LCAkd2luZG93LCBuYW1lc3BhY2UsIHBvZHMpIHtcbiAgICB2YXIgbGluayA9IGtpYmFuYUxvZ3NMaW5rKFNlcnZpY2VSZWdpc3RyeSk7XG4gICAgaWYgKGxpbmspIHtcbiAgICAgIHZhciBxdWVyeSA9IFwiXCI7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHBvZHMsIChpdGVtKSA9PiB7XG4gICAgICAgIHZhciBpZCA9IGdldE5hbWUoaXRlbSk7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgIHZhciBzcGFjZSA9IHF1ZXJ5ID8gXCIgT1IgXCIgOiBcIlwiO1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgcXVlcnkgKz0gc3BhY2UgKyAnXCInICsgaWQgKyAnXCInO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBpZiAoY291bnQgPiAxKSB7XG4gICAgICAgICAgcXVlcnkgPSBcIihcIiArIHF1ZXJ5ICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnkgPSAna3ViZXJuZXRlcy5uYW1lc3BhY2U6XCInICsgbmFtZXNwYWNlICsgJ1wiIEFORCBrdWJlcm5ldGVzLnBvZF9uYW1lOicgKyBxdWVyeTtcbiAgICAgICAgbGluayArPSBcIj9fYT0ocXVlcnk6KHF1ZXJ5X3N0cmluZzoocXVlcnk6J1wiICsgcXVlcnkgKyBcIicpKSlcIjtcbiAgICAgICAgdmFyIG5ld1dpbmRvdyA9ICR3aW5kb3cub3BlbihsaW5rLCBcInZpZXdMb2dzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAqL1xuXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNpemVDb250cm9sbGVyKCRodHRwLCBLdWJlcm5ldGVzQXBpVVJMLCByZXBsaWNhdGlvbkNvbnRyb2xsZXIsIG5ld1JlcGxpY2FzLCBvbkNvbXBsZXRlRm4gPSBudWxsKSB7XG4gICAgdmFyIGlkID0gZ2V0TmFtZShyZXBsaWNhdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UocmVwbGljYXRpb25Db250cm9sbGVyKSB8fCBcIlwiO1xuICAgIHZhciB1cmwgPSBrdWJlcm5ldGVzVXJsRm9yS2luZChLdWJlcm5ldGVzQXBpVVJMLCBcIlJlcGxpY2F0aW9uQ29udHJvbGxlclwiLCBuYW1lc3BhY2UsIGlkKTtcbiAgICAkaHR0cC5nZXQodXJsKS5cbiAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdmFyIGRlc2lyZWRTdGF0ZSA9IGRhdGEuc3BlYztcbiAgICAgICAgICBpZiAoIWRlc2lyZWRTdGF0ZSkge1xuICAgICAgICAgICAgZGVzaXJlZFN0YXRlID0ge307XG4gICAgICAgICAgICBkYXRhLnNwZWMgPSBkZXNpcmVkU3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlc2lyZWRTdGF0ZS5yZXBsaWNhcyA9IG5ld1JlcGxpY2FzO1xuICAgICAgICAgICRodHRwLnB1dCh1cmwsIGRhdGEpLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKFwidXBkYXRlZCBjb250cm9sbGVyIFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihvbkNvbXBsZXRlRm4pKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZUZuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJGYWlsZWQgdG8gc2F2ZSBcIiArIHVybCArIFwiIFwiICsgZGF0YSArIFwiIFwiICsgc3RhdHVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkuXG4gICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgbG9nLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBcIiArIHVybCArIFwiIFwiICsgZGF0YSArIFwiIFwiICsgc3RhdHVzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxuICAvKipcbiAgICogY29udmVydHMgYSBnaXQgcGF0aCBpbnRvIGFuIGFjY2Vzc2libGUgVVJMIGZvciB0aGUgYnJvd3NlclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdpdFBhdGhUb1VybChpY29uUGF0aCwgYnJhbmNoID0gXCJtYXN0ZXJcIikge1xuICAgIHJldHVybiAoSGF3dGlvQ29yZS5pbmplY3Rvci5nZXQoJ0FwcExpYnJhcnlVUkwnKSB8fCAnJykgKyBcIi9naXQvXCIgKyBicmFuY2ggKyBpY29uUGF0aDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIGpzb24gc2NoZW1hXG4gICAqL1xuICAgICAgICAvKlxuICBleHBvcnQgZnVuY3Rpb24gY29uZmlndXJlU2NoZW1hKCkge1xuICAgIGFuZ3VsYXIuZm9yRWFjaChzY2hlbWEuZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uLCBuYW1lKSA9PiB7XG4gICAgICB2YXIgcHJvcGVydGllcyA9IGRlZmluaXRpb24ucHJvcGVydGllcztcbiAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBoaWRlUHJvcGVydGllcyA9IFtcImNyZWF0aW9uVGltZXN0YW1wXCIsIFwia2luZFwiLCBcImFwaVZlcnNpb25cIiwgXCJhbm5vdGF0aW9uc1wiLCBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIsIFwibmFtZXNwYWNlXCIsIFwicmVzb3VyY2VWZXJzaW9uXCIsIFwic2VsZkxpbmtcIiwgXCJ1aWRcIl07XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChoaWRlUHJvcGVydGllcywgKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgIHByb3BlcnR5W1wiaGlkZGVuXCJdICA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKHByb3BlcnRpZXMsIChwcm9wZXJ0eSwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgdmFyIHJlZiA9IHByb3BlcnR5W1wiJHJlZlwiXTtcbiAgICAgICAgICB2YXIgdHlwZSA9IHByb3BlcnR5W1widHlwZVwiXTtcbiAgICAgICAgICBpZiAocmVmICYmICghdHlwZSB8fCB0eXBlID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgcHJvcGVydHlbXCJ0eXBlXCJdID0gcmVmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBwcm9wZXJ0eVtcIml0ZW1zXCJdO1xuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgIHZhciByZWYgPSBpdGVtc1tcIiRyZWZcIl07XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gaXRlbXNbXCJ0eXBlXCJdO1xuICAgICAgICAgICAgICBpZiAocmVmICYmICghdHlwZSB8fCB0eXBlID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zW1widHlwZVwiXSA9IHJlZjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVtYS5kZWZpbml0aW9ucy5vc19idWlsZF9XZWJIb29rVHJpZ2dlci5wcm9wZXJ0aWVzLnNlY3JldC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgIH0pXG4gIH1cbiAgKi9cblxuICAvKipcbiAgICogTGV0cyByZW1vdmUgYW55IGVucmljaGVkIGRhdGEgdG8gbGVhdmUgdGhlIG9yaWdpbmFsIGpzb24gaW50YWN0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gdG9SYXdKc29uKGl0ZW0pIHtcbiAgICB2YXIgbyA9IGFuZ3VsYXIuY29weShpdGVtKTtcbiAgICBhbmd1bGFyLmZvckVhY2gobywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIiRcIikgfHwga2V5LnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8sIG51bGwsIDIpOyAvLyBzcGFjaW5nIGxldmVsID0gMlxuICB9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgR29vZ2xlT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgS2V5Y2xvYWtDb25maWc6YW55O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgLmRvbmUoKHNjcmlwdCwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBjb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGZXRjaGVkIE9BdXRoIGNvbmZpZzogXCIsIGNvbmZpZyk7XG4gICAgICAgICAgdmFyIG1hc3RlcjpzdHJpbmcgPSBjb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICBpZiAoIW1hc3RlciAmJiBjb25maWcuYXBpICYmIGNvbmZpZy5hcGkuazhzKSB7XG4gICAgICAgICAgICB2YXIgbWFzdGVyVXJpID0gbmV3IFVSSSgpLmhvc3QoY29uZmlnLmFwaS5rOHMuaG9zdFBvcnQpLnBhdGgoXCJcIikucXVlcnkoXCJcIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcbiAgICAgICAgICAgICAgbWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hc3RlciA9IG1hc3RlclVyaS50b1N0cmluZygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIE9TT0F1dGhDb25maWcgPSBjb25maWcub3BlbnNoaWZ0O1xuICAgICAgICAgIEdvb2dsZU9BdXRoQ29uZmlnID0gY29uZmlnLmdvb2dsZTtcbiAgICAgICAgICBLZXljbG9ha0NvbmZpZyA9IGNvbmZpZy5rZXljbG9haztcblxuICAgICAgICAgIGlmIChPU09BdXRoQ29uZmlnICYmICFtYXN0ZXIpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXV0aC5tYXN0ZXJfdXJpIG5vIGxvbmdlciB1c2VkIHJpZ2h0P1xuICAgICAgICAgICAgLy8gbWFzdGVyID0gT1NPQXV0aENvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFLdWJlcm5ldGVzQVBJLm1hc3RlclVybCB8fCBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9PT0gXCIvXCIpICYmICghbWFzdGVyIHx8IG1hc3RlciA9PT0gXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcbiAgICAgICAgICAgIC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICBtYXN0ZXIgPSBuZXcgVVJJKGhyZWYpLnF1ZXJ5KFwiXCIpLnBhdGgoXCJcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hc3Rlcikge1xuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIE9BVVRIIGNvbmZpZzogXCIsIHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuYWx3YXlzKCgpID0+IHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB0cnVlKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKCduZ1Jlc291cmNlJyk7XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNTAwLCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHZhciBsb2dnZXJOYW1lID0gJ2s4cy1vYmplY3RzLycgKyAobmFtZXNwYWNlID8gVXJsSGVscGVycy5qb2luKG5hbWVzcGFjZSwga2luZCkgOiBraW5kKTtcbiAgICAgIHRoaXMubG9nID0gTG9nZ2VyLmdldChsb2dnZXJOYW1lKTtcbiAgICAgIHRoaXMuX2VlID0gc21va2VzaWduYWxzLmNvbnZlcnQodGhpcyk7XG4gICAgICBpZiAodGhpcy5sb2cuZW5hYmxlZEZvcihMb2dnZXIuREVCVUcpKSB7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BRERFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiYWRkZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwibW9kaWZpZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5ERUxFVEVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJkZWxldGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwib2JqZWN0cyBjaGFuZ2VkOiBcIiwgb2JqZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BRERFRCwgb2JqZWN0KTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgbW9kaWZpZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgLy9sb2cuZGVidWcoXCJkZWxldGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIG9iamVjdCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gIH07XG5cbiAgY2xhc3MgV1NIYW5kbGVycyB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgc2VsZjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9saXN0Ok9iamVjdExpc3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWxmOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLnNlbGYgPSBfc2VsZjtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlcnMsIHdzOldlYlNvY2tldCkge1xuICAgICAgXy5mb3JJbihzZWxmLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoXy5zdGFydHNXaXRoKGtleSwgJ29uJykpIHtcbiAgICAgICAgICB3c1trZXldID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZWxmW2tleV0oZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzZW5kKGRhdGE6YW55KSB7XG4gICAgICBpZiAoIV8uaXNTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGFuZ3VsYXIudG9Kc29uKGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICB9XG5cbiAgICBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBkYXRhLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vIGxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBsb2cuZGVidWcoXCJDb25uZWN0ZWQ6IFwiLCBldmVudCk7XG4gICAgICAvL3RoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSgnb3BlbicpLCBldmVudCk7XG4gICAgfTtcblxuICAgIG9uY2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJldHJpZXMgPCAzICYmIHRoaXMuY29ubmVjdFRpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5jb25uZWN0VGltZSkgPiA1MDAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiUmV0cnlpbmcgYWZ0ZXIgY29ubmVjdGlvbiBjbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzICsgMTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVcmwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIldhdGNoIGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGZhaWxlZFwiKTtcbiAgICAgICAgbG9nLmRlYnVnKFwiQ2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAvL3RoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSgnY2xvc2UnKSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU47XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdhdGNoIFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVXJsKTtcbiAgICAgIHRoaXMuc2V0SGFuZGxlcnModGhpcywgd3MpO1xuICAgIH07XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkltcGwge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIF93c1VybDpVUkk7XG4gICAgcHJpdmF0ZSBfcmVzdFVybDpVUkk7XG4gICAgcHJpdmF0ZSBfY2I6KGRhdGE6YW55KSA9PiB2b2lkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVycyA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fa2luZCA9IGtpbmQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdFVybCA9IG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB0aGlzLl93c1VybCA9IHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+e1xuICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXJzKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VybCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl93c1VybC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBnZXQgbmFtZXNwYWNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgICB9O1xuXG4gICAgc2V0IG5hbWVzcGFjZShuczpzdHJpbmcpIHtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IG5zO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNhbGxiYWNrKGNiOihkYXRhOmFueSkgPT4gdm9pZCkge1xuICAgICAgaWYgKHRoaXMuX2NiICE9PSBjYikge1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuQU5ZLCB0aGlzLl9jYik7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BRERFRCwgdGhpcy5fY2IpO1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIHRoaXMuX2NiKTtcbiAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIHRoaXMuX2NiKTtcbiAgICAgICAgdGhpcy5fY2IgPSBjYjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdCgpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5jb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnkpID0+IHZvaWQpIHtcbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pO1xuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMuX2tpbmQgIT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUyAmJiBuYW1lc3BhY2UgJiYgIXRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeEZvcktpbmQodGhpcy5fa2luZCksICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVDYWxsYmFjayhjYik7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlIFwiLCBpdGVtLCBcIiBqcVhIUjogXCIsIGpxWEhSLCBcIiB0ZXh0OiBcIiwgdGV4dCwgXCIgc3RhdHVzOiBcIiwgc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSBcIiwgaXRlbSwgXCIganFYSFI6IFwiLCBqcVhIUiwgXCIgdGV4dDogXCIsIHRleHQsIFwiIHN0YXR1czogXCIsIHN0YXR1cyk7XG4gICAgICAgICAgdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHVibGljIGNyZWF0ZShraW5kOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uSW1wbChraW5kLCBuYW1lc3BhY2UpO1xuICAgIH1cbiAgfVxuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gbmV3IEs4U0NsaWVudEZhY3RvcnlJbXBsKClcbiAgfSk7XG5cblxuXG59XG5cblxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ1NlcnZpY2VSZWdpc3RyeScsIFsoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBTZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlKCk7XG4gIH1dKTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHNpbXBsZSBpbnRlcmZhY2UgdG8gc2VydmljZSBkaXNjb3ZlcnkgdGhhdCBjYW4gYmUgdXNlZCBlYXJseSBvbiBpbiB0aGUgYXBwbGljYXRpb24gbGlmZWN5Y2xlIGJlZm9yZSB0aGVcbiAgICogdW5kZXJseWluZyBtb2RlbCBoYXMgYmVlbiBjcmVhdGVkIHZpYSBkZXBlbmRlbmN5IGluamVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFNlcnZpY2VSZWdpc3RyeVNlcnZpY2Uge1xuICAgIHByaXZhdGUgbW9kZWw6YW55ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIHNlcnZpY2UgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gSUQgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kU2VydmljZShzZXJ2aWNlTmFtZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VydmljZSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZSAoSUQpIG9yIG51bGwgaWYgaXQgY2Fubm90IGJlIGZvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VydmljZU5hbWUgdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gbG9vayBmb3JcbiAgICAgKiBAcmV0dXJuIHtudWxsfVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICB2YXIgYW5zd2VyID0gbnVsbDtcbiAgICAgIGlmIChzZXJ2aWNlTmFtZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmdldE1vZGVsKCk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBtb2RlbC5jdXJyZW50TmFtZXNwYWNlKCk7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsLmdldFNlcnZpY2UobmFtZXNwYWNlICxzZXJ2aWNlTmFtZSk7XG4vKlxuICAgICAgICBUT0RPIGxldHMgb25seSBsb29rIGluIHRoZSBjdXJyZW50IG5hbWVzcGFjZVxuICAgICAgICBhbmd1bGFyLmZvckVhY2gobW9kZWwuc2VydmljZXMsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlcnZpY2VOYW1lID09PSBnZXROYW1lKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICBhbnN3ZXIgPSBzZXJ2aWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4qL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlcnZpY2UgbGluayBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlcnZpY2VOYW1lIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZUxpbmsoc2VydmljZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2Uoc2VydmljZU5hbWUpO1xuICAgICAgcmV0dXJuIHNlcnZpY2VMaW5rVXJsKHNlcnZpY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TW9kZWwoKTphbnkge1xuICAgICAgdmFyIGFuc3dlciA9IHRoaXMubW9kZWw7XG4gICAgICAvLyBsZXRzIGFsbG93IGxhenkgbG9hZCBzbyB3ZSBjYW4gYmUgaW52b2tlZCBiZWZvcmUgdGhlIGluamVjdG9yIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgIGlmICghYW5zd2VyKSB7XG4gICAgICAgIHZhciBpbmplY3RvciA9IEhhd3Rpb0NvcmUuaW5qZWN0b3I7XG4gICAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICAgIHRoaXMubW9kZWwgPSBpbmplY3Rvci5nZXQoJ0t1YmVybmV0ZXNNb2RlbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhbnN3ZXIgPSB0aGlzLm1vZGVsO1xuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
