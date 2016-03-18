/// <reference path="kubernetesApiGlobals.ts"/>

module KubernetesAPI {

  declare var K8SClientFactory:K8SClientFactory;

  export function apiPrefix() {
    return K8S_PREFIX;
  }

  export function osApiPrefix() {
    return OS_PREFIX;
  }

  export function masterApiUrl() {
    return masterUrl || "";
  }

  export function namespaced(kind:string) {
    switch (kind) {
      case KubernetesAPI.WatchTypes.POLICIES:
      case KubernetesAPI.WatchTypes.OAUTH_CLIENTS:
      case KubernetesAPI.WatchTypes.NODES:
      case KubernetesAPI.WatchTypes.PERSISTENT_VOLUMES:
      case KubernetesAPI.WatchTypes.PERSISTENT_VOLUME_CLAIMS:
      case KubernetesAPI.WatchTypes.PROJECTS:
      //case KubernetesAPI.WatchTypes.TEMPLATES:
        return false;

      default:
        return true;
    }
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
    if (kind === WatchTypes.IMAGES) {
      return OS_PREFIX;
    }
    return null;
  }

  export function apiVersionForKind(kind:string) {
    var api = apiForKind(kind);
    switch(api) {
      case K8S_API_VERSION:
        return kubernetesApiPrefix();
      case OS_API_VERSION:
        return openshiftApiPrefix();
      default:
        return null;
    }
  }

  export function prefixForKind(kind:string) {
    var api = apiForKind(kind);
    switch(api) {
      case K8S_PREFIX:
        return kubernetesApiPrefix();
      case OS_PREFIX:
        return openshiftApiPrefix();
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
   * Returns the single 'kind' of an object from the collection kind
   */
  export function toKindName(kind:any) {
    if (angular.isObject(kind)) {
      return getKind(kind);
    }
    if (!kind) {
      return undefined;
    }
    // TODO this trimRight works for now, but might not work at some point
    return _.trimRight(_.capitalize(kind), 's');
  }

  /*
   * Returns the collection kind of an object from the singular kind
   */
  export function toCollectionName(kind:any) {
    if (angular.isObject(kind)) {
      kind = getKind(kind);
    }
    if (!kind) {
      return undefined;
    }
    // TODO this trimRight works for now, but might not work at some point
    return kind.toLowerCase() + 's';
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
    var leftUID = getUID(left);
    var rightUID = getUID(right);
    if (!leftUID && !rightUID) {
      return angular.toJson(left) === angular.toJson(right);
    }
    return leftUID === rightUID;
  }

  /**
   *
   * Kubernetes object helpers
   *
   **/

  /**
   * Create a list of kubernetes objects suitable for posting a bunch of objects
   */
  export function createList(...objects:any[]) {
    var answer = {
      apiVersion: K8S_API_VERSION,
      kind: toKindName(WatchTypes.LIST),
      objects: []
    }
    _.forEach(objects, (object) => {
      if (angular.isArray(object)) {
        _.forEach(object, (o) => {
          answer.objects.push(o);
        });
      } else {
        answer.objects.push(object);
      }
    });
    return answer;
  }

  /**
   * Create an object suitable for delete/del
   */
  export function createShallowObject(name:string, kind:string, namespace?:string) {
    return {
      apiVersion: K8S_API_VERSION,
      kind: toKindName(kind),
      metadata: {
        name: name,
        namespace: namespace
      }
    };
  }

  /**
   * Filter a collection by label
   **/
  export function filterByLabel(objects:Array<any>, labelSelector:LabelMap) {
    var matches = (<any>_).matches(labelSelector);
    return _.filter(objects, (object) => {
      return matches(getLabels(object));
    });
  }

  /**
   * Returns a fully scoped name with the namespace/kind, suitable to use as a key in maps
   **/
  export function fullName(entity) {
    var namespace = getNamespace(entity);
    var kind = getKind(entity);
    var name = getName(entity);
    return UrlHelpers.join((namespace ? namespace : ""), kind, name);
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
