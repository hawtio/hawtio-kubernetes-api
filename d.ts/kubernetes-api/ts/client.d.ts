/// <reference path="kubernetesApiGlobals.d.ts" />
/// <reference path="kubernetesApiHelpers.d.ts" />
/// <reference path="kubernetesApiPlugin.d.ts" />
declare module KubernetesAPI {
    var pollingOnly: string[];
    class CollectionImpl implements Collection {
        private options;
        private _kind;
        private _namespace;
        private _path;
        private _apiVersion;
        private handlers;
        private list;
        constructor(options: K8SOptions);
        private _restUrl;
        private _wsUrl;
        getKey(): string;
        wsURL: string;
        restURL: string;
        namespace: string;
        kind: string;
        connected: boolean;
        connect(): void;
        destroy(): void;
        private addLabelFilter(cb, labelSelector);
        get(cb: (data: any[]) => void, labelSelector?: LabelMap): void;
        private getPrefix();
        private restUrlFor(item, useName?);
        watch(cb: (data: any[]) => void, labelSelector?: LabelMap): (data: any[]) => void;
        unwatch(cb: (data: any[]) => void): void;
        put(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
        delete(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
    }
    var K8SClientFactory: K8SClientFactory;
    function get(options: K8SOptions): void;
    function del(options: any): void;
    function put(options: any): void;
    function watch(options: K8SOptions): {
        client: Collection;
        handle: (data: any[]) => void;
        disconnect: () => void;
    };
}
