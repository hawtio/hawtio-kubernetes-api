/// <reference path="kubernetesApiGlobals.d.ts" />
declare module KubernetesAPI {
    function apiPrefix(): string;
    function osApiPrefix(): string;
    function masterApiUrl(): string;
    function namespaced(kind: string): boolean;
    function kubernetesApiPrefix(): string;
    function openshiftApiPrefix(): string;
    function apiForKind(kind: string): string;
    function apiVersionForKind(kind: string): string;
    function prefixForKind(kind: string): string;
    function kubernetesApiUrl(): string;
    function openshiftApiUrl(): string;
    function getErrorObject(jqXHR: any): any;
    function wsScheme(url: string): string;
    function toKindName(kind: any): any;
    function toCollectionName(kind: any): string;
    function wsUrl(url: string): URI;
    function equals(left: any, right: any): boolean;
    function createList(...objects: any[]): {
        apiVersion: string;
        kind: any;
        objects: any[];
    };
    function createShallowObject(name: string, kind: string, namespace?: string): {
        apiVersion: string;
        kind: any;
        metadata: {
            name: string;
            namespace: string;
        };
    };
    function filterByLabel(objects: Array<any>, labelSelector: LabelMap): any[];
    function fullName(entity: any): string;
    function getUID(entity: any): any;
    function getNamespace(entity: any): any;
    function getLabels(entity: any): any;
    function getName(entity: any): any;
    function getKind(entity: any): any;
    function getSelector(entity: any): any;
    function getHost(pod: any): any;
    function getStatus(pod: any): any;
    function getPorts(service: any): any;
    function getCreationTimestamp(entity: any): any;
    function labelsToString(labels: any, seperatorText?: string): string;
    function isRunning(podCurrentState: any): any;
    function selectorMatches(selector: any, labels: any): boolean;
    function podStatus(pod: any): any;
}
