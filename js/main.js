/*Create objects and all we need*/
$(document).ready(function () {
	$("#validateBtn").click(function () {
		var taxiName, taxiEngine, taxiTires;

		taxiName = $("#taxiName").val();
		taxiEngine = $("#taxiEngine").val();
		taxiTires = $("#taxiTires").val();

		var createdTaxi = new Taxi({
			name: taxiName,
			engine: taxiEngine,
			tires: taxiTires
		});
		alert(createdTaxi.taxiEngine);
		$("#resultDiv").removeClass("hidden");
		$("#engineID").text("Mustang");
		

	});
});

var myTaxi = new Taxi({
	name: "Name",
	engine: "No engine"
});