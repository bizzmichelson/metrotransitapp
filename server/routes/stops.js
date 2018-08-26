myApp.controller('StopsController', function(dataService) {
  var vm = this;
  var Stops = [];

  console.log(dataService);

  console.log('in stops controller');

  dataService.getStops().then(function(response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.Stops = response.data;
    // return vm.resObj;
  });
});

