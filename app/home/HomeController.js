(function () {
    'use strict';

    var controllerId = 'HomeController';
    angular.module('mainApp').controller(controllerId, ['$scope', HomeController]);

    function HomeController($scope) {
        var vm = this;
        vm.title = 'Mission';
    };   
})();