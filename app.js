angular.module('app1', [])
  // .factory('$exceptionHandler', function ($injector) {
  //   return function (exception, cause) {
  //     var $rootScope = $injector.get('$rootScope');
  //     $rootScope.errors = $rootScope.errors || [];
  //     $rootScope.errors.push(exception.message);

  //     console.log(exception);

  //     // console.log($rootScope.errors);
  //   }
  // })
  .run(function ($http, $rootScope) {

  })
  .controller('ControllerOne', function ($scope, $rootScope) {

    $scope.testInput = '';

    $scope.emitChange = function () {
      $rootScope.$emit('rootScope:emit', $scope.testInput); // $rootScope.$on
      // $rootScope.$broadcast('rootScope:broadcast', 'Broadcast'); // $rootScope.$on && $scope.$on
    };

    $rootScope.$on('rootScope:emit', function (event, data) {
      console.log('CtrlOne rootScope:emit ' + data); // 'Emit!'
      $scope.testInput = data;
    });

    // $scope.$on('rootScope:broadcast', function (event, data) {
    //   console.log('CtrlOne rootScope:emit ' + data); // 'Broadcast!'
    // });

    // $rootScope.$on('rootScope:broadcast', function (event, data) {
    //   console.log('CtrlOne rootScope:broadcast ' + data); // 'Broadcast!'
    // });

  })
  .controller('ControllerTwo', function ($scope, $rootScope) {

    $scope.testInput = '';

    $scope.emitChange = function () {
      $rootScope.$emit('rootScope:emit', $scope.testInput); // $rootScope.$on
      // $rootScope.$broadcast('rootScope:broadcast', 'Broadcast'); // $rootScope.$on && $scope.$on
    };

    $rootScope.$on('rootScope:emit', function (event, data) {
      console.log('CtrlTwo rootScope:emit ' + data); // 'Emit!'
      $scope.testInput = data;
    });

    // $scope.$on('rootScope:broadcast', function (event, data) {
    //   console.log('CtrlTwo rootScope:emit ' + data); // 'Broadcast!'
    // });

    // $rootScope.$on('rootScope:broadcast', function (event, data) {
    //   console.log('CtrlTwo rootScope:broadcast ' + data); // 'Broadcast!'
    // });

  });

angular.module('app2', [])
  .run(function ($rootScope) {

  })
  .controller('ControllerOne', function ($scope) {

  })
  .controller('ControllerTwo', function ($scope) {

  });

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById("app1"),['app1']);
});
angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById("app2"),['app2']);
});
