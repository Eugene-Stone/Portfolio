$(document).ready(function() {
	
	// Кастомные скрипты
	
		// Кнопка вниз до элемента
	$(".video-info").click(function() {
		$("html, body").animate({ scrollTop: $(".section_1").height()+70 }, "slow");
		return false;
	});
	
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".advantage .product-item, .products .item, .specialists .profil-wrap"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});


	// Анимация
	//Документация: http://daneden.github.io/animate.css/
	$(".top_line").animated("bounceInDown");
	$(".head-descr").animated("fadeInLeftBig");
	$(".section_1 h3, .section_1 p, .video_yb, .section_2 h3, .section_4 h3, .section_4 p, .section_5 h3, .section_5 p, .section_6 h3, .section_6 p").animated("zoomIn");
	$(".left-sect, .w-descr, .section_5 .profil-wrap.c_1, .section_5 .coment.c_1, .section_5 .profil-wrap.c_3, .section_5 .coment.c_3").animated("fadeInRightBig");
	$(".section_5 .profil-wrap.c_2, .section_5 .coment.c_2").animated("fadeInLeftBig");



	// Анимация при простмотре секции
	$(".section_2 .products").waypoint(function() {

		$(".section_2 .products .item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 100*index);
		});

	}, {
		offset : "60%"
	});

	// Анимация при простмотре секции
	$(".section_6 .specialists").waypoint(function() {

		$(".section_6 .specialists .profil-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 100*index);
		});

	}, {
		offset : "60%"
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
