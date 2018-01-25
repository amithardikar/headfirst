//var numbersArray = [60, 50, 62, 58, 54, 54];
/*
function compareNumbers(num1, num2) {
  if (num1 > num2)
  {
  //console.log("num1="+num1+" num2="+num2);
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}
var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);
*/
var products = [{
  name: "Grapefruit",
  calories: 170,
  color: "red",
  sold: 8200
}, {
  name: "Orange",
  calories: 160,
  color: "orange",
  sold: 12101
}, {
  name: "Cola",
  calories: 210,
  color: "caramel",
  sold: 25412
}, {
  name: "Diet Cola",
  calories: 0,
  color: "caramel",
  sold: 43922
}, {
  name: "Lemon",
  calories: 200,
  color: "clear",
  sold: 14983
}, {
  name: "Raspberry",
  calories: 180,
  color: "pink",
  sold: 9427
}, {
  name: "Root Beer",
  calories: 200,
  color: "caramel",
  sold: 9909
}, {
  name: "Water",
  calories: 0,
  color: "clear",
  sold: 62123
}];

function colsold(col1, col2) {
  if (col1.sold > col2.sold) {
    return 1;
  } else if (col1.sold === col2.sold) {
    return 0;
  } else
    return -1;

}
products.sort(colsold);//after applying sort method, products array get sorted
//in function printproducts parameter (products) which has passed is sorted array elements of products
function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log("Name: " + products[i].name +
      ", Calories: " + products[i].calories +
      ", Color: " + products[i].color +
      ", Sold: " + products[i].sold);
  }
}
printProducts(products);//here product means updated products array in pass as argument
