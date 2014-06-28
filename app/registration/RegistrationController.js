(function () {
    'use strict';

    var controllerId = 'RegistrationController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', RegistrationController]);

    function RegistrationController($scope, $routeParams) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'RegistrationController';
        var pages = {
            'rules': { pageTitle: 'Rules and Regulations', page: 'rules' },
            'evaluation': { pageTitle: 'Rules and Regulations for evaluation', page: 'evaluation' },
            'fees': { pageTitle: 'Fee Structure', page: 'fees' },            
            'hscpcupertino': { pageTitle: ' Cupertino Branch Registration Instructions for HSCP', iframeSrc: 'extFiles/cupertino_hspc.pdf' },
            'hscpregproc': { pageTitle: 'HSCP Registration Procedure', iframeSrc: 'extFiles/CTA_HSCP_Registration_Procedure.pdf' },
            'hscpregform': { pageTitle: 'HSCP Registration Form', iframeSrc: 'extFiles/CTA_HSCP_Registration_Form.pdf' },
            'hscpdisciplinepolicies': { pageTitle: 'HSCP - Discipline Policies Form', iframeSrc: 'extFiles/HSCP-DisciplinePolicies.pdf' },
            'hscpfaqs': { pageTitle: 'HSCP - Frequently Asked Questions', iframeSrc: 'extFiles/HSCP-FAQ.pdf' },
        };
        var pageInfo = pages[$routeParams.page];
        vm.pageTitle = pageInfo.pageTitle;
        if (pageInfo.page) {
            vm.page = '/app/registration/' + pageInfo.page + '.html';
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
