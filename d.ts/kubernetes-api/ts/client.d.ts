/// <reference path="kubernetesApiGlobals.d.ts" />
/// <reference path="kubernetesApiHelpers.d.ts" />
/// <reference path="kubernetesApiPlugin.d.ts" />
declare module KubernetesAPI {
    class CollectionImpl implements Collection {
        private _kind;
        private _namespace;
        private _path;
        private _wsUrl;
        private _restUrl;
        private handlers;
        private list;
        constructor(kind: string, namespace?: string);
        getKey(): string;
        wsURL: string;
        restURL: string;
        namespace: string;
        kind: string;
        connected: boolean;
        connect(): void;
        destroy(): void;
        get(cb: (data: any[]) => void): void;
        private restUrlFor(item, useName?);
        watch(cb: (data: any[]) => void): (data: any[]) => void;
        unwatch(cb: (data: any[]) => void): void;
        put(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
        delete(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
    }
    var K8SClientFactory: K8SClientFactory;
    function get(options: K8SOptions): void;
    function del(options: any): void;
    function put(options: any): void;
}
