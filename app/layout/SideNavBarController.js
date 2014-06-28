(function () {
    'use strict';

    var controllerId = 'SideNavBarController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', '$location', SideNavBarController]);

    function SideNavBarController($scope, $routeParams, $location) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'SideNavBarController';
        vm.getClass = function (path) {            
            var currentPath = $location.path().substr(0, path.length);
            if (currentPath == path) {
                if ($location.path().substr(0).length > 1 && path.length == 1)
                    return "";
                else {
                    return "stick active";
                }
            } else {
                return "";
            }
        }
        function activate() { }
    }
})();
