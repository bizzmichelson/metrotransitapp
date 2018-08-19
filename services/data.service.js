var myApp = angular.module('myApp', []);

//do I need to define this again?

myApp.service('dataService', function($http, $location) {
  console.log('dataService Loaded');

  var ds = this;

  ds.Stops = {
    data: []
  };
  ds.Routes = {
    data: []
  };
  ds.Directions = {
    data: []
  };

  ds.getRoutes = function() {
    console.log();
    return $http({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/Routes?format=json'
    }).then(function(res) {
      ds.Routes.data = res.data;
      return ds.Routes.data;
    });
  };

  ds.getDirections = function() {
    console.log();
    return $http({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/Directions/5?format=json'
    }).then(function(res) {
      ds.Directions.data = res.data;
      return ds.Directions.data;
    });
  };

  ds.getStops = function() {
    console.log();
    return $http({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/Stops/21/3?format=json'
    }).then(function(res) {
      ds.Stops.data = res.data;
      return ds.Stops.data;
    });
  };
});

// ds.postTrip = function (TripObject) {
//     console.log(TripObject);
//     $http({
//         method: 'POST',
//         url: 'http://svc.metrotransit.org/NexTrip/{ROUTE}/{DIRECTION}/{STOP}'
//         data: TripObject
//     }).then(function (response) {
//         console.log('server response')
//         console.log($location.path())
//         $location.path('/chart')
//     }).catch(function (error) {
//         console.error(error);
//     });
// }

// [{
//   "Actual":true,
//   "BlockNumber":2147483647,
//   "DepartureText":"String content",
//   "DepartureTime":"\/Date(928167600000-0500)\/",
//   "Description":"String content",
//   "Gate":"String content",
//   "Route":"String content",
//   "RouteDirection":"String content",
//   "Terminal":"String content",
//   "VehicleHeading":2147483647,
//   "VehicleLatitude":12678967.543233,
//   "VehicleLongitude":12678967.543233
// }]
