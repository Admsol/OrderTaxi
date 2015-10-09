/* Handle DOM clicks */
var createdTaxi;

$(document).ready(function () {
	$("#validateBtn").click(function () {
		var taxiName, taxiEngine, taxiTires;

		taxiName = $("#taxiName").val();
		taxiEngine = $("#taxiEngine").val();
		taxiTires = $("#taxiTires").val();

		createdTaxi = new Taxi({
			name: taxiName,
			engine: taxiEngine,
			tires: taxiTires
		});
		console.log(createdTaxi.name);
		console.log(createdTaxi.engine);

		$("#resultDiv").removeClass("hidden");

		/*Set text*/

		$("#displayTaxiName").text(createdTaxi.name);
		$("#tiresText").text(createdTaxi.tires);
		$("#engineText").text(createdTaxi.engine);

		setTimeout(function () {
			var $target = $('html,body');
			$target.animate({
				scrollTop: 1000
			}, 1000);
		}, 200);

	});
	$("#sportBoost").click(function () {
		if ($("#resultTaxi").attr("src") != "img/smallTaxi_race.png") {



			createdTaxi.addTurbo();



			$("#tiresText").addClass("animated fadeOut");
			$("#engineText").addClass("animated fadeOut");
			$("#engineImage").addClass("animated hinge");
			$("#tireImage").addClass("animated hinge");

			setTimeout(function () {
				$("#resultTaxi").addClass("animated hinge");
			}, 2000);

			setTimeout(function () {

				$("#engineImage").attr("src", "img/engine_race.png");
				$("#engineImage").removeClass("animated hinge");
				$("#engineImage").addClass("animated fadeIn");
				
				$("#engineText").removeClass("animated fadeOut");
				$("#engineText").text(createdTaxi.engine);
				$("#engineText").addClass("animated fadeIn");

			}, 3000);

			setTimeout(function () {

				$("#tireImage").attr("src", "img/tire_race.png");
				$("#tireImage").removeClass("animated hinge");
				$("#tireImage").addClass("animated fadeIn");
				
				$("#tiresText").removeClass("animated fadeOut");
				$("#tiresText").text(createdTaxi.tires);
				$("#tiresText").addClass("animated fadeIn");

			}, 3000);


			$("#tiresText").text(createdTaxi.tires);

			/*Animation beautiful transitions*/
			setTimeout(function () {
				$("#resultTaxi").removeClass("animated hinge");
				$("#resultTaxi").attr("src", "img/smallTaxi_race.png");
				$("#resultTaxi").addClass("animated fadeIn");


			}, 5000);
		} else {
			alert("Already boosted!");
		}

	});


});