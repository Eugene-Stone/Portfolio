$(document).ready(function() {
	
	//При изменении масштаба, размер фоновой картинки не изменяется
	function wResize() {
		$(".main_head").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	}); 

	// Фиксация Навбара при скролле
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$(".top_line").addClass("sticky");
		}
		else{
			$(".top_line").removeClass("sticky");
		}
	});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.btn-head").click(function() {
		$.scrollTo($(".sect_1"), 800, {
			offset: 5
		});
	});

	// Подсветка меню при скролле
	$(".top_nav a").mPageScroll2id({
		offset : 50,
		scrollSpeed : 1500
	});
	//Плавный скролл до блока END

	
	// Анимация
	//Документация: http://daneden.github.io/animate.css/
	$(".top_line").animated("slideInDown");
	$(".head_cont").animated("zoomIn");
	$(".sect_4").animated("rotateInUpLeft");
	$(".sect_5").animated("rotateInUpRight");
	$(".footer").animated("fadeInUp");
	$(".bottom-footer").animated("fadeInDown");

	// Анимация при простмотре секции
	$(".sect_1 .features").waypoint(function() {

		$(".sect_1 .features .feat_item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 100*index);
		});

	}, {
		offset : "60%"
	});

	// Анимация при простмотре секции
	$(".sect_2 .works").waypoint(function() {

		$(".sect_2 .works .work-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 100*index);
		});

	}, {
		offset : "60%"
	});

	// Третья секция
	// Анимация при простмотре секции
	$(".sect_3 .team").waypoint(function() {

		$(".sect_3 .team .profil").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "75%"
	});


	// Кнопка выпадающего меню 
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_nav").slideToggle();
		$(".top_line").addClass("sticky");
	});


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