$(document).ready(function() {
	
	// Кнопка закрыть верхний баннер
	$(".close-banner").click(function() {
		$(".top-banner").slideToggle();
	});
	 
	// DropDown
	$(".dropdown").click(function() {
		$(this).toggleClass("on");
		$(".products").slideToggle();
		$(".tab-item").toggleClass("on");
	});
	
	//Табы
	$(function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    });
  });
	//Табы END
	
	// Кнопка выпадающего меню 
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_nav").slideToggle();
	});
	
	// Карусель
	$(".slider.article").owlCarousel({
		margin : 25,
		autoWidth : false,
		nav : true,
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
				nav:false
			},
			600:{
				items:2,
			},
			800:{
				items:3,
			},
			1360:{
				items:3,
				nav:true,
				loop:true,
				margin : 75,
			}
		}
	});

	// Слайдер с Отзывами
	$(".slider.reviews").owlCarousel({
		items : 1,
		autoWidth : false,
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

	//Попап менеджер FancyBox
	$(".fancybox").fancybox();
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
});