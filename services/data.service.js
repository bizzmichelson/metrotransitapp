myApp.service('dataService', [
  '$http',
  function($http) {
    console.log('data.service works');
    var ds = this;

    ds.getRoutes = function() {
      return $http({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Routes?format=json'
      });
    };

    ds.getDirections = function(route) {
      console.log();
      return $http({
        method: 'GET',
        url:
          'http://svc.metrotransit.org/NexTrip/Directions/' +
          route +
          '?format=json'
      });
    };

    ds.getStops = function(params) {
      console.log();
      return $http({
        method: 'GET',
        url:
          'https://svc.metrotransit.org/NexTrip/Stops/' +
          params.route +
          '/' +
          params.direction +
          '?format=json'
      });
    };

    ds.getDepartures = function(params) {
      console.log();
      return $http({
        method: 'GET',
        url:
          'https://svc.metrotransit.org/NexTrip/' +
          params.route +
          '/' +
          params.direction +
          '/' +
          params.stop +
          '?format=json'
      });
    };

    //     ds.getDepartures = function (params) {
    //       console.log();
    //       return $http({
    //         method: 'GET',
    //         url: 'https://svc.metrotransit.org/NexTrip/?format=json' +
    //       }).then(function (res) {

    //     };
  }
]);
// });
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
