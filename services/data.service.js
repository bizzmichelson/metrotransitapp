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
    //     console.log(HighLowObject);
    //     $http({
    //         method: 'POST',
    //         url: '/api/basics',
    //         data: HighLowObject
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
