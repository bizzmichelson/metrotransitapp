myApp.controller('DirectionsController', [
  '$routeParams',
  'dataService',
  function DirectionsController($routeParams, dataService) {
    console.log('in directions controller');

    var dc = this;
    dc.route = $routeParams.route;

    console.log(dataService);

    dataService.getDirections($routeParams.route).then(function(response) {
      return (dc.directions = response.data);
    });
  }
]);
