$(".header__icon").click(function() {
	$(".header__nav_menu").addClass("header__nav_menu--2").toggle()
});

$(".header__pic").hover(function() {
	$(".header__play").fadeIn()
}, function() {
	$(".header__play").fadeOut()
});

$(".works__menu").click(function() {
	$(".works__nav_list").toggle()
});

$('.grid').imagesLoaded( function() {
	$('.grid').isotope({
        itemSelector: '.grid-item',   
        percentPosition: true,
        masonry: {        	
        	columnWidth: '.grid-item',
            horizontalOrder: true,
            gutter: 10
        }
    });
});