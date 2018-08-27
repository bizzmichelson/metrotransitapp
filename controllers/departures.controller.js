myApp.controller('DeparturesController', [
  '$routeParams',
  'dataService',
  function StopsController($routeParams, dataService) {
    var tc = this;
    tc.direction = $routeParams.direction;
    tc.route = $routeParams.route;
    tc.stop = $routeParams.stop;

    dataService.getDepartures($routeParams).then(function(response) {
      console.log(response.data);
      tc.departures = response.data;
    });
  }
]);
