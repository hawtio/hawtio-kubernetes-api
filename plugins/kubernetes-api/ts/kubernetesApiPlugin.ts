/// <reference path="kubernetesApiHelpers.ts"/>
declare var OSOAuthConfig:any;
declare var GoogleOAuthConfig:any;
declare var KeycloakConfig:any;

module KubernetesAPI {

  export var _module = angular.module(pluginName, []);

  hawtioPluginLoader.registerPreBootstrapTask({
    name: 'KubernetesApiConfig',
    depends: 'KubernetesApiInit',
    task: (next) => {
      K8S_PREFIX = Core.trimLeading(Core.pathGet(osConfig, ['api', 'k8s', 'prefix']) || K8S_PREFIX, '/');
      OS_PREFIX = Core.trimLeading(Core.pathGet(osConfig, ['api', 'openshift', 'prefix']) || OS_PREFIX, '/');
      next();
    }
  });

  hawtioPluginLoader.registerPreBootstrapTask({
    name: 'KubernetesApiInit',
    task: (next) => {
      $.getScript('osconsole/config.js')
        .done((script, textStatus) => {
          var config:KubernetesConfig = KubernetesAPI.osConfig = window['OPENSHIFT_CONFIG'];
          log.debug("Fetched OAuth config: ", config);
          var master:string = config.master_uri;
          if (!master && config.api && config.api.k8s) {
            var masterUri = new URI().host(config.api.k8s.hostPort).path("").query("");
            if (config.api.k8s.proto) {
              masterUri.protocol(config.api.k8s.proto);
            }
            master = masterUri.toString();
          }

          OSOAuthConfig = config.openshift;
          GoogleOAuthConfig = config.google;
          KeycloakConfig = config.keycloak;

          if (OSOAuthConfig && !master) {
            // TODO auth.master_uri no longer used right?
            // master = OSOAuthConfig.master_uri;
            if (!master) {
              var oauth_authorize_uri = OSOAuthConfig.oauth_authorize_uri;
              if (oauth_authorize_uri) {
                var text = oauth_authorize_uri;
                var idx = text.indexOf("://");
                if (idx > 0) {
                  idx += 3;
                  idx = text.indexOf("/", idx);
                  if (idx > 0) {
                    master = text.substring(0, ++idx);
                  }
                }
              }
            }
          }
          if ((!KubernetesAPI.masterUrl || KubernetesAPI.masterUrl === "/") && (!master || master === "/")) {
            // lets default the master to the current protocol and host/port
            // in case the master url is "/" and we are
            // serving up static content from inside /api/v1/namespaces/default/services/fabric8 or something like that
            var href = location.href;
            if (href) {
              master = new URI(href).query("").path("").toString();
            }
          }
          if (master) {
            KubernetesAPI.masterUrl = master;
          }
          next();
        })
      .fail((response) => {
        log.debug("Error fetching Kubernetes config: ", response);
        next();
      });
    }
  }, true);

  hawtioPluginLoader.addModule('ngResource');
  hawtioPluginLoader.addModule(pluginName);

}
