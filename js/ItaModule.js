
var pageLoader = (function () {

    function transition(page, elem) {
        $(elem).closest('ul').find('.active').removeClass('stick active');
        $(elem).closest('li').addClass('stick active');
        return false;
    }
    function loadPage(page) {
        $.get(page, { "_": $.now() }, function (data) {
            $('#content').html(data);
        });
        return false;
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

    $(document).on('click', 'li > a, a.inplace', function () {
        var self = this;
        pageLoader.Transition($(this).attr('href'), this);
        $('#content').load($(this).attr('href'), function (response, status, xhr) {
            if (status == "error") {
                console.log('invalid url');
            }
            if ($(self).data('img')) {
                $('#dynImg').attr('src', 'images/pic/' + $(self).data('img'));
            }
        });
        //pageLoader.Transition($(this).attr('href'), this);
        return false;
    });

    $(document).on('click', 'li > a, a.iframe', function () {
        var self = this;
        pageLoader.Transition($(this).attr('href'), this);
        $('#content').load($(this).attr('href'), function (response, status, xhr) {
            if (status == "error") {
                console.log('invalid url');
            }
            if ($(self).data('img')) {
                $('#pdf').attr('src', 'docs/aboutus/' + $(self).data('img'));
            }
        });
        //pageLoader.Transition($(this).attr('href'), this);
        return false;
    });

    //$("li > a").click(function(event) {
    //    pageLoader.Transition($(this).attr('href'), this);
    //    return false;
    //});

});
