myApp.service('dataService', [
  '$http',
  '$location',
  function($http, $location) {
    console.log('data.service works');

    var ds = this;

    ds.getRoutes = function() {
      console.log();
      return $http({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Routes?format=json'
      });
    };

    ds.getDirections = function() {
      console.log();
      return $http({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Directions/5?format=json'
      });
    };

    ds.getStops = function() {
      console.log();
      return $http({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Stops/21/3?format=json'
      });
    };

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
  }
]);
