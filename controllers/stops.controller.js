myApp.controller('StopsController', function($http, dataService) {
  var vm = this;

  vm.clicky = function() {
    dataService.postStops(vm.input);
  };
  console.log('in StopsController controller');
});
