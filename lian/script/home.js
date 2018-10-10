"use strict";

$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });

    $('.grid').imagesLoaded(function() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                horizontalOrder: true,
                gutter: 15
            }
        });
    });
});