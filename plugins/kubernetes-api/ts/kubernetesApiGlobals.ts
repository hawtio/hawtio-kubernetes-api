/// <reference path="kubernetesApiInterfaces.ts"/>
/// <reference path="../../includes.ts"/>

module KubernetesAPI {
  export var context = '/kubernetes';
  export var hash = '#' + context;
  export var defaultRoute = hash + '/apps';
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

  export var defaultApiVersion = "v1";
  export var defaultOSApiVersion = "v1";
  export var labelFilterTextSeparator = ",";

  export var defaultNamespace = "default";

  export var appSuffix = ".app";

  // kubernetes service names
  export var kibanaServiceName = "kibana";
  export var fabric8ForgeServiceName = "fabric8-forge";
  export var gogsServiceName = "gogs";
  export var isOpenShift = true;
}
