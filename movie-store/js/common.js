$(document).ready(function() {
	
	// Slider OWL-2
	$(".top_slider").owlCarousel({
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

	/*MASONRY*/
	$(".grid").masonry({
		itemSelector: '.grid-item',
		fitWidth: true,
		gutter: 20,
		columnWidth: 210
	});

	/*Download Movie*/
	$(".downloads").click(function() {
		$(".bottom_line").removeClass("hidd"); return false;
	});

	$(".downloads").click(function() {
		$(".bottom_download .title_film").html($(".card_movie:hover .title_movie").text());
	});

	$(".close-btn").click(function() {
		$(".bottom_line").addClass("hidd"); return false;
	});


	// The PopUp Manager FancyBox
	// Documentation: http://fancybox.net/howto
	// <a class="fancybox"><img src="image.jpg" /></a>
	// <a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
	
});