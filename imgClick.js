$(function(){
    
    $('body img').on('click', function(){
        let photoNumber = $(this).attr('src');
        const layerMask = '<div class="mask"><img src="' + photoNumber +'" alt=""></div>';

        $('body').prepend(layerMask);
        $('.mask img').addClass("cursor-in");

        $('.mask img').on('click', function(e){
            e.stopPropagation()
            if ($('.mask img').hasClass('cursor-in')) {
                $('.mask img').addClass('zoom-in-out');
                $('.mask img').removeClass('cursor-in');
                $('.mask img').addClass('cursor-out');
            } else {
                $('.mask img').removeClass('zoom-in-out');
                $('.mask img').addClass('cursor-in');
                $('.mask img').removeClass('cursor-out');
            }
        });
        $('.mask').on('click', function(e){
            e.stopPropagation()
            $('body .mask').remove();
        })
    });
});