var passengers = [{
  name: "Jane Doloop",
  paid: true,
  ticket: "coach"
}, {
  name: "Dr. Evel",
  paid: true,
  ticket: "firstclass"
}, {
  name: "Sue Property",
  paid: false,
  ticket: "firstclass"
}, {
  name: "John Funcall",
  paid: true,
  ticket: "premium"
}];










/*traditional method
function createDrinkOrder(passenger) {
  if (passenger.ticket === "firstclass") {
    alert("Would you like a cocktail or wine?");
  } else {
    alert("Your choice is cola or water.");
  }
}*/

function checkNoFlyList(passenger) {
  return (passenger.name === "John Funcall"); /*"John Funcall" is the name which are there in the "noflylist" means we r providing the name from checkNoFlyList function(this function is nothing but list of passanger only, which could not fly)*/
}

function checkNotPaid(passenger) {
  return (!passenger.paid); //this function checks in passangers array for false value means if paid property contains false value....
}

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {

      return false;
    }
  }
  return true;
}
//createDrinkOrder(passenger);


var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
 
}

function createDrinkOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like wine, cola or water?");
    };
  } else {
    orderFunction = function() {
      alert("Your choice is cola or water.");
    };
  }
  return orderFunction;
}
function createDinnerOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      alert("Would you like a snack box or cheese plate?");
    };
  } else {
    orderFunction = function() {
      alert("Would you like peanuts or pretzels?");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);
  getDrinkOrderFunction();
  // get dinner order
  getDinnerOrderFunction();
  /*
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  // show movie
  getDrinkOrderFunction();
  // pick up trash
  */
}
function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
servePassengers(passengers);





function printpassenger(passengers) {

  console.log("name of passenger = " + passengers.name + "    " + " paid status " + passengers.paid + "    " + "ticket type=  " + passengers.ticket);

}
var print = processPassengers(passengers, printpassenger);
