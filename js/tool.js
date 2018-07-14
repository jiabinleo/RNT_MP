﻿(function () {
    var width = document.documentElement.clientWidth;
    var style = document.createElement("style")
    style.innerHTML = "html{font-size: " + width / 16 + "px !important;}"
    document.head.appendChild(style)
})();
var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    loop: true,
    speed: 1000,
    pagination : '.swiper-pagination',
    autoplayDisableOnInteraction : false,
    centeredSlides:true,
    paginationClickable :true,
})

//isScrool
var myScroll,stepP;
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}
function loaded() {
    myScroll = new IScroll('#wrapper', {
        scrollbars: true,
        mouseWheel: true,
	click : true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
    });
}
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, isPassive() ? {
    capture: false,
    passive: false
} : false);

document.body.onload=function(){
    loaded()
}
//取消冒泡
$("#index_menu").on("click", function (e) {
    if (e && e.stopPropagation)
        e.stopPropagation();
    else
        window.event.cancelBubble = false;
})
