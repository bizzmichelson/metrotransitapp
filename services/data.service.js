myApp.service('dataService', ['$http', '$location', function ($http, $location) {
    console.log('data.service works');

    var ds = this;

    ds.getStops = function () {
        console.log();
        return $http({
            method: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/Stops/21/3?format=json',
        })
    }

    // ds.postBasics = function (HighLowObject) {
    //     console.log(HighLowObject);
    //     $http({
    //         method: 'POST',
    //         url: '/api/basics',
    //         data: HighLowObject
    //     }).then(function (response) {
    //         console.log('server response')
    //         console.log($location.path())
    //         $location.path('/chart')
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }

    // ds.postEvents = function (eventsObject) {
    //     console.log(eventsObject);
    //     $http({
    //         method: 'POST',
    //         url: '/api/addEvents',
    //         data: eventsObject
    //     }).then(function (response) {
    //         console.log('server response')
    //         console.log($location.path())
    //         $location.path('/chart')
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }




    // ds.deleteItems = function (id) {
    //     var sure = confirm("are you sure?");
    //     if (sure) {
    //         return $http({
    //             method: "DELETE",
    //             url: "/api/deleteItem/" + id,
    //         })
    //     }
    // }

}]);