$(document).ready(function() {
	
	// Slider
	$(".flexslider").flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Sort Tabs
	$( "#s-tabs" ).tabs({
		hide: true,
		show: true,
	});

	// Select Menu
	$(document).on("click",".ui-selectmenu-button, .date", function(){
		$(this).addClass("active");
	});

	$(function() {
		$( ".cust-select" )
		.selectmenu()
		.selectmenu( "menuWidget" )
		.addClass( "overflow" );
	});

	// Datepicker
	$(function() {
		$( "#datepicker" ).datepicker();
	});

});