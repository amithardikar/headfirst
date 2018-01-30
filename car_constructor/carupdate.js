function Car(make, model, year, color, passenger, convertible, milage, started) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passenger = passenger;
  this.convertible = convertible;
  this.milage = milage;
  this.started = started;

  this.start = function() {
    this.started = true;

  }
  this.stop = function() {

    this.started = false;
  }
  this.drive = function() {
    if (this.started) {
     // alert(this.started);//printing value of this.started
      alert(this.make + " " + this.model + "goes zommmmmmm");
    } else {
      //alert(this.started);
      alert("start the engine first");
    }

  }

}
var skoda = new Car("skoda", "superb", 2018, "black", 5, "yes", 20);//no need to give same number of arguments as define in constructor 

var ford = new Car("ford", "Ecosport", 2018, "white", 5, "no", 23);
/*
var cars=[skoda,ford];

for(var i=0;i<cars.length;i++)
{
		cars[i].start();
    
   cars[i].drive();
    cars[i].drive();
   
   cars[i].stop();
}*/
skoda.stop();
ford.start();
skoda.drive();
ford.drive();
skoda.start();
ford.stop();
skoda.drive();
ford.drive();
