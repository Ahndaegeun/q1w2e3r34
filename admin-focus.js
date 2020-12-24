$(function(){
    $(".first-menu").on('click', function(){
        if ($('.second-menu').hasClass('on')){
            $('.second-menu').removeClass('on');
            $('.first-menu').addClass('on')
        }
    });
    $(".second-menu").on('click', function(){
        if ($('.first-menu').hasClass('on')){
            $('.first-menu').removeClass('on');
            $('.second-menu').addClass('on');
        }
    });

    $("main").scroll(function(){
        if($('main').scrollTop() === $('.dashboard__section').scrollTop()) {
            $('.second-menu').removeClass('on');
            $('.first-menu').addClass('on')
        } else {
            $('.first-menu').removeClass('on');
            $('.second-menu').addClass('on');
        };

    });
});