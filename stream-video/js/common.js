$(document).ready(function() {
	
	$(".profil_info").click(function() {
		$(".profil_descr").slideToggle();
	});

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

	// Button Control_Panel
	$(".control_panel li").click(function() {
		$(this).toggleClass("active");
	});


	// The PopUp Manager FancyBox
	// Documentation: http://fancybox.net/howto
	// <a class="fancybox"><img src="image.jpg" /></a>
	// <a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	
});