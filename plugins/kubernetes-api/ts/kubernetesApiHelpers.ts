/// <reference path="kubernetesApiGlobals.ts"/>

module KubernetesAPI {

  /**
   * Returns the current kubernetes selected namespace or the default one
   */
  export function currentKubernetesNamespace() {
    var injector = HawtioCore.injector;
    if (injector) {
      var KubernetesState = injector.get("KubernetesState") || {};
      return KubernetesState.selectedNamespace || defaultNamespace;
    }
    return defaultNamespace;
  }

  export function kubernetesNamespacePath() {
    var ns = currentKubernetesNamespace();
    if (ns) {
      return "/namespaces/" + ns;
    } else {
      return "";
    }
  }

  export function apiPrefix() {
    var prefix = Core.pathGet(osConfig, ['api', 'k8s', 'prefix']);
    if (!prefix) {
      prefix = K8S_PREFIX;
    }
    return Core.trimLeading(prefix, '/');
  }

  export function osApiPrefix() {
    var prefix = Core.pathGet(osConfig, ['api', 'openshift', 'prefix']);
    if (!prefix) {
      prefix = OS_PREFIX;
    }
    var answer = Core.trimLeading(prefix, '/');
    /*
      TODO - may not have a currently selected namespace
    if (!isOpenShift) {
      return UrlHelpers.join(apiPrefix(), OS_API_VERSION, "proxy", kubernetesNamespacePath(), "services/templates", answer);
    }
    */
    return answer;
  }

  export function masterApiUrl() {
    return masterUrl || "";
  }

  export function kubernetesApiPrefix() {
    return UrlHelpers.join(apiPrefix(), OS_API_VERSION);
  }

  export function openshiftApiPrefix() {
    return UrlHelpers.join(osApiPrefix(), K8S_API_VERSION);
  }

  export function prefixForKind(kind:string) {
    if (kind === WatchTypes.NAMESPACES) {
      return kubernetesApiPrefix();
    }
    if (_.any(NamespacedTypes.k8sTypes, (t) => t === kind)) {
      return kubernetesApiPrefix();
    }
    if (_.any(NamespacedTypes.osTypes, (t) => t === kind)) {
      return openshiftApiPrefix();
    }
    return null;
  }

  export function kubernetesApiUrl() {
    return UrlHelpers.join(masterApiUrl(), kubernetesApiPrefix());
  }

  export function openshiftApiUrl() {
    return UrlHelpers.join(masterApiUrl(), openshiftApiPrefix());
  }

  export function updateOrCreateObject(object, KubernetesModel, success?: (data) => void, error?: (error) => void) {
    var kind = getKind(object);
    if (kind === "List") {
      log.debug("Object is a list, deploying all objects");
      _.forEach(object.items, (obj) => {
        log.debug("Deploying: ", obj);
        updateOrCreateObject(obj, KubernetesModel, success, error);
      });
      return;
    }
    if (!kind) {
      log.debug("Object: ", object, " has no object type");
      return;
    }
    kind = kind.toLowerCase().pluralize();
    var resource = KubernetesModel[kind + 'Resource'];
    if (!resource) {
      log.debug("Unable to find resource for kind: ", kind);
      return;
    }
    var name = getName(object);
    if (!name) {
      log.debug("Object has no name: ", object);
      return;
    }

    var isUpdate = _.any(KubernetesModel[kind], (n) => n === name)
    var action = isUpdate ? "Modified" : "Added";

    var successInternal = (data) => {
      log.debug(action, data);
      if (!isUpdate) {
        KubernetesModel[kind].push(data);
      }
      if (success) {
        success(data);
      }
    };
    var errorInternal = (err) => {
      log.debug("Failed to add/modify object: ", object, " error: ", err);
      if (error) {
        error(err);
      }
    }
    if (isUpdate) {
      log.debug("Object already exists, updating...");
      resource.save({ id: name }, object, successInternal, errorInternal);
    } else {
      log.debug("Object doesn't exist, creating...");
      resource.create({}, object, successInternal, errorInternal);
    }
  }

