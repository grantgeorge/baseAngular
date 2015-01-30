
angular.module('app', [])
  .factory('$exceptionHandler', function ($injector) {
    return function (exception, cause) {
      var $rootScope = $injector.get('$rootScope');
      $rootScope.errors = $rootScope.errors || [];
      $rootScope.errors.push(exception.message);
      console.log($rootScope.errors);
    }
  })
  .run(function ($http) {

    function onSuccess (result) {
      console.log('hooray data!');
      console.log(result.data.length, 'repos found');
      result.count();
    }

    function onFailure (info) {
      console.log('boo error :(');
      console.log(info);
    }

    $http.get('https://api.github.com/users/bclinkinbeard/repos')
      .then(onSuccess, onFailure);

  });
