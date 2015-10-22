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
    return K8S_PREFIX;
  }

  export function osApiPrefix() {
    return OS_PREFIX;
    /*
      TODO - may not have a currently selected namespace
    if (!isOpenShift) {
      return UrlHelpers.join(apiPrefix(), OS_API_VERSION, "proxy", kubernetesNamespacePath(), "services/templates", answer);
    }
    */
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

  export function apiForKind(kind:string) {
    if (kind === WatchTypes.NAMESPACES) {
      return K8S_PREFIX;
    }
    if (_.any(NamespacedTypes.k8sTypes, (t) => t === kind)) {
      return K8S_PREFIX;
    }
    if (_.any(NamespacedTypes.osTypes, (t) => t === kind)) {
      return OS_PREFIX;
    }
    return null;
  }

  export function apiVersionForKind(kind:string) {
    var api = apiForKind(kind);
    switch(api) {
      case K8S_API_VERSION:
        return kubernetesApiPrefix();
        break;
      case OS_API_VERSION:
        return openshiftApiPrefix();
        break;
      default:
        return null;
    }
  }

  export function prefixForKind(kind:string) {
    var api = apiForKind(kind);
    switch(api) {
      case K8S_PREFIX:
        return kubernetesApiPrefix();
        break;
      case OS_PREFIX:
        return openshiftApiPrefix();
        break;
      default:
        return null;
    }
  }

  export function kubernetesApiUrl() {
    return UrlHelpers.join(masterApiUrl(), kubernetesApiPrefix());
  }

  export function openshiftApiUrl() {
    return UrlHelpers.join(masterApiUrl(), openshiftApiPrefix());
  }

  /*
   * Extracts the k8s/openshift error response if present
   */
  export function getErrorObject(jqXHR) {
    var answer:any = jqXHR.responseText;
    try {
      answer = angular.fromJson(answer);
    } catch (err) {
      // nothing to do...
    }
    return answer;
  }

  /*
   * Returns either secure/insecure websocket protocol based on the master URI protocol
   */
  export function wsScheme(url:string) {
    var protocol = new URI(url).protocol() || 'http';
    if (_.startsWith(protocol, 'https')) {
      return 'wss';
    } else {
      return 'ws';
    }
  }

  /*
   * Returns the websocket URL for the supplied URL
   */
  export function wsUrl(url:string) {
    var protocol = wsScheme(url);
    return new URI(url).scheme(protocol);
  }

  /*
   * Compare two k8s objects based on their UID
   */
  export function equals(left, right):boolean {
    return getUID(left) === getUID(right);
  }

  /**
   *
   * Kubernetes object helpers
   *
   **/

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

  export function podStatus(pod) {
    return getStatus(pod);
  }

}
