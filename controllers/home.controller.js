myApp.controller('HomeController', function () {
  console.log('in home controller');
});

var vm = this;
var resObj = [];

console.log(dataService);

dataService.getRoutes().then(function (response) {
  console.log(response.data);
  // console.log("res.Obj", resObj);
  vm.resObj = response.data;
});