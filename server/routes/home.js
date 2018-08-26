myApp.controller('HomeController', function (dataService) {
  var vm = this;
  var resObj = [];

  console.log(dataService);


  dataService.getRoutes().then(function (response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.resObj = response.data;
    // return vm.resObj;
    console.log('vm.resObj', vm.resObj);

    });    
  });