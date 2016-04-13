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
    KubernetesAPI.K8S_PREFIX = 'api';
    KubernetesAPI.OS_PREFIX = 'oapi';
    KubernetesAPI.K8S_EXT_PREFIX = 'apis';
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
        if (kind === KubernetesAPI.WatchTypes.IMAGES) {
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
        if (!kind) {
            return undefined;
        }
        return _.trimRight(_.capitalize(kind), 's');
    }
    KubernetesAPI.toKindName = toKindName;
    function toCollectionName(kind) {
        if (angular.isObject(kind)) {
            kind = getKind(kind);
        }
        if (!kind) {
            return undefined;
        }
        return kind.toLowerCase() + 's';
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
    var pollingOnly = [KubernetesAPI.WatchTypes.PROJECTS, KubernetesAPI.WatchTypes.IMAGE_STREAM_TAGS];
    var ObjectList = (function () {
        function ObjectList(kind, namespace) {
            var _this = this;
            this.triggerChangedEvent = _.debounce(function () {
                _this._ee.emit(KubernetesAPI.WatchActions.ANY, _this._objects);
            }, 75, { trailing: true });
            this._ee = undefined;
            this._initialized = false;
            this._objects = [];
            this.log = undefined;
            var loggerName = 'k8s-objects/' + (namespace ? UrlHelpers.join(namespace, kind) : kind);
            this.log = log;
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
                var initialized = _this.initialized;
                _this._initialized = true;
                if (!initialized) {
                    _this._ee.emit(KubernetesAPI.WatchActions.INIT, _this._objects);
                }
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
            set: function (objs) {
                var _this = this;
                this._objects.length = 0;
                _.forEach(objs, function (obj) {
                    _this._objects.push(obj);
                });
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
                        _this.log.debug("Out of retries, stopping polling, error: ", error);
                        _this.stop();
                    }
                    else {
                        _this.retries = _this.retries + 1;
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
            if (this.self.restURL === '' && this.self.wsURL === '') {
                setTimeout(function () {
                    _this.connect();
                }, 2500);
                return;
            }
            if (!this.socket && !this.poller) {
                if (_.any(pollingOnly, function (kind) { return kind === _this.self.kind; })) {
                    this.log.info("Using polling for kind: ", this.self.kind);
                    this.poller = new ObjectPoller(this.self.restURL, this);
                    this.poller.start();
                }
                else {
                    var doConnect = function () {
                        log.debug("Connecting websocket for kind: ", _this.self.kind);
                        var ws = _this.socket = new WebSocket(_this.self.wsURL);
                        _this.setHandlers(_this, ws);
                    };
                    $.ajax(this.self.restURL, {
                        method: 'GET',
                        processData: false,
                        success: function (data) {
                            _this._list.objects = data.items || [];
                            doConnect();
                        }, error: function (jqXHR, text, status) {
                            var err = KubernetesAPI.getErrorObject(jqXHR);
                            log.info("Failed to fetch data while connecting to backend for type: ", _this.self.kind, " error: ", err);
                            doConnect();
                        },
                        beforeSend: beforeSend
                    });
                }
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
    })();
    var CollectionImpl = (function () {
        function CollectionImpl(options) {
            this.options = options;
            this.handlers = undefined;
            this.list = undefined;
            this._kind = options.kind;
            this._apiVersion = options.apiVersion;
            this._namespace = options.namespace || null;
            var pref = this.getPrefix();
            if (this._namespace) {
                this._path = UrlHelpers.join(pref, 'namespaces', this._namespace, this._kind);
            }
            else {
                this._path = UrlHelpers.join(pref, this._kind);
            }
            this.handlers = new WSHandler(this);
            var list = this.list = new ObjectList(options.kind, options.namespace);
            this.handlers.list = list;
        }
        ;
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
                    return KubernetesAPI.wsUrl(UrlHelpers.join(KubernetesAPI.masterApiUrl(), this._path)).query({
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
            if (KubernetesAPI.namespaced(KubernetesAPI.toCollectionName(item.kind))) {
                var namespace = KubernetesAPI.getNamespace(item) || this._namespace;
                url = UrlHelpers.join(KubernetesAPI.masterApiUrl(), this.getPrefix(), 'namespaces', namespace, this._kind);
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
                    cb(_this.list.objects);
                }, 10);
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5MSVNUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkVORFBPSU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FVkVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5OT0RFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVQTElDQVRJT05fQ09OVFJPTExFUlMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUkVTT1VSQ0VfUVVPVEFTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk9BVVRIX0NMSUVOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VDUkVUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlRFTVBMQVRFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST1VURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5CVUlMRFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuREVQTE9ZTUVOVF9DT05GSUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLklNQUdFX1NUUkVBTV9UQUdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5JTklUIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQU5ZIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuQURERUQiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5NT0RJRklFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLkRFTEVURUQiLCJLdWJlcm5ldGVzQVBJLmFwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkub3NBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLmV4dFByZWZpeCIsIkt1YmVybmV0ZXNBUEkubWFzdGVyQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5uYW1lc3BhY2VkIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLmFwaUZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLmFwaVZlcnNpb25Gb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLmdldEVycm9yT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS53c1NjaGVtZSIsIkt1YmVybmV0ZXNBUEkudG9LaW5kTmFtZSIsIkt1YmVybmV0ZXNBUEkudG9Db2xsZWN0aW9uTmFtZSIsIkt1YmVybmV0ZXNBUEkud3NVcmwiLCJLdWJlcm5ldGVzQVBJLmVxdWFscyIsIkt1YmVybmV0ZXNBUEkuY3JlYXRlTGlzdCIsIkt1YmVybmV0ZXNBUEkuY3JlYXRlU2hhbGxvd09iamVjdCIsIkt1YmVybmV0ZXNBUEkuZmlsdGVyQnlMYWJlbCIsIkt1YmVybmV0ZXNBUEkuYXBwbHlOYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLmZ1bGxOYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRVSUQiLCJLdWJlcm5ldGVzQVBJLmdldE5hbWVzcGFjZSIsIkt1YmVybmV0ZXNBUEkuZ2V0QXBpVmVyc2lvbiIsIkt1YmVybmV0ZXNBUEkuZ2V0TGFiZWxzIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lIiwiS3ViZXJuZXRlc0FQSS5nZXRLaW5kIiwiS3ViZXJuZXRlc0FQSS5nZXRTZWxlY3RvciIsIkt1YmVybmV0ZXNBUEkuZ2V0SG9zdCIsIkt1YmVybmV0ZXNBUEkuZ2V0U3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRQb3J0cyIsIkt1YmVybmV0ZXNBUEkuZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCJLdWJlcm5ldGVzQVBJLmxhYmVsc1RvU3RyaW5nIiwiS3ViZXJuZXRlc0FQSS5pc1J1bm5pbmciLCJLdWJlcm5ldGVzQVBJLnNlbGVjdG9yTWF0Y2hlcyIsIkt1YmVybmV0ZXNBUEkucG9kU3RhdHVzIiwiS3ViZXJuZXRlc0FQSS5nZXRLZXkiLCJLdWJlcm5ldGVzQVBJLmJlZm9yZVNlbmQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaW5pdGlhbGl6ZWQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuZXZlbnRzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lm9iamVjdHMiLCJLdWJlcm5ldGVzQVBJLk9iamVjdExpc3QuaGFzTmFtZWRJdGVtIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmdldE5hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5jb21wYXJlIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmRvR2V0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuc3RhcnQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdG9wIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5saXN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLnNldEhhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ubWVzc2FnZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ub3BlbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbmVycm9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuX3Jlc3RVcmwiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLl93c1VybCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53c1VSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwubmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5raW5kIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmFkZExhYmVsRmlsdGVyIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5nZXQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmdldFByZWZpeCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVybEZvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwud2F0Y2giLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnVud2F0Y2giLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnB1dCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVsZXRlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLnJlZkNvdW50IiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5hZGRSZWYiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLnJlbW92ZVJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuZGlzcG9zYWJsZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jcmVhdGUiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLmdldCIsIkt1YmVybmV0ZXNBUEkuaGFuZGxlTGlzdEFjdGlvbiIsIkt1YmVybmV0ZXNBUEkuaGFuZGxlTGlzdEFjdGlvbi5hZGRSZXN1bHQiLCJLdWJlcm5ldGVzQVBJLmhhbmRsZUxpc3RBY3Rpb24ubmV4dCIsIkt1YmVybmV0ZXNBUEkubm9ybWFsaXplT3B0aW9ucyIsIkt1YmVybmV0ZXNBUEkuZGVsIiwiS3ViZXJuZXRlc0FQSS5wdXQiLCJLdWJlcm5ldGVzQVBJLndhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELEdBQUc7QUFDSCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsZ0RBQWdEO0FBQ2hELEdBQUc7QUFDSCx1RUFBdUU7QUFDdkUscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSx1RUFBdUU7QUFDdkUsa0NBQWtDO0FBRWxDLDBEQUEwRDtBQUMxRCxzREFBc0Q7O0FDaEJ0RCx1Q0FBdUM7QUFJdEMsQ0FBQztBQU9ELENBQUM7QUFFRixJQUFPLGFBQWEsQ0EwS25CO0FBMUtELFdBQU8sYUFBYSxFQUFDLENBQUM7SUFFcEJBO1FBQUFDO1FBRUFDLENBQUNBO1FBRENELHNCQUFJQSx5Q0FBcUJBO2lCQUF6QkEsY0FBcUNFLE1BQU1BLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUN2RUEsYUFBQ0E7SUFBREEsQ0FGQUQsQUFFQ0MsSUFBQUQ7SUFGWUEsb0JBQU1BLFNBRWxCQSxDQUFBQTtJQUVVQSx1QkFBU0EsR0FBR0EsSUFBSUEsTUFBTUEsRUFBRUEsQ0FBQ0E7SUE4Q3JDQTtRQUFBSTtRQThCQUMsQ0FBQ0E7UUE3QkVELHNCQUFrQkEsa0JBQUlBO2lCQUF0QkEsY0FBa0NFLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUY7UUFDcERBLHNCQUFrQkEsdUJBQVNBO2lCQUEzQkEsY0FBdUNHLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBOzs7V0FBQUg7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Z0JBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ3JEQSxDQUFDQTtTQUNGQSxDQUFDQTtRQUNGQSxNQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNqQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFmZTFKLG1CQUFLQSxRQWVwQkEsQ0FBQUE7QUFFSEEsQ0FBQ0EsRUF0N0JNLGFBQWEsS0FBYixhQUFhLFFBczdCbkIiLCJmaWxlIjoiY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gQ29weXJpZ2h0IDIwMTQtMjAxNSBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlc1xuLy8vIGFuZCBvdGhlciBjb250cmlidXRvcnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBAYXV0aG9yIHRhZ3MuXG4vLy9cbi8vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vL1xuLy8vICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLy9cbi8vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLXV0aWxpdGllcy9kZWZzLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbGlicy9oYXd0aW8tb2F1dGgvZGVmcy5kLnRzXCIvPlxuIiwiLy9kZWZzIGZvciB0aGlyZC1wYXJ0eSBldmVudGluZyBsaWJyYXJ5XG5cbmludGVyZmFjZSBTbW9rZVNpZ25hbHMge1xuICBjb252ZXJ0KG9iajphbnksIGhhbmRsZXJzPzphbnkpO1xufTtcblxuaW50ZXJmYWNlIEV2ZW50RW5hYmxlZCB7XG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvbmNlKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBvZmYoZXZlbnROYW1lOnN0cmluZywgaGFuZGxlcjpGdW5jdGlvbik7XG4gIGVtaXQoZXZlbnROYW1lOnN0cmluZywgLi4uYXJnczphbnlbXSk7XG59O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IGNsYXNzIGNvbnN0cyB7XG4gICAgZ2V0IE5BTUVTUEFDRV9TVE9SQUdFX0tFWSgpOnN0cmluZyB7IHJldHVybiBcIms4c1NlbGVjdGVkTmFtZXNwYWNlXCI7IH1cbiAgfVxuXG4gIGV4cG9ydCB2YXIgQ29uc3RhbnRzID0gbmV3IGNvbnN0cygpO1xuXHRcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbiB7XG4gICAgcHJvdG8/OnN0cmluZztcbiAgICBob3N0UG9ydDpzdHJpbmc7XG4gICAgcHJlZml4OnN0cmluZztcbiAgfVxuICBcbiAgZXhwb3J0IGludGVyZmFjZSBBcGlMb2NhdGlvbnMge1xuICAgIG9wZW5zaGlmdD86IEFwaUxvY2F0aW9uO1xuICAgIGs4cz86IEFwaUxvY2F0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzQ29uZmlnIHtcbiAgICBtYXN0ZXJfdXJpPzogc3RyaW5nO1xuICAgIGFwaT86IEFwaUxvY2F0aW9ucztcbiAgICBvcGVuc2hpZnQ/OiBPcGVuU2hpZnRPQXV0aENvbmZpZztcbiAgICBnb29nbGU/OiBHb29nbGVPQXV0aENvbmZpZztcbiAgICBrZXljbG9haz86IEtleUNsb2FrQXV0aENvbmZpZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlblNoaWZ0T0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdvb2dsZU9BdXRoQ29uZmlnIHtcbiAgICBhdXRoZW50aWNhdGlvblVSSTpzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvblVSSTpzdHJpbmc7XG4gICAgY2xpZW50SWQ6c3RyaW5nO1xuICAgIGNsaWVudFNlY3JldDpzdHJpbmc7XG4gICAgcmVkaXJlY3RVUkk6c3RyaW5nO1xuICAgIHNjb3BlOnN0cmluZztcbiAgICB0b2tlblVSST86c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLZXlDbG9ha0F1dGhDb25maWcge1xuICAgIG9hdXRoX2F1dGhvcml6ZV91cmk6c3RyaW5nO1xuICAgIG9hdXRoX2NsaWVudF9pZDpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEt1YmVybmV0ZXNTdGF0ZSB7XG4gICAgbmFtZXNwYWNlczogQXJyYXk8c3RyaW5nPjtcbiAgICBzZWxlY3RlZE5hbWVzcGFjZTogc3RyaW5nO1xuICB9XG5cblx0ZXhwb3J0IGNsYXNzIFdhdGNoVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IExJU1QoKTpzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNUygpOnN0cmluZyB7IHJldHVybiBcImltYWdlc3RyZWFtc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgSU1BR0VfU1RSRUFNX1RBR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXRhZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cbiAgICAvL3B1YmxpYyBzdGF0aWMgZ2V0IERBRU1PTlNFVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJkYWVtb25zZXRzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lc3BhY2VkVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGs4c1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkVORFBPSU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FVkVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIC8vV2F0Y2hUeXBlcy5JTUFHRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1fVEFHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgSzhTT3B0aW9ucyB7XG4gICAga2luZD86IHN0cmluZztcbiAgICBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gICAgYXBpVmVyc2lvbj86IHN0cmluZztcbiAgICBsYWJlbFNlbGVjdG9yPzogTGFiZWxNYXA7XG4gICAgb2JqZWN0PzogYW55O1xuICAgIHN1Y2Nlc3M/OiAob2JqczphbnlbXSkgPT4gdm9pZDtcbiAgICBlcnJvcj86IChlcnI6YW55KSA9PiB2b2lkO1xuICAgIHVybEZ1bmN0aW9uPzogKG9wdGlvbnM6SzhTT3B0aW9ucykgPT4gc3RyaW5nO1xuICB9XG5cdFxuXHRleHBvcnQgY2xhc3MgV2F0Y2hBY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTklUKCk6c3RyaW5nIHsgcmV0dXJuIFwiSU5JVFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEFOWSgpOnN0cmluZyB7IHJldHVybiBcIipcIjsgfTtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBBRERFRCgpOnN0cmluZyB7IHJldHVybiBcIkFEREVEXCI7IH07XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9O1xuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IERFTEVURUQoKTpzdHJpbmcgeyByZXR1cm4gXCJERUxFVEVEXCI7IH07XG5cdH1cblx0XG5cdGV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TWFwIHtcblx0XHRbdWlkOnN0cmluZ106IGFueTtcdFx0XG5cdH1cblxuICBleHBvcnQgaW50ZXJmYWNlIExhYmVsTWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOiBzdHJpbmc7XG4gIH1cblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbiB7XG4gICAgd3NVUkw6c3RyaW5nO1xuICAgIHJlc3RVUkw6c3RyaW5nO1xuICAgIG5hbWVzcGFjZTogc3RyaW5nO1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICBjb25uZWN0ZWQ6IGJvb2xlYW47XG4gICAgY29ubmVjdCgpO1xuICAgIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZDtcbiAgICB1bndhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKTp2b2lkO1xuICAgIHB1dChpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZGVsZXRlKGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCk6dm9pZDtcbiAgICBnZXRLZXkoKTpzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEs4U0NsaWVudEZhY3Rvcnkge1xuICAgIGNyZWF0ZShraW5kOmFueSwgbmFtZXNwYWNlPzogc3RyaW5nKTpDb2xsZWN0aW9uO1xuICAgIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KTp2b2lkO1xuICB9XG5cblx0XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vaW5jbHVkZXMudHNcIi8+XG5cbmRlY2xhcmUgdmFyIHNtb2tlc2lnbmFscztcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9ICdLdWJlcm5ldGVzQVBJJztcbiAgZXhwb3J0IHZhciBwbHVnaW5QYXRoID0gJ3BsdWdpbnMva3ViZXJuZXRlcy1hcGkvJztcbiAgZXhwb3J0IHZhciB0ZW1wbGF0ZVBhdGggPSBwbHVnaW5QYXRoICsgJ2h0bWwvJztcbiAgZXhwb3J0IHZhciBsb2c6TG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuXG4gIGV4cG9ydCB2YXIga2VlcFBvbGxpbmdNb2RlbCA9IHRydWU7XG5cbiAgZXhwb3J0IHZhciBkZWZhdWx0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9rdWJlcm5ldGVzLnN2Z1wiKTtcbiAgZXhwb3J0IHZhciBob3N0SWNvblVybCA9IENvcmUudXJsKFwiL2ltZy9ob3N0LnN2Z1wiKTtcblxuICAvLyB0aGlzIGdldHMgc2V0IGFzIGEgcHJlLWJvb3RzdHJhcCB0YXNrXG4gIGV4cG9ydCB2YXIgb3NDb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IHZhciBtYXN0ZXJVcmwgPSBcIlwiO1xuXG4gIGV4cG9ydCB2YXIgSzhTX1BSRUZJWCA9ICdhcGknO1xuICBleHBvcnQgdmFyIE9TX1BSRUZJWCA9ICdvYXBpJztcbiAgZXhwb3J0IHZhciBLOFNfRVhUX1BSRUZJWCA9ICdhcGlzJztcblxuICBleHBvcnQgdmFyIEs4U19BUElfVkVSU0lPTiA9ICd2MSc7XG4gIGV4cG9ydCB2YXIgT1NfQVBJX1ZFUlNJT04gPSAndjEnO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEFwaVZlcnNpb24gPSBLOFNfQVBJX1ZFUlNJT047XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE9TQXBpVmVyc2lvbiA9IE9TX0FQSV9WRVJTSU9OO1xuXG4gIGV4cG9ydCB2YXIgbGFiZWxGaWx0ZXJUZXh0U2VwYXJhdG9yID0gXCIsXCI7XG4gIGV4cG9ydCB2YXIgZGVmYXVsdE5hbWVzcGFjZSA9IFwiZGVmYXVsdFwiO1xuICBleHBvcnQgdmFyIGFwcFN1ZmZpeCA9IFwiLmFwcFwiO1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlHbG9iYWxzLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZGVjbGFyZSB2YXIgSzhTQ2xpZW50RmFjdG9yeTpLOFNDbGllbnRGYWN0b3J5O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBleHRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19FWFRfUFJFRklYO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG1hc3RlckFwaVVybCgpIHtcbiAgICByZXR1cm4gbWFzdGVyVXJsIHx8IFwiXCI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlZChraW5kOnN0cmluZykge1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUE9MSUNJRVM6XG4gICAgICBjYXNlIEt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTkFNRVNQQUNFUzpcbiAgICAgIGNhc2UgS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5PREVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVfQ0xBSU1TOlxuICAgICAgY2FzZSBLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUFJPSkVDVFM6XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09IFdhdGNoVHlwZXMuSU1BR0VTKSB7XG4gICAgICByZXR1cm4gT1NfUFJFRklYO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlWZXJzaW9uRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIHZhciBhcGkgPSBhcGlGb3JLaW5kKGtpbmQpO1xuICAgIHN3aXRjaChhcGkpIHtcbiAgICAgIGNhc2UgSzhTX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4ga3ViZXJuZXRlc0FwaVByZWZpeCgpO1xuICAgICAgY2FzZSBPU19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICBjYXNlIE9TX1BSRUZJWDpcbiAgICAgICAgcmV0dXJuIG9wZW5zaGlmdEFwaVByZWZpeCgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwga3ViZXJuZXRlc0FwaVByZWZpeCgpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuc2hpZnRBcGlVcmwoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgb3BlbnNoaWZ0QXBpUHJlZml4KCkpO1xuICB9XG5cbiAgLypcbiAgICogRXh0cmFjdHMgdGhlIGs4cy9vcGVuc2hpZnQgZXJyb3IgcmVzcG9uc2UgaWYgcHJlc2VudFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KGpxWEhSKSB7XG4gICAgdmFyIGFuc3dlcjphbnkgPSBqcVhIUi5yZXNwb25zZVRleHQ7XG4gICAgdHJ5IHtcbiAgICAgIGFuc3dlciA9IGFuZ3VsYXIuZnJvbUpzb24oYW5zd2VyKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIG5vdGhpbmcgdG8gZG8uLi5cbiAgICB9XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgZWl0aGVyIHNlY3VyZS9pbnNlY3VyZSB3ZWJzb2NrZXQgcHJvdG9jb2wgYmFzZWQgb24gdGhlIG1hc3RlciBVUkkgcHJvdG9jb2xcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB3c1NjaGVtZSh1cmw6c3RyaW5nKSB7XG4gICAgdmFyIHByb3RvY29sID0gbmV3IFVSSSh1cmwpLnByb3RvY29sKCkgfHwgJ2h0dHAnO1xuICAgIGlmIChfLnN0YXJ0c1dpdGgocHJvdG9jb2wsICdodHRwcycpKSB7XG4gICAgICByZXR1cm4gJ3dzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnd3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZSAna2luZCcgb2YgYW4gb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24ga2luZFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvS2luZE5hbWUoa2luZDphbnkpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChraW5kKSkge1xuICAgICAgcmV0dXJuIGdldEtpbmQoa2luZCk7XG4gICAgfVxuICAgIGlmICgha2luZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVE9ETyB0aGlzIHRyaW1SaWdodCB3b3JrcyBmb3Igbm93LCBidXQgbWlnaHQgbm90IHdvcmsgYXQgc29tZSBwb2ludFxuICAgIHJldHVybiBfLnRyaW1SaWdodChfLmNhcGl0YWxpemUoa2luZCksICdzJyk7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGtpbmQgb2YgYW4gb2JqZWN0IGZyb20gdGhlIHNpbmd1bGFyIGtpbmRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiB0b0NvbGxlY3Rpb25OYW1lKGtpbmQ6YW55KSB7XG4gICAgaWYgKGFuZ3VsYXIuaXNPYmplY3Qoa2luZCkpIHtcbiAgICAgIGtpbmQgPSBnZXRLaW5kKGtpbmQpO1xuICAgIH1cbiAgICBpZiAoIWtpbmQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICByZXR1cm4ga2luZC50b0xvd2VyQ2FzZSgpICsgJ3MnO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgdmFyIGxlZnRVSUQgPSBnZXRVSUQobGVmdCk7XG4gICAgdmFyIHJpZ2h0VUlEID0gZ2V0VUlEKHJpZ2h0KTtcbiAgICBpZiAoIWxlZnRVSUQgJiYgIXJpZ2h0VUlEKSB7XG4gICAgICByZXR1cm4gYW5ndWxhci50b0pzb24obGVmdCkgPT09IGFuZ3VsYXIudG9Kc29uKHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnRVSUQgPT09IHJpZ2h0VUlEO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEt1YmVybmV0ZXMgb2JqZWN0IGhlbHBlcnNcbiAgICpcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaXN0IG9mIGt1YmVybmV0ZXMgb2JqZWN0cyBzdWl0YWJsZSBmb3IgcG9zdGluZyBhIGJ1bmNoIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KC4uLm9iamVjdHM6YW55W10pIHtcbiAgICB2YXIgYW5zd2VyID0ge1xuICAgICAgYXBpVmVyc2lvbjogSzhTX0FQSV9WRVJTSU9OLFxuICAgICAga2luZDogdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpLFxuICAgICAgb2JqZWN0czogW11cbiAgICB9XG4gICAgXy5mb3JFYWNoKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBfLmZvckVhY2gob2JqZWN0LCAobykgPT4ge1xuICAgICAgICAgIGFuc3dlci5vYmplY3RzLnB1c2gobyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5zd2VyLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIG9iamVjdCBzdWl0YWJsZSBmb3IgZGVsZXRlL2RlbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWxsb3dPYmplY3QobmFtZTpzdHJpbmcsIGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlWZXJzaW9uOiBLOFNfQVBJX1ZFUlNJT04sXG4gICAgICBraW5kOiB0b0tpbmROYW1lKGtpbmQpLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGNvbGxlY3Rpb24gYnkgbGFiZWxcbiAgICoqL1xuICBleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlMYWJlbChvYmplY3RzOkFycmF5PGFueT4sIGxhYmVsU2VsZWN0b3I6TGFiZWxNYXApIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICg8YW55Pl8pLm1hdGNoZXMobGFiZWxTZWxlY3Rvcik7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iamVjdHMsIChvYmplY3QpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaGVzKGdldExhYmVscyhvYmplY3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgZ2l2ZW4gbmFtZXNwYWNlIHRvIGFuIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5IHNldFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFtZXNwYWNlKG9iajphbnksIG5hbWVzcGFjZTogc3RyaW5nKSB7XG4gICAgaWYgKCFvYmoua2luZCB8fCAhbmFtZXNwYWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2VkKHRvQ29sbGVjdGlvbk5hbWUob2JqLmtpbmQpKSAmJiAhb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSkge1xuICAgICAgb2JqLm1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bGx5IHNjb3BlZCBuYW1lIHdpdGggdGhlIG5hbWVzcGFjZS9raW5kLCBzdWl0YWJsZSB0byB1c2UgYXMgYSBrZXkgaW4gbWFwc1xuICAgKiovXG4gIGV4cG9ydCBmdW5jdGlvbiBmdWxsTmFtZShlbnRpdHkpIHtcbiAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGVudGl0eSk7XG4gICAgdmFyIGtpbmQgPSBnZXRLaW5kKGVudGl0eSk7XG4gICAgdmFyIG5hbWUgPSBnZXROYW1lKGVudGl0eSk7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbigobmFtZXNwYWNlID8gbmFtZXNwYWNlIDogXCJcIiksIGtpbmQsIG5hbWUpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFVJRChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgWydtZXRhZGF0YScsICd1aWQnXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcIm5hbWVzcGFjZVwiXSk7XG4gICAgLy8gc29tZSBvYmplY3RzIGFyZW4ndCBuYW1lc3BhY2VkLCBzbyB0aGlzIGNhbiByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEFwaVZlcnNpb24oZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFsnYXBpVmVyc2lvbiddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbHMoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibGFiZWxzXCJdKTtcbiAgICByZXR1cm4gYW5zd2VyID8gYW5zd2VyIDoge307XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJuYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcIm5hbWVcIikgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJpZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRLaW5kKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImtpbmRcIl0pIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwia2luZFwiKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RvcihlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wic3BlY1wiLCBcInNlbGVjdG9yXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0KHBvZCkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQocG9kLCBbXCJzcGVjXCIsIFwiaG9zdFwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcIm5vZGVOYW1lXCJdKSB8fCBDb3JlLnBhdGhHZXQocG9kLCBbXCJzdGF0dXNcIiwgXCJob3N0SVBcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1cyhwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwicGhhc2VcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFBvcnRzKHNlcnZpY2UpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHNlcnZpY2UsIFtcInNwZWNcIiwgXCJwb3J0c1wiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0Q3JlYXRpb25UaW1lc3RhbXAoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwiY3JlYXRpb25UaW1lc3RhbXBcIl0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYWJlbHMgdGV4dCBzdHJpbmcgdXNpbmcgdGhlIDxjb2RlPmtleTE9dmFsdWUxLGtleTI9dmFsdWUyLC4uLi48L2NvZGU+IGZvcm1hdFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1RvU3RyaW5nKGxhYmVscywgc2VwZXJhdG9yVGV4dCA9IGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvcikge1xuICAgIHZhciBhbnN3ZXIgPSBcIlwiO1xuICAgIGFuZ3VsYXIuZm9yRWFjaChsYWJlbHMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gYW5zd2VyID8gc2VwZXJhdG9yVGV4dCA6IFwiXCI7XG4gICAgICBhbnN3ZXIgKz0gc2VwYXJhdG9yICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHBvZCBpcyBydW5uaW5nXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gaXNSdW5uaW5nKHBvZEN1cnJlbnRTdGF0ZSkge1xuICAgIHZhciBzdGF0dXMgPSAocG9kQ3VycmVudFN0YXRlIHx8IHt9KS5waGFzZTtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICB2YXIgbG93ZXIgPSBzdGF0dXMudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBsb3dlci5zdGFydHNXaXRoKFwicnVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbGFiZWxzIG9iamVjdCBoYXMgYWxsIG9mIHRoZSBrZXkvdmFsdWUgcGFpcnMgZnJvbSB0aGUgc2VsZWN0b3JcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rvck1hdGNoZXMoc2VsZWN0b3IsIGxhYmVscykge1xuICAgIGlmIChhbmd1bGFyLmlzT2JqZWN0KGxhYmVscykpIHtcbiAgICAgIHZhciBhbnN3ZXIgPSB0cnVlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChzZWxlY3RvciwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKGFuc3dlciAmJiBsYWJlbHNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBhbnN3ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYW5zd2VyICYmIGNvdW50ID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwb2RTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIGdldFN0YXR1cyhwb2QpO1xuICB9XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbmRlY2xhcmUgdmFyIE9TT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgR29vZ2xlT0F1dGhDb25maWc6YW55O1xuZGVjbGFyZSB2YXIgS2V5Y2xvYWtDb25maWc6YW55O1xuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpQ29uZmlnJyxcbiAgICBkZXBlbmRzOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICBLOFNfUFJFRklYID0gQ29yZS50cmltTGVhZGluZyhDb3JlLnBhdGhHZXQob3NDb25maWcsIFsnYXBpJywgJ2s4cycsICdwcmVmaXgnXSkgfHwgSzhTX1BSRUZJWCwgJy8nKTtcbiAgICAgIE9TX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdvcGVuc2hpZnQnLCAncHJlZml4J10pIHx8IE9TX1BSRUZJWCwgJy8nKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soe1xuICAgIG5hbWU6ICdLdWJlcm5ldGVzQXBpSW5pdCcsXG4gICAgdGFzazogKG5leHQpID0+IHtcbiAgICAgICQuZ2V0U2NyaXB0KCdvc2NvbnNvbGUvY29uZmlnLmpzJylcbiAgICAgICAgLmRvbmUoKHNjcmlwdCwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgIHZhciBjb25maWc6S3ViZXJuZXRlc0NvbmZpZyA9IEt1YmVybmV0ZXNBUEkub3NDb25maWcgPSB3aW5kb3dbJ09QRU5TSElGVF9DT05GSUcnXTtcbiAgICAgICAgICBsb2cuZGVidWcoXCJGZXRjaGVkIE9BdXRoIGNvbmZpZzogXCIsIGNvbmZpZyk7XG4gICAgICAgICAgdmFyIG1hc3RlcjpzdHJpbmcgPSBjb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICBpZiAoIW1hc3RlciAmJiBjb25maWcuYXBpICYmIGNvbmZpZy5hcGkuazhzKSB7XG4gICAgICAgICAgICB2YXIgbWFzdGVyVXJpID0gbmV3IFVSSSgpLmhvc3QoY29uZmlnLmFwaS5rOHMuaG9zdFBvcnQpLnBhdGgoXCJcIikucXVlcnkoXCJcIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmFwaS5rOHMucHJvdG8pIHtcbiAgICAgICAgICAgICAgbWFzdGVyVXJpLnByb3RvY29sKGNvbmZpZy5hcGkuazhzLnByb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hc3RlciA9IG1hc3RlclVyaS50b1N0cmluZygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIE9TT0F1dGhDb25maWcgPSBjb25maWcub3BlbnNoaWZ0O1xuICAgICAgICAgIEdvb2dsZU9BdXRoQ29uZmlnID0gY29uZmlnLmdvb2dsZTtcbiAgICAgICAgICBLZXljbG9ha0NvbmZpZyA9IGNvbmZpZy5rZXljbG9haztcblxuICAgICAgICAgIGlmIChPU09BdXRoQ29uZmlnICYmICFtYXN0ZXIpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXV0aC5tYXN0ZXJfdXJpIG5vIGxvbmdlciB1c2VkIHJpZ2h0P1xuICAgICAgICAgICAgLy8gbWFzdGVyID0gT1NPQXV0aENvbmZpZy5tYXN0ZXJfdXJpO1xuICAgICAgICAgICAgaWYgKCFtYXN0ZXIpIHtcbiAgICAgICAgICAgICAgdmFyIG9hdXRoX2F1dGhvcml6ZV91cmkgPSBPU09BdXRoQ29uZmlnLm9hdXRoX2F1dGhvcml6ZV91cmk7XG4gICAgICAgICAgICAgIGlmIChvYXV0aF9hdXRob3JpemVfdXJpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0ZXh0LmluZGV4T2YoXCI6Ly9cIik7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGlkeCArPSAzO1xuICAgICAgICAgICAgICAgICAgaWR4ID0gdGV4dC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzdGVyID0gdGV4dC5zdWJzdHJpbmcoMCwgKytpZHgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoKCFLdWJlcm5ldGVzQVBJLm1hc3RlclVybCB8fCBLdWJlcm5ldGVzQVBJLm1hc3RlclVybCA9PT0gXCIvXCIpICYmICghbWFzdGVyIHx8IG1hc3RlciA9PT0gXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBsZXRzIGRlZmF1bHQgdGhlIG1hc3RlciB0byB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgaG9zdC9wb3J0XG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBtYXN0ZXIgdXJsIGlzIFwiL1wiIGFuZCB3ZSBhcmVcbiAgICAgICAgICAgIC8vIHNlcnZpbmcgdXAgc3RhdGljIGNvbnRlbnQgZnJvbSBpbnNpZGUgL2FwaS92MS9uYW1lc3BhY2VzL2RlZmF1bHQvc2VydmljZXMvZmFicmljOCBvciBzb21ldGhpbmcgbGlrZSB0aGF0XG4gICAgICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICBtYXN0ZXIgPSBuZXcgVVJJKGhyZWYpLnF1ZXJ5KFwiXCIpLnBhdGgoXCJcIikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hc3Rlcikge1xuICAgICAgICAgICAgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPSBtYXN0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSlcbiAgICAgIC5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsb2cuZGVidWcoXCJFcnJvciBmZXRjaGluZyBLdWJlcm5ldGVzIGNvbmZpZzogXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB0cnVlKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKCduZ1Jlc291cmNlJyk7XG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5hZGRNb2R1bGUocGx1Z2luTmFtZSk7XG5cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpSGVscGVycy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpUGx1Z2luLnRzXCIvPlxuXG5tb2R1bGUgS3ViZXJuZXRlc0FQSSB7XG5cbiAgdmFyIGxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzJyk7XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlID8gbmFtZXNwYWNlICsgJy0nICsga2luZCA6IGtpbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVTZW5kKHJlcXVlc3QpIHtcbiAgICB2YXIgdG9rZW4gPSBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBvbGxpbmdPbmx5ID0gW1dhdGNoVHlwZXMuUFJPSkVDVFMsIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNX1RBR1NdO1xuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNzUsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgICBwcml2YXRlIF9lZTpFdmVudEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vYmplY3RzOkFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGtpbmQ6c3RyaW5nLCBuYW1lc3BhY2U/OnN0cmluZykge1xuICAgICAgdmFyIGxvZ2dlck5hbWUgPSAnazhzLW9iamVjdHMvJyArIChuYW1lc3BhY2UgPyBVcmxIZWxwZXJzLmpvaW4obmFtZXNwYWNlLCBraW5kKSA6IGtpbmQpO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgICB0aGlzLl9lZSA9IHNtb2tlc2lnbmFscy5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYgKHRoaXMubG9nLmVuYWJsZWRGb3IoTG9nZ2VyLkRFQlVHKSkge1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQURERUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcImFkZGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuTU9ESUZJRUQsIChvYmplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm1vZGlmaWVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuREVMRVRFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiZGVsZXRlZCBvYmplY3Q6IFwiLCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIm9iamVjdHMgY2hhbmdlZDogXCIsIG9iamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BTlksIChvYmplY3RzKSA9PiB7XG4gICAgICAgIHZhciBpbml0aWFsaXplZCA9IHRoaXMuaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLklOSVQsIHRoaXMuX29iamVjdHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvYmplY3RzKG9ianM6YW55W10pIHtcbiAgICAgIHRoaXMuX29iamVjdHMubGVuZ3RoID0gMDtcbiAgICAgIF8uZm9yRWFjaChvYmpzLCAob2JqKSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdHMucHVzaChvYmopO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmFtZWRJdGVtKGl0ZW06YW55KSB7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lZEl0ZW0obmFtZTpzdHJpbmcpIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGhpcy5fb2JqZWN0cywgKG9iajphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE5hbWUob2JqKSA9PT0gbmFtZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRlZChvYmplY3QpIHtcbiAgICAgIGlmIChfLmFueSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllZChvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9vYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFEREVELCBvYmplY3QpO1xuICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBtb2RpZmllZChvYmplY3QpIHtcbiAgICAgIGlmICghXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuYWRkZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXy5mb3JFYWNoKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgaWYgKGVxdWFscyhvYmosIG9iamVjdCkpIHtcbiAgICAgICAgICBhbmd1bGFyLmNvcHkob2JqZWN0LCBvYmopO1xuICAgICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLk1PRElGSUVELCBvYmplY3QpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlbGV0ZWQob2JqZWN0KSB7XG4gICAgICB2YXIgZGVsZXRlZCA9IF8ucmVtb3ZlKHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkRFTEVURUQsIGRlbGV0ZWRbMF0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGludGVyZmFjZSBDb21wYXJlUmVzdWx0IHtcbiAgICBhZGRlZDpBcnJheTxhbnk+O1xuICAgIG1vZGlmaWVkOkFycmF5PGFueT47XG4gICAgZGVsZXRlZDpBcnJheTxhbnk+O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZShvbGQ6QXJyYXk8YW55PiwgX25ldzpBcnJheTxhbnk+KTpDb21wYXJlUmVzdWx0IHtcbiAgICB2YXIgYW5zd2VyID0gPENvbXBhcmVSZXN1bHQ+IHtcbiAgICAgIGFkZGVkOiBbXSxcbiAgICAgIG1vZGlmaWVkOiBbXSxcbiAgICAgIGRlbGV0ZWQ6IFtdXG4gICAgfTtcbiAgICBfLmZvckVhY2goX25ldywgKG5ld09iaikgPT4ge1xuICAgICAgdmFyIG9sZE9iaiA9IF8uZmluZChvbGQsIChvKSA9PiBlcXVhbHMobywgbmV3T2JqKSk7XG4gICAgICBpZiAoIW9sZE9iaikge1xuICAgICAgICBhbnN3ZXIuYWRkZWQucHVzaChuZXdPYmopO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYW5ndWxhci50b0pzb24ob2xkT2JqKSAhPT0gYW5ndWxhci50b0pzb24obmV3T2JqKSkge1xuICAgICAgICBhbnN3ZXIubW9kaWZpZWQucHVzaChuZXdPYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF8uZm9yRWFjaChvbGQsIChvbGRPYmopID0+IHtcbiAgICAgIHZhciBuZXdPYmogPSBfLmZpbmQoX25ldywgKG8pID0+IGVxdWFscyhvLCBvbGRPYmopKTtcbiAgICAgIGlmICghbmV3T2JqKSB7XG4gICAgICAgIGFuc3dlci5kZWxldGVkLnB1c2gob2xkT2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogTWFuYWdlcyBwb2xsaW5nIHRoZSBzZXJ2ZXIgZm9yIG9iamVjdHMgdGhhdCBkb24ndCBzdXBwb3J0IHdlYnNvY2tldCBjb25uZWN0aW9uc1xuICAgKi9cbiAgY2xhc3MgT2JqZWN0UG9sbGVyIHtcblxuICAgIHByaXZhdGUgX2xhc3RGZXRjaCA9IDxBcnJheTxhbnk+PiBbXTtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbCA9IDUwMDA7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB0Q2FuY2VsOmFueSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFVSTDpzdHJpbmcsIHByaXZhdGUgaGFuZGxlcjpXU0hhbmRsZXIpIHtcbiAgICAgIHRoaXMubG9nID0gbG9nOyAvLyBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cy8nICsgZ2V0S2V5KGhhbmRsZXIuY29sbGVjdGlvbi5raW5kLCBoYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlKSk7XG4gICAgICB0aGlzLl9sYXN0RmV0Y2ggPSB0aGlzLmhhbmRsZXIubGlzdC5vYmplY3RzO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGRvR2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBcbiAgICAgICQuYWpheCh0aGlzLnJlc3RVUkwsIDxhbnk+e1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpdGVtcyAgPSAoZGF0YSAmJiBkYXRhLml0ZW1zKSA/IGRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gY29tcGFyZSh0aGlzLl9sYXN0RmV0Y2gsIGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLl9sYXN0RmV0Y2ggPSBpdGVtcztcbiAgICAgICAgICBfLmZvckluKHJlc3VsdCwgKGl0ZW1zOmFueVtdLCBhY3Rpb246c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfLmZvckVhY2goaXRlbXMsIChpdGVtOmFueSkgPT4ge1xuICAgICAgICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oe1xuICAgICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICBvYmplY3Q6IF8uY2xvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLm9ubWVzc2FnZShldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvL2xvZy5kZWJ1ZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlcnJvciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyaWVzID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkVycm9yIHBvbGxpbmcsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzICsgMSwgXCIgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICB9LCAxKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnRDYW5jZWwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudENhbmNlbCk7XG4gICAgICAgIHRoaXMudENhbmNlbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ29ubmVjdGlvbiBjbG9zZWRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlcyB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIGJhY2tlbmQgYW5kIHBhc3NlcyBldmVudHMgdG8gdGhlIE9iamVjdExpc3RcbiAgICovXG4gIGNsYXNzIFdTSGFuZGxlciB7XG4gICAgcHJpdmF0ZSByZXRyaWVzOm51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb25uZWN0VGltZTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc29ja2V0OldlYlNvY2tldDtcbiAgICBwcml2YXRlIHBvbGxlcjpPYmplY3RQb2xsZXI7XG4gICAgcHJpdmF0ZSBzZWxmOkNvbGxlY3Rpb25JbXBsID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xpc3Q6T2JqZWN0TGlzdDtcbiAgICBwcml2YXRlIGxvZzpMb2dnaW5nLkxvZ2dlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGY6Q29sbGVjdGlvbkltcGwpIHtcbiAgICAgIHRoaXMuc2VsZiA9IF9zZWxmO1xuICAgICAgdGhpcy5sb2cgPSBsb2c7IC8vTG9nZ2VyLmdldCgnazhzLW9iamVjdHMvJyArIGdldEtleShfc2VsZi5raW5kLCBfc2VsZi5uYW1lc3BhY2UpKTtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IGxpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdCB8fCA8T2JqZWN0TGlzdD4geyBvYmplY3RzOiBbXSB9O1xuICAgIH1cblxuICAgIGdldCBjb2xsZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRIYW5kbGVycyhzZWxmOldTSGFuZGxlciwgd3M6V2ViU29ja2V0KSB7XG4gICAgICBfLmZvckluKHNlbGYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChfLnN0YXJ0c1dpdGgoa2V5LCAnb24nKSkge1xuICAgICAgICAgIHdzW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGZba2V5XShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICAgIGlmICghXy5pc1N0cmluZyhkYXRhKSkge1xuICAgICAgICBkYXRhID0gYW5ndWxhci50b0pzb24oZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIG9ubWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gdGhpcy5sb2cuZGVidWcoXCJldmVudDogXCIsIGV2ZW50VHlwZSwgXCIgb2JqZWN0OiBcIiwgZGF0YS5vYmplY3QpO1xuICAgICAgdGhpcy5fbGlzdFtldmVudFR5cGVdKGRhdGEub2JqZWN0KTtcbiAgICB9O1xuXG4gICAgb25vcGVuKGV2ZW50KSB7XG4gICAgICB0aGlzLnJldHJpZXMgPSAwO1xuICAgICAgdGhpcy5jb25uZWN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJDb25uZWN0ZWQ6IFwiLCBldmVudCk7XG4gICAgfTtcblxuICAgIG9uY2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJldHJpZXMgPCAzICYmIHRoaXMuY29ubmVjdFRpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5jb25uZWN0VGltZSkgPiA1MDAwKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXRyeWluZyBhZnRlciBjb25uZWN0aW9uIGNsb3NlZDogXCIsIGV2ZW50KTtcbiAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2F0Y2ggXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBkaXNjb25uZWN0ZWQsIHJldHJ5ICNcIiwgdGhpcy5yZXRyaWVzKTtcbiAgICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgICB0aGlzLnNldEhhbmRsZXJzKHNlbGYsIHdzKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYnNvY2tldCBmb3IgXCIsIHRoaXMuc2VsZi5raW5kLCBcIiBjbG9zZWQsIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50Lndhc0NsZWFuKSB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJTd2l0Y2hpbmcgdG8gcG9sbGluZyBtb2RlXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgICB0aGlzLnBvbGxlciA9IG5ldyBPYmplY3RQb2xsZXIodGhpcy5zZWxmLnJlc3RVUkwsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucG9sbGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgb25lcnJvcihldmVudCkge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3ZWIgc29ja2V0IGVuY291bnRlcmVkIGVycm9yOiBcIiwgZXZlbnQpO1xuICAgIH1cblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHx8ICh0aGlzLnBvbGxlciAmJiB0aGlzLnBvbGxlci5jb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgLy8gaW4gY2FzZSBhIGN1c3RvbSBVUkwgaXMgZ29pbmcgdG8gYmUgdXNlZFxuICAgICAgaWYgKHRoaXMuc2VsZi5yZXN0VVJMID09PSAnJyAmJiB0aGlzLnNlbGYud3NVUkwgPT09ICcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNvY2tldCAmJiAhdGhpcy5wb2xsZXIpIHtcbiAgICAgICAgaWYgKF8uYW55KHBvbGxpbmdPbmx5LCAoa2luZCkgPT4ga2luZCA9PT0gdGhpcy5zZWxmLmtpbmQpKSB7XG4gICAgICAgICAgdGhpcy5sb2cuaW5mbyhcIlVzaW5nIHBvbGxpbmcgZm9yIGtpbmQ6IFwiLCB0aGlzLnNlbGYua2luZCk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIgPSBuZXcgT2JqZWN0UG9sbGVyKHRoaXMuc2VsZi5yZXN0VVJMLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnBvbGxlci5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkb0Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJDb25uZWN0aW5nIHdlYnNvY2tldCBmb3Iga2luZDogXCIsIHRoaXMuc2VsZi5raW5kKTtcbiAgICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQuYWpheCh0aGlzLnNlbGYucmVzdFVSTCwgPGFueT4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2xpc3Qub2JqZWN0cyA9IGRhdGEuaXRlbXMgfHwgW107XG4gICAgICAgICAgICAgIGRvQ29ubmVjdCgpO1xuICAgICAgICAgICAgfSwgZXJyb3I6IChqcVhIUiwgdGV4dCwgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmFpbGVkIHRvIGZldGNoIGRhdGEgd2hpbGUgY29ubmVjdGluZyB0byBiYWNrZW5kIGZvciB0eXBlOiBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgZG9Db25uZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8sIGFzc3VtZSBpdCdzIGFscmVhZHkgY2xvc2VkXG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb2xsZXIpIHtcbiAgICAgICAgdGhpcy5wb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2xsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogSW1wbGVtZW50cyB0aGUgZXh0ZXJuYWwgQVBJIGZvciB3b3JraW5nIHdpdGggazhzIGNvbGxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW1wbCBpbXBsZW1lbnRzIENvbGxlY3Rpb24ge1xuXG4gICAgcHJpdmF0ZSBfa2luZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZXNwYWNlOnN0cmluZztcbiAgICBwcml2YXRlIF9wYXRoOnN0cmluZztcbiAgICBwcml2YXRlIF9hcGlWZXJzaW9uOnN0cmluZztcbiAgICBwcml2YXRlIGhhbmRsZXJzOldTSGFuZGxlciA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGxpc3Q6T2JqZWN0TGlzdCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgICB0aGlzLl9raW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgdGhpcy5fYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbjtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IG9wdGlvbnMubmFtZXNwYWNlIHx8IG51bGw7XG5cbiAgICAgIHZhciBwcmVmID0gdGhpcy5nZXRQcmVmaXgoKTtcblxuICAgICAgaWYgKHRoaXMuX25hbWVzcGFjZSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsICduYW1lc3BhY2VzJywgdGhpcy5fbmFtZXNwYWNlLCB0aGlzLl9raW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBVcmxIZWxwZXJzLmpvaW4ocHJlZiwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3Qob3B0aW9ucy5raW5kLCBvcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICB0aGlzLmhhbmRsZXJzLmxpc3QgPSBsaXN0O1xuICAgIH07XG5cbiAgICBwcml2YXRlIGdldCBfcmVzdFVybCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXJsRnVuY3Rpb24gJiYgYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbikpIHtcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoYW5zd2VyID09PSBudWxsIHx8ICFhbnN3ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFVSSShhbnN3ZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkkoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dzVXJsKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cmxGdW5jdGlvbiAmJiBhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKSkge1xuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5vcHRpb25zLnVybEZ1bmN0aW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG51bGwgfHwgIWFuc3dlcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3c1VybChhbnN3ZXIpLnF1ZXJ5KDxhbnk+IHtcbiAgICAgICAgICB3YXRjaDogdHJ1ZSxcbiAgICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3c1VybChVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKS5xdWVyeSg8YW55PiB7XG4gICAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgICAgYWNjZXNzX3Rva2VuOiBIYXd0aW9PQXV0aC5nZXRPQXV0aFRva2VuKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEtleSgpIHtcbiAgICAgIHJldHVybiBnZXRLZXkodGhpcy5fa2luZCwgdGhpcy5fbmFtZXNwYWNlKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCB3c1VSTCgpIHtcbiAgICAgIHJldHVybiAodGhpcy5fd3NVcmwgfHwgXCJcIikudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuICh0aGlzLl9yZXN0VXJsIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIGdldCBuYW1lc3BhY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZXNwYWNlO1xuICAgIH07XG5cbiAgICBnZXQga2luZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9raW5kO1xuICAgIH07XG5cbiAgICBnZXQgY29ubmVjdGVkKCk6Ym9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5jb25uZWN0ZWQ7XG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25uZWN0KCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLmNvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmhhbmRsZXJzO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExhYmVsRmlsdGVyKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkLCBsYWJlbFNlbGVjdG9yOkxhYmVsTWFwKSB7XG4gICAgICBsb2cuZGVidWcoXCJBZGRpbmcgbGFiZWwgZmlsdGVyOiBcIiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB2YXIgY2JPbGQgPSBjYjtcbiAgICAgIHJldHVybiAoZGF0YTphbnlbXSkgPT4ge1xuICAgICAgICBkYXRhID0gZmlsdGVyQnlMYWJlbChkYXRhLCBsYWJlbFNlbGVjdG9yKTtcbiAgICAgICAgY2JPbGQoZGF0YSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCwgbGFiZWxTZWxlY3Rvcj86TGFiZWxNYXApIHtcbiAgICAgIGlmIChsYWJlbFNlbGVjdG9yKSB7XG4gICAgICAgIGNiID0gdGhpcy5hZGRMYWJlbEZpbHRlcihjYiwgbGFiZWxTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uY2UoV2F0Y2hBY3Rpb25zLklOSVQsIGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGdldFByZWZpeCgpIHtcbiAgICAgIHZhciBwcmVmID0gcHJlZml4Rm9yS2luZCh0aGlzLl9raW5kKTtcbiAgICAgIGlmICghcHJlZikge1xuICAgICAgICBpZiAodGhpcy5fYXBpVmVyc2lvbiAmJiBfLnN0YXJ0c1dpdGgodGhpcy5fYXBpVmVyc2lvbiwgJ2V4dGVuc2lvbnMnKSkge1xuICAgICAgICAgIHByZWYgPSBVcmxIZWxwZXJzLmpvaW4oSzhTX0VYVF9QUkVGSVgsIHRoaXMuX2FwaVZlcnNpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBraW5kOiAnICsgdGhpcy5fa2luZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmVmO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzdFVybEZvcihpdGVtOmFueSwgdXNlTmFtZTpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXROYW1lKGl0ZW0pO1xuICAgICAgaWYgKHVzZU5hbWUgJiYgIW5hbWUpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiTmFtZSBtaXNzaW5nIGZyb20gaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdmFyIHVybCA9IFVybEhlbHBlcnMuam9pbih0aGlzLl9yZXN0VXJsLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKG5hbWVzcGFjZWQodG9Db2xsZWN0aW9uTmFtZShpdGVtLmtpbmQpKSkge1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZ2V0TmFtZXNwYWNlKGl0ZW0pIHx8IHRoaXMuX25hbWVzcGFjZTtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLmdldFByZWZpeCgpLCAnbmFtZXNwYWNlcycsIG5hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9XG4gICAgICBpZiAodXNlTmFtZSkge1xuICAgICAgICB1cmwgPSBVcmxIZWxwZXJzLmpvaW4odXJsLCBuYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy8gY29udGludWFsbHkgZ2V0IHVwZGF0ZXNcbiAgICBwdWJsaWMgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQsIGxhYmVsU2VsZWN0b3I/OkxhYmVsTWFwKTooZGF0YTphbnlbXSkgPT4gdm9pZCB7XG4gICAgICBpZiAobGFiZWxTZWxlY3Rvcikge1xuICAgICAgICBjYiA9IHRoaXMuYWRkTGFiZWxGaWx0ZXIoY2IsIGxhYmVsU2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdC5pbml0aWFsaXplZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjYih0aGlzLmxpc3Qub2JqZWN0cyk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdC5ldmVudHMub24oV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgICAgcmV0dXJuIGNiO1xuICAgIH07XG5cbiAgICBwdWJsaWMgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgdGhpcy5saXN0LmV2ZW50cy5vZmYoV2F0Y2hBY3Rpb25zLkFOWSwgY2IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgbWV0aG9kID0gJ1BVVCc7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaGFzTmFtZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IG9iamVjdFxuICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1cGRhdGluZyBhbiBleGlzdGluZyBvYmplY3RcbiAgICAgICAgdmFyIHJlc291cmNlVmVyc2lvbiA9IGl0ZW0ubWV0YWRhdGEucmVzb3VyY2VWZXJzaW9uO1xuICAgICAgICBpZiAoIXJlc291cmNlVmVyc2lvbikge1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5saXN0LmdldE5hbWVkSXRlbShnZXROYW1lKGl0ZW0pKTtcbiAgICAgICAgICByZXNvdXJjZVZlcnNpb24gPSBjdXJyZW50Lm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgICBpdGVtLm1ldGFkYXRhLnJlc291cmNlVmVyc2lvbiA9IHJlc291cmNlVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3VzdG9tIGNoZWNrcyBmb3Igc3BlY2lmaWMgY2FzZXNcbiAgICAgIHN3aXRjaCAodGhpcy5fa2luZCkge1xuICAgICAgICBjYXNlIFdhdGNoVHlwZXMuU0VSVklDRVM6XG4gICAgICAgICAgaWYgKGl0ZW0uc3BlYy5jbHVzdGVySVAgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgaXRlbS5zcGVjLmNsdXN0ZXJJUDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgICQuYWpheCh1cmwsIDxhbnk+IHtcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKGl0ZW0pLFxuICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBcbiAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJGYWlsZWQgdG8gY3JlYXRlIG9yIHVwZGF0ZSwgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KGpxWEhSKTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGRlZChpdGVtKTtcbiAgICAgICAgICAgIHRoaXMubGlzdC50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUob3B0aW9uczogYW55LCBuYW1lc3BhY2U/OiBhbnkpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtpbmQgPSBvcHRpb25zO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICBpZiAoYW5ndWxhci5pc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICBraW5kID0gb3B0aW9ucy5raW5kO1xuICAgICAgICBuYW1lc3BhY2UgPSBvcHRpb25zLm5hbWVzcGFjZSB8fCBuYW1lc3BhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfb3B0aW9ucyA9IHtcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGtpbmQsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoa2V5IGluIHRoaXMuX2NsaWVudHMpIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgY2xpZW50LmFkZFJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHVybmluZyBleGlzdGluZyBjbGllbnQgZm9yIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjbGllbnQucmVmQ291bnQpO1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xpZW50ID0gbmV3IENsaWVudEluc3RhbmNlKG5ldyBDb2xsZWN0aW9uSW1wbChfb3B0aW9ucykpO1xuICAgICAgICBjbGllbnQuYWRkUmVmKCk7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwiQ3JlYXRpbmcgbmV3IGNsaWVudCBmb3Iga2V5OiBcIiwga2V5LCBcIiByZWZjb3VudCBpczogXCIsIGNsaWVudC5yZWZDb3VudCk7XG4gICAgICAgIHRoaXMuX2NsaWVudHNba2V5XSA9IGNsaWVudDtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPikge1xuICAgICAgXy5mb3JFYWNoKGhhbmRsZXMsIChoYW5kbGUpID0+IHtcbiAgICAgICAgY2xpZW50LnVud2F0Y2goaGFuZGxlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGtleSA9IGNsaWVudC5nZXRLZXkoKTtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2xpZW50cykge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgYy5yZW1vdmVSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZW1vdmVkIHJlZmVyZW5jZSB0byBjbGllbnQgd2l0aCBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgYy5yZWZDb3VudCk7XG4gICAgICAgIGlmIChjLmRpc3Bvc2FibGUoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgICAgYy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJEZXN0cm95ZWQgY2xpZW50IGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHZhciBLOFNDbGllbnRGYWN0b3J5Oks4U0NsaWVudEZhY3RvcnkgPSBuZXcgSzhTQ2xpZW50RmFjdG9yeUltcGwoKTtcblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIEs4U0NsaWVudEZhY3Rvcnk7XG4gIH0pO1xuXG4gIHZhciBOT19LSU5EID0gXCJObyBraW5kIGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVCA9IFwiTm8gb2JqZWN0IGluIHN1cHBsaWVkIG9wdGlvbnNcIjtcbiAgdmFyIE5PX09CSkVDVFMgPSBcIk5vIG9iamVjdHMgaW4gbGlzdCBvYmplY3RcIjtcblxuICAvKlxuICAgKiBTdGF0aWMgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgazhzIG9iajNjdHNcbiAgICovXG5cbiAgLypcbiAgICogR2V0IGEgY29sbGVjdGlvblxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldChvcHRpb25zOks4U09wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMua2luZCkge1xuICAgICAgdGhyb3cgTk9fS0lORDtcbiAgICB9XG4gICAgdmFyIGNsaWVudCA9IEs4U0NsaWVudEZhY3RvcnkuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHZhciBzdWNjZXNzID0gKGRhdGE6YW55W10pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9XG4gICAgY2xpZW50LmdldChzdWNjZXNzLCBvcHRpb25zLmxhYmVsU2VsZWN0b3IpO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnM6YW55LCBhY3Rpb246KG9iamVjdDphbnksIHN1Y2Nlc3M6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcjooZXJyOmFueSkgPT4gdm9pZCkgPT4gdm9pZCkge1xuICAgIGlmICghb3B0aW9ucy5vYmplY3Qub2JqZWN0cykge1xuICAgICAgdGhyb3cgTk9fT0JKRUNUUztcbiAgICB9XG4gICAgdmFyIGFuc3dlciA9IHt9O1xuICAgIHZhciBvYmplY3RzID0gXy5jbG9uZURlZXAob3B0aW9ucy5vYmplY3Qub2JqZWN0cyk7XG4gICAgZnVuY3Rpb24gYWRkUmVzdWx0KGlkLCBkYXRhKSB7XG4gICAgICBhbnN3ZXJbaWRdID0gZGF0YTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9nLmRlYnVnKFwicHJvY2Vzc2VkIGFsbCBvYmplY3RzLCByZXR1cm5pbmcgc3RhdHVzXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhhbnN3ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgc3VjY2VzcyBjYWxsYmFjayB0aHJldyBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHMuc2hpZnQoKTtcbiAgICAgIGxvZy5kZWJ1ZyhcIlByb2Nlc3Npbmcgb2JqZWN0OiBcIiwgZ2V0TmFtZShvYmplY3QpKTtcbiAgICAgIHZhciBzdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgIGFkZFJlc3VsdChmdWxsTmFtZShvYmplY3QpLCBkYXRhKTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZGF0YSkgPT4ge1xuICAgICAgYWRkUmVzdWx0KGZ1bGxOYW1lKG9iamVjdCksIGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGFjdGlvbihvYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zOmFueSkge1xuICAgIGxvZy5kZWJ1ZyhcIk5vcm1hbGl6aW5nIHN1cHBsaWVkIG9wdGlvbnM6IFwiLCBvcHRpb25zKTtcbiAgICAvLyBsZXQncyB0cnkgYW5kIHN1cHBvcnQgYWxzbyBqdXN0IHN1cHBseWluZyBrOHMgb2JqZWN0cyBkaXJlY3RseVxuICAgIGlmIChvcHRpb25zLm1ldGFkYXRhIHx8IGdldEtpbmQob3B0aW9ucykgPT09IHRvS2luZE5hbWUoV2F0Y2hUeXBlcy5MSVNUKSkge1xuICAgICAgdmFyIG9iamVjdCA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBvYmplY3Q6IG9iamVjdFxuICAgICAgfTtcbiAgICAgIGlmIChvYmplY3Qub2JqZWN0cykge1xuICAgICAgICBvcHRpb25zLmtpbmQgPSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5vYmplY3QpIHtcbiAgICAgIHRocm93IE5PX09CSkVDVDtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm9iamVjdC5raW5kKSB7XG4gICAgICBpZiAob3B0aW9ucy5raW5kKSB7XG4gICAgICAgIG9wdGlvbnMub2JqZWN0LmtpbmQgPSB0b0tpbmROYW1lKG9wdGlvbnMua2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBOT19LSU5EO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2cuZGVidWcoXCJPcHRpb25zIG9iamVjdCBub3JtYWxpemVkOiBcIiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVsKG9wdGlvbnM6YW55KSB7XG4gICAgb3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgLy8gc3VwcG9ydCBkZWxldGluZyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgIGlmIChvcHRpb25zLm9iamVjdC5raW5kID09PSB0b0tpbmROYW1lKFdhdGNoVHlwZXMuTElTVCkpIHtcbiAgICAgIGhhbmRsZUxpc3RBY3Rpb24ob3B0aW9ucywgKG9iamVjdDphbnksIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgIGRlbCh7XG4gICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5raW5kID0gb3B0aW9ucy5raW5kIHx8IHRvQ29sbGVjdGlvbk5hbWUob3B0aW9ucy5vYmplY3QpO1xuICAgIG9wdGlvbnMubmFtZXNwYWNlID0gbmFtZXNwYWNlZChvcHRpb25zLmtpbmQpID8gb3B0aW9ucy5uYW1lc3BhY2UgfHwgZ2V0TmFtZXNwYWNlKG9wdGlvbnMub2JqZWN0KSA6IG51bGw7XG4gICAgb3B0aW9ucy5hcGlWZXJzaW9uID0gb3B0aW9ucy5hcGlWZXJzaW9uIHx8IGdldEFwaVZlcnNpb24ob3B0aW9ucy5vYmplY3QpO1xuICAgIHZhciBjbGllbnQgPSBLOFNDbGllbnRGYWN0b3J5LmNyZWF0ZShvcHRpb25zKTtcbiAgICB2YXIgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBsb2cuZGVidWcoXCJTdXBwbGllZCBzdWNjZXNzIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgfTtcbiAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgbG9nLmRlYnVnKFwiU3VwcGxpZWQgZXJyb3IgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5kZWxldGUob3B0aW9ucy5vYmplY3QsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZC9yZXBsYWNlIGFuIG9iamVjdCwgb3IgYSBsaXN0IG9mIG9iamVjdHNcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXQob3B0aW9uczphbnkpIHtcbiAgICBvcHRpb25zID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgICAvLyBzdXBwb3J0IHB1dHRpbmcgYSBsaXN0IG9mIG9iamVjdHNcbiAgICBpZiAob3B0aW9ucy5vYmplY3Qua2luZCA9PT0gdG9LaW5kTmFtZShXYXRjaFR5cGVzLkxJU1QpKSB7XG4gICAgICBoYW5kbGVMaXN0QWN0aW9uKG9wdGlvbnMsIChvYmplY3Q6YW55LCBzdWNjZXNzLCBlcnJvcikgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMua2luZCA9IG9wdGlvbnMua2luZCB8fCB0b0NvbGxlY3Rpb25OYW1lKG9wdGlvbnMub2JqZWN0KTtcbiAgICBvcHRpb25zLm5hbWVzcGFjZSA9IG5hbWVzcGFjZWQob3B0aW9ucy5raW5kKSA/IG9wdGlvbnMubmFtZXNwYWNlIHx8IGdldE5hbWVzcGFjZShvcHRpb25zLm9iamVjdCkgOiBudWxsO1xuICAgIG9wdGlvbnMuYXBpVmVyc2lvbiA9IG9wdGlvbnMuYXBpVmVyc2lvbiB8fCBnZXRBcGlWZXJzaW9uKG9wdGlvbnMub2JqZWN0KTtcbiAgICB2YXIgY2xpZW50ID0gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgY2xpZW50LmdldCgob2JqZWN0cykgPT4ge1xuICAgICAgdmFyIHN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIHN1Y2Nlc3MgY2FsbGJhY2sgdGhyZXcgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koY2xpZW50KTtcbiAgICAgIH07XG4gICAgICB2YXIgZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlN1cHBsaWVkIGVycm9yIGNhbGxiYWNrIHRocmV3IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgSzhTQ2xpZW50RmFjdG9yeS5kZXN0cm95KGNsaWVudCk7XG4gICAgICB9O1xuICAgICAgY2xpZW50LnB1dChvcHRpb25zLm9iamVjdCwgc3VjY2VzcywgZXJyb3IpO1xuICAgIH0pO1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2F0Y2gob3B0aW9uczpLOFNPcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmtpbmQpIHtcbiAgICAgIHRocm93IE5PX0tJTkQ7XG4gICAgfVxuICAgIHZhciBjbGllbnQgPSA8Q29sbGVjdGlvbj4gSzhTQ2xpZW50RmFjdG9yeS5jcmVhdGUob3B0aW9ucyk7XG4gICAgdmFyIGhhbmRsZSA9IGNsaWVudC53YXRjaChvcHRpb25zLnN1Y2Nlc3MsIG9wdGlvbnMubGFiZWxTZWxlY3Rvcik7XG4gICAgdmFyIHNlbGYgPSB7XG4gICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgZGlzY29ubmVjdDogKCkgPT4ge1xuICAgICAgICBLOFNDbGllbnRGYWN0b3J5LmRlc3Ryb3koc2VsZi5jbGllbnQsIHNlbGYuaGFuZGxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5jb25uZWN0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
