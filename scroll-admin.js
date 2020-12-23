$(function(){
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('.body__container').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
});