(function () {
    'use strict';

    var appId = 'mainApp';
    var mainApp = angular.module(appId, ['ngRoute', 'ngAnimate']);    

    mainApp.run(['$route','$rootScope', '$location','$window',
       function ($route,  $rootScope, $location, $window) {          
           $rootScope.$on('$routeChangeStart', function(event, newUrl) {
               $window.scrollTo(0, 0);
           });           
       }]);
})();