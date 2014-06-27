$(function() {
    var mainApp = angular.module("mainApp");

    var homeController = function($scope) {
        $scope.header = 'Mission';
    };

    mainApp.controller('HomeController', homeController);
}());