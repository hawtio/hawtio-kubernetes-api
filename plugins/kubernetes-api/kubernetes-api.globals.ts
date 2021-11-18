/// <reference path="kubernetes-api.model.ts"/>

module KubernetesAPI {

  export var pluginName = 'KubernetesAPI';
  export var log: Logging.Logger = Logger.get('hawtio-k8s-api');

  // this gets set as a pre-bootstrap task
  export var osConfig: KubernetesConfig = undefined;
  export var masterUrl = "";
  export var isOpenShift = false;

  export var K8S_PREFIX = 'api';
  export var OS_PREFIX = 'apis';
  export var K8S_EXT_PREFIX = 'apis/extensions';

  export var K8S_API_VERSION = 'v1';
  export var OS_API_VERSION = 'v1';
  export var K8S_EXT_VERSION = 'v1beta1';

}
