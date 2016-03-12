$(document).ready(function() {
	
	//  OWL-2
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
	
	//  FlexSlider
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails",
		prevText: "",
		nextText: "",
		direction: "vertical",
		slideshow: true,
		pauseOnHover: false,
		touch: true,
	});
	
	// Кнопка выпадающего меню 
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
	});
	
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".item-wrap"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});	

	// Кнопка выпадающего меню в футере
	$(".toggle-mnu-f").click(function() {
		$(this).toggleClass("on");
		$(".f-top").slideToggle();
	});

	// Сайдбар в футере не выходит за границу документа,а увеличивает ее
	$(".toggle-mnu-f").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

});