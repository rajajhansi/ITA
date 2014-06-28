(function () {
    'use strict';

    var controllerId = 'AcademicsController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', AcademicsController]);

    function AcademicsController($scope, $routeParams) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'AcademicsController';
        var pages = {
            'skillset': { pageTitle: 'Skillset', iframeSrc: 'skillset/skillset.pdf' },
            'words': { pageTitle: 'Words', page: 'words' },
            'clubs': { pageTitle: 'Club Activities', page: 'clubs' },
            'principal': { pageTitle: 'Principal\'s responsibilities', iframeSrc: 'responsibilities/principal.pdf' },
            'viceprincipal': { pageTitle: 'Vice Principal\'s responsibilities', iframeSrc: 'responsibilities/viceprincipal.pdf' },
            'teacher': { pageTitle: 'Teacher\'s responsibilities', page: 'teacher' },
            'officer': { pageTitle: 'Officer\'s duties', page: 'officer' },
        };
        var pageInfo = pages[$routeParams.page];
        vm.pageTitle = pageInfo.pageTitle;
        if (pageInfo.page) {
            vm.page = '/app/academics/' + pageInfo.page + '.html';
        }
        if (pageInfo.imgSrc) {
            vm.imgSrc = '/images/pic/' + pageInfo.imgSrc;
        }
        if (pageInfo.iframeSrc) {
            vm.iframeSrc = '/docs/' + pageInfo.iframeSrc;
        }
        function activate() { }
    }
})();
