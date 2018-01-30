//page 575
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
//prototype start here

Dog.prototype.species = "Canine";//adding property using prtotype 

//adding functions using prototypes

Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " says Yip!");
  }
};
Dog.prototype.run = function() {
  console.log("Run!");
};
Dog.prototype.wag = function() {
  console.log("Wag!");
};
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

var dog=[fido,fluffy,spot];
for( var i=0;i<dog.length;i++)
{
	dog[i].bark();
  dog[i].run();
  dog[i].wag();

}
/*
fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();

Reason for using Prototype:-

If we dont use prototype then 3 objects(fido,fluffy,spot) of constructor(Dog) will make 3different copies of same function bark.like every object own a copy of bark.
it will take more memory and our code will get slow.

*/