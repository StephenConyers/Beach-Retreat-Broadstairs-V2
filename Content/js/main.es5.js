'use strict';

$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]:not([class^="carousel-control"])', function () {
        if (!/#/.test(this.href)) return;
        var id = $(this).attr('href');
        if (id === '#') return;
        $('html,body').animate({
            'scrollTop': $(id).offset().top - 80
        }, 1000);
        return false;
    });

    if (document.addEventListener) {
        var wow = new WOW().init();
    }

    var resizeCarousel = function resizeCarousel() {
        var wHeight = $(window).height();
        //var navHeight = $('[fh-navbar]').outerHeight(true);
        var item = $('[fh-jumbo]');
        //$('[fh-jumbo]').height(wHeight - navHeight);
        $('[fh-jumbo]').height(wHeight);
    };

    $(window).on('resize load', resizeCarousel);
    resizeCarousel();

    var resizeSpace = function resizeSpace() {
        var wHeight = $(window).height();
        var navHeight = $('[fh-navbar]').outerHeight(true);
        var footerHeight = $('[fh-footer]').outerHeight(true);
        var item = $('[fh-space]');
        $('.space-inner', '[fh-space]').height(wHeight - navHeight - footerHeight - (parseInt(item.css('paddingTop'), 10) + parseInt(item.css('paddingBottom'), 10)));
    };

    $(window).on('resize load', resizeSpace);
    resizeSpace();

    var resizeMap = function resizeMap() {
        var wHeight = $(window).height();
        var navHeight = $('[fh-navbar]').outerHeight(true);
        var item = $('iframe', '#location');
        var item2 = $('.container-fluid', '#location');
        $('iframe', '#location').height(wHeight - navHeight - (parseInt(item.css('paddingTop'), 10) + parseInt(item.css('paddingBottom'), 10)));
        $('.container-fluid', '#location').height(wHeight - navHeight - (parseInt(item2.css('paddingTop'), 10) + parseInt(item2.css('paddingBottom'), 10)));
    };

    $(window).on('resize load', resizeMap);
    resizeMap();
});

