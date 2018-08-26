var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/route/:route', {
      templateUrl: 'views/routes.html',
      controller: 'RoutesController as rc'
    })
    .otherwise({
      redirectTo: '/'
    });
});




myApp.controller('HomeController', function() {
  console.log('hello');
});
