$(document).ready(function() {
	
	// Слайдер OWL
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
	
	// Кнопка выпадающего меню 
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_nav").slideToggle();
	});	
	
});