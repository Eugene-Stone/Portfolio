$(document).ready(function() {
	
	// Tabs
	$(function() {
		$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	});
	
	$( "#tabs" ).tabs({
		hide: true,
		show: true,
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$(".top_line").addClass("sticky");
		}
		else{
			$(".top_line").removeClass("sticky");
		}
	});
	

	//mPageScroll2id (Backlight menu when scrolling)
	$(".top-mnu a").mPageScroll2id({
		offset : 10,
		scrollSpeed : 1500
	});
	

	// Toggle menu-button
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
	});

	if ($(window).width() <= 768) {
		$(".top-mnu a").click(function() {
			$(".toggle-mnu").removeClass("on");
			$(".top-mnu").slideToggle();
		});
	};

	// Animation
	$(".main_head").animated("zoomIn");
	$(".top_line").animated("fadeInDownBig");
	$(".soc-descr").animated("fadeInleft");
	$(".soc-btn-box").animated("fadeInRight");
	$(".tabs-soft").animated("fadeInRightBig");
	$(".city").animated("zoomIn");
	$(".feat_2 .photo-wrap").animated("fadeInRightBig");
	$(".feat_2 .sub-list").animated("fadeInRightBig");
	$(".feat_3 .photo-wrap").animated("fadeInLeftBig");
	$(".feat_3 .pic-sect").animated("fadeInLeftBig");
	$(".title-sect").animated("zoomIn");
	$(".footer .soc-btn-box").animated("fadeInUp");
	$(".form-l").animated("fadeInLeftBig");
	$(".form-r").animated("fadeInRightBig");

	$(".sect_3").waypoint(function() {

		$(".sect_3 .awesome-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

	$(".sect_4").waypoint(function() {

		$(".price-wrap .price-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

	$(".sect_5").waypoint(function() {

		$(".testimonials-wrap .testimonial-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	//PopUp FancyBox
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