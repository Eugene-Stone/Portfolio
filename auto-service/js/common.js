$(document).ready(function() {
	
	// Кастомные скрипты
	
	// Tabs Short
	$( "#tabs_s1" ).tabs({
		active: 0
	});

	// При повторном нажатии скрывает содержимое
	$("#tabs_s1").tabs( "option", "collapsible", true );

	// Плавное закрытие содержимого
	$( "#tabs_s1" ).tabs({
		hide: { effect: "blind", duration: 600 }
	});
	// Плавное открытие содержимого
	$( "#tabs_s1" ).tabs({
		show: { effect: "blind", duration: 400 }
	});
	// Tabs Short END
	
	
	// Кнопка выпадающего меню 
	$(".top-mnu .toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav").slideToggle();
	});


	//Вторая секция

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".section_2 .service_item"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});


	// Футер
	// Кнопка выпадающего меню 
	$(".footer .toggle-mnu-f").click(function() {
		$(this).toggleClass("on");
		$(".nav-footer").slideToggle();
	});

	$(".footer .toggle-mnu-f").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});


	
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
