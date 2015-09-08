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
    KubernetesAPI.context = '/kubernetes';
    KubernetesAPI.hash = '#' + KubernetesAPI.context;
    KubernetesAPI.defaultRoute = KubernetesAPI.hash + '/apps';
    KubernetesAPI.pluginName = 'KubernetesAPI';
    KubernetesAPI.pluginPath = 'plugins/kubernetes-api/';
    KubernetesAPI.templatePath = KubernetesAPI.pluginPath + 'html/';
    KubernetesAPI.log = Logger.get(KubernetesAPI.pluginName);
    KubernetesAPI.keepPollingModel = true;
    KubernetesAPI.defaultIconUrl = Core.url("/img/kubernetes.svg");
    KubernetesAPI.hostIconUrl = Core.url("/img/host.svg");
    KubernetesAPI.osConfig = undefined;
    KubernetesAPI.masterUrl = "";
    KubernetesAPI.defaultApiVersion = "v1";
    KubernetesAPI.defaultOSApiVersion = "v1";
    KubernetesAPI.labelFilterTextSeparator = ",";
    KubernetesAPI.defaultNamespace = "default";
    KubernetesAPI.appSuffix = ".app";
    KubernetesAPI.kibanaServiceName = "kibana";
    KubernetesAPI.fabric8ForgeServiceName = "fabric8-forge";
    KubernetesAPI.gogsServiceName = "gogs";
    KubernetesAPI.isOpenShift = true;
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiGlobals.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
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
            prefix = 'api';
        }
        return Core.trimLeading(prefix, '/');
    }
    KubernetesAPI.apiPrefix = apiPrefix;
    function osApiPrefix() {
        var prefix = Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']);
        if (!prefix) {
            prefix = 'oapi';
        }
        var answer = Core.trimLeading(prefix, '/');
        if (!KubernetesAPI.isOpenShift) {
            return UrlHelpers.join(apiPrefix(), KubernetesAPI.defaultOSApiVersion, "proxy", kubernetesNamespacePath(), "services/templates", answer);
        }
        return answer;
    }
    KubernetesAPI.osApiPrefix = osApiPrefix;
    function masterApiUrl() {
        return KubernetesAPI.masterUrl || "";
    }
    KubernetesAPI.masterApiUrl = masterApiUrl;
    function kubernetesApiPrefix() {
        return UrlHelpers.join(apiPrefix(), KubernetesAPI.defaultApiVersion);
    }
    KubernetesAPI.kubernetesApiPrefix = kubernetesApiPrefix;
    function openshiftApiPrefix() {
        return UrlHelpers.join(osApiPrefix(), KubernetesAPI.defaultOSApiVersion);
    }
    KubernetesAPI.openshiftApiPrefix = openshiftApiPrefix;
    function prefixForType(type) {
        if (type === KubernetesAPI.WatchTypes.NAMESPACES) {
            return kubernetesApiPrefix();
        }
        if (_.any(KubernetesAPI.NamespacedTypes.k8sTypes, function (t) { return t === type; })) {
            return kubernetesApiPrefix();
        }
        if (_.any(KubernetesAPI.NamespacedTypes.osTypes, function (t) { return t === type; })) {
            return openshiftApiPrefix();
        }
        return null;
    }
    KubernetesAPI.prefixForType = prefixForType;
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
        var prefix = prefixForType(thing);
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
    function kibanaLogsLink(ServiceRegistry) {
        var link = ServiceRegistry.serviceLink(KubernetesAPI.kibanaServiceName);
        if (link) {
            if (!link.endsWith("/")) {
                link += "/";
            }
            return link + "#/dashboard/Fabric8";
        }
        else {
            return null;
        }
    }
    KubernetesAPI.kibanaLogsLink = kibanaLogsLink;
    function openLogsForPods(ServiceRegistry, $window, namespace, pods) {
        var link = kibanaLogsLink(ServiceRegistry);
        if (link) {
            var query = "";
            var count = 0;
            angular.forEach(pods, function (item) {
                var id = getName(item);
                if (id) {
                    var space = query ? " OR " : "";
                    count++;
                    query += space + '"' + id + '"';
                }
            });
            if (query) {
                if (count > 1) {
                    query = "(" + query + ")";
                }
                query = 'kubernetes.namespace:"' + namespace + '" AND kubernetes.pod_name:' + query;
                link += "?_a=(query:(query_string:(query:'" + query + "')))";
                var newWindow = $window.open(link, "viewLogs");
            }
        }
    }
    KubernetesAPI.openLogsForPods = openLogsForPods;
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
    function statusTextToCssClass(text) {
        if (text) {
            var lower = text.toLowerCase();
            if (lower.startsWith("run") || lower.startsWith("ok")) {
                return 'fa fa-play-circle green';
            }
            else if (lower.startsWith("wait") || lower.startsWith("pend")) {
                return 'fa fa-download';
            }
            else if (lower.startsWith("term") || lower.startsWith("error") || lower.startsWith("fail")) {
                return 'fa fa-off orange';
            }
            else if (lower.startsWith("succeeded")) {
                return 'fa fa-check-circle-o green';
            }
        }
        return 'fa fa-question red';
    }
    KubernetesAPI.statusTextToCssClass = statusTextToCssClass;
    function podStatus(pod) {
        return getStatus(pod);
    }
    KubernetesAPI.podStatus = podStatus;
    function createAppViewPodCounters(appView) {
        var array = [];
        var map = {};
        var pods = appView.pods;
        var lowestDate = null;
        angular.forEach(pods, function (pod) {
            var selector = getLabels(pod);
            var selectorText = labelsToString(selector, " ");
            var answer = map[selector];
            if (!answer) {
                answer = {
                    labelText: selectorText,
                    podsLink: Core.url("/kubernetes/pods?q=" + encodeURIComponent(selectorText)),
                    valid: 0,
                    waiting: 0,
                    error: 0
                };
                map[selector] = answer;
                array.push(answer);
            }
            var status = (podStatus(pod) || "Error").toLowerCase();
            if (status.startsWith("run") || status.startsWith("ok")) {
                answer.valid += 1;
            }
            else if (status.startsWith("wait") || status.startsWith("pwnd")) {
                answer.waiting += 1;
            }
            else {
                answer.error += 1;
            }
            var creationTimestamp = getCreationTimestamp(pod);
            if (creationTimestamp) {
                var d = new Date(creationTimestamp);
                if (!lowestDate || d < lowestDate) {
                    lowestDate = d;
                }
            }
        });
        appView.$creationDate = lowestDate;
        return array;
    }
    KubernetesAPI.createAppViewPodCounters = createAppViewPodCounters;
    function createAppViewServiceViews(appView) {
        var array = [];
        var pods = appView.pods;
        angular.forEach(pods, function (pod) {
            var id = getName(pod);
            if (id) {
                var abbrev = id;
                var idx = id.indexOf("-");
                if (idx > 1) {
                    abbrev = id.substring(0, idx);
                }
                pod.idAbbrev = abbrev;
            }
            pod.statusClass = statusTextToCssClass(podStatus(pod));
        });
        var services = appView.services || [];
        var replicationControllers = appView.replicationControllers || [];
        var size = Math.max(services.length, replicationControllers.length, 1);
        var appName = appView.$info.name;
        for (var i = 0; i < size; i++) {
            var service = services[i];
            var replicationController = replicationControllers[i];
            var controllerId = getName(replicationController);
            var name = getName(service) || controllerId;
            var address = Core.pathGet(service, ["spec", "portalIP"]);
            if (!name && pods.length) {
                name = pods[0].idAbbrev;
            }
            if (!appView.$info.name) {
                appView.$info.name = name;
            }
            if (!appView.id && pods.length) {
                appView.id = getName(pods[0]);
            }
            if (i > 0) {
                appName = name;
            }
            var podCount = pods.length;
            var podCountText = podCount + " pod" + (podCount > 1 ? "s" : "");
            var view = {
                appName: appName || name,
                name: name,
                createdDate: appView.$creationDate,
                podCount: podCount,
                podCountText: podCountText,
                address: address,
                controllerId: controllerId,
                service: service,
                replicationController: replicationController,
                pods: pods
            };
            array.push(view);
        }
        return array;
    }
    KubernetesAPI.createAppViewServiceViews = createAppViewServiceViews;
    function gitPathToUrl(iconPath, branch) {
        if (branch === void 0) { branch = "master"; }
        return (HawtioCore.injector.get('AppLibraryURL') || '') + "/git/" + branch + iconPath;
    }
    KubernetesAPI.gitPathToUrl = gitPathToUrl;
    function enrichBuildConfig(buildConfig, sortedBuilds) {
        if (buildConfig) {
            var triggerUrl = null;
            var metadata = buildConfig.metadata || {};
            var name = metadata.name;
            buildConfig.$name = name;
            if (name) {
                angular.forEach([false, true], function (flag) {
                    angular.forEach(buildConfig.triggers, function (trigger) {
                        if (!triggerUrl) {
                            var type = trigger.type;
                            if (type === "generic" || flag) {
                                var generic = trigger[type];
                                if (type && generic) {
                                    var secret = generic.secret;
                                    if (secret) {
                                        triggerUrl = UrlHelpers.join(buildConfigHooksRestURL(), name, secret, type);
                                        buildConfig.$triggerUrl = triggerUrl;
                                    }
                                }
                            }
                        }
                    });
                });
                if (sortedBuilds) {
                    buildConfig.$lastBuild = _.find(sortedBuilds, {
                        metadata: {
                            labels: {
                                buildconfig: name
                            }
                        }
                    });
                }
            }
            var $fabric8Views = {};
            function defaultPropertiesIfNotExist(name, object, autoCreate) {
                if (autoCreate === void 0) { autoCreate = false; }
                var view = $fabric8Views[name];
                if (autoCreate && !view) {
                    view = {};
                    $fabric8Views[name] = view;
                }
                if (view) {
                    angular.forEach(object, function (value, property) {
                        var current = view[property];
                        if (!current) {
                            view[property] = value;
                        }
                    });
                }
            }
            function defaultPropertiesIfNotExistStartsWith(prefix, object, autoCreate) {
                if (autoCreate === void 0) { autoCreate = false; }
                angular.forEach($fabric8Views, function (view, name) {
                    if (view && name.startsWith(prefix)) {
                        angular.forEach(object, function (value, property) {
                            var current = view[property];
                            if (!current) {
                                view[property] = value;
                            }
                        });
                    }
                });
            }
            var labels = metadata.labels || {};
            var annotations = metadata.annotations || {};
            buildConfig.$user = annotations["fabric8.jenkins/user"] || labels["user"];
            buildConfig.$repo = annotations["fabric8.jenkins/repo"] || labels["repo"];
            angular.forEach(annotations, function (value, key) {
                var parts = key.split('/', 2);
                if (parts.length > 1) {
                    var linkId = parts[0];
                    var property = parts[1];
                    if (linkId && property && linkId.startsWith("fabric8.link")) {
                        var link = $fabric8Views[linkId];
                        if (!link) {
                            link = {
                                class: linkId
                            };
                            $fabric8Views[linkId] = link;
                        }
                        link[property] = value;
                    }
                }
            });
            if (buildConfig.$user && buildConfig.$repo) {
                var gogsUrl = serviceLinkUrl(KubernetesAPI.gogsServiceName);
                if (gogsUrl) {
                    defaultPropertiesIfNotExist("fabric8.link.browseGogs.view", {
                        label: "Browse...",
                        url: UrlHelpers.join(gogsUrl, buildConfig.$user, buildConfig.$repo),
                        description: "Browse the source code of this repository",
                        iconClass: "fa fa-external-link"
                    }, true);
                }
                defaultPropertiesIfNotExist("fabric8.link.forgeCommand.view", {
                    label: "Command...",
                    url: UrlHelpers.join("/forge/commands/user", buildConfig.$user, buildConfig.$repo),
                    description: "Perform an action on this project",
                    iconClass: "fa fa-play-circle"
                }, true);
                defaultPropertiesIfNotExist("fabric8.link.forgeCommand.devops.settings", {
                    label: "Settings",
                    url: UrlHelpers.join("/forge/command/devops-edit/user", buildConfig.$user, buildConfig.$repo),
                    description: "Configure the DevOps settings for this project",
                    iconClass: "fa fa-pencil-square-o"
                }, true);
            }
            defaultPropertiesIfNotExist("fabric8.link.repository.browse", {
                label: "Browse...",
                description: "Browse the source code of this repository",
                iconClass: "fa fa-external-link"
            });
            defaultPropertiesIfNotExist("fabric8.link.jenkins.job", {
                iconClass: "fa fa-tasks",
                description: "View the Jenkins Job for this build"
            });
            defaultPropertiesIfNotExist("fabric8.link.jenkins.monitor", {
                iconClass: "fa fa-tachometer",
                description: "View the Jenkins Monitor dashboard for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.jenkins.pipeline", {
                iconClass: "fa fa-arrow-circle-o-right",
                description: "View the Jenkins Pipeline for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.letschat.room", {
                iconClass: "fa fa-comment",
                description: "Chat room for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.letschat.room", {
                iconClass: "fa fa-comment",
                description: "Chat room for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.taiga", {
                iconClass: "fa fa-check-square-o",
                description: "Issue tracker for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.issues", {
                iconClass: "fa fa-check-square-o",
                description: "Issues for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.releases", {
                iconClass: "fa fa-tag",
                description: "Issues for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.taiga.team", {
                iconClass: "fa fa-users",
                description: "Team members for this project"
            });
            defaultPropertiesIfNotExist("fabric8.link.team", {
                iconClass: "fa fa-users",
                description: "Team members for this project"
            });
            defaultPropertiesIfNotExistStartsWith("fabric8.link.environment.", {
                iconClass: "fa fa-cloud",
                description: "The kubernetes namespace for this environment"
            });
            var $fabric8CodeViews = {};
            var $fabric8BuildViews = {};
            var $fabric8TeamViews = {};
            var $fabric8EnvironmentViews = {};
            angular.forEach($fabric8Views, function (value, key) {
                var view;
                if (key.indexOf("taiga") > 0 || key.indexOf(".issue") > 0 || key.indexOf("letschat") > 0 || key.indexOf(".team") > 0) {
                    view = $fabric8TeamViews;
                }
                else if (key.indexOf("jenkins") > 0) {
                    view = $fabric8BuildViews;
                }
                else if (key.indexOf(".environment.") > 0) {
                    view = $fabric8EnvironmentViews;
                }
                else {
                    view = $fabric8CodeViews;
                }
                view[key] = value;
            });
            buildConfig.$fabric8Views = $fabric8Views;
            buildConfig.$fabric8CodeViews = $fabric8CodeViews;
            buildConfig.$fabric8BuildViews = $fabric8BuildViews;
            buildConfig.$fabric8EnvironmentViews = $fabric8EnvironmentViews;
            buildConfig.$fabric8TeamViews = $fabric8TeamViews;
        }
    }
    KubernetesAPI.enrichBuildConfig = enrichBuildConfig;
    function enrichBuildConfigs(buildConfigs, sortedBuilds) {
        if (sortedBuilds === void 0) { sortedBuilds = null; }
        angular.forEach(buildConfigs, function (buildConfig) {
            enrichBuildConfig(buildConfig, sortedBuilds);
        });
        return buildConfigs;
    }
    KubernetesAPI.enrichBuildConfigs = enrichBuildConfigs;
    function enrichBuilds(builds) {
        angular.forEach(builds, function (build) {
            enrichBuild(build);
        });
        return _.sortBy(builds, "$creationDate").reverse();
    }
    KubernetesAPI.enrichBuilds = enrichBuilds;
    function enrichBuild(build) {
        if (build) {
            var metadata = build.metadata || {};
            var name = getName(build);
            var namespace = getNamespace(build);
            build.$name = name;
            build.$namespace = namespace;
            var nameArray = name.split("-");
            var nameArrayLength = nameArray.length;
            build.$shortName = (nameArrayLength > 4) ? nameArray.slice(0, nameArrayLength - 4).join("-") : name.substring(0, 30);
            var route = {};
            var labels = getLabels(route);
            var configId = labels.buildconfig;
            build.$configId = configId;
            if (configId) {
                build.$configLink = UrlHelpers.join("kubernetes/buildConfigs", configId);
            }
            var creationTimestamp = getCreationTimestamp(build);
            if (creationTimestamp) {
                var d = new Date(creationTimestamp);
                build.$creationDate = d;
            }
            if (name) {
                build.$viewLink = UrlHelpers.join("kubernetes/builds", name);
                build.$logsLink = UrlHelpers.join("kubernetes/buildLogs", name);
            }
            var podName = build.podName;
            if (podName && namespace) {
                var podNameArray = podName.split("-");
                var podNameArrayLength = podNameArray.length;
                build.$podShortName = (podNameArrayLength > 5) ? podNameArray[podNameArrayLength - 5] : podName.substring(0, 30);
                build.$podLink = UrlHelpers.join("kubernetes/namespace", namespace, "pods", podName);
            }
        }
        return build;
    }
    KubernetesAPI.enrichBuild = enrichBuild;
    function enrichDeploymentConfig(deploymentConfig) {
        if (deploymentConfig) {
            var triggerUrl = null;
            var name = Core.pathGet(deploymentConfig, ["metadata", "name"]);
            deploymentConfig.$name = name;
            var found = false;
            angular.forEach(deploymentConfig.triggers, function (trigger) {
                var type = trigger.type;
                if (!deploymentConfig.$imageChangeParams && type === "ImageChange") {
                    var imageChangeParams = trigger.imageChangeParams;
                    if (imageChangeParams) {
                        var containerNames = imageChangeParams.containerNames || [];
                        imageChangeParams.$containerNames = containerNames.join(" ");
                        deploymentConfig.$imageChangeParams = imageChangeParams;
                    }
                }
            });
        }
    }
    KubernetesAPI.enrichDeploymentConfig = enrichDeploymentConfig;
    function enrichDeploymentConfigs(deploymentConfigs) {
        angular.forEach(deploymentConfigs, function (deploymentConfig) {
            enrichDeploymentConfig(deploymentConfig);
        });
        return deploymentConfigs;
    }
    KubernetesAPI.enrichDeploymentConfigs = enrichDeploymentConfigs;
    function enrichImageRepository(imageRepository) {
        if (imageRepository) {
            var triggerUrl = null;
            var name = Core.pathGet(imageRepository, ["metadata", "name"]);
            imageRepository.$name = name;
        }
    }
    KubernetesAPI.enrichImageRepository = enrichImageRepository;
    function enrichImageRepositories(imageRepositories) {
        angular.forEach(imageRepositories, function (imageRepository) {
            enrichImageRepository(imageRepository);
        });
        return imageRepositories;
    }
    KubernetesAPI.enrichImageRepositories = enrichImageRepositories;
    var labelColors = {
        'version': 'background-blue',
        'name': 'background-light-green',
        'container': 'background-light-grey'
    };
    function containerLabelClass(labelType) {
        if (!(labelType in labelColors)) {
            return 'mouse-pointer';
        }
        else
            return labelColors[labelType] + ' mouse-pointer';
    }
    KubernetesAPI.containerLabelClass = containerLabelClass;
    function isForgeEnabled() {
        return true;
    }
    KubernetesAPI.isForgeEnabled = isForgeEnabled;
    function currentKubernetesNamespace() {
        var injector = HawtioCore.injector;
        if (injector) {
            var KubernetesState = injector.get("KubernetesState") || {};
            return KubernetesState.selectedNamespace || KubernetesAPI.defaultNamespace;
        }
        return KubernetesAPI.defaultNamespace;
    }
    KubernetesAPI.currentKubernetesNamespace = currentKubernetesNamespace;
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
    hawtioPluginLoader.addModule('restmod');
    hawtioPluginLoader.addModule(KubernetesAPI.pluginName);
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiPlugin.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    function byId(thing) {
        return thing.id;
    }
    function createKey(namespace, id, kind) {
        return (namespace || "") + "-" + (kind || 'undefined').toLowerCase() + '-' + (id || 'undefined').replace(/\./g, '-');
    }
    function populateKey(item) {
        var result = item;
        result['_key'] = createKey(KubernetesAPI.getNamespace(item), KubernetesAPI.getName(item), KubernetesAPI.getKind(item));
        return result;
    }
    function populateKeys(items) {
        var result = [];
        angular.forEach(items, function (item) {
            result.push(populateKey(item));
        });
        return result;
    }
    function selectPods(pods, namespace, labels) {
        return pods.filter(function (pod) {
            return KubernetesAPI.getNamespace(pod) === namespace && KubernetesAPI.selectorMatches(labels, KubernetesAPI.getLabels(pod));
        });
    }
    var KubernetesModelService = (function () {
        function KubernetesModelService() {
            this.kubernetes = null;
            this.apps = [];
            this.services = [];
            this.replicationcontrollers = [];
            this.pods = [];
            this.hosts = [];
            this.routes = [];
            this.templates = [];
            this.redraw = false;
            this.resourceVersions = {};
            this.podsByHost = {};
            this.servicesByKey = {};
            this.replicationControllersByKey = {};
            this.podsByKey = {};
            this.appInfos = [];
            this.appViews = [];
            this.appFolders = [];
            this.fetched = false;
            this.showRunButton = false;
            this.buildconfigs = [];
        }
        Object.defineProperty(KubernetesModelService.prototype, "replicationControllers", {
            get: function () {
                return this.replicationcontrollers;
            },
            set: function (replicationControllers) {
                this.replicationcontrollers = replicationControllers;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KubernetesModelService.prototype, "namespaces", {
            get: function () {
                return this.kubernetes.namespaces;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KubernetesModelService.prototype, "serviceApps", {
            get: function () {
                return _.filter(this.services, function (s) {
                    return s.$host && s.$serviceUrl && s.$podCount;
                });
            },
            enumerable: true,
            configurable: true
        });
        KubernetesModelService.prototype.$keepPolling = function () {
            return KubernetesAPI.keepPollingModel;
        };
        KubernetesModelService.prototype.orRedraw = function (flag) {
            this.redraw = this.redraw || flag;
        };
        KubernetesModelService.prototype.getService = function (namespace, id) {
            return this.servicesByKey[createKey(namespace, id, 'service')];
        };
        KubernetesModelService.prototype.getReplicationController = function (namespace, id) {
            return this.replicationControllersByKey[createKey(namespace, id, 'replicationController')];
        };
        KubernetesModelService.prototype.getPod = function (namespace, id) {
            return this.podsByKey[createKey(namespace, id, 'pod')];
        };
        KubernetesModelService.prototype.podsForNamespace = function (namespace) {
            if (namespace === void 0) { namespace = this.currentNamespace(); }
            return _.filter(this.pods, { namespace: namespace });
        };
        KubernetesModelService.prototype.currentNamespace = function () {
            var answer = null;
            if (this.kubernetes) {
                answer = this.kubernetes.selectedNamespace;
            }
            return answer || KubernetesAPI.defaultNamespace;
        };
        KubernetesModelService.prototype.updateIconUrlAndAppInfo = function (entity, nameField) {
            var answer = null;
            var id = KubernetesAPI.getName(entity);
            entity.$iconUrl = Core.pathGet(entity, ['metadata', 'annotations', 'fabric8.' + id + '/iconUrl']);
            entity.$info = Core.pathGet(entity, ['metadata', 'annotations', 'fabric8.' + id + '/summary']);
            if (entity.$iconUrl) {
                return;
            }
            if (id && nameField) {
                (this.templates || []).forEach(function (template) {
                    var metadata = template.metadata;
                    if (metadata) {
                        var annotations = metadata.annotations || {};
                        var iconUrl = annotations["fabric8." + id + "/iconUrl"] || annotations["fabric8/iconUrl"];
                        if (iconUrl) {
                            (template.objects || []).forEach(function (item) {
                                var entityName = KubernetesAPI.getName(item);
                                if (id === entityName) {
                                    entity.$iconUrl = iconUrl;
                                }
                            });
                        }
                    }
                });
                (this.appInfos || []).forEach(function (appInfo) {
                    var iconPath = appInfo.iconPath;
                    if (iconPath && !answer && iconPath !== "null") {
                        var iconUrl = KubernetesAPI.gitPathToUrl(iconPath);
                        var ids = Core.pathGet(appInfo, ["names", nameField]);
                        angular.forEach(ids, function (appId) {
                            if (appId === id) {
                                entity.$iconUrl = iconUrl;
                                entity.appPath = appInfo.appPath;
                                entity.$info = appInfo;
                            }
                        });
                    }
                });
            }
            if (!entity.$iconUrl) {
                entity.$iconUrl = KubernetesAPI.defaultIconUrl;
            }
        };
        KubernetesModelService.prototype.maybeInit = function () {
            var _this = this;
            this.fetched = true;
            this.servicesByKey = {};
            this.podsByKey = {};
            this.replicationControllersByKey = {};
            this.pods.forEach(function (pod) {
                if (!pod.kind)
                    pod.kind = "Pod";
                _this.podsByKey[pod._key] = pod;
                var host = KubernetesAPI.getHost(pod);
                pod.$labelsText = KubernetesAPI.labelsToString(KubernetesAPI.getLabels(pod));
                if (host) {
                    pod.$labelsText += KubernetesAPI.labelFilterTextSeparator + "host=" + host;
                }
                pod.$iconUrl = KubernetesAPI.defaultIconUrl;
                _this.discoverPodConnections(pod);
                pod.$containerPorts = [];
                var startTime = (pod.status || {}).startTime;
                pod.$startTime = null;
                if (startTime) {
                    pod.$startTime = new Date(startTime);
                }
                var createdTime = KubernetesAPI.getCreationTimestamp(pod);
                pod.$createdTime = null;
                pod.$age = null;
                if (createdTime) {
                    pod.$createdTime = new Date(createdTime);
                    pod.$age = pod.$createdTime.relative();
                }
                pod.$statusCss = KubernetesAPI.statusTextToCssClass((pod.status || {}).phase);
                var maxRestartCount = 0;
                angular.forEach(Core.pathGet(pod, ["status", "containerStatuses"]), function (status) {
                    var restartCount = status.restartCount;
                    if (restartCount) {
                        if (restartCount > maxRestartCount) {
                            maxRestartCount = restartCount;
                        }
                    }
                });
                if (maxRestartCount) {
                    pod.$restartCount = maxRestartCount;
                }
                var imageNames = "";
                angular.forEach(Core.pathGet(pod, ["spec", "containers"]), function (container) {
                    var image = container.image;
                    if (image) {
                        if (!imageNames) {
                            imageNames = image;
                        }
                        else {
                            imageNames = imageNames + " " + image;
                        }
                        var idx = image.lastIndexOf(":");
                        if (idx > 0) {
                            image = image.substring(0, idx);
                        }
                        var paths = image.split("/", 3);
                        if (paths.length) {
                            var answer = null;
                            if (paths.length == 3) {
                                answer = paths[1] + "/" + paths[2];
                            }
                            else if (paths.length == 2) {
                                answer = paths[0] + "/" + paths[1];
                            }
                            else {
                                answer = paths[0] + "/" + paths[1];
                            }
                            container.$imageLink = UrlHelpers.join("https://registry.hub.docker.com/u/", answer);
                        }
                    }
                    angular.forEach(container.ports, function (port) {
                        var containerPort = port.containerPort;
                        if (containerPort) {
                            pod.$containerPorts.push(containerPort);
                        }
                    });
                });
                pod.$imageNames = imageNames;
                var podStatus = (pod.status || {});
                var podSpec = (pod.spec || {});
                pod.$podIP = podStatus.podIP;
                pod.$host = podSpec.host || podSpec.nodeName || podStatus.hostIP;
            });
            this.services.forEach(function (service) {
                if (!service.kind)
                    service.kind = "Service";
                _this.servicesByKey[service._key] = service;
                var selector = KubernetesAPI.getSelector(service);
                service.$pods = [];
                if (!service.$podCounters) {
                    service.$podCounters = {};
                }
                _.assign(service.$podCounters, selector ? KubernetesAPI.createPodCounters(selector, _this.pods, service.$pods) : {});
                service.$podCount = service.$pods.length;
                var selectedPods = service.$pods;
                service.connectTo = selectedPods.map(function (pod) {
                    return pod._key;
                }).join(',');
                service.$labelsText = KubernetesAPI.labelsToString(KubernetesAPI.getLabels(service));
                _this.updateIconUrlAndAppInfo(service, "serviceNames");
                var spec = service.spec || {};
                service.$portalIP = spec.portalIP;
                service.$selectorText = KubernetesAPI.labelsToString(spec.selector);
                var ports = _.map(spec.ports || [], "port");
                service.$ports = ports;
                service.$portsText = ports.join(", ");
                var iconUrl = service.$iconUrl;
                if (iconUrl && selectedPods) {
                    selectedPods.forEach(function (pod) {
                        pod.$iconUrl = iconUrl;
                    });
                }
                service.$serviceUrl = KubernetesAPI.serviceLinkUrl(service);
            });
            this.replicationControllers.forEach(function (replicationController) {
                if (!replicationController.kind)
                    replicationController.kind = "ReplicationController";
                _this.replicationControllersByKey[replicationController._key] = replicationController;
                var selector = KubernetesAPI.getSelector(replicationController);
                replicationController.$pods = [];
                replicationController.$podCounters = selector ? KubernetesAPI.createPodCounters(selector, _this.pods, replicationController.$pods) : null;
                replicationController.$podCount = replicationController.$pods.length;
                replicationController.$replicas = (replicationController.spec || {}).replicas;
                var selectedPods = replicationController.$pods;
                replicationController.connectTo = selectedPods.map(function (pod) {
                    return pod._key;
                }).join(',');
                replicationController.$labelsText = KubernetesAPI.labelsToString(KubernetesAPI.getLabels(replicationController));
                _this.updateIconUrlAndAppInfo(replicationController, "replicationControllerNames");
                var iconUrl = replicationController.$iconUrl;
                if (iconUrl && selectedPods) {
                    selectedPods.forEach(function (pod) {
                        pod.$iconUrl = iconUrl;
                    });
                }
            });
            this.services.forEach(function (service) {
                var iconUrl = service.$iconUrl;
                var selectedPods = service.$pods;
                if (selectedPods) {
                    if (!iconUrl || iconUrl === KubernetesAPI.defaultIconUrl) {
                        iconUrl = null;
                        selectedPods.forEach(function (pod) {
                            if (!iconUrl) {
                                iconUrl = pod.$iconUrl;
                                if (iconUrl) {
                                    service.$iconUrl = iconUrl;
                                }
                            }
                        });
                    }
                }
            });
            this.updateApps();
            var podsByHost = {};
            this.pods.forEach(function (pod) {
                var host = KubernetesAPI.getHost(pod);
                var podsForHost = podsByHost[host];
                if (!podsForHost) {
                    podsForHost = [];
                    podsByHost[host] = podsForHost;
                }
                podsForHost.push(pod);
            });
            this.podsByHost = podsByHost;
            var tmpHosts = [];
            for (var hostKey in podsByHost) {
                var hostPods = [];
                var podCounters = KubernetesAPI.createPodCounters(function (pod) { return KubernetesAPI.getHost(pod) === hostKey; }, this.pods, hostPods, "host=" + hostKey);
                var hostIP = null;
                if (hostPods.length) {
                    var pod = hostPods[0];
                    var currentState = pod.status;
                    if (currentState) {
                        hostIP = currentState.hostIP;
                    }
                }
                var hostDetails = {
                    name: hostKey,
                    id: hostKey,
                    elementId: hostKey.replace(/\./g, '_'),
                    hostIP: hostIP,
                    pods: hostPods,
                    kind: "Host",
                    $podCounters: podCounters,
                    $iconUrl: KubernetesAPI.hostIconUrl
                };
                tmpHosts.push(hostDetails);
            }
            this.hosts = tmpHosts;
            KubernetesAPI.enrichBuildConfigs(this.buildconfigs);
        };
        KubernetesModelService.prototype.updateApps = function () {
            var _this = this;
            try {
                var appViews = [];
                this.replicationControllers.forEach(function (replicationController) {
                    var name = KubernetesAPI.getName(replicationController);
                    var $iconUrl = replicationController.$iconUrl;
                    appViews.push({
                        appPath: "/dummyPath/" + name,
                        $name: name,
                        $info: {
                            $iconUrl: $iconUrl
                        },
                        $iconUrl: $iconUrl,
                        replicationControllers: [replicationController],
                        pods: replicationController.$pods || [],
                        services: []
                    });
                });
                var hasTemplatesService = KubernetesAPI.isOpenShift;
                var noMatches = [];
                this.services.forEach(function (service) {
                    var name = KubernetesAPI.getName(service);
                    if (name === "templates") {
                        var podCounters = service.$podCounters;
                        if (podCounters && podCounters.valid) {
                            hasTemplatesService = true;
                        }
                    }
                    var matchesApp = null;
                    appViews.forEach(function (appView) {
                        appView.replicationControllers.forEach(function (replicationController) {
                            var repSelector = KubernetesAPI.getSelector(replicationController);
                            if (repSelector &&
                                KubernetesAPI.selectorMatches(repSelector, KubernetesAPI.getSelector(service)) &&
                                KubernetesAPI.getNamespace(service) === KubernetesAPI.getNamespace(replicationController)) {
                                matchesApp = appView;
                            }
                        });
                    });
                    if (matchesApp) {
                        matchesApp.services.push(service);
                    }
                    else {
                        noMatches.push(service);
                    }
                });
                KubernetesAPI.log.debug("no matches: ", noMatches);
                noMatches.forEach(function (service) {
                    var appView = _.find(appViews, function (appView) {
                        return _.any(appView.replicationControllers, function (rc) {
                            return _.startsWith(KubernetesAPI.getName(rc), KubernetesAPI.getName(service));
                        });
                    });
                    if (appView) {
                        appView.services.push(service);
                    }
                    else {
                        var $iconUrl = service.$iconUrl;
                        appViews.push({
                            appPath: "/dummyPath/" + name,
                            $name: name,
                            $info: {
                                $iconUrl: $iconUrl
                            },
                            $iconUrl: $iconUrl,
                            replicationControllers: [],
                            pods: service.$pods || [],
                            services: [service]
                        });
                    }
                });
                this.showRunButton = hasTemplatesService;
                angular.forEach(this.routes, function (route) {
                    var metadata = route.metadata || {};
                    var spec = route.spec || {};
                    var serviceName = Core.pathGet(spec, ["to", "name"]);
                    var host = spec.host;
                    var namespace = KubernetesAPI.getNamespace(route);
                    if (serviceName && host) {
                        var service = _this.getService(namespace, serviceName);
                        if (service) {
                            service.$host = host;
                            if (host) {
                                var hostUrl = host;
                                if (hostUrl.indexOf("://") < 0) {
                                    hostUrl = "http://" + host;
                                }
                                service.$connectUrl = UrlHelpers.join(hostUrl, "/");
                            }
                        }
                        else {
                            KubernetesAPI.log.debug("Could not find service " + serviceName + " namespace " + namespace + " for route: " + metadata.name);
                        }
                    }
                });
                appViews = populateKeys(appViews).sortBy(function (appView) { return appView._key; });
                ArrayHelpers.sync(this.appViews, appViews, '$name');
                if (this.appInfos && this.appViews) {
                    var folderMap = {};
                    var folders = [];
                    var appMap = {};
                    angular.forEach(this.appInfos, function (appInfo) {
                        if (!appInfo.$iconUrl && appInfo.iconPath && appInfo.iconPath !== "null") {
                            appInfo.$iconUrl = KubernetesAPI.gitPathToUrl(appInfo.iconPath);
                        }
                        var appPath = appInfo.appPath;
                        if (appPath) {
                            appMap[appPath] = appInfo;
                            var idx = appPath.lastIndexOf("/");
                            var folderPath = "";
                            if (idx >= 0) {
                                folderPath = appPath.substring(0, idx);
                            }
                            folderPath = Core.trimLeading(folderPath, "/");
                            var folder = folderMap[folderPath];
                            if (!folder) {
                                folder = {
                                    path: folderPath,
                                    expanded: true,
                                    apps: []
                                };
                                folders.push(folder);
                                folderMap[folderPath] = folder;
                            }
                            folder.apps.push(appInfo);
                        }
                    });
                    this.appFolders = folders.sortBy("path");
                    var apps = [];
                    var defaultInfo = {
                        $iconUrl: KubernetesAPI.defaultIconUrl
                    };
                    angular.forEach(this.appViews, function (appView) {
                        try {
                            var appPath = appView.appPath;
                            var appInfo = angular.copy(defaultInfo);
                            if (appPath) {
                                appInfo = appMap[appPath] || appInfo;
                            }
                            if (!appView.$info) {
                                appView.$info = defaultInfo;
                                appView.$info = appInfo;
                            }
                            appView.id = appPath;
                            if (!appView.$name) {
                                appView.$name = appInfo.name || appView.$name;
                            }
                            if (!appView.$iconUrl) {
                                appView.$iconUrl = appInfo.$iconUrl;
                            }
                            apps.push(appView);
                            appView.$podCounters = KubernetesAPI.createAppViewPodCounters(appView);
                            appView.$podCount = (appView.pods || []).length;
                            appView.$replicationControllersText = (appView.replicationControllers || []).map("_key").join(" ");
                            appView.$servicesText = (appView.services || []).map("_key").join(" ");
                            appView.$serviceViews = KubernetesAPI.createAppViewServiceViews(appView);
                        }
                        catch (e) {
                            KubernetesAPI.log.warn("Failed to update appViews: " + e);
                        }
                    });
                    this.apps = this.appViews;
                }
            }
            catch (e) {
                KubernetesAPI.log.warn("Caught error: " + e);
            }
        };
        KubernetesModelService.prototype.discoverPodConnections = function (entity) {
            var info = Core.pathGet(entity, ["status", "info"]);
            var hostPort = null;
            var currentState = entity.status || {};
            var desiredState = entity.spec || {};
            var podId = KubernetesAPI.getName(entity);
            var host = currentState["hostIP"];
            var podIP = currentState["podIP"];
            var hasDocker = false;
            var foundContainerPort = null;
            if (desiredState) {
                var containers = desiredState.containers;
                angular.forEach(containers, function (container) {
                    if (!hostPort) {
                        var ports = container.ports;
                        angular.forEach(ports, function (port) {
                            if (!hostPort) {
                                var containerPort = port.containerPort;
                                var portName = port.name;
                                var containerHostPort = port.hostPort;
                                if (containerPort === 8778 || "jolokia" === portName) {
                                    if (containerPort) {
                                        if (podIP) {
                                            foundContainerPort = containerPort;
                                        }
                                        if (containerHostPort) {
                                            hostPort = containerHostPort;
                                        }
                                    }
                                }
                            }
                        });
                    }
                });
            }
            if (foundContainerPort && podId && KubernetesAPI.isRunning(currentState)) {
                entity.$jolokiaUrl = UrlHelpers.join(KubernetesAPI.masterApiUrl(), "/api/", KubernetesAPI.defaultApiVersion, "namespaces", entity.metadata.namespace, "/pods/", podId + ":" + foundContainerPort, "/proxy/jolokia/");
            }
        };
        return KubernetesModelService;
    })();
    KubernetesAPI.KubernetesModelService = KubernetesModelService;
    KubernetesAPI._module.factory('KubernetesModel', ['$rootScope', '$http', 'KubernetesApiURL', 'KubernetesState', 'WatcherService', '$location', '$resource', function ($rootScope, $http, AppLibraryURL, KubernetesState, watcher, $location, $resource) {
            var $scope = new KubernetesModelService();
            $scope.kubernetes = KubernetesState;
            var typeNames = watcher.getTypes();
            _.forEach(typeNames, function (type) {
                var urlTemplate = '';
                switch (type) {
                    case KubernetesAPI.WatchTypes.NAMESPACES:
                        urlTemplate = UrlHelpers.join('namespaces');
                        break;
                    default:
                        urlTemplate = UrlHelpers.join('namespaces/:namespace', type, ':id');
                }
                $scope[type + 'Resource'] = KubernetesAPI.createResource(type, urlTemplate, $resource, $scope);
            });
            watcher.registerListener(function (objects) {
                var types = watcher.getTypes();
                _.forEach(types, function (type) {
                    switch (type) {
                        case KubernetesAPI.WatchTypes.SERVICES:
                            var items = populateKeys(objects[type]);
                            angular.forEach(items, function (item) {
                                item.proxyUrl = KubernetesAPI.kubernetesProxyUrlForService(KubernetesAPI.masterApiUrl(), item);
                            });
                            $scope[type] = items;
                            break;
                        case KubernetesAPI.WatchTypes.TEMPLATES:
                        case KubernetesAPI.WatchTypes.ROUTES:
                        case KubernetesAPI.WatchTypes.BUILDS:
                        case KubernetesAPI.WatchTypes.BUILD_CONFIGS:
                        case KubernetesAPI.WatchTypes.IMAGE_STREAMS:
                        default:
                            $scope[type] = populateKeys(objects[type]);
                    }
                    KubernetesAPI.log.debug("Type: ", type, " object: ", $scope[type]);
                });
                $scope.maybeInit();
                $rootScope.$broadcast('kubernetesModelUpdated', $scope);
                Core.$apply($rootScope);
            });
            var search = $location.search();
            if ('namespace' in search) {
                watcher.setNamespace(search['namespace']);
            }
            function selectPods(pods, namespace, labels) {
                return pods.filter(function (pod) {
                    return KubernetesAPI.getNamespace(pod) === namespace && KubernetesAPI.selectorMatches(labels, KubernetesAPI.getLabels(pod));
                });
            }
            return $scope;
        }]);
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiPlugin.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    var KubernetesStateImpl = (function () {
        function KubernetesStateImpl(watcher) {
            this.watcher = watcher;
        }
        Object.defineProperty(KubernetesStateImpl.prototype, "namespaces", {
            get: function () {
                return _.map(this.watcher.getObjects(KubernetesAPI.WatchTypes.NAMESPACES), function (namespace) {
                    return namespace.metadata.name;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KubernetesStateImpl.prototype, "selectedNamespace", {
            get: function () {
                return this.watcher.getNamespace();
            },
            set: function (namespace) {
                this.watcher.setNamespace(namespace);
            },
            enumerable: true,
            configurable: true
        });
        return KubernetesStateImpl;
    })();
    KubernetesAPI._module.factory('KubernetesState', ['WatcherService', function (watcher) {
            return new KubernetesStateImpl(watcher);
        }]);
    KubernetesAPI._module.factory('KubernetesApiURL', function () { return KubernetesAPI.kubernetesApiUrl(); });
    KubernetesAPI._module.factory('KubernetesVersion', [function () {
            return {
                query: function () { return null; }
            };
        }]);
    KubernetesAPI._module.factory('KubernetesPods', ['KubernetesModel', function (KubernetesModel) {
            return KubernetesModel['podsResource'];
        }]);
    KubernetesAPI._module.factory('KubernetesReplicationControllers', ['KubernetesModel', function (KubernetesModel) {
            return KubernetesModel['replicationcontrollersResource'];
        }]);
    KubernetesAPI._module.factory('KubernetesServices', ['KubernetesModel', function (KubernetesModel) {
            return KubernetesModel['servicesResource'];
        }]);
    KubernetesAPI._module.factory('KubernetesBuilds', ['restmod', function (restmod) {
            return restmod.model(KubernetesAPI.buildConfigsRestURL());
        }]);
})(KubernetesAPI || (KubernetesAPI = {}));

/// <reference path="kubernetesApiPlugin.ts"/>
/// <reference path="kubernetesModel.ts"/>
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

/// <reference path="kubernetesApiPlugin.ts"/>
var KubernetesAPI;
(function (KubernetesAPI) {
    var log = Logger.get('kubernetes-watcher');
    var apiUrl = UrlHelpers.join('api', 'v1');
    var namespaceType = KubernetesAPI.WatchTypes.NAMESPACES;
    var k8sTypes = KubernetesAPI.NamespacedTypes.k8sTypes;
    var osTypes = KubernetesAPI.NamespacedTypes.osTypes;
    var baseWatch = {
        url: undefined,
        connectTime: undefined,
        objects: {},
        objectArray: [],
        customizers: [],
        onAddActions: [],
        onModifiedActions: [],
        onDeletedActions: [],
        socket: undefined,
        connected: false
    };
    var namespaceWatch = _.assign(_.cloneDeep(baseWatch), {
        selected: undefined,
        connectTime: undefined,
        url: UrlHelpers.join(apiUrl, KubernetesAPI.WatchTypes.NAMESPACES),
    });
    KubernetesAPI.watches = {};
    _.forEach(k8sTypes, function (type) {
        KubernetesAPI.watches[type] = _.assign(_.cloneDeep(baseWatch), {
            prefix: function () { return KubernetesAPI.kubernetesApiPrefix(); },
            valid: function () { return true; }
        });
    });
    _.forEach(osTypes, function (type) {
        KubernetesAPI.watches[type] = _.assign(_.cloneDeep(baseWatch), {
            prefix: function () { return KubernetesAPI.openshiftApiPrefix(); },
            valid: function () { return KubernetesAPI.isOpenShift || (type === "templates" || type === "buildconfigs"); }
        });
    });
    hawtioPluginLoader.registerPreBootstrapTask({
        name: 'KubernetesWatcherInit',
        depends: ['hawtio-oauth'],
        task: function (next) {
            KubernetesAPI.isOpenShift = true;
            function watchNamespaces() {
                var uri = new URI(KubernetesAPI.masterApiUrl());
                uri.path(namespaceWatch.url);
                var url = uri.toString();
                HawtioOAuth.authenticatedHttpRequest({
                    url: uri.toString()
                }).done(function (data) {
                    _.forEach(data.items, function (namespace) {
                        if (!namespace.metadata.uid) {
                            namespace.metadata.uid = namespace.metadata.namespace + '/' + namespace.metadata.name;
                        }
                        namespaceWatch.objects[namespace.metadata.uid] = namespace;
                    });
                    namespaceWatch.objectArray.length = 0;
                    _.forIn(namespaceWatch.objects, function (object, key) {
                        namespaceWatch.objectArray.push(object);
                    });
                    next();
                }).fail(function (xHr, textStatus, errorThrown) {
                    log.warn(textStatus, ": ", errorThrown);
                    HawtioOAuth.doLogout();
                });
            }
            var rootUri = new URI(KubernetesAPI.masterApiUrl());
            rootUri.path("/").query("");
            var rootUriText = rootUri.toString();
            log.info("About to query root paths: " + KubernetesAPI.masterApiUrl());
            HawtioOAuth.authenticatedHttpRequest({
                url: rootUriText
            }).done(function (data) {
                if (data) {
                    var paths = data.paths;
                    if (paths) {
                        KubernetesAPI.isOpenShift = false;
                        angular.forEach(paths, function (path) {
                            if (angular.isString(path) && (path === "/oapi" || path === "oapi")) {
                                KubernetesAPI.isOpenShift = true;
                            }
                        });
                    }
                    log.info("isOpenShift " + KubernetesAPI.isOpenShift + " with paths " + paths);
                }
                watchNamespaces();
            }).fail(function (xHr, textStatus, errorThrown) {
                log.warn("Failed to find root paths: " + textStatus, ": ", errorThrown);
                watchNamespaces();
            });
        }
    });
    function createWatch(type, watch, userDetails, $scope, onMessage, onClose, onOpen) {
        if (onMessage === void 0) { onMessage = function (event) { }; }
        if (onClose === void 0) { onClose = function (event) { }; }
        if (onOpen === void 0) { onOpen = function (event) { }; }
        var apiUrl = KubernetesAPI.masterApiUrl();
        var watchUrl = watch.url;
        var uri;
        if (!apiUrl || apiUrl === "/") {
            uri = new URI(UrlHelpers.join(apiUrl, watchUrl));
        }
        else {
            uri = new URI(apiUrl);
            uri.path(watchUrl);
        }
        if (uri.protocol() === "https") {
            uri.protocol('wss');
        }
        else {
            uri.protocol('ws');
        }
        uri.query({
            watch: true,
            access_token: userDetails.token
        });
        watch.retries = 0;
        var onOpenInternal = function (event) {
            watch.retries = 0;
            watch.connectTime = new Date().getTime();
            watch.connected = true;
            onOpen(event);
        };
        var onMessageInternal = function (event) {
            var data = angular.fromJson(event.data);
            switch (data.type) {
                case KubernetesAPI.WatchActions.ADDED:
                case KubernetesAPI.WatchActions.MODIFIED:
                    var obj = data.object;
                    if (watch.customizers.length > 0) {
                        _.forEach(watch.customizers, function (customizer) {
                            customizer(obj);
                        });
                    }
                    if (!data.object.metadata.uid) {
                        data.object.metadata.uid = data.object.metadata.namespace + '/' + data.object.metadata.name;
                    }
                    watch.objects[data.object.metadata.uid] = data.object;
                    break;
                case KubernetesAPI.WatchActions.DELETED:
                    delete watch.objects[data.object.metadata.uid];
                    break;
                default:
                    log.info("Unknown event type: ", data.type);
                    return;
            }
            watch.objectArray.length = 0;
            _.forIn(watch.objects, function (object, uid) {
                watch.objectArray.push(object);
            });
            onMessage(data);
            switch (data.type) {
                case KubernetesAPI.WatchActions.ADDED:
                    _.forEach(watch.onAddActions, function (action) { return action(data.object); });
                    break;
                case KubernetesAPI.WatchActions.MODIFIED:
                    _.forEach(watch.onModifiedActions, function (action) { return action(data.object); });
                    break;
                case KubernetesAPI.WatchActions.DELETED:
                    _.forEach(watch.onDeletedActions, function (action) { return action(data.object); });
                    break;
            }
            Core.$apply($scope);
        };
        var onCloseInternal = function (event) {
            watch.connected = false;
            if (watch.retries < 3 && watch.connectTime && new Date().getTime() - watch.connectTime > 5000) {
                setTimeout(function () {
                    watch.retries = watch.retries + 1;
                    log.debug("watch ", type, " disconnected, retry #", watch.retries);
                    var ws = watch.socket = new WebSocket(uri.toString());
                    ws.onopen = onOpenInternal;
                    ws.onmessage = onMessageInternal;
                    ws.onclose = onCloseInternal;
                }, 5000);
            }
            else {
                onClose(event);
            }
        };
        var ws = watch.socket = new WebSocket(uri.toString());
        ws.onopen = onOpenInternal;
        ws.onmessage = onMessageInternal;
        ws.onclose = onCloseInternal;
    }
    KubernetesAPI._module.service('WatcherService', ['userDetails', '$rootScope', '$timeout', function (userDetails, $rootScope, $timeout) {
            var self = {
                hasWebSocket: false
            };
            try {
                if (!WebSocket) {
                    return self;
                }
            }
            catch (err) {
                return self;
            }
            self.setNamespace = function (namespace) {
                if (namespace !== namespaceWatch.selected) {
                    log.debug("Namespace changed, shutting down existing watches");
                    _.forIn(KubernetesAPI.watches, function (watch, type) {
                        if (watch.socket) {
                            watch.socket.close();
                        }
                    });
                    log.debug("Setting namespace watch to: ", namespace);
                    namespaceWatch.selected = namespace;
                    if (!namespace) {
                        delete localStorage[KubernetesAPI.Constants.NAMESPACE_STORAGE_KEY];
                    }
                    else {
                        localStorage[KubernetesAPI.Constants.NAMESPACE_STORAGE_KEY] = namespace;
                    }
                    if (namespace) {
                        _.forIn(KubernetesAPI.watches, function (watch, type) {
                            if (watch.valid()) {
                                watch.url = UrlHelpers.join(watch.prefix(), KubernetesAPI.WatchTypes.NAMESPACES, namespace, type);
                                watch.connectTime = undefined;
                                _.forEach(_.keys(watch.objects), function (uid) {
                                    _.forEach(watch.onDeletedActions, function (action) { return action(watch.objects[uid]); });
                                    delete watch.objects[uid];
                                });
                                watch.objectArray.length = 0;
                                watch.socket = undefined;
                            }
                        });
                        _.forIn(KubernetesAPI.watches, function (watch, type) {
                            if (watch.valid()) {
                                createWatch(type, watch, userDetails, $rootScope);
                            }
                        });
                    }
                    $rootScope.$broadcast("WatcherNamespaceChanged", namespace);
                }
            };
            createWatch(KubernetesAPI.WatchTypes.NAMESPACES, namespaceWatch, userDetails, $rootScope, function (event) {
                switch (event.type) {
                    case KubernetesAPI.WatchActions.ADDED:
                    case KubernetesAPI.WatchActions.MODIFIED:
                        if (!namespaceWatch.selected) {
                            self.setNamespace(event.object.metadata.name);
                        }
                        break;
                    case KubernetesAPI.WatchActions.DELETED:
                        var next = _.first(namespaceWatch.objectArray);
                        if (next) {
                            self.setNamespace(next.metadata.name);
                        }
                        else {
                            self.setNamespace(undefined);
                        }
                        break;
                    default:
                        log.debug("Unknown namespace event type: ", event.type);
                        return;
                }
            }, function (event) {
                log.debug("Namespace watch closed");
                self.setNamespace(undefined);
            });
            self.setNamespace(localStorage[KubernetesAPI.Constants.NAMESPACE_STORAGE_KEY] || KubernetesAPI.defaultNamespace);
            self.hasWebSocket = true;
            self.getNamespace = function () { return namespaceWatch.selected; };
            self.addCustomizer = function (type, customizer) {
                if (type in KubernetesAPI.watches) {
                    KubernetesAPI.watches[type].customizers.push(customizer);
                    _.forEach(KubernetesAPI.watches[type].objectArray, function (obj) { return customizer(obj); });
                }
            };
            self.getTypes = function () {
                return k8sTypes.concat([KubernetesAPI.WatchTypes.NAMESPACES]).concat(osTypes);
            };
            self.getObjectMap = function (type) {
                if (type === KubernetesAPI.WatchTypes.NAMESPACES) {
                    return namespaceWatch.objects;
                }
                if (type in KubernetesAPI.watches) {
                    return KubernetesAPI.watches[type].objects;
                }
                else {
                    return undefined;
                }
            };
            self.getObjects = function (type) {
                if (type === KubernetesAPI.WatchTypes.NAMESPACES) {
                    return namespaceWatch.objectArray;
                }
                if (type in KubernetesAPI.watches) {
                    return KubernetesAPI.watches[type].objectArray;
                }
                else {
                    return undefined;
                }
            };
            self.listeners = [];
            var updateFunction = function () {
                log.debug("Objects changed, firing listeners");
                var objects = {};
                _.forEach(self.getTypes(), function (type) {
                    objects[type] = self.getObjects(type);
                });
                _.forEach(self.listeners, function (listener) {
                    listener(objects);
                });
            };
            var debouncedUpdate = _.debounce(updateFunction, 500, { trailing: true });
            self.registerListener = function (fn) {
                self.listeners.push(fn);
                _.forEach(self.getTypes(), function (type) {
                    self.addAction(type, KubernetesAPI.WatchActions.ANY, debouncedUpdate);
                });
            };
            self.addAction = function (type, action, fn) {
                var watch = undefined;
                if (type === KubernetesAPI.WatchTypes.NAMESPACES) {
                    watch = namespaceWatch;
                }
                else {
                    watch = KubernetesAPI.watches[type];
                }
                if (watch) {
                    switch (action) {
                        case KubernetesAPI.WatchActions.ANY:
                            _.forEach(watch.objectArray, function (obj) { return fn(obj); });
                            watch.onAddActions.push(fn);
                            watch.onDeletedActions.push(fn);
                            watch.onModifiedActions.push(fn);
                            break;
                        case KubernetesAPI.WatchActions.ADDED:
                            _.forEach(watch.objectArray, function (obj) { return fn(obj); });
                            watch.onAddActions.push(fn);
                            break;
                        case KubernetesAPI.WatchActions.MODIFIED:
                            watch.onModifiedActions.push(fn);
                            break;
                        case KubernetesAPI.WatchActions.DELETED:
                            watch.onDeletedActions.push(fn);
                            break;
                        default:
                            log.debug("Attempting to add unknown action: ", action);
                    }
                }
            };
            return self;
        }]);
})(KubernetesAPI || (KubernetesAPI = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNNb2RlbC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNTZXJ2aWNlcy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3dhdGNoZXIudHMiXSwibmFtZXMiOlsiS3ViZXJuZXRlc0FQSSIsIkt1YmVybmV0ZXNBUEkuY29uc3RzIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5OQU1FU1BBQ0VfU1RPUkFHRV9LRVkiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FTkRQT0lOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9EUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlkiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BRERFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLk1PRElGSUVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc05hbWVzcGFjZVBhdGgiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm1hc3RlckFwaVVybCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3BlbnNoaWZ0QXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JUeXBlIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLnVwZGF0ZU9yQ3JlYXRlT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVSZXNvdXJjZSIsIkt1YmVybmV0ZXNBUEkuaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5kZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkc0xvZ3NSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZHNSZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5idWlsZENvbmZpZ0hvb2tzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRDb25maWdzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkucm91dGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkudGVtcGxhdGVzUmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5nZXRMYWJlbHMiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWUiLCJLdWJlcm5ldGVzQVBJLmdldEtpbmQiLCJLdWJlcm5ldGVzQVBJLmdldFNlbGVjdG9yIiwiS3ViZXJuZXRlc0FQSS5nZXRIb3N0IiwiS3ViZXJuZXRlc0FQSS5nZXRTdGF0dXMiLCJLdWJlcm5ldGVzQVBJLmdldFBvcnRzIiwiS3ViZXJuZXRlc0FQSS5nZXRDcmVhdGlvblRpbWVzdGFtcCIsIkt1YmVybmV0ZXNBUEkuaXNLdWJlcm5ldGVzIiwiS3ViZXJuZXRlc0FQSS5pc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIiLCJLdWJlcm5ldGVzQVBJLmlzQXBwVmlldyIsIkt1YmVybmV0ZXNBUEkuc2V0SnNvbiIsIkt1YmVybmV0ZXNBUEkubGFiZWxzVG9TdHJpbmciLCJLdWJlcm5ldGVzQVBJLnNlcnZpY2VMaW5rVXJsIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVQb2RDb3VudGVycyIsIkt1YmVybmV0ZXNBUEkuY29udmVydEt1YmVybmV0ZXNKc29uVG9JdGVtcyIsIkt1YmVybmV0ZXNBUEkuaXNWMWJldGExT3IyIiwiS3ViZXJuZXRlc0FQSS5lbnRpdHlQYWdlTGluayIsIkt1YmVybmV0ZXNBUEkucmVzb3VyY2VLaW5kVG9VcmlQYXRoIiwiS3ViZXJuZXRlc0FQSS5pc0lnbm9yZU5hbWVzcGFjZUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNVcmxGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkQ29uZmlnUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuZGVwbG95bWVudENvbmZpZ1Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmltYWdlUmVwb3NpdG9yeVJlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLmJ1aWxkUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuYnVpbGRMb2dzUmVzdFVybCIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLmdldFNlcnZpY2VSZWdpc3RyeSIsIkt1YmVybmV0ZXNBUEkua2liYW5hTG9nc0xpbmsiLCJLdWJlcm5ldGVzQVBJLm9wZW5Mb2dzRm9yUG9kcyIsIkt1YmVybmV0ZXNBUEkucmVzaXplQ29udHJvbGxlciIsIkt1YmVybmV0ZXNBUEkuc3RhdHVzVGV4dFRvQ3NzQ2xhc3MiLCJLdWJlcm5ldGVzQVBJLnBvZFN0YXR1cyIsIkt1YmVybmV0ZXNBUEkuY3JlYXRlQXBwVmlld1BvZENvdW50ZXJzIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVBcHBWaWV3U2VydmljZVZpZXdzIiwiS3ViZXJuZXRlc0FQSS5naXRQYXRoVG9VcmwiLCJLdWJlcm5ldGVzQVBJLmVucmljaEJ1aWxkQ29uZmlnIiwiS3ViZXJuZXRlc0FQSS5lbnJpY2hCdWlsZENvbmZpZy5kZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QiLCJLdWJlcm5ldGVzQVBJLmVucmljaEJ1aWxkQ29uZmlnLmRlZmF1bHRQcm9wZXJ0aWVzSWZOb3RFeGlzdFN0YXJ0c1dpdGgiLCJLdWJlcm5ldGVzQVBJLmVucmljaEJ1aWxkQ29uZmlncyIsIkt1YmVybmV0ZXNBUEkuZW5yaWNoQnVpbGRzIiwiS3ViZXJuZXRlc0FQSS5lbnJpY2hCdWlsZCIsIkt1YmVybmV0ZXNBUEkuZW5yaWNoRGVwbG95bWVudENvbmZpZyIsIkt1YmVybmV0ZXNBUEkuZW5yaWNoRGVwbG95bWVudENvbmZpZ3MiLCJLdWJlcm5ldGVzQVBJLmVucmljaEltYWdlUmVwb3NpdG9yeSIsIkt1YmVybmV0ZXNBUEkuZW5yaWNoSW1hZ2VSZXBvc2l0b3JpZXMiLCJLdWJlcm5ldGVzQVBJLmNvbnRhaW5lckxhYmVsQ2xhc3MiLCJLdWJlcm5ldGVzQVBJLmlzRm9yZ2VFbmFibGVkIiwiS3ViZXJuZXRlc0FQSS5jdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkudG9SYXdKc29uIiwiS3ViZXJuZXRlc0FQSS5ieUlkIiwiS3ViZXJuZXRlc0FQSS5jcmVhdGVLZXkiLCJLdWJlcm5ldGVzQVBJLnBvcHVsYXRlS2V5IiwiS3ViZXJuZXRlc0FQSS5wb3B1bGF0ZUtleXMiLCJLdWJlcm5ldGVzQVBJLnNlbGVjdFBvZHMiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNNb2RlbFNlcnZpY2UiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNNb2RlbFNlcnZpY2UuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNNb2RlbFNlcnZpY2UucmVwbGljYXRpb25Db250cm9sbGVycyIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS5uYW1lc3BhY2VzIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLnNlcnZpY2VBcHBzIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLiRrZWVwUG9sbGluZyIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS5vclJlZHJhdyIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS5nZXRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLmdldFJlcGxpY2F0aW9uQ29udHJvbGxlciIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS5nZXRQb2QiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNNb2RlbFNlcnZpY2UucG9kc0Zvck5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS5jdXJyZW50TmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLnVwZGF0ZUljb25VcmxBbmRBcHBJbmZvIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLm1heWJlSW5pdCIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc01vZGVsU2VydmljZS51cGRhdGVBcHBzIiwiS3ViZXJuZXRlc0FQSS5LdWJlcm5ldGVzTW9kZWxTZXJ2aWNlLmRpc2NvdmVyUG9kQ29ubmVjdGlvbnMiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNTdGF0ZUltcGwiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNTdGF0ZUltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkt1YmVybmV0ZXNTdGF0ZUltcGwubmFtZXNwYWNlcyIsIkt1YmVybmV0ZXNBUEkuS3ViZXJuZXRlc1N0YXRlSW1wbC5zZWxlY3RlZE5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5oYXNTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmZpbmRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLnNlcnZpY2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmdldE1vZGVsIiwiS3ViZXJuZXRlc0FQSS53YXRjaE5hbWVzcGFjZXMiLCJLdWJlcm5ldGVzQVBJLmNyZWF0ZVdhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSx1RUFBdUU7QUFDdkUsa0NBQWtDO0FBRWxDLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FDaEJ0RCxJQUFPLGFBQWEsQ0E2SG5CO0FBN0hELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBO1FBQUFDO1FBRUFDLENBQUNBO1FBRENELHNCQUFJQSx5Q0FBcUJBO2lCQUF6QkEsY0FBcUNFLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUN2RUEsYUFBQ0E7SUFBREEsQ0FGQUQsQUFFQ0MsSUFBQUQ7SUFGWUEsb0JBQU1BLFNBRWxCQSxDQUFBQTtJQUVVQSx1QkFBU0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUE4Q3JDQTtRQUFBSTtRQWdCQUMsQ0FBQ0E7UUFmQUQsc0JBQWtCQSx3QkFBVUE7aUJBQTVCQSxjQUF3Q0UsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUM5REEsc0JBQWtCQSx1QkFBU0E7aUJBQTNCQSxjQUF1Q0csTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBSDtRQUM1REEsc0JBQWtCQSxrQkFBSUE7aUJBQXRCQSxjQUFrQ0ksTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBSjtRQUNsREEsc0JBQWtCQSxxQ0FBdUJBO2lCQUF6Q0EsY0FBcURLLE1BQU1BLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBTDtRQUN2RkEsc0JBQWtCQSxzQkFBUUE7aUJBQTFCQSxjQUFzQ00sTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBTjtRQUMxREEsc0JBQWtCQSx1QkFBU0E7aUJBQTNCQSxjQUF1Q08sTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBUDtRQUM1REEsc0JBQWtCQSxvQkFBTUE7aUJBQXhCQSxjQUFvQ1EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBUjtRQUN0REEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ1MsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBVDtRQUNuRUEsc0JBQWtCQSxvQkFBTUE7aUJBQXhCQSxjQUFvQ1UsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBVjtRQUN0REEsc0JBQWtCQSxnQ0FBa0JBO2lCQUFwQ0EsY0FBZ0RXLE1BQU1BLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBWDtRQUM3RUEsc0JBQWtCQSwyQkFBYUE7aUJBQS9CQSxjQUEyQ1ksTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBWjtRQUNuRUEsc0JBQWtCQSxzQkFBUUE7aUJBQTFCQSxjQUFzQ2EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBYjtRQUMxREEsc0JBQWtCQSw2QkFBZUE7aUJBQWpDQSxjQUE2Q2MsTUFBTUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFkO1FBQ3ZFQSxzQkFBa0JBLDJCQUFhQTtpQkFBL0JBLGNBQTJDZSxNQUFNQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFmO1FBQ25FQSxzQkFBa0JBLG1CQUFLQTtpQkFBdkJBLGNBQW1DZ0IsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBaEI7UUFDckRBLGlCQUFDQTtJQUFEQSxDQWhCQUosQUFnQkNJLElBQUFKO0lBaEJZQSx3QkFBVUEsYUFnQnRCQSxDQUFBQTtJQUVBQTtRQUFBcUI7UUF3QkFDLENBQUNBO1FBdkJDRCxzQkFBa0JBLDJCQUFRQTtpQkFBMUJBO2dCQUNFRSxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxJQUFJQTtvQkFDZkEsVUFBVUEsQ0FBQ0EsdUJBQXVCQTtvQkFDbENBLFVBQVVBLENBQUNBLFFBQVFBO2lCQUNwQkEsQ0FBQ0E7WUFDSkEsQ0FBQ0E7OztXQUFBRjtRQUNEQSxzQkFBa0JBLDBCQUFPQTtpQkFBekJBO2dCQUNFRyxNQUFNQSxDQUFDQTtvQkFDTEEsVUFBVUEsQ0FBQ0EsU0FBU0E7b0JBQ3BCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLE1BQU1BO29CQUNqQkEsVUFBVUEsQ0FBQ0EsTUFBTUE7b0JBQ2pCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLGtCQUFrQkE7b0JBQzdCQSxVQUFVQSxDQUFDQSxhQUFhQTtvQkFDeEJBLFVBQVVBLENBQUNBLFFBQVFBO29CQUNuQkEsVUFBVUEsQ0FBQ0EsZUFBZUE7aUJBRzNCQSxDQUFDQTtZQUNKQSxDQUFDQTs7O1dBQUFIO1FBQ0hBLHNCQUFDQTtJQUFEQSxDQXhCQXJCLEFBd0JDcUIsSUFBQXJCO0lBeEJZQSw2QkFBZUEsa0JBd0IzQkEsQ0FBQUE7SUFFRkE7UUFBQXlCO1FBS0FDLENBQUNBO1FBSkFELHNCQUFrQkEsbUJBQUdBO2lCQUFyQkEsY0FBaUNFLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDOUNBLHNCQUFrQkEscUJBQUtBO2lCQUF2QkEsY0FBbUNHLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7UUFDcERBLHNCQUFrQkEsd0JBQVFBO2lCQUExQkEsY0FBc0NJLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUo7UUFDMURBLHNCQUFrQkEsdUJBQU9BO2lCQUF6QkEsY0FBcUNLLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUw7UUFDekRBLG1CQUFDQTtJQUFEQSxDQUxBekIsQUFLQ3lCLElBQUF6QjtJQUxZQSwwQkFBWUEsZUFLeEJBLENBQUFBO0FBd0JGQSxDQUFDQSxFQTdITSxDQTBISkEsWUExSGlCLEtBQWIsYUFBYSxRQTZIbkI7O0FDN0hELGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFFekMsSUFBTyxhQUFhLENBK0JuQjtBQS9CRCxXQUFPLGFBQWEsRUFBQyxDQUFDO0lBQ1RBLHFCQUFPQSxHQUFHQSxhQUFhQSxDQUFDQTtJQUN4QkEsa0JBQUlBLEdBQUdBLEdBQUdBLEdBQUdBLHFCQUFPQSxDQUFDQTtJQUNyQkEsMEJBQVlBLEdBQUdBLGtCQUFJQSxHQUFHQSxPQUFPQSxDQUFDQTtJQUM5QkEsd0JBQVVBLEdBQUdBLGVBQWVBLENBQUNBO0lBQzdCQSx3QkFBVUEsR0FBR0EseUJBQXlCQSxDQUFDQTtJQUN2Q0EsMEJBQVlBLEdBQUdBLHdCQUFVQSxHQUFHQSxPQUFPQSxDQUFDQTtJQUNwQ0EsaUJBQUdBLEdBQWtCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSx3QkFBVUEsQ0FBQ0EsQ0FBQ0E7SUFFNUNBLDhCQUFnQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFFeEJBLDRCQUFjQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ2pEQSx5QkFBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7SUFHeENBLHNCQUFRQSxHQUFvQkEsU0FBU0EsQ0FBQ0E7SUFDdENBLHVCQUFTQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUVmQSwrQkFBaUJBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pCQSxpQ0FBbUJBLEdBQUdBLElBQUlBLENBQUNBO0lBQzNCQSxzQ0FBd0JBLEdBQUdBLEdBQUdBLENBQUNBO0lBRS9CQSw4QkFBZ0JBLEdBQUdBLFNBQVNBLENBQUNBO0lBRTdCQSx1QkFBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFHbkJBLCtCQUFpQkEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDN0JBLHFDQUF1QkEsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFDMUNBLDZCQUFlQSxHQUFHQSxNQUFNQSxDQUFDQTtJQUN6QkEseUJBQVdBLEdBQUdBLElBQUlBLENBQUNBO0FBQ2hDQSxDQUFDQSxFQS9CTSxhQUFhLEtBQWIsYUFBYSxRQStCbkI7O0FDbENELCtDQUErQztBQUUvQyxJQUFPLGFBQWEsQ0FxcENuQjtBQXJwQ0QsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUVwQkE7UUFDRStCLElBQUlBLEVBQUVBLEdBQUdBLDBCQUEwQkEsRUFBRUEsQ0FBQ0E7UUFDdENBLEVBQUVBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ1BBLE1BQU1BLENBQUNBLGNBQWNBLEdBQUdBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNaQSxDQUFDQTtJQUNIQSxDQUFDQTtJQVBlL0IscUNBQXVCQSwwQkFPdENBLENBQUFBO0lBRURBO1FBQ0VnQyxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxzQkFBUUEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ1pBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ2pCQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFOZWhDLHVCQUFTQSxZQU14QkEsQ0FBQUE7SUFFREE7UUFDRWlDLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLHNCQUFRQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxXQUFXQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7UUFDbEJBLENBQUNBO1FBQ0RBLElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSx5QkFBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakJBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLGlDQUFtQkEsRUFBRUEsT0FBT0EsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxvQkFBb0JBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQzdIQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFWZWpDLHlCQUFXQSxjQVUxQkEsQ0FBQUE7SUFFREE7UUFDRWtDLE1BQU1BLENBQUNBLHVCQUFTQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFGZWxDLDBCQUFZQSxlQUUzQkEsQ0FBQUE7SUFFREE7UUFDRW1DLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLCtCQUFpQkEsQ0FBQ0EsQ0FBQ0E7SUFDekRBLENBQUNBO0lBRmVuQyxpQ0FBbUJBLHNCQUVsQ0EsQ0FBQUE7SUFFREE7UUFDRW9DLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLGlDQUFtQkEsQ0FBQ0EsQ0FBQ0E7SUFDN0RBLENBQUNBO0lBRmVwQyxnQ0FBa0JBLHFCQUVqQ0EsQ0FBQUE7SUFFREEsdUJBQThCQSxJQUFXQTtRQUN2Q3FDLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLEtBQUtBLHdCQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxDQUFDQTtRQUMvQkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQWVBLENBQUNBLFFBQVFBLEVBQUVBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLENBQUNBLEtBQUtBLElBQUlBLEVBQVZBLENBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZEQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEVBQUVBLENBQUNBO1FBQy9CQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBZUEsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsQ0FBQ0EsS0FBS0EsSUFBSUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdERBLE1BQU1BLENBQUNBLGtCQUFrQkEsRUFBRUEsQ0FBQ0E7UUFDOUJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBWGVyQywyQkFBYUEsZ0JBVzVCQSxDQUFBQTtJQUVEQTtRQUNFc0MsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsbUJBQW1CQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUNoRUEsQ0FBQ0E7SUFGZXRDLDhCQUFnQkEsbUJBRS9CQSxDQUFBQTtJQUVEQTtRQUNFdUMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxDQUFDQSxDQUFDQTtJQUMvREEsQ0FBQ0E7SUFGZXZDLDZCQUFlQSxrQkFFOUJBLENBQUFBO0lBRURBLDhCQUFxQ0EsTUFBTUEsRUFBRUEsZUFBZUEsRUFBRUEsT0FBd0JBLEVBQUVBLEtBQXVCQTtRQUM3R3dDLElBQUlBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwQkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLHlDQUF5Q0EsQ0FBQ0EsQ0FBQ0E7WUFDckRBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLFVBQUNBLEdBQUdBO2dCQUMxQkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO2dCQUM5QkEsb0JBQW9CQSxDQUFDQSxHQUFHQSxFQUFFQSxlQUFlQSxFQUFFQSxPQUFPQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM3REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDSEEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLEVBQUVBLE1BQU1BLEVBQUVBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7WUFDckRBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBO1FBQ3RDQSxJQUFJQSxRQUFRQSxHQUFHQSxlQUFlQSxDQUFDQSxJQUFJQSxHQUFHQSxVQUFVQSxDQUFDQSxDQUFDQTtRQUNsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDZEEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLG9DQUFvQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDdERBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNWQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0Esc0JBQXNCQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUMxQ0EsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFFREEsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsQ0FBQ0EsS0FBS0EsSUFBSUEsRUFBVkEsQ0FBVUEsQ0FBQ0EsQ0FBQUE7UUFDOURBLElBQUlBLE1BQU1BLEdBQUdBLFFBQVFBLEdBQUdBLFVBQVVBLEdBQUdBLE9BQU9BLENBQUNBO1FBRTdDQSxJQUFJQSxlQUFlQSxHQUFHQSxVQUFDQSxJQUFJQTtZQUN6QkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZEEsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLENBQUNBO1lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNaQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNoQkEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQ0E7UUFDRkEsSUFBSUEsYUFBYUEsR0FBR0EsVUFBQ0EsR0FBR0E7WUFDdEJBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSwrQkFBK0JBLEVBQUVBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3BFQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDYkEsQ0FBQ0E7UUFDSEEsQ0FBQ0EsQ0FBQUE7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDYkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLG9DQUFvQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaERBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLElBQUlBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLGVBQWVBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO1FBQ3RFQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxpQkFBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsbUNBQW1DQSxDQUFDQSxDQUFDQTtZQUMvQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsZUFBZUEsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFDOURBLENBQUNBO0lBQ0hBLENBQUNBO0lBbkRleEMsa0NBQW9CQSx1QkFtRG5DQSxDQUFBQTtJQUVEQSx3QkFBK0JBLEtBQVlBLEVBQUVBLFdBQWtCQSxFQUFFQSxTQUF1Q0EsRUFBRUEsZUFBZUE7UUFDdkh5QyxJQUFJQSxNQUFNQSxHQUFHQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWkEsaUJBQUdBLENBQUNBLEtBQUtBLENBQUNBLHNCQUFzQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDekNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBO1FBRURBLElBQUlBLE1BQU1BLEdBQVNBO1lBQ2pCQSxTQUFTQSxFQUFFQSwwQkFBMEJBO1NBQ3RDQSxDQUFBQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxLQUFLQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUFFREEsSUFBSUEsR0FBR0EsR0FBR0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7UUFDL0RBLGlCQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsUUFBUUEsR0FBR0EsU0FBU0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUE7WUFDbENBLEtBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUVBLE9BQU9BLEVBQUVBLEtBQUtBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBO1lBQ3ZEQSxNQUFNQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFDQTtZQUN6Q0EsSUFBSUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsRUFBRUEsTUFBTUEsRUFBRUEsTUFBTUEsRUFBQ0E7WUFDdENBLE1BQU1BLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBO29CQUMzQ0EsRUFBRUEsRUFBRUEsS0FBS0E7aUJBQ1ZBLEVBQUVBLE1BQU1BLENBQUNBLEVBQUNBO1NBQ1pBLENBQUNBLENBQUNBO1FBQ0hBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQXpCZXpDLDRCQUFjQSxpQkF5QjdCQSxDQUFBQTtJQUVEQTtRQUNFMEMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFGZTFDLHNDQUF3QkEsMkJBRXZDQSxDQUFBQTtJQUVEQTtRQUNFMkMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxvQkFBb0JBLENBQUNBLENBQUNBO0lBQzdGQSxDQUFDQTtJQUZlM0Msc0NBQXdCQSwyQkFFdkNBLENBQUFBO0lBRURBO1FBQ0U0QyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7SUFDM0ZBLENBQUNBO0lBRmU1QywrQkFBaUJBLG9CQUVoQ0EsQ0FBQUE7SUFFREE7UUFDRTZDLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDbEZBLENBQUNBO0lBRmU3QywyQkFBYUEsZ0JBRTVCQSxDQUFBQTtJQUVEQTtRQUNFOEMsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsdUJBQXVCQSxFQUFFQSxFQUFFQSxtQkFBbUJBLENBQUNBLENBQUNBO0lBQzVGQSxDQUFDQTtJQUZlOUMscUNBQXVCQSwwQkFFdENBLENBQUFBO0lBRURBO1FBQ0UrQyxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLGVBQWVBLENBQUNBLENBQUNBO0lBQ3hGQSxDQUFDQTtJQUZlL0MsaUNBQW1CQSxzQkFFbENBLENBQUFBO0lBRURBO1FBQ0VnRCxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxFQUFFQSx1QkFBdUJBLEVBQUVBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO0lBQ2xGQSxDQUFDQTtJQUZlaEQsMkJBQWFBLGdCQUU1QkEsQ0FBQUE7SUFFREE7UUFDRWlELE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLHVCQUF1QkEsRUFBRUEsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDckZBLENBQUNBO0lBRmVqRCw4QkFBZ0JBLG1CQUUvQkEsQ0FBQUE7SUFFREEsc0JBQTZCQSxNQUFNQTtRQUNqQ2tELElBQUlBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFVBQVVBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1FBQzdEQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxHQUFHQSw4QkFBZ0JBLENBQUNBO0lBQzVDQSxDQUFDQTtJQUhlbEQsMEJBQVlBLGVBRzNCQSxDQUFBQTtJQUVEQSxtQkFBMEJBLE1BQU1BO1FBQzlCbUQsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDMURBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLEdBQUdBLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUhlbkQsdUJBQVNBLFlBR3hCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLE1BQU1BO1FBQzVCb0QsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbEhBLENBQUNBO0lBRmVwRCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLGlCQUF3QkEsTUFBTUE7UUFDNUJxRCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxVQUFVQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNwRkEsQ0FBQ0E7SUFGZXJELHFCQUFPQSxVQUV0QkEsQ0FBQUE7SUFFREEscUJBQTRCQSxNQUFNQTtRQUNoQ3NELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3BEQSxDQUFDQTtJQUZldEQseUJBQVdBLGNBRTFCQSxDQUFBQTtJQUVEQSxpQkFBd0JBLEdBQUdBO1FBQ3pCdUQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0EsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbklBLENBQUNBO0lBRmV2RCxxQkFBT0EsVUFFdEJBLENBQUFBO0lBRURBLG1CQUEwQkEsR0FBR0E7UUFDM0J3RCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxRQUFRQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFGZXhELHVCQUFTQSxZQUV4QkEsQ0FBQUE7SUFFREEsa0JBQXlCQSxPQUFPQTtRQUM5QnlELE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUZlekQsc0JBQVFBLFdBRXZCQSxDQUFBQTtJQUVEQSw4QkFBcUNBLE1BQU1BO1FBQ3pDMEQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsbUJBQW1CQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNqRUEsQ0FBQ0E7SUFGZTFELGtDQUFvQkEsdUJBRW5DQSxDQUFBQTtJQUFBQSxDQUFDQTtJQUdGQSxJQUFJQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQTtJQUNyQkEsbUJBQUtBLEdBQUdBLFlBQVlBLEdBQUdBLGtCQUFrQkEsQ0FBQ0E7SUFDMUNBLDBCQUFZQSxHQUFHQSxZQUFZQSxHQUFHQSx5QkFBeUJBLENBQUNBO0lBQ3hEQSwwQkFBWUEsR0FBR0EsWUFBWUEsR0FBR0EsZUFBZUEsQ0FBQ0E7SUFFekRBLHNCQUE2QkEsU0FBU0E7UUFFcEMyRCxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNkQSxDQUFDQTtJQUhlM0QsMEJBQVlBLGVBRzNCQSxDQUFBQTtJQUVEQSxxQ0FBNENBLFNBQVNBO1FBRW5ENEQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFIZTVELHlDQUEyQkEsOEJBRzFDQSxDQUFBQTtJQUVEQSxtQkFBMEJBLFNBQVNBO1FBRWpDNkQsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFIZTdELHVCQUFTQSxZQUd4QkEsQ0FBQUE7SUFFREEsaUJBQXdCQSxNQUFNQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQTtRQUM1QzhELE1BQU1BLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxNQUFNQSxDQUFDQTtRQUNUQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNSQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUNqQkEsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLE1BQU1BLENBQUNBO1FBQ1RBLENBQUNBO1FBQ0RBLElBQUlBLElBQUlBLEdBQUdBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBLElBQU9BLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNUQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN6Q0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDckJBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ05BLE1BQU1BLENBQUNBLEVBQUVBLEdBQUdBLFNBQVNBLENBQUNBO1lBQ3RCQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUNqQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsU0FBU0EsQ0FBQ0E7UUFDMUJBLENBQUNBO0lBQ0hBLENBQUNBO0lBckJlOUQscUJBQU9BLFVBcUJ0QkEsQ0FBQUE7SUFLREEsd0JBQStCQSxNQUFNQSxFQUFFQSxhQUF3Q0E7UUFB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QUVIQSxJQUFJQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQSxRQUFRQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUN0Q0EsSUFBSUEsc0JBQXNCQSxHQUFHQSxPQUFPQSxDQUFDQSxzQkFBc0JBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2xFQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxFQUFFQSxzQkFBc0JBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3ZFQSxJQUFJQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUNqQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDOUJBLElBQUlBLE9BQU9BLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzFCQSxJQUFJQSxxQkFBcUJBLEdBQUdBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdERBLElBQUlBLFlBQVlBLEdBQUdBLE9BQU9BLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7WUFDbERBLElBQUlBLElBQUlBLEdBQUdBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLFlBQVlBLENBQUNBO1lBQzVDQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUMxQkEs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QUFLQSxDQUFDQTt3QkFDeENBLENBQUNBO3dCQUNEQSxJQUFJQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDakNBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNaQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDbENBLENBQUNBO3dCQUNEQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDaENBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzRCQUNqQkEsSUFBSUEsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7NEJBQ2xCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDdEJBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNyQ0EsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUM3QkEsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsR0FBR0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3JDQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ05BLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNB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UUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFFeENBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO2dCQUNsQkEsS0FBS0EsMEJBQVlBLENBQUNBLEtBQUtBLENBQUNBO2dCQUN4QkEsS0FBS0EsMEJBQVlBLENBQUNBLFFBQVFBO29CQUN4QkEsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ3RCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLFVBQUNBLFVBQTRCQTs0QkFDeERBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNsQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ0xBLENBQUNBO29CQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLEdBQUdBLEdBQUdBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBO29CQUM5RkEsQ0FBQ0E7b0JBQ0RBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO29CQUN0REEsS0FBS0EsQ0FBQ0E7Z0JBQ1JBLEtBQUtBLDBCQUFZQSxDQUFDQSxPQUFPQTtvQkFDdkJBLE9BQU9B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QUNBLEdBQUdBLElBQUtBLE9BQUFBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLEVBQVBBLENBQU9BLENBQUNBLENBQUNBOzRCQUMvQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7NEJBQzVCQSxLQUFLQSxDQUFDQTt3QkFDUkEsS0FBS0EsMEJBQVlBLENBQUNBLFFBQVFBOzRCQUN4QkEsS0FBS0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTs0QkFDakNBLEtBQUtBLENBQUNBO3dCQUNSQSxLQUFLQSwwQkFBWUEsQ0FBQ0EsT0FBT0E7NEJBQ3ZCQSxLQUFLQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBOzRCQUNoQ0EsS0FBS0EsQ0FBQ0E7d0JBQ1JBOzRCQUNFQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxvQ0FBb0NBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO29CQUM1REEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO1lBQ0hBLENBQUNBLENBQUFBO1lBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO1FBQ2RBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ0pBLENBQUNBLEVBellNLGFBQWEsS0FBYixhQUFhLFFBeVluQiIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBDb3B5cmlnaHQgMjAxNC0yMDE1IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzXG4vLy8gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyBhcyBpbmRpY2F0ZWQgYnkgdGhlIEBhdXRob3IgdGFncy5cbi8vL1xuLy8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8vXG4vLy8gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vL1xuLy8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGlicy9oYXd0aW8tdXRpbGl0aWVzL2RlZnMuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby1vYXV0aC9kZWZzLmQudHNcIi8+XG4iLCJtb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVBMSUNBVElPTl9DT05UUk9MTEVSUygpOnN0cmluZyB7IHJldHVybiBcInJlcGxpY2F0aW9uY29udHJvbGxlcnNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNJRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9MSUNZX0JJTkRJTkdTLFxuICAgICAgICAvL1dhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgLy9XYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfVxuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIFdhdGNoZXJTZXJ2aWNlIHtcblx0XHRoYXNXZWJTb2NrZXQ6IGJvb2xlYW47XG5cdFx0YWRkQ3VzdG9taXplcjogKHR5cGU6IHN0cmluZywgY3VzdG9taXplcjogKG9iajphbnkpID0+IHZvaWQpID0+IHZvaWQ7XG5cdFx0Z2V0VHlwZXM6ICgpID0+IEFycmF5PHN0cmluZz47XG5cdFx0Z2V0TmFtZXNwYWNlOiAoKSA9PiBzdHJpbmc7XG5cdFx0c2V0TmFtZXNwYWNlOiAobmFtZXNwYWNlOiBzdHJpbmcpID0+IHZvaWQ7XG5cdFx0Z2V0T2JqZWN0czogKHR5cGU6IHN0cmluZykgPT4gQXJyYXk8YW55Pjtcblx0XHRnZXRPYmplY3RNYXA6ICh0eXBlOiBzdHJpbmcpID0+IE9iamVjdE1hcDtcblx0XHRhZGRBY3Rpb246ICh0eXBlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBmbjogKG9iajphbnkpID0+IHZvaWQpID0+IHZvaWQ7XG5cdFx0cmVnaXN0ZXJMaXN0ZW5lcjogKGZuOihvYmplY3RzOk9iamVjdE1hcCkgPT4gdm9pZCkgPT4gdm9pZDtcblx0fVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZVBvZCB7XG4gICAgaWQ6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTpzdHJpbmc7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuICBleHBvcnQgdmFyIGNvbnRleHQgPSAnL2t1YmVybmV0ZXMnO1xuICBleHBvcnQgdmFyIGhhc2ggPSAnIycgKyBjb250ZXh0O1xuICBleHBvcnQgdmFyIGRlZmF1bHRSb3V0ZSA9IGhhc2ggKyAnL2FwcHMnO1xuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gXCJ2MVwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBcInYxXCI7XG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG5cbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcblxuICAvLyBrdWJlcm5ldGVzIHNlcnZpY2UgbmFtZXNcbiAgZXhwb3J0IHZhciBraWJhbmFTZXJ2aWNlTmFtZSA9IFwia2liYW5hXCI7XG4gIGV4cG9ydCB2YXIgZmFicmljOEZvcmdlU2VydmljZU5hbWUgPSBcImZhYnJpYzgtZm9yZ2VcIjtcbiAgZXhwb3J0IHZhciBnb2dzU2VydmljZU5hbWUgPSBcImdvZ3NcIjtcbiAgZXhwb3J0IHZhciBpc09wZW5TaGlmdCA9IHRydWU7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSB7XG4gICAgdmFyIG5zID0gY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UoKTtcbiAgICBpZiAobnMpIHtcbiAgICAgIHJldHVybiBcIi9uYW1lc3BhY2VzL1wiICsgbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgdmFyIHByZWZpeCA9IENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKTtcbiAgICBpZiAoIXByZWZpeCkge1xuICAgICAgcHJlZml4ID0gJ2FwaSc7XG4gICAgfVxuICAgIHJldHVybiBDb3JlLnRyaW1MZWFkaW5nKHByZWZpeCwgJy8nKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvc0FwaVByZWZpeCgpIHtcbiAgICB2YXIgcHJlZml4ID0gQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdvcGVuc2hpZnQnLCAncHJlZml4J10pO1xuICAgIGlmICghcHJlZml4KSB7XG4gICAgICBwcmVmaXggPSAnb2FwaSc7XG4gICAgfVxuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnRyaW1MZWFkaW5nKHByZWZpeCwgJy8nKTtcbiAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBkZWZhdWx0T1NBcGlWZXJzaW9uLCBcInByb3h5XCIsIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwic2VydmljZXMvdGVtcGxhdGVzXCIsIGFuc3dlcik7XG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbWFzdGVyQXBpVXJsKCkge1xuICAgIHJldHVybiBtYXN0ZXJVcmwgfHwgXCJcIjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYXBpUHJlZml4KCksIGRlZmF1bHRBcGlWZXJzaW9uKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvc0FwaVByZWZpeCgpLCBkZWZhdWx0T1NBcGlWZXJzaW9uKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGb3JUeXBlKHR5cGU6c3RyaW5nKSB7XG4gICAgaWYgKHR5cGUgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICB9XG4gICAgaWYgKF8uYW55KE5hbWVzcGFjZWRUeXBlcy5rOHNUeXBlcywgKHQpID0+IHQgPT09IHR5cGUpKSB7XG4gICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSB0eXBlKSkge1xuICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPckNyZWF0ZU9iamVjdChvYmplY3QsIEt1YmVybmV0ZXNNb2RlbCwgc3VjY2Vzcz86IChkYXRhKSA9PiB2b2lkLCBlcnJvcj86IChlcnJvcikgPT4gdm9pZCkge1xuICAgIHZhciBraW5kID0gZ2V0S2luZChvYmplY3QpO1xuICAgIGlmIChraW5kID09PSBcIkxpc3RcIikge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGlzIGEgbGlzdCwgZGVwbG95aW5nIGFsbCBvYmplY3RzXCIpO1xuICAgICAgXy5mb3JFYWNoKG9iamVjdC5pdGVtcywgKG9iaikgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJEZXBsb3lpbmc6IFwiLCBvYmopO1xuICAgICAgICB1cGRhdGVPckNyZWF0ZU9iamVjdChvYmosIEt1YmVybmV0ZXNNb2RlbCwgc3VjY2VzcywgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0OiBcIiwgb2JqZWN0LCBcIiBoYXMgbm8gb2JqZWN0IHR5cGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGtpbmQgPSBraW5kLnRvTG93ZXJDYXNlKCkucGx1cmFsaXplKCk7XG4gICAgdmFyIHJlc291cmNlID0gS3ViZXJuZXRlc01vZGVsW2tpbmQgKyAnUmVzb3VyY2UnXTtcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICBsb2cuZGVidWcoXCJVbmFibGUgdG8gZmluZCByZXNvdXJjZSBmb3Iga2luZDogXCIsIGtpbmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IGdldE5hbWUob2JqZWN0KTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBoYXMgbm8gbmFtZTogXCIsIG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzVXBkYXRlID0gXy5hbnkoS3ViZXJuZXRlc01vZGVsW2tpbmRdLCAobikgPT4gbiA9PT0gbmFtZSlcbiAgICB2YXIgYWN0aW9uID0gaXNVcGRhdGUgPyBcIk1vZGlmaWVkXCIgOiBcIkFkZGVkXCI7XG5cbiAgICB2YXIgc3VjY2Vzc0ludGVybmFsID0gKGRhdGEpID0+IHtcbiAgICAgIGxvZy5kZWJ1ZyhhY3Rpb24sIGRhdGEpO1xuICAgICAgaWYgKCFpc1VwZGF0ZSkge1xuICAgICAgICBLdWJlcm5ldGVzTW9kZWxba2luZF0ucHVzaChkYXRhKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIHN1Y2Nlc3MoZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgZXJyb3JJbnRlcm5hbCA9IChlcnIpID0+IHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBhZGQvbW9kaWZ5IG9iamVjdDogXCIsIG9iamVjdCwgXCIgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc1VwZGF0ZSkge1xuICAgICAgbG9nLmRlYnVnKFwiT2JqZWN0IGFscmVhZHkgZXhpc3RzLCB1cGRhdGluZy4uLlwiKTtcbiAgICAgIHJlc291cmNlLnNhdmUoeyBpZDogbmFtZSB9LCBvYmplY3QsIHN1Y2Nlc3NJbnRlcm5hbCwgZXJyb3JJbnRlcm5hbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIk9iamVjdCBkb2Vzbid0IGV4aXN0LCBjcmVhdGluZy4uLlwiKTtcbiAgICAgIHJlc291cmNlLmNyZWF0ZSh7fSwgb2JqZWN0LCBzdWNjZXNzSW50ZXJuYWwsIGVycm9ySW50ZXJuYWwpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXNvdXJjZSh0aGluZzpzdHJpbmcsIHVybFRlbXBsYXRlOnN0cmluZywgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlLCBLdWJlcm5ldGVzTW9kZWwpIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4Rm9yVHlwZSh0aGluZyk7XG4gICAgaWYgKCFwcmVmaXgpIHtcbiAgICAgIGxvZy5kZWJ1ZyhcIkludmFsaWQgdHlwZSBnaXZlbjogXCIsIHRoaW5nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSA8YW55PiB7XG4gICAgICBuYW1lc3BhY2U6IGN1cnJlbnRLdWJlcm5ldGVzTmFtZXNwYWNlXG4gICAgfVxuICAgIGlmICh0aGluZyA9PT0gXCJuYW1lc3BhY2VzXCIpIHtcbiAgICAgIHBhcmFtcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeCwgdXJsVGVtcGxhdGUpO1xuICAgIGxvZy5kZWJ1ZyhcIlVybCBmb3IgXCIsIHRoaW5nLCBcIjogXCIsIHVybCk7XG4gICAgdmFyIHJlc291cmNlID0gJHJlc291cmNlKHVybCwgbnVsbCwge1xuICAgICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJywgaXNBcnJheTogZmFsc2UsIHBhcmFtczogcGFyYW1zfSxcbiAgICAgIGNyZWF0ZTogeyBtZXRob2Q6ICdQT1NUJywgcGFyYW1zOiBwYXJhbXN9LFxuICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQVVQnLCBwYXJhbXM6IHBhcmFtc30sXG4gICAgICBkZWxldGU6IHsgbWV0aG9kOiAnREVMRVRFJywgcGFyYW1zOiBfLmV4dGVuZCh7XG4gICAgICAgIGlkOiAnQGlkJ1xuICAgICAgfSwgcGFyYW1zKX1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaW1hZ2VSZXBvc2l0b3JpZXNSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2ltYWdlc3RyZWFtc1wiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZXBsb3ltZW50Q29uZmlnc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvZGVwbG95bWVudGNvbmZpZ3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRzTG9nc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvcHJveHkvYnVpbGRsb2dzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkc1Jlc3RVUkwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihvcGVuc2hpZnRBcGlVcmwoKSwga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSwgXCIvYnVpbGRzXCIpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlnSG9va3NSZXN0VVJMKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3BlbnNoaWZ0QXBpVXJsKCksIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCksIFwiL2J1aWxkY29uZmlnaG9va3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWdzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9idWlsZGNvbmZpZ3NcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcm91dGVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi9yb3V0ZXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVzUmVzdFVSTCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9wZW5zaGlmdEFwaVVybCgpLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcIi90ZW1wbGF0ZXNcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IGRlZmF1bHROYW1lc3BhY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvL3ZhciBmYWJyaWNEb21haW4gPSBGYWJyaWMuam14RG9tYWluO1xuICB2YXIgZmFicmljRG9tYWluID0gXCJpby5mYWJyaWM4XCI7XG4gIGV4cG9ydCB2YXIgbWJlYW4gPSBmYWJyaWNEb21haW4gKyBcIjp0eXBlPUt1YmVybmV0ZXNcIjtcbiAgZXhwb3J0IHZhciBtYW5hZ2VyTUJlYW4gPSBmYWJyaWNEb21haW4gKyBcIjp0eXBlPUt1YmVybmV0ZXNNYW5hZ2VyXCI7XG4gIGV4cG9ydCB2YXIgYXBwVmlld01CZWFuID0gZmFicmljRG9tYWluICsgXCI6dHlwZT1BcHBWaWV3XCI7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzS3ViZXJuZXRlcyh3b3Jrc3BhY2UpIHtcbiAgICAvLyByZXR1cm4gd29ya3NwYWNlLnRyZWVDb250YWluc0RvbWFpbkFuZFByb3BlcnRpZXMoZmFicmljRG9tYWluLCB7dHlwZTogXCJLdWJlcm5ldGVzXCJ9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0t1YmVybmV0ZXNUZW1wbGF0ZU1hbmFnZXIod29ya3NwYWNlKSB7XG4gICAgLy8gcmV0dXJuIHdvcmtzcGFjZS50cmVlQ29udGFpbnNEb21haW5BbmRQcm9wZXJ0aWVzKGZhYnJpY0RvbWFpbiwge3R5cGU6IFwiS3ViZXJuZXRlc1RlbXBsYXRlTWFuYWdlclwifSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNBcHBWaWV3KHdvcmtzcGFjZSkge1xuICAgIC8vIHJldHVybiB3b3Jrc3BhY2UudHJlZUNvbnRhaW5zRG9tYWluQW5kUHJvcGVydGllcyhmYWJyaWNEb21haW4sIHt0eXBlOiBcIkFwcFZpZXdcIn0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEpzb24oJHNjb3BlLCBpZCwgY29sbGVjdGlvbikge1xuICAgICRzY29wZS5pZCA9IGlkO1xuICAgIGlmICghJHNjb3BlLmZldGNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFpZCkge1xuICAgICAgJHNjb3BlLmpzb24gPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gY29sbGVjdGlvbi5maW5kKChpdGVtKSA9PiB7IHJldHVybiBnZXROYW1lKGl0ZW0pID09PSBpZDsgfSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgICRzY29wZS5qc29uID0gYW5ndWxhci50b0pzb24oaXRlbSwgdHJ1ZSk7XG4gICAgICAkc2NvcGUuaXRlbSA9IGl0ZW07XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICRzY29wZS5qc29uID0gJyc7XG4gICAgICAkc2NvcGUuaXRlbSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIGxpbmsgVVJMIGZvciBlaXRoZXIgdGhlIHNlcnZpY2UgbmFtZSBvciB0aGUgc2VydmljZSBvYmplY3RcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlTGlua1VybChzZXJ2aWNlKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoc2VydmljZSkpIHtcbiAgICAgIHZhciBwb3J0YWxJUCA9IHNlcnZpY2UuJGhvc3Q7XG4gICAgICAvLyBsZXRzIGFzc3VtZSBubyBjdXN0b20gcG9ydCBmb3Igbm93IGZvciBleHRlcm5hbCByb3V0ZXNcbiAgICAgIHZhciBwb3J0ID0gbnVsbDtcbiAgICAgIHZhciBwcm90b2NvbCA9IFwiaHR0cDovL1wiO1xuICAgICAgdmFyIHNwZWMgPSBzZXJ2aWNlLnNwZWM7XG4gICAgICBpZiAoc3BlYykge1xuICAgICAgICBpZiAoIXBvcnRhbElQKSB7XG4gICAgICAgICAgcG9ydGFsSVAgPSBzcGVjLnBvcnRhbElQO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNIdHRwcyA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFzSHR0cCA9IGZhbHNlO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goc3BlYy5wb3J0cywgKHBvcnRTcGVjKSA9PiB7XG4gICAgICAgICAgdmFyIHAgPSBwb3J0U3BlYy5wb3J0O1xuICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICBpZiAocCA9PT0gNDQzKSB7XG4gICAgICAgICAgICAgIGhhc0h0dHBzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gODApIHtcbiAgICAgICAgICAgICAgaGFzSHR0cCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgICAgcG9ydCA9IHA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwb3J0YWxJUCkge1xuICAgICAgICBpZiAoaGFzSHR0cHMpIHtcbiAgICAgICAgICByZXR1cm4gXCJodHRwczovL1wiICsgcG9ydGFsSVA7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzSHR0cCkge1xuICAgICAgICAgIHJldHVybiBcImh0dHA6Ly9cIiArIHBvcnRhbElQO1xuICAgICAgICB9IGVsc2UgaWYgKHBvcnQpIHtcbiAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBwb3J0YWxJUCArIFwiOlwiICsgcG9ydCArIFwiL1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcm90b2NvbCArIHBvcnRhbElQO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZXJ2aWNlKSB7XG4gICAgICB2YXIgc2VydmljZUlkID0gc2VydmljZS50b1N0cmluZygpO1xuICAgICAgaWYgKHNlcnZpY2VJZCkge1xuICAgICAgICB2YXIgU2VydmljZVJlZ2lzdHJ5ID0gZ2V0U2VydmljZVJlZ2lzdHJ5KCk7XG4gICAgICAgIGlmIChTZXJ2aWNlUmVnaXN0cnkpIHtcbiAgICAgICAgICByZXR1cm4gU2VydmljZVJlZ2lzdHJ5LnNlcnZpY2VMaW5rKHNlcnZpY2VJZCkgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgbGlzdCBvZiBwb2RzIGxldHMgaXRlcmF0ZSB0aHJvdWdoIHRoZW0gYW5kIGZpbmQgYWxsIHBvZHMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqIGFuZCByZXR1cm4gY291bnRlcnMgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGUgcG9kXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9kQ291bnRlcnMoc2VsZWN0b3IsIHBvZHMsIG91dHB1dFBvZHMgPSBbXSwgcG9kTGlua1F1ZXJ5ID0gbnVsbCkge1xuICAgIHZhciBmaWx0ZXJGbjtcbiAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgZmlsdGVyRm4gPSBzZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyRm4gPSAocG9kKSA9PiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGdldExhYmVscyhwb2QpKTtcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHtcbiAgICAgIHBvZHNMaW5rOiBcIlwiLFxuICAgICAgdmFsaWQ6IDAsXG4gICAgICB3YWl0aW5nOiAwLFxuICAgICAgZXJyb3I6IDBcbiAgICB9O1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFwb2RMaW5rUXVlcnkpIHtcbiAgICAgICAgcG9kTGlua1F1ZXJ5ID0gbGFiZWxzVG9TdHJpbmcoc2VsZWN0b3IsIFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIGFuc3dlci5wb2RzTGluayA9IENvcmUudXJsKFwiL2t1YmVybmV0ZXMvcG9kcz9xPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBvZExpbmtRdWVyeSkpO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHBvZHMsIHBvZCA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJGbihwb2QpKSB7XG4gICAgICAgICAgb3V0cHV0UG9kcy5wdXNoKHBvZCk7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IGdldFN0YXR1cyhwb2QpO1xuICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIikpIHtcbiAgICAgICAgICAgICAgYW5zd2VyLnZhbGlkICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJ3YWl0XCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJwZW5kXCIpKSB7XG4gICAgICAgICAgICAgIGFuc3dlci53YWl0aW5nICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJ0ZXJtXCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJlcnJvclwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwiZmFpbFwiKSkge1xuICAgICAgICAgICAgICBhbnN3ZXIuZXJyb3IgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5zd2VyLmVycm9yICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4ganNvbiBpbnRvIGFuIGFycmF5IG9mIGl0ZW1zLiBJZiB0aGUganNvbiBjb250YWlucyBhIG5lc3RlZCBzZXQgb2YgaXRlbXMgdGhlbiB0aGF0IGlzIHNvcnRlZDsgc28gdGhhdCBzZXJ2aWNlc1xuICAgKiBhcmUgcHJvY2Vzc2VkIGZpcnN0OyB0aGVuIHR1cm5lZCBpbnRvIGFuIGFycmF5LiBPdGhlcndpc2UgdGhlIGpzb24gaXMgcHV0IGludG8gYW4gYXJyYXkgc28gaXQgY2FuIGJlIHByb2Nlc3NlZCBwb2x5bW9ycGhpY2FsbHlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S3ViZXJuZXRlc0pzb25Ub0l0ZW1zKGpzb24pIHtcbiAgICB2YXIgaXRlbXMgPSBqc29uLml0ZW1zO1xuICAgIGlmIChhbmd1bGFyLmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAvLyBUT0RPIHdlIGNvdWxkIGNoZWNrIGZvciBMaXN0IG9yIENvbmZpZyB0eXBlcyBoZXJlIGFuZCB3YXJuIGlmIG5vdFxuXG4gICAgICAvLyBzb3J0IHRoZSBzZXJ2aWNlcyBmaXJzdFxuICAgICAgdmFyIGFuc3dlciA9IFtdO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcIlNlcnZpY2VcIikge1xuICAgICAgICAgIGFuc3dlci5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ua2luZCAhPT0gXCJTZXJ2aWNlXCIpIHtcbiAgICAgICAgICBhbnN3ZXIucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2pzb25dO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1YxYmV0YTFPcjIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRBcGlWZXJzaW9uID09PSBcInYxYmV0YTFcIiB8fCBkZWZhdWx0QXBpVmVyc2lvbiA9PT0gXCJ2MWJldGEyXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpbmsgdG8gdGhlIGRldGFpbCBwYWdlIGZvciB0aGUgZ2l2ZW4gZW50aXR5XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZW50aXR5UGFnZUxpbmsoZW50aXR5KSB7XG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgdmFyIGlkID0gZ2V0TmFtZShlbnRpdHkpO1xuICAgICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgICBpZiAoa2luZCAmJiBpZCkge1xuICAgICAgICB2YXIgcGF0aCA9IGtpbmQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBraW5kLnN1YnN0cmluZygxKSArIFwic1wiO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWlzSWdub3JlTmFtZXNwYWNlS2luZChraW5kKSkge1xuICAgICAgICAgIHJldHVybiBDb3JlLnVybChVcmxIZWxwZXJzLmpvaW4oJy9rdWJlcm5ldGVzL25hbWVzcGFjZScsIG5hbWVzcGFjZSwgcGF0aCwgaWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQ29yZS51cmwoVXJsSGVscGVycy5qb2luKCcva3ViZXJuZXRlcycsIHBhdGgsIGlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZUtpbmRUb1VyaVBhdGgoa2luZCkge1xuICAgIHZhciBraW5kUGF0aCA9IGtpbmQudG9Mb3dlckNhc2UoKSArIFwic1wiO1xuICAgIGlmIChraW5kUGF0aCA9PT0gXCJyZXBsaWNhdGlvbkNvbnRyb2xsZXJzXCIgJiYgIWlzVjFiZXRhMU9yMigpKSB7XG4gICAgICBraW5kUGF0aCA9IFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiO1xuICAgIH1cbiAgICByZXR1cm4ga2luZFBhdGg7XG4gIH1cblxuICBmdW5jdGlvbiBpc0lnbm9yZU5hbWVzcGFjZUtpbmQoa2luZCkge1xuICAgIHJldHVybiBraW5kID09PSBcIkhvc3RcIiB8fCBraW5kID09PSBcIk1pbmlvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgVVJMIGZvciB0aGUga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNVcmxGb3JLaW5kKEt1YmVybmV0ZXNBcGlVUkwsIGtpbmQsIG5hbWVzcGFjZSA9IG51bGwsIHBhdGggPSBudWxsKSB7XG4gICAgdmFyIHBhdGhTZWdtZW50ID0gXCJcIjtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIiArIENvcmUudHJpbUxlYWRpbmcocGF0aCwgXCIvXCIpO1xuICAgIH1cbiAgICB2YXIga2luZFBhdGggPSByZXNvdXJjZUtpbmRUb1VyaVBhdGgoa2luZCk7XG4gICAgdmFyIGlnbm9yZU5hbWVzcGFjZSA9IGlzSWdub3JlTmFtZXNwYWNlS2luZChraW5kKTtcbiAgICBpZiAoaXNWMWJldGExT3IyKCkgfHwgaWdub3JlTmFtZXNwYWNlKSB7XG4gICAgICB2YXIgcG9zdGZpeCA9IFwiXCI7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFpZ25vcmVOYW1lc3BhY2UpIHtcbiAgICAgICAgcG9zdGZpeCA9IFwiP25hbWVzcGFjZT1cIiArIG5hbWVzcGFjZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oS3ViZXJuZXRlc0FwaVVSTCwga2luZFBhdGgsIHBhdGhTZWdtZW50LCBwb3N0Zml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9uYW1lc3BhY2VzL1wiLCBuYW1lc3BhY2UgLCBraW5kUGF0aCwgcGF0aFNlZ21lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFzZSBVUkwgZm9yIHRoZSBraW5kIG9mIGt1YmVybmV0ZXMgcmVzb3VyY2Ugb3IgbnVsbCBpZiBpdCBjYW5ub3QgYmUgZm91bmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQoS3ViZXJuZXRlc0FwaVVSTCwganNvbikge1xuICAgIHZhciBraW5kID0ganNvbi5raW5kO1xuICAgIGlmIChraW5kKSB7XG4gICAgICByZXR1cm4ga3ViZXJuZXRlc1VybEZvcktpbmQoS3ViZXJuZXRlc0FwaVVSTCwga2luZCwganNvbi5uYW1lc3BhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2cud2FybihcIklnbm9yaW5nIG1pc3Npbmcga2luZCBcIiArIGtpbmQgKyBcIiBmb3Iga3ViZXJuZXRlcyBqc29uOiBcIiArIGFuZ3VsYXIudG9Kc29uKGpzb24pKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzUHJveHlVcmxGb3JTZXJ2aWNlKEt1YmVybmV0ZXNBcGlVUkwsIHNlcnZpY2UsIHBhdGggPSBudWxsKSB7XG4gICAgdmFyIHBhdGhTZWdtZW50ID0gXCJcIjtcbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aFNlZ21lbnQgPSBcIi9cIiArIENvcmUudHJpbUxlYWRpbmcocGF0aCwgXCIvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoU2VnbWVudCA9IFwiL1wiO1xuICAgIH1cbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKHNlcnZpY2UpO1xuICAgIGlmIChpc1YxYmV0YTFPcjIoKSkge1xuICAgICAgdmFyIHBvc3RmaXggPSBcIj9uYW1lc3BhY2U9XCIgKyBuYW1lc3BhY2U7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIFwiL2FwaS9cIiArIGRlZmF1bHRBcGlWZXJzaW9uICsgXCIvcHJveHlcIiArIGt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoKCkgKyBcIi9zZXJ2aWNlcy9cIiArIGdldE5hbWUoc2VydmljZSkgKyBwYXRoU2VnbWVudCArIHBvc3RmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKEt1YmVybmV0ZXNBcGlVUkwsIFwiL2FwaS9cIiArIGRlZmF1bHRBcGlWZXJzaW9uICsgXCIvcHJveHkvbmFtZXNwYWNlcy9cIiArIG5hbWVzcGFjZSArIFwiL3NlcnZpY2VzL1wiICsgZ2V0TmFtZShzZXJ2aWNlKSArIHBhdGhTZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWdSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihidWlsZENvbmZpZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZXBsb3ltZW50Q29uZmlnUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oZGVwbG95bWVudENvbmZpZ3NSZXN0VVJMKCksIGlkKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpbWFnZVJlcG9zaXRvcnlSZXN0VXJsKGlkKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihpbWFnZVJlcG9zaXRvcmllc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRzUmVzdFVSTCgpLCBpZCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYnVpbGRMb2dzUmVzdFVybChpZCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4oYnVpbGRzTG9nc1Jlc3RVUkwoKSwgaWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGFwcGxpY2F0aW9uIEpTT05cbiAgICovXG4gICAgICAvKlxuICBleHBvcnQgZnVuY3Rpb24gcnVuQXBwKCRsb2NhdGlvbiwgJHNjb3BlLCAkaHR0cCwgS3ViZXJuZXRlc0FwaVVSTCwganNvbiwgbmFtZSA9IFwiQXBwXCIsIG9uU3VjY2Vzc0ZuID0gbnVsbCwgbmFtZXNwYWNlID0gbnVsbCwgb25Db21wbGV0ZUZuID0gbnVsbCkge1xuICAgIGlmIChqc29uKSB7XG4gICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhqc29uKSkge1xuICAgICAgICBqc29uID0gYW5ndWxhci5mcm9tSnNvbihqc29uKTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBuYW1lIHx8IFwiQXBwXCI7XG4gICAgICB2YXIgcG9zdGZpeCA9IG5hbWVzcGFjZSA/IFwiIGluIG5hbWVzcGFjZSBcIiArIG5hbWVzcGFjZSA6IFwiXCI7XG5cbiAgICAgIHZhciBpdGVtcyA9IGNvbnZlcnRLdWJlcm5ldGVzSnNvblRvSXRlbXMoanNvbik7XG4gICAgICBhbmd1bGFyLmZvckVhY2goaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgIHZhciB1cmwgPSBrdWJlcm5ldGVzVXJsRm9ySXRlbUtpbmQoS3ViZXJuZXRlc0FwaVVSTCwgaXRlbSk7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAkaHR0cC5wb3N0KHVybCwgaXRlbSkuXG4gICAgICAgICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgICBsb2cuZGVidWcoXCJHb3Qgc3RhdHVzOiBcIiArIHN0YXR1cyArIFwiIG9uIHVybDogXCIgKyB1cmwgKyBcIiBkYXRhOiBcIiArIGRhdGEgKyBcIiBhZnRlciBwb3N0aW5nOiBcIiArIGFuZ3VsYXIudG9Kc29uKGl0ZW0pKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihvbkNvbXBsZXRlRm4pKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZUZuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQ29yZS4kYXBwbHkoJHNjb3BlKTtcbiAgICAgICAgICAgIH0pLlxuICAgICAgICAgIGVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IGRhdGEucmVhc29uO1xuICAgICAgICAgICAgICBpZiAocmVhc29uID09PSBcIkFscmVhZHlFeGlzdHNcIikge1xuICAgICAgICAgICAgICAgIC8vIGxldHMgaWdub3JlIGR1cGxpY2F0ZXNcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJlbnRpdHkgYWxyZWFkeSBleGlzdHMgYXQgXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZhaWxlZCB0byBQT1NUIHRvIFwiICsgdXJsICsgXCIgZ290IHN0YXR1czogXCIgKyBzdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2cud2FybihcIkZhaWxlZCB0byBzYXZlIFwiICsgdXJsICsgXCIgc3RhdHVzOiBcIiArIHN0YXR1cyArIFwiIHJlc3BvbnNlOiBcIiArIGFuZ3VsYXIudG9Kc29uKGRhdGEsIHRydWUpKTtcbiAgICAgICAgICAgIENvcmUubm90aWZpY2F0aW9uKCdlcnJvcicsIG1lc3NhZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgKi9cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmljZSByZWdpc3RyeVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZpY2VSZWdpc3RyeSgpIHtcbiAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgIHJldHVybiBpbmplY3RvciA/IGluamVjdG9yLmdldChcIlNlcnZpY2VSZWdpc3RyeVwiKSA6IG51bGw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGluayB0byB0aGUga2liYW5hIGxvZ3Mgd2ViIGFwcGxpY2F0aW9uXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24ga2liYW5hTG9nc0xpbmsoU2VydmljZVJlZ2lzdHJ5KSB7XG4gICAgdmFyIGxpbmsgPSBTZXJ2aWNlUmVnaXN0cnkuc2VydmljZUxpbmsoa2liYW5hU2VydmljZU5hbWUpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBpZiAoIWxpbmsuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIGxpbmsgKz0gXCIvXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluayArIFwiIy9kYXNoYm9hcmQvRmFicmljOFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbkxvZ3NGb3JQb2RzKFNlcnZpY2VSZWdpc3RyeSwgJHdpbmRvdywgbmFtZXNwYWNlLCBwb2RzKSB7XG4gICAgdmFyIGxpbmsgPSBraWJhbmFMb2dzTGluayhTZXJ2aWNlUmVnaXN0cnkpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICB2YXIgcXVlcnkgPSBcIlwiO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChwb2RzLCAoaXRlbSkgPT4ge1xuICAgICAgICB2YXIgaWQgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICB2YXIgc3BhY2UgPSBxdWVyeSA/IFwiIE9SIFwiIDogXCJcIjtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIHF1ZXJ5ICs9IHNwYWNlICsgJ1wiJyArIGlkICsgJ1wiJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgIHF1ZXJ5ID0gXCIoXCIgKyBxdWVyeSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5ID0gJ2t1YmVybmV0ZXMubmFtZXNwYWNlOlwiJyArIG5hbWVzcGFjZSArICdcIiBBTkQga3ViZXJuZXRlcy5wb2RfbmFtZTonICsgcXVlcnk7XG4gICAgICAgIGxpbmsgKz0gXCI/X2E9KHF1ZXJ5OihxdWVyeV9zdHJpbmc6KHF1ZXJ5OidcIiArIHF1ZXJ5ICsgXCInKSkpXCI7XG4gICAgICAgIHZhciBuZXdXaW5kb3cgPSAkd2luZG93Lm9wZW4obGluaywgXCJ2aWV3TG9nc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcmVzaXplQ29udHJvbGxlcigkaHR0cCwgS3ViZXJuZXRlc0FwaVVSTCwgcmVwbGljYXRpb25Db250cm9sbGVyLCBuZXdSZXBsaWNhcywgb25Db21wbGV0ZUZuID0gbnVsbCkge1xuICAgIHZhciBpZCA9IGdldE5hbWUocmVwbGljYXRpb25Db250cm9sbGVyKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKHJlcGxpY2F0aW9uQ29udHJvbGxlcikgfHwgXCJcIjtcbiAgICB2YXIgdXJsID0ga3ViZXJuZXRlc1VybEZvcktpbmQoS3ViZXJuZXRlc0FwaVVSTCwgXCJSZXBsaWNhdGlvbkNvbnRyb2xsZXJcIiwgbmFtZXNwYWNlLCBpZCk7XG4gICAgJGh0dHAuZ2V0KHVybCkuXG4gICAgICBzdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHZhciBkZXNpcmVkU3RhdGUgPSBkYXRhLnNwZWM7XG4gICAgICAgICAgaWYgKCFkZXNpcmVkU3RhdGUpIHtcbiAgICAgICAgICAgIGRlc2lyZWRTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgZGF0YS5zcGVjID0gZGVzaXJlZFN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZXNpcmVkU3RhdGUucmVwbGljYXMgPSBuZXdSZXBsaWNhcztcbiAgICAgICAgICAkaHR0cC5wdXQodXJsLCBkYXRhKS5cbiAgICAgICAgICAgIHN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcInVwZGF0ZWQgY29udHJvbGxlciBcIiArIHVybCk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24ob25Db21wbGV0ZUZuKSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5cbiAgICAgICAgICBlcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIHNhdmUgXCIgKyB1cmwgKyBcIiBcIiArIGRhdGEgKyBcIiBcIiArIHN0YXR1cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLlxuICAgICAgZXJyb3IoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIGxvYWQgXCIgKyB1cmwgKyBcIiBcIiArIGRhdGEgKyBcIiBcIiArIHN0YXR1cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzdGF0dXNUZXh0VG9Dc3NDbGFzcyh0ZXh0KSB7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHZhciBsb3dlciA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJva1wiKSkge1xuICAgICAgICByZXR1cm4gJ2ZhIGZhLXBsYXktY2lyY2xlIGdyZWVuJztcbiAgICAgIH0gZWxzZSBpZiAobG93ZXIuc3RhcnRzV2l0aChcIndhaXRcIikgfHwgbG93ZXIuc3RhcnRzV2l0aChcInBlbmRcIikpIHtcbiAgICAgICAgcmV0dXJuICdmYSBmYS1kb3dubG9hZCc7XG4gICAgICB9IGVsc2UgaWYgKGxvd2VyLnN0YXJ0c1dpdGgoXCJ0ZXJtXCIpIHx8IGxvd2VyLnN0YXJ0c1dpdGgoXCJlcnJvclwiKSB8fCBsb3dlci5zdGFydHNXaXRoKFwiZmFpbFwiKSkge1xuICAgICAgICByZXR1cm4gJ2ZhIGZhLW9mZiBvcmFuZ2UnO1xuICAgICAgfSBlbHNlIGlmIChsb3dlci5zdGFydHNXaXRoKFwic3VjY2VlZGVkXCIpKSB7XG4gICAgICAgIHJldHVybiAnZmEgZmEtY2hlY2stY2lyY2xlLW8gZ3JlZW4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2ZhIGZhLXF1ZXN0aW9uIHJlZCc7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHBWaWV3UG9kQ291bnRlcnMoYXBwVmlldykge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgcG9kcyA9IGFwcFZpZXcucG9kcztcbiAgICB2YXIgbG93ZXN0RGF0ZSA9IG51bGw7XG4gICAgYW5ndWxhci5mb3JFYWNoKHBvZHMsIHBvZCA9PiB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBnZXRMYWJlbHMocG9kKTtcbiAgICAgIHZhciBzZWxlY3RvclRleHQgPSBsYWJlbHNUb1N0cmluZyhzZWxlY3RvciwgXCIgXCIpO1xuICAgICAgdmFyIGFuc3dlciA9IG1hcFtzZWxlY3Rvcl07XG4gICAgICBpZiAoIWFuc3dlcikge1xuICAgICAgICBhbnN3ZXIgPSB7XG4gICAgICAgICAgbGFiZWxUZXh0OiBzZWxlY3RvclRleHQsXG4gICAgICAgICAgcG9kc0xpbms6IENvcmUudXJsKFwiL2t1YmVybmV0ZXMvcG9kcz9xPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlbGVjdG9yVGV4dCkpLFxuICAgICAgICAgIHZhbGlkOiAwLFxuICAgICAgICAgIHdhaXRpbmc6IDAsXG4gICAgICAgICAgZXJyb3I6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWFwW3NlbGVjdG9yXSA9IGFuc3dlcjtcbiAgICAgICAgYXJyYXkucHVzaChhbnN3ZXIpO1xuICAgICAgfVxuICAgICAgdmFyIHN0YXR1cyA9IChwb2RTdGF0dXMocG9kKSB8fCBcIkVycm9yXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoc3RhdHVzLnN0YXJ0c1dpdGgoXCJydW5cIikgfHwgc3RhdHVzLnN0YXJ0c1dpdGgoXCJva1wiKSkge1xuICAgICAgICBhbnN3ZXIudmFsaWQgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXJ0c1dpdGgoXCJ3YWl0XCIpIHx8IHN0YXR1cy5zdGFydHNXaXRoKFwicHduZFwiKSkge1xuICAgICAgICBhbnN3ZXIud2FpdGluZyArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLmVycm9yICs9IDE7XG4gICAgICB9XG4gICAgICB2YXIgY3JlYXRpb25UaW1lc3RhbXAgPSBnZXRDcmVhdGlvblRpbWVzdGFtcChwb2QpO1xuICAgICAgaWYgKGNyZWF0aW9uVGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoY3JlYXRpb25UaW1lc3RhbXApO1xuICAgICAgICBpZiAoIWxvd2VzdERhdGUgfHwgZCA8IGxvd2VzdERhdGUpIHtcbiAgICAgICAgICBsb3dlc3REYXRlID0gZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGFwcFZpZXcuJGNyZWF0aW9uRGF0ZSA9IGxvd2VzdERhdGU7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcFZpZXdTZXJ2aWNlVmlld3MoYXBwVmlldykge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBwb2RzID0gYXBwVmlldy5wb2RzO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChwb2RzLCBwb2QgPT4ge1xuICAgICAgdmFyIGlkID0gZ2V0TmFtZShwb2QpO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHZhciBhYmJyZXYgPSBpZDtcbiAgICAgICAgdmFyIGlkeCA9IGlkLmluZGV4T2YoXCItXCIpO1xuICAgICAgICBpZiAoaWR4ID4gMSkge1xuICAgICAgICAgIGFiYnJldiA9IGlkLnN1YnN0cmluZygwLCBpZHgpO1xuICAgICAgICB9XG4gICAgICAgIHBvZC5pZEFiYnJldiA9IGFiYnJldjtcbiAgICAgIH1cbiAgICAgIHBvZC5zdGF0dXNDbGFzcyA9IHN0YXR1c1RleHRUb0Nzc0NsYXNzKHBvZFN0YXR1cyhwb2QpKTtcbiAgICB9KTtcblxuICAgIHZhciBzZXJ2aWNlcyA9IGFwcFZpZXcuc2VydmljZXMgfHwgW107XG4gICAgdmFyIHJlcGxpY2F0aW9uQ29udHJvbGxlcnMgPSBhcHBWaWV3LnJlcGxpY2F0aW9uQ29udHJvbGxlcnMgfHwgW107XG4gICAgdmFyIHNpemUgPSBNYXRoLm1heChzZXJ2aWNlcy5sZW5ndGgsIHJlcGxpY2F0aW9uQ29udHJvbGxlcnMubGVuZ3RoLCAxKTtcbiAgICB2YXIgYXBwTmFtZSA9IGFwcFZpZXcuJGluZm8ubmFtZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgdmFyIHNlcnZpY2UgPSBzZXJ2aWNlc1tpXTtcbiAgICAgIHZhciByZXBsaWNhdGlvbkNvbnRyb2xsZXIgPSByZXBsaWNhdGlvbkNvbnRyb2xsZXJzW2ldO1xuICAgICAgdmFyIGNvbnRyb2xsZXJJZCA9IGdldE5hbWUocmVwbGljYXRpb25Db250cm9sbGVyKTtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShzZXJ2aWNlKSB8fCBjb250cm9sbGVySWQ7XG4gICAgICB2YXIgYWRkcmVzcyA9IENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydGFsSVBcIl0pO1xuICAgICAgaWYgKCFuYW1lICYmIHBvZHMubGVuZ3RoKSB7XG4gICAgICAgIG5hbWUgPSBwb2RzWzBdLmlkQWJicmV2O1xuICAgICAgfVxuICAgICAgaWYgKCFhcHBWaWV3LiRpbmZvLm5hbWUpIHtcbiAgICAgICAgYXBwVmlldy4kaW5mby5uYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghYXBwVmlldy5pZCAmJiBwb2RzLmxlbmd0aCkge1xuICAgICAgICBhcHBWaWV3LmlkID0gZ2V0TmFtZShwb2RzWzBdKTtcbiAgICAgIH1cbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBhcHBOYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICAgIHZhciBwb2RDb3VudCA9IHBvZHMubGVuZ3RoO1xuICAgICAgdmFyIHBvZENvdW50VGV4dCA9IHBvZENvdW50ICsgXCIgcG9kXCIgKyAocG9kQ291bnQgPiAxID8gXCJzXCIgOiBcIlwiKTtcbiAgICAgIHZhciB2aWV3ID0ge1xuICAgICAgICBhcHBOYW1lOiBhcHBOYW1lIHx8IG5hbWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNyZWF0ZWREYXRlOiBhcHBWaWV3LiRjcmVhdGlvbkRhdGUsXG4gICAgICAgIHBvZENvdW50OiBwb2RDb3VudCxcbiAgICAgICAgcG9kQ291bnRUZXh0OiBwb2RDb3VudFRleHQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIGNvbnRyb2xsZXJJZDogY29udHJvbGxlcklkLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICByZXBsaWNhdGlvbkNvbnRyb2xsZXI6IHJlcGxpY2F0aW9uQ29udHJvbGxlcixcbiAgICAgICAgcG9kczogcG9kc1xuICAgICAgfTtcbiAgICAgIGFycmF5LnB1c2godmlldyk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdCBwYXRoIGludG8gYW4gYWNjZXNzaWJsZSBVUkwgZm9yIHRoZSBicm93c2VyXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2l0UGF0aFRvVXJsKGljb25QYXRoLCBicmFuY2ggPSBcIm1hc3RlclwiKSB7XG4gICAgcmV0dXJuIChIYXd0aW9Db3JlLmluamVjdG9yLmdldCgnQXBwTGlicmFyeVVSTCcpIHx8ICcnKSArIFwiL2dpdC9cIiArIGJyYW5jaCArIGljb25QYXRoO1xuICB9XG5cblxuICBleHBvcnQgZnVuY3Rpb24gZW5yaWNoQnVpbGRDb25maWcoYnVpbGRDb25maWcsIHNvcnRlZEJ1aWxkcykge1xuICAgIGlmIChidWlsZENvbmZpZykge1xuICAgICAgdmFyIHRyaWdnZXJVcmw6c3RyaW5nID0gbnVsbDtcbiAgICAgIHZhciBtZXRhZGF0YSA9IGJ1aWxkQ29uZmlnLm1ldGFkYXRhIHx8IHt9O1xuICAgICAgdmFyIG5hbWUgPSBtZXRhZGF0YS5uYW1lO1xuICAgICAgYnVpbGRDb25maWcuJG5hbWUgPSBuYW1lO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKFtmYWxzZSwgdHJ1ZV0sIChmbGFnKSA9PiB7XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGJ1aWxkQ29uZmlnLnRyaWdnZXJzLCAodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyVXJsKSB7XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gdHJpZ2dlci50eXBlO1xuICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJnZW5lcmljXCIgfHwgZmxhZykge1xuICAgICAgICAgICAgICAgIHZhciBnZW5lcmljID0gdHJpZ2dlclt0eXBlXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSAmJiBnZW5lcmljKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc2VjcmV0ID0gZ2VuZXJpYy5zZWNyZXQ7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJVcmwgPSBVcmxIZWxwZXJzLmpvaW4oYnVpbGRDb25maWdIb29rc1Jlc3RVUkwoKSwgbmFtZSwgc2VjcmV0LCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRDb25maWcuJHRyaWdnZXJVcmwgPSB0cmlnZ2VyVXJsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXRzIGZpbmQgdGhlIGxhdGVzdCBidWlsZC4uLlxuICAgICAgICBpZiAoc29ydGVkQnVpbGRzKSB7XG4gICAgICAgICAgYnVpbGRDb25maWcuJGxhc3RCdWlsZCA9IF8uZmluZChzb3J0ZWRCdWlsZHMsIHtcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIGJ1aWxkY29uZmlnOiBuYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyICRmYWJyaWM4Vmlld3MgPSB7fTtcblxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0KG5hbWUsIG9iamVjdCwgYXV0b0NyZWF0ZSA9IGZhbHNlKSB7XG4gICAgICAgIHZhciB2aWV3ID0gJGZhYnJpYzhWaWV3c1tuYW1lXTtcbiAgICAgICAgaWYgKGF1dG9DcmVhdGUgJiYgIXZpZXcpIHtcbiAgICAgICAgICB2aWV3ID0ge31cbiAgICAgICAgICAkZmFicmljOFZpZXdzW25hbWVdID0gdmlldztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvYmplY3QsICh2YWx1ZSwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdmlld1twcm9wZXJ0eV07XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgdmlld1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3RTdGFydHNXaXRoKHByZWZpeCwgb2JqZWN0LCBhdXRvQ3JlYXRlID0gZmFsc2UpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRmYWJyaWM4Vmlld3MsICh2aWV3LCBuYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKHZpZXcgJiYgbmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvYmplY3QsICh2YWx1ZSwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSB2aWV3W3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdmlld1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhYmVscyA9IG1ldGFkYXRhLmxhYmVscyB8fCB7fTtcbiAgICAgIHZhciBhbm5vdGF0aW9ucyA9IG1ldGFkYXRhLmFubm90YXRpb25zIHx8IHt9O1xuXG4gICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIHJlcG8gYW5kIHVzZXJcbiAgICAgIGJ1aWxkQ29uZmlnLiR1c2VyID0gYW5ub3RhdGlvbnNbXCJmYWJyaWM4LmplbmtpbnMvdXNlclwiXSB8fCBsYWJlbHNbXCJ1c2VyXCJdO1xuICAgICAgYnVpbGRDb25maWcuJHJlcG8gPSBhbm5vdGF0aW9uc1tcImZhYnJpYzguamVua2lucy9yZXBvXCJdIHx8IGxhYmVsc1tcInJlcG9cIl07XG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChhbm5vdGF0aW9ucywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgdmFyIHBhcnRzID0ga2V5LnNwbGl0KCcvJywgMik7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGxpbmtJZCA9IHBhcnRzWzBdO1xuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHBhcnRzWzFdO1xuICAgICAgICAgIGlmIChsaW5rSWQgJiYgcHJvcGVydHkgJiYgbGlua0lkLnN0YXJ0c1dpdGgoXCJmYWJyaWM4LmxpbmtcIikpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJGZhYnJpYzhWaWV3c1tsaW5rSWRdO1xuICAgICAgICAgICAgaWYgKCFsaW5rKSB7XG4gICAgICAgICAgICAgIGxpbmsgPSB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IGxpbmtJZFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAkZmFicmljOFZpZXdzW2xpbmtJZF0gPSBsaW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlua1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYnVpbGRDb25maWcuJHVzZXIgJiYgYnVpbGRDb25maWcuJHJlcG8pIHtcbiAgICAgICAgLy8gYnJvd3NlIGdvZ3MgcmVwbyB2aWV3XG4gICAgICAgIHZhciBnb2dzVXJsID0gc2VydmljZUxpbmtVcmwoZ29nc1NlcnZpY2VOYW1lKTtcbiAgICAgICAgaWYgKGdvZ3NVcmwpIHtcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsuYnJvd3NlR29ncy52aWV3XCIsIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkJyb3dzZS4uLlwiLFxuICAgICAgICAgICAgdXJsOiBVcmxIZWxwZXJzLmpvaW4oZ29nc1VybCwgYnVpbGRDb25maWcuJHVzZXIsIGJ1aWxkQ29uZmlnLiRyZXBvKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJyb3dzZSB0aGUgc291cmNlIGNvZGUgb2YgdGhpcyByZXBvc2l0b3J5XCIsXG4gICAgICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBydW4gZm9yZ2UgY29tbWFuZHMgdmlld1xuICAgICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsuZm9yZ2VDb21tYW5kLnZpZXdcIiwge1xuICAgICAgICAgIGxhYmVsOiBcIkNvbW1hbmQuLi5cIixcbiAgICAgICAgICB1cmw6IFVybEhlbHBlcnMuam9pbihcIi9mb3JnZS9jb21tYW5kcy91c2VyXCIsIGJ1aWxkQ29uZmlnLiR1c2VyLCBidWlsZENvbmZpZy4kcmVwbyksXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiUGVyZm9ybSBhbiBhY3Rpb24gb24gdGhpcyBwcm9qZWN0XCIsXG4gICAgICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXBsYXktY2lyY2xlXCJcbiAgICAgICAgfSwgdHJ1ZSk7XG5cblxuICAgICAgICAvLyBjb25maWd1cmUgZGV2b3BzIHZpZXdcbiAgICAgICAgZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0KFwiZmFicmljOC5saW5rLmZvcmdlQ29tbWFuZC5kZXZvcHMuc2V0dGluZ3NcIiwge1xuICAgICAgICAgIGxhYmVsOiBcIlNldHRpbmdzXCIsXG4gICAgICAgICAgdXJsOiBVcmxIZWxwZXJzLmpvaW4oXCIvZm9yZ2UvY29tbWFuZC9kZXZvcHMtZWRpdC91c2VyXCIsIGJ1aWxkQ29uZmlnLiR1c2VyLCBidWlsZENvbmZpZy4kcmVwbyksXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29uZmlndXJlIHRoZSBEZXZPcHMgc2V0dGluZ3MgZm9yIHRoaXMgcHJvamVjdFwiLFxuICAgICAgICAgIGljb25DbGFzczogXCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIlxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgfVxuXG4gICAgICAvLyBhZGQgc29tZSBpY29ucyBhbmQgZGVzY3JpcHRpb25zXG4gICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsucmVwb3NpdG9yeS5icm93c2VcIiwge1xuICAgICAgICBsYWJlbDogXCJCcm93c2UuLi5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQnJvd3NlIHRoZSBzb3VyY2UgY29kZSBvZiB0aGlzIHJlcG9zaXRvcnlcIixcbiAgICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWV4dGVybmFsLWxpbmtcIlxuICAgICAgfSk7XG4gICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsuamVua2lucy5qb2JcIiwge1xuICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtdGFza3NcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVmlldyB0aGUgSmVua2lucyBKb2IgZm9yIHRoaXMgYnVpbGRcIlxuICAgICAgfSk7XG4gICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsuamVua2lucy5tb25pdG9yXCIsIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXRhY2hvbWV0ZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVmlldyB0aGUgSmVua2lucyBNb25pdG9yIGRhc2hib2FyZCBmb3IgdGhpcyBwcm9qZWN0XCJcbiAgICAgIH0pO1xuICAgICAgZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0KFwiZmFicmljOC5saW5rLmplbmtpbnMucGlwZWxpbmVcIiwge1xuICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVmlldyB0aGUgSmVua2lucyBQaXBlbGluZSBmb3IgdGhpcyBwcm9qZWN0XCJcbiAgICAgIH0pO1xuICAgICAgZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0KFwiZmFicmljOC5saW5rLmxldHNjaGF0LnJvb21cIiwge1xuICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtY29tbWVudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGF0IHJvb20gZm9yIHRoaXMgcHJvamVjdFwiXG4gICAgICB9KTtcbiAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzSWZOb3RFeGlzdChcImZhYnJpYzgubGluay5sZXRzY2hhdC5yb29tXCIsIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLWNvbW1lbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hhdCByb29tIGZvciB0aGlzIHByb2plY3RcIlxuICAgICAgfSk7XG4gICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsudGFpZ2FcIiwge1xuICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtY2hlY2stc3F1YXJlLW9cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSXNzdWUgdHJhY2tlciBmb3IgdGhpcyBwcm9qZWN0XCJcbiAgICAgIH0pO1xuICAgICAgZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0KFwiZmFicmljOC5saW5rLmlzc3Vlc1wiLCB7XG4gICAgICAgIGljb25DbGFzczogXCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJc3N1ZXMgZm9yIHRoaXMgcHJvamVjdFwiXG4gICAgICB9KTtcbiAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzSWZOb3RFeGlzdChcImZhYnJpYzgubGluay5yZWxlYXNlc1wiLCB7XG4gICAgICAgIGljb25DbGFzczogXCJmYSBmYS10YWdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSXNzdWVzIGZvciB0aGlzIHByb2plY3RcIlxuICAgICAgfSk7XG4gICAgICBkZWZhdWx0UHJvcGVydGllc0lmTm90RXhpc3QoXCJmYWJyaWM4LmxpbmsudGFpZ2EudGVhbVwiLCB7XG4gICAgICAgIGljb25DbGFzczogXCJmYSBmYS11c2Vyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUZWFtIG1lbWJlcnMgZm9yIHRoaXMgcHJvamVjdFwiXG4gICAgICB9KTtcbiAgICAgIGRlZmF1bHRQcm9wZXJ0aWVzSWZOb3RFeGlzdChcImZhYnJpYzgubGluay50ZWFtXCIsIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImZhIGZhLXVzZXJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRlYW0gbWVtYmVycyBmb3IgdGhpcyBwcm9qZWN0XCJcbiAgICAgIH0pO1xuICAgICAgZGVmYXVsdFByb3BlcnRpZXNJZk5vdEV4aXN0U3RhcnRzV2l0aChcImZhYnJpYzgubGluay5lbnZpcm9ubWVudC5cIiwge1xuICAgICAgICBpY29uQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGt1YmVybmV0ZXMgbmFtZXNwYWNlIGZvciB0aGlzIGVudmlyb25tZW50XCJcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIGxldHMgcHV0IHRoZSB2aWV3cyBpbnRvIHNlY3Rpb25zLi4uXG4gICAgICB2YXIgJGZhYnJpYzhDb2RlVmlld3MgPSB7fTtcbiAgICAgIHZhciAkZmFicmljOEJ1aWxkVmlld3MgPSB7fTtcbiAgICAgIHZhciAkZmFicmljOFRlYW1WaWV3cyA9IHt9O1xuICAgICAgdmFyICRmYWJyaWM4RW52aXJvbm1lbnRWaWV3cyA9IHt9O1xuICAgICAgYW5ndWxhci5mb3JFYWNoKCRmYWJyaWM4Vmlld3MsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHZhciB2aWV3O1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoXCJ0YWlnYVwiKSA+IDAgfHwga2V5LmluZGV4T2YoXCIuaXNzdWVcIikgPiAwIHx8IGtleS5pbmRleE9mKFwibGV0c2NoYXRcIikgPiAwfHwga2V5LmluZGV4T2YoXCIudGVhbVwiKSA+IDApIHtcbiAgICAgICAgICB2aWV3ID0gJGZhYnJpYzhUZWFtVmlld3M7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoXCJqZW5raW5zXCIpID4gMCkge1xuICAgICAgICAgIHZpZXcgPSAkZmFicmljOEJ1aWxkVmlld3M7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmluZGV4T2YoXCIuZW52aXJvbm1lbnQuXCIpID4gMCkge1xuICAgICAgICAgIHZpZXcgPSAkZmFicmljOEVudmlyb25tZW50Vmlld3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmlldyA9ICRmYWJyaWM4Q29kZVZpZXdzO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdba2V5XSA9IHZhbHVlO1xuICAgICAgfSk7XG5cblxuICAgICAgYnVpbGRDb25maWcuJGZhYnJpYzhWaWV3cyA9ICRmYWJyaWM4Vmlld3M7XG4gICAgICBidWlsZENvbmZpZy4kZmFicmljOENvZGVWaWV3cyA9ICRmYWJyaWM4Q29kZVZpZXdzO1xuICAgICAgYnVpbGRDb25maWcuJGZhYnJpYzhCdWlsZFZpZXdzID0gJGZhYnJpYzhCdWlsZFZpZXdzO1xuICAgICAgYnVpbGRDb25maWcuJGZhYnJpYzhFbnZpcm9ubWVudFZpZXdzID0gJGZhYnJpYzhFbnZpcm9ubWVudFZpZXdzO1xuICAgICAgYnVpbGRDb25maWcuJGZhYnJpYzhUZWFtVmlld3MgPSAkZmFicmljOFRlYW1WaWV3cztcblxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnJpY2hCdWlsZENvbmZpZ3MoYnVpbGRDb25maWdzLCBzb3J0ZWRCdWlsZHMgPSBudWxsKSB7XG4gICAgYW5ndWxhci5mb3JFYWNoKGJ1aWxkQ29uZmlncywgKGJ1aWxkQ29uZmlnKSA9PiB7XG4gICAgICBlbnJpY2hCdWlsZENvbmZpZyhidWlsZENvbmZpZywgc29ydGVkQnVpbGRzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnVpbGRDb25maWdzO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVucmljaEJ1aWxkcyhidWlsZHMpIHtcbiAgICBhbmd1bGFyLmZvckVhY2goYnVpbGRzLCAoYnVpbGQpID0+IHtcbiAgICAgIGVucmljaEJ1aWxkKGJ1aWxkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gXy5zb3J0QnkoYnVpbGRzLCBcIiRjcmVhdGlvbkRhdGVcIikucmV2ZXJzZSgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVucmljaEJ1aWxkKGJ1aWxkKSB7XG4gICAgaWYgKGJ1aWxkKSB7XG4gICAgICB2YXIgbWV0YWRhdGEgPSBidWlsZC5tZXRhZGF0YSB8fCB7fTtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShidWlsZCk7XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGJ1aWxkKTtcbiAgICAgIGJ1aWxkLiRuYW1lID0gbmFtZTtcbiAgICAgIGJ1aWxkLiRuYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cbiAgICAgIHZhciBuYW1lQXJyYXkgPSBuYW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgIHZhciBuYW1lQXJyYXlMZW5ndGggPSBuYW1lQXJyYXkubGVuZ3RoO1xuICAgICAgYnVpbGQuJHNob3J0TmFtZSA9IChuYW1lQXJyYXlMZW5ndGggPiA0KSA/IG5hbWVBcnJheS5zbGljZSgwLCBuYW1lQXJyYXlMZW5ndGggLSA0KS5qb2luKFwiLVwiKSA6IG5hbWUuc3Vic3RyaW5nKDAsIDMwKTtcblxuICAgICAgLy8gVE9ETyAtIHdoZXJlJ3Mgcm91dGUgZnJvbT9cbiAgICAgIHZhciByb3V0ZTphbnkgPSB7fTtcblxuICAgICAgdmFyIGxhYmVscyA9IGdldExhYmVscyhyb3V0ZSk7XG4gICAgICB2YXIgY29uZmlnSWQgPSBsYWJlbHMuYnVpbGRjb25maWc7XG4gICAgICBidWlsZC4kY29uZmlnSWQgPSBjb25maWdJZDtcbiAgICAgIGlmIChjb25maWdJZCkge1xuICAgICAgICBidWlsZC4kY29uZmlnTGluayA9IFVybEhlbHBlcnMuam9pbihcImt1YmVybmV0ZXMvYnVpbGRDb25maWdzXCIsIGNvbmZpZ0lkKTtcbiAgICAgIH1cbiAgICAgIHZhciBjcmVhdGlvblRpbWVzdGFtcCA9IGdldENyZWF0aW9uVGltZXN0YW1wKGJ1aWxkKTtcbiAgICAgIGlmIChjcmVhdGlvblRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGNyZWF0aW9uVGltZXN0YW1wKTtcbiAgICAgICAgYnVpbGQuJGNyZWF0aW9uRGF0ZSA9IGQ7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBidWlsZC4kdmlld0xpbmsgPSBVcmxIZWxwZXJzLmpvaW4oXCJrdWJlcm5ldGVzL2J1aWxkc1wiLCBuYW1lKTtcbiAgICAgICAgYnVpbGQuJGxvZ3NMaW5rID0gVXJsSGVscGVycy5qb2luKFwia3ViZXJuZXRlcy9idWlsZExvZ3NcIiwgbmFtZSk7XG4gICAgICB9XG4gICAgICB2YXIgcG9kTmFtZSA9IGJ1aWxkLnBvZE5hbWU7XG4gICAgICBpZiAocG9kTmFtZSAmJiBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIHBvZE5hbWVBcnJheSA9IHBvZE5hbWUuc3BsaXQoXCItXCIpO1xuICAgICAgICB2YXIgcG9kTmFtZUFycmF5TGVuZ3RoID0gcG9kTmFtZUFycmF5Lmxlbmd0aFxuICAgICAgICBidWlsZC4kcG9kU2hvcnROYW1lID0gKHBvZE5hbWVBcnJheUxlbmd0aCA+IDUpID8gcG9kTmFtZUFycmF5W3BvZE5hbWVBcnJheUxlbmd0aCAtIDVdIDogcG9kTmFtZS5zdWJzdHJpbmcoMCwgMzApO1xuICAgICAgICBidWlsZC4kcG9kTGluayA9IFVybEhlbHBlcnMuam9pbihcImt1YmVybmV0ZXMvbmFtZXNwYWNlXCIsIG5hbWVzcGFjZSwgXCJwb2RzXCIsIHBvZE5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnVpbGQ7XG4gIH1cblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnJpY2hEZXBsb3ltZW50Q29uZmlnKGRlcGxveW1lbnRDb25maWcpIHtcbiAgICBpZiAoZGVwbG95bWVudENvbmZpZykge1xuICAgICAgdmFyIHRyaWdnZXJVcmw6c3RyaW5nID0gbnVsbDtcbiAgICAgIHZhciBuYW1lID0gQ29yZS5wYXRoR2V0KGRlcGxveW1lbnRDb25maWcsIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSk7XG4gICAgICBkZXBsb3ltZW50Q29uZmlnLiRuYW1lID0gbmFtZTtcbiAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKGRlcGxveW1lbnRDb25maWcudHJpZ2dlcnMsICh0cmlnZ2VyKSA9PiB7XG4gICAgICAgIHZhciB0eXBlID0gdHJpZ2dlci50eXBlO1xuICAgICAgICBpZiAoIWRlcGxveW1lbnRDb25maWcuJGltYWdlQ2hhbmdlUGFyYW1zICYmIHR5cGUgPT09IFwiSW1hZ2VDaGFuZ2VcIikge1xuICAgICAgICAgIHZhciBpbWFnZUNoYW5nZVBhcmFtcyA9IHRyaWdnZXIuaW1hZ2VDaGFuZ2VQYXJhbXM7XG4gICAgICAgICAgaWYgKGltYWdlQ2hhbmdlUGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyTmFtZXMgPSBpbWFnZUNoYW5nZVBhcmFtcy5jb250YWluZXJOYW1lcyB8fCBbXTtcbiAgICAgICAgICAgIGltYWdlQ2hhbmdlUGFyYW1zLiRjb250YWluZXJOYW1lcyA9IGNvbnRhaW5lck5hbWVzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgZGVwbG95bWVudENvbmZpZy4kaW1hZ2VDaGFuZ2VQYXJhbXMgPSBpbWFnZUNoYW5nZVBhcmFtcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBlbnJpY2hEZXBsb3ltZW50Q29uZmlncyhkZXBsb3ltZW50Q29uZmlncykge1xuICAgIGFuZ3VsYXIuZm9yRWFjaChkZXBsb3ltZW50Q29uZmlncywgKGRlcGxveW1lbnRDb25maWcpID0+IHtcbiAgICAgIGVucmljaERlcGxveW1lbnRDb25maWcoZGVwbG95bWVudENvbmZpZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlcGxveW1lbnRDb25maWdzO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGVucmljaEltYWdlUmVwb3NpdG9yeShpbWFnZVJlcG9zaXRvcnkpIHtcbiAgICBpZiAoaW1hZ2VSZXBvc2l0b3J5KSB7XG4gICAgICB2YXIgdHJpZ2dlclVybDpzdHJpbmcgPSBudWxsO1xuICAgICAgdmFyIG5hbWUgPSBDb3JlLnBhdGhHZXQoaW1hZ2VSZXBvc2l0b3J5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVcIl0pO1xuICAgICAgaW1hZ2VSZXBvc2l0b3J5LiRuYW1lID0gbmFtZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZW5yaWNoSW1hZ2VSZXBvc2l0b3JpZXMoaW1hZ2VSZXBvc2l0b3JpZXMpIHtcbiAgICBhbmd1bGFyLmZvckVhY2goaW1hZ2VSZXBvc2l0b3JpZXMsIChpbWFnZVJlcG9zaXRvcnkpID0+IHtcbiAgICAgIGVucmljaEltYWdlUmVwb3NpdG9yeShpbWFnZVJlcG9zaXRvcnkpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWFnZVJlcG9zaXRvcmllcztcbiAgfVxuXG5cbiAgdmFyIGxhYmVsQ29sb3JzID0ge1xuICAgICd2ZXJzaW9uJzogJ2JhY2tncm91bmQtYmx1ZScsXG4gICAgJ25hbWUnOiAnYmFja2dyb3VuZC1saWdodC1ncmVlbicsXG4gICAgJ2NvbnRhaW5lcic6ICdiYWNrZ3JvdW5kLWxpZ2h0LWdyZXknXG4gIH07XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5lckxhYmVsQ2xhc3MobGFiZWxUeXBlOnN0cmluZykge1xuICAgIGlmICghKGxhYmVsVHlwZSBpbiBsYWJlbENvbG9ycykpIHtcbiAgICAgIHJldHVybiAnbW91c2UtcG9pbnRlcic7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIGxhYmVsQ29sb3JzW2xhYmVsVHlwZV0gKyAnIG1vdXNlLXBvaW50ZXInO1xuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBmYWJyaWM4IGZvcmdlIHBsdWdpbiBpcyBlbmFibGVkXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gaXNGb3JnZUVuYWJsZWQoKSB7XG4gICAgLy8gVE9ETyBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHNlcnZpY2UgXCJmYWJyaWM4LWZvcmdlXCIgaXMgdmFsaWRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGt1YmVybmV0ZXMgc2VsZWN0ZWQgbmFtZXNwYWNlIG9yIHRoZSBkZWZhdWx0IG9uZVxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRLdWJlcm5ldGVzTmFtZXNwYWNlKCkge1xuICAgIHZhciBpbmplY3RvciA9IEhhd3Rpb0NvcmUuaW5qZWN0b3I7XG4gICAgaWYgKGluamVjdG9yKSB7XG4gICAgICB2YXIgS3ViZXJuZXRlc1N0YXRlID0gaW5qZWN0b3IuZ2V0KFwiS3ViZXJuZXRlc1N0YXRlXCIpIHx8IHt9O1xuICAgICAgcmV0dXJuIEt1YmVybmV0ZXNTdGF0ZS5zZWxlY3RlZE5hbWVzcGFjZSB8fCBkZWZhdWx0TmFtZXNwYWNlO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdE5hbWVzcGFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBqc29uIHNjaGVtYVxuICAgKi9cbiAgICAgICAgLypcbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVNjaGVtYSgpIHtcbiAgICBhbmd1bGFyLmZvckVhY2goc2NoZW1hLmRlZmluaXRpb25zLCAoZGVmaW5pdGlvbiwgbmFtZSkgPT4ge1xuICAgICAgdmFyIHByb3BlcnRpZXMgPSBkZWZpbml0aW9uLnByb3BlcnRpZXM7XG4gICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICB2YXIgaGlkZVByb3BlcnRpZXMgPSBbXCJjcmVhdGlvblRpbWVzdGFtcFwiLCBcImtpbmRcIiwgXCJhcGlWZXJzaW9uXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiLCBcIm5hbWVzcGFjZVwiLCBcInJlc291cmNlVmVyc2lvblwiLCBcInNlbGZMaW5rXCIsIFwidWlkXCJdO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goaGlkZVByb3BlcnRpZXMsIChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVtcImhpZGRlblwiXSAgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChwcm9wZXJ0aWVzLCAocHJvcGVydHksIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIHZhciByZWYgPSBwcm9wZXJ0eVtcIiRyZWZcIl07XG4gICAgICAgICAgdmFyIHR5cGUgPSBwcm9wZXJ0eVtcInR5cGVcIl07XG4gICAgICAgICAgaWYgKHJlZiAmJiAoIXR5cGUgfHwgdHlwZSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgIHByb3BlcnR5W1widHlwZVwiXSA9IHJlZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gcHJvcGVydHlbXCJpdGVtc1wiXTtcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgICB2YXIgcmVmID0gaXRlbXNbXCIkcmVmXCJdO1xuICAgICAgICAgICAgICB2YXIgdHlwZSA9IGl0ZW1zW1widHlwZVwiXTtcbiAgICAgICAgICAgICAgaWYgKHJlZiAmJiAoIXR5cGUgfHwgdHlwZSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tcInR5cGVcIl0gPSByZWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzY2hlbWEuZGVmaW5pdGlvbnMub3NfYnVpbGRfV2ViSG9va1RyaWdnZXIucHJvcGVydGllcy5zZWNyZXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICB9KVxuICB9XG4gICovXG5cbiAgLyoqXG4gICAqIExldHMgcmVtb3ZlIGFueSBlbnJpY2hlZCBkYXRhIHRvIGxlYXZlIHRoZSBvcmlnaW5hbCBqc29uIGludGFjdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvUmF3SnNvbihpdGVtKSB7XG4gICAgdmFyIG8gPSBhbmd1bGFyLmNvcHkoaXRlbSk7XG4gICAgYW5ndWxhci5mb3JFYWNoKG8sICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCIkXCIpIHx8IGtleS5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICBkZWxldGUgb1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvLCBudWxsLCAyKTsgLy8gc3BhY2luZyBsZXZlbCA9IDJcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG5kZWNsYXJlIHZhciBPU09BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEdvb2dsZU9BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgX21vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKHBsdWdpbk5hbWUsIFtdKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICAkLmdldFNjcmlwdCgnb3Njb25zb2xlL2NvbmZpZy5qcycpXG4gICAgICAgIC5kb25lKChzY3JpcHQsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuICAgICAgICAgIHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xuICAgICAgICAgICAgdmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gY29uZmlnLm9wZW5zaGlmdDtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XG4gICAgICAgICAgS2V5Y2xvYWtDb25maWcgPSBjb25maWcua2V5Y2xvYWs7XG5cbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGF1dGgubWFzdGVyX3VyaSBubyBsb25nZXIgdXNlZCByaWdodD9cbiAgICAgICAgICAgIC8vIG1hc3RlciA9IE9TT0F1dGhDb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XG4gICAgICAgICAgICAgIHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICBpZiAob2F1dGhfYXV0aG9yaXplX3VyaSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZHggKz0gMztcbiAgICAgICAgICAgICAgICAgIGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcbiAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCghS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgfHwgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPT09IFwiL1wiKSAmJiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXN0ZXIpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJFcnJvciBmZXRjaGluZyBPQVVUSCBjb25maWc6IFwiLCByZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmFsd2F5cygoKSA9PiB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKCdyZXN0bW9kJyk7XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZnVuY3Rpb24gYnlJZCh0aGluZykge1xuICAgIHJldHVybiB0aGluZy5pZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleShuYW1lc3BhY2UsIGlkLCBraW5kKSB7XG4gICAgcmV0dXJuIChuYW1lc3BhY2UgfHwgXCJcIikgKyBcIi1cIiArIChraW5kIHx8ICd1bmRlZmluZWQnKS50b0xvd2VyQ2FzZSgpICsgJy0nICsgKGlkIHx8ICd1bmRlZmluZWQnKS5yZXBsYWNlKC9cXC4vZywgJy0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlS2V5KGl0ZW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gaXRlbTtcbiAgICByZXN1bHRbJ19rZXknXSA9IGNyZWF0ZUtleShnZXROYW1lc3BhY2UoaXRlbSksIGdldE5hbWUoaXRlbSksIGdldEtpbmQoaXRlbSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZUtleXMoaXRlbXM6QXJyYXk8YW55Pikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBhbmd1bGFyLmZvckVhY2goaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICByZXN1bHQucHVzaChwb3B1bGF0ZUtleShpdGVtKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFBvZHMocG9kcywgbmFtZXNwYWNlLCBsYWJlbHMpIHtcbiAgICByZXR1cm4gcG9kcy5maWx0ZXIoKHBvZCkgPT4ge1xuICAgICAgcmV0dXJuIGdldE5hbWVzcGFjZShwb2QpID09PSBuYW1lc3BhY2UgJiYgc2VsZWN0b3JNYXRjaGVzKGxhYmVscywgZ2V0TGFiZWxzKHBvZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvYmplY3Qgd2hpY2gga2VlcHMgdHJhY2sgb2YgYWxsIHRoZSBwb2RzLCByZXBsaWNhdGlvbiBjb250cm9sbGVycywgc2VydmljZXMgYW5kIHRoZWlyIGFzc29jaWF0aW9uc1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEt1YmVybmV0ZXNNb2RlbFNlcnZpY2Uge1xuICAgIHB1YmxpYyBrdWJlcm5ldGVzID0gPEt1YmVybmV0ZXNTdGF0ZT4gbnVsbDtcbiAgICBwdWJsaWMgYXBwcyA9IFtdO1xuICAgIHB1YmxpYyBzZXJ2aWNlcyA9IFtdO1xuXG4gICAgcHVibGljIHJlcGxpY2F0aW9uY29udHJvbGxlcnMgPSBbXTtcbiAgICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uQ29udHJvbGxlcnMoKTpBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlcGxpY2F0aW9uY29udHJvbGxlcnM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcmVwbGljYXRpb25Db250cm9sbGVycyhyZXBsaWNhdGlvbkNvbnRyb2xsZXJzOkFycmF5PGFueT4pIHtcbiAgICAgIHRoaXMucmVwbGljYXRpb25jb250cm9sbGVycyA9IHJlcGxpY2F0aW9uQ29udHJvbGxlcnM7XG4gICAgfVxuICAgIHB1YmxpYyBwb2RzID0gW107XG4gICAgcHVibGljIGhvc3RzID0gW107XG4gICAgcHVibGljIGdldCBuYW1lc3BhY2VzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gdGhpcy5rdWJlcm5ldGVzLm5hbWVzcGFjZXM7XG4gICAgfVxuICAgIC8vcHVibGljIG5hbWVzcGFjZXMgPSBbXTtcbiAgICBwdWJsaWMgcm91dGVzID0gW107XG4gICAgcHVibGljIHRlbXBsYXRlcyA9IFtdO1xuICAgIHB1YmxpYyByZWRyYXcgPSBmYWxzZTtcbiAgICBwdWJsaWMgcmVzb3VyY2VWZXJzaW9ucyA9IHt9O1xuXG4gICAgLy8gdmFyaW91cyB2aWV3cyBvbiB0aGUgZGF0YVxuICAgIHB1YmxpYyBwb2RzQnlIb3N0ID0ge307XG4gICAgcHVibGljIHNlcnZpY2VzQnlLZXkgPSB7fTtcbiAgICBwdWJsaWMgcmVwbGljYXRpb25Db250cm9sbGVyc0J5S2V5ID0ge307XG4gICAgcHVibGljIHBvZHNCeUtleSA9IHt9O1xuXG4gICAgcHVibGljIGFwcEluZm9zID0gW107XG4gICAgcHVibGljIGFwcFZpZXdzID0gW107XG4gICAgcHVibGljIGFwcEZvbGRlcnMgPSBbXTtcblxuICAgIHB1YmxpYyBmZXRjaGVkID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dSdW5CdXR0b24gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBidWlsZGNvbmZpZ3MgPSBbXTtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZUFwcHMoKTpBcnJheTxhbnk+IHtcbiAgICAgIHJldHVybiBfLmZpbHRlcih0aGlzLnNlcnZpY2VzLCAocykgPT4ge1xuICAgICAgICByZXR1cm4gcy4kaG9zdCAmJiBzLiRzZXJ2aWNlVXJsICYmIHMuJHBvZENvdW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgJGtlZXBQb2xsaW5nKCkge1xuICAgICAgcmV0dXJuIGtlZXBQb2xsaW5nTW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIG9yUmVkcmF3KGZsYWcpIHtcbiAgICAgIHRoaXMucmVkcmF3ID0gdGhpcy5yZWRyYXcgfHwgZmxhZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2VydmljZShuYW1lc3BhY2UsIGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc0J5S2V5W2NyZWF0ZUtleShuYW1lc3BhY2UsIGlkLCAnc2VydmljZScpXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVwbGljYXRpb25Db250cm9sbGVyKG5hbWVzcGFjZSwgaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcGxpY2F0aW9uQ29udHJvbGxlcnNCeUtleVtjcmVhdGVLZXkobmFtZXNwYWNlLCBpZCwgJ3JlcGxpY2F0aW9uQ29udHJvbGxlcicpXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9kKG5hbWVzcGFjZSwgaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvZHNCeUtleVtjcmVhdGVLZXkobmFtZXNwYWNlLCBpZCwgJ3BvZCcpXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9kc0Zvck5hbWVzcGFjZShuYW1lc3BhY2UgPSB0aGlzLmN1cnJlbnROYW1lc3BhY2UoKSkge1xuICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMucG9kcywgeyBuYW1lc3BhY2U6IG5hbWVzcGFjZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNlbGVjdGVkIG5hbWVzcGFjZSBvciB0aGUgZGVmYXVsdCBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY3VycmVudE5hbWVzcGFjZSgpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSBudWxsO1xuICAgICAgaWYgKHRoaXMua3ViZXJuZXRlcykge1xuICAgICAgICBhbnN3ZXIgPSB0aGlzLmt1YmVybmV0ZXMuc2VsZWN0ZWROYW1lc3BhY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zd2VyIHx8IGRlZmF1bHROYW1lc3BhY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUljb25VcmxBbmRBcHBJbmZvKGVudGl0eSwgbmFtZUZpZWxkOiBzdHJpbmcpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSBudWxsO1xuICAgICAgdmFyIGlkID0gZ2V0TmFtZShlbnRpdHkpO1xuICAgICAgZW50aXR5LiRpY29uVXJsID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICdhbm5vdGF0aW9ucycsICdmYWJyaWM4LicgKyBpZCArICcvaWNvblVybCddKTtcbiAgICAgIGVudGl0eS4kaW5mbyA9IENvcmUucGF0aEdldChlbnRpdHksIFsnbWV0YWRhdGEnLCAnYW5ub3RhdGlvbnMnLCAnZmFicmljOC4nICsgaWQgKyAnL3N1bW1hcnknXSk7XG4gICAgICBpZiAoZW50aXR5LiRpY29uVXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpZCAmJiBuYW1lRmllbGQpIHtcbiAgICAgICAgKHRoaXMudGVtcGxhdGVzIHx8IFtdKS5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHRlbXBsYXRlLm1ldGFkYXRhO1xuICAgICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgdmFyIGFubm90YXRpb25zID0gbWV0YWRhdGEuYW5ub3RhdGlvbnMgfHwge307XG4gICAgICAgICAgICB2YXIgaWNvblVybCA9IGFubm90YXRpb25zW1wiZmFicmljOC5cIiArIGlkICsgXCIvaWNvblVybFwiXSB8fCBhbm5vdGF0aW9uc1tcImZhYnJpYzgvaWNvblVybFwiXTtcbiAgICAgICAgICAgIGlmIChpY29uVXJsKSB7XG4gICAgICAgICAgICAgICh0ZW1wbGF0ZS5vYmplY3RzIHx8IFtdKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGVudGl0eU5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gZW50aXR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgZW50aXR5LiRpY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICh0aGlzLmFwcEluZm9zIHx8IFtdKS5mb3JFYWNoKChhcHBJbmZvKSA9PiB7XG4gICAgICAgICAgdmFyIGljb25QYXRoID0gYXBwSW5mby5pY29uUGF0aDtcbiAgICAgICAgICBpZiAoaWNvblBhdGggJiYgIWFuc3dlciAmJiBpY29uUGF0aCAhPT0gXCJudWxsXCIpIHtcbiAgICAgICAgICAgIHZhciBpY29uVXJsID0gZ2l0UGF0aFRvVXJsKGljb25QYXRoKTtcbiAgICAgICAgICAgIHZhciBpZHMgPSBDb3JlLnBhdGhHZXQoYXBwSW5mbywgW1wibmFtZXNcIiwgbmFtZUZpZWxkXSk7XG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goaWRzLCAoYXBwSWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFwcElkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGVudGl0eS4kaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgICAgICAgICAgZW50aXR5LmFwcFBhdGggPSBhcHBJbmZvLmFwcFBhdGg7XG4gICAgICAgICAgICAgICAgZW50aXR5LiRpbmZvID0gYXBwSW5mbztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghZW50aXR5LiRpY29uVXJsKSB7XG4gICAgICAgIGVudGl0eS4kaWNvblVybCA9IGRlZmF1bHRJY29uVXJsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtYXliZUluaXQoKSB7XG4gICAgICB0aGlzLmZldGNoZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXJ2aWNlc0J5S2V5ID0ge307XG4gICAgICB0aGlzLnBvZHNCeUtleSA9IHt9O1xuICAgICAgdGhpcy5yZXBsaWNhdGlvbkNvbnRyb2xsZXJzQnlLZXkgPSB7fTtcblxuICAgICAgdGhpcy5wb2RzLmZvckVhY2goKHBvZCkgPT4ge1xuICAgICAgICBpZiAoIXBvZC5raW5kKSBwb2Qua2luZCA9IFwiUG9kXCI7XG4gICAgICAgIHRoaXMucG9kc0J5S2V5W3BvZC5fa2V5XSA9IHBvZDtcbiAgICAgICAgdmFyIGhvc3QgPSBnZXRIb3N0KHBvZCk7XG4gICAgICAgIHBvZC4kbGFiZWxzVGV4dCA9IGxhYmVsc1RvU3RyaW5nKGdldExhYmVscyhwb2QpKTtcbiAgICAgICAgaWYgKGhvc3QpIHtcbiAgICAgICAgICBwb2QuJGxhYmVsc1RleHQgKz0gbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yICsgXCJob3N0PVwiICsgaG9zdDtcbiAgICAgICAgfVxuICAgICAgICBwb2QuJGljb25VcmwgPSBkZWZhdWx0SWNvblVybDtcbiAgICAgICAgdGhpcy5kaXNjb3ZlclBvZENvbm5lY3Rpb25zKHBvZCk7XG4gICAgICAgIHBvZC4kY29udGFpbmVyUG9ydHMgPSBbXTtcblxuICAgICAgICB2YXIgc3RhcnRUaW1lID0gKHBvZC5zdGF0dXMgfHwge30pLnN0YXJ0VGltZTtcbiAgICAgICAgcG9kLiRzdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBpZiAoc3RhcnRUaW1lKSB7XG4gICAgICAgICAgcG9kLiRzdGFydFRpbWUgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcmVhdGVkVGltZSA9IGdldENyZWF0aW9uVGltZXN0YW1wKHBvZCk7XG4gICAgICAgIHBvZC4kY3JlYXRlZFRpbWUgPSBudWxsO1xuICAgICAgICBwb2QuJGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChjcmVhdGVkVGltZSkge1xuICAgICAgICAgIHBvZC4kY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZShjcmVhdGVkVGltZSk7XG4gICAgICAgICAgcG9kLiRhZ2UgPSBwb2QuJGNyZWF0ZWRUaW1lLnJlbGF0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9kLiRzdGF0dXNDc3MgPSBzdGF0dXNUZXh0VG9Dc3NDbGFzcygocG9kLnN0YXR1cyB8fCB7fSkucGhhc2UpO1xuXG4gICAgICAgIHZhciBtYXhSZXN0YXJ0Q291bnQgPSAwO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiY29udGFpbmVyU3RhdHVzZXNcIl0pLCAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIHJlc3RhcnRDb3VudCA9IHN0YXR1cy5yZXN0YXJ0Q291bnQ7XG4gICAgICAgICAgaWYgKHJlc3RhcnRDb3VudCkge1xuICAgICAgICAgICAgaWYgKHJlc3RhcnRDb3VudCA+IG1heFJlc3RhcnRDb3VudCkge1xuICAgICAgICAgICAgICBtYXhSZXN0YXJ0Q291bnQgPSByZXN0YXJ0Q291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1heFJlc3RhcnRDb3VudCApIHtcbiAgICAgICAgICBwb2QuJHJlc3RhcnRDb3VudCA9IG1heFJlc3RhcnRDb3VudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW1hZ2VOYW1lcyA9IFwiXCI7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiY29udGFpbmVyc1wiXSksIChjb250YWluZXIpID0+IHtcbiAgICAgICAgICB2YXIgaW1hZ2UgPSBjb250YWluZXIuaW1hZ2U7XG4gICAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICBpZiAoIWltYWdlTmFtZXMpIHtcbiAgICAgICAgICAgICAgaW1hZ2VOYW1lcyA9IGltYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXMgKyBcIiBcIiArIGltYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkeCA9IGltYWdlLmxhc3RJbmRleE9mKFwiOlwiKTtcbiAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgIGltYWdlID0gaW1hZ2Uuc3Vic3RyaW5nKDAsIGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBpbWFnZS5zcGxpdChcIi9cIiwgMyk7XG4gICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZhciBhbnN3ZXIgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAocGF0aHMubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBwYXRoc1sxXSArIFwiL1wiICsgcGF0aHNbMl07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aHMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXIgPSBwYXRoc1swXSArIFwiL1wiICsgcGF0aHNbMV07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyID0gcGF0aHNbMF0gKyBcIi9cIiArIHBhdGhzWzFdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRhaW5lci4kaW1hZ2VMaW5rID0gVXJsSGVscGVycy5qb2luKFwiaHR0cHM6Ly9yZWdpc3RyeS5odWIuZG9ja2VyLmNvbS91L1wiLCBhbnN3ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goY29udGFpbmVyLnBvcnRzLCAocG9ydCkgPT4ge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lclBvcnQgPSBwb3J0LmNvbnRhaW5lclBvcnQ7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyUG9ydCkge1xuICAgICAgICAgICAgICBwb2QuJGNvbnRhaW5lclBvcnRzLnB1c2goY29udGFpbmVyUG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb2QuJGltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgICAgICB2YXIgcG9kU3RhdHVzID0gKHBvZC5zdGF0dXMgfHwge30pO1xuICAgICAgICB2YXIgcG9kU3BlYyA9IChwb2Quc3BlYyB8fCB7fSk7XG4gICAgICAgIHBvZC4kcG9kSVAgPSBwb2RTdGF0dXMucG9kSVA7XG4gICAgICAgIHBvZC4kaG9zdCA9IHBvZFNwZWMuaG9zdCB8fCBwb2RTcGVjLm5vZGVOYW1lIHx8IHBvZFN0YXR1cy5ob3N0SVA7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgIGlmICghc2VydmljZS5raW5kKSBzZXJ2aWNlLmtpbmQgPSBcIlNlcnZpY2VcIjtcbiAgICAgICAgdGhpcy5zZXJ2aWNlc0J5S2V5W3NlcnZpY2UuX2tleV0gPSBzZXJ2aWNlO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihzZXJ2aWNlKTtcbiAgICAgICAgc2VydmljZS4kcG9kcyA9IFtdO1xuICAgICAgICBpZiAoIXNlcnZpY2UuJHBvZENvdW50ZXJzKSB7XG4gICAgICAgICAgc2VydmljZS4kcG9kQ291bnRlcnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBfLmFzc2lnbihzZXJ2aWNlLiRwb2RDb3VudGVycywgc2VsZWN0b3IgPyBjcmVhdGVQb2RDb3VudGVycyhzZWxlY3RvciwgdGhpcy5wb2RzLCBzZXJ2aWNlLiRwb2RzKSA6IHt9KTtcbiAgICAgICAgc2VydmljZS4kcG9kQ291bnQgPSBzZXJ2aWNlLiRwb2RzLmxlbmd0aDtcblxuICAgICAgICB2YXIgc2VsZWN0ZWRQb2RzID0gc2VydmljZS4kcG9kcztcbiAgICAgICAgc2VydmljZS5jb25uZWN0VG8gPSBzZWxlY3RlZFBvZHMubWFwKChwb2QpID0+IHtcbiAgICAgICAgICByZXR1cm4gcG9kLl9rZXk7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcbiAgICAgICAgc2VydmljZS4kbGFiZWxzVGV4dCA9IGxhYmVsc1RvU3RyaW5nKGdldExhYmVscyhzZXJ2aWNlKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvblVybEFuZEFwcEluZm8oc2VydmljZSwgXCJzZXJ2aWNlTmFtZXNcIik7XG4gICAgICAgIHZhciBzcGVjID0gc2VydmljZS5zcGVjIHx8IHt9O1xuICAgICAgICBzZXJ2aWNlLiRwb3J0YWxJUCA9IHNwZWMucG9ydGFsSVA7XG4gICAgICAgIHNlcnZpY2UuJHNlbGVjdG9yVGV4dCA9IGxhYmVsc1RvU3RyaW5nKHNwZWMuc2VsZWN0b3IpO1xuICAgICAgICB2YXIgcG9ydHMgPSBfLm1hcChzcGVjLnBvcnRzIHx8IFtdLCBcInBvcnRcIik7XG4gICAgICAgIHNlcnZpY2UuJHBvcnRzID0gcG9ydHM7XG4gICAgICAgIHNlcnZpY2UuJHBvcnRzVGV4dCA9IHBvcnRzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgdmFyIGljb25VcmwgPSBzZXJ2aWNlLiRpY29uVXJsO1xuICAgICAgICBpZiAoaWNvblVybCAmJiBzZWxlY3RlZFBvZHMpIHtcbiAgICAgICAgICBzZWxlY3RlZFBvZHMuZm9yRWFjaCgocG9kKSA9PiB7XG4gICAgICAgICAgICBwb2QuJGljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZpY2UuJHNlcnZpY2VVcmwgPSBzZXJ2aWNlTGlua1VybChzZXJ2aWNlKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlcGxpY2F0aW9uQ29udHJvbGxlcnMuZm9yRWFjaCgocmVwbGljYXRpb25Db250cm9sbGVyKSA9PiB7XG4gICAgICAgIGlmICghcmVwbGljYXRpb25Db250cm9sbGVyLmtpbmQpIHJlcGxpY2F0aW9uQ29udHJvbGxlci5raW5kID0gXCJSZXBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcbiAgICAgICAgdGhpcy5yZXBsaWNhdGlvbkNvbnRyb2xsZXJzQnlLZXlbcmVwbGljYXRpb25Db250cm9sbGVyLl9rZXldID0gcmVwbGljYXRpb25Db250cm9sbGVyXG4gICAgICAgICAgdmFyIHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IocmVwbGljYXRpb25Db250cm9sbGVyKTtcbiAgICAgICAgcmVwbGljYXRpb25Db250cm9sbGVyLiRwb2RzID0gW107XG4gICAgICAgIHJlcGxpY2F0aW9uQ29udHJvbGxlci4kcG9kQ291bnRlcnMgPSBzZWxlY3RvciA/IGNyZWF0ZVBvZENvdW50ZXJzKHNlbGVjdG9yLCB0aGlzLnBvZHMsIHJlcGxpY2F0aW9uQ29udHJvbGxlci4kcG9kcykgOiBudWxsO1xuICAgICAgICByZXBsaWNhdGlvbkNvbnRyb2xsZXIuJHBvZENvdW50ID0gcmVwbGljYXRpb25Db250cm9sbGVyLiRwb2RzLmxlbmd0aDtcbiAgICAgICAgcmVwbGljYXRpb25Db250cm9sbGVyLiRyZXBsaWNhcyA9IChyZXBsaWNhdGlvbkNvbnRyb2xsZXIuc3BlYyB8fCB7fSkucmVwbGljYXM7XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkUG9kcyA9IHJlcGxpY2F0aW9uQ29udHJvbGxlci4kcG9kcztcbiAgICAgICAgcmVwbGljYXRpb25Db250cm9sbGVyLmNvbm5lY3RUbyA9IHNlbGVjdGVkUG9kcy5tYXAoKHBvZCkgPT4ge1xuICAgICAgICAgIHJldHVybiBwb2QuX2tleTtcbiAgICAgICAgfSkuam9pbignLCcpO1xuICAgICAgICByZXBsaWNhdGlvbkNvbnRyb2xsZXIuJGxhYmVsc1RleHQgPSBsYWJlbHNUb1N0cmluZyhnZXRMYWJlbHMocmVwbGljYXRpb25Db250cm9sbGVyKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvblVybEFuZEFwcEluZm8ocmVwbGljYXRpb25Db250cm9sbGVyLCBcInJlcGxpY2F0aW9uQ29udHJvbGxlck5hbWVzXCIpO1xuICAgICAgICB2YXIgaWNvblVybCA9ICByZXBsaWNhdGlvbkNvbnRyb2xsZXIuJGljb25Vcmw7XG4gICAgICAgIGlmIChpY29uVXJsICYmIHNlbGVjdGVkUG9kcykge1xuICAgICAgICAgIHNlbGVjdGVkUG9kcy5mb3JFYWNoKChwb2QpID0+IHtcbiAgICAgICAgICAgIHBvZC4kaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXJ2aWNlcyBtYXkgbm90IG1hcCB0byBhbiBpY29uIGJ1dCB0aGVpciBwb2RzIG1heSBkbyB2aWEgdGhlIFJDXG4gICAgICAvLyBzbyBsZXRzIGRlZmF1bHQgaXQuLi5cbiAgICAgIHRoaXMuc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgICB2YXIgaWNvblVybCA9IHNlcnZpY2UuJGljb25Vcmw7XG4gICAgICAgIHZhciBzZWxlY3RlZFBvZHMgPSBzZXJ2aWNlLiRwb2RzO1xuICAgICAgICBpZiAoc2VsZWN0ZWRQb2RzKSB7XG4gICAgICAgICAgaWYgKCFpY29uVXJsIHx8IGljb25VcmwgPT09IGRlZmF1bHRJY29uVXJsKSB7XG4gICAgICAgICAgICBpY29uVXJsID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGVjdGVkUG9kcy5mb3JFYWNoKChwb2QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFpY29uVXJsKSB7XG4gICAgICAgICAgICAgICAgaWNvblVybCA9IHBvZC4kaWNvblVybDtcbiAgICAgICAgICAgICAgICBpZiAoaWNvblVybCkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS4kaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZUFwcHMoKTtcblxuICAgICAgdmFyIHBvZHNCeUhvc3QgPSB7fTtcbiAgICAgIHRoaXMucG9kcy5mb3JFYWNoKChwb2QpID0+IHtcbiAgICAgICAgdmFyIGhvc3QgPSBnZXRIb3N0KHBvZCk7XG4gICAgICAgIHZhciBwb2RzRm9ySG9zdCA9IHBvZHNCeUhvc3RbaG9zdF07XG4gICAgICAgIGlmICghcG9kc0Zvckhvc3QpIHtcbiAgICAgICAgICBwb2RzRm9ySG9zdCA9IFtdO1xuICAgICAgICAgIHBvZHNCeUhvc3RbaG9zdF0gPSBwb2RzRm9ySG9zdDtcbiAgICAgICAgfVxuICAgICAgICBwb2RzRm9ySG9zdC5wdXNoKHBvZCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9kc0J5SG9zdCA9IHBvZHNCeUhvc3Q7XG5cbiAgICAgIHZhciB0bXBIb3N0cyA9IFtdO1xuICAgICAgZm9yICh2YXIgaG9zdEtleSBpbiBwb2RzQnlIb3N0KSB7XG4gICAgICAgIHZhciBob3N0UG9kcyA9IFtdO1xuICAgICAgICB2YXIgcG9kQ291bnRlcnMgPSBjcmVhdGVQb2RDb3VudGVycygocG9kKSA9PiBnZXRIb3N0KHBvZCkgPT09IGhvc3RLZXksIHRoaXMucG9kcywgaG9zdFBvZHMsIFwiaG9zdD1cIiArIGhvc3RLZXkpO1xuICAgICAgICB2YXIgaG9zdElQID0gbnVsbDtcbiAgICAgICAgaWYgKGhvc3RQb2RzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBwb2QgPSBob3N0UG9kc1swXTtcbiAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gcG9kLnN0YXR1cztcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICBob3N0SVAgPSBjdXJyZW50U3RhdGUuaG9zdElQO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaG9zdERldGFpbHMgPSB7XG4gICAgICAgICAgbmFtZTogaG9zdEtleSxcbiAgICAgICAgICBpZDogaG9zdEtleSxcbiAgICAgICAgICBlbGVtZW50SWQ6IGhvc3RLZXkucmVwbGFjZSgvXFwuL2csICdfJyksXG4gICAgICAgICAgaG9zdElQOiBob3N0SVAsXG4gICAgICAgICAgcG9kczogaG9zdFBvZHMsXG4gICAgICAgICAga2luZDogXCJIb3N0XCIsXG4gICAgICAgICAgICAkcG9kQ291bnRlcnM6IHBvZENvdW50ZXJzLFxuICAgICAgICAgICAgJGljb25Vcmw6IGhvc3RJY29uVXJsXG4gICAgICAgIH07XG4gICAgICAgIHRtcEhvc3RzLnB1c2goaG9zdERldGFpbHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3RzID0gdG1wSG9zdHM7XG5cbiAgICAgIGVucmljaEJ1aWxkQ29uZmlncyh0aGlzLmJ1aWxkY29uZmlncyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUFwcHMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBsZXRzIGNyZWF0ZSB0aGUgYXBwIHZpZXdzIGJ5IHRyeWluZyB0byBqb2luIGNvbnRyb2xsZXJzIC8gc2VydmljZXMgLyBwb2RzIHRoYXQgYXJlIHJlbGF0ZWRcbiAgICAgICAgdmFyIGFwcFZpZXdzID0gW107XG5cbiAgICAgICAgdGhpcy5yZXBsaWNhdGlvbkNvbnRyb2xsZXJzLmZvckVhY2goKHJlcGxpY2F0aW9uQ29udHJvbGxlcikgPT4ge1xuICAgICAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShyZXBsaWNhdGlvbkNvbnRyb2xsZXIpO1xuICAgICAgICAgIHZhciAkaWNvblVybCA9IHJlcGxpY2F0aW9uQ29udHJvbGxlci4kaWNvblVybDtcbiAgICAgICAgICBhcHBWaWV3cy5wdXNoKHtcbiAgICAgICAgICAgIGFwcFBhdGg6IFwiL2R1bW15UGF0aC9cIiArIG5hbWUsXG4gICAgICAgICAgICAkbmFtZTogbmFtZSxcbiAgICAgICAgICAgICRpbmZvOiB7XG4gICAgICAgICAgICAgICRpY29uVXJsOiAkaWNvblVybFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRpY29uVXJsOiAkaWNvblVybCxcbiAgICAgICAgICAgIHJlcGxpY2F0aW9uQ29udHJvbGxlcnM6IFtyZXBsaWNhdGlvbkNvbnRyb2xsZXJdLFxuICAgICAgICAgICAgcG9kczogcmVwbGljYXRpb25Db250cm9sbGVyLiRwb2RzIHx8IFtdLFxuICAgICAgICAgICAgc2VydmljZXM6IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBoYXNUZW1wbGF0ZXNTZXJ2aWNlID0gaXNPcGVuU2hpZnQ7XG4gICAgICAgIHZhciBub01hdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKHNlcnZpY2UpO1xuICAgICAgICAgIGlmIChuYW1lID09PSBcInRlbXBsYXRlc1wiKSB7XG4gICAgICAgICAgICB2YXIgcG9kQ291bnRlcnMgPSBzZXJ2aWNlLiRwb2RDb3VudGVycztcbiAgICAgICAgICAgIGlmIChwb2RDb3VudGVycyAmJiBwb2RDb3VudGVycy52YWxpZCkge1xuICAgICAgICAgICAgICBoYXNUZW1wbGF0ZXNTZXJ2aWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbm93IGxldHMgc2VlIGlmIHdlIGNhbiBmaW5kIGFuIGFwcCB3aXRoIGFuIFJDIG9mIHRoZSBzYW1lIHNlbGVjdG9yXG4gICAgICAgICAgdmFyIG1hdGNoZXNBcHAgPSBudWxsO1xuICAgICAgICAgIGFwcFZpZXdzLmZvckVhY2goKGFwcFZpZXcpID0+IHtcbiAgICAgICAgICAgIGFwcFZpZXcucmVwbGljYXRpb25Db250cm9sbGVycy5mb3JFYWNoKChyZXBsaWNhdGlvbkNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgdmFyIHJlcFNlbGVjdG9yID0gZ2V0U2VsZWN0b3IocmVwbGljYXRpb25Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgaWYgKHJlcFNlbGVjdG9yICYmIFxuICAgICAgICAgICAgICAgICAgc2VsZWN0b3JNYXRjaGVzKHJlcFNlbGVjdG9yLCBnZXRTZWxlY3RvcihzZXJ2aWNlKSkgJiYgXG4gICAgICAgICAgICAgICAgICBnZXROYW1lc3BhY2Uoc2VydmljZSkgPT09IGdldE5hbWVzcGFjZShyZXBsaWNhdGlvbkNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlc0FwcCA9IGFwcFZpZXc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXNBcHApIHtcbiAgICAgICAgICAgIG1hdGNoZXNBcHAuc2VydmljZXMucHVzaChzZXJ2aWNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9NYXRjaGVzLnB1c2goc2VydmljZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbG9nLmRlYnVnKFwibm8gbWF0Y2hlczogXCIsIG5vTWF0Y2hlcyk7XG4gICAgICAgIG5vTWF0Y2hlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgdmFyIGFwcFZpZXcgPSBfLmZpbmQoYXBwVmlld3MsIChhcHBWaWV3KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gXy5hbnkoYXBwVmlldy5yZXBsaWNhdGlvbkNvbnRyb2xsZXJzLCAocmMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIF8uc3RhcnRzV2l0aChnZXROYW1lKHJjKSwgZ2V0TmFtZShzZXJ2aWNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoYXBwVmlldykge1xuICAgICAgICAgICAgYXBwVmlldy5zZXJ2aWNlcy5wdXNoKHNlcnZpY2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgJGljb25VcmwgPSBzZXJ2aWNlLiRpY29uVXJsO1xuICAgICAgICAgICAgYXBwVmlld3MucHVzaCh7XG4gICAgICAgICAgICAgIGFwcFBhdGg6IFwiL2R1bW15UGF0aC9cIiArIG5hbWUsXG4gICAgICAgICAgICAgICRuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAkaW5mbzoge1xuICAgICAgICAgICAgICAgICRpY29uVXJsOiAkaWNvblVybFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICRpY29uVXJsOiAkaWNvblVybCxcbiAgICAgICAgICAgICAgcmVwbGljYXRpb25Db250cm9sbGVyczogW10sXG4gICAgICAgICAgICAgIHBvZHM6IHNlcnZpY2UuJHBvZHMgfHwgW10sXG4gICAgICAgICAgICAgIHNlcnZpY2VzOiBbc2VydmljZV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaG93UnVuQnV0dG9uID0gaGFzVGVtcGxhdGVzU2VydmljZTtcblxuICAgICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5yb3V0ZXMsIChyb3V0ZSkgPT4ge1xuICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHJvdXRlLm1ldGFkYXRhIHx8IHt9O1xuICAgICAgICAgIHZhciBzcGVjID0gcm91dGUuc3BlYyB8fCB7fTtcbiAgICAgICAgICB2YXIgc2VydmljZU5hbWUgPSBDb3JlLnBhdGhHZXQoc3BlYywgW1widG9cIiwgXCJuYW1lXCJdKTtcbiAgICAgICAgICB2YXIgaG9zdCA9IHNwZWMuaG9zdDtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKHJvdXRlKTtcbiAgICAgICAgICBpZiAoc2VydmljZU5hbWUgJiYgaG9zdCkge1xuICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2UobmFtZXNwYWNlLCBzZXJ2aWNlTmFtZSk7XG4gICAgICAgICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICAgICAgICBzZXJ2aWNlLiRob3N0ID0gaG9zdDtcblxuICAgICAgICAgICAgICAvLyBUT0RPIHdlIGNvdWxkIHVzZSBzb21lIGFubm90YXRpb25zIC8gbWV0YWRhdGEgdG8gZGVkdWNlIHdoYXQgVVJMIHdlIHNob3VsZCB1c2UgdG8gb3BlbiB0aGlzXG4gICAgICAgICAgICAgIC8vIHNlcnZpY2UgaW4gdGhlIGNvbnNvbGUuIEZvciBub3cganVzdCBhc3N1bWUgaXRzIGh0dHA6XG5cbiAgICAgICAgICAgICAgaWYgKGhvc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaG9zdFVybCA9ICBob3N0O1xuICAgICAgICAgICAgICAgIGlmIChob3N0VXJsLmluZGV4T2YoXCI6Ly9cIikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICBob3N0VXJsID0gXCJodHRwOi8vXCIgKyBob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXJ2aWNlLiRjb25uZWN0VXJsID0gVXJsSGVscGVycy5qb2luKGhvc3RVcmwsICBcIi9cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNvdWxkIG5vdCBmaW5kIHNlcnZpY2UgXCIgKyBzZXJ2aWNlTmFtZSArIFwiIG5hbWVzcGFjZSBcIiArIG5hbWVzcGFjZSArIFwiIGZvciByb3V0ZTogXCIgKyBtZXRhZGF0YS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcFZpZXdzID0gcG9wdWxhdGVLZXlzKGFwcFZpZXdzKS5zb3J0QnkoKGFwcFZpZXcpID0+IGFwcFZpZXcuX2tleSk7XG5cbiAgICAgICAgQXJyYXlIZWxwZXJzLnN5bmModGhpcy5hcHBWaWV3cywgYXBwVmlld3MsICckbmFtZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcEluZm9zICYmIHRoaXMuYXBwVmlld3MpIHtcbiAgICAgICAgICB2YXIgZm9sZGVyTWFwID0ge307XG4gICAgICAgICAgdmFyIGZvbGRlcnMgPSBbXTtcbiAgICAgICAgICB2YXIgYXBwTWFwID0ge307XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXBwSW5mb3MsIChhcHBJbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFwcEluZm8uJGljb25VcmwgJiYgYXBwSW5mby5pY29uUGF0aCAmJiBhcHBJbmZvLmljb25QYXRoICE9PSBcIm51bGxcIikge1xuICAgICAgICAgICAgICBhcHBJbmZvLiRpY29uVXJsID0gZ2l0UGF0aFRvVXJsKGFwcEluZm8uaWNvblBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFwcFBhdGggPSBhcHBJbmZvLmFwcFBhdGg7XG4gICAgICAgICAgICBpZiAoYXBwUGF0aCkge1xuICAgICAgICAgICAgICBhcHBNYXBbYXBwUGF0aF0gPSBhcHBJbmZvO1xuICAgICAgICAgICAgICB2YXIgaWR4ID0gYXBwUGF0aC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgICAgICAgIHZhciBmb2xkZXJQYXRoID0gXCJcIjtcbiAgICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyUGF0aCA9IGFwcFBhdGguc3Vic3RyaW5nKDAsIGlkeCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9sZGVyUGF0aCA9IENvcmUudHJpbUxlYWRpbmcoZm9sZGVyUGF0aCwgXCIvXCIpO1xuICAgICAgICAgICAgICB2YXIgZm9sZGVyID0gZm9sZGVyTWFwW2ZvbGRlclBhdGhdO1xuICAgICAgICAgICAgICBpZiAoIWZvbGRlcikge1xuICAgICAgICAgICAgICAgIGZvbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IGZvbGRlclBhdGgsXG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGFwcHM6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb2xkZXJzLnB1c2goZm9sZGVyKTtcbiAgICAgICAgICAgICAgICBmb2xkZXJNYXBbZm9sZGVyUGF0aF0gPSBmb2xkZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9sZGVyLmFwcHMucHVzaChhcHBJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcEZvbGRlcnMgPSBmb2xkZXJzLnNvcnRCeShcInBhdGhcIik7XG5cbiAgICAgICAgICB2YXIgYXBwcyA9IFtdO1xuICAgICAgICAgIHZhciBkZWZhdWx0SW5mbyA9IHtcbiAgICAgICAgICAgICRpY29uVXJsOiBkZWZhdWx0SWNvblVybFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hcHBWaWV3cywgKGFwcFZpZXcpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBhcHBQYXRoID0gYXBwVmlldy5hcHBQYXRoO1xuXG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICBUT0RPXG4gICAgICAgICAgICAgICBhcHBWaWV3LiRzZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICBLdWJlcm5ldGVzLnNldEpzb24oJHNjb3BlLCBhcHBWaWV3LmlkLCAkc2NvcGUubW9kZWwuYXBwcyk7XG4gICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICB2YXIgYXBwSW5mbyA9IGFuZ3VsYXIuY29weShkZWZhdWx0SW5mbyk7XG4gICAgICAgICAgICAgIGlmIChhcHBQYXRoKSB7XG4gICAgICAgICAgICAgICAgYXBwSW5mbyA9IGFwcE1hcFthcHBQYXRoXSB8fCBhcHBJbmZvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghYXBwVmlldy4kaW5mbykge1xuICAgICAgICAgICAgICAgIGFwcFZpZXcuJGluZm8gPSBkZWZhdWx0SW5mbztcbiAgICAgICAgICAgICAgICBhcHBWaWV3LiRpbmZvID0gYXBwSW5mbztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcHBWaWV3LmlkID0gYXBwUGF0aDtcbiAgICAgICAgICAgICAgaWYgKCFhcHBWaWV3LiRuYW1lKSB7XG4gICAgICAgICAgICAgICAgYXBwVmlldy4kbmFtZSA9IGFwcEluZm8ubmFtZSB8fCBhcHBWaWV3LiRuYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghYXBwVmlldy4kaWNvblVybCkge1xuICAgICAgICAgICAgICAgIGFwcFZpZXcuJGljb25VcmwgPSBhcHBJbmZvLiRpY29uVXJsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFwcHMucHVzaChhcHBWaWV3KTtcbiAgICAgICAgICAgICAgYXBwVmlldy4kcG9kQ291bnRlcnMgPSBjcmVhdGVBcHBWaWV3UG9kQ291bnRlcnMoYXBwVmlldyk7XG4gICAgICAgICAgICAgIGFwcFZpZXcuJHBvZENvdW50ID0gKGFwcFZpZXcucG9kcyB8fCBbXSkubGVuZ3RoO1xuICAgICAgICAgICAgICBhcHBWaWV3LiRyZXBsaWNhdGlvbkNvbnRyb2xsZXJzVGV4dCA9IChhcHBWaWV3LnJlcGxpY2F0aW9uQ29udHJvbGxlcnMgfHwgW10pLm1hcChcIl9rZXlcIikuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgIGFwcFZpZXcuJHNlcnZpY2VzVGV4dD0gKGFwcFZpZXcuc2VydmljZXMgfHwgW10pLm1hcChcIl9rZXlcIikuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgIGFwcFZpZXcuJHNlcnZpY2VWaWV3cyA9IGNyZWF0ZUFwcFZpZXdTZXJ2aWNlVmlld3MoYXBwVmlldyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIHVwZGF0ZSBhcHBWaWV3czogXCIgKyBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3RoaXMuYXBwcyA9IGFwcHM7XG4gICAgICAgICAgdGhpcy5hcHBzID0gdGhpcy5hcHBWaWV3cztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cud2FybihcIkNhdWdodCBlcnJvcjogXCIgKyBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGlzY292ZXJQb2RDb25uZWN0aW9ucyhlbnRpdHkpIHtcbiAgICAgIHZhciBpbmZvID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3RhdHVzXCIsIFwiaW5mb1wiXSk7XG4gICAgICB2YXIgaG9zdFBvcnQgPSBudWxsO1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGVudGl0eS5zdGF0dXMgfHwge307XG4gICAgICB2YXIgZGVzaXJlZFN0YXRlID0gZW50aXR5LnNwZWMgfHwge307XG4gICAgICB2YXIgcG9kSWQgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgICB2YXIgaG9zdCA9IGN1cnJlbnRTdGF0ZVtcImhvc3RJUFwiXTtcbiAgICAgIHZhciBwb2RJUCA9IGN1cnJlbnRTdGF0ZVtcInBvZElQXCJdO1xuICAgICAgdmFyIGhhc0RvY2tlciA9IGZhbHNlO1xuICAgICAgdmFyIGZvdW5kQ29udGFpbmVyUG9ydCA9IG51bGw7XG4gICAgICBpZiAoZGVzaXJlZFN0YXRlKSB7XG4gICAgICAgIHZhciBjb250YWluZXJzID0gZGVzaXJlZFN0YXRlLmNvbnRhaW5lcnM7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChjb250YWluZXJzLCAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgaWYgKCFob3N0UG9ydCkge1xuICAgICAgICAgICAgdmFyIHBvcnRzID0gY29udGFpbmVyLnBvcnRzO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHBvcnRzLCAocG9ydCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhvc3RQb3J0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclBvcnQgPSBwb3J0LmNvbnRhaW5lclBvcnQ7XG4gICAgICAgICAgICAgICAgdmFyIHBvcnROYW1lID0gcG9ydC5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJIb3N0UG9ydCA9IHBvcnQuaG9zdFBvcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lclBvcnQgPT09IDg3NzggfHwgXCJqb2xva2lhXCIgPT09IHBvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyUG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9kSVApIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZENvbnRhaW5lclBvcnQgPSBjb250YWluZXJQb3J0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJIb3N0UG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgIGhvc3RQb3J0ID0gY29udGFpbmVySG9zdFBvcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZm91bmRDb250YWluZXJQb3J0ICYmIHBvZElkICYmIGlzUnVubmluZyhjdXJyZW50U3RhdGUpKSB7XG4gICAgICAgIGVudGl0eS4kam9sb2tpYVVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgXCIvYXBpL1wiLCBkZWZhdWx0QXBpVmVyc2lvbiwgXCJuYW1lc3BhY2VzXCIsIGVudGl0eS5tZXRhZGF0YS5uYW1lc3BhY2UgLCBcIi9wb2RzL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvZElkICsgXCI6XCIgKyBmb3VuZENvbnRhaW5lclBvcnQsIFwiL3Byb3h5L2pvbG9raWEvXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbW9kZWwgc2VydmljZSB3aGljaCBrZWVwcyB0cmFjayBvZiBhbGwgdGhlIHBvZHMsIHJlcGxpY2F0aW9uIGNvbnRyb2xsZXJzIGFuZCBzZXJ2aWNlcyBhbG9uZ1xuICAgKiB3aXRoIHRoZWlyIGFzc29jaWF0aW9ucyBhbmQgc3RhdHVzXG4gICAqL1xuICBfbW9kdWxlLmZhY3RvcnkoJ0t1YmVybmV0ZXNNb2RlbCcsIFsnJHJvb3RTY29wZScsICckaHR0cCcsICdLdWJlcm5ldGVzQXBpVVJMJywgJ0t1YmVybmV0ZXNTdGF0ZScsICdXYXRjaGVyU2VydmljZScsICckbG9jYXRpb24nLCAnJHJlc291cmNlJywgKCRyb290U2NvcGUsICRodHRwLCBBcHBMaWJyYXJ5VVJMLCBLdWJlcm5ldGVzU3RhdGUsIHdhdGNoZXI6V2F0Y2hlclNlcnZpY2UsICRsb2NhdGlvbjpuZy5JTG9jYXRpb25TZXJ2aWNlLCAkcmVzb3VyY2U6bmcucmVzb3VyY2UuSVJlc291cmNlU2VydmljZSkgPT4ge1xuXG4gICAgdmFyICRzY29wZSA9IG5ldyBLdWJlcm5ldGVzTW9kZWxTZXJ2aWNlKCk7XG4gICAgJHNjb3BlLmt1YmVybmV0ZXMgPSBLdWJlcm5ldGVzU3RhdGU7XG5cbiAgICAvLyBjcmVhdGUgYWxsIG9mIG91ciByZXNvdXJjZSBjbGFzc2VzXG4gICAgdmFyIHR5cGVOYW1lcyA9IHdhdGNoZXIuZ2V0VHlwZXMoKTtcbiAgICBfLmZvckVhY2godHlwZU5hbWVzLCAodHlwZTpzdHJpbmcpID0+IHtcbiAgICAgIHZhciB1cmxUZW1wbGF0ZSA9ICcnO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTOlxuICAgICAgICAgIHVybFRlbXBsYXRlID0gVXJsSGVscGVycy5qb2luKCduYW1lc3BhY2VzJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdXJsVGVtcGxhdGUgPSBVcmxIZWxwZXJzLmpvaW4oJ25hbWVzcGFjZXMvOm5hbWVzcGFjZScsIHR5cGUsICc6aWQnKTtcbiAgICAgIH1cbiAgICAgICRzY29wZVt0eXBlICsgJ1Jlc291cmNlJ10gPSBjcmVhdGVSZXNvdXJjZSh0eXBlLCB1cmxUZW1wbGF0ZSwgJHJlc291cmNlLCAkc2NvcGUpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVnaXN0ZXIgZm9yIGFsbCB1cGRhdGVzIG9uIG9iamVjdHNcblx0XHR3YXRjaGVyLnJlZ2lzdGVyTGlzdGVuZXIoKG9iamVjdHM6T2JqZWN0TWFwKSA9PiB7XG5cdFx0XHR2YXIgdHlwZXMgPSB3YXRjaGVyLmdldFR5cGVzKCk7XG5cdFx0XHRfLmZvckVhY2godHlwZXMsICh0eXBlOnN0cmluZykgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6XG5cdFx0XHRcdFx0XHR2YXIgaXRlbXMgPSBwb3B1bGF0ZUtleXMob2JqZWN0c1t0eXBlXSk7XG5cdFx0XHRcdFx0XHRhbmd1bGFyLmZvckVhY2goaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0ucHJveHlVcmwgPSBrdWJlcm5ldGVzUHJveHlVcmxGb3JTZXJ2aWNlKG1hc3RlckFwaVVybCgpLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXHRcdFx0XHRcdFx0JHNjb3BlW3R5cGVdID0gaXRlbXM7XG5cdFx0XHRcdFx0XHRicmVhaztcbiAgICAgICAgICBjYXNlIFdhdGNoVHlwZXMuVEVNUExBVEVTOlxuICAgICAgICAgIGNhc2UgV2F0Y2hUeXBlcy5ST1VURVM6XG4gICAgICAgICAgY2FzZSBXYXRjaFR5cGVzLkJVSUxEUzpcbiAgICAgICAgICBjYXNlIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUzpcbiAgICAgICAgICBjYXNlIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUzpcbiAgICAgICAgICAgIC8vIGRvbid0IHB1dCBhIGJyZWFrIGhlcmUgOi0pXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdCRzY29wZVt0eXBlXSA9IHBvcHVsYXRlS2V5cyhvYmplY3RzW3R5cGVdKTtcblx0XHRcdFx0fVxuICAgICAgICBsb2cuZGVidWcoXCJUeXBlOiBcIiwgdHlwZSwgXCIgb2JqZWN0OiBcIiwgJHNjb3BlW3R5cGVdKTtcblx0XHRcdH0pO1xuXHRcdFx0JHNjb3BlLm1heWJlSW5pdCgpO1xuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdrdWJlcm5ldGVzTW9kZWxVcGRhdGVkJywgJHNjb3BlKTtcbiAgICAgIENvcmUuJGFwcGx5KCRyb290U2NvcGUpO1xuXHRcdH0pO1xuXG4gICAgLy8gc2V0IHRoZSBzZWxlY3RlZCBuYW1lc3BhY2UgaWYgc2V0IGluIHRoZSBsb2NhdGlvbiBiYXJcbiAgICAvLyBvdGhlcndpc2UgdXNlIHdoYXRldmVyIHByZXZpb3VzbHkgc2VsZWN0ZWQgbmFtZXNwYWNlIGlzXG4gICAgLy8gYXZhaWxhYmxlXG4gICAgdmFyIHNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKTtcbiAgICBpZiAoJ25hbWVzcGFjZScgaW4gc2VhcmNoKSB7XG4gICAgICB3YXRjaGVyLnNldE5hbWVzcGFjZShzZWFyY2hbJ25hbWVzcGFjZSddKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RQb2RzKHBvZHMsIG5hbWVzcGFjZSwgbGFiZWxzKSB7XG4gICAgICByZXR1cm4gcG9kcy5maWx0ZXIoKHBvZCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZXNwYWNlKHBvZCkgPT09IG5hbWVzcGFjZSAmJiBzZWxlY3Rvck1hdGNoZXMobGFiZWxzLCBnZXRMYWJlbHMocG9kKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICRzY29wZTtcbiAgfV0pO1xuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIC8vIGZhY2FkZSB0aGlzIHRvIHRoZSB3YXRjaGVyIHNlcnZpY2VcbiAgY2xhc3MgS3ViZXJuZXRlc1N0YXRlSW1wbCBpbXBsZW1lbnRzIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB3YXRjaGVyOldhdGNoZXJTZXJ2aWNlKSB7XG4gICAgfVxuICAgIGdldCBuYW1lc3BhY2VzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gXy5tYXAodGhpcy53YXRjaGVyLmdldE9iamVjdHMoV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSwgKG5hbWVzcGFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlLm1ldGFkYXRhLm5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGVkTmFtZXNwYWNlKCk6c3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLndhdGNoZXIuZ2V0TmFtZXNwYWNlKCk7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZE5hbWVzcGFjZShuYW1lc3BhY2U6c3RyaW5nKSB7XG4gICAgICB0aGlzLndhdGNoZXIuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gICAgfVxuICB9XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLdWJlcm5ldGVzU3RhdGUnLCBbJ1dhdGNoZXJTZXJ2aWNlJywgKHdhdGNoZXI6V2F0Y2hlclNlcnZpY2UpID0+IHtcbiAgICByZXR1cm4gbmV3IEt1YmVybmV0ZXNTdGF0ZUltcGwod2F0Y2hlcik7XG4gIH1dKTtcblxuICAvLyBUT0RPIHRoaXMgZG9lc24ndCBuZWVkIHRvIGJlIGEgc2VydmljZSByZWFsbHlcbiAgX21vZHVsZS5mYWN0b3J5KCdLdWJlcm5ldGVzQXBpVVJMJywgKCkgPT4ga3ViZXJuZXRlc0FwaVVybCgpKTtcblxuICAvLyBUT0RPIHdlJ2xsIGdldCByaWQgb2YgdGhpcy4uLlxuICBfbW9kdWxlLmZhY3RvcnkoJ0t1YmVybmV0ZXNWZXJzaW9uJywgWygpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6ICgpID0+IG51bGxcbiAgICB9XG4gIH1dKTtcblxuICAvLyBUT0RPIGxldCdzIG1vdmUgdGhlc2UgaW50byBLdWJlcm5ldGVzTW9kZWwgc28gY29udHJvbGxlcnMgZG9uJ3QgaGF2ZSB0byBpbmplY3QgdGhlbSBzZXBhcmF0ZWx5XG4gIF9tb2R1bGUuZmFjdG9yeSgnS3ViZXJuZXRlc1BvZHMnLCBbJ0t1YmVybmV0ZXNNb2RlbCcsIChLdWJlcm5ldGVzTW9kZWwpID0+IHtcbiAgICByZXR1cm4gS3ViZXJuZXRlc01vZGVsWydwb2RzUmVzb3VyY2UnXTtcbiAgfV0pO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnS3ViZXJuZXRlc1JlcGxpY2F0aW9uQ29udHJvbGxlcnMnLCBbJ0t1YmVybmV0ZXNNb2RlbCcsIChLdWJlcm5ldGVzTW9kZWwpID0+IHtcbiAgICByZXR1cm4gS3ViZXJuZXRlc01vZGVsWydyZXBsaWNhdGlvbmNvbnRyb2xsZXJzUmVzb3VyY2UnXTtcbiAgfV0pO1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnS3ViZXJuZXRlc1NlcnZpY2VzJywgWydLdWJlcm5ldGVzTW9kZWwnLCAoS3ViZXJuZXRlc01vZGVsKSA9PiB7XG4gICAgcmV0dXJuIEt1YmVybmV0ZXNNb2RlbFsnc2VydmljZXNSZXNvdXJjZSddO1xuICB9XSk7XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLdWJlcm5ldGVzQnVpbGRzJywgWydyZXN0bW9kJywgKHJlc3Rtb2QpID0+IHtcbiAgICByZXR1cm4gcmVzdG1vZC5tb2RlbChidWlsZENvbmZpZ3NSZXN0VVJMKCkpO1xuICB9XSk7XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNNb2RlbC50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIF9tb2R1bGUuZmFjdG9yeSgnU2VydmljZVJlZ2lzdHJ5JywgWygpID0+IHtcbiAgICByZXR1cm4gbmV3IFNlcnZpY2VSZWdpc3RyeVNlcnZpY2UoKTtcbiAgfV0pO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgc2ltcGxlIGludGVyZmFjZSB0byBzZXJ2aWNlIGRpc2NvdmVyeSB0aGF0IGNhbiBiZSB1c2VkIGVhcmx5IG9uIGluIHRoZSBhcHBsaWNhdGlvbiBsaWZlY3ljbGUgYmVmb3JlIHRoZVxuICAgKiB1bmRlcmx5aW5nIG1vZGVsIGhhcyBiZWVuIGNyZWF0ZWQgdmlhIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gICAqL1xuICBleHBvcnQgY2xhc3MgU2VydmljZVJlZ2lzdHJ5U2VydmljZSB7XG4gICAgcHJpdmF0ZSBtb2RlbDpLdWJlcm5ldGVzTW9kZWxTZXJ2aWNlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhIHNlcnZpY2UgYXZhaWxhYmxlIGZvciB0aGUgZ2l2ZW4gSUQgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kU2VydmljZShzZXJ2aWNlTmFtZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VydmljZSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZSAoSUQpIG9yIG51bGwgaWYgaXQgY2Fubm90IGJlIGZvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VydmljZU5hbWUgdGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gbG9vayBmb3JcbiAgICAgKiBAcmV0dXJuIHtudWxsfVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5kU2VydmljZShzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgICB2YXIgYW5zd2VyID0gbnVsbDtcbiAgICAgIGlmIChzZXJ2aWNlTmFtZSkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmdldE1vZGVsKCk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSBtb2RlbC5jdXJyZW50TmFtZXNwYWNlKCk7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsLmdldFNlcnZpY2UobmFtZXNwYWNlICxzZXJ2aWNlTmFtZSk7XG4vKlxuICAgICAgICBUT0RPIGxldHMgb25seSBsb29rIGluIHRoZSBjdXJyZW50IG5hbWVzcGFjZVxuICAgICAgICBhbmd1bGFyLmZvckVhY2gobW9kZWwuc2VydmljZXMsIChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlcnZpY2VOYW1lID09PSBnZXROYW1lKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICBhbnN3ZXIgPSBzZXJ2aWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4qL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlcnZpY2UgbGluayBmb3IgdGhlIGdpdmVuIHNlcnZpY2UgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlcnZpY2VOYW1lIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZUxpbmsoc2VydmljZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuZmluZFNlcnZpY2Uoc2VydmljZU5hbWUpO1xuICAgICAgcmV0dXJuIHNlcnZpY2VMaW5rVXJsKHNlcnZpY2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TW9kZWwoKTpLdWJlcm5ldGVzTW9kZWxTZXJ2aWNlIHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm1vZGVsO1xuICAgICAgLy8gbGV0cyBhbGxvdyBsYXp5IGxvYWQgc28gd2UgY2FuIGJlIGludm9rZWQgYmVmb3JlIHRoZSBpbmplY3RvciBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBpZiAoIWFuc3dlcikge1xuICAgICAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgICB0aGlzLm1vZGVsID0gaW5qZWN0b3IuZ2V0KCdLdWJlcm5ldGVzTW9kZWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYW5zd2VyID0gdGhpcy5tb2RlbDtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgna3ViZXJuZXRlcy13YXRjaGVyJyk7XG4gIHZhciBhcGlVcmwgPSBVcmxIZWxwZXJzLmpvaW4oJ2FwaScsICd2MScpO1xuXG4gIHZhciBuYW1lc3BhY2VUeXBlID0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTO1xuXG4gIHZhciBrOHNUeXBlcyA9IE5hbWVzcGFjZWRUeXBlcy5rOHNUeXBlcztcbiAgdmFyIG9zVHlwZXMgID0gTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXM7XG5cbiAgdmFyIGJhc2VXYXRjaCA9IDxhbnk+IHtcbiAgICB1cmw6IDxzdHJpbmc+IHVuZGVmaW5lZCxcbiAgICBjb25uZWN0VGltZTogPE51bWJlcj4gdW5kZWZpbmVkLFxuICAgIG9iamVjdHM6IDxPYmplY3RNYXA+IHt9LFxuICAgIG9iamVjdEFycmF5OiA8QXJyYXk8YW55Pj4gW10sXG4gICAgY3VzdG9taXplcnM6IDxBcnJheTwob2JqOmFueSkgPT4gdm9pZD4+W10sXG4gICAgb25BZGRBY3Rpb25zOiA8QXJyYXk8KG9iajphbnkpID0+IHZvaWQ+PiBbXSxcbiAgICBvbk1vZGlmaWVkQWN0aW9uczogPEFycmF5PChvYmo6YW55KSA9PiB2b2lkPj4gW10sXG4gICAgb25EZWxldGVkQWN0aW9uczogPEFycmF5PChvYmo6YW55KSA9PiB2b2lkPj4gW10sXG4gICAgc29ja2V0OiA8V2ViU29ja2V0PiB1bmRlZmluZWQsXG4gICAgY29ubmVjdGVkOiBmYWxzZVxuICB9XG5cbiAgdmFyIG5hbWVzcGFjZVdhdGNoID0gPGFueT4gXy5hc3NpZ24oXy5jbG9uZURlZXAoYmFzZVdhdGNoKSwge1xuICAgIHNlbGVjdGVkOiB1bmRlZmluZWQsXG4gICAgY29ubmVjdFRpbWU6IDxOdW1iZXI+IHVuZGVmaW5lZCxcbiAgICB1cmw6IFVybEhlbHBlcnMuam9pbihhcGlVcmwsIFdhdGNoVHlwZXMuTkFNRVNQQUNFUyksXG4gIH0pO1xuXG4gIGV4cG9ydCB2YXIgd2F0Y2hlcyA9IDxhbnk+IHt9O1xuICBfLmZvckVhY2goazhzVHlwZXMsICh0eXBlKSA9PiB7XG4gICAgd2F0Y2hlc1t0eXBlXSA9IF8uYXNzaWduKF8uY2xvbmVEZWVwKGJhc2VXYXRjaCksIHtcbiAgICAgIHByZWZpeDogKCkgPT4ga3ViZXJuZXRlc0FwaVByZWZpeCgpLFxuICAgICAgdmFsaWQ6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgfSk7XG4gIF8uZm9yRWFjaChvc1R5cGVzLCAodHlwZSkgPT4ge1xuICAgIHdhdGNoZXNbdHlwZV0gPSBfLmFzc2lnbihfLmNsb25lRGVlcChiYXNlV2F0Y2gpLCB7XG4gICAgICBwcmVmaXg6ICgpID0+IG9wZW5zaGlmdEFwaVByZWZpeCgpLFxuICAgICAgdmFsaWQ6ICgpID0+IGlzT3BlblNoaWZ0IHx8ICh0eXBlID09PSBcInRlbXBsYXRlc1wiIHx8IHR5cGUgPT09IFwiYnVpbGRjb25maWdzXCIpXG4gICAgfSk7XG4gIH0pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzV2F0Y2hlckluaXQnLFxuICAgIGRlcGVuZHM6IFsnaGF3dGlvLW9hdXRoJ10sXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIGlzT3BlblNoaWZ0ID0gdHJ1ZTtcblxuICAgICAgZnVuY3Rpb24gd2F0Y2hOYW1lc3BhY2VzKCkge1xuICAgICAgICB2YXIgdXJpID0gbmV3IFVSSShtYXN0ZXJBcGlVcmwoKSk7XG4gICAgICAgIHVyaS5wYXRoKG5hbWVzcGFjZVdhdGNoLnVybCk7XG4gICAgICAgIHZhciB1cmwgPSB1cmkudG9TdHJpbmcoKTtcbiAgICAgICAgSGF3dGlvT0F1dGguYXV0aGVudGljYXRlZEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHVyaS50b1N0cmluZygpXG4gICAgICAgIH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBfLmZvckVhY2goZGF0YS5pdGVtcywgKG5hbWVzcGFjZTphbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghbmFtZXNwYWNlLm1ldGFkYXRhLnVpZCkge1xuICAgICAgICAgICAgICBuYW1lc3BhY2UubWV0YWRhdGEudWlkID0gbmFtZXNwYWNlLm1ldGFkYXRhLm5hbWVzcGFjZSArICcvJyArIG5hbWVzcGFjZS5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmFtZXNwYWNlV2F0Y2gub2JqZWN0c1tuYW1lc3BhY2UubWV0YWRhdGEudWlkXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuYW1lc3BhY2VXYXRjaC5vYmplY3RBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgIF8uZm9ySW4obmFtZXNwYWNlV2F0Y2gub2JqZWN0cywgKG9iamVjdCwga2V5KSA9PiB7XG4gICAgICAgICAgICBuYW1lc3BhY2VXYXRjaC5vYmplY3RBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KS5mYWlsKCh4SHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgbG9nLndhcm4odGV4dFN0YXR1cywgXCI6IFwiLCBlcnJvclRocm93bik7XG4gICAgICAgICAgSGF3dGlvT0F1dGguZG9Mb2dvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgICAgdmFyIHJvb3RVcmkgPSBuZXcgVVJJKG1hc3RlckFwaVVybCgpKTtcbiAgICAgIHJvb3RVcmkucGF0aChcIi9cIikucXVlcnkoXCJcIik7XG4gICAgICB2YXIgcm9vdFVyaVRleHQgPSByb290VXJpLnRvU3RyaW5nKCk7XG4gICAgICBsb2cuaW5mbyhcIkFib3V0IHRvIHF1ZXJ5IHJvb3QgcGF0aHM6IFwiICsgbWFzdGVyQXBpVXJsKCkpO1xuICAgICAgSGF3dGlvT0F1dGguYXV0aGVudGljYXRlZEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiByb290VXJpVGV4dFxuICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHZhciBwYXRocyA9IGRhdGEucGF0aHM7XG4gICAgICAgICAgaWYgKHBhdGhzKSB7XG4gICAgICAgICAgICBpc09wZW5TaGlmdCA9IGZhbHNlO1xuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHBhdGhzLCAocGF0aCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhwYXRoKSAmJiAocGF0aCA9PT0gXCIvb2FwaVwiIHx8IHBhdGggPT09IFwib2FwaVwiKSkge1xuICAgICAgICAgICAgICAgIGlzT3BlblNoaWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZy5pbmZvKFwiaXNPcGVuU2hpZnQgXCIgKyBpc09wZW5TaGlmdCArIFwiIHdpdGggcGF0aHMgXCIgKyBwYXRocyk7XG4gICAgICAgIH1cbiAgICAgICAgd2F0Y2hOYW1lc3BhY2VzKCk7XG4gICAgICB9KS5mYWlsKCh4SHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgIGxvZy53YXJuKFwiRmFpbGVkIHRvIGZpbmQgcm9vdCBwYXRoczogXCIgKyB0ZXh0U3RhdHVzLCBcIjogXCIsIGVycm9yVGhyb3duKTtcbiAgICAgICAgd2F0Y2hOYW1lc3BhY2VzKCk7XG4gICAgICB9KTtcblxuXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVXYXRjaCh0eXBlLCB3YXRjaCwgdXNlckRldGFpbHMsICRzY29wZSwgb25NZXNzYWdlID0gKGV2ZW50KSA9PiB7fSwgb25DbG9zZSA9IChldmVudCkgPT4ge30sIG9uT3BlbiA9IChldmVudCkgPT4ge30pIHtcbiAgICB2YXIgYXBpVXJsID0gbWFzdGVyQXBpVXJsKCk7XG4gICAgdmFyIHdhdGNoVXJsID0gd2F0Y2gudXJsO1xuICAgIHZhciB1cmk7XG4gICAgaWYgKCFhcGlVcmwgfHwgYXBpVXJsID09PSBcIi9cIikge1xuICAgICAgLy8gbGV0cyBhdm9pZCB1c2luZyBhIHJlbGF0aXZlIHBhdGggaWYgbm8gbWFzdGVyIHVybCBpcyBzcGVjaWZpZWRcbiAgICAgIC8vIGFzIHdlIGFyZSBwcm9iYWJseSBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgdXJpID0gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4oYXBpVXJsLCB3YXRjaFVybCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmkgPSBuZXcgVVJJKGFwaVVybCk7XG4gICAgICB1cmkucGF0aCh3YXRjaFVybCk7XG4gICAgfVxuICAgIGlmICh1cmkucHJvdG9jb2woKSA9PT0gXCJodHRwc1wiKSB7XG4gICAgICB1cmkucHJvdG9jb2woJ3dzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmkucHJvdG9jb2woJ3dzJyk7XG4gICAgfVxuICAgIHVyaS5xdWVyeSg8YW55PiB7XG4gICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgIGFjY2Vzc190b2tlbjogdXNlckRldGFpbHMudG9rZW5cbiAgICB9KTtcbiAgICB3YXRjaC5yZXRyaWVzID0gMDtcbiAgICB2YXIgb25PcGVuSW50ZXJuYWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIHdhdGNoLnJldHJpZXMgPSAwO1xuICAgICAgd2F0Y2guY29ubmVjdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHdhdGNoLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICBvbk9wZW4oZXZlbnQpO1xuICAgIH07XG4gICAgdmFyIG9uTWVzc2FnZUludGVybmFsID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBsb2cuZGVidWcodHlwZSwgXCIgb25tZXNzYWdlOiBcIiwgZXZlbnQpO1xuICAgICAgdmFyIGRhdGEgPSBhbmd1bGFyLmZyb21Kc29uKGV2ZW50LmRhdGEpO1xuICAgICAgLy9sb2cuZGVidWcodHlwZSwgXCIgZGF0YTogXCIsIGRhdGEpO1xuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSBXYXRjaEFjdGlvbnMuQURERUQ6XG4gICAgICAgIGNhc2UgV2F0Y2hBY3Rpb25zLk1PRElGSUVEOlxuICAgICAgICAgIHZhciBvYmogPSBkYXRhLm9iamVjdDtcbiAgICAgICAgICBpZiAod2F0Y2guY3VzdG9taXplcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgXy5mb3JFYWNoKHdhdGNoLmN1c3RvbWl6ZXJzLCAoY3VzdG9taXplcjoob2JqOmFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgICBjdXN0b21pemVyKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFkYXRhLm9iamVjdC5tZXRhZGF0YS51aWQpIHtcbiAgICAgICAgICAgIGRhdGEub2JqZWN0Lm1ldGFkYXRhLnVpZCA9IGRhdGEub2JqZWN0Lm1ldGFkYXRhLm5hbWVzcGFjZSArICcvJyArIGRhdGEub2JqZWN0Lm1ldGFkYXRhLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdhdGNoLm9iamVjdHNbZGF0YS5vYmplY3QubWV0YWRhdGEudWlkXSA9IGRhdGEub2JqZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFdhdGNoQWN0aW9ucy5ERUxFVEVEOlxuICAgICAgICAgIGRlbGV0ZSB3YXRjaC5vYmplY3RzW2RhdGEub2JqZWN0Lm1ldGFkYXRhLnVpZF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgbG9nLmluZm8oXCJVbmtub3duIGV2ZW50IHR5cGU6IFwiLCBkYXRhLnR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdhdGNoLm9iamVjdEFycmF5Lmxlbmd0aCA9IDA7XG4gICAgICBfLmZvckluKHdhdGNoLm9iamVjdHMsIChvYmplY3QsIHVpZCkgPT4ge1xuICAgICAgICB3YXRjaC5vYmplY3RBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgICB9KTtcbiAgICAgIG9uTWVzc2FnZShkYXRhKTtcbiAgICAgIC8vIGV4ZWN1dGUgYW55IHdhdGNoIGFjdGlvbnNcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgV2F0Y2hBY3Rpb25zLkFEREVEOlxuICAgICAgICAgIF8uZm9yRWFjaCh3YXRjaC5vbkFkZEFjdGlvbnMsIChhY3Rpb246YW55KSA9PiBhY3Rpb24oZGF0YS5vYmplY3QpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBXYXRjaEFjdGlvbnMuTU9ESUZJRUQ6XG4gICAgICAgICAgXy5mb3JFYWNoKHdhdGNoLm9uTW9kaWZpZWRBY3Rpb25zLCAoYWN0aW9uOmFueSkgPT4gYWN0aW9uKGRhdGEub2JqZWN0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgV2F0Y2hBY3Rpb25zLkRFTEVURUQ6XG4gICAgICAgICAgXy5mb3JFYWNoKHdhdGNoLm9uRGVsZXRlZEFjdGlvbnMsIChhY3Rpb246YW55KSA9PiBhY3Rpb24oZGF0YS5vYmplY3QpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIENvcmUuJGFwcGx5KCRzY29wZSk7XG4gICAgfTtcbiAgICB2YXIgb25DbG9zZUludGVybmFsID0gKGV2ZW50KSA9PiB7XG4gICAgICB3YXRjaC5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh3YXRjaC5yZXRyaWVzIDwgMyAmJiB3YXRjaC5jb25uZWN0VGltZSAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHdhdGNoLmNvbm5lY3RUaW1lID4gNTAwMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3YXRjaC5yZXRyaWVzID0gd2F0Y2gucmV0cmllcyArIDE7XG4gICAgICAgICAgbG9nLmRlYnVnKFwid2F0Y2ggXCIsIHR5cGUsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB3YXRjaC5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB3YXRjaC5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaS50b1N0cmluZygpKTtcbiAgICAgICAgICB3cy5vbm9wZW4gPSBvbk9wZW5JbnRlcm5hbDtcbiAgICAgICAgICB3cy5vbm1lc3NhZ2UgPSBvbk1lc3NhZ2VJbnRlcm5hbDtcbiAgICAgICAgICB3cy5vbmNsb3NlID0gb25DbG9zZUludGVybmFsO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgd3MgPSB3YXRjaC5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVyaS50b1N0cmluZygpKTtcbiAgICB3cy5vbm9wZW4gPSBvbk9wZW5JbnRlcm5hbDtcbiAgICB3cy5vbm1lc3NhZ2UgPSBvbk1lc3NhZ2VJbnRlcm5hbDtcbiAgICB3cy5vbmNsb3NlID0gb25DbG9zZUludGVybmFsO1xuICB9XG5cbiAgLypcbiAgICAgX21vZHVsZS5ydW4oWydXYXRjaGVyU2VydmljZScsICckcm9vdFNjb3BlJywgKFdhdGNoZXJTZXJ2aWNlOldhdGNoZXJTZXJ2aWNlLCAkcm9vdFNjb3BlKSA9PiB7XG4gICAgIGxvZy5kZWJ1ZyhcIlN0YXJ0ZWQgd2F0Y2hlciBzZXJ2aWNlXCIpO1xuXG4vL1x0XHRLdWJlcm5ldGVzLmtlZXBQb2xsaW5nTW9kZWwgPSBmYWxzZTtcblxuLy8gc29tZSB1c2FnZSBleGFtcGxlc1xuLy9cdFx0V2F0Y2hlclNlcnZpY2UuYWRkQ3VzdG9taXplcigncG9kcycsIChwb2QpID0+IHtcbi8vXHRcdFx0cG9kLlNvbWVWYWx1ZSA9ICdmb29iYXInO1xuLy9cdFx0fSk7XG4vL1x0XHQkcm9vdFNjb3BlLnBvZHMgPSBXYXRjaGVyU2VydmljZS5nZXRPYmplY3RzKCdwb2RzJyk7XG4vL1x0XHQkcm9vdFNjb3BlLnBvZE1hcCA9IFdhdGNoZXJTZXJ2aWNlLmdldE9iamVjdE1hcCgncG9kcycpO1xuLy9cbi8vXHRcdCRyb290U2NvcGUuJHdhdGNoQ29sbGVjdGlvbigncG9kcycsIChuZXdWYWx1ZSkgPT4ge1xuLy9cdFx0ICBsb2cuZGVidWcoXCJwb2RzIGNoYW5nZWQ6IFwiLCBuZXdWYWx1ZSk7XG4vL1x0XHR9KTtcbi8vXG4vL1x0XHQkcm9vdFNjb3BlLiR3YXRjaCgncG9kTWFwJywgKG5ld1ZhbHVlKSA9PiB7XG4vL1x0XHQgIGxvZy5kZWJ1ZyhcInBvZCBtYXAgY2hhbmdlZDogXCIsIG5ld1ZhbHVlKTtcbi8vXHRcdH0sIHRydWUpO1xufV0pO1xuICAgKi9cblxuX21vZHVsZS5zZXJ2aWNlKCdXYXRjaGVyU2VydmljZScsIFsndXNlckRldGFpbHMnLCAnJHJvb3RTY29wZScsICckdGltZW91dCcsICh1c2VyRGV0YWlscywgJHJvb3RTY29wZSwgJHRpbWVvdXQpID0+IHtcbiAgdmFyIHNlbGYgPSA8YW55PiB7XG4gICAgaGFzV2ViU29ja2V0OiBmYWxzZVxuICB9O1xuXG4gIHRyeSB7XG4gICAgaWYgKCFXZWJTb2NrZXQpICB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgc2VsZi5zZXROYW1lc3BhY2UgPSAobmFtZXNwYWNlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAobmFtZXNwYWNlICE9PSBuYW1lc3BhY2VXYXRjaC5zZWxlY3RlZCkge1xuICAgICAgbG9nLmRlYnVnKFwiTmFtZXNwYWNlIGNoYW5nZWQsIHNodXR0aW5nIGRvd24gZXhpc3Rpbmcgd2F0Y2hlc1wiKTtcbiAgICAgIF8uZm9ySW4od2F0Y2hlcywgKHdhdGNoLCB0eXBlKSA9PiB7XG4gICAgICAgIGlmICh3YXRjaC5zb2NrZXQpIHtcbiAgICAgICAgICB3YXRjaC5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsb2cuZGVidWcoXCJTZXR0aW5nIG5hbWVzcGFjZSB3YXRjaCB0bzogXCIsIG5hbWVzcGFjZSk7XG4gICAgICBuYW1lc3BhY2VXYXRjaC5zZWxlY3RlZCA9IG5hbWVzcGFjZTtcbiAgICAgIGlmICghbmFtZXNwYWNlKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbQ29uc3RhbnRzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2VbQ29uc3RhbnRzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWV0gPSBuYW1lc3BhY2U7XG4gICAgICB9XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIF8uZm9ySW4od2F0Y2hlcywgKHdhdGNoLCB0eXBlKSA9PiB7XG4gICAgICAgICAgLy8gcmVzZXQgdGhlIG9iamVjdCByYXRoZXIgdGhhbiByZS1hc3NpZ25pbmcgdGhlbVxuICAgICAgICAgIC8vIGVuc3VyZXMgdGhhdCBhbnkgd2F0Y2hlcyBpbiBjb250cm9sbGVycyB3b24ndFxuICAgICAgICAgIC8vIGJlIHdhdGNoaW5nIGEgc3RhbGUgb2JqZWN0XG4gICAgICAgICAgaWYgKHdhdGNoLnZhbGlkKCkpIHtcbiAgICAgICAgICAgIHdhdGNoLnVybCA9IFVybEhlbHBlcnMuam9pbih3YXRjaC5wcmVmaXgoKSwgV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTLCBuYW1lc3BhY2UsIHR5cGUpO1xuICAgICAgICAgICAgd2F0Y2guY29ubmVjdFRpbWUgPSA8TnVtYmVyPiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBfLmZvckVhY2goXy5rZXlzKHdhdGNoLm9iamVjdHMpLCAodWlkKSA9PiB7XG4gICAgICAgICAgICAgIF8uZm9yRWFjaCh3YXRjaC5vbkRlbGV0ZWRBY3Rpb25zLCAoYWN0aW9uOmFueSkgPT4gYWN0aW9uKHdhdGNoLm9iamVjdHNbdWlkXSkpO1xuICAgICAgICAgICAgICBkZWxldGUgd2F0Y2gub2JqZWN0c1t1aWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3YXRjaC5vYmplY3RBcnJheS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgd2F0Y2guc29ja2V0ID0gPFdlYlNvY2tldD4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF8uZm9ySW4od2F0Y2hlcywgKHdhdGNoLCB0eXBlKSA9PiB7XG4gICAgICAgICAgaWYgKHdhdGNoLnZhbGlkKCkpIHtcbiAgICAgICAgICAgIGNyZWF0ZVdhdGNoKHR5cGUsIHdhdGNoLCB1c2VyRGV0YWlscywgJHJvb3RTY29wZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdChcIldhdGNoZXJOYW1lc3BhY2VDaGFuZ2VkXCIsIG5hbWVzcGFjZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlV2F0Y2goV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTLCBuYW1lc3BhY2VXYXRjaCwgdXNlckRldGFpbHMsICRyb290U2NvcGUsIChldmVudCkgPT4ge1xuICAgIC8vIGxvZy5kZWJ1ZyhcIkdvdCBldmVudDogXCIsIGV2ZW50KTtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgV2F0Y2hBY3Rpb25zLkFEREVEOlxuICAgICAgY2FzZSBXYXRjaEFjdGlvbnMuTU9ESUZJRUQ6XG4gICAgICAgIGlmICghbmFtZXNwYWNlV2F0Y2guc2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxmLnNldE5hbWVzcGFjZShldmVudC5vYmplY3QubWV0YWRhdGEubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdhdGNoQWN0aW9ucy5ERUxFVEVEOlxuICAgICAgICB2YXIgbmV4dCA9IDxhbnk+IF8uZmlyc3QobmFtZXNwYWNlV2F0Y2gub2JqZWN0QXJyYXkpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIHNlbGYuc2V0TmFtZXNwYWNlKG5leHQubWV0YWRhdGEubmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zZXROYW1lc3BhY2UodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxvZy5kZWJ1ZyhcIlVua25vd24gbmFtZXNwYWNlIGV2ZW50IHR5cGU6IFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSwgKGV2ZW50KSA9PiB7XG4gICAgbG9nLmRlYnVnKFwiTmFtZXNwYWNlIHdhdGNoIGNsb3NlZFwiKTtcbiAgICBzZWxmLnNldE5hbWVzcGFjZSh1bmRlZmluZWQpO1xuICB9KTtcblxuICBzZWxmLnNldE5hbWVzcGFjZShsb2NhbFN0b3JhZ2VbQ29uc3RhbnRzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWV0gfHwgZGVmYXVsdE5hbWVzcGFjZSk7XG5cbiAgc2VsZi5oYXNXZWJTb2NrZXQgPSB0cnVlO1xuXG4gIHNlbGYuZ2V0TmFtZXNwYWNlID0gKCkgPT4gbmFtZXNwYWNlV2F0Y2guc2VsZWN0ZWQ7XG5cbiAgc2VsZi5hZGRDdXN0b21pemVyID0gKHR5cGU6IHN0cmluZywgY3VzdG9taXplcjogKG9iajphbnkpID0+IHZvaWQpID0+IHtcbiAgICBpZiAodHlwZSBpbiB3YXRjaGVzKSB7XG4gICAgICB3YXRjaGVzW3R5cGVdLmN1c3RvbWl6ZXJzLnB1c2goY3VzdG9taXplcik7XG4gICAgICBfLmZvckVhY2god2F0Y2hlc1t0eXBlXS5vYmplY3RBcnJheSwgKG9iaikgPT4gY3VzdG9taXplcihvYmopKTtcbiAgICB9XG4gIH1cblxuICBzZWxmLmdldFR5cGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBrOHNUeXBlcy5jb25jYXQoW1dhdGNoVHlwZXMuTkFNRVNQQUNFU10pLmNvbmNhdChvc1R5cGVzKTtcbiAgfVxuXG4gIHNlbGYuZ2V0T2JqZWN0TWFwID0gKHR5cGU6IHN0cmluZykgPT4ge1xuICAgIGlmICh0eXBlID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBuYW1lc3BhY2VXYXRjaC5vYmplY3RzO1xuICAgIH1cbiAgICBpZiAodHlwZSBpbiB3YXRjaGVzKSB7XG4gICAgICByZXR1cm4gd2F0Y2hlc1t0eXBlXS5vYmplY3RzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNlbGYuZ2V0T2JqZWN0cyA9ICh0eXBlOnN0cmluZykgPT4ge1xuICAgIGlmICh0eXBlID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBuYW1lc3BhY2VXYXRjaC5vYmplY3RBcnJheTtcbiAgICB9XG4gICAgaWYgKHR5cGUgaW4gd2F0Y2hlcykge1xuICAgICAgcmV0dXJuIHdhdGNoZXNbdHlwZV0ub2JqZWN0QXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc2VsZi5saXN0ZW5lcnMgPSA8QXJyYXk8KE9iamVjdE1hcCkgPT4gdm9pZD4+IFtdO1xuXG4gIHZhciB1cGRhdGVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBsb2cuZGVidWcoXCJPYmplY3RzIGNoYW5nZWQsIGZpcmluZyBsaXN0ZW5lcnNcIik7XG4gICAgdmFyIG9iamVjdHMgPSA8T2JqZWN0TWFwPnt9O1xuICAgIF8uZm9yRWFjaChzZWxmLmdldFR5cGVzKCksICh0eXBlOnN0cmluZykgPT4ge1xuICAgICAgb2JqZWN0c1t0eXBlXSA9IHNlbGYuZ2V0T2JqZWN0cyh0eXBlKTtcbiAgICB9KTtcbiAgICBfLmZvckVhY2goc2VsZi5saXN0ZW5lcnMsIChsaXN0ZW5lcjooT2JqZWN0TWFwKSA9PiB2b2lkKSA9PiB7XG4gICAgICBsaXN0ZW5lcihvYmplY3RzKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZGVib3VuY2VkVXBkYXRlID0gXy5kZWJvdW5jZSh1cGRhdGVGdW5jdGlvbiwgNTAwLCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gIC8vIGxpc3RlbmVyIGdldHMgbm90aWZpZWQgYWZ0ZXIgYSBidW5jaCBvZiBjaGFuZ2VzIGhhdmUgb2NjdXJyZWRcbiAgc2VsZi5yZWdpc3Rlckxpc3RlbmVyID0gKGZuOihvYmplY3RzOk9iamVjdE1hcCkgPT4gdm9pZCkgPT4ge1xuICAgIHNlbGYubGlzdGVuZXJzLnB1c2goZm4pO1xuICAgIF8uZm9yRWFjaChzZWxmLmdldFR5cGVzKCksICh0eXBlKSA9PiB7XG4gICAgICBzZWxmLmFkZEFjdGlvbih0eXBlLCBXYXRjaEFjdGlvbnMuQU5ZLCBkZWJvdW5jZWRVcGRhdGUpXG4gICAgfSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byB3YXRjaCBpbmRpdmlkdWFsIGFjdGlvbnMgb24gdGhlIGs4cyBvYmplY3RzXG4gIHNlbGYuYWRkQWN0aW9uID0gKHR5cGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGZuOiAob2JqOmFueSkgPT4gdm9pZCkgPT4ge1xuICAgIHZhciB3YXRjaCA9IDxhbnk+IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZSA9PT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTKSB7XG4gICAgICB3YXRjaCA9IG5hbWVzcGFjZVdhdGNoO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXRjaCA9IHdhdGNoZXNbdHlwZV07XG4gICAgfVxuICAgIGlmICh3YXRjaCkge1xuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBXYXRjaEFjdGlvbnMuQU5ZOlxuICAgICAgICAgIF8uZm9yRWFjaCh3YXRjaC5vYmplY3RBcnJheSwgKG9iaikgPT4gZm4ob2JqKSk7XG4gICAgICAgICAgd2F0Y2gub25BZGRBY3Rpb25zLnB1c2goZm4pO1xuICAgICAgICAgIHdhdGNoLm9uRGVsZXRlZEFjdGlvbnMucHVzaChmbik7XG4gICAgICAgICAgd2F0Y2gub25Nb2RpZmllZEFjdGlvbnMucHVzaChmbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgV2F0Y2hBY3Rpb25zLkFEREVEOlxuICAgICAgICAgIF8uZm9yRWFjaCh3YXRjaC5vYmplY3RBcnJheSwgKG9iaikgPT4gZm4ob2JqKSk7XG4gICAgICAgICAgd2F0Y2gub25BZGRBY3Rpb25zLnB1c2goZm4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFdhdGNoQWN0aW9ucy5NT0RJRklFRDpcbiAgICAgICAgICB3YXRjaC5vbk1vZGlmaWVkQWN0aW9ucy5wdXNoKGZuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBXYXRjaEFjdGlvbnMuREVMRVRFRDpcbiAgICAgICAgICB3YXRjaC5vbkRlbGV0ZWRBY3Rpb25zLnB1c2goZm4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkF0dGVtcHRpbmcgdG8gYWRkIHVua25vd24gYWN0aW9uOiBcIiwgYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=