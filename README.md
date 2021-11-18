# hawtio-kubernetes-api

[![Build](https://github.com/hawtio/hawtio-kubernetes-api/actions/workflows/build.yml/badge.svg)](https://github.com/hawtio/hawtio-kubernetes-api/actions/workflows/build.yml)

Hawtio plugin that provides an easy API for working with a Kubernetes or OpenShift API server.

### Usage

To use the API, inject it into a service or controller:

```
  angular.module('my-awesome-stuff', ['KubernetesAPI']).controller('MyController', function($scope, K8SClientFactory) {

  });
```

The `K8SClientFactory` service implements this interface for managing client instances:

```
  export interface K8SClientFactory {
    create(kind:string, namespace?: string):Collection;
    destroy(client:Collection, ...handles:Array<(data:any[]) => void>):void;
  }
```

`create` will give you an object that implements this interface:

```
  export interface Collection {
    wsURL:string;
    restURL:string;
    namespace: string;
    kind: string;
    connected: boolean;
    connect();
    get(cb:(data:any[]) => void):void;
    watch(cb:(data:any[]) => void):void;
    unwatch(cb:(data:any[]) => void):void;
    put(item:any, cb:(data:any) => void, error?:(err:any) => void):void;
    delete(item:any, cb:(data:any) => void, error?:(err:any) => void):void;
    getKey():string;
  }

```

Supported watch types along with the above interfaces are exported from kubernetesApiInterfaces.ts.

Typical usage would be to create a client, and watch that client for changes.  Here's an example:

```
  angular.module('my-awesome-stuff', ['KubernetesAPI']).controller('MyController', function($scope, $element, K8SClientFactory) {

      $scope.kind = 'pods';
      $scope.namespace = 'default';

      // create our client instance...
      var client = $scope.client = K8SClientFactory.create(kind, namespace);

      // set up a watch here, important to save the returned 'handle' object
      // for cleaning up later...
      var handle = client.watch(function(objects) {
        console.log("Callback fired for kind: ", kind);
        $scope.objects = objects;
        // have to kick off a $digest here
        $scope.$apply();
      });

      // You can use watchCollection to do stuff in angular's event loop if you
      // like
      $scope.$watchCollection('objects', function(newValue) {
        console.log($scope.objectKind + " collection changed");
      });

      $scope.delete = function(obj) {

        // Deleting an object, you just pass the whole object in.
        client.delete(obj, function(obj) {
          console.log("Deleted: ", obj);
        });
      };

      $scope.create = function() {
        var item = _.cloneDeep(_.sample($scope.objects));
        delete item.metadata.resourceVersion;
        delete item.metadata.uid;
        item.metadata.name = "new-" + item.metadata.name;

        // Here we're creating an object...  Since we're watching we'll just let 'watch' update our collection
        client.put(item, function(obj) {
          console.log("Created: ", obj);
        });
      };

      // client instances to an object collection are shared, important to use
      // the factory to destroy instances and avoid leaking memory
      $element.on('$destroy', function {
        $scope.$destroy();
      });
      $scope.$on('$destroy', function {
        K8SClientFactory.destroy(client, handle);
      });

      // This actually connects the client.
      client.connect();
  });

```

#### Output build to a different directory

When developing this plugin in a dependent console you can change the output directory where the compiled .js and .css go.  Just use the 'out' flag to set a different output directory, for example:

`gulp watch --out=../fabric8-console/libs/hawtio-kubernetes-api/dist/`

Whenever the build completes the compiled .js file will be put into the target directory.  Don't forget to first do a `gulp build` without this flag before committing changes!

#### Turn on source maps generation for debugging TypeScript

If you want to debug `.ts` using a browser developer tool such as Chrome DevTools, pass the `--sourcemap` flag:

```
yarn start --sourcemap
```

Do not use this flag when you are committing the compiled `.js` file, as it embeds source maps to the output file. Use this flag only during development.
