myApp.controller('HomeController',
  function ($http, dataService) {
    console.log('in home controller');

    var vm = this;
    var resObj;


    console.log(dataService);

    dataService.getRoutes().then(function (response) {
      return (vm.resObj)
    });
  });