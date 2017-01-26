// 07_app.html-hez:

// var myNinjaApp = angular.module('myNinjaApp', []);

//--------------------------------------------------------------------

// 08_app.html-hez:
var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider){

    //Prettyurl miatt van itt:
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'Ninjacontroller'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'Contactcontroller'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'Contactcontroller'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'Ninjacontroller'
        }).otherwise({
            redirectTo: '/home'
        });
}]);
//--------------------------------------------------------------------

//
// myNinjaApp.run(function(){
//
// });

// myNinjaApp.controller('Ninjacontroller', function($scope){
//     $scope.message = "hey all";
//     $scope.ninjas = ['yoshi', 'christal', 'ryu', 'shaun'];
// });

myNinjaApp.directive('randomNinja', [function(){

    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };

}]);

myNinjaApp.controller('Ninjacontroller', ['$scope', '$http', function($scope, $http){
    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    };

    $scope.removeAll = function(){
        $scope.ninjas = [];
    };

    $http.get('data/ninjas.json').then(function(response){
        $scope.ninjas = response.data;
    });

    // $scope.ninjas = [
    //     {
    //         name: "yoshi",
    //         belt: "green",
    //         rate: 50,
    //         available: true,
    //         thumb: "content/png/1.png"
    //     },
    //     {
    //         name: "crystal",
    //         belt: "yellow",
    //         rate: 30,
    //         available: true,
    //         thumb: "content/png/2.png"
    //     },
    //     {
    //         name: "ryu",
    //         belt: "orange",
    //         rate: 10,
    //         available: true,
    //         thumb: "content/png/3.png"
    //     },
    //     {
    //         name: "shaun",
    //         belt: "black",
    //         rate: 1000,
    //         available: true,
    //         thumb: "content/png/4.png"
    //     }
    // ];
    //
    // console.log(angular.toJson($scope.ninjas));
    // Ezzelcsinaltam a ninjas tombombol json-t amit a consolra kiirattam es ennek eredmenyet masoltam be a data json file-ba. Kozben a jsonlint.com - on ellenoriztem az ervenyesseget.

}]);

myNinjaApp.controller('Contactcontroller', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success')
    };
}]);
