/*JSLINT*/
/* global $:false */

$(document).ready(function () {
	"use strict";
	/*Config taxi change images when focus inputs*/
	$("#taxiName").focus(function () {
		$("#configTaxi").attr("src", "img/smallTaxi_config_name.png");
		$("#configTaxi").removeClass("animated pulse");
		$("#configTaxi").addClass("animated pulse");
	});
	
	$("#taxiEngine").focus(function () {
		$("#configTaxi").attr("src", "img/smallTaxi_config_engine.png");
		$("#configTaxi").addClass("animated pulse");
	});
	
	$("#taxiTires").focus(function () {
		$("#configTaxi").attr("src", "img/smallTaxi_config_tires.png");
		$("#configTaxi").addClass("animated pulse");
	});

	/*Focus out event*/
	$("#taxiTires, #taxiEngine").focusout(function () {
		$("#configTaxi").attr("src", "img/smallTaxi_config.png");
	});
	
});


/*Taxi move when scroll*/
$(window).scroll(function () {
	"use strict";
	var scrollT = $(window).scrollTop(),
		windowHeight = $(window).height();
	$('.p_mainTaxiImg').css({
		'margin-left': scrollT / 7
	});
	if (scrollT > 400) {
		$('.p_mainTaxiImg').hide();
	}
	if (scrollT < 400) {
		$('.p_mainTaxiImg').show();
	}
});