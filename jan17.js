/*function dog(name,weight)
{
	if(weight>20)
  {
		document.write(name +"  says Woooof woooof");
	}
  else
  {
  document.write("<br>"+name+"      says woo woo");
	}
}
dog("amit",86);
dog("pikachu",3);

var name="amit";
var bday="18-12-1990";
var status="existing user";
var isNewUser=(status=="newuser");

function smyf(name,bday,status,isNewUser)
{
document.write(name+bday+isNewUser);
}
smyf(name,bday,isNewUser);*/
/*
var student = "krissy";
var year = 1991; 
var GPA = 381/100; 
var status = "existinguser"; 
var isNewUser = (status == "newuser");

function saveMyProfile(student, year, GPA, isNewUser)
{
document.write(student+year+GPA+isNewUser);
}
saveMyProfile(student, year, GPA, isNewUser);*/
//pass by value ...value modified only in function that is scope is only in function
/*
function doIt(test)
{  var  test = 2;
console.log("in function value of test is "+test)
}

var test = 7; 
doIt(test); 
console.log("out of the function test value is "+test);

function dogYears(dogName, age)
{    
var years = age * 7;    console.log(dogName + " is " + years + " years old"); 
}
var myDog = "Fido"; dogYears(myDog, 4);

function bake(deg) {
  var msg = "";
  if(deg>500)
  {
  msg="to hottt temprature";
  }
else if(deg<100)
	{
  	msg="to cold";
  }
  else
  {
  msg="proper tempreture";
  }
  return msg;
}
var test=bake(350);
console.log(test);*/
//battleship
/*
var location1 = 3; var location2 = 4; var location3 = 5; var guess; var hits = 0; var guesses = 0; var isSunk = false;
while (isSunk == false) {     guess = prompt("Ready, aim, fire! (enter a number from 0-6):");   
guesses = guesses + 1;
if (guess < 0 || guess > 6) {          alert("Please enter a valid cell number!");    } else {          
        if (guess == location1 || guess == location2 || guess == location3) {            alert("HIT!");            hits = hits + 1;            if (hits == 3) {                isSunk = true;                alert("You sank my battleship!");            }        } else {           alert("MISS");        }    } } var stats = "You took " + guesses + " guesses to sink the battleship, " +               "which means your shooting accuracy was " + (3/guesses); alert(stats);
*/
/*
var points = 0; function playTurn(player, location) {    points = 0;    if (location == 1) {       points = points + 100;    }    return points; } var total = playTurn("Jai", 1); alert(points);
*/

var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
  var level = points / pointsPerLevel;

  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}
userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
