function initWatcherScope(factory, $scope, $element, kind, namespace) {
  $scope.kind = kind;
  $scope.namespace = namespace;
  console.log("Watcher scope:", $scope);
  const client = $scope.client = factory.create(kind, namespace);
  const handle = client.watch(function (objects) {
    console.log("Watcher controller[" + kind + ", " + namespace + "] got data:", objects);
    $scope.objects = objects;
    $scope.$apply();
  });
  $scope.$watchCollection('objects', function (newValue) {
    console.log("Watcher controller[" + kind + ", " + namespace + "] collection changed");
  });
  $scope.delete = function (obj) {
    client.delete(obj, function (obj) {
      console.log("Watcher controller[" + kind + ", " + namespace + "] deleted:", obj);
    });
  };
  $scope.create = function () {
    const item = _.cloneDeep(_.sample($scope.objects));
    delete item.metadata.resourceVersion;
    delete item.metadata.uid;
    item.metadata.name = "new-" + item.metadata.name;
    client.put(item, function (obj) {
      console.log("Watcher controller[" + kind + ", " + namespace + "] created:", obj);
    });
  };
  $element.on('$destroy', () => {
    console.log("Watcher controller[" + kind + ", " + namespace + "] element destroyed");
    $scope.$destroy();
  });
  $scope.$on('$destroy', () => {
    console.log("Watcher controller[" + kind + ", " + namespace + "] scope destroyed");
    factory.destroy(client, handle);
  });
  $scope.deleteScope = function () {
    $element.remove();
  };
  client.connect();
}

function initStaticScope($scope, $element, kind, namespace) {
  $scope.kind = kind;
  $scope.namespace = namespace;
  console.log("Static function scope:", $scope);
  const connection = KubernetesAPI.watch({
    kind: kind,
    namespace: namespace,
    success: function (objects) {
      console.log("Static controller[" + kind + ", " + namespace + "] got data:", objects);
      $scope.objects = objects;
      $scope.$apply();
    }
  });
  $element.on('$destroy', () => {
    console.log("Static controller[" + kind + ", " + namespace + "] element destroyed");
    $scope.$destroy();
  });
  $scope.$on('$destroy', () => {
    console.log("Static controller[" + kind + ", " + namespace + "] scope destroyed");
    connection.disconnect();
  });
  $scope.deleteScope = function () {
    $element.remove();
  };
}

const _module = angular.module('Test', []);
_module.controller('TestWatcherController', ['$scope', '$element', 'K8SClientFactory', function ($scope, $element, K8SClientFactory) {
  $scope.init = function (kind, namespace) {
    initWatcherScope(K8SClientFactory, $scope, $element, kind, namespace);
  };
}]);
_module.controller('TestStaticController', ['$scope', '$element', '$window', 'authService', function ($scope, $element, $window, authService) {
  $scope.init = function (kind, namespace) {
    initStaticScope($scope, $element, kind, namespace);
  };
  $scope.logout = function () {
    authService.logout();
    $window.location.reload();
  };
  setTimeout(function () {
    if (!KubernetesAPI.isOpenShift) {
      return;
    }
    KubernetesAPI.put({
      success: function (data) {
        console.log("Put result:", data);
        setTimeout(function () {
          KubernetesAPI.del(
            KubernetesAPI.createList(
              KubernetesAPI.createShallowObject("foo", KubernetesAPI.WatchTypes.ROUTES, "default"),
              KubernetesAPI.createShallowObject("bar", KubernetesAPI.WatchTypes.ROUTES, "default")), function (status) {
                console.log("Deleted items, status:", status);
              });
        }, 5000);
      },

      object: {
        apiVersion: 'v1',
        kind: 'List',
        objects: [
          {
            apiVersion: 'route.openshift.io/v1',
            kind: 'Route',
            metadata: {
              namespace: 'default',
              name: 'foo'
            },
            spec: {
              host: "foo.vagrant.f8",
              to: {
                kind: "Service",
                name: "fabric8"
              }
            }
          },
          {
            apiVersion: 'route.openshift.io/v1',
            kind: 'Route',
            metadata: {
              namespace: 'default',
              name: 'bar'
            },
            spec: {
              host: "bar.vagrant.f8",
              to: {
                kind: "Service",
                name: "fabric8"
              }
            }
          }
        ]
      }
    });
  }, 5000);
}]);

hawtioPluginLoader.addModule('Test');
