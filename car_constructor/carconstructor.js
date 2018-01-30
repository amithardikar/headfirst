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
		this.started=true;

  }
  this.stopped=function(){
  
  this.started=false;
  }
  this.drive=function(){
  if(this.started){
  alert(this.make+" "+this.model+"goes zommmmmmm");
  }
  else{
  alert("start the engine first");
  }
  
  }

}
var skoda=new Car("skoda","superb",2018,"black",5,"yes",20,true);

var ford=new Car("ford","Ecosport",2018,"white",5,"no",23,false);
/*
for(var i=0;i<Car.length;i++)
{

}*/
skoda.drive();
ford.drive();