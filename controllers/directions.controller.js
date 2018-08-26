myApp.controller('DirectionsController', [
    '$routeParams',
    'dataService',
    function DirectionsController($routeParam, dataService) {
      console.log('in home controller');
  
      var vm = this;
      var resObj;
  
      console.log(dataService);
  
      dataService.getStops().then(function(response) {
        return vm.resObj;
      });
    }
  ]);