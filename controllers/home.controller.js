myApp.controller('HomeController', [
  'dataService',
  function HomeController(dataService) {
    var hc = this;
    dataService.getRoutes().then(function(response) {
      return (hc.routes = response.data);
    });
  }
]);
