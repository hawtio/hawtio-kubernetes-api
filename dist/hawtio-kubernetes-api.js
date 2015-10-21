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
        Object.defineProperty(WatchTypes, "PROJECTS", {
            get: function () { return "projects"; },
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
                    WatchTypes.PROJECTS,
                    WatchTypes.TEMPLATES,
                    WatchTypes.BUILD_CONFIGS,
                    WatchTypes.ROUTES,
                    WatchTypes.BUILDS,
                    WatchTypes.BUILD_CONFIGS,
                    WatchTypes.DEPLOYMENT_CONFIGS,
                    WatchTypes.IMAGE_STREAMS,
                    WatchTypes.POLICIES,
                    WatchTypes.POLICY_BINDINGS,
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
    function getKey(kind, namespace) {
        return namespace ? namespace + '-' + kind : kind;
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
        WSHandlers.prototype.destroy = function () {
            this.socket.onclose = function () {
                log.debug("Connection closed");
            };
            this.socket.close();
        };
        return WSHandlers;
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
            this.handlers = new WSHandlers(this);
            var list = this.list = new ObjectList(kind, namespace);
            this.handlers.list = list;
        }
        ;
        CollectionImpl.prototype.getKey = function () {
            return getKey(this._kind, this._namespace);
        };
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
        CollectionImpl.prototype.connect = function () {
            if (!this.handlers.connected) {
                this.handlers.connect();
            }
        };
        ;
        CollectionImpl.prototype.destroy = function () {
            this.handlers.destroy();
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
                    log.debug("Failed to create or update ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
                    if (error) {
                        var responseText = angular.fromJson(jqXHR.responseText);
                        error(responseText);
                    }
                }
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
                    log.debug("Failed to delete ", item, " jqXHR: ", jqXHR, " text: ", text, " status: ", status);
                    _this.list.added(item);
                    _this.list.triggerChangedEvent();
                    if (error) {
                        var responseText = angular.fromJson(jqXHR.responseText);
                        error(responseText);
                    }
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFUlZJQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVfQklORElOR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9MRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcyIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFEREVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuTU9ESUZJRUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5ERUxFVEVEIiwiS3ViZXJuZXRlc0FQSS5jdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc05hbWVzcGFjZVBhdGgiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLnVwZGF0ZU9yQ3JlYXRlT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVSZXNvdXJjZSIsIkt1YmVybmV0ZXNBUEkuaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5kZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkc0xvZ3NSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZHNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZENvbmZpZ0hvb2tzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkucm91dGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkudGVtcGxhdGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkud3NTY2hlbWUiLCJLdWJlcm5ldGVzQVBJLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5lcXVhbHMiLCJLdWJlcm5ldGVzQVBJLmdldFVJRCIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldEtpbmQiLCJLdWJlcm5ldGVzQVBJLmdldFNlbGVjdG9yIiwiS3ViZXJuZXRlc0FQSS5nZXRIb3N0IiwiS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldFBvcnRzIiwiS3ViZXJuZXRlc0FQSS5nZXRDcmVhdGlvblRpbWVzdGFtcCIsIkt1YmVybmV0ZXNBUEkuaXNLdWJlcm5ldGVzIiwiS3ViZXJuZXRlc0FQSS5pc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIiLCJLdWJlcm5ldGVzQVBJLmlzQXBwVmlldyIsIkt1YmVybmV0ZXNBUEkuc2V0SnNvbiIsIkt1YmVybmV0ZXNBUEkubGFiZWxzVG9TdHJpbmciLCJLdWJlcm5ldGVzQVBJLnNlcnZpY2VMaW5rVXJsIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVQb2RDb3VudGVycyIsIkt1YmVybmV0ZXNBUEkuY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyIsIkt1YmVybmV0ZXNBUEkuaXNWMWJldGExT3IyIiwiS3ViZXJuZXRlc0FQSS5lbnRpdHlQYWdlTGluayIsIkt1YmVybmV0ZXNBUEkucmVzb3VyY2VLaW5kVG9VcmlQYXRoIiwiS3ViZXJuZXRlc0FQSS5pc0lnbm9yZU5hbWVzcGFjZUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNVcmxGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkQ29uZmlnUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmltYWdlUmVwb3NpdG9yeVJlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRMb2dzUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLmdldFNlcnZpY2VSZWdpc3RyeSIsIkt1YmVybmV0ZXNBUEkucmVzaXplQ29udHJvbGxlciIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5naXRQYXRoVG9VcmwiLCJLdWJlcm5ldGVzQVBJLnRvUmF3SnNvbiIsIkt1YmVybmV0ZXNBUEkuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmluaXRpYWxpemVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmV2ZW50cyIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5vYmplY3RzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lmhhc05hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmxpc3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuc2V0SGFuZGxlcnMiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5vbm1lc3NhZ2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMub25vcGVuIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5uYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmtpbmQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VXJsRm9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwudW53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucHV0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5kZWxldGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVmQ291bnQiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmFkZFJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVtb3ZlUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kaXNwb3NhYmxlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbCIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNyZWF0ZSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5oYXNTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmZpbmRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLnNlcnZpY2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmdldE1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSx1RUFBdUU7QUFDdkUsa0NBQWtDO0FBRWxDLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FDaEJ0RCxzQ0FBc0M7QUFJckMsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0ErSG5CO0FBL0hELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBO1FBQUFDO1FBRUFDLENBQUNBO1FBRENELHNCQUFJQSx5Q0FBcUJBO2lCQUF6QkEsY0FBcUNFLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUN2RUEsYUFBQ0E7SUFBREEsQ0FGQUQsQUFFQ0MsSUFBQUQ7SUFGWUEsb0JBQU1BLFNBRWxCQSxDQUFBQTtJQUVVQSx1QkFBU0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUE4Q3JDQTtRQUFBSTtRQWlCQUMsQ0FBQ0E7UUFoQkFELHNCQUFrQkEsd0JBQVVBO2lCQUE1QkEsY0FBd0NFLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNHLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDNURBLHNCQUFrQkEsa0JBQUlBO2lCQUF0QkEsY0FBa0NJLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDbERBLHNCQUFrQkEscUNBQXVCQTtpQkFBekNBLGNBQXFESyxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDdkZBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NNLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQU47UUFDMURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNPLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVA7UUFDNURBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NRLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVI7UUFDdERBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNTLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVQ7UUFDbkVBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NVLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVY7UUFDdERBLHNCQUFrQkEsZ0NBQWtCQTtpQkFBcENBLGNBQWdEVyxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVg7UUFDN0VBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNZLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVo7UUFDbkVBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NhLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWI7UUFDMURBLHNCQUFrQkEsNkJBQWVBO2lCQUFqQ0EsY0FBNkNjLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZDtRQUN2RUEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ2UsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZjtRQUNuRUEsc0JBQWtCQSxtQkFBS0E7aUJBQXZCQSxjQUFtQ2dCLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWhCO1FBQ2xEQSxzQkFBa0JBLHNCQUFRQTtpQkFBMUJBLGNBQXNDaUIsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBakI7UUFDN0RBLGlCQUFDQTtJQUFEQSxDQWpCQUosQUFpQkNJLElBQUFKO0lBakJZQSx3QkFBVUEsYUFpQnRCQSxDQUFBQTtJQUVBQTtRQUFBc0I7UUF5QkFDLENBQUNBO1FBeEJDRCxzQkFBa0JBLDJCQUFRQTtpQkFBMUJBO2dCQUNFRSxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxJQUFJQTtvQkFDZkEsVUFBVUEsQ0FBQ0EsdUJBQXVCQTtvQkFDbENBLFVBQVVBLENBQUNBLFFBQVFBO2lCQUNwQkEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7OztXQUFBRjtRQUNEQSxzQkFBa0JBLDBCQUFPQTtpQkFBekJBO2dCQUNFRyxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxTQUFTQTtvQkFDcEJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsTUFBTUE7b0JBQ2pCQSxVQUFVQSxDQUFDQSxNQUFNQTtvQkFDakJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0Esa0JBQWtCQTtvQkFDN0JBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxlQUFlQTtvQkFDMUJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsS0FBS0E7aUJBQ2pCQSxDQUFDQTtZQUNKQSxDQUFDQTs7O1dBQUFIO1FBQ0hBLHNCQUFDQTtJQUFEQSxDQXpCQXRCLEFBeUJDc0IsSUFBQXRCO0lBekJZQSw2QkFBZUEsa0JBeUIzQkEsQ0FBQUE7SUFFRkE7UUFBQTBCO1FBS0FDLENBQUNBO1FBSkFELHNCQUFrQkEsbUJBQUdBO2lCQUFyQkEsY0FBaUNFLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOUNBLHNCQUFrQkEscUJBQUtBO2lCQUF2QkEsY0FBbUNHLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDcERBLHNCQUFrQkEsd0JBQVFBO2lCQUExQkEsY0FBc0NJLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDMURBLHNCQUFrQkEsdUJBQU9BO2lCQUF6QkEsY0FBcUNLLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDekRBLG1CQUFDQTtJQUFEQSxDQUxBMUIsQUFLQzBCLElBQUExQjtJQUxZQSwwQkFBWUEsZUFLeEJBLENBQUFBO0FBd0JGQSxDQUFDQSxFQS9ITSxhQUFhLEtBQWIsYUFBYSxRQStIbkI7O0FDNUlELGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFJekMsSUFBTyxhQUFhLENBNEJuQjtBQTVCRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRVRBLHdCQUFVQSxHQUFHQSxlQUFlQSxDQUFDQTtJQUM3QkEsd0JBQVVBLEdBQUdBLHlCQUF5QkEsQ0FBQ0E7SUFDdkNBLDBCQUFZQSxHQUFHQSx3QkFBVUEsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDcENBLGlCQUFHQSxHQUFrQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esd0JBQVVBLENBQUNBLENBQUNBO0lBRTVDQSw4QkFBZ0JBLEdBQUdBLElBQUlBLENBQUNBO0lBRXhCQSw0QkFBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtJQUNqREEseUJBQVdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBR3hDQSxzQkFBUUEsR0FBb0JBLFNBQVNBLENBQUNBO0lBQ3RDQSx1QkFBU0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFFZkEsd0JBQVVBLEdBQUdBLEtBQUtBLENBQUNBO0lBQ25CQSx1QkFBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFFbkJBLDZCQUFlQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2QkEsNEJBQWNBLEdBQUdBLElBQUlBLENBQUNBO0lBRXRCQSwrQkFBaUJBLEdBQUdBLDZCQUFlQSxDQUFDQTtJQUNwQ0EsaUNBQW1CQSxHQUFHQSw0QkFBY0EsQ0FBQ0E7SUFFckNBLHNDQUF3QkEsR0FBR0EsR0FBR0EsQ0FBQ0E7SUFDL0JBLDhCQUFnQkEsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDN0JBLHVCQUFTQSxHQUFHQSxNQUFNQSxDQUFDQTtBQUNoQ0EsQ0FBQ0EsRUE1Qk0sYUFBYSxLQUFiLGFBQWEsUUE0Qm5COztBQ2pDRCwrQ0FBK0M7QUFFL0MsSUFBTyxhQUFhLENBNHZCbkI7QUE1dkJELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFLcEJBO1FBQ0VnQyxJQUFJQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUNuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDYkEsSUFBSUEsZUFBZUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM1REEsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsaUJBQWlCQSxJQUFJQSw4QkFBZ0JBLENBQUNBO1FBQy9EQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSw4QkFBZ0JBLENBQUNBO0lBQzFCQSxDQUFDQTtJQVBlaEMsd0NBQTBCQSw2QkFPekNBLENBQUFBO0lBRURBO1FBQ0VpQyxJQUFJQSxFQUFFQSxHQUFHQSwwQkFBMEJBLEVBQUVBLENBQUNBO1FBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNQQSxNQUFNQSxDQUFDQSxjQUFjQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDWkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFQZWpDLHFDQUF1QkEsMEJBT3RDQSxDQUFBQTtJQUVEQTtRQUNFa0MsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQVFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQzlEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxNQUFNQSxHQUFHQSx3QkFBVUEsQ0FBQ0E7UUFDdEJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQU5lbEMsdUJBQVNBLFlBTXhCQSxDQUFBQTtJQUVEQTtRQUNFbUMsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQVFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLFdBQVdBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQ3BFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxNQUFNQSxHQUFHQSx1QkFBU0EsQ0FBQ0E7UUFDckJBLENBQUNBO1FBQ0RBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBTzNDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFiZW5DLHlCQUFXQSxjQWExQkEsQ0FBQUE7SUFFREE7UUFDRW9DLE1BQU1BLENBQUNBLHVCQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFGZXBDLDBCQUFZQSxlQUUzQkEsQ0FBQUE7SUFFREE7UUFDRXFDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLDRCQUFjQSxDQUFDQSxDQUFDQTtJQUN0REEsQ0FBQ0E7SUFGZXJDLGlDQUFtQkEsc0JBRWxDQSxDQUFBQTtJQUVEQTtRQUNFc0MsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsNkJBQWVBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQTtJQUZldEMsZ0NBQWtCQSxxQkFFakNBLENBQUFBO0lBRURBLHVCQUE4QkEsSUFBV0E7UUFDdkN1QyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLE1BQU1BLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLDZCQUFlQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2REEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMvQkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQWVBLENBQUNBLE9BQU9BLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLEtBQUtBLElBQUlBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQVhldkMsMkJBQWFBLGdCQVc1QkEsQ0FBQUE7SUFFREE7UUFDRXdDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLG1CQUFtQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBO0lBRmV4Qyw4QkFBZ0JBLG1CQUUvQkEsQ0FBQUE7SUFFREE7UUFDRXlDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLGtCQUFrQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDL0RBLENBQUNBO0lBRmV6Qyw2QkFBZUEsa0JBRTlCQSxDQUFBQTtJQUVEQSw4QkFBcUNBLE1BQU1BLEVBQUVBLGVBQWVBLEVBQUVBLE9BQXdCQSxFQUFFQSxLQUF1QkE7UUFDN0cwQyxJQUFJQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSx5Q0FBeUNBLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxHQUFHQTtnQkFDMUJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDOUJBLG9CQUFvQkEsQ0FBQ0EsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1ZBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxFQUFFQSxNQUFNQSxFQUFFQSxxQkFBcUJBLENBQUNBLENBQUNBO1lBQ3JEQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsUUFBUUEsR0FBR0EsZUFBZUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDbERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2RBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLHNCQUFzQkEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBRURBLElBQUlBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLEtBQUtBLElBQUlBLEVBQVZBLENBQVVBLENBQUNBLENBQUFBO1FBQzlEQSxJQUFJQSxNQUFNQSxHQUFHQSxRQUFRQSxHQUFHQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUU3Q0EsSUFBSUEsZUFBZUEsR0FBR0EsVUFBQ0EsSUFBSUE7WUFDekJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2RBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBO1FBQ0ZBLElBQUlBLGFBQWFBLEdBQUdBLFVBQUNBLEdBQUdBO1lBQ3RCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsK0JBQStCQSxFQUFFQSxNQUFNQSxFQUFFQSxVQUFVQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1ZBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2JBLENBQUNBO1FBQ0hBLENBQUNBLENBQUFBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2JBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLENBQUNBLENBQUNBO1lBQ2hEQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUN0RUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLG1DQUFtQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0NBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLGVBQWVBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO1FBQzlEQSxDQUFDQTtJQUNIQSxDQUFDQTtJQW5EZTFDLGtDQUFvQkEsdUJBbURuQ0EsQ0FBQUE7SUFFREEsd0JBQStCQSxLQUFZQSxFQUFFQSxXQUFrQkEsRUFBRUEsU0FBdUNBLEVBQUVBLGVBQWVBO1FBQ3ZIMkMsSUFBSUEsTUFBTUEsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ1pBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxzQkFBc0JBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxJQUFJQSxNQUFNQSxHQUFTQTtZQUNqQkEsU0FBU0EsRUFBRUEsMEJBQTBCQTtTQUN0Q0EsQ0FBQUE7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsS0FBS0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLElBQUlBLEdBQUdBLEdBQUdBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO1FBQy9EQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBO1lBQ2xDQSxLQUFLQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxLQUFLQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUN2REEsTUFBTUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDekNBLElBQUlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBO1lBQ3RDQSxNQUFNQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQSxFQUFFQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDM0NBLEVBQUVBLEVBQUVBLEtBQUtBO2lCQUNWQSxFQUFFQSxNQUFNQSxDQUFDQSxFQUFDQTtTQUNaQSxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUF6QmUzQyw0QkFBY0EsaUJBeUI3QkEsQ0FBQUE7SUFFREE7UUFDRTRDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBRmU1QyxzQ0FBd0JBLDJCQUV2Q0EsQ0FBQUE7SUFFREE7UUFDRTZDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsb0JBQW9CQSxDQUFDQSxDQUFDQTtJQUM3RkEsQ0FBQ0E7SUFGZTdDLHNDQUF3QkEsMkJBRXZDQSxDQUFBQTtJQUVEQTtRQUNFOEMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO0lBQzNGQSxDQUFDQTtJQUZlOUMsK0JBQWlCQSxvQkFFaENBLENBQUFBO0lBRURBO1FBQ0UrQyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBQ2xGQSxDQUFDQTtJQUZlL0MsMkJBQWFBLGdCQUU1QkEsQ0FBQUE7SUFFREE7UUFDRWdELE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsbUJBQW1CQSxDQUFDQSxDQUFDQTtJQUM1RkEsQ0FBQ0E7SUFGZWhELHFDQUF1QkEsMEJBRXRDQSxDQUFBQTtJQUVEQTtRQUNFaUQsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFGZWpELGlDQUFtQkEsc0JBRWxDQSxDQUFBQTtJQUVEQTtRQUNFa0QsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUNsRkEsQ0FBQ0E7SUFGZWxELDJCQUFhQSxnQkFFNUJBLENBQUFBO0lBRURBO1FBQ0VtRCxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO0lBQ3JGQSxDQUFDQTtJQUZlbkQsOEJBQWdCQSxtQkFFL0JBLENBQUFBO0lBRURBLGtCQUF5QkEsR0FBVUE7UUFDakNvRCxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxNQUFNQSxDQUFDQTtRQUNqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO0lBQ0hBLENBQUNBO0lBUGVwRCxzQkFBUUEsV0FPdkJBLENBQUFBO0lBRURBLGVBQXNCQSxHQUFVQTtRQUM5QnFELElBQUlBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFIZXJELG1CQUFLQSxRQUdwQkEsQ0FBQUE7SUFFREEsZ0JBQXVCQSxJQUFJQSxFQUFFQSxLQUFLQTtRQUNoQ3NELE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3hDQSxDQUFDQTtJQUZldEQsb0JBQU1BLFNBRXJCQSxDQUFBQTtJQUVEQSxnQkFBdUJBLE1BQU1BO1FBQzNCdUQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkRBLENBQUNBO0lBRmV2RCxvQkFBTUEsU0FFckJBLENBQUFBO0lBRURBLHNCQUE2QkEsTUFBTUE7UUFDakN3RCxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM3REEsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsR0FBR0EsOEJBQWdCQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFIZXhELDBCQUFZQSxlQUczQkEsQ0FBQUE7SUFFREEsbUJBQTBCQSxNQUFNQTtRQUM5QnlELElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQzFEQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFIZXpELHVCQUFTQSxZQUd4QkEsQ0FBQUE7SUFFREEsaUJBQXdCQSxNQUFNQTtRQUM1QjBELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ2xIQSxDQUFDQTtJQUZlMUQscUJBQU9BLFVBRXRCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLE1BQU1BO1FBQzVCMkQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBRmUzRCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLHFCQUE0QkEsTUFBTUE7UUFDaEM0RCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFGZTVELHlCQUFXQSxjQUUxQkEsQ0FBQUE7SUFFREEsaUJBQXdCQSxHQUFHQTtRQUN6QjZELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO0lBQ25JQSxDQUFDQTtJQUZlN0QscUJBQU9BLFVBRXRCQSxDQUFBQTtJQUVEQSxtQkFBMEJBLEdBQUdBO1FBQzNCOEQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBRmU5RCx1QkFBU0EsWUFFeEJBLENBQUFBO0lBRURBLGtCQUF5QkEsT0FBT0E7UUFDOUIrRCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFGZS9ELHNCQUFRQSxXQUV2QkEsQ0FBQUE7SUFFREEsOEJBQXFDQSxNQUFNQTtRQUN6Q2dFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDakVBLENBQUNBO0lBRmVoRSxrQ0FBb0JBLHVCQUVuQ0EsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFHRkEsSUFBSUEsWUFBWUEsR0FBR0EsWUFBWUEsQ0FBQ0E7SUFDckJBLG1CQUFLQSxHQUFHQSxZQUFZQSxHQUFHQSxrQkFBa0JBLENBQUNBO0lBQzFDQSwwQkFBWUEsR0FBR0EsWUFBWUEsR0FBR0EseUJBQXlCQSxDQUFDQTtJQUN4REEsMEJBQVlBLEdBQUdBLFlBQVlBLEdBQUdBLGVBQWVBLENBQUNBO0lBRXpEQSxzQkFBNkJBLFNBQVNBO1FBRXBDaUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFIZWpFLDBCQUFZQSxlQUczQkEsQ0FBQUE7SUFFREEscUNBQTRDQSxTQUFTQTtRQUVuRGtFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBSGVsRSx5Q0FBMkJBLDhCQUcxQ0EsQ0FBQUE7SUFFREEsbUJBQTBCQSxTQUFTQTtRQUVqQ21FLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBSGVuRSx1QkFBU0EsWUFHeEJBLENBQUFBO0lBRURBLGlCQUF3QkEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUE7UUFDNUNvRSxNQUFNQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNmQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxJQUFJQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFJQSxJQUFPQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxFQUFFQSxHQUFHQSxTQUFTQSxDQUFDQTtZQUN0QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBO1FB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QSxDQUFDQSxDQUFDQTtZQUM1Q0EsTUFBTUEsQ0FBQ0EsNEJBQWNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2pDQSxDQUFDQTtRQUVPSix5Q0FBUUEsR0FBaEJBO1lBQ0VLLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBRXhCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsSUFBSUEsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Z0JBQ25DQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDYkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtnQkFDL0NBLENBQUNBO1lBQ0hBLENBQUNBO1lBQ0RBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFDSEwsNkJBQUNBO0lBQURBLENBM0RBNUksQUEyREM0SSxJQUFBNUk7SUEzRFlBLG9DQUFzQkEseUJBMkRsQ0EsQ0FBQUE7QUFDSEEsQ0FBQ0EsRUF0RU0sYUFBYSxLQUFiLGFBQWEsUUFzRW5CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby11dGlsaXRpZXMvZGVmcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLW9hdXRoL2RlZnMuZC50c1wiLz5cbiIsIi8vZGVmIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRVNcbiAgICAgIF07XG4gICAgfVxuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBTlkoKTpzdHJpbmcgeyByZXR1cm4gXCIqXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBNT0RJRklFRCgpOnN0cmluZyB7IHJldHVybiBcIk1PRElGSUVEXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBERUxFVEVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiREVMRVRFRFwiOyB9XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgV2F0Y2hlclNlcnZpY2Uge1xuXHRcdGhhc1dlYlNvY2tldDogYm9vbGVhbjtcblx0XHRhZGRDdXN0b21pemVyOiAodHlwZTogc3RyaW5nLCBjdXN0b21pemVyOiAob2JqOmFueSkgPT4gdm9pZCkgPT4gdm9pZDtcblx0XHRnZXRUeXBlczogKCkgPT4gQXJyYXk8c3RyaW5nPjtcblx0XHRnZXROYW1lc3BhY2U6ICgpID0+IHN0cmluZztcblx0XHRzZXROYW1lc3BhY2U6IChuYW1lc3BhY2U6IHN0cmluZykgPT4gdm9pZDtcblx0XHRnZXRPYmplY3RzOiAodHlwZTogc3RyaW5nKSA9PiBBcnJheTxhbnk+O1xuXHRcdGdldE9iamVjdE1hcDogKHR5cGU6IHN0cmluZykgPT4gT2JqZWN0TWFwO1xuXHRcdGFkZEFjdGlvbjogKHR5cGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGZuOiAob2JqOmFueSkgPT4gdm9pZCkgPT4gdm9pZDtcblx0XHRyZWdpc3Rlckxpc3RlbmVyOiAoZm46KG9iamVjdHM6T2JqZWN0TWFwKSA9PiB2b2lkKSA9PiB2b2lkO1xuXHR9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlUG9kIHtcbiAgICBpZDpzdHJpbmc7XG4gICAgbmFtZXNwYWNlOnN0cmluZztcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxuXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcblxuICBleHBvcnQgdmFyIEs4U19QUkVGSVggPSAnYXBpJztcbiAgZXhwb3J0IHZhciBPU19QUkVGSVggPSAnb2FwaSc7XG5cbiAgZXhwb3J0IHZhciBLOFNfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIE9TX0FQSV9WRVJTSU9OID0gJ3YxJztcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcblxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGt1YmVybmV0ZXMgc2VsZWN0ZWQgbmFtZXNwYWNlIG9yIHRoZSBkZWZhdWx0IG9uZVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRLdWJlcm5ldGVzTmFtZXNwYWNlKCkge1xuICAgIHZhciBpbmplY3RvciA9IEhhd3Rpb0NvcmUuaW5qZWN0b3I7XG4gICAgaWYgKGluamVjdG9yKSB7XG4gICAgICB2YXIgS3ViZXJuZXRlc1N0YXRlID0gaW5qZWN0b3IuZ2V0KFwiS3ViZXJuZXRlc1N0YXRlXCIpIHx8IHt9O1xuICAgICAgcmV0dXJuIEt1YmVybmV0ZXNTdGF0ZS5zZWxlY3RlZE5hbWVzcGFjZSB8fCBkZWZhdWx0TmFtZXNwYWNlO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdE5hbWVzcGFjZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpIHtcbiAgICB2YXIgbnMgPSBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSgpO1xuICAgIGlmIChucykge1xuICAgICAgcmV0dXJuIFwiL25hbWVzcGFjZXMvXCIgKyBucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwaVByZWZpeCgpIHtcbiAgICB2YXIgcHJlZml4ID0gQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pO1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICBwcmVmaXggPSBLOFNfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gQ29yZS50cmltTGVhZGluZyhwcmVmaXgsICcvJyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgdmFyIHByZWZpeCA9IENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKTtcbiAgICBpZiAoIXByZWZpeCkge1xuICAgICAgcHJlZml4ID0gT1NfUFJFRklYO1xuICAgIH1cbiAgICB2YXIgYW5zd2VyID0gQ29yZS50cmltTGVhZGluZyhwcmVmaXgsICcvJyk7XG4gICAgLypcbiAgICAgIFRPRE8gLSBtYXkgbm90IGhhdmUgYSBjdXJyZW50bHkgc2VsZWN0ZWQgbmFtZXNwYWNlXG4gICAgaWYgKCFpc09wZW5TaGlmdCkge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04sIFwicHJveHlcIiwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCJzZXJ2aWNlcy90ZW1wbGF0ZXNcIiwgYW5zd2VyKTtcbiAgICB9XG4gICAgKi9cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5rOHNUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPckNyZWF0ZU9iamVjdChvYmplY3QsIEt1YmVybmV0ZXNNb2RlbCwgc3VjY2Vzcz86IChkYXRhKSA9PiB2b2lkLCBlcnJvcj86IChlcnJvcikgPT4gdm9pZCkge1xuICAgIHZhciBraW5kID0gZ2V0S2luZChvYmplY3QpO1xuICAgIGlmIChraW5kID09PSBcIkxpc3RcIikge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGlzIGEgbGlzdCwgZGVwbG95aW5nIGFsbCBvYmplY3RzXCIpO1xuICAgICAgXy5mb3JFYWNoKG9iamVjdC5pdGVtcywgKG9iaikgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJEZXBsb3lpbmc6IFwiLCBvYmopO1xuICAgICAgICB1cGRhdGVPckNyZWF0ZU9iamVjdChvYmosIEt1YmVybmV0ZXNNb2RlbCwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0OiBcIiwgb2JqZWN0LCBcIiBoYXMgbm8gb2JqZWN0IHR5cGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGtpbmQgPSBraW5kLnRvTG93ZXJDYXNlKCkucGx1cmFsaXplKCk7XG4gICAgdmFyIHJlc291cmNlID0gS3ViZXJuZXRlc01vZGVsW2tpbmQgKyAnUmVzb3VyY2UnXTtcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICBsb2cuZGVidWcoXCJVbmFibGUgdG8gZmluZCByZXNvdXJjZSBmb3Iga2luZDogXCIsIGtpbmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IGdldE5hbWUob2JqZWN0KTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBoYXMgbm8gbmFtZTogXCIsIG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzVXBkYXRlID0gXy5hbnkoS3ViZXJuZXRlc01vZGVsW2tpbmRdLCAobikgPT4gbiA9PT0gbmFtZSlcbiAgICB2YXIgYWN0aW9uID0gaXNVcGRhdGUgPyBcIk1vZGlmaWVkXCIgOiBcIkFkZGVkXCI7XG5cbiAgICB2YXIgc3VjY2Vzc0ludGVybmFsID0gKGRhdGEpID0+IHtcbiAgICAgIGxvZy5kZWJ1ZyhhY3Rpb24sIGRhdGEpO1xuICAgICAgaWYgKCFpc1VwZGF0ZSkge1xuICAgICAgICBLdWJlcm5ldGVzTW9kZWxba2luZF0ucHVzaChkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgZXJyb3JJbnRlcm5hbCA9IChlcnIpID0+IHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBhZGQvbW9kaWZ5IG9iamVjdDogXCIsIG9iamVjdCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc1VwZGF0ZSkge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGFscmVhZHkgZXhpc3RzLCB1cGRhdGluZy4uLlwiKTtcbiAgICAgIHJlc291cmNlLnNhdmUoeyBpZDogbmFtZSB9LCBvYmplY3QsIHN1Y2Nlc3NJbnRlcm5hbCwgZXJyb3JJbnRlcm5hbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBkb2Vzbid0IGV4aXN0LCBjcmVhdGluZy4uLlwiKTtcbiAgICAgIHJlc291cmNlLmNyZWF0ZSh7fSwgb2JqZWN0LCBzdWNjZXNzSW50ZXJuYWwsIGVycm9ySW50ZXJuYWwpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXNvdXJjZSh0aGluZzpzdHJpbmcsIHVybFRlbXBsYXRlOnN0cmluZywgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlLCBLdWJlcm5ldGVzTW9kZWwpIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4Rm9yS2luZCh0aGluZyk7XG4gICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkludmFsaWQgdHlwZSBnaXZlbjogXCIsIHRoaW5nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSA8YW55PiB7XG4gICAgICBuYW1lc3BhY2U6IGN1cnJlbnRLdWJlcm5ldGVzTmFtZXNwYWNlXG4gICAgfVxuICAgIGlmICh0aGluZyA9PT0gXCJuYW1lc3BhY2VzXCIpIHtcbiAgICAgIHBhcmFtcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeCwgdXJsVGVtcGxhdGUpO1xuICAgIGxvZy5kZWJ1ZyhcIlVybCBmb3IgXCIsIHRoaW5nLCBcIjogXCIsIHVybCk7XG4gICAgdmFyIHJlc291cmNlID0gJHJlc291cmNlKHVybCwgbnVsbCwge1xuICAgICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJywgaXNBcnJheTogZmFsc2UsIHBhcmFtczogcGFyYW1zfSxcbiAgICAgIGNyZWF0ZTogeyBtZXRob2Q6ICdQT1NUJywgcGFyYW1zOiBwYXJhbXN9LFxuICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQVVQnLCBwYXJhbXM6IHBhcmFtc30sXG4gICAgICBkZWxldGU6IHsgbWV0aG9kOiAnREVMRVRFJywgcGFyYW1zOiBfLmV4dGVuZCh7XG4gICAgICAgIGlkOiAnQGlkJ1xuICAgICAgfSwgcGFyYW1zKX1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2ltYWdlc3RyZWFtc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvZGVwbG95bWVudGNvbmZpZ3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRzTG9nc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvcHJveHkvYnVpbGRsb2dzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvYnVpbGRzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnSG9va3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2J1aWxkY29uZmlnaG9va3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWdzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9idWlsZGNvbmZpZ3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcm91dGVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9yb3V0ZXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi90ZW1wbGF0ZXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd3NTY2hlbWUodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICBpZiAoXy5zdGFydHNXaXRoKHByb3RvY29sLCAnaHR0cHMnKSkge1xuICAgICAgcmV0dXJuICd3c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3dzJztcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIGdldFVJRChsZWZ0KSA9PT0gZ2V0VUlEKHJpZ2h0KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRVSUQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnbWV0YWRhdGEnLCAndWlkJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVzcGFjZShlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lc3BhY2VcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiBkZWZhdWx0TmFtZXNwYWNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVscyhlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJsYWJlbHNcIl0pO1xuICAgIHJldHVybiBhbnN3ZXIgPyBhbnN3ZXIgOiB7fTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwibmFtZVwiKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImlkXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEtpbmQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwia2luZFwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJraW5kXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdG9yKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJzcGVjXCIsIFwic2VsZWN0b3JcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJob3N0XCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwibm9kZU5hbWVcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcImhvc3RJUFwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJwaGFzZVwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UG9ydHMoc2VydmljZSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoc2VydmljZSwgW1wic3BlY1wiLCBcInBvcnRzXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGlvblRpbWVzdGFtcChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJjcmVhdGlvblRpbWVzdGFtcFwiXSk7XG4gIH07XG5cbiAgLy92YXIgZmFicmljRG9tYWluID0gRmFicmljLmpteERvbWFpbjtcbiAgdmFyIGZhYnJpY0RvbWFpbiA9IFwiaW8uZmFicmljOFwiO1xuICBleHBvcnQgdmFyIG1iZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1LdWJlcm5ldGVzXCI7XG4gIGV4cG9ydCB2YXIgbWFuYWdlck1CZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1LdWJlcm5ldGVzTWFuYWdlclwiO1xuICBleHBvcnQgdmFyIGFwcFZpZXdNQmVhbiA9IGZhYnJpY0RvbWFpbiArIFwiOnR5cGU9QXBwVmlld1wiO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0t1YmVybmV0ZXMod29ya3NwYWNlKSB7XG4gICAgLy8gcmV0dXJuIHdvcmtzcGFjZS50cmVlQ29udGFpbnNEb21haW5BbmRQcm9wZXJ0aWVzKGZhYnJpY0RvbWFpbiwge3R5cGU6IFwiS3ViZXJuZXRlc1wifSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNLdWJlcm5ldGVzVGVtcGxhdGVNYW5hZ2VyKHdvcmtzcGFjZSkge1xuICAgIC8vIHJldHVybiB3b3Jrc3BhY2UudHJlZUNvbnRhaW5zRG9tYWluQW5kUHJvcGVydGllcyhmYWJyaWNEb21haW4sIHt0eXBlOiBcIkt1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXJcIn0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzQXBwVmlldyh3b3Jrc3BhY2UpIHtcbiAgICAvLyByZXR1cm4gd29ya3NwYWNlLnRyZWVDb250YWluc0RvbWFpbkFuZFByb3BlcnRpZXMoZmFicmljRG9tYWluLCB7dHlwZTogXCJBcHBWaWV3XCJ9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRKc29uKCRzY29wZSwgaWQsIGNvbGxlY3Rpb24pIHtcbiAgICAkc2NvcGUuaWQgPSBpZDtcbiAgICBpZiAoISRzY29wZS5mZXRjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaWQpIHtcbiAgICAgICRzY29wZS5qc29uID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IGNvbGxlY3Rpb24uZmluZCgoaXRlbSkgPT4geyByZXR1cm4gZ2V0TmFtZShpdGVtKSA9PT0gaWQ7IH0pO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICAkc2NvcGUuanNvbiA9IGFuZ3VsYXIudG9Kc29uKGl0ZW0sIHRydWUpO1xuICAgICAgJHNjb3BlLml0ZW0gPSBpdGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAkc2NvcGUuanNvbiA9ICcnO1xuICAgICAgJHNjb3BlLml0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhYmVscyB0ZXh0IHN0cmluZyB1c2luZyB0aGUgPGNvZGU+a2V5MT12YWx1ZTEsa2V5Mj12YWx1ZTIsLi4uLjwvY29kZT4gZm9ybWF0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzVG9TdHJpbmcobGFiZWxzLCBzZXBlcmF0b3JUZXh0ID0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yKSB7XG4gICAgdmFyIGFuc3dlciA9IFwiXCI7XG4gICAgYW5ndWxhci5mb3JFYWNoKGxhYmVscywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHZhciBzZXBhcmF0b3IgPSBhbnN3ZXIgPyBzZXBlcmF0b3JUZXh0IDogXCJcIjtcbiAgICAgIGFuc3dlciArPSBzZXBhcmF0b3IgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmljZSBsaW5rIFVSTCBmb3IgZWl0aGVyIHRoZSBzZXJ2aWNlIG5hbWUgb3IgdGhlIHNlcnZpY2Ugb2JqZWN0XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VydmljZUxpbmtVcmwoc2VydmljZSkge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KHNlcnZpY2UpKSB7XG4gICAgICB2YXIgcG9ydGFsSVAgPSBzZXJ2aWNlLiRob3N0O1xuICAgICAgLy8gbGV0cyBhc3N1bWUgbm8gY3VzdG9tIHBvcnQgZm9yIG5vdyBmb3IgZXh0ZXJuYWwgcm91dGVzXG4gICAgICB2YXIgcG9ydCA9IG51bGw7XG4gICAgICB2YXIgcHJvdG9jb2wgPSBcImh0dHA6Ly9cIjtcbiAgICAgIHZhciBzcGVjID0gc2VydmljZS5zcGVjO1xuICAgICAgaWYgKHNwZWMpIHtcbiAgICAgICAgaWYgKCFwb3J0YWxJUCkge1xuICAgICAgICAgIHBvcnRhbElQID0gc3BlYy5wb3J0YWxJUDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzSHR0cHMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0h0dHAgPSBmYWxzZTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKHNwZWMucG9ydHMsIChwb3J0U3BlYykgPT4ge1xuICAgICAgICAgIHZhciBwID0gcG9ydFNwZWMucG9ydDtcbiAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgaWYgKHAgPT09IDQ0Mykge1xuICAgICAgICAgICAgICBoYXNIdHRwcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IDgwKSB7XG4gICAgICAgICAgICAgIGhhc0h0dHAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgICAgICAgIHBvcnQgPSBwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocG9ydGFsSVApIHtcbiAgICAgICAgaWYgKGhhc0h0dHBzKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIiArIHBvcnRhbElQO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc0h0dHApIHtcbiAgICAgICAgICByZXR1cm4gXCJodHRwOi8vXCIgKyBwb3J0YWxJUDtcbiAgICAgICAgfSBlbHNlIGlmIChwb3J0KSB7XG4gICAgICAgICAgcmV0dXJuIHByb3RvY29sICsgcG9ydGFsSVAgKyBcIjpcIiArIHBvcnQgKyBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBwb3J0YWxJUDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VydmljZSkge1xuICAgICAgdmFyIHNlcnZpY2VJZCA9IHNlcnZpY2UudG9TdHJpbmcoKTtcbiAgICAgIGlmIChzZXJ2aWNlSWQpIHtcbiAgICAgICAgdmFyIFNlcnZpY2VSZWdpc3RyeSA9IGdldFNlcnZpY2VSZWdpc3RyeSgpO1xuICAgICAgICBpZiAoU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIFNlcnZpY2VSZWdpc3RyeS5zZXJ2aWNlTGluayhzZXJ2aWNlSWQpIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIGxpc3Qgb2YgcG9kcyBsZXRzIGl0ZXJhdGUgdGhyb3VnaCB0aGVtIGFuZCBmaW5kIGFsbCBwb2RzIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKiBhbmQgcmV0dXJuIGNvdW50ZXJzIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlIHBvZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvZENvdW50ZXJzKHNlbGVjdG9yLCBwb2RzLCBvdXRwdXRQb2RzID0gW10sIHBvZExpbmtRdWVyeSA9IG51bGwpIHtcbiAgICB2YXIgZmlsdGVyRm47XG4gICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIGZpbHRlckZuID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlckZuID0gKHBvZCkgPT4gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBnZXRMYWJlbHMocG9kKSk7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSB7XG4gICAgICBwb2RzTGluazogXCJcIixcbiAgICAgIHZhbGlkOiAwLFxuICAgICAgd2FpdGluZzogMCxcbiAgICAgIGVycm9yOiAwXG4gICAgfTtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghcG9kTGlua1F1ZXJ5KSB7XG4gICAgICAgIHBvZExpbmtRdWVyeSA9IGxhYmVsc1RvU3RyaW5nKHNlbGVjdG9yLCBcIiBcIik7XG4gICAgICB9XG4gICAgICBhbnN3ZXIucG9kc0xpbmsgPSBDb3JlLnVybChcIi9rdWJlcm5ldGVzL3BvZHM/cT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwb2RMaW5rUXVlcnkpKTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChwb2RzLCBwb2QgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyRm4ocG9kKSkge1xuICAgICAgICAgIG91dHB1dFBvZHMucHVzaChwb2QpO1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBnZXRTdGF0dXMocG9kKTtcbiAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpKSB7XG4gICAgICAgICAgICAgIGFuc3dlci52YWxpZCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlci5zdGFydHNXaXRoKFwid2FpdFwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwicGVuZFwiKSkge1xuICAgICAgICAgICAgICBhbnN3ZXIud2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlci5zdGFydHNXaXRoKFwidGVybVwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwiZXJyb3JcIikgfHwgbG93ZXIuc3RhcnRzV2l0aChcImZhaWxcIikpIHtcbiAgICAgICAgICAgICAgYW5zd2VyLmVycm9yICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuc3dlci5lcnJvciArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIGdpdmVuIGpzb24gaW50byBhbiBhcnJheSBvZiBpdGVtcy4gSWYgdGhlIGpzb24gY29udGFpbnMgYSBuZXN0ZWQgc2V0IG9mIGl0ZW1zIHRoZW4gdGhhdCBpcyBzb3J0ZWQ7IHNvIHRoYXQgc2VydmljZXNcbiAgICogYXJlIHByb2Nlc3NlZCBmaXJzdDsgdGhlbiB0dXJuZWQgaW50byBhbiBhcnJheS4gT3RoZXJ3aXNlIHRoZSBqc29uIGlzIHB1dCBpbnRvIGFuIGFycmF5IHNvIGl0IGNhbiBiZSBwcm9jZXNzZWQgcG9seW1vcnBoaWNhbGx5XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyhqc29uKSB7XG4gICAgdmFyIGl0ZW1zID0ganNvbi5pdGVtcztcbiAgICBpZiAoYW5ndWxhci5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgLy8gVE9ETyB3ZSBjb3VsZCBjaGVjayBmb3IgTGlzdCBvciBDb25maWcgdHlwZXMgaGVyZSBhbmQgd2FybiBpZiBub3RcblxuICAgICAgLy8gc29ydCB0aGUgc2VydmljZXMgZmlyc3RcbiAgICAgIHZhciBhbnN3ZXIgPSBbXTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJTZXJ2aWNlXCIpIHtcbiAgICAgICAgICBhbnN3ZXIucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgIT09IFwiU2VydmljZVwiKSB7XG4gICAgICAgICAgYW5zd2VyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtqc29uXTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNWMWJldGExT3IyKCkge1xuICAgIHJldHVybiBkZWZhdWx0QXBpVmVyc2lvbiA9PT0gXCJ2MWJldGExXCIgfHwgZGVmYXVsdEFwaVZlcnNpb24gPT09IFwidjFiZXRhMlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaW5rIHRvIHRoZSBkZXRhaWwgcGFnZSBmb3IgdGhlIGdpdmVuIGVudGl0eVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVBhZ2VMaW5rKGVudGl0eSkge1xuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHZhciBpZCA9IGdldE5hbWUoZW50aXR5KTtcbiAgICAgIHZhciBraW5kID0gZ2V0S2luZChlbnRpdHkpO1xuICAgICAgaWYgKGtpbmQgJiYgaWQpIHtcbiAgICAgICAgdmFyIHBhdGggPSBraW5kLnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2luZC5zdWJzdHJpbmcoMSkgKyBcInNcIjtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShlbnRpdHkpO1xuICAgICAgICBpZiAobmFtZXNwYWNlICYmICFpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCkpIHtcbiAgICAgICAgICByZXR1cm4gQ29yZS51cmwoVXJsSGVscGVycy5qb2luKCcva3ViZXJuZXRlcy9uYW1lc3BhY2UnLCBuYW1lc3BhY2UsIHBhdGgsIGlkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIENvcmUudXJsKFVybEhlbHBlcnMuam9pbignL2t1YmVybmV0ZXMnLCBwYXRoLCBpZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cblxuICBleHBvcnQgZnVuY3Rpb24gcmVzb3VyY2VLaW5kVG9VcmlQYXRoKGtpbmQpIHtcbiAgICB2YXIga2luZFBhdGggPSBraW5kLnRvTG93ZXJDYXNlKCkgKyBcInNcIjtcbiAgICBpZiAoa2luZFBhdGggPT09IFwicmVwbGljYXRpb25Db250cm9sbGVyc1wiICYmICFpc1YxYmV0YTFPcjIoKSkge1xuICAgICAga2luZFBhdGggPSBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGtpbmRQYXRoO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJZ25vcmVOYW1lc3BhY2VLaW5kKGtpbmQpIHtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJIb3N0XCIgfHwga2luZCA9PT0gXCJNaW5pb25cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IFVSTCBmb3IgdGhlIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzVXJsRm9yS2luZChLdWJlcm5ldGVzQXBpVVJMLCBraW5kLCBuYW1lc3BhY2UgPSBudWxsLCBwYXRoID0gbnVsbCkge1xuICAgIHZhciBwYXRoU2VnbWVudCA9IFwiXCI7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCIgKyBDb3JlLnRyaW1MZWFkaW5nKHBhdGgsIFwiL1wiKTtcbiAgICB9XG4gICAgdmFyIGtpbmRQYXRoID0gcmVzb3VyY2VLaW5kVG9VcmlQYXRoKGtpbmQpO1xuICAgIHZhciBpZ25vcmVOYW1lc3BhY2UgPSBpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCk7XG4gICAgaWYgKGlzVjFiZXRhMU9yMigpIHx8IGlnbm9yZU5hbWVzcGFjZSkge1xuICAgICAgdmFyIHBvc3RmaXggPSBcIlwiO1xuICAgICAgaWYgKG5hbWVzcGFjZSAmJiAhaWdub3JlTmFtZXNwYWNlKSB7XG4gICAgICAgIHBvc3RmaXggPSBcIj9uYW1lc3BhY2U9XCIgKyBuYW1lc3BhY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmRQYXRoLCBwYXRoU2VnbWVudCwgcG9zdGZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwgXCIvbmFtZXNwYWNlcy9cIiwgbmFtZXNwYWNlICwga2luZFBhdGgsIHBhdGhTZWdtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2UgVVJMIGZvciB0aGUga2luZCBvZiBrdWJlcm5ldGVzIHJlc291cmNlIG9yIG51bGwgaWYgaXQgY2Fubm90IGJlIGZvdW5kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc1VybEZvckl0ZW1LaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGpzb24pIHtcbiAgICB2YXIga2luZCA9IGpzb24ua2luZDtcbiAgICBpZiAoa2luZCkge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmQsIGpzb24ubmFtZXNwYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLndhcm4oXCJJZ25vcmluZyBtaXNzaW5nIGtpbmQgXCIgKyBraW5kICsgXCIgZm9yIGt1YmVybmV0ZXMganNvbjogXCIgKyBhbmd1bGFyLnRvSnNvbihqc29uKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc1Byb3h5VXJsRm9yU2VydmljZShLdWJlcm5ldGVzQXBpVVJMLCBzZXJ2aWNlLCBwYXRoID0gbnVsbCkge1xuICAgIHZhciBwYXRoU2VnbWVudCA9IFwiXCI7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCIgKyBDb3JlLnRyaW1MZWFkaW5nKHBhdGgsIFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIjtcbiAgICB9XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShzZXJ2aWNlKTtcbiAgICBpZiAoaXNWMWJldGExT3IyKCkpIHtcbiAgICAgIHZhciBwb3N0Zml4ID0gXCI/bmFtZXNwYWNlPVwiICsgbmFtZXNwYWNlO1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5XCIgKyBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpICsgXCIvc2VydmljZXMvXCIgKyBnZXROYW1lKHNlcnZpY2UpICsgcGF0aFNlZ21lbnQgKyBwb3N0Zml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5L25hbWVzcGFjZXMvXCIgKyBuYW1lc3BhY2UgKyBcIi9zZXJ2aWNlcy9cIiArIGdldE5hbWUoc2VydmljZSkgKyBwYXRoU2VnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRDb25maWdzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGRlcGxveW1lbnRDb25maWdzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaW1hZ2VSZXBvc2l0b3J5UmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZFJlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGJ1aWxkc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9nc1Jlc3RVcmwoaWQpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGJ1aWxkc0xvZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBhcHBsaWNhdGlvbiBKU09OXG4gICAqL1xuICAgICAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIHJ1bkFwcCgkbG9jYXRpb24sICRzY29wZSwgJGh0dHAsIEt1YmVybmV0ZXNBcGlVUkwsIGpzb24sIG5hbWUgPSBcIkFwcFwiLCBvblN1Y2Nlc3NGbiA9IG51bGwsIG5hbWVzcGFjZSA9IG51bGwsIG9uQ29tcGxldGVGbiA9IG51bGwpIHtcbiAgICBpZiAoanNvbikge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoanNvbikpIHtcbiAgICAgICAganNvbiA9IGFuZ3VsYXIuZnJvbUpzb24oanNvbik7XG4gICAgICB9XG4gICAgICBuYW1lID0gbmFtZSB8fCBcIkFwcFwiO1xuICAgICAgdmFyIHBvc3RmaXggPSBuYW1lc3BhY2UgPyBcIiBpbiBuYW1lc3BhY2UgXCIgKyBuYW1lc3BhY2UgOiBcIlwiO1xuXG4gICAgICB2YXIgaXRlbXMgPSBjb252ZXJ0S3ViZXJuZXRlc0pzb25Ub0l0ZW1zKGpzb24pO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKGl0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICB2YXIgdXJsID0ga3ViZXJuZXRlc1VybEZvckl0ZW1LaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGl0ZW0pO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgJGh0dHAucG9zdCh1cmwsIGl0ZW0pLlxuICAgICAgICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiR290IHN0YXR1czogXCIgKyBzdGF0dXMgKyBcIiBvbiB1cmw6IFwiICsgdXJsICsgXCIgZGF0YTogXCIgKyBkYXRhICsgXCIgYWZ0ZXIgcG9zdGluZzogXCIgKyBhbmd1bGFyLnRvSnNvbihpdGVtKSk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ob25Db21wbGV0ZUZuKSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIENvcmUuJGFwcGx5KCRzY29wZSk7XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIHZhciByZWFzb24gPSBkYXRhLnJlYXNvbjtcbiAgICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gXCJBbHJlYWR5RXhpc3RzXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXRzIGlnbm9yZSBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiZW50aXR5IGFscmVhZHkgZXhpc3RzIGF0IFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJGYWlsZWQgdG8gUE9TVCB0byBcIiArIHVybCArIFwiIGdvdCBzdGF0dXM6IFwiICsgc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nLndhcm4oXCJGYWlsZWQgdG8gc2F2ZSBcIiArIHVybCArIFwiIHN0YXR1czogXCIgKyBzdGF0dXMgKyBcIiByZXNwb25zZTogXCIgKyBhbmd1bGFyLnRvSnNvbihkYXRhLCB0cnVlKSk7XG4gICAgICAgICAgICBDb3JlLm5vdGlmaWNhdGlvbignZXJyb3InLCBtZXNzYWdlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gICovXG5cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlcnZpY2UgcmVnaXN0cnlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2aWNlUmVnaXN0cnkoKSB7XG4gICAgdmFyIGluamVjdG9yID0gSGF3dGlvQ29yZS5pbmplY3RvcjtcbiAgICByZXR1cm4gaW5qZWN0b3IgPyBpbmplY3Rvci5nZXQoXCJTZXJ2aWNlUmVnaXN0cnlcIikgOiBudWxsO1xuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpbmsgdG8gdGhlIGtpYmFuYSBsb2dzIHdlYiBhcHBsaWNhdGlvblxuICAgKi9cbiAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIGtpYmFuYUxvZ3NMaW5rKFNlcnZpY2VSZWdpc3RyeSkge1xuICAgIHZhciBsaW5rID0gU2VydmljZVJlZ2lzdHJ5LnNlcnZpY2VMaW5rKGtpYmFuYVNlcnZpY2VOYW1lKTtcbiAgICBpZiAobGluaykge1xuICAgICAgaWYgKCFsaW5rLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgICBsaW5rICs9IFwiL1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmsgKyBcIiMvZGFzaGJvYXJkL0ZhYnJpYzhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gICovXG5cbiAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5Mb2dzRm9yUG9kcyhTZXJ2aWNlUmVnaXN0cnksICR3aW5kb3csIG5hbWVzcGFjZSwgcG9kcykge1xuICAgIHZhciBsaW5rID0ga2liYW5hTG9nc0xpbmsoU2VydmljZVJlZ2lzdHJ5KTtcbiAgICBpZiAobGluaykge1xuICAgICAgdmFyIHF1ZXJ5ID0gXCJcIjtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2gocG9kcywgKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIGlkID0gZ2V0TmFtZShpdGVtKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdmFyIHNwYWNlID0gcXVlcnkgPyBcIiBPUiBcIiA6IFwiXCI7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgICBxdWVyeSArPSBzcGFjZSArICdcIicgKyBpZCArICdcIic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICBxdWVyeSA9IFwiKFwiICsgcXVlcnkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICBxdWVyeSA9ICdrdWJlcm5ldGVzLm5hbWVzcGFjZTpcIicgKyBuYW1lc3BhY2UgKyAnXCIgQU5EIGt1YmVybmV0ZXMucG9kX25hbWU6JyArIHF1ZXJ5O1xuICAgICAgICBsaW5rICs9IFwiP19hPShxdWVyeToocXVlcnlfc3RyaW5nOihxdWVyeTonXCIgKyBxdWVyeSArIFwiJykpKVwiO1xuICAgICAgICB2YXIgbmV3V2luZG93ID0gJHdpbmRvdy5vcGVuKGxpbmssIFwidmlld0xvZ3NcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICovXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZUNvbnRyb2xsZXIoJGh0dHAsIEt1YmVybmV0ZXNBcGlVUkwsIHJlcGxpY2F0aW9uQ29udHJvbGxlciwgbmV3UmVwbGljYXMsIG9uQ29tcGxldGVGbiA9IG51bGwpIHtcbiAgICB2YXIgaWQgPSBnZXROYW1lKHJlcGxpY2F0aW9uQ29udHJvbGxlcik7XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShyZXBsaWNhdGlvbkNvbnRyb2xsZXIpIHx8IFwiXCI7XG4gICAgdmFyIHVybCA9IGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIFwiUmVwbGljYXRpb25Db250cm9sbGVyXCIsIG5hbWVzcGFjZSwgaWQpO1xuICAgICRodHRwLmdldCh1cmwpLlxuICAgICAgc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB2YXIgZGVzaXJlZFN0YXRlID0gZGF0YS5zcGVjO1xuICAgICAgICAgIGlmICghZGVzaXJlZFN0YXRlKSB7XG4gICAgICAgICAgICBkZXNpcmVkU3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGRhdGEuc3BlYyA9IGRlc2lyZWRTdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVzaXJlZFN0YXRlLnJlcGxpY2FzID0gbmV3UmVwbGljYXM7XG4gICAgICAgICAgJGh0dHAucHV0KHVybCwgZGF0YSkuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJ1cGRhdGVkIGNvbnRyb2xsZXIgXCIgKyB1cmwpO1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKG9uQ29tcGxldGVGbikpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlRm4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBzYXZlIFwiICsgdXJsICsgXCIgXCIgKyBkYXRhICsgXCIgXCIgKyBzdGF0dXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5cbiAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBsb2FkIFwiICsgdXJsICsgXCIgXCIgKyBkYXRhICsgXCIgXCIgKyBzdGF0dXMpO1xuICAgICAgfSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdCBwYXRoIGludG8gYW4gYWNjZXNzaWJsZSBVUkwgZm9yIHRoZSBicm93c2VyXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2l0UGF0aFRvVXJsKGljb25QYXRoLCBicmFuY2ggPSBcIm1hc3RlclwiKSB7XG4gICAgcmV0dXJuIChIYXd0aW9Db3JlLmluamVjdG9yLmdldCgnQXBwTGlicmFyeVVSTCcpIHx8ICcnKSArIFwiL2dpdC9cIiArIGJyYW5jaCArIGljb25QYXRoO1xuICB9XG5cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUganNvbiBzY2hlbWFcbiAgICovXG4gICAgICAgIC8qXG4gIGV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTY2hlbWEoKSB7XG4gICAgYW5ndWxhci5mb3JFYWNoKHNjaGVtYS5kZWZpbml0aW9ucywgKGRlZmluaXRpb24sIG5hbWUpID0+IHtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gZGVmaW5pdGlvbi5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIGhpZGVQcm9wZXJ0aWVzID0gW1wiY3JlYXRpb25UaW1lc3RhbXBcIiwgXCJraW5kXCIsIFwiYXBpVmVyc2lvblwiLCBcImFubm90YXRpb25zXCIsIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIiwgXCJuYW1lc3BhY2VcIiwgXCJyZXNvdXJjZVZlcnNpb25cIiwgXCJzZWxmTGlua1wiLCBcInVpZFwiXTtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKGhpZGVQcm9wZXJ0aWVzLCAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydHlbXCJoaWRkZW5cIl0gID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2gocHJvcGVydGllcywgKHByb3BlcnR5LCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICB2YXIgcmVmID0gcHJvcGVydHlbXCIkcmVmXCJdO1xuICAgICAgICAgIHZhciB0eXBlID0gcHJvcGVydHlbXCJ0eXBlXCJdO1xuICAgICAgICAgIGlmIChyZWYgJiYgKCF0eXBlIHx8IHR5cGUgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVtcInR5cGVcIl0gPSByZWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHByb3BlcnR5W1wiaXRlbXNcIl07XG4gICAgICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgICAgdmFyIHJlZiA9IGl0ZW1zW1wiJHJlZlwiXTtcbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSBpdGVtc1tcInR5cGVcIl07XG4gICAgICAgICAgICAgIGlmIChyZWYgJiYgKCF0eXBlIHx8IHR5cGUgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNbXCJ0eXBlXCJdID0gcmVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2NoZW1hLmRlZmluaXRpb25zLm9zX2J1aWxkX1dlYkhvb2tUcmlnZ2VyLnByb3BlcnRpZXMuc2VjcmV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgfSlcbiAgfVxuICAqL1xuXG4gIC8qKlxuICAgKiBMZXRzIHJlbW92ZSBhbnkgZW5yaWNoZWQgZGF0YSB0byBsZWF2ZSB0aGUgb3JpZ2luYWwganNvbiBpbnRhY3RcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b1Jhd0pzb24oaXRlbSkge1xuICAgIHZhciBvID0gYW5ndWxhci5jb3B5KGl0ZW0pO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChvLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiJFwiKSB8fCBrZXkuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgZGVsZXRlIG9ba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobywgbnVsbCwgMik7IC8vIHNwYWNpbmcgbGV2ZWwgPSAyXG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuICAgICAgICAgICAgLy8gVE9ETyBhdXRoLm1hc3Rlcl91cmkgbm8gbG9uZ2VyIHVzZWQgcmlnaHQ/XG4gICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgICBpZiAoIW1hc3Rlcikge1xuICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWR4ICs9IDM7XG4gICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFzdGVyKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAuZmFpbCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgT0FVVEggY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5hbHdheXMoKCkgPT4ge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDUwMCwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcblxuICAgIHByaXZhdGUgX2VlOkV2ZW50RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX29iamVjdHM6QXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3Ioa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB2YXIgbG9nZ2VyTmFtZSA9ICdrOHMtb2JqZWN0cy8nICsgKG5hbWVzcGFjZSA/IFVybEhlbHBlcnMuam9pbihuYW1lc3BhY2UsIGtpbmQpIDoga2luZCk7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQobG9nZ2VyTmFtZSk7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZGVkKG9iamVjdCkge1xuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCFfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgIGFuZ3VsYXIuY29weShvYmplY3QsIG9iaik7XG4gICAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIG9iamVjdCk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlZChvYmplY3QpIHtcbiAgICAgIC8vbG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5ERUxFVEVELCBvYmplY3QpO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuICB9O1xuXG4gIGNsYXNzIFdTSGFuZGxlcnMge1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29ubmVjdFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNvY2tldDpXZWJTb2NrZXQ7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgIH1cblxuICAgIHNldCBsaXN0KF9saXN0Ok9iamVjdExpc3QpIHtcbiAgICAgIHRoaXMuX2xpc3QgPSBfbGlzdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVycywgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHdzW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIG9ubWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gbG9nLmRlYnVnKFwiZXZlbnQ6IFwiLCBldmVudFR5cGUsIFwiIG9iamVjdDogXCIsIGRhdGEub2JqZWN0KTtcbiAgICAgIHRoaXMuX2xpc3RbZXZlbnRUeXBlXShkYXRhLm9iamVjdCk7XG4gICAgfTtcblxuICAgIG9ub3BlbihldmVudCkge1xuICAgICAgdGhpcy5yZXRyaWVzID0gMDtcbiAgICAgIHRoaXMuY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICAgIC8vdGhpcy5lbWl0dGVyLmVtaXQoZXZlbnROYW1lKCdvcGVuJyksIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJSZXRyeWluZyBhZnRlciBjb25uZWN0aW9uIGNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIndhdGNoIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZGlzY29ubmVjdGVkLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyk7XG4gICAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VybCk7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyhzZWxmLCB3cyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiV2F0Y2ggZm9yIFwiLCB0aGlzLnNlbGYua2luZCwgXCIgZmFpbGVkXCIpO1xuICAgICAgICBsb2cuZGVidWcoXCJDbG9zZWQ6IFwiLCBldmVudCk7XG4gICAgICAgIC8vdGhpcy5lbWl0dGVyLmVtaXQoZXZlbnROYW1lKCdjbG9zZScpLCBldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTjtcbiAgICB9O1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVcmwpO1xuICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIHtcblxuICAgIHByaXZhdGUgX2tpbmQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWVzcGFjZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfd3NVcmw6VVJJO1xuICAgIHByaXZhdGUgX3Jlc3RVcmw6VVJJO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVycyA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fa2luZCA9IGtpbmQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdFVybCA9IG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB0aGlzLl93c1VybCA9IHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+e1xuICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXJzKHRoaXMpO1xuICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3QgPSBuZXcgT2JqZWN0TGlzdChraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgdGhpcy5oYW5kbGVycy5saXN0ID0gbGlzdDtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHdzVXJsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dzVXJsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBzZXQgbmFtZXNwYWNlKG5zOnN0cmluZykge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gbnM7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnkpID0+IHZvaWQpIHtcbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pO1xuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMuX2tpbmQgIT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUyAmJiBuYW1lc3BhY2UgJiYgIXRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeEZvcktpbmQodGhpcy5fa2luZCksICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KCkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkLmFqYXgodXJsLCA8YW55PiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbihpdGVtKSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlIFwiLCBpdGVtLCBcIiBqcVhIUjogXCIsIGpxWEhSLCBcIiB0ZXh0OiBcIiwgdGV4dCwgXCIgc3RhdHVzOiBcIiwgc3RhdHVzKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZVRleHQgPSBhbmd1bGFyLmZyb21Kc29uKGpxWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBlcnJvcihyZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlIFwiLCBpdGVtLCBcIiBqcVhIUjogXCIsIGpxWEhSLCBcIiB0ZXh0OiBcIiwgdGV4dCwgXCIgc3RhdHVzOiBcIiwgc3RhdHVzKTtcbiAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZVRleHQgPSBhbmd1bGFyLmZyb21Kc29uKGpxWEhSLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICBlcnJvcihyZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUoa2luZDogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKGtpbmQsIG5hbWVzcGFjZSkpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDphbnksIC4uLmhhbmRsZXM6YW55W10pIHtcbiAgICAgIF8uZm9yRWFjaChoYW5kbGVzLCAoaGFuZGxlKSA9PiB7XG4gICAgICAgIGNsaWVudC51bndhdGNoKGhhbmRsZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBrZXkgPSBjbGllbnQuZ2V0S2V5KCk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGMucmVtb3ZlUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmVtb3ZlZCByZWZlcmVuY2UgdG8gY2xpZW50IHdpdGgga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGMucmVmQ291bnQpO1xuICAgICAgICBpZiAoYy5kaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICAgIGMuZGVzdHJveSgpO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRGVzdHJveWVkIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb2R1bGUuZmFjdG9yeSgnSzhTQ2xpZW50RmFjdG9yeScsICgpID0+IHtcbiAgICByZXR1cm4gbmV3IEs4U0NsaWVudEZhY3RvcnlJbXBsKClcbiAgfSk7XG5cblxuXG59XG5cblxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ1NlcnZpY2VSZWdpc3RyeScsIFsoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBTZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlKCk7XG4gIH1dKTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHNpbXBsZSBpbnRlcmZhY2UgdG8gc2VydmljZSBkaXNjb3ZlcnkgdGhhdCBjYW4gYmUgdXNlZCBlYXJseSBvbiBpbiB0aGUgYXBwbGljYXRpb24gbGlmZWN5Y2xlIGJlZm9yZSB0aGVcbiAgICogdW5kZXJseWluZyBtb2RlbCBoYXMgYmVlbiBjcmVhdGVkIHZpYSBkZXBlbmRlbmN5IGluamVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIFNlcnZpY2VSZWdpc3RyeVNlcnZpY2Uge1xuICAgIHByaXZhdGUgbW9kZWw6YW55ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIHNlcnZpY2UgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gSUQgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kU2VydmljZShzZXJ2aWNlTmFtZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VydmljZSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZSAoSUQpIG9yIG51bGwgaWYgaXQgY2Fubm90IGJlIGZvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VydmljZU5hbWUgdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gbG9vayBmb3JcbiAgICAgKiBAcmV0dXJuIHtudWxsfVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICB2YXIgYW5zd2VyID0gbnVsbDtcbiAgICAgIGlmIChzZXJ2aWNlTmFtZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmdldE1vZGVsKCk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBtb2RlbC5jdXJyZW50TmFtZXNwYWNlKCk7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsLmdldFNlcnZpY2UobmFtZXNwYWNlICxzZXJ2aWNlTmFtZSk7XG4vKlxuICAgICAgICBUT0RPIGxldHMgb25seSBsb29rIGluIHRoZSBjdXJyZW50IG5hbWVzcGFjZVxuICAgICAgICBhbmd1bGFyLmZvckVhY2gobW9kZWwuc2VydmljZXMsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlcnZpY2VOYW1lID09PSBnZXROYW1lKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICBhbnN3ZXIgPSBzZXJ2aWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4qL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlcnZpY2UgbGluayBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlcnZpY2VOYW1lIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZUxpbmsoc2VydmljZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2Uoc2VydmljZU5hbWUpO1xuICAgICAgcmV0dXJuIHNlcnZpY2VMaW5rVXJsKHNlcnZpY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TW9kZWwoKTphbnkge1xuICAgICAgdmFyIGFuc3dlciA9IHRoaXMubW9kZWw7XG4gICAgICAvLyBsZXRzIGFsbG93IGxhenkgbG9hZCBzbyB3ZSBjYW4gYmUgaW52b2tlZCBiZWZvcmUgdGhlIGluamVjdG9yIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgIGlmICghYW5zd2VyKSB7XG4gICAgICAgIHZhciBpbmplY3RvciA9IEhhd3Rpb0NvcmUuaW5qZWN0b3I7XG4gICAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICAgIHRoaXMubW9kZWwgPSBpbmplY3Rvci5nZXQoJ0t1YmVybmV0ZXNNb2RlbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhbnN3ZXIgPSB0aGlzLm1vZGVsO1xuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
