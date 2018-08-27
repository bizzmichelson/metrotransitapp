myApp.controller('DirectionsController', [
  '$routeParams',
  'dataService',
  function DirectionsController($routeParams, dataService) {


    var dc = this;
    dc.route = $routeParams.route;

    dataService.getDirections($routeParams.route).then(function(response) {
      return (dc.directions = response.data);
    });
  }
]);
