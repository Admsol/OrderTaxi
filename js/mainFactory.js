/* Taxi app */

/* Constructor Taxi */
/* Factory Taxi parts */

/* 
	
	Constructor
	
*/


function Taxi(options) {
	this.name = options.name || "Default Name";
	this.engine = options.engine || "VM Motori 2.5 litre";
	this.tires = options.tires || "Stock tires";
	this.power = options.power || 160;

}

/*Turbo if needed*/
Taxi.prototype = {

	addTurbo: function () {
		this.engine = "V8 Twin-turbo";
		this.engineLvl = "Lvl2 supercharged";
		this.power = 400;
	}
};

/*Part Factory*/
function TaxiPartFactory() {}

/*In the future, put Supermode, sport etc*/
TaxiPartFactory.prototype.mode = "Normal";
TaxiPartFactory.prototype.changePart = function (options) {
	var constructPart = null;

	if (options.part === "suspension")
		constructPart = SuspensionBuilder;
	if (options.part === "exhaust")
		constructPart = ExhaustBuilder;
	if (options.part === "bumper")
		constructPart = BumperBuilder;
	if (options.part === null)
		return false;

	return new constructPart(options);
}

/*Subfactory*/
function SuspensionBuilder(options) {
	this.suspension = options.suspension;
	Taxi.prototype.suspension = this.suspension;
}

function ExhaustBuilder(options) {
	this.exhaust = options.exhaust;
	Taxi.prototype.exhaust = this.exhaust;
}

function BumperBuilder(options) {
	this.bumper = options.bumper;
	Taxi.prototype.bumper = this.bumper;
}

