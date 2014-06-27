$(function () {
    'use strict';

    var appId = 'mainApp';
    var mainApp = angular.module(appId, ['ngRoute', 'ngAnimate']);

    mainApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/aboutus', {
            templateUrl: 'templates/aboutus.html'
        })
        .when('/board', {
            templateUrl: 'templates/board.html'
        })
        .when('/academics', {
            templateUrl: 'templates/academics.html'
        })
        .when('/registration', {
            templateUrl: 'templates/registration.html'
        })
        .when('/schools', {
            templateUrl: 'templates/schools.html'
        })
        .when('/contacts', {
            templateUrl: 'templates/contacts.html'
        })
        .when('/resources', {
            templateUrl: 'templates/resources.html'
        })
        .when('/barathidasanCourses', {
            templateUrl: 'templates/barathidasanCourses.html'
        })
        .when('/berkuniv', {
            templateUrl: 'templates/berkuniv.html'
        })
        .when('/tvu', {
            templateUrl: 'templates/tvu.html'
        })
        .when('/schools/:schooltype/:schoolname', {
            templateUrl: 'templates/schoolshell.html',
            controller: 'SchoolsController',
            controllerAs: 'vm'
        })
        .when('/aboutus/:page', {
            templateUrl: 'templates/aboutusshell.html',
            controller: 'AboutUsController',
            controllerAs: 'vm'
        })
        .when('/branches/:schoolname', {
            templateUrl: 'templates/branches.html',
            controller: 'BranchesController',
            controllerAs: 'vm'
        })
        .when('/affiliates/:schoolname', {
            templateUrl: 'templates/affiliates.html',
            controller: 'AffiliatesController',
            controllerAs: 'vm'
            })
        .otherwise({ redirectTo: '/' });
    });

    mainApp.run(['$q', '$rootScope', '$location', '$anchorScroll', '$window',
       function ($q, $rootScope, $location, $anchorScroll, $window) {
           $rootScope.$on('$routeChangeStart', function(event, newUrl) {
               $window.scrollTo(0, 0);
           });
       }]);
}());