myApp.service('dataService', [
  '$http',
  '$location',
  function($http, $location) {
    console.log('data.service works');
    var ds = this;
    var route = $routeParam;

    ds.getRoutes = function() {
      console.log();
      return $http({
        method: 'GET',
        url:
          'http://svc.metrotransit.org/NexTrip/Routes/' + route + '?format=json'
      });
    };

    //   ds.getDirections = function (route) {
    //     console.log();
    //     return $http({
    //       method: 'GET',
    //       url: 'http://svc.metrotransit.org/NexTrip/Directions/' +
    //         route +
    //         '?format=json'
    //     });
    //   };
    //   //   }).then(function(res) {
    //   //     ds.Directions.data = res.data;
    //   //     return ds.Directions.data;
    //   //   });
    //   // };

    //   ds.getStops = function () {
    //     console.log();
    //     return $http({
    //       method: 'GET',
    //       url: 'https://svc.metrotransit.org/NexTrip/Stops/{Routes}/{Directions}?format=json'
    //     }).then(function (res) {
    //       ds.Stops.data = res.data;
    //       return ds.Stops.data;
    //     });
    //   };

    //   ds.getDepartures = function () {
    //     console.log();
    //     return $http({
    //       method: 'GET',
    //       url: 'https://svc.metrotransit.org/NexTrip/{STOPID}?format=json'
    //     }).then(function (res) {
    //       ds.Departures.data = res.data;
    //       return ds.Departures.data;
    //     });
    //   };
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
