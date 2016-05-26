/// <reference path="kubernetesApiInterfaces.ts"/>
/// <reference path="../../includes.ts"/>

declare var smokesignals;

module KubernetesAPI {

  export var pluginName = 'KubernetesAPI';
  export var pluginPath = 'plugins/kubernetes-api/';
  export var templatePath = pluginPath + 'html/';
  export var log:Logging.Logger = Logger.get(pluginName);

  export var keepPollingModel = true;

  export var defaultIconUrl = Core.url("/img/kubernetes.svg");
  export var hostIconUrl = Core.url("/img/host.svg");

  // this gets set as a pre-bootstrap task
  export var osConfig:KubernetesConfig = undefined;
  export var masterUrl = "";
  export var isOpenShift = false;

  export var K8S_PREFIX = 'api';
  export var OS_PREFIX = 'oapi';
  export var K8S_EXT_PREFIX = 'apis';

  export var K8S_API_VERSION = 'v1';
  export var OS_API_VERSION = 'v1';
  export var K8S_EXT_VERSION = 'v1beta1';
  export var K8S_EXTENSIONS = 'extensions';

  export var defaultApiVersion = K8S_API_VERSION;
  export var defaultOSApiVersion = OS_API_VERSION;

  export var labelFilterTextSeparator = ",";
  export var defaultNamespace = "default";
  export var appSuffix = ".app";
}
