/// <reference path="kubernetesApiInterfaces.d.ts" />
/// <reference path="../../includes.d.ts" />
declare var smokesignals: any;
declare module KubernetesAPI {
    var pluginName: string;
    var pluginPath: string;
    var templatePath: string;
    var log: Logging.Logger;
    var keepPollingModel: boolean;
    var defaultIconUrl: string;
    var hostIconUrl: string;
    var osConfig: KubernetesConfig;
    var masterUrl: string;
    var isOpenShift: boolean;
    var K8S_PREFIX: string;
    var OS_PREFIX: string;
    var K8S_EXT_PREFIX: string;
    var K8S_API_VERSION: string;
    var OS_API_VERSION: string;
    var K8S_EXT_VERSION: string;
    var K8S_EXTENSIONS: string;
    var defaultApiVersion: string;
    var defaultOSApiVersion: string;
    var labelFilterTextSeparator: string;
    var defaultNamespace: string;
    var appSuffix: string;
}
