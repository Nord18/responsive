$(document).ready(function() {
    $('.header__slider').slick({
        slidesToShow: 1,
        prevArrow: ".header__slider_prev",
        nextArrow: ".header__slider_next"
    });
});

$(document).ready(function() {
    $('.slider-single').slick({
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.slider-thumb'
    });
    $('.slider-thumb').slick({
        slidesToShow: 4,
        asNavFor: '.slider-single',
        dots: false,
        focusOnSelect: true
    });
});