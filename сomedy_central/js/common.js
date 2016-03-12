$(document).mouseup(function (e){ // событие клика по веб-документу

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".l-sbar, .content, .r-sbar").toggleClass("s-open");
	});

	var div = $(".l-sbar"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		$(".l-sbar, .content, .r-sbar").removeClass("s-open"); // скрываем его
		$(".toggle-mnu").removeClass("on"); // скрываем его
	};

	var div = $(".notiff, .notiff-box"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".notiff").removeClass("active"); // скрываем его
		$(".notiff-descr").slideUp();
		$(".full-video").slideUp();
	};

});


$(document).ready(function() {
	
	$(".notiff").click(function() {
		$(this).toggleClass("active");
		$(".notiff-descr").slideToggle();
		$(".full-video").slideToggle();
	});

	/*Custom select*/
	$(function() {
		$( ".sorted" )
		.selectmenu()
		.selectmenu( "menuWidget" )
		.addClass( "overflow" );
	});


});