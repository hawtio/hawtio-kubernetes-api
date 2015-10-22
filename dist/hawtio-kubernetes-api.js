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
        return KubernetesAPI.K8S_PREFIX;
    }
    KubernetesAPI.apiPrefix = apiPrefix;
    function osApiPrefix() {
        return KubernetesAPI.OS_PREFIX;
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
    function apiForKind(kind) {
        if (kind === KubernetesAPI.WatchTypes.NAMESPACES) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.any(KubernetesAPI.NamespacedTypes.k8sTypes, function (t) { return t === kind; })) {
            return KubernetesAPI.K8S_PREFIX;
        }
        if (_.any(KubernetesAPI.NamespacedTypes.osTypes, function (t) { return t === kind; })) {
            return KubernetesAPI.OS_PREFIX;
        }
        return null;
    }
    KubernetesAPI.apiForKind = apiForKind;
    function apiVersionForKind(kind) {
        var api = apiForKind(kind);
        switch (api) {
            case KubernetesAPI.K8S_API_VERSION:
                return kubernetesApiPrefix();
                break;
            case KubernetesAPI.OS_API_VERSION:
                return openshiftApiPrefix();
                break;
            default:
                return null;
        }
    }
    KubernetesAPI.apiVersionForKind = apiVersionForKind;
    function prefixForKind(kind) {
        var api = apiForKind(kind);
        switch (api) {
            case KubernetesAPI.K8S_PREFIX:
                return kubernetesApiPrefix();
                break;
            case KubernetesAPI.OS_PREFIX:
                return openshiftApiPrefix();
                break;
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
        return null;
    }
    KubernetesAPI.kubernetesProxyUrlForService = kubernetesProxyUrlForService;
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
        depends: 'KubernetesApiInit',
        task: function (next) {
            KubernetesAPI.K8S_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'k8s', 'prefix']) || KubernetesAPI.K8S_PREFIX, '/');
            KubernetesAPI.OS_PREFIX = Core.trimLeading(Core.pathGet(KubernetesAPI.osConfig, ['api', 'openshift', 'prefix']) || KubernetesAPI.OS_PREFIX, '/');
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
                if ((!KubernetesAPI.masterUrl || KubernetesAPI.masterUrl === "/") && (!master || master === "/")) {
                    var href = location.href;
                    if (href) {
                        master = new URI(href).query("").path("").toString();
                    }
                }
                if (master) {
                    KubernetesAPI.masterUrl = master;
                }
                next();
            })
                .fail(function (response) {
                KubernetesAPI.log.debug("Error fetching Kubernetes config: ", response);
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
                            item.kind = _.trimRight(_.capitalize(_this.handler.collection.kind), 's');
                            item.apiVersion = KubernetesAPI.apiVersionForKind(_this.handler.collection.kind);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyIsImt1YmVybmV0ZXMtYXBpL3RzL3NlcnZpY2VSZWdpc3RyeS50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FTkRQT0lOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuRVZFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFQ1JFVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlkiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BRERFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLk1PRElGSUVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCIsIkt1YmVybmV0ZXNBUEkuY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNOYW1lc3BhY2VQYXRoIiwiS3ViZXJuZXRlc0FQSS5hcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm9zQXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5tYXN0ZXJBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkuYXBpRm9yS2luZCIsIkt1YmVybmV0ZXNBUEkuYXBpVmVyc2lvbkZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLnByZWZpeEZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLmt1YmVybmV0ZXNBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLm9wZW5zaGlmdEFwaVVybCIsIkt1YmVybmV0ZXNBUEkuZ2V0RXJyb3JPYmplY3QiLCJLdWJlcm5ldGVzQVBJLndzU2NoZW1lIiwiS3ViZXJuZXRlc0FQSS53c1VybCIsIkt1YmVybmV0ZXNBUEkuZXF1YWxzIiwiS3ViZXJuZXRlc0FQSS5nZXRVSUQiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuZ2V0TGFiZWxzIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRLaW5kIiwiS3ViZXJuZXRlc0FQSS5nZXRTZWxlY3RvciIsIkt1YmVybmV0ZXNBUEkuZ2V0SG9zdCIsIkt1YmVybmV0ZXNBUEkuZ2V0U3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRQb3J0cyIsIkt1YmVybmV0ZXNBUEkuZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCJLdWJlcm5ldGVzQVBJLmxhYmVsc1RvU3RyaW5nIiwiS3ViZXJuZXRlc0FQSS5zZXJ2aWNlTGlua1VybCIsIkt1YmVybmV0ZXNBUEkua3ViZXJuZXRlc1Byb3h5VXJsRm9yU2VydmljZSIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLmdldFNlcnZpY2VSZWdpc3RyeSIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLmJlZm9yZVNlbmQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmFkZGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm1vZGlmaWVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmRlbGV0ZWQiLCJLdWJlcm5ldGVzQVBJLmNvbXBhcmUiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZG9HZXQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdGFydCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLnN0b3AiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmxpc3QiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2V0SGFuZGxlcnMiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5zZW5kIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25tZXNzYWdlIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25vcGVuIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIub25jbG9zZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uZXJyb3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5jb25uZWN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLndzVVJMIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VVJMIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5uYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmtpbmQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5yZXN0VXJsRm9yIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwudW53YXRjaCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucHV0IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5kZWxldGUiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVmQ291bnQiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLmFkZFJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UucmVtb3ZlUmVmIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5jb2xsZWN0aW9uIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kaXNwb3NhYmxlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5kZXN0cm95IiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbCIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNyZWF0ZSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZSIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuU2VydmljZVJlZ2lzdHJ5U2VydmljZS5oYXNTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmZpbmRTZXJ2aWNlIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLnNlcnZpY2VMaW5rIiwiS3ViZXJuZXRlc0FQSS5TZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlLmdldE1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFF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LENBQUNBLEVBdEVNLGFBQWEsS0FBYixhQUFhLFFBc0VuQiIsImZpbGUiOiJjb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBDb3B5cmlnaHQgMjAxNC0yMDE1IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzXG4vLy8gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyBhcyBpbmRpY2F0ZWQgYnkgdGhlIEBhdXRob3IgdGFncy5cbi8vL1xuLy8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8vXG4vLy8gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vL1xuLy8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGlicy9oYXd0aW8tdXRpbGl0aWVzL2RlZnMuZC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby1vYXV0aC9kZWZzLmQudHNcIi8+XG4iLCIvL2RlZnMgZm9yIHRoaXJkLXBhcnR5IGV2ZW50aW5nIGxpYnJhcnlcblxuaW50ZXJmYWNlIFNtb2tlU2lnbmFscyB7XG4gIGNvbnZlcnQob2JqOmFueSwgaGFuZGxlcnM/OmFueSk7XG59O1xuXG5pbnRlcmZhY2UgRXZlbnRFbmFibGVkIHtcbiAgb24oZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9uY2UoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIG9mZihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgZW1pdChldmVudE5hbWU6c3RyaW5nLCAuLi5hcmdzOmFueVtdKTtcbn07XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgY2xhc3MgY29uc3RzIHtcbiAgICBnZXQgTkFNRVNQQUNFX1NUT1JBR0VfS0VZKCk6c3RyaW5nIHsgcmV0dXJuIFwiazhzU2VsZWN0ZWROYW1lc3BhY2VcIjsgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBDb25zdGFudHMgPSBuZXcgY29uc3RzKCk7XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9uIHtcbiAgICBwcm90bz86c3RyaW5nO1xuICAgIGhvc3RQb3J0OnN0cmluZztcbiAgICBwcmVmaXg6c3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgaW50ZXJmYWNlIEFwaUxvY2F0aW9ucyB7XG4gICAgb3BlbnNoaWZ0PzogQXBpTG9jYXRpb247XG4gICAgazhzPzogQXBpTG9jYXRpb247XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNDb25maWcge1xuICAgIG1hc3Rlcl91cmk/OiBzdHJpbmc7XG4gICAgYXBpPzogQXBpTG9jYXRpb25zO1xuICAgIG9wZW5zaGlmdD86IE9wZW5TaGlmdE9BdXRoQ29uZmlnO1xuICAgIGdvb2dsZT86IEdvb2dsZU9BdXRoQ29uZmlnO1xuICAgIGtleWNsb2FrPzogS2V5Q2xvYWtBdXRoQ29uZmlnO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuU2hpZnRPQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlT0F1dGhDb25maWcge1xuICAgIGF1dGhlbnRpY2F0aW9uVVJJOnN0cmluZztcbiAgICBhdXRob3JpemF0aW9uVVJJOnN0cmluZztcbiAgICBjbGllbnRJZDpzdHJpbmc7XG4gICAgY2xpZW50U2VjcmV0OnN0cmluZztcbiAgICByZWRpcmVjdFVSSTpzdHJpbmc7XG4gICAgc2NvcGU6c3RyaW5nO1xuICAgIHRva2VuVVJJPzpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEtleUNsb2FrQXV0aENvbmZpZyB7XG4gICAgb2F1dGhfYXV0aG9yaXplX3VyaTpzdHJpbmc7XG4gICAgb2F1dGhfY2xpZW50X2lkOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc1N0YXRlIHtcbiAgICBuYW1lc3BhY2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHNlbGVjdGVkTmFtZXNwYWNlOiBzdHJpbmc7XG4gIH1cblxuXHRleHBvcnQgY2xhc3MgV2F0Y2hUeXBlcyB7XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgRU5EUE9JTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZW5kcG9pbnRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFVkVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJldmVudHNcIjsgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE5BTUVTUEFDRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJuYW1lc3BhY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBOT0RFUygpOnN0cmluZyB7IHJldHVybiBcIm5vZGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwicGVyc2lzdGVudHZvbHVtZWNsYWltc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUE9EUygpOnN0cmluZyB7IHJldHVybiBcInBvZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFJFUExJQ0FUSU9OX0NPTlRST0xMRVJTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVwbGljYXRpb25jb250cm9sbGVyc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVTT1VSQ0VfUVVPVEFTKCk6c3RyaW5nIHsgcmV0dXJuIFwicmVzb3VyY2VxdW90YXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE9BVVRIX0NMSUVOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJvYXV0aGNsaWVudHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFQ1JFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZWNyZXRzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFUygpOnN0cmluZyB7IHJldHVybiBcInNlcnZpY2VzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBTRVJWSUNFX0FDQ09VTlRTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZWFjY291bnRzXCI7IH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFRFTVBMQVRFUygpOnN0cmluZyB7IHJldHVybiBcInRlbXBsYXRlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9VVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm91dGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiYnVpbGRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBCVUlMRFMoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFUExPWU1FTlRfQ09ORklHUygpOnN0cmluZyB7IHJldHVybiBcImRlcGxveW1lbnRjb25maWdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBJTUFHRV9TVFJFQU1TKCk6c3RyaW5nIHsgcmV0dXJuIFwiaW1hZ2VzdHJlYW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ0lFUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljaWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0xJQ1lfQklORElOR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJwb2xpY3liaW5kaW5nc1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgUFJPSkVDVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJwcm9qZWN0c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInJvbGViaW5kaW5nc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUk9MRVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb2xlc1wiOyB9XG5cdH1cblxuICBleHBvcnQgY2xhc3MgTmFtZXNwYWNlZFR5cGVzIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBrOHNUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5FTkRQT0lOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuRVZFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLk5PREVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUE9EUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVBMSUNBVElPTl9DT05UUk9MTEVSUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5SRVNPVVJDRV9RVU9UQVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlNFQ1JFVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UU1xuICAgICAgXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3NUeXBlcygpOkFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgV2F0Y2hUeXBlcy5URU1QTEFURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST1VURVMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERTLFxuICAgICAgICBXYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLklNQUdFX1NUUkVBTVMsXG4gICAgICAgIFdhdGNoVHlwZXMuT0FVVEhfQ0xJRU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ0lFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0xJQ1lfQklORElOR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuUFJPSkVDVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuUk9MRV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFU1xuICAgICAgXTtcbiAgICB9XG4gIH1cblx0XG5cdGV4cG9ydCBjbGFzcyBXYXRjaEFjdGlvbnMge1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFEREVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiQURERURcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE1PRElGSUVEKCk6c3RyaW5nIHsgcmV0dXJuIFwiTU9ESUZJRURcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH1cblx0fVxuXHRcblx0ZXhwb3J0IGludGVyZmFjZSBPYmplY3RNYXAge1xuXHRcdFt1aWQ6c3RyaW5nXTogYW55O1x0XHRcblx0fVxuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uIHtcbiAgICB3c1VSTDpzdHJpbmc7XG4gICAgcmVzdFVSTDpzdHJpbmc7XG4gICAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gICAga2luZDogc3RyaW5nO1xuICAgIGNvbm5lY3RlZDogYm9vbGVhbjtcbiAgICBjb25uZWN0KCk7XG4gICAgZ2V0KGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGdldEtleSgpOnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTQ2xpZW50RmFjdG9yeSB7XG4gICAgY3JlYXRlKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOkNvbGxlY3Rpb247XG4gICAgZGVzdHJveShjbGllbnQ6Q29sbGVjdGlvbiwgLi4uaGFuZGxlczpBcnJheTwoZGF0YTphbnlbXSkgPT4gdm9pZD4pOnZvaWQ7XG4gIH1cblxuXHRcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSW50ZXJmYWNlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cblxuZGVjbGFyZSB2YXIgc21va2VzaWduYWxzO1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBwbHVnaW5OYW1lID0gJ0t1YmVybmV0ZXNBUEknO1xuICBleHBvcnQgdmFyIHBsdWdpblBhdGggPSAncGx1Z2lucy9rdWJlcm5ldGVzLWFwaS8nO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IHBsdWdpblBhdGggKyAnaHRtbC8nO1xuICBleHBvcnQgdmFyIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQocGx1Z2luTmFtZSk7XG5cbiAgZXhwb3J0IHZhciBrZWVwUG9sbGluZ01vZGVsID0gdHJ1ZTtcblxuICBleHBvcnQgdmFyIGRlZmF1bHRJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2t1YmVybmV0ZXMuc3ZnXCIpO1xuICBleHBvcnQgdmFyIGhvc3RJY29uVXJsID0gQ29yZS51cmwoXCIvaW1nL2hvc3Quc3ZnXCIpO1xuXG4gIC8vIHRoaXMgZ2V0cyBzZXQgYXMgYSBwcmUtYm9vdHN0cmFwIHRhc2tcbiAgZXhwb3J0IHZhciBvc0NvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gdW5kZWZpbmVkO1xuICBleHBvcnQgdmFyIG1hc3RlclVybCA9IFwiXCI7XG5cbiAgZXhwb3J0IHZhciBLOFNfUFJFRklYID0gJ2FwaSc7XG4gIGV4cG9ydCB2YXIgT1NfUFJFRklYID0gJ29hcGknO1xuXG4gIGV4cG9ydCB2YXIgSzhTX0FQSV9WRVJTSU9OID0gJ3YxJztcbiAgZXhwb3J0IHZhciBPU19BUElfVkVSU0lPTiA9ICd2MSc7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0QXBpVmVyc2lvbiA9IEs4U19BUElfVkVSU0lPTjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0T1NBcGlWZXJzaW9uID0gT1NfQVBJX1ZFUlNJT047XG5cbiAgZXhwb3J0IHZhciBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IgPSBcIixcIjtcbiAgZXhwb3J0IHZhciBkZWZhdWx0TmFtZXNwYWNlID0gXCJkZWZhdWx0XCI7XG4gIGV4cG9ydCB2YXIgYXBwU3VmZml4ID0gXCIuYXBwXCI7XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBrdWJlcm5ldGVzIHNlbGVjdGVkIG5hbWVzcGFjZSBvciB0aGUgZGVmYXVsdCBvbmVcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjdXJyZW50S3ViZXJuZXRlc05hbWVzcGFjZSgpIHtcbiAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgdmFyIEt1YmVybmV0ZXNTdGF0ZSA9IGluamVjdG9yLmdldChcIkt1YmVybmV0ZXNTdGF0ZVwiKSB8fCB7fTtcbiAgICAgIHJldHVybiBLdWJlcm5ldGVzU3RhdGUuc2VsZWN0ZWROYW1lc3BhY2UgfHwgZGVmYXVsdE5hbWVzcGFjZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHROYW1lc3BhY2U7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc05hbWVzcGFjZVBhdGgoKSB7XG4gICAgdmFyIG5zID0gY3VycmVudEt1YmVybmV0ZXNOYW1lc3BhY2UoKTtcbiAgICBpZiAobnMpIHtcbiAgICAgIHJldHVybiBcIi9uYW1lc3BhY2VzL1wiICsgbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICAvKlxuICAgICAgVE9ETyAtIG1heSBub3QgaGF2ZSBhIGN1cnJlbnRseSBzZWxlY3RlZCBuYW1lc3BhY2VcbiAgICBpZiAoIWlzT3BlblNoaWZ0KSB7XG4gICAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTiwgXCJwcm94eVwiLCBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpLCBcInNlcnZpY2VzL3RlbXBsYXRlc1wiLCBhbnN3ZXIpO1xuICAgIH1cbiAgICAqL1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKGFwaVByZWZpeCgpLCBPU19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpUHJlZml4KCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4ob3NBcGlQcmVmaXgoKSwgSzhTX0FQSV9WRVJTSU9OKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlGb3JLaW5kKGtpbmQ6c3RyaW5nKSB7XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUykge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMuazhzVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gICAgfVxuICAgIGlmIChfLmFueShOYW1lc3BhY2VkVHlwZXMub3NUeXBlcywgKHQpID0+IHQgPT09IGtpbmQpKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT1NfQVBJX1ZFUlNJT046XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcHJlZml4Rm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBrdWJlcm5ldGVzQXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3BlbnNoaWZ0QXBpVXJsKCkge1xuICAgIHJldHVybiBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIG9wZW5zaGlmdEFwaVByZWZpeCgpKTtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3RzIHRoZSBrOHMvb3BlbnNoaWZ0IGVycm9yIHJlc3BvbnNlIGlmIHByZXNlbnRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvck9iamVjdChqcVhIUikge1xuICAgIHZhciBhbnN3ZXI6YW55ID0ganFYSFIucmVzcG9uc2VUZXh0O1xuICAgIHRyeSB7XG4gICAgICBhbnN3ZXIgPSBhbmd1bGFyLmZyb21Kc29uKGFuc3dlcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBub3RoaW5nIHRvIGRvLi4uXG4gICAgfVxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIGVpdGhlciBzZWN1cmUvaW5zZWN1cmUgd2Vic29ja2V0IHByb3RvY29sIGJhc2VkIG9uIHRoZSBtYXN0ZXIgVVJJIHByb3RvY29sXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NTY2hlbWUodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IG5ldyBVUkkodXJsKS5wcm90b2NvbCgpIHx8ICdodHRwJztcbiAgICBpZiAoXy5zdGFydHNXaXRoKHByb3RvY29sLCAnaHR0cHMnKSkge1xuICAgICAgcmV0dXJuICd3c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3dzJztcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB3ZWJzb2NrZXQgVVJMIGZvciB0aGUgc3VwcGxpZWQgVVJMXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gd3NVcmwodXJsOnN0cmluZykge1xuICAgIHZhciBwcm90b2NvbCA9IHdzU2NoZW1lKHVybCk7XG4gICAgcmV0dXJuIG5ldyBVUkkodXJsKS5zY2hlbWUocHJvdG9jb2wpO1xuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gazhzIG9iamVjdHMgYmFzZWQgb24gdGhlaXIgVUlEXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KTpib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0VUlEKGxlZnQpID09PSBnZXRVSUQocmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRVSUQoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnbWV0YWRhdGEnLCAndWlkJ10pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVzcGFjZShlbnRpdHkpIHtcbiAgICB2YXIgYW5zd2VyID0gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lc3BhY2VcIl0pO1xuICAgIC8vIHNvbWUgb2JqZWN0cyBhcmVuJ3QgbmFtZXNwYWNlZCwgc28gdGhpcyBjYW4gcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibGFiZWxzXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDoge307XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcIm5hbWVcIikgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJpZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRLaW5kKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImtpbmRcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwia2luZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RvcihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0KHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwicGhhc2VcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRzKHNlcnZpY2UpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRpb25UaW1lc3RhbXAoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYWJlbHMgdGV4dCBzdHJpbmcgdXNpbmcgdGhlIDxjb2RlPmtleTE9dmFsdWUxLGtleTI9dmFsdWUyLC4uLi48L2NvZGU+IGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvU3RyaW5nKGxhYmVscywgc2VwZXJhdG9yVGV4dCA9IGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvcikge1xuICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChsYWJlbHMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gYW5zd2VyID8gc2VwZXJhdG9yVGV4dCA6IFwiXCI7XG4gICAgICBhbnN3ZXIgKz0gc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlcnZpY2UgbGluayBVUkwgZm9yIGVpdGhlciB0aGUgc2VydmljZSBuYW1lIG9yIHRoZSBzZXJ2aWNlIG9iamVjdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VMaW5rVXJsKHNlcnZpY2UpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChzZXJ2aWNlKSkge1xuICAgICAgdmFyIHBvcnRhbElQID0gc2VydmljZS4kaG9zdDtcbiAgICAgIC8vIGxldHMgYXNzdW1lIG5vIGN1c3RvbSBwb3J0IGZvciBub3cgZm9yIGV4dGVybmFsIHJvdXRlc1xuICAgICAgdmFyIHBvcnQgPSBudWxsO1xuICAgICAgdmFyIHByb3RvY29sID0gXCJodHRwOi8vXCI7XG4gICAgICB2YXIgc3BlYyA9IHNlcnZpY2Uuc3BlYztcbiAgICAgIGlmIChzcGVjKSB7XG4gICAgICAgIGlmICghcG9ydGFsSVApIHtcbiAgICAgICAgICBwb3J0YWxJUCA9IHNwZWMucG9ydGFsSVA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc0h0dHBzID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNIdHRwID0gZmFsc2U7XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChzcGVjLnBvcnRzLCAocG9ydFNwZWMpID0+IHtcbiAgICAgICAgICB2YXIgcCA9IHBvcnRTcGVjLnBvcnQ7XG4gICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIGlmIChwID09PSA0NDMpIHtcbiAgICAgICAgICAgICAgaGFzSHR0cHMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwID09PSA4MCkge1xuICAgICAgICAgICAgICBoYXNIdHRwID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgICBwb3J0ID0gcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBvcnRhbElQKSB7XG4gICAgICAgIGlmIChoYXNIdHRwcykge1xuICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBwb3J0YWxJUDtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNIdHRwKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaHR0cDovL1wiICsgcG9ydGFsSVA7XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydCkge1xuICAgICAgICAgIHJldHVybiBwcm90b2NvbCArIHBvcnRhbElQICsgXCI6XCIgKyBwb3J0ICsgXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHByb3RvY29sICsgcG9ydGFsSVA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHZhciBzZXJ2aWNlSWQgPSBzZXJ2aWNlLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHZhciBTZXJ2aWNlUmVnaXN0cnkgPSBnZXRTZXJ2aWNlUmVnaXN0cnkoKTtcbiAgICAgICAgaWYgKFNlcnZpY2VSZWdpc3RyeSkge1xuICAgICAgICAgIHJldHVybiBTZXJ2aWNlUmVnaXN0cnkuc2VydmljZUxpbmsoc2VydmljZUlkKSB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNQcm94eVVybEZvclNlcnZpY2UoS3ViZXJuZXRlc0FwaVVSTCwgc2VydmljZSwgcGF0aCA9IG51bGwpIHtcbiAgICB2YXIgcGF0aFNlZ21lbnQgPSBcIlwiO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXRoU2VnbWVudCA9IFwiL1wiICsgQ29yZS50cmltTGVhZGluZyhwYXRoLCBcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhTZWdtZW50ID0gXCIvXCI7XG4gICAgfVxuICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2Uoc2VydmljZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gICAgLypcbiAgICBpZiAoaXNWMWJldGExT3IyKCkpIHtcbiAgICAgIHZhciBwb3N0Zml4ID0gXCI/bmFtZXNwYWNlPVwiICsgbmFtZXNwYWNlO1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5XCIgKyBrdWJlcm5ldGVzTmFtZXNwYWNlUGF0aCgpICsgXCIvc2VydmljZXMvXCIgKyBnZXROYW1lKHNlcnZpY2UpICsgcGF0aFNlZ21lbnQgKyBwb3N0Zml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihLdWJlcm5ldGVzQXBpVVJMLCBcIi9hcGkvXCIgKyBkZWZhdWx0QXBpVmVyc2lvbiArIFwiL3Byb3h5L25hbWVzcGFjZXMvXCIgKyBuYW1lc3BhY2UgKyBcIi9zZXJ2aWNlcy9cIiArIGdldE5hbWUoc2VydmljZSkgKyBwYXRoU2VnbWVudCk7XG4gICAgfVxuICAgICovXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcG9kIGlzIHJ1bm5pbmdcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBpc1J1bm5pbmcocG9kQ3VycmVudFN0YXRlKSB7XG4gICAgdmFyIHN0YXR1cyA9IChwb2RDdXJyZW50U3RhdGUgfHwge30pLnBoYXNlO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHZhciBsb3dlciA9IHN0YXR1cy50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIGxvd2VyLnN0YXJ0c1dpdGgoXCJydW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBsYWJlbHMgb2JqZWN0IGhhcyBhbGwgb2YgdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIHRoZSBzZWxlY3RvclxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yTWF0Y2hlcyhzZWxlY3RvciwgbGFiZWxzKSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3QobGFiZWxzKSkge1xuICAgICAgdmFyIGFuc3dlciA9IHRydWU7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHNlbGVjdG9yLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAoYW5zd2VyICYmIGxhYmVsc1trZXldICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGFuc3dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbnN3ZXIgJiYgY291bnQgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNlcnZpY2UgcmVnaXN0cnlcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2aWNlUmVnaXN0cnkoKSB7XG4gICAgdmFyIGluamVjdG9yID0gSGF3dGlvQ29yZS5pbmplY3RvcjtcbiAgICByZXR1cm4gaW5qZWN0b3IgPyBpbmplY3Rvci5nZXQoXCJTZXJ2aWNlUmVnaXN0cnlcIikgOiBudWxsO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBvZFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gZ2V0U3RhdHVzKHBvZCk7XG4gIH1cblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuZGVjbGFyZSB2YXIgT1NPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBHb29nbGVPQXV0aENvbmZpZzphbnk7XG5kZWNsYXJlIHZhciBLZXljbG9ha0NvbmZpZzphbnk7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIF9tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShwbHVnaW5OYW1lLCBbXSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlDb25maWcnLFxuICAgIGRlcGVuZHM6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgIEs4U19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnazhzJywgJ3ByZWZpeCddKSB8fCBLOFNfUFJFRklYLCAnLycpO1xuICAgICAgT1NfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ29wZW5zaGlmdCcsICdwcmVmaXgnXSkgfHwgT1NfUFJFRklYLCAnLycpO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLnJlZ2lzdGVyUHJlQm9vdHN0cmFwVGFzayh7XG4gICAgbmFtZTogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgJC5nZXRTY3JpcHQoJ29zY29uc29sZS9jb25maWcuanMnKVxuICAgICAgICAuZG9uZSgoc2NyaXB0LCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGNvbmZpZzpLdWJlcm5ldGVzQ29uZmlnID0gS3ViZXJuZXRlc0FQSS5vc0NvbmZpZyA9IHdpbmRvd1snT1BFTlNISUZUX0NPTkZJRyddO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZldGNoZWQgT0F1dGggY29uZmlnOiBcIiwgY29uZmlnKTtcbiAgICAgICAgICB2YXIgbWFzdGVyOnN0cmluZyA9IGNvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgIGlmICghbWFzdGVyICYmIGNvbmZpZy5hcGkgJiYgY29uZmlnLmFwaS5rOHMpIHtcbiAgICAgICAgICAgIHZhciBtYXN0ZXJVcmkgPSBuZXcgVVJJKCkuaG9zdChjb25maWcuYXBpLms4cy5ob3N0UG9ydCkucGF0aChcIlwiKS5xdWVyeShcIlwiKTtcbiAgICAgICAgICAgIGlmIChjb25maWcuYXBpLms4cy5wcm90bykge1xuICAgICAgICAgICAgICBtYXN0ZXJVcmkucHJvdG9jb2woY29uZmlnLmFwaS5rOHMucHJvdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFzdGVyID0gbWFzdGVyVXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgT1NPQXV0aENvbmZpZyA9IGNvbmZpZy5vcGVuc2hpZnQ7XG4gICAgICAgICAgR29vZ2xlT0F1dGhDb25maWcgPSBjb25maWcuZ29vZ2xlO1xuICAgICAgICAgIEtleWNsb2FrQ29uZmlnID0gY29uZmlnLmtleWNsb2FrO1xuXG4gICAgICAgICAgaWYgKE9TT0F1dGhDb25maWcgJiYgIW1hc3Rlcikge1xuICAgICAgICAgICAgLy8gVE9ETyBhdXRoLm1hc3Rlcl91cmkgbm8gbG9uZ2VyIHVzZWQgcmlnaHQ/XG4gICAgICAgICAgICAvLyBtYXN0ZXIgPSBPU09BdXRoQ29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgICBpZiAoIW1hc3Rlcikge1xuICAgICAgICAgICAgICB2YXIgb2F1dGhfYXV0aG9yaXplX3VyaSA9IE9TT0F1dGhDb25maWcub2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgaWYgKG9hdXRoX2F1dGhvcml6ZV91cmkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIjovL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWR4ICs9IDM7XG4gICAgICAgICAgICAgICAgICBpZHggPSB0ZXh0LmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0ZXh0LnN1YnN0cmluZygwLCArK2lkeCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIUt1YmVybmV0ZXNBUEkubWFzdGVyVXJsIHx8IEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID09PSBcIi9cIikgJiYgKCFtYXN0ZXIgfHwgbWFzdGVyID09PSBcIi9cIikpIHtcbiAgICAgICAgICAgIC8vIGxldHMgZGVmYXVsdCB0aGUgbWFzdGVyIHRvIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBob3N0L3BvcnRcbiAgICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG1hc3RlciB1cmwgaXMgXCIvXCIgYW5kIHdlIGFyZVxuICAgICAgICAgICAgLy8gc2VydmluZyB1cCBzdGF0aWMgY29udGVudCBmcm9tIGluc2lkZSAvYXBpL3YxL25hbWVzcGFjZXMvZGVmYXVsdC9zZXJ2aWNlcy9mYWJyaWM4IG9yIHNvbWV0aGluZyBsaWtlIHRoYXRcbiAgICAgICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgIG1hc3RlciA9IG5ldyBVUkkoaHJlZikucXVlcnkoXCJcIikucGF0aChcIlwiKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFzdGVyKSB7XG4gICAgICAgICAgICBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9IG1hc3RlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KVxuICAgICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkVycm9yIGZldGNoaW5nIEt1YmVybmV0ZXMgY29uZmlnOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHRydWUpO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUoJ25nUmVzb3VyY2UnKTtcbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcblxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlIZWxwZXJzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlQbHVnaW4udHNcIi8+XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICB2YXIgbG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMnKTtcblxuICBmdW5jdGlvbiBnZXRLZXkoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZykge1xuICAgIHJldHVybiBuYW1lc3BhY2UgPyBuYW1lc3BhY2UgKyAnLScgKyBraW5kIDoga2luZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZVNlbmQocmVxdWVzdCkge1xuICAgIHZhciB0b2tlbiA9IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogIE1hbmFnZXMgdGhlIGFycmF5IG9mIGs4cyBvYmplY3RzIGZvciBhIGNsaWVudCBpbnN0YW5jZVxuICAgKiovXG4gIGNsYXNzIE9iamVjdExpc3Qge1xuICAgIHB1YmxpYyB0cmlnZ2VyQ2hhbmdlZEV2ZW50ID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BTlksIHRoaXMuX29iamVjdHMpO1xuICAgIH0sIDUwMCwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcblxuICAgIHByaXZhdGUgX2VlOkV2ZW50RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX29iamVjdHM6QXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3Ioa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB2YXIgbG9nZ2VyTmFtZSA9ICdrOHMtb2JqZWN0cy8nICsgKG5hbWVzcGFjZSA/IFVybEhlbHBlcnMuam9pbihuYW1lc3BhY2UsIGtpbmQpIDoga2luZCk7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQobG9nZ2VyTmFtZSk7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbGl6ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWU7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb2JqZWN0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNOYW1lZEl0ZW0oaXRlbTphbnkpIHtcbiAgICAgIHJldHVybiBfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqOmFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TmFtZShvYmopID09PSBnZXROYW1lKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZGVkKG9iamVjdCkge1xuICAgICAgaWYgKF8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLm1vZGlmaWVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuQURERUQsIG9iamVjdCk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIG1vZGlmaWVkKG9iamVjdCkge1xuICAgICAgaWYgKCFfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5hZGRlZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfLmZvckVhY2godGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICBpZiAoZXF1YWxzKG9iaiwgb2JqZWN0KSkge1xuICAgICAgICAgIGFuZ3VsYXIuY29weShvYmplY3QsIG9iaik7XG4gICAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIG9iamVjdCk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlZChvYmplY3QpIHtcbiAgICAgIHZhciBkZWxldGVkID0gXy5yZW1vdmUodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5fZWUuZW1pdChXYXRjaEFjdGlvbnMuREVMRVRFRCwgZGVsZXRlZFswXSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgaW50ZXJmYWNlIENvbXBhcmVSZXN1bHQge1xuICAgIGFkZGVkOkFycmF5PGFueT47XG4gICAgbW9kaWZpZWQ6QXJyYXk8YW55PjtcbiAgICBkZWxldGVkOkFycmF5PGFueT47XG4gIH1cblxuICBmdW5jdGlvbiBjb21wYXJlKG9sZDpBcnJheTxhbnk+LCBfbmV3OkFycmF5PGFueT4pOkNvbXBhcmVSZXN1bHQge1xuICAgIHZhciBhbnN3ZXIgPSA8Q29tcGFyZVJlc3VsdD4ge1xuICAgICAgYWRkZWQ6IFtdLFxuICAgICAgbW9kaWZpZWQ6IFtdLFxuICAgICAgZGVsZXRlZDogW11cbiAgICB9O1xuICAgIF8uZm9yRWFjaChfbmV3LCAobmV3T2JqKSA9PiB7XG4gICAgICB2YXIgb2xkT2JqID0gXy5maW5kKG9sZCwgKG8pID0+IGVxdWFscyhvLCBuZXdPYmopKTtcbiAgICAgIGlmICghb2xkT2JqKSB7XG4gICAgICAgIGFuc3dlci5hZGRlZC5wdXNoKG5ld09iaik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmd1bGFyLnRvSnNvbihvbGRPYmopICE9PSBhbmd1bGFyLnRvSnNvbihuZXdPYmopKSB7XG4gICAgICAgIGFuc3dlci5tb2RpZmllZC5wdXNoKG5ld09iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKG9sZCwgKG9sZE9iaikgPT4ge1xuICAgICAgdmFyIG5ld09iaiA9IF8uZmluZChfbmV3LCAobykgPT4gZXF1YWxzKG8sIG9sZE9iaikpO1xuICAgICAgaWYgKCFuZXdPYmopIHtcbiAgICAgICAgYW5zd2VyLmRlbGV0ZWQucHVzaChvbGRPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKlxuICAgKiBNYW5hZ2VzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3Igb2JqZWN0cyB0aGF0IGRvbid0IHN1cHBvcnQgd2Vic29ja2V0IGNvbm5lY3Rpb25zXG4gICAqL1xuICBjbGFzcyBPYmplY3RQb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBfbGFzdEZldGNoID0gPEFycmF5PGFueT4+IFtdO1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ludGVydmFsID0gNTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRDYW5jZWw6YW55ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0VVJMOnN0cmluZywgcHJpdmF0ZSBoYW5kbGVyOldTSGFuZGxlcikge1xuICAgICAgdGhpcy5sb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KGhhbmRsZXIuY29sbGVjdGlvbi5raW5kLCBoYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlKSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGVkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZG9HZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgJC5hamF4KHRoaXMucmVzdFVSTCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGl0ZW1zICA9IChkYXRhICYmIGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtdO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjb21wYXJlKHRoaXMuX2xhc3RGZXRjaCwgaXRlbXMpO1xuICAgICAgICAgIHRoaXMuX2xhc3RGZXRjaCA9IGl0ZW1zO1xuICAgICAgICAgIF8uZm9ySW4ocmVzdWx0LCAoaXRlbXM6YW55W10sIGFjdGlvbjpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChpdGVtcywgKGl0ZW06YW55KSA9PiB7XG4gICAgICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gbW9kaWZ5IHRoZSBvcmlnaW5hbCBvYmplY3RcbiAgICAgICAgICAgICAgaXRlbSA9IF8uY2xvbmVEZWVwKGl0ZW0pO1xuICAgICAgICAgICAgICAvLyBUT0RPIHRoaXMgdHJpbVJpZ2h0IHdvcmtzIGZvciBub3csIGJ1dCBtaWdodCBub3Qgd29yayBhdCBzb21lIHBvaW50XG4gICAgICAgICAgICAgIGl0ZW0ua2luZCA9IF8udHJpbVJpZ2h0KF8uY2FwaXRhbGl6ZSh0aGlzLmhhbmRsZXIuY29sbGVjdGlvbi5raW5kKSwgJ3MnKTtcbiAgICAgICAgICAgICAgaXRlbS5hcGlWZXJzaW9uID0gYXBpVmVyc2lvbkZvcktpbmQodGhpcy5oYW5kbGVyLmNvbGxlY3Rpb24ua2luZCk7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jb2xsZWN0aW9uLm5hbWVzcGFjZSA/IGl0ZW0ubmFtZXNwYWNlID0gdGhpcy5oYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlIDogZmFsc2U7XG4gICAgICAgICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbmd1bGFyLnRvSnNvbih7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogaXRlbVxuICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIub25tZXNzYWdlKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vbG9nLmRlYnVnKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVycm9yID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGlmICh0aGlzLnJldHJpZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIk91dCBvZiByZXRyaWVzLCBzdG9wcGluZyBwb2xsaW5nLCBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gdGhpcy5yZXRyaWVzIC0gMTtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiRXJyb3IgcG9sbGluZywgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMgKyAxLCBcIiBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgIH0sIDEpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RvcCgpIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMudENhbmNlbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50Q2FuY2VsKTtcbiAgICAgICAgdGhpcy50Q2FuY2VsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2VzIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgYmFja2VuZCBhbmQgcGFzc2VzIGV2ZW50cyB0byB0aGUgT2JqZWN0TGlzdFxuICAgKi9cbiAgY2xhc3MgV1NIYW5kbGVyIHtcbiAgICBwcml2YXRlIHJldHJpZXM6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzb2NrZXQ6V2ViU29ja2V0O1xuICAgIHByaXZhdGUgcG9sbGVyOk9iamVjdFBvbGxlcjtcbiAgICBwcml2YXRlIHNlbGY6Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbGlzdDpPYmplY3RMaXN0O1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5zZWxmID0gX3NlbGY7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzLycgKyBnZXRLZXkoX3NlbGYua2luZCwgX3NlbGYubmFtZXNwYWNlKSk7XG4gICAgfVxuXG4gICAgc2V0IGxpc3QoX2xpc3Q6T2JqZWN0TGlzdCkge1xuICAgICAgdGhpcy5fbGlzdCA9IF9saXN0O1xuICAgIH1cblxuICAgIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlciwgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHdzW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIG9ubWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJFdmVudDogXCIsIGRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0ZWQ6IFwiLCBldmVudCk7XG4gICAgfTtcblxuICAgIG9uY2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJldHJpZXMgPCAzICYmIHRoaXMuY29ubmVjdFRpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5jb25uZWN0VGltZSkgPiA1MDAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXRyeWluZyBhZnRlciBjb25uZWN0aW9uIGNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBkaXNjb25uZWN0ZWQsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHNlbGYsIHdzKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBmb3IgXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBjbG9zZWQsIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJTd2l0Y2hpbmcgdG8gcG9sbGluZyBtb2RlXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25lcnJvcihldmVudCkge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWIgc29ja2V0IGVuY291bnRlcmVkIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHx8ICh0aGlzLnBvbGxlciAmJiB0aGlzLnBvbGxlci5jb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLnNvY2tldCAmJiAhdGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgdmFyIHdzID0gdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuc2VsZi53c1VSTCk7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcnModGhpcywgd3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBvbGxlcikge1xuICAgICAgICB0aGlzLnBvbGxlci5kZXN0cm95KCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbGxlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBJbXBsZW1lbnRzIHRoZSBleHRlcm5hbCBBUEkgZm9yIHdvcmtpbmcgd2l0aCBrOHMgY29sbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgKi9cbiAgZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25JbXBsIGltcGxlbWVudHMgQ29sbGVjdGlvbiB7XG5cbiAgICBwcml2YXRlIF9raW5kOnN0cmluZztcbiAgICBwcml2YXRlIF9uYW1lc3BhY2U6c3RyaW5nO1xuICAgIHByaXZhdGUgX3BhdGg6c3RyaW5nO1xuICAgIHByaXZhdGUgX3dzVXJsOlVSSTtcbiAgICBwcml2YXRlIF9yZXN0VXJsOlVSSTtcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdGhpcy5fa2luZCA9IGtpbmQ7XG4gICAgICB0aGlzLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgbnVsbDtcblxuICAgICAgdmFyIHByZWYgPSBwcmVmaXhGb3JLaW5kKHRoaXMuX2tpbmQpO1xuICAgICAgaWYgKCFwcmVmKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgJ25hbWVzcGFjZXMnLCB0aGlzLl9uYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdFVybCA9IG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB0aGlzLl93c1VybCA9IHdzVXJsKFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgdGhpcy5fcGF0aCkpLnF1ZXJ5KDxhbnk+e1xuICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYW5kbGVycyA9IG5ldyBXU0hhbmRsZXIodGhpcyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdCA9IG5ldyBPYmplY3RMaXN0KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0S2V5KCkge1xuICAgICAgcmV0dXJuIGdldEtleSh0aGlzLl9raW5kLCB0aGlzLl9uYW1lc3BhY2UpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHdzVVJMKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dzVXJsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgcmVzdFVSTCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdDtcbiAgICB9XG5cbiAgICAvLyBvbmUgdGltZSBmZXRjaCBvZiB0aGUgZGF0YS4uLlxuICAgIHB1YmxpYyBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIGlmICghdGhpcy5saXN0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubGlzdC5ldmVudHMub25jZShXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXN0VXJsRm9yKGl0ZW06YW55LCB1c2VOYW1lOmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldE5hbWUoaXRlbSk7XG4gICAgICBpZiAodXNlTmFtZSAmJiAhbmFtZSkge1xuICAgICAgICBsb2cuZGVidWcoXCJOYW1lIG1pc3NpbmcgZnJvbSBpdGVtOiBcIiwgaXRlbSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pO1xuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHRoaXMuX2tpbmQgIT09IFdhdGNoVHlwZXMuTkFNRVNQQUNFUyAmJiBuYW1lc3BhY2UgJiYgIXRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHByZWZpeEZvcktpbmQodGhpcy5fa2luZCksICduYW1lc3BhY2VzJywgbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbih1cmwsIG5hbWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBjb250aW51YWxseSBnZXQgdXBkYXRlc1xuICAgIHB1YmxpYyB3YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgICByZXR1cm4gY2I7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9mZihXYXRjaEFjdGlvbnMuQU5ZLCBjYik7XG4gICAgfVxuXG4gICAgcHVibGljIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpIHtcbiAgICAgIHZhciBtZXRob2QgPSAnUFVUJztcbiAgICAgIHZhciB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSk7XG4gICAgICBpZiAoIXRoaXMubGlzdC5oYXNOYW1lZEl0ZW0oaXRlbSkpIHtcbiAgICAgICAgLy8gY3JlYXRpbmcgYSBuZXcgb2JqZWN0XG4gICAgICAgIG1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICQuYWpheCh1cmwsIDxhbnk+IHtcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKGl0ZW0pLFxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5kZWxldGVkKGl0ZW0pO1xuICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICQuYWpheCh1cmwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2Ioe30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gZGVsZXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgdGhpcy5saXN0LmFkZGVkKGl0ZW0pO1xuICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICAvKlxuICAgKiBNYW5hZ2VzIHJlZmVyZW5jZXMgdG8gY29sbGVjdGlvbiBpbnN0YW5jZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3c1xuICAgKi9cbiAgY2xhc3MgQ2xpZW50SW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlZkNvdW50ID0gMDtcbiAgICBwcml2YXRlIF9jb2xsZWN0aW9uOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuX2NvbGxlY3Rpb24gPSBfY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZWZDb3VudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVmKCkge1xuICAgICAgdGhpcy5fcmVmQ291bnQgPSB0aGlzLl9yZWZDb3VudCArIDE7XG4gICAgfTtcblxuICAgIHB1YmxpYyByZW1vdmVSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50IC0gMTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHB1YmxpYyBkaXNwb3NhYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50IDw9IDA7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgaW50ZXJmYWNlIENsaWVudE1hcCB7XG4gICAgW25hbWU6c3RyaW5nXTpDbGllbnRJbnN0YW5jZTtcbiAgfVxuXG4gIC8qXG4gICAqIEZhY3RvcnkgaW1wbGVtZW50YXRpb24gdGhhdCdzIGF2YWlsYWJsZSBhcyBhbiBhbmd1bGFyIHNlcnZpY2VcbiAgICovXG4gIGNsYXNzIEs4U0NsaWVudEZhY3RvcnlJbXBsIHtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IExvZ2dlci5nZXQoJ2s4cy1jbGllbnQtZmFjdG9yeScpO1xuICAgIHByaXZhdGUgX2NsaWVudHMgPSA8Q2xpZW50TWFwPiB7fTtcbiAgICBwdWJsaWMgY3JlYXRlKGtpbmQ6IHN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uIHtcbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgY2xpZW50ID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiUmV0dXJuaW5nIGV4aXN0aW5nIGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGllbnQgPSBuZXcgQ2xpZW50SW5zdGFuY2UobmV3IENvbGxlY3Rpb25JbXBsKGtpbmQsIG5hbWVzcGFjZSkpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdLOFNDbGllbnRGYWN0b3J5JywgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKVxuICB9KTtcblxufVxuXG5cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgX21vZHVsZS5mYWN0b3J5KCdTZXJ2aWNlUmVnaXN0cnknLCBbKCkgPT4ge1xuICAgIHJldHVybiBuZXcgU2VydmljZVJlZ2lzdHJ5U2VydmljZSgpO1xuICB9XSk7XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBzaW1wbGUgaW50ZXJmYWNlIHRvIHNlcnZpY2UgZGlzY292ZXJ5IHRoYXQgY2FuIGJlIHVzZWQgZWFybHkgb24gaW4gdGhlIGFwcGxpY2F0aW9uIGxpZmVjeWNsZSBiZWZvcmUgdGhlXG4gICAqIHVuZGVybHlpbmcgbW9kZWwgaGFzIGJlZW4gY3JlYXRlZCB2aWEgZGVwZW5kZW5jeSBpbmplY3Rpb25cbiAgICovXG4gIGV4cG9ydCBjbGFzcyBTZXJ2aWNlUmVnaXN0cnlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1vZGVsOmFueSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYSBzZXJ2aWNlIGF2YWlsYWJsZSBmb3IgdGhlIGdpdmVuIElEIG9yIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGhhc1NlcnZpY2Uoc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZFNlcnZpY2Uoc2VydmljZU5hbWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlcnZpY2UgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlIG5hbWUgKElEKSBvciBudWxsIGlmIGl0IGNhbm5vdCBiZSBmb3VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlcnZpY2VOYW1lIHRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGxvb2sgZm9yXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgZmluZFNlcnZpY2Uoc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgICAgdmFyIGFuc3dlciA9IG51bGw7XG4gICAgICBpZiAoc2VydmljZU5hbWUpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5nZXRNb2RlbCgpO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB2YXIgbmFtZXNwYWNlID0gbW9kZWwuY3VycmVudE5hbWVzcGFjZSgpO1xuICAgICAgICAgIHJldHVybiBtb2RlbC5nZXRTZXJ2aWNlKG5hbWVzcGFjZSAsc2VydmljZU5hbWUpO1xuLypcbiAgICAgICAgVE9ETyBsZXRzIG9ubHkgbG9vayBpbiB0aGUgY3VycmVudCBuYW1lc3BhY2VcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKG1vZGVsLnNlcnZpY2VzLCAoc2VydmljZSkgPT4ge1xuICAgICAgICAgIGlmIChzZXJ2aWNlTmFtZSA9PT0gZ2V0TmFtZShzZXJ2aWNlKSkge1xuICAgICAgICAgICAgYW5zd2VyID0gc2VydmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFuc3dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZXJ2aWNlIGxpbmsgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSB0aGUgbmFtZSBvZiB0aGUgc2VydmljZVxuICAgICAqIEByZXR1cm4ge251bGx9XG4gICAgICovXG4gICAgcHVibGljIHNlcnZpY2VMaW5rKHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgdmFyIHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlTGlua1VybChzZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZGVsKCk6YW55IHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0aGlzLm1vZGVsO1xuICAgICAgLy8gbGV0cyBhbGxvdyBsYXp5IGxvYWQgc28gd2UgY2FuIGJlIGludm9rZWQgYmVmb3JlIHRoZSBpbmplY3RvciBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBpZiAoIWFuc3dlcikge1xuICAgICAgICB2YXIgaW5qZWN0b3IgPSBIYXd0aW9Db3JlLmluamVjdG9yO1xuICAgICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgICB0aGlzLm1vZGVsID0gaW5qZWN0b3IuZ2V0KCdLdWJlcm5ldGVzTW9kZWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYW5zd2VyID0gdGhpcy5tb2RlbDtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
