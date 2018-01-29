function Cd(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  this.getSize = function() {
    if (this.ounces === 8) {
      return "small";
    } else if (this.ounces === 12) {
      return "medium";
    } else if (this.ounces === 16) {
      return "large";
    }
  };
  /*

  this.toString = function() {
    if (this.ounces === 12) {
      return "You’ve ordered a small House Blend coffee.";
    }
  };
*/
this.toString = function() {
 return "You've ordered a " + this.getSize() + " "
 + this.roast + " coffee.";
 };
}

var houseBlend = new Cd("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Cd("Dark Roast", 16);
console.log(darkRoast.toString());
/*
var order = [houseBlend, darkRoast];

for (var i = 0; i < order.length; i++) {
  order[i].getSize();
}
//alert(darkRoast.toString());
*/