  export function createResource(thing:string, urlTemplate:string, $resource: ng.resource.IResourceService, KubernetesModel) {
    var prefix = prefixForKind(thing);
    if (!prefix) {
      log.debug("Invalid type given: ", thing);
      return null;
    }

    var params = <any> {
      namespace: currentKubernetesNamespace
    }
    if (thing === "namespaces") {
      params = {};
    }

    var url = UrlHelpers.join(masterApiUrl(), prefix, urlTemplate);
    log.debug("Url for ", thing, ": ", url);
    var resource = $resource(url, null, {
      query: { method: 'GET', isArray: false, params: params},
      create: { method: 'POST', params: params},
      save: { method: 'PUT', params: params},
      delete: { method: 'DELETE', params: _.extend({
        id: '@id'
      }, params)}
    });
    return resource;
  }

  export function imageRepositoriesRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/imagestreams");
  }

  export function deploymentConfigsRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/deploymentconfigs");
  }

  export function buildsLogsRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/proxy/buildlogs");
  }

  export function buildsRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/builds");
  }

  export function buildConfigHooksRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/buildconfighooks");
  }

  export function buildConfigsRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/buildconfigs");
  }

  export function routesRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/routes");
  }

  export function templatesRestURL() {
    return UrlHelpers.join(openshiftApiUrl(), kubernetesNamespacePath(), "/templates");
  }

  export function getErrorObject(jqXHR) {
    var answer:any = jqXHR.responseText;
    try {
      answer = angular.fromJson(answer);
    } catch (err) {
      // nothing to do...
    }
    return answer;
  }

  export function wsScheme(url:string) {
    var protocol = new URI(url).protocol() || 'http';
    if (_.startsWith(protocol, 'https')) {
      return 'wss';
    } else {
      return 'ws';
    }
  }

  export function wsUrl(url:string) {
    var protocol = wsScheme(url);
    return new URI(url).scheme(protocol);
  }

  export function equals(left, right):boolean {
    return getUID(left) === getUID(right);
  }

  export function getUID(entity) {
    return Core.pathGet(entity, ['metadata', 'uid']);
  }

  export function getNamespace(entity) {
    var answer = Core.pathGet(entity, ["metadata", "namespace"]);
    // some objects aren't namespaced, so this can return null;
    return answer;
  }

  export function getLabels(entity) {
    var answer = Core.pathGet(entity, ["metadata", "labels"]);
    return answer ? answer : {};
  }

  export function getName(entity) {
    return Core.pathGet(entity, ["metadata", "name"]) || Core.pathGet(entity, "name") || Core.pathGet(entity, "id");
  }

  export function getKind(entity) {
    return Core.pathGet(entity, ["metadata", "kind"]) || Core.pathGet(entity, "kind");
  }

  export function getSelector(entity) {
    return Core.pathGet(entity, ["spec", "selector"]);
  }

  export function getHost(pod) {
    return Core.pathGet(pod, ["spec", "host"]) || Core.pathGet(pod, ["spec", "nodeName"]) || Core.pathGet(pod, ["status", "hostIP"]);
  }

  export function getStatus(pod) {
    return Core.pathGet(pod, ["status", "phase"]);
  }

  export function getPorts(service) {
    return Core.pathGet(service, ["spec", "ports"]);
  }

  export function getCreationTimestamp(entity) {
    return Core.pathGet(entity, ["metadata", "creationTimestamp"]);
  };

  //var fabricDomain = Fabric.jmxDomain;
  var fabricDomain = "io.fabric8";
  export var mbean = fabricDomain + ":type=Kubernetes";
  export var managerMBean = fabricDomain + ":type=KubernetesManager";
  export var appViewMBean = fabricDomain + ":type=AppView";

  export function isKubernetes(workspace) {
    // return workspace.treeContainsDomainAndProperties(fabricDomain, {type: "Kubernetes"});
    return true;
  }

  export function isKubernetesTemplateManager(workspace) {
    // return workspace.treeContainsDomainAndProperties(fabricDomain, {type: "KubernetesTemplateManager"});
    return true;
  }

  export function isAppView(workspace) {
    // return workspace.treeContainsDomainAndProperties(fabricDomain, {type: "AppView"});
    return true;
  }

  export function setJson($scope, id, collection) {
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
    var item = collection.find((item) => { return getName(item) === id; });
    if (item) {
      $scope.json = angular.toJson(item, true);
      $scope.item = item;
    } else {
      $scope.id = undefined;
      $scope.json = '';
      $scope.item = undefined;
    }
  }

  /**
   * Returns the labels text string using the <code>key1=value1,key2=value2,....</code> format
   */
  export function labelsToString(labels, seperatorText = labelFilterTextSeparator) {
    var answer = "";
    angular.forEach(labels, (value, key) => {
      var separator = answer ? seperatorText : "";
      answer += separator + key + "=" + value;
    });
    return answer;
  }

  /**
   * Returns the service link URL for either the service name or the service object
   */
  export function serviceLinkUrl(service) {
    if (angular.isObject(service)) {
      var portalIP = service.$host;
      // lets assume no custom port for now for external routes
      var port = null;
      var protocol = "http://";
      var spec = service.spec;
      if (spec) {
        if (!portalIP) {
          portalIP = spec.portalIP;
        }
        var hasHttps = false;
        var hasHttp = false;
        angular.forEach(spec.ports, (portSpec) => {
          var p = portSpec.port;
          if (p) {
            if (p === 443) {
              hasHttps = true;
            } else if (p === 80) {
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
        } else if (hasHttp) {
          return "http://" + portalIP;
        } else if (port) {
          return protocol + portalIP + ":" + port + "/";
        } else {
          return protocol + portalIP;
        }
      }
    } else if (service) {
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

  /**
   * Given the list of pods lets iterate through them and find all pods matching the selector
   * and return counters based on the status of the pod
   */
  export function createPodCounters(selector, pods, outputPods = [], podLinkQuery = null) {
    var filterFn;
    if (angular.isFunction(selector)) {
      filterFn = selector;
    } else {
      filterFn = (pod) => selectorMatches(selector, getLabels(pod));
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
      angular.forEach(pods, pod => {
        if (filterFn(pod)) {
          outputPods.push(pod);
          var status = getStatus(pod);
          if (status) {
            var lower = status.toLowerCase();
            if (lower.startsWith("run")) {
              answer.valid += 1;
            } else if (lower.startsWith("wait") || lower.startsWith("pend")) {
              answer.waiting += 1;
            } else if (lower.startsWith("term") || lower.startsWith("error") || lower.startsWith("fail")) {
              answer.error += 1;
            }
          } else {
            answer.error += 1;
          }
        }
      });
    }
    return answer;
  }

  /**
   * Converts the given json into an array of items. If the json contains a nested set of items then that is sorted; so that services
   * are processed first; then turned into an array. Otherwise the json is put into an array so it can be processed polymorphically
   */
  export function convertKubernetesJsonToItems(json) {
    var items = json.items;
    if (angular.isArray(items)) {
      // TODO we could check for List or Config types here and warn if not

      // sort the services first
      var answer = [];
      items.forEach((item) => {
        if (item.kind === "Service") {
          answer.push(item);
        }
      });
      items.forEach((item) => {
        if (item.kind !== "Service") {
          answer.push(item);
        }
      });
      return answer;
    } else {
      return [json];
    }
  }

  export function isV1beta1Or2() {
    return defaultApiVersion === "v1beta1" || defaultApiVersion === "v1beta2";
  }

  /**
   * Returns a link to the detail page for the given entity
   */
  export function entityPageLink(entity) {
    if (entity) {
      var id = getName(entity);
      var kind = getKind(entity);
      if (kind && id) {
        var path = kind.substring(0, 1).toLowerCase() + kind.substring(1) + "s";
        var namespace = getNamespace(entity);
        if (namespace && !isIgnoreNamespaceKind(kind)) {
          return Core.url(UrlHelpers.join('/kubernetes/namespace', namespace, path, id));
        } else {
          return Core.url(UrlHelpers.join('/kubernetes', path, id));
        }
      }
    }
    return null;
  }


  export function resourceKindToUriPath(kind) {
    var kindPath = kind.toLowerCase() + "s";
    if (kindPath === "replicationControllers" && !isV1beta1Or2()) {
      kindPath = "replicationcontrollers";
    }
    return kindPath;
  }

  function isIgnoreNamespaceKind(kind) {
    return kind === "Host" || kind === "Minion";
  }

  /**
   * Returns the root URL for the kind
   */
  export function kubernetesUrlForKind(KubernetesApiURL, kind, namespace = null, path = null) {
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
    } else {
      return UrlHelpers.join(KubernetesApiURL, "/namespaces/", namespace , kindPath, pathSegment);
    }
  };

  /**
   * Returns the base URL for the kind of kubernetes resource or null if it cannot be found
   */
  export function kubernetesUrlForItemKind(KubernetesApiURL, json) {
    var kind = json.kind;
    if (kind) {
      return kubernetesUrlForKind(KubernetesApiURL, kind, json.namespace);
    } else {
      log.warn("Ignoring missing kind " + kind + " for kubernetes json: " + angular.toJson(json));
      return null;
    }
  }

  export function kubernetesProxyUrlForService(KubernetesApiURL, service, path = null) {
    var pathSegment = "";
    if (path) {
      pathSegment = "/" + Core.trimLeading(path, "/");
    } else {
      pathSegment = "/";
    }
    var namespace = getNamespace(service);
    if (isV1beta1Or2()) {
      var postfix = "?namespace=" + namespace;
      return UrlHelpers.join(KubernetesApiURL, "/api/" + defaultApiVersion + "/proxy" + kubernetesNamespacePath() + "/services/" + getName(service) + pathSegment + postfix);
    } else {
      return UrlHelpers.join(KubernetesApiURL, "/api/" + defaultApiVersion + "/proxy/namespaces/" + namespace + "/services/" + getName(service) + pathSegment);
    }
  }

  export function buildConfigRestUrl(id) {
    return UrlHelpers.join(buildConfigsRestURL(), id);
  }

  export function deploymentConfigRestUrl(id) {
    return UrlHelpers.join(deploymentConfigsRestURL(), id);
  }

  export function imageRepositoryRestUrl(id) {
    return UrlHelpers.join(imageRepositoriesRestURL(), id);
  }

  export function buildRestUrl(id) {
    return UrlHelpers.join(buildsRestURL(), id);
  }

  export function buildLogsRestUrl(id) {
    return UrlHelpers.join(buildsLogsRestURL(), id);
  }

  /**
   * Runs the given application JSON
   */
      /*
  export function runApp($location, $scope, $http, KubernetesApiURL, json, name = "App", onSuccessFn = null, namespace = null, onCompleteFn = null) {
    if (json) {
      if (angular.isString(json)) {
        json = angular.fromJson(json);
      }
      name = name || "App";
      var postfix = namespace ? " in namespace " + namespace : "";

      var items = convertKubernetesJsonToItems(json);
      angular.forEach(items, (item) => {
        var url = kubernetesUrlForItemKind(KubernetesApiURL, item);
        if (url) {
          $http.post(url, item).
            success(function (data, status, headers, config) {
              log.debug("Got status: " + status + " on url: " + url + " data: " + data + " after posting: " + angular.toJson(item));
              if (angular.isFunction(onCompleteFn)) {
                onCompleteFn();
              }
              Core.$apply($scope);
            }).
          error(function (data, status, headers, config) {
            var message = null;
            if (angular.isObject(data)) {
              message = data.message;
              var reason = data.reason;
              if (reason === "AlreadyExists") {
                // lets ignore duplicates
                log.debug("entity already exists at " + url);
                return;
              }
            }
            if (!message) {
              message = "Failed to POST to " + url + " got status: " + status;
            }
            log.warn("Failed to save " + url + " status: " + status + " response: " + angular.toJson(data, true));
            Core.notification('error', message);
          });
        }
      });
    }
  }
  */


  /**
   * Returns true if the current status of the pod is running
   */
  export function isRunning(podCurrentState) {
    var status = (podCurrentState || {}).phase;
    if (status) {
      var lower = status.toLowerCase();
      return lower.startsWith("run");
    } else {
      return false;
    }
  }

  /**
   * Returns true if the labels object has all of the key/value pairs from the selector
   */
  export function selectorMatches(selector, labels) {
    if (angular.isObject(labels)) {
      var answer = true;
      var count = 0;
      angular.forEach(selector, (value, key) => {
        count++;
        if (answer && labels[key] !== value) {
          answer = false;
        }
      });
      return answer && count > 0;
    } else {
      return false;
    }
  }

  /**
   * Returns the service registry
   */
  export function getServiceRegistry() {
    var injector = HawtioCore.injector;
    return injector ? injector.get("ServiceRegistry") : null;
  }


  /**
   * Returns a link to the kibana logs web application
   */
  /*
  export function kibanaLogsLink(ServiceRegistry) {
    var link = ServiceRegistry.serviceLink(kibanaServiceName);
    if (link) {
      if (!link.endsWith("/")) {
        link += "/";
      }
      return link + "#/dashboard/Fabric8";
    } else {
      return null;
    }
  }
  */

  /*
  export function openLogsForPods(ServiceRegistry, $window, namespace, pods) {
    var link = kibanaLogsLink(ServiceRegistry);
    if (link) {
      var query = "";
      var count = 0;
      angular.forEach(pods, (item) => {
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
  */

  export function resizeController($http, KubernetesApiURL, replicationController, newReplicas, onCompleteFn = null) {
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
              log.debug("updated controller " + url);
              if (angular.isFunction(onCompleteFn)) {
                onCompleteFn();
              }
            }).
          error(function (data, status, headers, config) {
            log.warn("Failed to save " + url + " " + data + " " + status);
          });
        }
      }).
      error(function (data, status, headers, config) {
        log.warn("Failed to load " + url + " " + data + " " + status);
      });
  }

  export function podStatus(pod) {
    return getStatus(pod);
  }

  /**
   * converts a git path into an accessible URL for the browser
   */
  export function gitPathToUrl(iconPath, branch = "master") {
    return (HawtioCore.injector.get('AppLibraryURL') || '') + "/git/" + branch + iconPath;
  }


  /**
   * Configures the json schema
   */
        /*
  export function configureSchema() {
    angular.forEach(schema.definitions, (definition, name) => {
      var properties = definition.properties;
      if (properties) {
        var hideProperties = ["creationTimestamp", "kind", "apiVersion", "annotations", "additionalProperties", "namespace", "resourceVersion", "selfLink", "uid"];
        angular.forEach(hideProperties, (propertyName) => {
          var property = properties[propertyName];
          if (property) {
            property["hidden"]  = true;
          }
        });
        angular.forEach(properties, (property, propertyName) => {
          var ref = property["$ref"];
          var type = property["type"];
          if (ref && (!type || type === "object")) {
            property["type"] = ref;
          }
          if (type === "array") {
            var items = property["items"];
            if (items) {
              var ref = items["$ref"];
              var type = items["type"];
              if (ref && (!type || type === "object")) {
                items["type"] = ref;
              }
            }
          }
        });
      }

      schema.definitions.os_build_WebHookTrigger.properties.secret.type = "password";
    })
  }
  */

  /**
   * Lets remove any enriched data to leave the original json intact
   */
  export function toRawJson(item) {
    var o = angular.copy(item);
    angular.forEach(o, (value, key) => {
      if (key.startsWith("$") || key.startsWith("_")) {
        delete o[key];
      }
    });
    return JSON.stringify(o, null, 2); // spacing level = 2
  }

}
