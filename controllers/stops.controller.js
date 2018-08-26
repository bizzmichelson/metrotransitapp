myApp.controller('StopsController', [
    '$routeParams',
    'dataService',
    function StopsController($routeParam, dataService) {
      console.log('in home controller');
  
      var vm = this;
      var resObj;
  
      console.log(dataService);
  
      dataService.getDepartures().then(function(response) {
        return vm.resObj;
      });
    }
  ]);