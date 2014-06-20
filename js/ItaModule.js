
var pageLoader = (function () {

    function transition(page, elem) {
        $(elem).closest('ul').find('.active').removeClass('stick active');
        $(elem).closest('li').addClass('stick active');
        return false;
    }
    function loadPage(page) {
        $('#content').load(page + "?_=" + $.now(), function(response, status, xhr) {
                if (status == "error") {
                    console.log('invalid url');
                }
        });
        scrollTop();       
        return false;
    }
    function loadPageWithImageOrDoc(page, loadElement, loadTargetElementId, path) {
        $('#content').load(page + "?_=" + $.now(), function (response, status, xhr) {
            if (status == "error") {
                console.log('invalid url');
            }
            if ($(loadElement).data('img')) {
                $(loadTargetElementId).attr('src', path + $(loadElement).data('img'));
            }
        });
        scrollTop();       
        return false;
    }
    function scrollTop() {
        $('html, body').animate({ scrollTop: '0px' }, "fast");        
    }
    function getHtml(page) {
        var content = '';
        $.get(page, function (data) {
            content = data;
        }).done(function () {
            return content;
        });
    }
    function loadPageInAWindow(page, icon) {
        $.get(page, function (data) {
            console.log(data);
        }).done(function (data) {
            $.Dialog({
                overlay: true,
                shadow: true,
                height: 200,
                flat: true,
                icon: '<img src="' + icon + '">',
                title: 'Flat window',
                content: '',
                onShow: function (_dialog) {
                    var content = _dialog.children('.content');
                    content.html(data);
                }
            });
        });

        return false;
    }
    return {
        Transition: transition,
        LoadPage: loadPage,
        LoadPageWithImageOrDoc: loadPageWithImageOrDoc,
        ScrollTop: scrollTop,
        LoadPageInAWindow: loadPageInAWindow
    };
})();

$(function () {
    if ((document.location.host.indexOf('.dev') > -1) || (document.location.host.indexOf('modernui') > -1)) {
        $("<script/>").attr('src', 'js/metro/metro-loader.js').appendTo($('head'));
    } else {
        $("<script/>").attr('src', 'js/metro.min.js').appendTo($('head'));
    }
    pageLoader.LoadPage('partials/home.html');

    var $elem = $('#content');
    var $navup = $('#nav_up');
    $navup.css({ position: 'fixed', left: '50%', 'margin-left': 0 - ($navup.width() / 2) });
    $navup.fadeIn('slow');
    var $navdown = $('#nav_down');
    $navdown.css({ position: 'fixed', left: '50%', 'margin-left': 0 - ($navdown.width() / 2) + $navup.width() * 2 });
    $navdown.fadeIn('slow');

    $(window).bind('scrollstart', function () {
        $('#nav_up,#nav_down').stop().animate({ 'opacity': '0.2' });
    });
    $(window).bind('scrollstop', function () {
        $('#nav_up,#nav_down').stop().animate({ 'opacity': '1' });
    });

    $('#nav_down').click(
        function (e) {
            $('html, body').animate({ scrollTop: $elem.height() }, 800);
        }
    );
    $('#nav_up').click(
        function (e) {
            $('html, body').animate({ scrollTop: '0px' }, 800);
        }
    );

    $(document).on('click', 'a.scroll', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
        return false;
    });
    $(document).on('click', 'li > a.inplace, a.inplace', function () {
        var self = this;
        pageLoader.Transition($(this).attr('href'), this);
        pageLoader.LoadPageWithImageOrDoc($(this).attr('href'), this, '#dynImg', 'images/pic/');      
        return false;
    });

    $(document).on('click', 'li > a.iframe, a.iframe', function () {
        var self = this;
        pageLoader.Transition($(this).attr('href'), this);
        pageLoader.LoadPageWithImageOrDoc($(this).attr('href'), this, '#pdf', 'docs/aboutus/');
 
        return false;
    });
});
