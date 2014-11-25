var myApp = angular.module('hardware', []);

myApp.controller('SpicyController', ['$scope','$http', function($scope, $http) {
    $scope.count = 0;
    $scope.metro = [];
    $scope.monster = [];
    $scope.af = [];
    $scope.amount = 15;


    $scope.search = function() {

    };


    $http.get('https://60c00fee-3a69-4516-ba2b-af3c2c324fe5@api.orchestrate.io/v0/Gamma/jobb').success(function(razormind) {
        $scope.metro = razormind.metrojobb;
        $scope.monster = razormind.monsterjobb;
        $scope.af = razormind.arbetsformedlingen;


    });


}]);

