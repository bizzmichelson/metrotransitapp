myApp.controller('HomeController', [
  '$routeParams',
  'dataService',
  function HomeController($routeParam, dataService) {
    console.log('in home controller');

    var vm = this;
    var resObj;

    console.log(dataService);

    dataService.getRoutes().then(function(response) {
      return vm.resObj;
    });
  }
]);
