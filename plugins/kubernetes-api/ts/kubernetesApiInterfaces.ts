//defs for third-party eventing library

interface SmokeSignals {
  convert(obj:any, handlers?:any);
};

interface EventEnabled {
  on(eventName:string, handler:Function);
  once(eventName:string, handler:Function);
  off(eventName:string, handler:Function);
  emit(eventName:string, ...args:any[]);
};

module KubernetesAPI {

  export class consts {
    get NAMESPACE_STORAGE_KEY():string { return "k8sSelectedNamespace"; }
  }

  export var Constants = new consts();
	
  export interface ApiLocation {
    proto?:string;
    hostPort:string;
    prefix:string;
  }
  
  export interface ApiLocations {
    openshift?: ApiLocation;
    k8s?: ApiLocation;
  }

  export interface KubernetesConfig {
    master_uri?: string;
    api?: ApiLocations;
    openshift?: OpenShiftOAuthConfig;
    google?: GoogleOAuthConfig;
    keycloak?: KeyCloakAuthConfig;
  }

  export interface OpenShiftOAuthConfig {
    oauth_authorize_uri:string;
    oauth_client_id:string;
  }

  export interface GoogleOAuthConfig {
    authenticationURI:string;
    authorizationURI:string;
    clientId:string;
    clientSecret:string;
    redirectURI:string;
    scope:string;
    tokenURI?:string;
  }

  export interface KeyCloakAuthConfig {
    oauth_authorize_uri:string;
    oauth_client_id:string;
  }

  export interface KubernetesState {
    namespaces: Array<string>;
    selectedNamespace: string;
  }

	export class WatchTypes {
    public static get LIST():string { return "list"; }
		public static get ENDPOINTS():string { return "endpoints"; }
		public static get EVENTS():string { return "events"; }
    public static get NAMESPACES():string { return "namespaces"; }
		public static get NODES():string { return "nodes"; }
		public static get PERSISTENT_VOLUMES():string { return "persistentvolumes"; }
		public static get PERSISTENT_VOLUME_CLAIMS():string { return "persistentvolumeclaims"; }
		public static get PODS():string { return "pods"; }
		public static get REPLICATION_CONTROLLERS():string { return "replicationcontrollers"; }
		public static get RESOURCE_QUOTAS():string { return "resourcequotas"; }
		public static get OAUTH_CLIENTS():string { return "oauthclients"; }
		public static get SECRETS():string { return "secrets"; }
		public static get SERVICES():string { return "services"; }
		public static get SERVICE_ACCOUNTS():string { return "serviceaccounts"; }

		public static get TEMPLATES():string { return "templates"; }
		public static get ROUTES():string { return "routes"; }
		public static get BUILD_CONFIGS():string { return "buildconfigs"; }
		public static get BUILDS():string { return "builds"; }
		public static get DEPLOYMENT_CONFIGS():string { return "deploymentconfigs"; }
		public static get IMAGE_STREAMS():string { return "imagestreams"; }
		public static get POLICIES():string { return "policies"; }
		public static get POLICY_BINDINGS():string { return "policybindings"; }
    public static get PROJECTS():string { return "projects"; }
		public static get ROLE_BINDINGS():string { return "rolebindings"; }
		public static get ROLES():string { return "roles"; }
	}

  export class NamespacedTypes {
    public static get k8sTypes():Array<string> {
      return [
        WatchTypes.ENDPOINTS,
        WatchTypes.EVENTS,
        WatchTypes.NODES,
        WatchTypes.PERSISTENT_VOLUMES,
        WatchTypes.PERSISTENT_VOLUME_CLAIMS,
        WatchTypes.PODS,
        WatchTypes.REPLICATION_CONTROLLERS,
        WatchTypes.RESOURCE_QUOTAS,
        WatchTypes.PERSISTENT_VOLUMES,
        WatchTypes.SECRETS,
        WatchTypes.SERVICES,
        WatchTypes.SERVICE_ACCOUNTS
      ];
    }
    public static get osTypes():Array<string> {
      return [
        WatchTypes.TEMPLATES,
        WatchTypes.BUILD_CONFIGS,
        WatchTypes.ROUTES,
        WatchTypes.BUILDS,
        WatchTypes.BUILD_CONFIGS,
        WatchTypes.DEPLOYMENT_CONFIGS,
        WatchTypes.IMAGE_STREAMS,
        WatchTypes.OAUTH_CLIENTS,
        WatchTypes.POLICIES,
        WatchTypes.POLICY_BINDINGS,
        WatchTypes.PROJECTS,
        WatchTypes.ROLE_BINDINGS,
        WatchTypes.ROLES
      ];
    }
  }

  export interface K8SOptions {
    kind?: string;
    namespace?: string;
    object?: any;
    success?: (objs:any[]) => void;
    error?: (err:any) => void;
  }
	
	export class WatchActions {
    public static get INIT():string { return "INIT"; };
		public static get ANY():string { return "*"; };
		public static get ADDED():string { return "ADDED"; };
		public static get MODIFIED():string { return "MODIFIED"; };
		public static get DELETED():string { return "DELETED"; };
	}
	
	export interface ObjectMap {
		[uid:string]: any;		
	}
	
  export interface Collection {
    wsURL:string;
    restURL:string;
    namespace: string;
    kind: string;
    connected: boolean;
    connect();
    get(cb:(data:any[]) => void):void;
    watch(cb:(data:any[]) => void):(data:any[]) => void;
    unwatch(cb:(data:any[]) => void):void;
    put(item:any, cb:(data:any) => void, error?:(err:any) => void):void;
    delete(item:any, cb:(data:any) => void, error?:(err:any) => void):void;
    getKey():string;
  }

  export interface K8SClientFactory {
    create(kind:string, namespace?: string):Collection;
    destroy(client:Collection, ...handles:Array<(data:any[]) => void>):void;
  }

	
}
