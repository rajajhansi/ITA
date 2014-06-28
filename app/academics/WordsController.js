(function () {
    'use strict';

    var controllerId = 'WordsController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', WordsController]);

    function WordsController($scope, $routeParams) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'WordsController';
        var pages = [];
        for (var i = 1; i < 8; i++) {
            pages.push({
                pageTitle: 'Words ' + i, imgSrc: 'tamil_words' + i + '.jpg' 
            });
        }
        //var pages = {
        //    '1': { pageTitle: 'Words 1', imgSrc: 'tamil_words1.jpg' },
        //    '2': { pageTitle: 'Words 2', imgSrc: 'tamil_words2.jpg' },
        //    '3': { pageTitle: 'Words 3', imgSrc: 'tamil_words3.jpg' },
        //    '4': { pageTitle: 'Words 4', imgSrc: 'tamil_words4.jpg' },
        //    '5': { pageTitle: 'Words 5', imgSrc: 'tamil_words5.jpg' },
        //    '6': { pageTitle: 'Words 6', imgSrc: 'tamil_words6.jpg' },
        //    '7': { pageTitle: 'Words 7', imgSrc: 'tamil_words7.jpg' },
        //};
        var pageNumber = parseInt($routeParams.page) - 1;
        var pageInfo = pages[pageNumber];
        vm.pageTitle = pageInfo.pageTitle;
        if (pageInfo.page) {
            vm.page = '/app/academics/' + pageInfo.page + '.html';
        }
        if (pageInfo.imgSrc) {
            vm.imgSrc = '/images/pic/books/' + pageInfo.imgSrc;
        }
        if (pageInfo.iframeSrc) {
            vm.iframeSrc = '/docs/' + pageInfo.iframeSrc;
        }
        function activate() { }
    }
})();
