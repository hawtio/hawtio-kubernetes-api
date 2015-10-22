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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaUludGVyZmFjZXMudHMiLCJrdWJlcm5ldGVzLWFwaS90cy9rdWJlcm5ldGVzQXBpR2xvYmFscy50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2t1YmVybmV0ZXNBcGlIZWxwZXJzLnRzIiwia3ViZXJuZXRlcy1hcGkvdHMva3ViZXJuZXRlc0FwaVBsdWdpbi50cyIsImt1YmVybmV0ZXMtYXBpL3RzL2NsaWVudC50cyJdLCJuYW1lcyI6WyJLdWJlcm5ldGVzQVBJIiwiS3ViZXJuZXRlc0FQSS5jb25zdHMiLCJLdWJlcm5ldGVzQVBJLmNvbnN0cy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuY29uc3RzLk5BTUVTUEFDRV9TVE9SQUdFX0tFWSIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5FTkRQT0lOVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuRVZFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLk5BTUVTUEFDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuTk9ERVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QT0RTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlNFQ1JFVFMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuU0VSVklDRV9BQ0NPVU5UUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5URU1QTEFURVMiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuUk9VVEVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkJVSUxEX0NPTkZJR1MiLCJLdWJlcm5ldGVzQVBJLldhdGNoVHlwZXMuQlVJTERTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLkRFUExPWU1FTlRfQ09ORklHUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5JTUFHRV9TVFJFQU1TIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDSUVTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5QUk9KRUNUUyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTIiwiS3ViZXJuZXRlc0FQSS5XYXRjaFR5cGVzLlJPTEVTIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMiLCJLdWJlcm5ldGVzQVBJLk5hbWVzcGFjZWRUeXBlcy5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzIiwiS3ViZXJuZXRlc0FQSS5OYW1lc3BhY2VkVHlwZXMub3NUeXBlcyIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BTlkiLCJLdWJlcm5ldGVzQVBJLldhdGNoQWN0aW9ucy5BRERFRCIsIkt1YmVybmV0ZXNBUEkuV2F0Y2hBY3Rpb25zLk1PRElGSUVEIiwiS3ViZXJuZXRlc0FQSS5XYXRjaEFjdGlvbnMuREVMRVRFRCIsIkt1YmVybmV0ZXNBUEkuYXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5vc0FwaVByZWZpeCIsIkt1YmVybmV0ZXNBUEkubWFzdGVyQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpUHJlZml4IiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlQcmVmaXgiLCJLdWJlcm5ldGVzQVBJLmFwaUZvcktpbmQiLCJLdWJlcm5ldGVzQVBJLmFwaVZlcnNpb25Gb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5wcmVmaXhGb3JLaW5kIiwiS3ViZXJuZXRlc0FQSS5rdWJlcm5ldGVzQXBpVXJsIiwiS3ViZXJuZXRlc0FQSS5vcGVuc2hpZnRBcGlVcmwiLCJLdWJlcm5ldGVzQVBJLmdldEVycm9yT2JqZWN0IiwiS3ViZXJuZXRlc0FQSS53c1NjaGVtZSIsIkt1YmVybmV0ZXNBUEkud3NVcmwiLCJLdWJlcm5ldGVzQVBJLmVxdWFscyIsIkt1YmVybmV0ZXNBUEkuZ2V0VUlEIiwiS3ViZXJuZXRlc0FQSS5nZXROYW1lc3BhY2UiLCJLdWJlcm5ldGVzQVBJLmdldExhYmVscyIsIkt1YmVybmV0ZXNBUEkuZ2V0TmFtZSIsIkt1YmVybmV0ZXNBUEkuZ2V0S2luZCIsIkt1YmVybmV0ZXNBUEkuZ2V0U2VsZWN0b3IiLCJLdWJlcm5ldGVzQVBJLmdldEhvc3QiLCJLdWJlcm5ldGVzQVBJLmdldFN0YXR1cyIsIkt1YmVybmV0ZXNBUEkuZ2V0UG9ydHMiLCJLdWJlcm5ldGVzQVBJLmdldENyZWF0aW9uVGltZXN0YW1wIiwiS3ViZXJuZXRlc0FQSS5sYWJlbHNUb1N0cmluZyIsIkt1YmVybmV0ZXNBUEkuaXNSdW5uaW5nIiwiS3ViZXJuZXRlc0FQSS5zZWxlY3Rvck1hdGNoZXMiLCJLdWJlcm5ldGVzQVBJLnBvZFN0YXR1cyIsIkt1YmVybmV0ZXNBUEkuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5iZWZvcmVTZW5kIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmluaXRpYWxpemVkIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0LmV2ZW50cyIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5vYmplY3RzIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RMaXN0Lmhhc05hbWVkSXRlbSIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5hZGRlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5tb2RpZmllZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0TGlzdC5kZWxldGVkIiwiS3ViZXJuZXRlc0FQSS5jb21wYXJlIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmNvbm5lY3RlZCIsIkt1YmVybmV0ZXNBUEkuT2JqZWN0UG9sbGVyLmRvR2V0IiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuc3RhcnQiLCJLdWJlcm5ldGVzQVBJLk9iamVjdFBvbGxlci5zdG9wIiwiS3ViZXJuZXRlc0FQSS5PYmplY3RQb2xsZXIuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5saXN0IiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLnNldEhhbmRsZXJzIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuc2VuZCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ubWVzc2FnZSIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9ub3BlbiIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLm9uY2xvc2UiLCJLdWJlcm5ldGVzQVBJLldTSGFuZGxlci5vbmVycm9yIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdGVkIiwiS3ViZXJuZXRlc0FQSS5XU0hhbmRsZXIuY29ubmVjdCIsIkt1YmVybmV0ZXNBUEkuV1NIYW5kbGVyLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25zdHJ1Y3RvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZ2V0S2V5IiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC53c1VSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVSTCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwubmFtZXNwYWNlIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5raW5kIiwiS3ViZXJuZXRlc0FQSS5Db2xsZWN0aW9uSW1wbC5jb25uZWN0ZWQiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmNvbm5lY3QiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmRlc3Ryb3kiLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLmdldCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwucmVzdFVybEZvciIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwud2F0Y2giLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnVud2F0Y2giLCJLdWJlcm5ldGVzQVBJLkNvbGxlY3Rpb25JbXBsLnB1dCIsIkt1YmVybmV0ZXNBUEkuQ29sbGVjdGlvbkltcGwuZGVsZXRlIiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuY29uc3RydWN0b3IiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLnJlZkNvdW50IiwiS3ViZXJuZXRlc0FQSS5DbGllbnRJbnN0YW5jZS5hZGRSZWYiLCJLdWJlcm5ldGVzQVBJLkNsaWVudEluc3RhbmNlLnJlbW92ZVJlZiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuY29sbGVjdGlvbiIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuZGlzcG9zYWJsZSIsIkt1YmVybmV0ZXNBUEkuQ2xpZW50SW5zdGFuY2UuZGVzdHJveSIsIkt1YmVybmV0ZXNBUEkuSzhTQ2xpZW50RmFjdG9yeUltcGwiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmNvbnN0cnVjdG9yIiwiS3ViZXJuZXRlc0FQSS5LOFNDbGllbnRGYWN0b3J5SW1wbC5jcmVhdGUiLCJLdWJlcm5ldGVzQVBJLks4U0NsaWVudEZhY3RvcnlJbXBsLmRlc3Ryb3kiXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDNUQsR0FBRztBQUNILG1FQUFtRTtBQUNuRSxvRUFBb0U7QUFDcEUsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxnREFBZ0Q7QUFDaEQsR0FBRztBQUNILHVFQUF1RTtBQUN2RSxxRUFBcUU7QUFDckUsNEVBQTRFO0FBQzVFLHVFQUF1RTtBQUN2RSxrQ0FBa0M7QUFFbEMsMERBQTBEO0FBQzFELHNEQUFzRDs7QUNoQnRELHVDQUF1QztBQUl0QyxDQUFDO0FBT0QsQ0FBQztBQUVGLElBQU8sYUFBYSxDQW9KbkI7QUFwSkQsV0FBTyxhQUFhLEVBQUMsQ0FBQztJQUVwQkE7UUFBQUM7UUFFQUMsQ0FBQ0E7UUFEQ0Qsc0JBQUlBLHlDQUFxQkE7aUJBQXpCQSxjQUFxQ0UsTUFBTUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxDQUFDQSxDQUFDQTs7O1dBQUFGO1FBQ3ZFQSxhQUFDQTtJQUFEQSxDQUZBRCxBQUVDQyxJQUFBRDtJQUZZQSxvQkFBTUEsU0FFbEJBLENBQUFBO0lBRVVBLHVCQUFTQSxHQUFHQSxJQUFJQSxNQUFNQSxFQUFFQSxDQUFDQTtJQThDckNBO1FBQUFJO1FBMEJBQyxDQUFDQTtRQXpCQUQsc0JBQWtCQSx1QkFBU0E7aUJBQTNCQSxjQUF1Q0UsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7OztXQUFBRjtRQUM1REEsc0JBQWtCQSxvQkFBTUE7aUJBQXhCQSxjQUFvQ0csTUFBTUEsQ0FBQ0EsUUFB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SCxJQUFBNUg7SUFFREEscUJBQU9BLENBQUNBLE9BQU9BLENBQUNBLGtCQUFrQkEsRUFBRUE7UUFDbENBLE1BQU1BLENBQUNBLElBQUlBLG9CQUFvQkEsRUFBRUEsQ0FBQUE7SUFDbkNBLENBQUNBLENBQUNBLENBQUNBO0FBRUxBLENBQUNBLEVBbG1CTSxhQUFhLEtBQWIsYUFBYSxRQWttQm5CIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2hhd3Rpby11dGlsaXRpZXMvZGVmcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xpYnMvaGF3dGlvLW9hdXRoL2RlZnMuZC50c1wiLz5cbiIsIi8vZGVmcyBmb3IgdGhpcmQtcGFydHkgZXZlbnRpbmcgbGlicmFyeVxuXG5pbnRlcmZhY2UgU21va2VTaWduYWxzIHtcbiAgY29udmVydChvYmo6YW55LCBoYW5kbGVycz86YW55KTtcbn07XG5cbmludGVyZmFjZSBFdmVudEVuYWJsZWQge1xuICBvbihldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb25jZShldmVudE5hbWU6c3RyaW5nLCBoYW5kbGVyOkZ1bmN0aW9uKTtcbiAgb2ZmKGV2ZW50TmFtZTpzdHJpbmcsIGhhbmRsZXI6RnVuY3Rpb24pO1xuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pO1xufTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBjbGFzcyBjb25zdHMge1xuICAgIGdldCBOQU1FU1BBQ0VfU1RPUkFHRV9LRVkoKTpzdHJpbmcgeyByZXR1cm4gXCJrOHNTZWxlY3RlZE5hbWVzcGFjZVwiOyB9XG4gIH1cblxuICBleHBvcnQgdmFyIENvbnN0YW50cyA9IG5ldyBjb25zdHMoKTtcblx0XG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb24ge1xuICAgIHByb3RvPzpzdHJpbmc7XG4gICAgaG9zdFBvcnQ6c3RyaW5nO1xuICAgIHByZWZpeDpzdHJpbmc7XG4gIH1cbiAgXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXBpTG9jYXRpb25zIHtcbiAgICBvcGVuc2hpZnQ/OiBBcGlMb2NhdGlvbjtcbiAgICBrOHM/OiBBcGlMb2NhdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NvbmZpZyB7XG4gICAgbWFzdGVyX3VyaT86IHN0cmluZztcbiAgICBhcGk/OiBBcGlMb2NhdGlvbnM7XG4gICAgb3BlbnNoaWZ0PzogT3BlblNoaWZ0T0F1dGhDb25maWc7XG4gICAgZ29vZ2xlPzogR29vZ2xlT0F1dGhDb25maWc7XG4gICAga2V5Y2xvYWs/OiBLZXlDbG9ha0F1dGhDb25maWc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5TaGlmdE9BdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBHb29nbGVPQXV0aENvbmZpZyB7XG4gICAgYXV0aGVudGljYXRpb25VUkk6c3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb25VUkk6c3RyaW5nO1xuICAgIGNsaWVudElkOnN0cmluZztcbiAgICBjbGllbnRTZWNyZXQ6c3RyaW5nO1xuICAgIHJlZGlyZWN0VVJJOnN0cmluZztcbiAgICBzY29wZTpzdHJpbmc7XG4gICAgdG9rZW5VUkk/OnN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgS2V5Q2xvYWtBdXRoQ29uZmlnIHtcbiAgICBvYXV0aF9hdXRob3JpemVfdXJpOnN0cmluZztcbiAgICBvYXV0aF9jbGllbnRfaWQ6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLdWJlcm5ldGVzU3RhdGUge1xuICAgIG5hbWVzcGFjZXM6IEFycmF5PHN0cmluZz47XG4gICAgc2VsZWN0ZWROYW1lc3BhY2U6IHN0cmluZztcbiAgfVxuXG5cdGV4cG9ydCBjbGFzcyBXYXRjaFR5cGVzIHtcblx0XHRwdWJsaWMgc3RhdGljIGdldCBFTkRQT0lOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJlbmRwb2ludHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEVWRU5UUygpOnN0cmluZyB7IHJldHVybiBcImV2ZW50c1wiOyB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgTkFNRVNQQUNFUygpOnN0cmluZyB7IHJldHVybiBcIm5hbWVzcGFjZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IE5PREVTKCk6c3RyaW5nIHsgcmV0dXJuIFwibm9kZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBFUlNJU1RFTlRfVk9MVU1FUygpOnN0cmluZyB7IHJldHVybiBcInBlcnNpc3RlbnR2b2x1bWVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQRVJTSVNURU5UX1ZPTFVNRV9DTEFJTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJwZXJzaXN0ZW50dm9sdW1lY2xhaW1zXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBQT0RTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9kc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgUkVQTElDQVRJT05fQ09OVFJPTExFUlMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXBsaWNhdGlvbmNvbnRyb2xsZXJzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBSRVNPVVJDRV9RVU9UQVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyZXNvdXJjZXF1b3Rhc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgT0FVVEhfQ0xJRU5UUygpOnN0cmluZyB7IHJldHVybiBcIm9hdXRoY2xpZW50c1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgU0VDUkVUUygpOnN0cmluZyB7IHJldHVybiBcInNlY3JldHNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VTKCk6c3RyaW5nIHsgcmV0dXJuIFwic2VydmljZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFNFUlZJQ0VfQUNDT1VOVFMoKTpzdHJpbmcgeyByZXR1cm4gXCJzZXJ2aWNlYWNjb3VudHNcIjsgfVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQgVEVNUExBVEVTKCk6c3RyaW5nIHsgcmV0dXJuIFwidGVtcGxhdGVzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST1VURVMoKTpzdHJpbmcgeyByZXR1cm4gXCJyb3V0ZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEX0NPTkZJR1MoKTpzdHJpbmcgeyByZXR1cm4gXCJidWlsZGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IEJVSUxEUygpOnN0cmluZyB7IHJldHVybiBcImJ1aWxkc1wiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVQTE9ZTUVOVF9DT05GSUdTKCk6c3RyaW5nIHsgcmV0dXJuIFwiZGVwbG95bWVudGNvbmZpZ3NcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IElNQUdFX1NUUkVBTVMoKTpzdHJpbmcgeyByZXR1cm4gXCJpbWFnZXN0cmVhbXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDSUVTKCk6c3RyaW5nIHsgcmV0dXJuIFwicG9saWNpZXNcIjsgfVxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0IFBPTElDWV9CSU5ESU5HUygpOnN0cmluZyB7IHJldHVybiBcInBvbGljeWJpbmRpbmdzXCI7IH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBQUk9KRUNUUygpOnN0cmluZyB7IHJldHVybiBcInByb2plY3RzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFX0JJTkRJTkdTKCk6c3RyaW5nIHsgcmV0dXJuIFwicm9sZWJpbmRpbmdzXCI7IH1cblx0XHRwdWJsaWMgc3RhdGljIGdldCBST0xFUygpOnN0cmluZyB7IHJldHVybiBcInJvbGVzXCI7IH1cblx0fVxuXG4gIGV4cG9ydCBjbGFzcyBOYW1lc3BhY2VkVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGs4c1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLkVORFBPSU5UUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5FVkVOVFMsXG4gICAgICAgIFdhdGNoVHlwZXMuTk9ERVMsXG4gICAgICAgIFdhdGNoVHlwZXMuUEVSU0lTVEVOVF9WT0xVTUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBFUlNJU1RFTlRfVk9MVU1FX0NMQUlNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QT0RTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFUExJQ0FUSU9OX0NPTlRST0xMRVJTLFxuICAgICAgICBXYXRjaFR5cGVzLlJFU09VUkNFX1FVT1RBUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QRVJTSVNURU5UX1ZPTFVNRVMsXG4gICAgICAgIFdhdGNoVHlwZXMuU0VDUkVUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5TRVJWSUNFX0FDQ09VTlRTXG4gICAgICBdO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvc1R5cGVzKCk6QXJyYXk8c3RyaW5nPiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBXYXRjaFR5cGVzLlRFTVBMQVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRF9DT05GSUdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPVVRFUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5CVUlMRFMsXG4gICAgICAgIFdhdGNoVHlwZXMuQlVJTERfQ09ORklHUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ERVBMT1lNRU5UX0NPTkZJR1MsXG4gICAgICAgIFdhdGNoVHlwZXMuSU1BR0VfU1RSRUFNUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5PQVVUSF9DTElFTlRTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDSUVTLFxuICAgICAgICBXYXRjaFR5cGVzLlBPTElDWV9CSU5ESU5HUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5QUk9KRUNUUyxcbiAgICAgICAgV2F0Y2hUeXBlcy5ST0xFX0JJTkRJTkdTLFxuICAgICAgICBXYXRjaFR5cGVzLlJPTEVTXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXHRcblx0ZXhwb3J0IGNsYXNzIFdhdGNoQWN0aW9ucyB7XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQU5ZKCk6c3RyaW5nIHsgcmV0dXJuIFwiKlwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgQURERUQoKTpzdHJpbmcgeyByZXR1cm4gXCJBRERFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgTU9ESUZJRUQoKTpzdHJpbmcgeyByZXR1cm4gXCJNT0RJRklFRFwiOyB9XG5cdFx0cHVibGljIHN0YXRpYyBnZXQgREVMRVRFRCgpOnN0cmluZyB7IHJldHVybiBcIkRFTEVURURcIjsgfVxuXHR9XG5cdFxuXHRleHBvcnQgaW50ZXJmYWNlIE9iamVjdE1hcCB7XG5cdFx0W3VpZDpzdHJpbmddOiBhbnk7XHRcdFxuXHR9XG5cdFxuICBleHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb24ge1xuICAgIHdzVVJMOnN0cmluZztcbiAgICByZXN0VVJMOnN0cmluZztcbiAgICBuYW1lc3BhY2U6IHN0cmluZztcbiAgICBraW5kOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkOiBib29sZWFuO1xuICAgIGNvbm5lY3QoKTtcbiAgICBnZXQoY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgd2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpOnZvaWQ7XG4gICAgdW53YXRjaChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCk6dm9pZDtcbiAgICBwdXQoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKTp2b2lkO1xuICAgIGRlbGV0ZShpdGVtOmFueSwgY2I6KGRhdGE6YW55KSA9PiB2b2lkLCBlcnJvcj86KGVycjphbnkpID0+IHZvaWQpOnZvaWQ7XG4gICAgZ2V0S2V5KCk6c3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBLOFNDbGllbnRGYWN0b3J5IHtcbiAgICBjcmVhdGUoa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86IHN0cmluZyk6Q29sbGVjdGlvbjtcbiAgICBkZXN0cm95KGNsaWVudDpDb2xsZWN0aW9uLCAuLi5oYW5kbGVzOkFycmF5PChkYXRhOmFueVtdKSA9PiB2b2lkPik6dm9pZDtcbiAgfVxuXG5cdFxufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImt1YmVybmV0ZXNBcGlJbnRlcmZhY2VzLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxuXG5kZWNsYXJlIHZhciBzbW9rZXNpZ25hbHM7XG5cbm1vZHVsZSBLdWJlcm5ldGVzQVBJIHtcblxuICBleHBvcnQgdmFyIHBsdWdpbk5hbWUgPSAnS3ViZXJuZXRlc0FQSSc7XG4gIGV4cG9ydCB2YXIgcGx1Z2luUGF0aCA9ICdwbHVnaW5zL2t1YmVybmV0ZXMtYXBpLyc7XG4gIGV4cG9ydCB2YXIgdGVtcGxhdGVQYXRoID0gcGx1Z2luUGF0aCArICdodG1sLyc7XG4gIGV4cG9ydCB2YXIgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldChwbHVnaW5OYW1lKTtcblxuICBleHBvcnQgdmFyIGtlZXBQb2xsaW5nTW9kZWwgPSB0cnVlO1xuXG4gIGV4cG9ydCB2YXIgZGVmYXVsdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcva3ViZXJuZXRlcy5zdmdcIik7XG4gIGV4cG9ydCB2YXIgaG9zdEljb25VcmwgPSBDb3JlLnVybChcIi9pbWcvaG9zdC5zdmdcIik7XG5cbiAgLy8gdGhpcyBnZXRzIHNldCBhcyBhIHByZS1ib290c3RyYXAgdGFza1xuICBleHBvcnQgdmFyIG9zQ29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCB2YXIgbWFzdGVyVXJsID0gXCJcIjtcblxuICBleHBvcnQgdmFyIEs4U19QUkVGSVggPSAnYXBpJztcbiAgZXhwb3J0IHZhciBPU19QUkVGSVggPSAnb2FwaSc7XG5cbiAgZXhwb3J0IHZhciBLOFNfQVBJX1ZFUlNJT04gPSAndjEnO1xuICBleHBvcnQgdmFyIE9TX0FQSV9WRVJTSU9OID0gJ3YxJztcblxuICBleHBvcnQgdmFyIGRlZmF1bHRBcGlWZXJzaW9uID0gSzhTX0FQSV9WRVJTSU9OO1xuICBleHBvcnQgdmFyIGRlZmF1bHRPU0FwaVZlcnNpb24gPSBPU19BUElfVkVSU0lPTjtcblxuICBleHBvcnQgdmFyIGxhYmVsRmlsdGVyVGV4dFNlcGFyYXRvciA9IFwiLFwiO1xuICBleHBvcnQgdmFyIGRlZmF1bHROYW1lc3BhY2UgPSBcImRlZmF1bHRcIjtcbiAgZXhwb3J0IHZhciBhcHBTdWZmaXggPSBcIi5hcHBcIjtcbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJrdWJlcm5ldGVzQXBpR2xvYmFscy50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBhcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIEs4U19QUkVGSVg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gb3NBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBtYXN0ZXJBcGlVcmwoKSB7XG4gICAgcmV0dXJuIG1hc3RlclVybCB8fCBcIlwiO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGt1YmVybmV0ZXNBcGlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIFVybEhlbHBlcnMuam9pbihhcGlQcmVmaXgoKSwgT1NfQVBJX1ZFUlNJT04pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVByZWZpeCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG9zQXBpUHJlZml4KCksIEs4U19BUElfVkVSU0lPTik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpRm9yS2luZChraW5kOnN0cmluZykge1xuICAgIGlmIChraW5kID09PSBXYXRjaFR5cGVzLk5BTUVTUEFDRVMpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLms4c1R5cGVzLCAodCkgPT4gdCA9PT0ga2luZCkpIHtcbiAgICAgIHJldHVybiBLOFNfUFJFRklYO1xuICAgIH1cbiAgICBpZiAoXy5hbnkoTmFtZXNwYWNlZFR5cGVzLm9zVHlwZXMsICh0KSA9PiB0ID09PSBraW5kKSkge1xuICAgICAgcmV0dXJuIE9TX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYXBpVmVyc2lvbkZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19BUElfVkVSU0lPTjpcbiAgICAgICAgcmV0dXJuIGt1YmVybmV0ZXNBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9TX0FQSV9WRVJTSU9OOlxuICAgICAgICByZXR1cm4gb3BlbnNoaWZ0QXBpUHJlZml4KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZvcktpbmQoa2luZDpzdHJpbmcpIHtcbiAgICB2YXIgYXBpID0gYXBpRm9yS2luZChraW5kKTtcbiAgICBzd2l0Y2goYXBpKSB7XG4gICAgICBjYXNlIEs4U19QUkVGSVg6XG4gICAgICAgIHJldHVybiBrdWJlcm5ldGVzQXBpUHJlZml4KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPU19QUkVGSVg6XG4gICAgICAgIHJldHVybiBvcGVuc2hpZnRBcGlQcmVmaXgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24ga3ViZXJuZXRlc0FwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBrdWJlcm5ldGVzQXBpUHJlZml4KCkpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5zaGlmdEFwaVVybCgpIHtcbiAgICByZXR1cm4gVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCBvcGVuc2hpZnRBcGlQcmVmaXgoKSk7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0cyB0aGUgazhzL29wZW5zaGlmdCBlcnJvciByZXNwb25zZSBpZiBwcmVzZW50XG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoanFYSFIpIHtcbiAgICB2YXIgYW5zd2VyOmFueSA9IGpxWEhSLnJlc3BvbnNlVGV4dDtcbiAgICB0cnkge1xuICAgICAgYW5zd2VyID0gYW5ndWxhci5mcm9tSnNvbihhbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gbm90aGluZyB0byBkby4uLlxuICAgIH1cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyBlaXRoZXIgc2VjdXJlL2luc2VjdXJlIHdlYnNvY2tldCBwcm90b2NvbCBiYXNlZCBvbiB0aGUgbWFzdGVyIFVSSSBwcm90b2NvbFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzU2NoZW1lKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBuZXcgVVJJKHVybCkucHJvdG9jb2woKSB8fCAnaHR0cCc7XG4gICAgaWYgKF8uc3RhcnRzV2l0aChwcm90b2NvbCwgJ2h0dHBzJykpIHtcbiAgICAgIHJldHVybiAnd3NzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd3cyc7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgd2Vic29ja2V0IFVSTCBmb3IgdGhlIHN1cHBsaWVkIFVSTFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIHdzVXJsKHVybDpzdHJpbmcpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB3c1NjaGVtZSh1cmwpO1xuICAgIHJldHVybiBuZXcgVVJJKHVybCkuc2NoZW1lKHByb3RvY29sKTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbXBhcmUgdHdvIGs4cyBvYmplY3RzIGJhc2VkIG9uIHRoZWlyIFVJRFxuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuIGdldFVJRChsZWZ0KSA9PT0gZ2V0VUlEKHJpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBLdWJlcm5ldGVzIG9iamVjdCBoZWxwZXJzXG4gICAqXG4gICAqKi9cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0VUlEKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbJ21ldGFkYXRhJywgJ3VpZCddKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2UoZW50aXR5KSB7XG4gICAgdmFyIGFuc3dlciA9IENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZXNwYWNlXCJdKTtcbiAgICAvLyBzb21lIG9iamVjdHMgYXJlbid0IG5hbWVzcGFjZWQsIHNvIHRoaXMgY2FuIHJldHVybiBudWxsO1xuICAgIHJldHVybiBhbnN3ZXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxzKGVudGl0eSkge1xuICAgIHZhciBhbnN3ZXIgPSBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImxhYmVsc1wiXSk7XG4gICAgcmV0dXJuIGFuc3dlciA/IGFuc3dlciA6IHt9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcIm1ldGFkYXRhXCIsIFwibmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KGVudGl0eSwgXCJuYW1lXCIpIHx8IENvcmUucGF0aEdldChlbnRpdHksIFwiaWRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0S2luZChlbnRpdHkpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KGVudGl0eSwgW1wibWV0YWRhdGFcIiwgXCJraW5kXCJdKSB8fCBDb3JlLnBhdGhHZXQoZW50aXR5LCBcImtpbmRcIik7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0b3IoZW50aXR5KSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChlbnRpdHksIFtcInNwZWNcIiwgXCJzZWxlY3RvclwiXSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdChwb2QpIHtcbiAgICByZXR1cm4gQ29yZS5wYXRoR2V0KHBvZCwgW1wic3BlY1wiLCBcImhvc3RcIl0pIHx8IENvcmUucGF0aEdldChwb2QsIFtcInNwZWNcIiwgXCJub2RlTmFtZVwiXSkgfHwgQ29yZS5wYXRoR2V0KHBvZCwgW1wic3RhdHVzXCIsIFwiaG9zdElQXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXMocG9kKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChwb2QsIFtcInN0YXR1c1wiLCBcInBoYXNlXCJdKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRQb3J0cyhzZXJ2aWNlKSB7XG4gICAgcmV0dXJuIENvcmUucGF0aEdldChzZXJ2aWNlLCBbXCJzcGVjXCIsIFwicG9ydHNcIl0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENyZWF0aW9uVGltZXN0YW1wKGVudGl0eSkge1xuICAgIHJldHVybiBDb3JlLnBhdGhHZXQoZW50aXR5LCBbXCJtZXRhZGF0YVwiLCBcImNyZWF0aW9uVGltZXN0YW1wXCJdKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGFiZWxzIHRleHQgc3RyaW5nIHVzaW5nIHRoZSA8Y29kZT5rZXkxPXZhbHVlMSxrZXkyPXZhbHVlMiwuLi4uPC9jb2RlPiBmb3JtYXRcbiAgICovXG4gIGV4cG9ydCBmdW5jdGlvbiBsYWJlbHNUb1N0cmluZyhsYWJlbHMsIHNlcGVyYXRvclRleHQgPSBsYWJlbEZpbHRlclRleHRTZXBhcmF0b3IpIHtcbiAgICB2YXIgYW5zd2VyID0gXCJcIjtcbiAgICBhbmd1bGFyLmZvckVhY2gobGFiZWxzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgdmFyIHNlcGFyYXRvciA9IGFuc3dlciA/IHNlcGVyYXRvclRleHQgOiBcIlwiO1xuICAgICAgYW5zd2VyICs9IHNlcGFyYXRvciArIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBwb2QgaXMgcnVubmluZ1xuICAgKi9cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzUnVubmluZyhwb2RDdXJyZW50U3RhdGUpIHtcbiAgICB2YXIgc3RhdHVzID0gKHBvZEN1cnJlbnRTdGF0ZSB8fCB7fSkucGhhc2U7XG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgdmFyIGxvd2VyID0gc3RhdHVzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gbG93ZXIuc3RhcnRzV2l0aChcInJ1blwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhYmVscyBvYmplY3QgaGFzIGFsbCBvZiB0aGUga2V5L3ZhbHVlIHBhaXJzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAqL1xuICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JNYXRjaGVzKHNlbGVjdG9yLCBsYWJlbHMpIHtcbiAgICBpZiAoYW5ndWxhci5pc09iamVjdChsYWJlbHMpKSB7XG4gICAgICB2YXIgYW5zd2VyID0gdHJ1ZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBhbmd1bGFyLmZvckVhY2goc2VsZWN0b3IsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChhbnN3ZXIgJiYgbGFiZWxzW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgYW5zd2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFuc3dlciAmJiBjb3VudCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcG9kU3RhdHVzKHBvZCkge1xuICAgIHJldHVybiBnZXRTdGF0dXMocG9kKTtcbiAgfVxuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG5kZWNsYXJlIHZhciBPU09BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEdvb2dsZU9BdXRoQ29uZmlnOmFueTtcbmRlY2xhcmUgdmFyIEtleWNsb2FrQ29uZmlnOmFueTtcblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIGV4cG9ydCB2YXIgX21vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKHBsdWdpbk5hbWUsIFtdKTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUNvbmZpZycsXG4gICAgZGVwZW5kczogJ0t1YmVybmV0ZXNBcGlJbml0JyxcbiAgICB0YXNrOiAobmV4dCkgPT4ge1xuICAgICAgSzhTX1BSRUZJWCA9IENvcmUudHJpbUxlYWRpbmcoQ29yZS5wYXRoR2V0KG9zQ29uZmlnLCBbJ2FwaScsICdrOHMnLCAncHJlZml4J10pIHx8IEs4U19QUkVGSVgsICcvJyk7XG4gICAgICBPU19QUkVGSVggPSBDb3JlLnRyaW1MZWFkaW5nKENvcmUucGF0aEdldChvc0NvbmZpZywgWydhcGknLCAnb3BlbnNoaWZ0JywgJ3ByZWZpeCddKSB8fCBPU19QUkVGSVgsICcvJyk7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICBoYXd0aW9QbHVnaW5Mb2FkZXIucmVnaXN0ZXJQcmVCb290c3RyYXBUYXNrKHtcbiAgICBuYW1lOiAnS3ViZXJuZXRlc0FwaUluaXQnLFxuICAgIHRhc2s6IChuZXh0KSA9PiB7XG4gICAgICAkLmdldFNjcmlwdCgnb3Njb25zb2xlL2NvbmZpZy5qcycpXG4gICAgICAgIC5kb25lKChzY3JpcHQsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgY29uZmlnOkt1YmVybmV0ZXNDb25maWcgPSBLdWJlcm5ldGVzQVBJLm9zQ29uZmlnID0gd2luZG93WydPUEVOU0hJRlRfQ09ORklHJ107XG4gICAgICAgICAgbG9nLmRlYnVnKFwiRmV0Y2hlZCBPQXV0aCBjb25maWc6IFwiLCBjb25maWcpO1xuICAgICAgICAgIHZhciBtYXN0ZXI6c3RyaW5nID0gY29uZmlnLm1hc3Rlcl91cmk7XG4gICAgICAgICAgaWYgKCFtYXN0ZXIgJiYgY29uZmlnLmFwaSAmJiBjb25maWcuYXBpLms4cykge1xuICAgICAgICAgICAgdmFyIG1hc3RlclVyaSA9IG5ldyBVUkkoKS5ob3N0KGNvbmZpZy5hcGkuazhzLmhvc3RQb3J0KS5wYXRoKFwiXCIpLnF1ZXJ5KFwiXCIpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5hcGkuazhzLnByb3RvKSB7XG4gICAgICAgICAgICAgIG1hc3RlclVyaS5wcm90b2NvbChjb25maWcuYXBpLms4cy5wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXIgPSBtYXN0ZXJVcmkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPU09BdXRoQ29uZmlnID0gY29uZmlnLm9wZW5zaGlmdDtcbiAgICAgICAgICBHb29nbGVPQXV0aENvbmZpZyA9IGNvbmZpZy5nb29nbGU7XG4gICAgICAgICAgS2V5Y2xvYWtDb25maWcgPSBjb25maWcua2V5Y2xvYWs7XG5cbiAgICAgICAgICBpZiAoT1NPQXV0aENvbmZpZyAmJiAhbWFzdGVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGF1dGgubWFzdGVyX3VyaSBubyBsb25nZXIgdXNlZCByaWdodD9cbiAgICAgICAgICAgIC8vIG1hc3RlciA9IE9TT0F1dGhDb25maWcubWFzdGVyX3VyaTtcbiAgICAgICAgICAgIGlmICghbWFzdGVyKSB7XG4gICAgICAgICAgICAgIHZhciBvYXV0aF9hdXRob3JpemVfdXJpID0gT1NPQXV0aENvbmZpZy5vYXV0aF9hdXRob3JpemVfdXJpO1xuICAgICAgICAgICAgICBpZiAob2F1dGhfYXV0aG9yaXplX3VyaSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2F1dGhfYXV0aG9yaXplX3VyaTtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gdGV4dC5pbmRleE9mKFwiOi8vXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZHggKz0gMztcbiAgICAgICAgICAgICAgICAgIGlkeCA9IHRleHQuaW5kZXhPZihcIi9cIiwgaWR4KTtcbiAgICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc3RlciA9IHRleHQuc3Vic3RyaW5nKDAsICsraWR4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCghS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgfHwgS3ViZXJuZXRlc0FQSS5tYXN0ZXJVcmwgPT09IFwiL1wiKSAmJiAoIW1hc3RlciB8fCBtYXN0ZXIgPT09IFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gbGV0cyBkZWZhdWx0IHRoZSBtYXN0ZXIgdG8gdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGhvc3QvcG9ydFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB0aGUgbWFzdGVyIHVybCBpcyBcIi9cIiBhbmQgd2UgYXJlXG4gICAgICAgICAgICAvLyBzZXJ2aW5nIHVwIHN0YXRpYyBjb250ZW50IGZyb20gaW5zaWRlIC9hcGkvdjEvbmFtZXNwYWNlcy9kZWZhdWx0L3NlcnZpY2VzL2ZhYnJpYzggb3Igc29tZXRoaW5nIGxpa2UgdGhhdFxuICAgICAgICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgbWFzdGVyID0gbmV3IFVSSShocmVmKS5xdWVyeShcIlwiKS5wYXRoKFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXN0ZXIpIHtcbiAgICAgICAgICAgIEt1YmVybmV0ZXNBUEkubWFzdGVyVXJsID0gbWFzdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAuZmFpbCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRXJyb3IgZmV0Y2hpbmcgS3ViZXJuZXRlcyBjb25maWc6IFwiLCByZXNwb25zZSk7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZSgnbmdSZXNvdXJjZScpO1xuICBoYXd0aW9QbHVnaW5Mb2FkZXIuYWRkTW9kdWxlKHBsdWdpbk5hbWUpO1xuXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUdsb2JhbHMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaUhlbHBlcnMudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwia3ViZXJuZXRlc0FwaVBsdWdpbi50c1wiLz5cblxubW9kdWxlIEt1YmVybmV0ZXNBUEkge1xuXG4gIHZhciBsb2cgPSBMb2dnZXIuZ2V0KCdrOHMtb2JqZWN0cycpO1xuXG4gIGZ1bmN0aW9uIGdldEtleShraW5kOnN0cmluZywgbmFtZXNwYWNlPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSA/IG5hbWVzcGFjZSArICctJyArIGtpbmQgOiBraW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3JlU2VuZChyZXF1ZXN0KSB7XG4gICAgdmFyIHRva2VuID0gSGF3dGlvT0F1dGguZ2V0T0F1dGhUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFuYWdlcyB0aGUgYXJyYXkgb2YgazhzIG9iamVjdHMgZm9yIGEgY2xpZW50IGluc3RhbmNlXG4gICAqKi9cbiAgY2xhc3MgT2JqZWN0TGlzdCB7XG4gICAgcHVibGljIHRyaWdnZXJDaGFuZ2VkRXZlbnQgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX2VlLmVtaXQoV2F0Y2hBY3Rpb25zLkFOWSwgdGhpcy5fb2JqZWN0cyk7XG4gICAgfSwgNTAwLCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gICAgcHJpdmF0ZSBfZWU6RXZlbnRFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfb2JqZWN0czpBcnJheTxhbnk+ID0gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihraW5kOnN0cmluZywgbmFtZXNwYWNlPzpzdHJpbmcpIHtcbiAgICAgIHZhciBsb2dnZXJOYW1lID0gJ2s4cy1vYmplY3RzLycgKyAobmFtZXNwYWNlID8gVXJsSGVscGVycy5qb2luKG5hbWVzcGFjZSwga2luZCkgOiBraW5kKTtcbiAgICAgIHRoaXMubG9nID0gTG9nZ2VyLmdldChsb2dnZXJOYW1lKTtcbiAgICAgIHRoaXMuX2VlID0gc21va2VzaWduYWxzLmNvbnZlcnQodGhpcyk7XG4gICAgICBpZiAodGhpcy5sb2cuZW5hYmxlZEZvcihMb2dnZXIuREVCVUcpKSB7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5BRERFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiYWRkZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgKG9iamVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwibW9kaWZpZWQgb2JqZWN0OiBcIiwgb2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VlLm9uKFdhdGNoQWN0aW9ucy5ERUxFVEVELCAob2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJkZWxldGVkIG9iamVjdDogXCIsIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9lZS5vbihXYXRjaEFjdGlvbnMuQU5ZLCAob2JqZWN0cykgPT4ge1xuICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwib2JqZWN0cyBjaGFuZ2VkOiBcIiwgb2JqZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWUub24oV2F0Y2hBY3Rpb25zLkFOWSwgKG9iamVjdHMpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBpbml0aWFsaXplZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBvYmplY3RzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdHM7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05hbWVkSXRlbShpdGVtOmFueSkge1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuX29iamVjdHMsIChvYmo6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBnZXROYW1lKG9iaikgPT09IGdldE5hbWUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkZWQob2JqZWN0KSB7XG4gICAgICBpZiAoXy5hbnkodGhpcy5fb2JqZWN0cywgKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gZXF1YWxzKG9iaiwgb2JqZWN0KTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWQob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5BRERFRCwgb2JqZWN0KTtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgIH07XG5cbiAgICBwdWJsaWMgbW9kaWZpZWQob2JqZWN0KSB7XG4gICAgICBpZiAoIV8uYW55KHRoaXMuX29iamVjdHMsIChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIGVxdWFscyhvYmosIG9iamVjdCk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLmFkZGVkKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF8uZm9yRWFjaCh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIGlmIChlcXVhbHMob2JqLCBvYmplY3QpKSB7XG4gICAgICAgICAgYW5ndWxhci5jb3B5KG9iamVjdCwgb2JqKTtcbiAgICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5NT0RJRklFRCwgb2JqZWN0KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGVkKG9iamVjdCkge1xuICAgICAgdmFyIGRlbGV0ZWQgPSBfLnJlbW92ZSh0aGlzLl9vYmplY3RzLCAob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBlcXVhbHMob2JqLCBvYmplY3QpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICB0aGlzLl9lZS5lbWl0KFdhdGNoQWN0aW9ucy5ERUxFVEVELCBkZWxldGVkWzBdKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2hhbmdlZEV2ZW50KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBpbnRlcmZhY2UgQ29tcGFyZVJlc3VsdCB7XG4gICAgYWRkZWQ6QXJyYXk8YW55PjtcbiAgICBtb2RpZmllZDpBcnJheTxhbnk+O1xuICAgIGRlbGV0ZWQ6QXJyYXk8YW55PjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmUob2xkOkFycmF5PGFueT4sIF9uZXc6QXJyYXk8YW55Pik6Q29tcGFyZVJlc3VsdCB7XG4gICAgdmFyIGFuc3dlciA9IDxDb21wYXJlUmVzdWx0PiB7XG4gICAgICBhZGRlZDogW10sXG4gICAgICBtb2RpZmllZDogW10sXG4gICAgICBkZWxldGVkOiBbXVxuICAgIH07XG4gICAgXy5mb3JFYWNoKF9uZXcsIChuZXdPYmopID0+IHtcbiAgICAgIHZhciBvbGRPYmogPSBfLmZpbmQob2xkLCAobykgPT4gZXF1YWxzKG8sIG5ld09iaikpO1xuICAgICAgaWYgKCFvbGRPYmopIHtcbiAgICAgICAgYW5zd2VyLmFkZGVkLnB1c2gobmV3T2JqKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFuZ3VsYXIudG9Kc29uKG9sZE9iaikgIT09IGFuZ3VsYXIudG9Kc29uKG5ld09iaikpIHtcbiAgICAgICAgYW5zd2VyLm1vZGlmaWVkLnB1c2gobmV3T2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfLmZvckVhY2gob2xkLCAob2xkT2JqKSA9PiB7XG4gICAgICB2YXIgbmV3T2JqID0gXy5maW5kKF9uZXcsIChvKSA9PiBlcXVhbHMobywgb2xkT2JqKSk7XG4gICAgICBpZiAoIW5ld09iaikge1xuICAgICAgICBhbnN3ZXIuZGVsZXRlZC5wdXNoKG9sZE9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfVxuXG4gIC8qXG4gICAqIE1hbmFnZXMgcG9sbGluZyB0aGUgc2VydmVyIGZvciBvYmplY3RzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB3ZWJzb2NrZXQgY29ubmVjdGlvbnNcbiAgICovXG4gIGNsYXNzIE9iamVjdFBvbGxlciB7XG5cbiAgICBwcml2YXRlIF9sYXN0RmV0Y2ggPSA8QXJyYXk8YW55Pj4gW107XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWwgPSA1MDAwO1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdENhbmNlbDphbnkgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RVUkw6c3RyaW5nLCBwcml2YXRlIGhhbmRsZXI6V1NIYW5kbGVyKSB7XG4gICAgICB0aGlzLmxvZyA9IExvZ2dlci5nZXQoJ2s4cy1vYmplY3RzLycgKyBnZXRLZXkoaGFuZGxlci5jb2xsZWN0aW9uLmtpbmQsIGhhbmRsZXIuY29sbGVjdGlvbi5uYW1lc3BhY2UpKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCBjb25uZWN0ZWQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkb0dldCgpIHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gXG4gICAgICAkLmFqYXgodGhpcy5yZXN0VVJMLCA8YW55PntcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgaXRlbXMgID0gKGRhdGEgJiYgZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW107XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbXBhcmUodGhpcy5fbGFzdEZldGNoLCBpdGVtcyk7XG4gICAgICAgICAgdGhpcy5fbGFzdEZldGNoID0gaXRlbXM7XG4gICAgICAgICAgXy5mb3JJbihyZXN1bHQsIChpdGVtczphbnlbXSwgYWN0aW9uOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgXy5mb3JFYWNoKGl0ZW1zLCAoaXRlbTphbnkpID0+IHtcbiAgICAgICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBtb2RpZnkgdGhlIG9yaWdpbmFsIG9iamVjdFxuICAgICAgICAgICAgICBpdGVtID0gXy5jbG9uZURlZXAoaXRlbSk7XG4gICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyB0cmltUmlnaHQgd29ya3MgZm9yIG5vdywgYnV0IG1pZ2h0IG5vdCB3b3JrIGF0IHNvbWUgcG9pbnRcbiAgICAgICAgICAgICAgaXRlbS5raW5kID0gXy50cmltUmlnaHQoXy5jYXBpdGFsaXplKHRoaXMuaGFuZGxlci5jb2xsZWN0aW9uLmtpbmQpLCAncycpO1xuICAgICAgICAgICAgICBpdGVtLmFwaVZlcnNpb24gPSBhcGlWZXJzaW9uRm9yS2luZCh0aGlzLmhhbmRsZXIuY29sbGVjdGlvbi5raW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNvbGxlY3Rpb24ubmFtZXNwYWNlID8gaXRlbS5uYW1lc3BhY2UgPSB0aGlzLmhhbmRsZXIuY29sbGVjdGlvbi5uYW1lc3BhY2UgOiBmYWxzZTtcbiAgICAgICAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFuZ3VsYXIudG9Kc29uKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBpdGVtXG4gICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5vbm1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy9sb2cuZGVidWcoXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudENhbmNlbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRvR2V0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXJyb3IgPSBnZXRFcnJvck9iamVjdChqcVhIUik7XG4gICAgICAgICAgaWYgKHRoaXMucmV0cmllcyA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKFwiT3V0IG9mIHJldHJpZXMsIHN0b3BwaW5nIHBvbGxpbmcsIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSB0aGlzLnJldHJpZXMgLSAxO1xuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJFcnJvciBwb2xsaW5nLCByZXRyeSAjXCIsIHRoaXMucmV0cmllcyArIDEsIFwiIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50Q2FuY2VsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9HZXQoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGJlZm9yZVNlbmRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnRDYW5jZWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb0dldCgpO1xuICAgICAgfSwgMSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdG9wKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy50Q2FuY2VsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRDYW5jZWwpO1xuICAgICAgICB0aGlzLnRDYW5jZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZXMgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uIHRvIHRoZSBiYWNrZW5kIGFuZCBwYXNzZXMgZXZlbnRzIHRvIHRoZSBPYmplY3RMaXN0XG4gICAqL1xuICBjbGFzcyBXU0hhbmRsZXIge1xuICAgIHByaXZhdGUgcmV0cmllczpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29ubmVjdFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNvY2tldDpXZWJTb2NrZXQ7XG4gICAgcHJpdmF0ZSBwb2xsZXI6T2JqZWN0UG9sbGVyO1xuICAgIHByaXZhdGUgc2VsZjpDb2xsZWN0aW9uSW1wbCA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9saXN0Ok9iamVjdExpc3Q7XG4gICAgcHJpdmF0ZSBsb2c6TG9nZ2luZy5Mb2dnZXIgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWxmOkNvbGxlY3Rpb25JbXBsKSB7XG4gICAgICB0aGlzLnNlbGYgPSBfc2VsZjtcbiAgICAgIHRoaXMubG9nID0gTG9nZ2VyLmdldCgnazhzLW9iamVjdHMvJyArIGdldEtleShfc2VsZi5raW5kLCBfc2VsZi5uYW1lc3BhY2UpKTtcbiAgICB9XG5cbiAgICBzZXQgbGlzdChfbGlzdDpPYmplY3RMaXN0KSB7XG4gICAgICB0aGlzLl9saXN0ID0gX2xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhhbmRsZXJzKHNlbGY6V1NIYW5kbGVyLCB3czpXZWJTb2NrZXQpIHtcbiAgICAgIF8uZm9ySW4oc2VsZiwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKF8uc3RhcnRzV2l0aChrZXksICdvbicpKSB7XG4gICAgICAgICAgd3Nba2V5XSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZltrZXldKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgICAgaWYgKCFfLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBhbmd1bGFyLnRvSnNvbihkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XG4gICAgfVxuXG4gICAgb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkV2ZW50OiBcIiwgZGF0YSk7XG4gICAgICB2YXIgZXZlbnRUeXBlID0gZGF0YS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyB0aGlzLmxvZy5kZWJ1ZyhcImV2ZW50OiBcIiwgZXZlbnRUeXBlLCBcIiBvYmplY3Q6IFwiLCBkYXRhLm9iamVjdCk7XG4gICAgICB0aGlzLl9saXN0W2V2ZW50VHlwZV0oZGF0YS5vYmplY3QpO1xuICAgIH07XG5cbiAgICBvbm9wZW4oZXZlbnQpIHtcbiAgICAgIHRoaXMucmV0cmllcyA9IDA7XG4gICAgICB0aGlzLmNvbm5lY3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3RlZDogXCIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgb25jbG9zZShldmVudCkge1xuICAgICAgaWYgKHRoaXMucmV0cmllcyA8IDMgJiYgdGhpcy5jb25uZWN0VGltZSAmJiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLmNvbm5lY3RUaW1lKSA+IDUwMDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJldHJ5aW5nIGFmdGVyIGNvbm5lY3Rpb24gY2xvc2VkOiBcIiwgZXZlbnQpO1xuICAgICAgICAgIHRoaXMucmV0cmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJ3YXRjaCBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGRpc2Nvbm5lY3RlZCwgcmV0cnkgI1wiLCB0aGlzLnJldHJpZXMpO1xuICAgICAgICAgIHZhciB3cyA9IHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNlbGYud3NVUkwpO1xuICAgICAgICAgIHRoaXMuc2V0SGFuZGxlcnMoc2VsZiwgd3MpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKFwid2Vic29ja2V0IGZvciBcIiwgdGhpcy5zZWxmLmtpbmQsIFwiIGNsb3NlZCwgZXZlbnQ6IFwiLCBldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlN3aXRjaGluZyB0byBwb2xsaW5nIG1vZGVcIik7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc29ja2V0O1xuICAgICAgICAgIHRoaXMucG9sbGVyID0gbmV3IE9iamVjdFBvbGxlcih0aGlzLnNlbGYucmVzdFVSTCwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5wb2xsZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBvbmVycm9yKGV2ZW50KSB7XG4gICAgICB0aGlzLmxvZy5kZWJ1ZyhcIndlYiBzb2NrZXQgZW5jb3VudGVyZWQgZXJyb3I6IFwiLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgcmV0dXJuICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikgfHwgKHRoaXMucG9sbGVyICYmIHRoaXMucG9sbGVyLmNvbm5lY3RlZCk7XG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuc29ja2V0ICYmICF0aGlzLnBvbGxlcikge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpbmcgd2Vic29ja2V0IGZvciBraW5kOiBcIiwgdGhpcy5zZWxmLmtpbmQpO1xuICAgICAgICB2YXIgd3MgPSB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zZWxmLndzVVJMKTtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVycyh0aGlzLCB3cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9sbGVyKSB7XG4gICAgICAgIHRoaXMucG9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucG9sbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEltcGxlbWVudHMgdGhlIGV4dGVybmFsIEFQSSBmb3Igd29ya2luZyB3aXRoIGs4cyBjb2xsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAqL1xuICBleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkltcGwgaW1wbGVtZW50cyBDb2xsZWN0aW9uIHtcblxuICAgIHByaXZhdGUgX2tpbmQ6c3RyaW5nO1xuICAgIHByaXZhdGUgX25hbWVzcGFjZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfd3NVcmw6VVJJO1xuICAgIHByaXZhdGUgX3Jlc3RVcmw6VVJJO1xuICAgIHByaXZhdGUgaGFuZGxlcnM6V1NIYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgbGlzdDpPYmplY3RMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3Ioa2luZDpzdHJpbmcsIG5hbWVzcGFjZT86c3RyaW5nKSB7XG4gICAgICB0aGlzLl9raW5kID0ga2luZDtcbiAgICAgIHRoaXMuX25hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCBudWxsO1xuXG4gICAgICB2YXIgcHJlZiA9IHByZWZpeEZvcktpbmQodGhpcy5fa2luZCk7XG4gICAgICBpZiAoIXByZWYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGtpbmQ6ICcgKyB0aGlzLl9raW5kKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9uYW1lc3BhY2UpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFVybEhlbHBlcnMuam9pbihwcmVmLCAnbmFtZXNwYWNlcycsIHRoaXMuX25hbWVzcGFjZSwgdGhpcy5fa2luZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXRoID0gVXJsSGVscGVycy5qb2luKHByZWYsIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN0VXJsID0gbmV3IFVSSShVcmxIZWxwZXJzLmpvaW4obWFzdGVyQXBpVXJsKCksIHRoaXMuX3BhdGgpKTtcbiAgICAgIHRoaXMuX3dzVXJsID0gd3NVcmwoVXJsSGVscGVycy5qb2luKG1hc3RlckFwaVVybCgpLCB0aGlzLl9wYXRoKSkucXVlcnkoPGFueT57XG4gICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICBhY2Nlc3NfdG9rZW46IEhhd3Rpb09BdXRoLmdldE9BdXRoVG9rZW4oKVxuICAgICAgfSk7XG4gICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IFdTSGFuZGxlcih0aGlzKTtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ID0gbmV3IE9iamVjdExpc3Qoa2luZCwgbmFtZXNwYWNlKTtcbiAgICAgIHRoaXMuaGFuZGxlcnMubGlzdCA9IGxpc3Q7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KHRoaXMuX2tpbmQsIHRoaXMuX25hbWVzcGFjZSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBnZXQgd3NVUkwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3NVcmwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCByZXN0VVJMKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lc3BhY2U7XG4gICAgfTtcblxuICAgIGdldCBraW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XG4gICAgfTtcblxuICAgIGdldCBjb25uZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmNvbm5lY3RlZDtcbiAgICB9O1xuXG4gICAgcHVibGljIGNvbm5lY3QoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZGxlcnMuY29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMuY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFuZGxlcnM7XG4gICAgICBkZWxldGUgdGhpcy5saXN0O1xuICAgIH1cblxuICAgIC8vIG9uZSB0aW1lIGZldGNoIG9mIHRoZSBkYXRhLi4uXG4gICAgcHVibGljIGdldChjYjooZGF0YTphbnlbXSkgPT4gdm9pZCkge1xuICAgICAgaWYgKCF0aGlzLmxpc3QuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5saXN0LmV2ZW50cy5vbmNlKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNiKHRoaXMubGlzdC5vYmplY3RzKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIHJlc3RVcmxGb3IoaXRlbTphbnksIHVzZU5hbWU6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0TmFtZShpdGVtKTtcbiAgICAgIGlmICh1c2VOYW1lICYmICFuYW1lKSB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIk5hbWUgbWlzc2luZyBmcm9tIGl0ZW06IFwiLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciBuYW1lc3BhY2UgPSBnZXROYW1lc3BhY2UoaXRlbSk7XG4gICAgICB2YXIgdXJsID0gVXJsSGVscGVycy5qb2luKHRoaXMuX3Jlc3RVcmwudG9TdHJpbmcoKSk7XG4gICAgICBpZiAodGhpcy5fa2luZCAhPT0gV2F0Y2hUeXBlcy5OQU1FU1BBQ0VTICYmIG5hbWVzcGFjZSAmJiAhdGhpcy5fbmFtZXNwYWNlKSB7XG4gICAgICAgIHVybCA9IFVybEhlbHBlcnMuam9pbihtYXN0ZXJBcGlVcmwoKSwgcHJlZml4Rm9yS2luZCh0aGlzLl9raW5kKSwgJ25hbWVzcGFjZXMnLCBuYW1lc3BhY2UsIHRoaXMuX2tpbmQpO1xuICAgICAgfVxuICAgICAgaWYgKHVzZU5hbWUpIHtcbiAgICAgICAgdXJsID0gVXJsSGVscGVycy5qb2luKHVybCwgbmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8vIGNvbnRpbnVhbGx5IGdldCB1cGRhdGVzXG4gICAgcHVibGljIHdhdGNoKGNiOihkYXRhOmFueVtdKSA9PiB2b2lkKSB7XG4gICAgICB0aGlzLmxpc3QuZXZlbnRzLm9uKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICAgIHJldHVybiBjYjtcbiAgICB9O1xuXG4gICAgcHVibGljIHVud2F0Y2goY2I6KGRhdGE6YW55W10pID0+IHZvaWQpIHtcbiAgICAgIHRoaXMubGlzdC5ldmVudHMub2ZmKFdhdGNoQWN0aW9ucy5BTlksIGNiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGl0ZW06YW55LCBjYjooZGF0YTphbnkpID0+IHZvaWQsIGVycm9yPzooZXJyOmFueSkgPT4gdm9pZCkge1xuICAgICAgdmFyIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgdmFyIHVybCA9IHRoaXMucmVzdFVybEZvcihpdGVtKTtcbiAgICAgIGlmICghdGhpcy5saXN0Lmhhc05hbWVkSXRlbShpdGVtKSkge1xuICAgICAgICAvLyBjcmVhdGluZyBhIG5ldyBvYmplY3RcbiAgICAgICAgbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB1cmwgPSB0aGlzLnJlc3RVcmxGb3IoaXRlbSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJC5hamF4KHVybCwgPGFueT4ge1xuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgZGF0YTogYW5ndWxhci50b0pzb24oaXRlbSksXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYW5ndWxhci5mcm9tSnNvbihkYXRhKTtcbiAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNiKHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBjcmVhdGUgb3IgdXBkYXRlLCBlcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlU2VuZDogYmVmb3JlU2VuZFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZWxldGUoaXRlbTphbnksIGNiOihkYXRhOmFueSkgPT4gdm9pZCwgZXJyb3I/OihlcnI6YW55KSA9PiB2b2lkKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5yZXN0VXJsRm9yKGl0ZW0pO1xuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LmRlbGV0ZWQoaXRlbSk7XG4gICAgICB0aGlzLmxpc3QudHJpZ2dlckNoYW5nZWRFdmVudCgpO1xuICAgICAgJC5hamF4KHVybCwgPGFueT57XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFuZ3VsYXIuZnJvbUpzb24oZGF0YSk7XG4gICAgICAgICAgICBjYihyZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYih7fSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoanFYSFIpO1xuICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZhaWxlZCB0byBkZWxldGUsIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgICB0aGlzLmxpc3QuYWRkZWQoaXRlbSk7XG4gICAgICAgICAgdGhpcy5saXN0LnRyaWdnZXJDaGFuZ2VkRXZlbnQoKTtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBiZWZvcmVTZW5kXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIC8qXG4gICAqIE1hbmFnZXMgcmVmZXJlbmNlcyB0byBjb2xsZWN0aW9uIGluc3RhbmNlcyB0byBhbGxvdyB0aGVtIHRvIGJlIHNoYXJlZCBiZXR3ZWVuIHZpZXdzXG4gICAqL1xuICBjbGFzcyBDbGllbnRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVmQ291bnQgPSAwO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb246Q29sbGVjdGlvbkltcGwgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihfY29sbGVjdGlvbjpDb2xsZWN0aW9uSW1wbCkge1xuICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IF9jb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IHJlZkNvdW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWYoKSB7XG4gICAgICB0aGlzLl9yZWZDb3VudCA9IHRoaXMuX3JlZkNvdW50ICsgMTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlbW92ZVJlZigpIHtcbiAgICAgIHRoaXMuX3JlZkNvdW50ID0gdGhpcy5fcmVmQ291bnQgLSAxO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZ2V0IGNvbGxlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcHVibGljIGRpc3Bvc2FibGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ291bnQgPD0gMDtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9jb2xsZWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIH1cbiAgfTtcblxuICBpbnRlcmZhY2UgQ2xpZW50TWFwIHtcbiAgICBbbmFtZTpzdHJpbmddOkNsaWVudEluc3RhbmNlO1xuICB9XG5cbiAgLypcbiAgICogRmFjdG9yeSBpbXBsZW1lbnRhdGlvbiB0aGF0J3MgYXZhaWxhYmxlIGFzIGFuIGFuZ3VsYXIgc2VydmljZVxuICAgKi9cbiAgY2xhc3MgSzhTQ2xpZW50RmFjdG9yeUltcGwge1xuICAgIHByaXZhdGUgbG9nOkxvZ2dpbmcuTG9nZ2VyID0gTG9nZ2VyLmdldCgnazhzLWNsaWVudC1mYWN0b3J5Jyk7XG4gICAgcHJpdmF0ZSBfY2xpZW50cyA9IDxDbGllbnRNYXA+IHt9O1xuICAgIHB1YmxpYyBjcmVhdGUoa2luZDogc3RyaW5nLCBuYW1lc3BhY2U/OiBzdHJpbmcpOkNvbGxlY3Rpb24ge1xuICAgICAgdmFyIGtleSA9IGdldEtleShraW5kLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSB0aGlzLl9jbGllbnRzW2tleV07XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJSZXR1cm5pbmcgZXhpc3RpbmcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgcmV0dXJuIGNsaWVudC5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsaWVudCA9IG5ldyBDbGllbnRJbnN0YW5jZShuZXcgQ29sbGVjdGlvbkltcGwoa2luZCwgbmFtZXNwYWNlKSk7XG4gICAgICAgIGNsaWVudC5hZGRSZWYoKTtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoXCJDcmVhdGluZyBuZXcgY2xpZW50IGZvciBrZXk6IFwiLCBrZXksIFwiIHJlZmNvdW50IGlzOiBcIiwgY2xpZW50LnJlZkNvdW50KTtcbiAgICAgICAgdGhpcy5fY2xpZW50c1trZXldID0gY2xpZW50O1xuICAgICAgICByZXR1cm4gY2xpZW50LmNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koY2xpZW50OkNvbGxlY3Rpb24sIC4uLmhhbmRsZXM6QXJyYXk8KGRhdGE6YW55W10pID0+IHZvaWQ+KSB7XG4gICAgICBfLmZvckVhY2goaGFuZGxlcywgKGhhbmRsZSkgPT4ge1xuICAgICAgICBjbGllbnQudW53YXRjaChoYW5kbGUpO1xuICAgICAgfSk7XG4gICAgICB2YXIga2V5ID0gY2xpZW50LmdldEtleSgpO1xuICAgICAgaWYgKGtleSBpbiB0aGlzLl9jbGllbnRzKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fY2xpZW50c1trZXldO1xuICAgICAgICBjLnJlbW92ZVJlZigpO1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIlJlbW92ZWQgcmVmZXJlbmNlIHRvIGNsaWVudCB3aXRoIGtleTogXCIsIGtleSwgXCIgcmVmY291bnQgaXM6IFwiLCBjLnJlZkNvdW50KTtcbiAgICAgICAgaWYgKGMuZGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NsaWVudHNba2V5XTtcbiAgICAgICAgICBjLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhcIkRlc3Ryb3llZCBjbGllbnQgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW9kdWxlLmZhY3RvcnkoJ0s4U0NsaWVudEZhY3RvcnknLCAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBLOFNDbGllbnRGYWN0b3J5SW1wbCgpXG4gIH0pO1xuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
