/// <reference path="kubernetes-api.model.ts"/>

namespace KubernetesAPI {

  export const pluginName = 'KubernetesAPI';
  export const log: Logging.Logger = Logger.get('hawtio-k8s-api');

  // this gets set as a pre-bootstrap task
  export let osConfig: KubernetesConfig = undefined;
  export let masterUrl = "";
  export let isOpenShift = false;

  export let K8S_PREFIX = 'api';
  export const OS_PREFIX = 'apis';
  export const K8S_EXT_PREFIX = 'apis/extensions';

  export const K8S_API_VERSION = 'v1';
  export const OS_API_VERSION = 'v1';
  export const K8S_EXT_VERSION = 'v1beta1';

}
