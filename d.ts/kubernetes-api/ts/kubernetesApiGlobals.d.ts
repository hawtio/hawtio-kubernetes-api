/// <reference path="kubernetesApiInterfaces.d.ts" />
/// <reference path="../../includes.d.ts" />
declare module KubernetesAPI {
    var context: string;
    var hash: string;
    var defaultRoute: string;
    var pluginName: string;
    var pluginPath: string;
    var templatePath: string;
    var log: Logging.Logger;
    var keepPollingModel: boolean;
    var defaultIconUrl: string;
    var hostIconUrl: string;
    var osConfig: KubernetesConfig;
    var masterUrl: string;
    var defaultApiVersion: string;
    var defaultOSApiVersion: string;
    var labelFilterTextSeparator: string;
    var defaultNamespace: string;
    var appSuffix: string;
    var kibanaServiceName: string;
    var fabric8ForgeServiceName: string;
    var gogsServiceName: string;
    var isOpenShift: boolean;
}
