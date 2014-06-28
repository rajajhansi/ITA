(function() {
    'use strict';

    var mainApp = angular.module('mainApp');

    // Collect the routes
    mainApp.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    mainApp.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, $locationProvider, routes) {
        $locationProvider.html5Mode(false);
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/aboutus',
                config: {
                    templateUrl: 'app/aboutus/aboutus.html'
                }
            },
            {
                url: '/board',
                config: {
                    templateUrl: 'app/board/board.html'
                }
            },
            {
                url: '/academics',
                config: {
                    templateUrl: 'app/academics/academics.html'
                }
            },
            {
                url: '/registration',
                config: {
                    templateUrl: 'app/registration/registration.html'
                }
            },
            {
                url: '/schools',
                config: {
                    templateUrl: 'app/schools/schools.html'
                }
            },
            {
                url: '/contacts',
                config: {
                    templateUrl: 'app/contactus/contacts.html'
                }
            },
            {
                url: '/resources',
                config: {
                    templateUrl: 'app/resources/resources.html'
                }
            },
            {
                url: '/barathidasanCourses',
                config: {
                    templateUrl: 'app/barathidasanCourses/barathidasanCourses.html'
                }
            },
            {
                url: '/berkuniv',
                config: {
                    templateUrl: 'app/berkuniv/berkuniv.html'
                }
            },
            {
                url: '/tva',
                config: {
                    templateUrl: 'app/tva/tva.html'
                }
            },
            {
                url: '/schools/:schooltype/:schoolname',
                config: {
                    templateUrl: 'app/schools/schoolshell.html',
                    controller: 'SchoolsController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/aboutus/:page',
                config: {
                    templateUrl: 'app/aboutus/aboutusshell.html',
                    controller: 'AboutUsController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/academics/:page',
                config: {
                    templateUrl: 'app/academics/academicsshell.html',
                    controller: 'AcademicsController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/academics/words/:page',
                config: {
                    templateUrl: 'app/academics/wordsshell.html',
                    controller: 'WordsController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/registration/:page',
                config: {
                    templateUrl: 'app/registration/registrationshell.html',
                    controller: 'RegistrationController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();