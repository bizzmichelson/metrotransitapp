myApp.service('dataService', [
  '$http',
  function($http) {
    var ds = this;

    ds.getRoutes = function() {
      return $http({
        method: 'GET',
        url: 'http://svc.metrotransit.org/NexTrip/Routes?format=json'
      });
    };

    ds.getDirections = function(route) {
      return $http({
        method: 'GET',
        url:
          'http://svc.metrotransit.org/NexTrip/Directions/' +
          route +
          '?format=json'
      });
    };

    ds.getStops = function(params) {
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
  }
]);

