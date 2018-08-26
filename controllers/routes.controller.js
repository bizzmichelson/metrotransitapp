myApp.controller('RoutesController', [
  '$routeParams',
  'dataService',
  function RoutesController($routeParam, dataService) {
    console.log('in home controller');

    var vm = this;
    var resObj;

    console.log(dataService);

    dataService.getDirections().then(function(response) {
      return vm.resObj;
    });
  }
]);
