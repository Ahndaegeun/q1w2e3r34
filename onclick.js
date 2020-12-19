// header
const $header = document.querySelector('header');
const $photoHeader = document.querySelector('.photo-header');
const $videoHeader = document.querySelector('.video-header');

//nav
const $navigation = document.querySelector('.main-menu');
const $backButton = document.querySelector('.gotohome');

//contents
const $photoSection = document.querySelector('.photo-section');
const $videoSection = document.querySelector('.video-section');

//footer
const $myWork = document.querySelector('#mywork');
const $connect = document.querySelector('#connect');




//event
$photoHeader.addEventListener('click', function() {
    $photoHeader.classList.add('photo-click');
    $videoHeader.classList.add('photo-click-video');
    $header.classList.add('z-index-del');
    $myWork.classList.add('display-none');
    $connect.classList.add('display-none');
    $navigation.classList.add('display-none');
    $backButton.classList.remove('display-none');
    setTimeout(function() {
        $photoSection.classList.add('z-index-on');
      }, 2000);
});
$videoHeader.addEventListener('click', function() {
    $videoHeader.classList.add('photo-click');
    $photoHeader.classList.add('photo-click-video');
    $header.classList.add('z-index-del');
    $myWork.classList.add('display-none');
    $connect.classList.add('display-none');
    $navigation.classList.add('display-none');
    $backButton.classList.remove('display-none');
    setTimeout(function() {
        $videoSection.classList.add('z-index-on');
      }, 2000);
});


$backButton.addEventListener('click', function() {
    if($photoSection.classList.contains('z-index-on')) {
        $photoHeader.classList.remove('photo-click');
        $photoHeader.classList.add('photo-back');
        $videoHeader.classList.remove('photo-click-video');
        $videoHeader.classList.add('photo-back-video');
        $header.classList.remove('z-index-del');
        $myWork.classList.remove('display-none');
        $connect.classList.remove('display-none');
        $navigation.classList.remove('display-none');
        $backButton.classList.add('display-none');
        $photoSection.classList.remove('z-index-on');
        setTimeout(function() {
            $photoHeader.classList.remove('photo-back');
            $videoHeader.classList.remove('photo-back-video');
        }, 1900);
    } else {
        $videoHeader.classList.remove('photo-click');
        $videoHeader.classList.add('photo-back');
        $photoHeader.classList.remove('photo-click-video');
        $photoHeader.classList.add('photo-back-video');
        $header.classList.remove('z-index-del');
        $myWork.classList.remove('display-none');
        $connect.classList.remove('display-none');
        $navigation.classList.remove('display-none');
        $backButton.classList.add('display-none');
        $videoSection.classList.remove('z-index-on');
        setTimeout(function() {
            $videoHeader.classList.remove('photo-back');
            $photoHeader.classList.remove('photo-back-video');
        }, 1000);
    }
});
