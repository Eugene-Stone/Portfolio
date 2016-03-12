$(document).ready(function() {

	// Button Search-top
	$(".search_box > i").click(function() {
		$(".top_search").addClass("visible");
	});

	$(document).mouseup(function (e){
		var div = $(".search_box > i");
		var div_2 = $(".top_search");
		if (!div.is(e.target)
			&& div_2.has(e.target).length === 0) {
			div_2.removeClass("visible");
	}
});

	// Button Search-top END

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

	// DatePicker
	$( "#datepicker" ).datepicker({
		showOn: "button",
		buttonImage: "img/datepicker.png",
		buttonImageOnly: true,
		buttonText: "Select date"
	});

	// Sky-Carousel
	// Documentation: http://www.skyplugins.com/sky-jquery-touch-carousel/documentation.html
	$('.sky-carousel').carousel({
		itemWidth: 265,
		itemHeight: 260,
		distance: 30,
		selectedItemDistance: 30,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.95,
		unselectedItemAlpha: 0.5,
		motionStartDistance: 1100,
		topMargin: 30,
		gradientStartPoint: 0.36,
		gradientOverlayColor: "#f5f5f5",
		gradientOverlaySize: 0,
		selectByClick: false,
		enableMouseWheel: false,
	});

	// Slider OWL-2
	// Documentation: http://www.owlcarousel.owlgraphic.com/index.html
	$(".customers").owlCarousel({
		margin : 13,
		center : true,
		items : 3,
		nav : false,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,

		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			}
		}
	});


	// Button Up
	$(".btn-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	// Button Drop Down Menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_links").slideToggle();
	});


	// The PopUp Manager FancyBox
	// Documentation: http://fancybox.net/howto
	// <a class="fancybox"><img src="image.jpg" /></a>
	// <a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	

});