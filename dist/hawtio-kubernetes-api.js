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
            if (!this.socket) {
                log.debug("Connecting watch ", this.self.kind);
                var ws = this.socket = new WebSocket(this.self.wsUrl);
                this.setHandlers(this, ws);
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFUlZJQ0VTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVfQklORElOR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9MRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcyIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5vc1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFOWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkFEREVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuTU9ESUZJRUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5ERUxFVEVEIiwiS3ViZXJuZXRlc0FQSS5jdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc05hbWVzcGFjZVBhdGgiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLnVwZGF0ZU9yQ3JlYXRlT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVSZXNvdXJjZSIsIkt1YmVybmV0ZXNBUEkuaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5kZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkc0xvZ3NSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZHNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZENvbmZpZ0hvb2tzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkucm91dGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkudGVtcGxhdGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkud3NTY2hlbWUiLCJLdWJlcm5ldGVzQVBJLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5lcXVhbHMiLCJLdWJlcm5ldGVzQVBJLmdldFVJRCIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldEtpbmQiLCJLdWJlcm5ldGVzQVBJLmdldFNlbGVjdG9yIiwiS3ViZXJuZXRlc0FQSS5nZXRIb3N0IiwiS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldFBvcnRzIiwiS3ViZXJuZXRlc0FQSS5nZXRDcmVhdGlvblRpbWVzdGFtcCIsIkt1YmVybmV0ZXNBUEkuaXNLdWJlcm5ldGVzIiwiS3ViZXJuZXRlc0FQSS5pc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIiLCJLdWJlcm5ldGVzQVBJLmlzQXBwVmlldyIsIkt1YmVybmV0ZXNBUEkuc2V0SnNvbiIsIkt1YmVybmV0ZXNBUEkubGFiZWxzVG9TdHJpbmciLCJLdWJlcm5ldGVzQVBJLnNlcnZpY2VMaW5rVXJsIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVQb2RDb3VudGVycyIsIkt1YmVybmV0ZXNBUEkuY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyIsIkt1YmVybmV0ZXNBUEkuaXNWMWJldGExT3IyIiwiS3ViZXJuZXRlc0FQSS5lbnRpdHlQYWdlTGluayIsIkt1YmVybmV0ZXNBUEkucmVzb3VyY2VLaW5kVG9VcmlQYXRoIiwiS3ViZXJuZXRlc0FQSS5pc0lnbm9yZU5hbWVzcGFjZUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNVcmxGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkQ29uZmlnUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmltYWdlUmVwb3NpdG9yeVJlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRMb2dzUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLmdldFNlcnZpY2VSZWdpc3RyeSIsIkt1YmVybmV0ZXNBUEkucmVzaXplQ29udHJvbGxlciIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5naXRQYXRoVG9VcmwiLCJLdWJlcm5ldGVzQVBJLnRvUmF3SnNvbiIsIkt1YmVybmV0ZXNBUEkuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmluaXRpYWxpemVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmV2ZW50cyIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5vYmplY3RzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lmhhc05hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmxpc3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuc2V0SGFuZGxlcnMiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVycy5vbm1lc3NhZ2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMub25vcGVuIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXJzLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlcnMuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndzVXJsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5uYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmtpbmQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VXJsRm9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwudW53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucHV0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5kZWxldGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVmQ291bnQiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmFkZFJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVtb3ZlUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kaXNwb3NhYmxlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbCIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNyZWF0ZSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5oYXNTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmZpbmRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLnNlcnZpY2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmdldE1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSx1RUFBdUU7QUFDdkUsa0NBQWtDO0FBRWxDLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FDaEJ0RCxzQ0FBc0M7QUFJckMsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0ErSG5CO0FBL0hELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBO1FBQUFDO1FBRUFDLENBQUNBO1FBRENELHNCQUFJQSx5Q0FBcUJBO2lCQUF6QkEsY0FBcUNFLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUN2RUEsYUFBQ0E7SUFBREEsQ0FGQUQsQUFFQ0MsSUFBQUQ7SUFGWUEsb0JBQU1BLFNBRWxCQSxDQUFBQTtJQUVVQSx1QkFBU0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUE4Q3JDQTtRQUFBSTtRQWlCQUMsQ0FBQ0E7UUFoQkFELHNCQUFrQkEsd0JBQVVBO2lCQUE1QkEsY0FBd0NFLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNHLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDNURBLHNCQUFrQkEsa0JBQUlBO2lCQUF0QkEsY0FBa0NJLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDbERBLHNCQUFrQkEscUNBQXVCQTtpQkFBekNBLGNBQXFESyxNQUFNQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDdkZBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NNLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQU47UUFDMURBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNPLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVA7UUFDNURBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NRLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVI7UUFDdERBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNTLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVQ7UUFDbkVBLHNCQUFrQkEsb0JBQU1BO2lCQUF4QkEsY0FBb0NVLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVY7UUFDdERBLHNCQUFrQkEsZ0NBQWtCQTtpQkFBcENBLGNBQWdEVyxNQUFNQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVg7UUFDN0VBLHNCQUFrQkEsMkJBQWFBO2lCQUEvQkEsY0FBMkNZLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQVo7UUFDbkVBLHNCQUFrQkEsc0JBQVFBO2lCQUExQkEsY0FBc0NhLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWI7UUFDMURBLHNCQUFrQkEsNkJBQWVBO2lCQUFqQ0EsY0FBNkNjLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZDtRQUN2RUEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ2UsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBZjtRQUNuRUEsc0JBQWtCQSxtQkFBS0E7aUJBQXZCQSxjQUFtQ2dCLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQWhCO1FBQ2xEQSxzQkFBa0JBLHNCQUFRQTtpQkFBMUJBLGNBQXNDaUIsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBakI7UUFDN0RBLGlCQUFDQTtJQUFEQSxDQWpCQUosQUFpQkNJLElBQUFKO0lBakJZQSx3QkFBVUEsYUFpQnRCQSxDQUFBQTtJQUVBQTtRQUFBc0I7UUF5QkFDLENBQUNBO1FBeEJDRCxzQkFBa0JBLDJCQUFRQTtpQkFBMUJBO2dCQUNFRSxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxJQUFJQTtvQkFDZkEsVUFBVUEsQ0FBQ0EsdUJBQXVCQTtvQkFDbENBLFVBQVVBLENBQUNBLFFBQVFBO2lCQUNwQkEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7OztXQUFBRjtRQUNEQSxzQkFBa0JBLDBCQUFPQTtpQkFBekJBO2dCQUNFRyxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxTQUFTQTtvQkFDcEJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsTUFBTUE7b0JBQ2pCQSxVQUFVQSxDQUFDQSxNQUFNQTtvQkFDakJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0Esa0JBQWtCQTtvQkFDN0JBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsUUFBUUE7b0JBQ25CQSxVQUFVQSxDQUFDQSxlQUFlQTtvQkFDMUJBLFVBQVVBLENBQUNBLGFBQWFBO29CQUN4QkEsVUFBVUEsQ0FBQ0EsS0FBS0E7aUJBQ2pCQSxDQUFDQTtZQUNKQSxDQUFDQTs7O1dBQUFIO1FBQ0hBLHNCQUFDQTtJQUFEQSxDQXpCQXRCLEFBeUJDc0IsSUFBQXRCO0lBekJZQSw2QkFBZUEsa0JBeUIzQkEsQ0FBQUE7SUFFRkE7UUFBQTBCO1FBS0FDLENBQUNBO1FBSkFELHNCQUFrQkEsbUJBQUdBO2lCQUFyQkEsY0FBaUNFLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOUNBLHNCQUFrQkEscUJBQUtBO2lCQUF2QkEsY0FBbUNHLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDcERBLHNCQUFrQkEsd0JBQVFBO2lCQUExQkEsY0FBc0NJLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDMURBLHNCQUFrQkEsdUJBQU9BO2lCQUF6QkEsY0FBcUNLLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDekRBLG1CQUFDQTtJQUFEQSxDQUxBMUIsQUFLQzBCLElBQUExQjtJQUxZQSwwQkFBWUEsZUFLeEJBLENBQUFBO0FBd0JGQSxDQUFDQSxFQS9ITSxhQUFhLEtBQWIsYUFBYSxRQStIbkI7O0FDNUlELGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFJekMsSUFBTyxhQUFhLENBNEJuQjtBQTVCRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBRVRBLHdCQUFVQSxHQUFHQSxlQUFlQSxDQUFDQTtJQUM3QkEsd0JBQVVBLEdBQUdBLHlCQUF5QkEsQ0FBQ0E7SUFDdkNBLDBCQUFZQSxHQUFHQSx3QkFBVUEsR0FBR0EsT0FBT0EsQ0FBQ0E7SUFDcENBLGlCQUFHQSxHQUFrQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0Esd0JBQVVBLENBQUNBLENBQUNBO0lBRTVDQSw4QkFBZ0JBLEdBQUdBLElBQUlBLENBQUNBO0lBRXhCQSw0QkFBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQTtJQUNqREEseUJBQVdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO0lBR3hDQSxzQkFBUUEsR0FBb0JBLFNBQVNBLENBQUNBO0lBQ3RDQSx1QkFBU0EsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFFZkEsd0JBQVVBLEdBQUdBLEtBQUtBLENBQUNBO0lBQ25CQSx1QkFBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFFbkJBLDZCQUFlQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2QkEsNEJBQWNBLEdBQUdBLElBQUlBLENBQUNBO0lBRXRCQSwrQkFBaUJBLEdBQUdBLDZCQUFlQSxDQUFDQTtJQUNwQ0EsaUNBQW1CQSxHQUFHQSw0QkFBY0EsQ0FBQ0E7SUFFckNBLHNDQUF3QkEsR0FBR0EsR0FBR0EsQ0FBQ0E7SUFDL0JBLDhCQUFnQkEsR0FBR0EsU0FBU0EsQ0FBQ0E7SUFDN0JBLHVCQUFTQSxHQUFHQSxNQUFNQSxDQUFDQTtBQUNoQ0EsQ0FBQ0EsRUE1Qk0sYUFBYSxLQUFiLGFBQWEsUUE0Qm5COztBQ2pDRCwrQ0FBK0M7QUFFL0MsSUFBTyxhQUFhLENBNHZCbkI7QUE1dkJELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFLcEJBO1FBQ0VnQyxJQUFJQSxRQUFRQSxHQUFHQSxVQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUNuQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDYkEsSUFBSUEsZUFBZUEsR0FBR0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM1REEsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsaUJBQWlCQSxJQUFJQSw4QkFBZ0JBLENBQUNBO1FBQy9EQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSw4QkFBZ0JBLENBQUNBO0lBQzFCQSxDQUFDQTtJQVBlaEMsd0NBQTBCQSw2QkFPekNBLENBQUFBO0lBRURBO1FBQ0VpQyxJQUFJQSxFQUFFQSxHQUFHQSwwQkFBMEJBLEVBQUVBLENBQUNBO1FBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNQQSxNQUFNQSxDQUFDQSxjQUFjQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDWkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFQZWpDLHFDQUF1QkEsMEJBT3RDQSxDQUFBQTtJQUVEQTtRQUNFa0MsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQVFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQzlEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxNQUFNQSxHQUFHQSx3QkFBVUEsQ0FBQ0E7UUFDdEJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQU5lbEMsdUJBQVNBLFlBTXhCQSxDQUFBQTtJQUVEQTtRQUNFbUMsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0Esc0JBQVFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLFdBQVdBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQ3BFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNaQSxNQUFNQSxHQUFHQSx1QkFBU0EsQ0FBQ0E7UUFDckJBLENBQUNBO1FBQ0RBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBTzNDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFiZW5DLHlCQUFXQSxjQWExQkEsQ0FBQUE7SUFFREE7UUFDRW9DLE1BQU1BLENBQUNBLHVCQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFGZXBDLDBCQUFZQSxlQUUzQkEsQ0FBQUE7SUFFREE7UUFDRXFDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLDRCQUFjQSxDQUFDQSxDQUFDQTtJQUN0REEsQ0FBQ0E7SUFGZXJDLGlDQUFtQkEsc0JBRWxDQSxDQUFBQTtJQUVEQTtRQUNFc0MsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsRUFBRUEsNkJBQWVBLENBQUNBLENBQUNBO0lBQ3pEQSxDQUFDQTtJQUZldEMsZ0NBQWtCQSxxQkFFakNBLENBQUFBO0lBRURBLHVCQUE4QkEsSUFBV0E7UUFDdkN1QyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSx3QkFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLE1BQU1BLENBQUNBLG1CQUFtQkEsRUFBRUEsQ0FBQ0E7UUFDL0JBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLDZCQUFlQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxJQUFJQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2REEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMvQkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQWVBLENBQUNBLE9BQU9BLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLEtBQUtBLElBQUlBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQVhldkMsMkJBQWFBLGdCQVc1QkEsQ0FBQUE7SUFFREE7UUFDRXdDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLG1CQUFtQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDaEVBLENBQUNBO0lBRmV4Qyw4QkFBZ0JBLG1CQUUvQkEsQ0FBQUE7SUFFREE7UUFDRXlDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLGtCQUFrQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDL0RBLENBQUNBO0lBRmV6Qyw2QkFBZUEsa0JBRTlCQSxDQUFBQTtJQUVEQSw4QkFBcUNBLE1BQU1BLEVBQUVBLGVBQWVBLEVBQUVBLE9BQXdCQSxFQUFFQSxLQUF1QkE7UUFDN0cwQyxJQUFJQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcEJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSx5Q0FBeUNBLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxVQUFDQSxHQUFHQTtnQkFDMUJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDOUJBLG9CQUFvQkEsQ0FBQ0EsR0FBR0EsRUFBRUEsZUFBZUEsRUFBRUEsT0FBT0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLENBQUNBLENBQUNBLENBQUNBO1lBQ0hBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ1ZBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxFQUFFQSxNQUFNQSxFQUFFQSxxQkFBcUJBLENBQUNBLENBQUNBO1lBQ3JEQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsUUFBUUEsR0FBR0EsZUFBZUEsQ0FBQ0EsSUFBSUEsR0FBR0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7UUFDbERBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2RBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3REQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUMzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLHNCQUFzQkEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBRURBLElBQUlBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLEtBQUtBLElBQUlBLEVBQVZBLENBQVVBLENBQUNBLENBQUFBO1FBQzlEQSxJQUFJQSxNQUFNQSxHQUFHQSxRQUFRQSxHQUFHQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUU3Q0EsSUFBSUEsZUFBZUEsR0FBR0EsVUFBQ0EsSUFBSUE7WUFDekJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2RBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ25DQSxDQUFDQTtZQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDWkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLENBQUNBO1FBQ0hBLENBQUNBLENBQUNBO1FBQ0ZBLElBQUlBLGFBQWFBLEdBQUdBLFVBQUNBLEdBQUdBO1lBQ3RCQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsK0JBQStCQSxFQUFFQSxNQUFNQSxFQUFFQSxVQUFVQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1ZBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ2JBLENBQUNBO1FBQ0hBLENBQUNBLENBQUFBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2JBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLENBQUNBLENBQUNBO1lBQ2hEQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxlQUFlQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtRQUN0RUEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDTkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLG1DQUFtQ0EsQ0FBQ0EsQ0FBQ0E7WUFDL0NBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLGVBQWVBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO1FBQzlEQSxDQUFDQTtJQUNIQSxDQUFDQTtJQW5EZTFDLGtDQUFvQkEsdUJBbURuQ0EsQ0FBQUE7SUFFREEsd0JBQStCQSxLQUFZQSxFQUFFQSxXQUFrQkEsRUFBRUEsU0FBdUNBLEVBQUVBLGVBQWVBO1FBQ3ZIMkMsSUFBSUEsTUFBTUEsR0FBR0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ1pBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxzQkFBc0JBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3pDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNkQSxDQUFDQTtRQUVEQSxJQUFJQSxNQUFNQSxHQUFTQTtZQUNqQkEsU0FBU0EsRUFBRUEsMEJBQTBCQTtTQUN0Q0EsQ0FBQUE7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsS0FBS0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLElBQUlBLEdBQUdBLEdBQUdBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO1FBQy9EQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDeENBLElBQUlBLFFBQVFBLEdBQUdBLFNBQVNBLENBQUNBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBO1lBQ2xDQSxLQUFLQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFFQSxLQUFLQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUN2REEsTUFBTUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDekNBLElBQUlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBO1lBQ3RDQSxNQUFNQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQSxFQUFFQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDM0NBLEVBQUVBLEVBQUVBLEtBQUtBO2lCQUNWQSxFQUFFQSxNQUFNQSxDQUFDQSxFQUFDQTtTQUNaQSxDQUFDQSxDQUFDQTtRQUNIQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUF6QmUzQyw0QkFBY0EsaUJBeUI3QkEsQ0FBQUE7SUFFREE7UUFDRTRDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFDeEZBLENBQUNBO0lBRmU1QyxzQ0FBd0JBLDJCQUV2Q0EsQ0FBQUE7SUFFREE7UUFDRTZDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsb0JBQW9CQSxDQUFDQSxDQUFDQTtJQUM3RkEsQ0FBQ0E7SUFGZTdDLHNDQUF3QkEsMkJBRXZDQSxDQUFBQTtJQUVEQTtRQUNFOEMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO0lBQzNGQSxDQUFDQTtJQUZlOUMsK0JBQWlCQSxvQkFFaENBLENBQUFBO0lBRURBO1FBQ0UrQyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBQ2xGQSxDQUFDQTtJQUZlL0MsMkJBQWFBLGdCQUU1QkEsQ0FBQUE7SUFFREE7UUFDRWdELE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsbUJBQW1CQSxDQUFDQSxDQUFDQTtJQUM1RkEsQ0FBQ0E7SUFGZWhELHFDQUF1QkEsMEJBRXRDQSxDQUFBQTtJQUVEQTtRQUNFaUQsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFGZWpELGlDQUFtQkEsc0JBRWxDQSxDQUFBQTtJQUVEQTtRQUNFa0QsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUNsRkEsQ0FBQ0E7SUFGZWxELDJCQUFhQSxnQkFFNUJBLENBQUFBO0lBRURBO1FBQ0VtRCxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO0lBQ3JGQSxDQUFDQTtJQUZlbkQsOEJBQWdCQSxtQkFFL0JBLENBQUFBO0lBRURBLGtCQUF5QkEsR0FBVUE7UUFDakNvRCxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxNQUFNQSxDQUFDQTtRQUNqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO0lBQ0hBLENBQUNBO0lBUGVwRCxzQkFBUUEsV0FPdkJBLENBQUFBO0lBRURBLGVBQXNCQSxHQUFVQTtRQUM5QnFELElBQUlBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzdCQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFIZXJELG1CQUFLQSxRQUdwQkEsQ0FBQUE7SUFFREEsZ0JBQXVCQSxJQUFJQSxFQUFFQSxLQUFLQTtRQUNoQ3NELE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3hDQSxDQUFDQTtJQUZldEQsb0JBQU1BLFNBRXJCQSxDQUFBQTtJQUVEQSxnQkFBdUJBLE1BQU1BO1FBQzNCdUQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbkRBLENBQUNBO0lBRmV2RCxvQkFBTUEsU0FFckJBLENBQUFBO0lBRURBLHNCQUE2QkEsTUFBTUE7UUFDakN3RCxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM3REEsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsR0FBR0EsOEJBQWdCQSxDQUFDQTtJQUM1Q0EsQ0FBQ0E7SUFIZXhELDBCQUFZQSxlQUczQkEsQ0FBQUE7SUFFREEsbUJBQTBCQSxNQUFNQTtRQUM5QnlELElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQzFEQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFIZXpELHVCQUFTQSxZQUd4QkEsQ0FBQUE7SUFFREEsaUJBQXdCQSxNQUFNQTtRQUM1QjBELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ2xIQSxDQUFDQTtJQUZlMUQscUJBQU9BLFVBRXRCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLE1BQU1BO1FBQzVCMkQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDcEZBLENBQUNBO0lBRmUzRCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLHFCQUE0QkEsTUFBTUE7UUFDaEM0RCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFGZTVELHlCQUFXQSxjQUUxQkEsQ0FBQUE7SUFFREEsaUJBQXdCQSxHQUFHQTtRQUN6QjZELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO0lBQ25JQSxDQUFDQTtJQUZlN0QscUJBQU9BLFVBRXRCQSxDQUFBQTtJQUVEQSxtQkFBMEJBLEdBQUdBO1FBQzNCOEQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaERBLENBQUNBO0lBRmU5RCx1QkFBU0EsWUFFeEJBLENBQUFBO0lBRURBLGtCQUF5QkEsT0FBT0E7UUFDOUIrRCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFGZS9ELHNCQUFRQSxXQUV2QkEsQ0FBQUE7SUFFREEsOEJBQXFDQSxNQUFNQTtRQUN6Q2dFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDakVBLENBQUNBO0lBRmVoRSxrQ0FBb0JBLHVCQUVuQ0EsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFHRkEsSUFBSUEsWUFBWUEsR0FBR0EsWUFBWUEsQ0FBQ0E7SUFDckJBLG1CQUFLQSxHQUFHQSxZQUFZQSxHQUFHQSxrQkFBa0JBLENBQUNBO0lBQzFDQSwwQkFBWUEsR0FBR0EsWUFBWUEsR0FBR0EseUJBQXlCQSxDQUFDQTtJQUN4REEsMEJBQVlBLEdBQUdBLFlBQVlBLEdBQUdBLGVBQWVBLENBQUNBO0lBRXpEQSxzQkFBNkJBLFNBQVNBO1FBRXBDaUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFIZWpFLDBCQUFZQSxlQUczQkEsQ0FBQUE7SUFFREEscUNBQTRDQSxTQUFTQTtRQUVuRGtFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBSGVsRSx5Q0FBMkJBLDhCQUcxQ0EsQ0FBQUE7SUFFREEsbUJBQTBCQSxTQUFTQTtRQUVqQ21FLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBSGVuRSx1QkFBU0EsWUFHeEJBLENBQUFBO0lBRURBLGlCQUF3QkEsTUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUE7UUFDNUNvRSxNQUFNQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNmQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxJQUFJQSxJQUFJQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFJQSxJQUFPQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVEEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3JCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxFQUFFQSxHQUFHQSxTQUFTQSxDQUFDQTtZQUN0QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBO1FB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Q0E7WUFHbENBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQ2xCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxTQUFTQSxJQUFJQSxJQUFJQSxDQUFDQTtZQUVwQ0EsSUFBSUEsSUFBSUEsR0FBR0EsMkJBQWFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3JDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqREEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNoRkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2pEQSxDQUFDQTtZQUVEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSwwQkFBWUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDckVBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLG1CQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSwwQkFBWUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FB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NSBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlc1xuLy8vIGFuZCBvdGhlciBjb250cmlidXRvcnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBAYXV0aG9yIHRhZ3MuXG4vLy9cbi8vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vL1xuLy8vICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLy9cbi8vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLXV0aWxpdGllcy9kZWZzLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGlicy9oYXd0aW8tb2F1dGgvZGVmcy5kLnRzXCIvPlxuIiwiLy9kZWYgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcblxuaW50ZXJmYWNlIFNtb2tlU2lnbmFscyB7XG4gIGNvbnZlcnQob2JqOmFueSwgaGFuZGxlcnM/OmFueSk7XG59O1xuXG5pbnRlcmZhY2UgRXZlbnRFbmFibGVkIHtcbiAgb24oZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9uY2UoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9mZihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgZW1pdChldmVudE5hbWU6c3RyaW5nLCAuLi5hcmdzOmFueVtdKTtcbn07XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgY2xhc3MgY29uc3RzIHtcbiAgICBnZXQgTkFNRVNQQUNFX1NUT1JBR0VfS0VZKCk6c3RyaW5nIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBDb25zdGFudHMgPSBuZXcgY29uc3RzKCk7XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9uIHtcbiAgICBwcm90bz86c3RyaW5nO1xuICAgIGhvc3RQb3J0OnN0cmluZztcbiAgICBwcmVmaXg6c3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9ucyB7XG4gICAgb3BlbnNoaWZ0PzogQXBpTG9jYXRpb247XG4gICAgazhzPzogQXBpTG9jYXRpb247XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNDb25maWcge1xuICAgIG1hc3Rlcl91cmk/OiBzdHJpbmc7XG4gICAgYXBpPzogQXBpTG9jYXRpb25zO1xuICAgIG9wZW5zaGlmdD86IE9wZW5TaGlmdE9BdXRoQ29uZmlnO1xuICAgIGdvb2dsZT86IEdvb2dsZU9BdXRoQ29uZmlnO1xuICAgIGtleWNsb2FrPzogS2V5Q2xvYWtBdXRoQ29uZmlnO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuU2hpZnRPQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlT0F1dGhDb25maWcge1xuICAgIGF1dGhlbnRpY2F0aW9uVVJJOnN0cmluZztcbiAgICBhdXRob3JpemF0aW9uVVJJOnN0cmluZztcbiAgICBjbGllbnRJZDpzdHJpbmc7XG4gICAgY2xpZW50U2VjcmV0OnN0cmluZztcbiAgICByZWRpcmVjdFVSSTpzdHJpbmc7XG4gICAgc2NvcGU6c3RyaW5nO1xuICAgIHRva2VuVVJJPzpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEtleUNsb2FrQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc1N0YXRlIHtcbiAgICBuYW1lc3BhY2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHNlbGVjdGVkTmFtZXNwYWNlOiBzdHJpbmc7XG4gIH1cblxuXHRleHBvcnQgY2xhc3MgV2F0Y2hUeXBlcyB7XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVORFBPSU5UUygpOnN0cmluZyB7IHJldHVybiBcImVuZHBvaW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VSVklDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lc3BhY2VkVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGs4c1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkVORFBPSU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFUlZJQ0VTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlBST0pFQ1RTLFxuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblx0XG5cdGV4cG9ydCBjbGFzcyBXYXRjaEFjdGlvbnMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFEREVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiQURERURcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH1cblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBPYmplY3RNYXAge1xuXHRcdFt1aWQ6c3RyaW5nXTogYW55O1x0XHRcblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBXYXRjaGVyU2VydmljZSB7XG5cdFx0aGFzV2ViU29ja2V0OiBib29sZWFuO1xuXHRcdGFkZEN1c3RvbWl6ZXI6ICh0eXBlOiBzdHJpbmcsIGN1c3RvbWl6ZXI6IChvYmo6YW55KSA9PiB2b2lkKSA9PiB2b2lkO1xuXHRcdGdldFR5cGVzOiAoKSA9PiBBcnJheTxzdHJpbmc+O1xuXHRcdGdldE5hbWVzcGFjZTogKCkgPT4gc3RyaW5nO1xuXHRcdHNldE5hbWVzcGFjZTogKG5hbWVzcGFjZTogc3RyaW5nKSA9PiB2b2lkO1xuXHRcdGdldE9iamVjdHM6ICh0eXBlOiBzdHJpbmcpID0+IEFycmF5PGFueT47XG5cdFx0Z2V0T2JqZWN0TWFwOiAodHlwZTogc3RyaW5nKSA9PiBPYmplY3RNYXA7XG5cdFx0YWRkQWN0aW9uOiAodHlwZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgZm46IChvYmo6YW55KSA9PiB2b2lkKSA9PiB2b2lkO1xuXHRcdHJlZ2lzdGVyTGlzdGVuZXI6IChmbjoob2JqZWN0czpPYmplY3RNYXApID0+IHZvaWQpID0+IHZvaWQ7XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVQb2Qge1xuICAgIGlkOnN0cmluZztcbiAgICBuYW1lc3BhY2U6c3RyaW5nO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcblxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEFwaVZlcnNpb24gPSBLOFNfQVBJX1ZFUlNJT047XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE9TQXBpVmVyc2lvbiA9IE9TX0FQSV9WRVJTSU9OO1xuXG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE5hbWVzcGFjZSA9IFwiZGVmYXVsdFwiO1xuICBleHBvcnQgdmFyIGFwcFN1ZmZpeCA9IFwiLmFwcFwiO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQga3ViZXJuZXRlcyBzZWxlY3RlZCBuYW1lc3BhY2Ugb3IgdGhlIGRlZmF1bHQgb25lXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UoKSB7XG4gICAgdmFyIGluamVjdG9yID0gSGF3dGlvQ29yZS5pbmplY3RvcjtcbiAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgIHZhciBLdWJlcm5ldGVzU3RhdGUgPSBpbmplY3Rvci5nZXQoXCJLdWJlcm5ldGVzU3RhdGVcIikgfHwge307XG4gICAgICByZXR1cm4gS3ViZXJuZXRlc1N0YXRlLnNlbGVjdGVkTmFtZXNwYWNlIHx8IGRlZmF1bHROYW1lc3BhY2U7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0TmFtZXNwYWNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCkge1xuICAgIHZhciBucyA9IGN1cnJlbnRLdWJlcm5ldGVzTmFtZXNwYWNlKCk7XG4gICAgaWYgKG5zKSB7XG4gICAgICByZXR1cm4gXCIvbmFtZXNwYWNlcy9cIiArIG5zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpUHJlZml4KCkge1xuICAgIHZhciBwcmVmaXggPSBDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ2s4cycsICdwcmVmaXgnXSk7XG4gICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgIHByZWZpeCA9IEs4U19QUkVGSVg7XG4gICAgfVxuICAgIHJldHVybiBDb3JlLnRyaW1MZWFkaW5nKHByZWZpeCwgJy8nKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICB2YXIgcHJlZml4ID0gQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdvcGVuc2hpZnQnLCAncHJlZml4J10pO1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICBwcmVmaXggPSBPU19QUkVGSVg7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnRyaW1MZWFkaW5nKHByZWZpeCwgJy8nKTtcbiAgICAvKlxuICAgICAgVE9ETyAtIG1heSBub3QgaGF2ZSBhIGN1cnJlbnRseSBzZWxlY3RlZCBuYW1lc3BhY2VcbiAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTiwgXCJwcm94eVwiLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcInNlcnZpY2VzL3RlbXBsYXRlc1wiLCBhbnN3ZXIpO1xuICAgIH1cbiAgICAqL1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIE9TX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvc0FwaVByZWZpeCgpLCBLOFNfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICBpZiAoa2luZCA9PT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSB7XG4gICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9yQ3JlYXRlT2JqZWN0KG9iamVjdCwgS3ViZXJuZXRlc01vZGVsLCBzdWNjZXNzPzogKGRhdGEpID0+IHZvaWQsIGVycm9yPzogKGVycm9yKSA9PiB2b2lkKSB7XG4gICAgdmFyIGtpbmQgPSBnZXRLaW5kKG9iamVjdCk7XG4gICAgaWYgKGtpbmQgPT09IFwiTGlzdFwiKSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgaXMgYSBsaXN0LCBkZXBsb3lpbmcgYWxsIG9iamVjdHNcIik7XG4gICAgICBfLmZvckVhY2gob2JqZWN0Lml0ZW1zLCAob2JqKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkRlcGxveWluZzogXCIsIG9iaik7XG4gICAgICAgIHVwZGF0ZU9yQ3JlYXRlT2JqZWN0KG9iaiwgS3ViZXJuZXRlc01vZGVsLCBzdWNjZXNzLCBlcnJvcik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFraW5kKSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3Q6IFwiLCBvYmplY3QsIFwiIGhhcyBubyBvYmplY3QgdHlwZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAga2luZCA9IGtpbmQudG9Mb3dlckNhc2UoKS5wbHVyYWxpemUoKTtcbiAgICB2YXIgcmVzb3VyY2UgPSBLdWJlcm5ldGVzTW9kZWxba2luZCArICdSZXNvdXJjZSddO1xuICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIlVuYWJsZSB0byBmaW5kIHJlc291cmNlIGZvciBraW5kOiBcIiwga2luZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuYW1lID0gZ2V0TmFtZShvYmplY3QpO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGhhcyBubyBuYW1lOiBcIiwgb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNVcGRhdGUgPSBfLmFueShLdWJlcm5ldGVzTW9kZWxba2luZF0sIChuKSA9PiBuID09PSBuYW1lKVxuICAgIHZhciBhY3Rpb24gPSBpc1VwZGF0ZSA/IFwiTW9kaWZpZWRcIiA6IFwiQWRkZWRcIjtcblxuICAgIHZhciBzdWNjZXNzSW50ZXJuYWwgPSAoZGF0YSkgPT4ge1xuICAgICAgbG9nLmRlYnVnKGFjdGlvbiwgZGF0YSk7XG4gICAgICBpZiAoIWlzVXBkYXRlKSB7XG4gICAgICAgIEt1YmVybmV0ZXNNb2RlbFtraW5kXS5wdXNoKGRhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgc3VjY2VzcyhkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBlcnJvckludGVybmFsID0gKGVycikgPT4ge1xuICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGFkZC9tb2RpZnkgb2JqZWN0OiBcIiwgb2JqZWN0LCBcIiBlcnJvcjogXCIsIGVycik7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzVXBkYXRlKSB7XG4gICAgICBsb2cuZGVidWcoXCJPYmplY3QgYWxyZWFkeSBleGlzdHMsIHVwZGF0aW5nLi4uXCIpO1xuICAgICAgcmVzb3VyY2Uuc2F2ZSh7IGlkOiBuYW1lIH0sIG9iamVjdCwgc3VjY2Vzc0ludGVybmFsLCBlcnJvckludGVybmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGRvZXNuJ3QgZXhpc3QsIGNyZWF0aW5nLi4uXCIpO1xuICAgICAgcmVzb3VyY2UuY3JlYXRlKHt9LCBvYmplY3QsIHN1Y2Nlc3NJbnRlcm5hbCwgZXJyb3JJbnRlcm5hbCk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc291cmNlKHRoaW5nOnN0cmluZywgdXJsVGVtcGxhdGU6c3RyaW5nLCAkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UsIEt1YmVybmV0ZXNNb2RlbCkge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhGb3JLaW5kKHRoaW5nKTtcbiAgICBpZiAoIXByZWZpeCkge1xuICAgICAgbG9nLmRlYnVnKFwiSW52YWxpZCB0eXBlIGdpdmVuOiBcIiwgdGhpbmcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtcyA9IDxhbnk+IHtcbiAgICAgIG5hbWVzcGFjZTogY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2VcbiAgICB9XG4gICAgaWYgKHRoaW5nID09PSBcIm5hbWVzcGFjZXNcIikge1xuICAgICAgcGFyYW1zID0ge307XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4LCB1cmxUZW1wbGF0ZSk7XG4gICAgbG9nLmRlYnVnKFwiVXJsIGZvciBcIiwgdGhpbmcsIFwiOiBcIiwgdXJsKTtcbiAgICB2YXIgcmVzb3VyY2UgPSAkcmVzb3VyY2UodXJsLCBudWxsLCB7XG4gICAgICBxdWVyeTogeyBtZXRob2Q6ICdHRVQnLCBpc0FycmF5OiBmYWxzZSwgcGFyYW1zOiBwYXJhbXN9LFxuICAgICAgY3JlYXRlOiB7IG1ldGhvZDogJ1BPU1QnLCBwYXJhbXM6IHBhcmFtc30sXG4gICAgICBzYXZlOiB7IG1ldGhvZDogJ1BVVCcsIHBhcmFtczogcGFyYW1zfSxcbiAgICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBwYXJhbXM6IF8uZXh0ZW5kKHtcbiAgICAgICAgaWQ6ICdAaWQnXG4gICAgICB9LCBwYXJhbXMpfVxuICAgIH0pO1xuICAgIHJldHVybiByZXNvdXJjZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpbWFnZVJlcG9zaXRvcmllc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvaW1hZ2VzdHJlYW1zXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGRlcGxveW1lbnRDb25maWdzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9kZXBsb3ltZW50Y29uZmlnc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZHNMb2dzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9wcm94eS9idWlsZGxvZ3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9idWlsZHNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWdIb29rc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvYnVpbGRjb25maWdob29rc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBidWlsZENvbmZpZ3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2J1aWxkY29uZmlnc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiByb3V0ZXNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL3JvdXRlc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZXNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL3RlbXBsYXRlc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1VybCh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gd3NTY2hlbWUodXJsKTtcbiAgICByZXR1cm4gbmV3IFVSSSh1cmwpLnNjaGVtZShwcm90b2NvbCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0VUlEKGxlZnQpID09PSBnZXRVSUQocmlnaHQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IGRlZmF1bHROYW1lc3BhY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvL3ZhciBmYWJyaWNEb21haW4gPSBGYWJyaWMuam14RG9tYWluO1xuICB2YXIgZmFicmljRG9tYWluID0gXCJpby5mYWJyaWM4XCI7XG4gIGV4cG9ydCB2YXIgbWJlYW4gPSBmYWJyaWNEb21haW4gKyBcIjp0eXBlPUt1YmVybmV0ZXNcIjtcbiAgZXhwb3J0IHZhciBtYW5hZ2VyTUJlYW4gPSBmYWJyaWNEb21haW4gKyBcIjp0eXBlPUt1YmVybmV0ZXNNYW5hZ2VyXCI7XG4gIGV4cG9ydCB2YXIgYXBwVmlld01CZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1BcHBWaWV3XCI7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzS3ViZXJuZXRlcyh3b3Jrc3BhY2UpIHtcbiAgICAvLyByZXR1cm4gd29ya3NwYWNlLnRyZWVDb250YWluc0RvbWFpbkFuZFByb3BlcnRpZXMoZmFicmljRG9tYWluLCB7dHlwZTogXCJLdWJlcm5ldGVzXCJ9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIod29ya3NwYWNlKSB7XG4gICAgLy8gcmV0dXJuIHdvcmtzcGFjZS50cmVlQ29udGFpbnNEb21haW5BbmRQcm9wZXJ0aWVzKGZhYnJpY0RvbWFpbiwge3R5cGU6IFwiS3ViZXJuZXRlc1RlbXBsYXRlTWFuYWdlclwifSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNBcHBWaWV3KHdvcmtzcGFjZSkge1xuICAgIC8vIHJldHVybiB3b3Jrc3BhY2UudHJlZUNvbnRhaW5zRG9tYWluQW5kUHJvcGVydGllcyhmYWJyaWNEb21haW4sIHt0eXBlOiBcIkFwcFZpZXdcIn0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEpzb24oJHNjb3BlLCBpZCwgY29sbGVjdGlvbikge1xuICAgICRzY29wZS5pZCA9IGlkO1xuICAgIGlmICghJHNjb3BlLmZldGNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgJHNjb3BlLmpzb24gPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gY29sbGVjdGlvbi5maW5kKChpdGVtKSA9PiB7IHJldHVybiBnZXROYW1lKGl0ZW0pID09PSBpZDsgfSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgICRzY29wZS5qc29uID0gYW5ndWxhci50b0pzb24oaXRlbSwgdHJ1ZSk7XG4gICAgICAkc2NvcGUuaXRlbSA9IGl0ZW07XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICRzY29wZS5qc29uID0gJyc7XG4gICAgICAkc2NvcGUuaXRlbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIGxpbmsgVVJMIGZvciBlaXRoZXIgdGhlIHNlcnZpY2UgbmFtZSBvciB0aGUgc2VydmljZSBvYmplY3RcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlTGlua1VybChzZXJ2aWNlKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoc2VydmljZSkpIHtcbiAgICAgIHZhciBwb3J0YWxJUCA9IHNlcnZpY2UuJGhvc3Q7XG4gICAgICAvLyBsZXRzIGFzc3VtZSBubyBjdXN0b20gcG9ydCBmb3Igbm93IGZvciBleHRlcm5hbCByb3V0ZXNcbiAgICAgIHZhciBwb3J0ID0gbnVsbDtcbiAgICAgIHZhciBwcm90b2NvbCA9IFwiaHR0cDovL1wiO1xuICAgICAgdmFyIHNwZWMgPSBzZXJ2aWNlLnNwZWM7XG4gICAgICBpZiAoc3BlYykge1xuICAgICAgICBpZiAoIXBvcnRhbElQKSB7XG4gICAgICAgICAgcG9ydGFsSVAgPSBzcGVjLnBvcnRhbElQO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNIdHRwcyA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFzSHR0cCA9IGZhbHNlO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goc3BlYy5wb3J0cywgKHBvcnRTcGVjKSA9PiB7XG4gICAgICAgICAgdmFyIHAgPSBwb3J0U3BlYy5wb3J0O1xuICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICBpZiAocCA9PT0gNDQzKSB7XG4gICAgICAgICAgICAgIGhhc0h0dHBzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gODApIHtcbiAgICAgICAgICAgICAgaGFzSHR0cCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgICAgcG9ydCA9IHA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3J0YWxJUCkge1xuICAgICAgICBpZiAoaGFzSHR0cHMpIHtcbiAgICAgICAgICByZXR1cm4gXCJodHRwczovL1wiICsgcG9ydGFsSVA7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzSHR0cCkge1xuICAgICAgICAgIHJldHVybiBcImh0dHA6Ly9cIiArIHBvcnRhbElQO1xuICAgICAgICB9IGVsc2UgaWYgKHBvcnQpIHtcbiAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBwb3J0YWxJUCArIFwiOlwiICsgcG9ydCArIFwiL1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcm90b2NvbCArIHBvcnRhbElQO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZXJ2aWNlKSB7XG4gICAgICB2YXIgc2VydmljZUlkID0gc2VydmljZS50b1N0cmluZygpO1xuICAgICAgaWYgKHNlcnZpY2VJZCkge1xuICAgICAgICB2YXIgU2VydmljZVJlZ2lzdHJ5ID0gZ2V0U2VydmljZVJlZ2lzdHJ5KCk7XG4gICAgICAgIGlmIChTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgICAgICByZXR1cm4gU2VydmljZVJlZ2lzdHJ5LnNlcnZpY2VMaW5rKHNlcnZpY2VJZCkgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgbGlzdCBvZiBwb2RzIGxldHMgaXRlcmF0ZSB0aHJvdWdoIHRoZW0gYW5kIGZpbmQgYWxsIHBvZHMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqIGFuZCByZXR1cm4gY291bnRlcnMgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGUgcG9kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9kQ291bnRlcnMoc2VsZWN0b3IsIHBvZHMsIG91dHB1dFBvZHMgPSBbXSwgcG9kTGlua1F1ZXJ5ID0gbnVsbCkge1xuICAgIHZhciBmaWx0ZXJGbjtcbiAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgZmlsdGVyRm4gPSBzZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyRm4gPSAocG9kKSA9PiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGdldExhYmVscyhwb2QpKTtcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHtcbiAgICAgIHBvZHNMaW5rOiBcIlwiLFxuICAgICAgdmFsaWQ6IDAsXG4gICAgICB3YWl0aW5nOiAwLFxuICAgICAgZXJyb3I6IDBcbiAgICB9O1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFwb2RMaW5rUXVlcnkpIHtcbiAgICAgICAgcG9kTGlua1F1ZXJ5ID0gbGFiZWxzVG9TdHJpbmcoc2VsZWN0b3IsIFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIGFuc3dlci5wb2RzTGluayA9IENvcmUudXJsKFwiL2t1YmVybmV0ZXMvcG9kcz9xPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBvZExpbmtRdWVyeSkpO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHBvZHMsIHBvZCA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJGbihwb2QpKSB7XG4gICAgICAgICAgb3V0cHV0UG9kcy5wdXNoKHBvZCk7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IGdldFN0YXR1cyhwb2QpO1xuICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIikpIHtcbiAgICAgICAgICAgICAgYW5zd2VyLnZhbGlkICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJ3YWl0XCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJwZW5kXCIpKSB7XG4gICAgICAgICAgICAgIGFuc3dlci53YWl0aW5nICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJ0ZXJtXCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJlcnJvclwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwiZmFpbFwiKSkge1xuICAgICAgICAgICAgICBhbnN3ZXIuZXJyb3IgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5zd2VyLmVycm9yICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4ganNvbiBpbnRvIGFuIGFycmF5IG9mIGl0ZW1zLiBJZiB0aGUganNvbiBjb250YWlucyBhIG5lc3RlZCBzZXQgb2YgaXRlbXMgdGhlbiB0aGF0IGlzIHNvcnRlZDsgc28gdGhhdCBzZXJ2aWNlc1xuICAgKiBhcmUgcHJvY2Vzc2VkIGZpcnN0OyB0aGVuIHR1cm5lZCBpbnRvIGFuIGFycmF5LiBPdGhlcndpc2UgdGhlIGpzb24gaXMgcHV0IGludG8gYW4gYXJyYXkgc28gaXQgY2FuIGJlIHByb2Nlc3NlZCBwb2x5bW9ycGhpY2FsbHlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S3ViZXJuZXRlc0pzb25Ub0l0ZW1zKGpzb24pIHtcbiAgICB2YXIgaXRlbXMgPSBqc29uLml0ZW1zO1xuICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAvLyBUT0RPIHdlIGNvdWxkIGNoZWNrIGZvciBMaXN0IG9yIENvbmZpZyB0eXBlcyBoZXJlIGFuZCB3YXJuIGlmIG5vdFxuXG4gICAgICAvLyBzb3J0IHRoZSBzZXJ2aWNlcyBmaXJzdFxuICAgICAgdmFyIGFuc3dlciA9IFtdO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcIlNlcnZpY2VcIikge1xuICAgICAgICAgIGFuc3dlci5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCAhPT0gXCJTZXJ2aWNlXCIpIHtcbiAgICAgICAgICBhbnN3ZXIucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2pzb25dO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1YxYmV0YTFPcjIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRBcGlWZXJzaW9uID09PSBcInYxYmV0YTFcIiB8fCBkZWZhdWx0QXBpVmVyc2lvbiA9PT0gXCJ2MWJldGEyXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpbmsgdG8gdGhlIGRldGFpbCBwYWdlIGZvciB0aGUgZ2l2ZW4gZW50aXR5XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZW50aXR5UGFnZUxpbmsoZW50aXR5KSB7XG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgdmFyIGlkID0gZ2V0TmFtZShlbnRpdHkpO1xuICAgICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgICBpZiAoa2luZCAmJiBpZCkge1xuICAgICAgICB2YXIgcGF0aCA9IGtpbmQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBraW5kLnN1YnN0cmluZygxKSArIFwic1wiO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWlzSWdub3JlTmFtZXNwYWNlS2luZChraW5kKSkge1xuICAgICAgICAgIHJldHVybiBDb3JlLnVybChVcmxIZWxwZXJzLmpvaW4oJy9rdWJlcm5ldGVzL25hbWVzcGFjZScsIG5hbWVzcGFjZSwgcGF0aCwgaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQ29yZS51cmwoVXJsSGVscGVycy5qb2luKCcva3ViZXJuZXRlcycsIHBhdGgsIGlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZUtpbmRUb1VyaVBhdGgoa2luZCkge1xuICAgIHZhciBraW5kUGF0aCA9IGtpbmQudG9Mb3dlckNhc2UoKSArIFwic1wiO1xuICAgIGlmIChraW5kUGF0aCA9PT0gXCJyZXBsaWNhdGlvbkNvbnRyb2xsZXJzXCIgJiYgIWlzVjFiZXRhMU9yMigpKSB7XG4gICAgICBraW5kUGF0aCA9IFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiO1xuICAgIH1cbiAgICByZXR1cm4ga2luZFBhdGg7XG4gIH1cblxuICBmdW5jdGlvbiBpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCkge1xuICAgIHJldHVybiBraW5kID09PSBcIkhvc3RcIiB8fCBraW5kID09PSBcIk1pbmlvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgVVJMIGZvciB0aGUga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmQsIG5hbWVzcGFjZSA9IG51bGwsIHBhdGggPSBudWxsKSB7XG4gICAgdmFyIHBhdGhTZWdtZW50ID0gXCJcIjtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIiArIENvcmUudHJpbUxlYWRpbmcocGF0aCwgXCIvXCIpO1xuICAgIH1cbiAgICB2YXIga2luZFBhdGggPSByZXNvdXJjZUtpbmRUb1VyaVBhdGgoa2luZCk7XG4gICAgdmFyIGlnbm9yZU5hbWVzcGFjZSA9IGlzSWdub3JlTmFtZXNwYWNlS2luZChraW5kKTtcbiAgICBpZiAoaXNWMWJldGExT3IyKCkgfHwgaWdub3JlTmFtZXNwYWNlKSB7XG4gICAgICB2YXIgcG9zdGZpeCA9IFwiXCI7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFpZ25vcmVOYW1lc3BhY2UpIHtcbiAgICAgICAgcG9zdGZpeCA9IFwiP25hbWVzcGFjZT1cIiArIG5hbWVzcGFjZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwga2luZFBhdGgsIHBhdGhTZWdtZW50LCBwb3N0Zml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9uYW1lc3BhY2VzL1wiLCBuYW1lc3BhY2UgLCBraW5kUGF0aCwgcGF0aFNlZ21lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFzZSBVUkwgZm9yIHRoZSBraW5kIG9mIGt1YmVybmV0ZXMgcmVzb3VyY2Ugb3IgbnVsbCBpZiBpdCBjYW5ub3QgYmUgZm91bmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQoS3ViZXJuZXRlc0FwaVVSTCwganNvbikge1xuICAgIHZhciBraW5kID0ganNvbi5raW5kO1xuICAgIGlmIChraW5kKSB7XG4gICAgICByZXR1cm4ga3ViZXJuZXRlc1VybEZvcktpbmQoS3ViZXJuZXRlc0FwaVVSTCwga2luZCwganNvbi5uYW1lc3BhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cud2FybihcIklnbm9yaW5nIG1pc3Npbmcga2luZCBcIiArIGtpbmQgKyBcIiBmb3Iga3ViZXJuZXRlcyBqc29uOiBcIiArIGFuZ3VsYXIudG9Kc29uKGpzb24pKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzUHJveHlVcmxGb3JTZXJ2aWNlKEt1YmVybmV0ZXNBcGlVUkwsIHNlcnZpY2UsIHBhdGggPSBudWxsKSB7XG4gICAgdmFyIHBhdGhTZWdtZW50ID0gXCJcIjtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIiArIENvcmUudHJpbUxlYWRpbmcocGF0aCwgXCIvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoU2VnbWVudCA9IFwiL1wiO1xuICAgIH1cbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKHNlcnZpY2UpO1xuICAgIGlmIChpc1YxYmV0YTFPcjIoKSkge1xuICAgICAgdmFyIHBvc3RmaXggPSBcIj9uYW1lc3BhY2U9XCIgKyBuYW1lc3BhY2U7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIFwiL2FwaS9cIiArIGRlZmF1bHRBcGlWZXJzaW9uICsgXCIvcHJveHlcIiArIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCkgKyBcIi9zZXJ2aWNlcy9cIiArIGdldE5hbWUoc2VydmljZSkgKyBwYXRoU2VnbWVudCArIHBvc3RmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIFwiL2FwaS9cIiArIGRlZmF1bHRBcGlWZXJzaW9uICsgXCIvcHJveHkvbmFtZXNwYWNlcy9cIiArIG5hbWVzcGFjZSArIFwiL3NlcnZpY2VzL1wiICsgZ2V0TmFtZShzZXJ2aWNlKSArIHBhdGhTZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWdSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihidWlsZENvbmZpZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZXBsb3ltZW50Q29uZmlnUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oZGVwbG95bWVudENvbmZpZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpbWFnZVJlcG9zaXRvcnlSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihpbWFnZVJlcG9zaXRvcmllc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRMb2dzUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRzTG9nc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGFwcGxpY2F0aW9uIEpTT05cbiAgICovXG4gICAgICAvKlxuICBleHBvcnQgZnVuY3Rpb24gcnVuQXBwKCRsb2NhdGlvbiwgJHNjb3BlLCAkaHR0cCwgS3ViZXJuZXRlc0FwaVVSTCwganNvbiwgbmFtZSA9IFwiQXBwXCIsIG9uU3VjY2Vzc0ZuID0gbnVsbCwgbmFtZXNwYWNlID0gbnVsbCwgb25Db21wbGV0ZUZuID0gbnVsbCkge1xuICAgIGlmIChqc29uKSB7XG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhqc29uKSkge1xuICAgICAgICBqc29uID0gYW5ndWxhci5mcm9tSnNvbihqc29uKTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBuYW1lIHx8IFwiQXBwXCI7XG4gICAgICB2YXIgcG9zdGZpeCA9IG5hbWVzcGFjZSA/IFwiIGluIG5hbWVzcGFjZSBcIiArIG5hbWVzcGFjZSA6IFwiXCI7XG5cbiAgICAgIHZhciBpdGVtcyA9IGNvbnZlcnRLdWJlcm5ldGVzSnNvblRvSXRlbXMoanNvbik7XG4gICAgICBhbmd1bGFyLmZvckVhY2goaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgIHZhciB1cmwgPSBrdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQoS3ViZXJuZXRlc0FwaVVSTCwgaXRlbSk7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAkaHR0cC5wb3N0KHVybCwgaXRlbSkuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJHb3Qgc3RhdHVzOiBcIiArIHN0YXR1cyArIFwiIG9uIHVybDogXCIgKyB1cmwgKyBcIiBkYXRhOiBcIiArIGRhdGEgKyBcIiBhZnRlciBwb3N0aW5nOiBcIiArIGFuZ3VsYXIudG9Kc29uKGl0ZW0pKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihvbkNvbXBsZXRlRm4pKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZUZuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQ29yZS4kYXBwbHkoJHNjb3BlKTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IGRhdGEucmVhc29uO1xuICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcIkFscmVhZHlFeGlzdHNcIikge1xuICAgICAgICAgICAgICAgIC8vIGxldHMgaWdub3JlIGR1cGxpY2F0ZXNcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJlbnRpdHkgYWxyZWFkeSBleGlzdHMgYXQgXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBQT1NUIHRvIFwiICsgdXJsICsgXCIgZ290IHN0YXR1czogXCIgKyBzdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBzYXZlIFwiICsgdXJsICsgXCIgc3RhdHVzOiBcIiArIHN0YXR1cyArIFwiIHJlc3BvbnNlOiBcIiArIGFuZ3VsYXIudG9Kc29uKGRhdGEsIHRydWUpKTtcbiAgICAgICAgICAgIENvcmUubm90aWZpY2F0aW9uKCdlcnJvcicsIG1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgKi9cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmljZSByZWdpc3RyeVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZpY2VSZWdpc3RyeSgpIHtcbiAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgIHJldHVybiBpbmplY3RvciA/IGluamVjdG9yLmdldChcIlNlcnZpY2VSZWdpc3RyeVwiKSA6IG51bGw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGluayB0byB0aGUga2liYW5hIGxvZ3Mgd2ViIGFwcGxpY2F0aW9uXG4gICAqL1xuICAvKlxuICBleHBvcnQgZnVuY3Rpb24ga2liYW5hTG9nc0xpbmsoU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgdmFyIGxpbmsgPSBTZXJ2aWNlUmVnaXN0cnkuc2VydmljZUxpbmsoa2liYW5hU2VydmljZU5hbWUpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBpZiAoIWxpbmsuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIGxpbmsgKz0gXCIvXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluayArIFwiIy9kYXNoYm9hcmQvRmFicmljOFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgKi9cblxuICAvKlxuICBleHBvcnQgZnVuY3Rpb24gb3BlbkxvZ3NGb3JQb2RzKFNlcnZpY2VSZWdpc3RyeSwgJHdpbmRvdywgbmFtZXNwYWNlLCBwb2RzKSB7XG4gICAgdmFyIGxpbmsgPSBraWJhbmFMb2dzTGluayhTZXJ2aWNlUmVnaXN0cnkpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICB2YXIgcXVlcnkgPSBcIlwiO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChwb2RzLCAoaXRlbSkgPT4ge1xuICAgICAgICB2YXIgaWQgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICB2YXIgc3BhY2UgPSBxdWVyeSA/IFwiIE9SIFwiIDogXCJcIjtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIHF1ZXJ5ICs9IHNwYWNlICsgJ1wiJyArIGlkICsgJ1wiJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgIHF1ZXJ5ID0gXCIoXCIgKyBxdWVyeSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5ID0gJ2t1YmVybmV0ZXMubmFtZXNwYWNlOlwiJyArIG5hbWVzcGFjZSArICdcIiBBTkQga3ViZXJuZXRlcy5wb2RfbmFtZTonICsgcXVlcnk7XG4gICAgICAgIGxpbmsgKz0gXCI/X2E9KHF1ZXJ5OihxdWVyeV9zdHJpbmc6KHF1ZXJ5OidcIiArIHF1ZXJ5ICsgXCInKSkpXCI7XG4gICAgICAgIHZhciBuZXdXaW5kb3cgPSAkd2luZG93Lm9wZW4obGluaywgXCJ2aWV3TG9nc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgKi9cblxuICBleHBvcnQgZnVuY3Rpb24gcmVzaXplQ29udHJvbGxlcigkaHR0cCwgS3ViZXJuZXRlc0FwaVVSTCwgcmVwbGljYXRpb25Db250cm9sbGVyLCBuZXdSZXBsaWNhcywgb25Db21wbGV0ZUZuID0gbnVsbCkge1xuICAgIHZhciBpZCA9IGdldE5hbWUocmVwbGljYXRpb25Db250cm9sbGVyKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKHJlcGxpY2F0aW9uQ29udHJvbGxlcikgfHwgXCJcIjtcbiAgICB2YXIgdXJsID0ga3ViZXJuZXRlc1VybEZvcktpbmQoS3ViZXJuZXRlc0FwaVVSTCwgXCJSZXBsaWNhdGlvbkNvbnRyb2xsZXJcIiwgbmFtZXNwYWNlLCBpZCk7XG4gICAgJGh0dHAuZ2V0KHVybCkuXG4gICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHZhciBkZXNpcmVkU3RhdGUgPSBkYXRhLnNwZWM7XG4gICAgICAgICAgaWYgKCFkZXNpcmVkU3RhdGUpIHtcbiAgICAgICAgICAgIGRlc2lyZWRTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgZGF0YS5zcGVjID0gZGVzaXJlZFN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZXNpcmVkU3RhdGUucmVwbGljYXMgPSBuZXdSZXBsaWNhcztcbiAgICAgICAgICAkaHR0cC5wdXQodXJsLCBkYXRhKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcInVwZGF0ZWQgY29udHJvbGxlciBcIiArIHVybCk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ob25Db21wbGV0ZUZuKSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIHNhdmUgXCIgKyB1cmwgKyBcIiBcIiArIGRhdGEgKyBcIiBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLlxuICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIGxvYWQgXCIgKyB1cmwgKyBcIiBcIiArIGRhdGEgKyBcIiBcIiArIHN0YXR1cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwb2RTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIGdldFN0YXR1cyhwb2QpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbnZlcnRzIGEgZ2l0IHBhdGggaW50byBhbiBhY2Nlc3NpYmxlIFVSTCBmb3IgdGhlIGJyb3dzZXJcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnaXRQYXRoVG9VcmwoaWNvblBhdGgsIGJyYW5jaCA9IFwibWFzdGVyXCIpIHtcbiAgICByZXR1cm4gKEhhd3Rpb0NvcmUuaW5qZWN0b3IuZ2V0KCdBcHBMaWJyYXJ5VVJMJykgfHwgJycpICsgXCIvZ2l0L1wiICsgYnJhbmNoICsgaWNvblBhdGg7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBqc29uIHNjaGVtYVxuICAgKi9cbiAgICAgICAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVNjaGVtYSgpIHtcbiAgICBhbmd1bGFyLmZvckVhY2goc2NoZW1hLmRlZmluaXRpb25zLCAoZGVmaW5pdGlvbiwgbmFtZSkgPT4ge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBkZWZpbml0aW9uLnByb3BlcnRpZXM7XG4gICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICB2YXIgaGlkZVByb3BlcnRpZXMgPSBbXCJjcmVhdGlvblRpbWVzdGFtcFwiLCBcImtpbmRcIiwgXCJhcGlWZXJzaW9uXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiLCBcIm5hbWVzcGFjZVwiLCBcInJlc291cmNlVmVyc2lvblwiLCBcInNlbGZMaW5rXCIsIFwidWlkXCJdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goaGlkZVByb3BlcnRpZXMsIChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVtcImhpZGRlblwiXSAgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChwcm9wZXJ0aWVzLCAocHJvcGVydHksIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIHZhciByZWYgPSBwcm9wZXJ0eVtcIiRyZWZcIl07XG4gICAgICAgICAgdmFyIHR5cGUgPSBwcm9wZXJ0eVtcInR5cGVcIl07XG4gICAgICAgICAgaWYgKHJlZiAmJiAoIXR5cGUgfHwgdHlwZSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgIHByb3BlcnR5W1widHlwZVwiXSA9IHJlZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gcHJvcGVydHlbXCJpdGVtc1wiXTtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICB2YXIgcmVmID0gaXRlbXNbXCIkcmVmXCJdO1xuICAgICAgICAgICAgICB2YXIgdHlwZSA9IGl0ZW1zW1widHlwZVwiXTtcbiAgICAgICAgICAgICAgaWYgKHJlZiAmJiAoIXR5cGUgfHwgdHlwZSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tcInR5cGVcIl0gPSByZWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzY2hlbWEuZGVmaW5pdGlvbnMub3NfYnVpbGRfV2ViSG9va1RyaWdnZXIucHJvcGVydGllcy5zZWNyZXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICB9KVxuICB9XG4gICovXG5cbiAgLyoqXG4gICAqIExldHMgcmVtb3ZlIGFueSBlbnJpY2hlZCBkYXRhIHRvIGxlYXZlIHRoZSBvcmlnaW5hbCBqc29uIGludGFjdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvUmF3SnNvbihpdGVtKSB7XG4gICAgdmFyIG8gPSBhbmd1bGFyLmNvcHkoaXRlbSk7XG4gICAgYW5ndWxhci5mb3JFYWNoKG8sICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCIkXCIpIHx8IGtleS5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICBkZWxldGUgb1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvLCBudWxsLCAyKTsgLy8gc3BhY2luZyBsZXZlbCA9IDJcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG5kZWNsYXJlIHZhciBPU09BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEdvb2dsZU9BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgX21vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKHBsdWdpbk5hbWUsIFtdKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICAkLmdldFNjcmlwdCgnb3Njb25zb2xlL2NvbmZpZy5qcycpXG4gICAgICAgIC5kb25lKChzY3JpcHQsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuICAgICAgICAgIHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xuICAgICAgICAgICAgdmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gY29uZmlnLm9wZW5zaGlmdDtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XG4gICAgICAgICAgS2V5Y2xvYWtDb25maWcgPSBjb25maWcua2V5Y2xvYWs7XG5cbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGF1dGgubWFzdGVyX3VyaSBubyBsb25nZXIgdXNlZCByaWdodD9cbiAgICAgICAgICAgIC8vIG1hc3RlciA9IE9TT0F1dGhDb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XG4gICAgICAgICAgICAgIHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICBpZiAob2F1dGhfYXV0aG9yaXplX3VyaSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZHggKz0gMztcbiAgICAgICAgICAgICAgICAgIGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcbiAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCghS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgfHwgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPT09IFwiL1wiKSAmJiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXN0ZXIpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJFcnJvciBmZXRjaGluZyBPQVVUSCBjb25maWc6IFwiLCByZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmFsd2F5cygoKSA9PiB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKHBsdWdpbk5hbWUpO1xuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYW5hZ2VzIHRoZSBhcnJheSBvZiBrOHMgb2JqZWN0cyBmb3IgYSBjbGllbnQgaW5zdGFuY2VcbiAgICoqL1xuICBjbGFzcyBPYmplY3RMaXN0IHtcbiAgICBwdWJsaWMgdHJpZ2dlckNoYW5nZWRFdmVudCA9IF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQU5ZLCB0aGlzLl9vYmplY3RzKTtcbiAgICB9LCA1MDAsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdmFyIGxvZ2dlck5hbWUgPSAnazhzLW9iamVjdHMvJyArIChuYW1lc3BhY2UgPyBVcmxIZWxwZXJzLmpvaW4obmFtZXNwYWNlLCBraW5kKSA6IGtpbmQpO1xuICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KGxvZ2dlck5hbWUpO1xuICAgICAgdGhpcy5fZWUgPSBzbW9rZXNpZ25hbHMuY29udmVydCh0aGlzKTtcbiAgICAgIGlmICh0aGlzLmxvZy5lbmFibGVkRm9yKExvZ2dlci5ERUJVRykpIHtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFEREVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJhZGRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLk1PRElGSUVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJtb2RpZmllZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkRFTEVURUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImRlbGV0ZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJvYmplY3RzIGNoYW5nZWQ6IFwiLCBvYmplY3RzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IG9iamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmFtZWRJdGVtKGl0ZW06YW55KSB7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVycyB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgfVxuXG4gICAgc2V0IGxpc3QoX2xpc3Q6T2JqZWN0TGlzdCkge1xuICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGFuZGxlcnMoc2VsZjpXU0hhbmRsZXJzLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyBsb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbG9nLmRlYnVnKFwiQ29ubmVjdGVkOiBcIiwgZXZlbnQpO1xuICAgIH07XG5cbiAgICBvbmNsb3NlKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZXRyaWVzIDwgMyAmJiB0aGlzLmNvbm5lY3RUaW1lICYmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuY29ubmVjdFRpbWUpID4gNTAwMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgbG9nLmRlYnVnKFwid2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBkaXNjb25uZWN0ZWQsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVXJsKTtcbiAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHNlbGYsIHdzKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cuZGVidWcoXCJXYXRjaCBmb3IgXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBmYWlsZWRcIik7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLnNvY2tldCkge1xuICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdhdGNoIFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVcmwpO1xuICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHRoaXMsIHdzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKiovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX3dzVXJsOlVSSTtcbiAgICBwcml2YXRlIF9yZXN0VXJsOlVSSTtcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlcnMgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBsaXN0Ok9iamVjdExpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHRoaXMuX2tpbmQgPSBraW5kO1xuICAgICAgdGhpcy5fbmFtZXNwYWNlID0gbmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gcHJlZml4Rm9yS2luZCh0aGlzLl9raW5kKTtcbiAgICAgIGlmICghcHJlZikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24ga2luZDogJyArIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3RVcmwgPSBuZXcgVVJJKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpO1xuICAgICAgdGhpcy5fd3NVcmwgPSB3c1VybChVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKS5xdWVyeSg8YW55PntcbiAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgIGFjY2Vzc190b2tlbjogSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgV1NIYW5kbGVycyh0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3Qoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3c1VybCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl93c1VybC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICBnZXQgbmFtZXNwYWNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWVzcGFjZTtcbiAgICB9O1xuXG4gICAgc2V0IG5hbWVzcGFjZShuczpzdHJpbmcpIHtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IG5zO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdDtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGltZSBmZXRjaCBvZiB0aGUgZGF0YS4uLlxuICAgIHB1YmxpYyBnZXQoY2I6KGRhdGE6YW55KSA9PiB2b2lkKSB7XG4gICAgICBpZiAoIXRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uY2UoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2IodGhpcy5saXN0Lm9iamVjdHMpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIG5hbWVzcGFjZSA9IGdldE5hbWVzcGFjZShpdGVtKTtcbiAgICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odGhpcy5fcmVzdFVybC50b1N0cmluZygpKTtcbiAgICAgIGlmICh0aGlzLl9raW5kICE9PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMgJiYgbmFtZXNwYWNlICYmICF0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpLCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KCkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1bndhdGNoKGNiOigpID0+IHZvaWQpIHtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJC5hamF4KHVybCwgPGFueT4ge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oaXRlbSksXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSBcIiwgaXRlbSwgXCIganFYSFI6IFwiLCBqcVhIUiwgXCIgdGV4dDogXCIsIHRleHQsIFwiIHN0YXR1czogXCIsIHN0YXR1cyk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gYW5ndWxhci5mcm9tSnNvbihqcVhIUi5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgZXJyb3IocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGRlbGV0ZSBcIiwgaXRlbSwgXCIganFYSFI6IFwiLCBqcVhIUiwgXCIgdGV4dDogXCIsIHRleHQsIFwiIHN0YXR1czogXCIsIHN0YXR1cyk7XG4gICAgICAgICAgdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gYW5ndWxhci5mcm9tSnNvbihqcVhIUi5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgZXJyb3IocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLypcbiAgICogTWFuYWdlcyByZWZlcmVuY2VzIHRvIGNvbGxlY3Rpb24gaW5zdGFuY2VzIHRvIGFsbG93IHRoZW0gdG8gYmUgc2hhcmVkIGJldHdlZW4gdmlld3NcbiAgICovXG4gIGNsYXNzIENsaWVudEluc3RhbmNlIHtcbiAgICBwcml2YXRlIF9yZWZDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uID0gX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVmQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgKyAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCAtIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGlzcG9zYWJsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudCA8PSAwO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24uZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfVxuICB9O1xuXG4gIGludGVyZmFjZSBDbGllbnRNYXAge1xuICAgIFtuYW1lOnN0cmluZ106Q2xpZW50SW5zdGFuY2U7XG4gIH1cblxuICAvKlxuICAgKiBGYWN0b3J5IGltcGxlbWVudGF0aW9uIHRoYXQncyBhdmFpbGFibGUgYXMgYW4gYW5ndWxhciBzZXJ2aWNlXG4gICAqL1xuICBjbGFzcyBLOFNDbGllbnRGYWN0b3J5SW1wbCB7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KCdrOHMtY2xpZW50LWZhY3RvcnknKTtcbiAgICBwcml2YXRlIF9jbGllbnRzID0gPENsaWVudE1hcD4ge307XG4gICAgcHVibGljIGNyZWF0ZShraW5kOiBzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXR1cm5pbmcgZXhpc3RpbmcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoa2luZCwgbmFtZXNwYWNlKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OmFueSwgLi4uaGFuZGxlczphbnlbXSkge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLOFNDbGllbnRGYWN0b3J5JywgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKVxuICB9KTtcblxuXG5cbn1cblxuXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnU2VydmljZVJlZ2lzdHJ5JywgWygpID0+IHtcbiAgICByZXR1cm4gbmV3IFNlcnZpY2VSZWdpc3RyeVNlcnZpY2UoKTtcbiAgfV0pO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgc2ltcGxlIGludGVyZmFjZSB0byBzZXJ2aWNlIGRpc2NvdmVyeSB0aGF0IGNhbiBiZSB1c2VkIGVhcmx5IG9uIGluIHRoZSBhcHBsaWNhdGlvbiBsaWZlY3ljbGUgYmVmb3JlIHRoZVxuICAgKiB1bmRlcmx5aW5nIG1vZGVsIGhhcyBiZWVuIGNyZWF0ZWQgdmlhIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gICAqL1xuICBleHBvcnQgY2xhc3MgU2VydmljZVJlZ2lzdHJ5U2VydmljZSB7XG4gICAgcHJpdmF0ZSBtb2RlbDphbnkgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGEgc2VydmljZSBhdmFpbGFibGUgZm9yIHRoZSBnaXZlbiBJRCBvciBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBoYXNTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIGZvciB0aGUgZ2l2ZW4gc2VydmljZSBuYW1lIChJRCkgb3IgbnVsbCBpZiBpdCBjYW5ub3QgYmUgZm91bmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBsb29rIGZvclxuICAgICAqIEByZXR1cm4ge251bGx9XG4gICAgICovXG4gICAgcHVibGljIGZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSBudWxsO1xuICAgICAgaWYgKHNlcnZpY2VOYW1lKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuZ2V0TW9kZWwoKTtcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IG1vZGVsLmN1cnJlbnROYW1lc3BhY2UoKTtcbiAgICAgICAgICByZXR1cm4gbW9kZWwuZ2V0U2VydmljZShuYW1lc3BhY2UgLHNlcnZpY2VOYW1lKTtcbi8qXG4gICAgICAgIFRPRE8gbGV0cyBvbmx5IGxvb2sgaW4gdGhlIGN1cnJlbnQgbmFtZXNwYWNlXG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChtb2RlbC5zZXJ2aWNlcywgKHNlcnZpY2UpID0+IHtcbiAgICAgICAgICBpZiAoc2VydmljZU5hbWUgPT09IGdldE5hbWUoc2VydmljZSkpIHtcbiAgICAgICAgICAgIGFuc3dlciA9IHNlcnZpY2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VydmljZSBsaW5rIGZvciB0aGUgZ2l2ZW4gc2VydmljZSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VydmljZU5hbWUgdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2VcbiAgICAgKiBAcmV0dXJuIHtudWxsfVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXJ2aWNlTGluayhzZXJ2aWNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHZhciBzZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZShzZXJ2aWNlTmFtZSk7XG4gICAgICByZXR1cm4gc2VydmljZUxpbmtVcmwoc2VydmljZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRNb2RlbCgpOmFueSB7XG4gICAgICB2YXIgYW5zd2VyID0gdGhpcy5tb2RlbDtcbiAgICAgIC8vIGxldHMgYWxsb3cgbGF6eSBsb2FkIHNvIHdlIGNhbiBiZSBpbnZva2VkIGJlZm9yZSB0aGUgaW5qZWN0b3IgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgaWYgKCFhbnN3ZXIpIHtcbiAgICAgICAgdmFyIGluamVjdG9yID0gSGF3dGlvQ29yZS5pbmplY3RvcjtcbiAgICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgdGhpcy5tb2RlbCA9IGluamVjdG9yLmdldCgnS3ViZXJuZXRlc01vZGVsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFuc3dlciA9IHRoaXMubW9kZWw7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
