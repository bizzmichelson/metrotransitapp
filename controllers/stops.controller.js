myApp.controller('StopsController', [
  '$routeParams',
  'dataService',
  function StopsController($routeParams, dataService) {
    var sc = this;
    sc.direction = $routeParams.direction;
    sc.route = $routeParams.route;

    dataService.getStops($routeParams).then(function(response) {
      sc.stops = response.data;
    });
  }
]);
