$(document).ready(function () {

	//Анимация
	$(".top_header").animated("fadeInDownBig");
	$(".tabs_header .wrapper").animated("flipInY", "rotateOut");
	$(".profi_item").animated("slideInRight", "slideOutRight");
	$(".s_profi .my_form").animated("zoomIn", "zoomOut");
	$(".s_back h3").animated("zoomIn", "zoomOut");
	$("footer").animated("zoomIn", "zoomOut");



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function () {
		var ths = $(this);
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function () {
			alert("Спасибо за заявку!");
			setTimeout(function () {
				$.fancybox.close();
				ths.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Карусель http://www.owlcarousel.owlgraphic.com/index.html
	$(".owl-carousel").owlCarousel({
		/* loop : true, */
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		navText: "",
	});

	//Tabs Shortcodes
	$(".top_phone .wrapper .tab").click(function () {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function () {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function () {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".s_contacts_top .tab").click(function () {
		$(".s_contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Stellar(paralax)
	$.stellar({
		responsive: true,
		horizontalOffset: 60,
	});

});