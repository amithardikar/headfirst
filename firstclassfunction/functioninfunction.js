var passengers = [{
  name: "Jane Doloop",
  paid: true
}, {
  name: "Dr. Evel",
  paid: true
}, {
  name: "Sue Property",
  paid: false
}, {
  name: "John Funcall",
  paid: true
}];

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


var allCanFly = processPassengers(passengers,checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}
