(function () {
    'use strict';

    var controllerId = 'AboutUsController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', AboutUsController]);

    function AboutUsController($scope, $routeParams) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'AboutUsController';
        var pages = {
            'selviintro': { pageTitle: 'தலைவர் முன்னுரை', page: 'selviintro' },
            'about': { pageTitle: 'பாடத்திட்டக் குழுவின் முன்னுரை', page: 'about' },
            'president': { pageTitle: 'இந்திய ஜனாதிபதி வாழ்த்து மடல்', imgSrc: 'presigreet.jpg' },
            'karunanidhi': { pageTitle: 'Dr. M. Karunanidhi\'s greetings', imgSrc: 'karunanidhi.jpg' },
            'tvachairman2003': { pageTitle: 'Greetings from Chairman, Tamil Virtual Academy - 2003', imgSrc: 'vckulandhai2003.jpg' },
            'tvachairman2004': { pageTitle: 'Greetings from Chairman, Tamil Virtual Academy - 2004', imgSrc: 'vckulandhai2004.jpg' },
            'tvadirector': { pageTitle: 'Greetings from Director, Tamil Virtual Academy', imgSrc: 'ponnavaiko.jpg' },
            'vcannauniv': { pageTitle: 'Greetings from Former Vice Chancellor, Anna University', imgSrc: 'vcannauniv.jpg' },
            'smadhavan': { pageTitle: 'Greetings from Mr. S. Madhavan', imgSrc: 'madhavan.jpg' },
            'treasurerreport2003' : { pageTitle: 'Treasurer Report - 2003', imgSrc: 'treasurerreport2003.jpg'},
            'treasurerreport2004': { pageTitle: 'Treasurer Report - 2004', imgSrc: 'treasurerreport2004.jpg' },
            'treasurerreport2008': { pageTitle: 'Treasurer Report - 2008', imgSrc: 'treasurerreport2008.jpg' },
            'parent': { pageTitle: 'A Parent\'s Note', page: 'parent' },
            'describe': { pageTitle: 'பள்ளிப் பாடத் திட்டமும் வகுப்புக்களும்', page: 'describe' },
            'credit': { pageTitle: 'Credit Program for High School', page: 'credit' },
            'exammethods': { pageTitle: 'பள்ளியில் தேர்வுமுறை', page: 'exammethods' },
            'teach_strategy': { pageTitle: 'மாணவர் கவனம் கவரும் கல்வி யுக்திகள்', page: 'teach_strategy' },
            'final_ranking': { pageTitle: 'Final Annual Evaluation', page: 'final_ranking' },
            'teach': { pageTitle: 'CTA teaches Tamil in public schools in California', page: 'teach' },
            'ctapress': { pageTitle: 'Press', page: 'ctapress' },
            'selviintropdf': { pageTitle: 'தலைவர் முன்னுரை', iframeSrc: 'Intro-PresidentofCTA.pdf' },
            'aboutpdf': { pageTitle: 'Introduction by the Academy', iframeSrc: 'Intro-byAcademy.pdf' },
            'parentpdf': { pageTitle: 'A Parent\'s Note', iframeSrc: 'parents-note.pdf' },
            'skilllevelpdf': { pageTitle: 'Description of Skill Levels at different Classes', iframeSrc: 'skilllevelsatdiffclasses.pdf' },
            'exammethodspdf': { pageTitle: 'Description of Exams at different Classes', iframeSrc: 'examsatdiffclasses.pdf' },
            'teachingmethodspdf': { pageTitle: 'Teaching methods captivating students attention', iframeSrc: 'TeachingMethods.pdf' },
            'gradingmethodspdf': { pageTitle: 'Year End Grading Methods', iframeSrc: 'GradingMethods.pdf' },
            'murasoli': { pageTitle: 'About CTA in Murasoli', imgSrc: 'Murasoli11.jpg' },
            'dinakaran': { pageTitle: 'About CTA in Dinakaran', imgSrc: 'Dinakaran1.jpg' },
        };
        var pageInfo = pages[$routeParams.page];
        vm.pageTitle = pageInfo.pageTitle;
        if (pageInfo.page) {
            vm.page = '/app/aboutus/' + pageInfo.page + '.html';
        }
        if (pageInfo.imgSrc) {
            vm.imgSrc = '/images/pic/' + pageInfo.imgSrc;
        }        
        if (pageInfo.iframeSrc) {
            vm.iframeSrc = '/docs/aboutus/' + pageInfo.iframeSrc;
        }
        function activate() { }
    };
})();
