(function () {
    'use strict';

    var controllerId = 'SchoolsController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', SchoolsController]);

    function SchoolsController($scope, $routeParams) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'SchoolsController';
        var schools = {
            'branches': {
                'cupertino': { title: 'Cupertino Site', schedule: 'cupertinoschedule' },
                'fremont': { title: 'Fremont Site', schedule: 'fremontschedule' },
                'pleasanton': { title: 'Pleasanton Site', schedule: 'pleasantonschedule' },
                'evergreen': { title: 'Evergreen Site', schedule: 'evergreenschedule' },
                'folsom': { title: 'Fremont Site', schedule: 'folsomschedule' },
                'eastbay': { title: 'San Ramon Site', schedule: 'eastbayschedule' }
            },
            'affiliates': {
                'lats': { title: 'Los Angeles Tamil School (LATS) Site', schedule: 'latsschedule' },
                'northbay': { title: 'North Bay Tamil School Site', schedule: 'northbayschedule' },
                'peninsula': { title: 'Peninsula Tamil School Site', schedule: 'peninsulaschedule' },
                'socal': { title: 'Socal Tamil School Site', schedule: 'socalschedule' },
                'tamizhpallikkoodam': { title: 'Tamizh Pallikkoodam Site', schedule: 'tamizhpallikkoodamschedule' },
                'agaramtamilpadasalai': { title: 'Agaram Tamil Padasalai Site', schedule: 'agaramtamilpadasalaischedule' },
                'bharathi': { title: 'Bharathi Tamil School Site', schedule: 'bharathitamilschoolschedule' },
                'alpharetta': { title: 'GATS - Alpharetta Tamil School Site', schedule: 'cmathamizhpallischedule' },
                'bharathithamizhpalli': { title: 'GATS - Bharathi Payinthamizh Palli Site', schedule: 'bharathithamizhpallischedule' },
                'lillburn': { title: 'GATS - Lillburn Tamizh Palli Site', schedule: 'lillburnthamizhpallischedule' },
                'marietta': { title: 'GATS - Marietta Tamil School Site', schedule: 'mariettatamilschoolschedule' },
                'tamilarivukalaikoodam': { title: 'GATS - Tamil Arivu Kalai Koodam Site', schedule: 'tamilarivukalaikoodamschedule' },
                'kalaimagal': { title: 'Kalaimagal Tamil School Site', schedule: 'kalaimagalschedule' },
                'mtsfarmington': { title: 'MTS Tamil School, Farmington Hills Site', schedule: 'mtsfarmingtonschedule' },
                'mtstroy': { title: 'MTS Tamil School, Troy Site', schedule: 'mtstroyschedule' },
                'twincities': { title: 'Twin Cities Tamil Padasalai Site', schedule: 'twincitiestamilpadasalaischedule' },
                'thiruvalluvar': { title: 'NJ Thiruvalluvar Tamil School Site', schedule: 'thiruvalluvarschoolschedule' },
                'tamilarambapalli': { title: 'Tamil Arambap Palli Site', schedule: 'tamilarambappallischedule' },
                'tennesseetamilacademy': { title: 'Tennessee Tamil Academy Site', schedule: 'tennesseetamilacademyschedule' },
                'bharathikalaimantram': { title: ' Bharathi Kalai Manram Site', schedule: 'bharathikalaimandramschedule' },
                'greateraustintamilacademy': { title: 'Greater Austin Tamil Academy Site', schedule: 'greateraustintamilacademyschedule' },
                'redmond': { title: 'Redmond Tamil School Site', schedule: 'redmondtamilschoolschedule' },
                'emirates': { title: 'Emirates Tamil Pallikkoodam Site', schedule: 'emiratestamilpallikkoodamschedule' },
                'bedford': { title: 'Bedford Tamil Payilagam Site', schedule: 'bedfordtamilpayilagamschedule' },
                'midlandstamilacademy': { title: 'Midlands Tamil Academy Site', schedule: 'midlandstamilacademyschedule' },
                'mkmm': { title: 'MKMM Tamil School Site', schedule: 'mkmmtamilschoolschedule' },
                'tamilkalluri': { title: 'Tamil Kalluri Site', schedule: 'tamilkallurischedule' }
            }
        };
        vm.schooltype = $routeParams.schooltype.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        console.log(vm.schooltype);
        vm.schoolname = schools[$routeParams.schooltype][$routeParams.schoolname].title;
        vm.schoolschedule = '/app/schools/' + $routeParams.schooltype + '/' + schools[$routeParams.schooltype][$routeParams.schoolname].schedule + '.html';
        function activate() { }
    }
})();
