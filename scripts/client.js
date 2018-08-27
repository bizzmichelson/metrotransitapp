var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/directions/:route', {
      templateUrl: 'views/directions.html',
      controller: 'DirectionsController as dc'
    })
    .when('/stops/:route/:direction', {
      templateUrl: 'views/stops.html',
      controller: 'StopsController as sc'
    })
    .when('/departures/:route/:direction/:stop', {
      templateUrl: 'views/departures.html',
      controller: 'DeparturesController as tc'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// myApp.controller('HomeController', function() {
//   console.log('hello');
// });
