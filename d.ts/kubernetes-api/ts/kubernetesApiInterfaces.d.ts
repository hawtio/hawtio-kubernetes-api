interface SmokeSignals {
    convert(obj: any, handlers?: any): any;
}
interface EventEnabled {
    on(eventName: string, handler: Function): any;
    once(eventName: string, handler: Function): any;
    off(eventName: string, handler: Function): any;
    emit(eventName: string, ...args: any[]): any;
}
declare module KubernetesAPI {
    class consts {
        NAMESPACE_STORAGE_KEY: string;
    }
    var Constants: consts;
    interface ApiLocation {
        proto?: string;
        hostPort: string;
        prefix: string;
    }
    interface ApiLocations {
        openshift?: ApiLocation;
        k8s?: ApiLocation;
    }
    interface KubernetesConfig {
        master_uri?: string;
        api?: ApiLocations;
        openshift?: OpenShiftOAuthConfig;
        google?: GoogleOAuthConfig;
        keycloak?: KeyCloakAuthConfig;
    }
    interface OpenShiftOAuthConfig {
        oauth_authorize_uri: string;
        oauth_client_id: string;
    }
    interface GoogleOAuthConfig {
        authenticationURI: string;
        authorizationURI: string;
        clientId: string;
        clientSecret: string;
        redirectURI: string;
        scope: string;
        tokenURI?: string;
    }
    interface KeyCloakAuthConfig {
        oauth_authorize_uri: string;
        oauth_client_id: string;
    }
    interface KubernetesState {
        namespaces: Array<string>;
        selectedNamespace: string;
    }
    class WatchTypes {
        static LIST: string;
        static ENDPOINTS: string;
        static EVENTS: string;
        static NAMESPACES: string;
        static NODES: string;
        static PERSISTENT_VOLUMES: string;
        static PERSISTENT_VOLUME_CLAIMS: string;
        static PODS: string;
        static REPLICATION_CONTROLLERS: string;
        static RESOURCE_QUOTAS: string;
        static OAUTH_CLIENTS: string;
        static SECRETS: string;
        static SERVICES: string;
        static SERVICE_ACCOUNTS: string;
        static TEMPLATES: string;
        static ROUTES: string;
        static BUILD_CONFIGS: string;
        static BUILDS: string;
        static DEPLOYMENT_CONFIGS: string;
        static IMAGES: string;
        static IMAGE_STREAMS: string;
        static IMAGE_STREAM_TAGS: string;
        static POLICIES: string;
        static POLICY_BINDINGS: string;
        static PROJECTS: string;
        static ROLE_BINDINGS: string;
        static ROLES: string;
    }
    class NamespacedTypes {
        static k8sTypes: Array<string>;
        static osTypes: Array<string>;
    }
    interface K8SOptions {
        kind?: string;
        namespace?: string;
        apiVersion?: string;
        labelSelector?: LabelMap;
        object?: any;
        success?: (objs: any[]) => void;
        error?: (err: any) => void;
        urlFunction?: (options: K8SOptions) => string;
    }
    class WatchActions {
        static INIT: string;
        static ANY: string;
        static ADDED: string;
        static MODIFIED: string;
        static DELETED: string;
    }
    interface ObjectMap {
        [uid: string]: any;
    }
    interface LabelMap {
        [name: string]: string;
    }
    interface Collection {
        wsURL: string;
        restURL: string;
        namespace: string;
        kind: string;
        connected: boolean;
        connect(): any;
        get(cb: (data: any[]) => void, labelSelector?: LabelMap): void;
        watch(cb: (data: any[]) => void, labelSelector?: LabelMap): (data: any[]) => void;
        unwatch(cb: (data: any[]) => void): void;
        put(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
        delete(item: any, cb: (data: any) => void, error?: (err: any) => void): void;
        getKey(): string;
    }
    interface K8SClientFactory {
        create(kind: any, namespace?: string): Collection;
        destroy(client: Collection, ...handles: Array<(data: any[]) => void>): void;
    }
}
