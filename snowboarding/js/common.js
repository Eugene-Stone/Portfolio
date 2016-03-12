$(document).ready(function() {

	// Button Search-top
	$(".search-btn").click(function() {
		$(".search-feald").addClass("visible");
	});


	// Slider OWL-2
	// Documentation: http://www.owlcarousel.owlgraphic.com/index.html
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

	// Sky-Carousel
	// Documentation: http://www.skyplugins.com/sky-jquery-touch-carousel/documentation.html
	$(".sky-carousel").carousel({
		itemWidth: 170,
		itemHeight: 405,
		distance: 190,
		selectedItemDistance: 10,
		selectedItemZoomFactor: 1.05,
		unselectedItemZoomFactor: 1,
		unselectedItemAlpha: 0.5,
		motionStartDistance: 150,
		topMargin: 30,
		gradientStartPoint: 0.36,
		gradientOverlayColor: "#f5f5f5",
		gradientOverlaySize: 0,
		selectByClick: false,
		enableMouseWheel: false,
	});


	// Button Drop Down Menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_nav").slideToggle();
	});


	// The PopUp Manager FancyBox
	// Documentation: http://fancybox.net/howto
	// <a class="fancybox"><img src="image.jpg" /></a>
	// <a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
});