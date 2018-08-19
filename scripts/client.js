var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('http://svc.metrotransit.org/NexTrip/Stops/21/3?format=json', {
      templateUrl: '{STOPS}',
      controller: 'StopsController as sc'
    })
    .otherwise({
      redirectTo: '/'
    });
});
