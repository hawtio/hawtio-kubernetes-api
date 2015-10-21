/// <reference path="kubernetesApiGlobals.d.ts" />
/// <reference path="kubernetesApiHelpers.d.ts" />
/// <reference path="kubernetesApiPlugin.d.ts" />
declare module KubernetesAPI {
    class CollectionImpl {
        private _kind;
        private _namespace;
        private _path;
        private _wsUrl;
        private _restUrl;
        private _cb;
        private handlers;
        private list;
        constructor(kind: string, namespace?: string);
        wsUrl: string;
        namespace: string;
        kind: string;
        connected: boolean;
        private initializeCallback(cb);
        connect(): void;
        get(cb: (data: any) => void): void;
        private restUrlFor(item, useName?);
        watch(cb: () => void): void;
        put(item: any, cb: (data: any) => void): void;
        delete(item: any, cb: (data: any) => void): void;
    }
}
