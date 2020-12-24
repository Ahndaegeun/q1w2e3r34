// $(function(){
//     const $header = "header";
//     const $main = ".myWork-section";
//     const $footer = "footer";
//     const $bodyCotainer = ".body__container";
//     const headerHeight = $($header).offset().top;
//     const mainHeight = $($main).offset().top;
//     const footerHeight = $($footer).offset().top;

//     $($bodyCotainer).on("mousewheel DOMMouseScroll", function(e){

//         let nowScroll = $(document).scrollTop();
//         let delta = e.originalEvent.deltaY;

//         if(delta === 100) {
//             //Down
//             if (nowScroll >= 0 && nowScroll < mainHeight) {
//                 $('html, body').animate({scrollTop : mainHeight});
//             } else if (nowScroll >= mainHeight && nowScroll < footerHeight) {
//                 $('html, body').animate({scrollTop : footerHeight});
//             }
//         } else if (delta === -100) {
//             //Up
//             if (nowScroll <= footerHeight && nowScroll > mainHeight) {
//                 $('html, body').animate({scrollTop : mainHeight});
//             } else if (nowScroll <= mainHeight && nowScroll > headerHeight) {
//                 $('html, body').animate({scrollTop : headerHeight});
//             }
//         }
//     });

// });