jQuery(document).ready(function() {
    // gotop
    var offset = 800,
        anchor = $('.anchor'),
        go_top = $('.go-top');
    $(window).scroll(function() {
        ($(this).scrollTop() < offset) ? anchor.removeClass('run'): anchor.addClass('run');
    });
    go_top.click(function() { $('html,body').animate({ scrollTop: 0 }, 1000); });


});