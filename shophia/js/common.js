$(document).ready(function() {
	
	// Кастомные скрипты
	
		// Слайдер OWL-2
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


	// Первая секция
	var waypointsvg = new Waypoint({

		element: $(".section_1"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_1 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 700*index);
				});

			};
			this.destroy();
		},
		offset: "70%"
	});
	
	
	// Кнопка выпадающего меню 
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_line").slideToggle();
	});

	// Кнопка выпадающего меню 
	$(".toggle-mnu-f").click(function() {
		$(this).toggleClass("on");
		$(".footer-top").slideToggle();
	});
	
	// Сайдбар в футере не выходит за границу документа,а увеличивает ее
	$(".toggle-mnu-f").click(function() {
		$("html, body").animate({ scrollTop: $(document).height()+750 }, "slow");
		return false;
	});

	// Кнопка наверх
	$(".btn-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
		//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".brand"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});
	

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


});