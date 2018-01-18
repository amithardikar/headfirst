var car={Name:"audi",
				Model:"Q8",
        Color:"white",
        price:9000
        
};

document.write("Name="+car.Name+"<br>"+"Model="+car.Model+"<br>"+"color="+car.Color+"<br>"+"Price="+car.price+car.cash);
car.price=80000;
if(car.price<"19000")
{
console.log("buy it hurry");

}
else
console.log("dont buy");
//adding new property to object
car.cash=true;
//assigning value to cash property
car.cash="no cash";
document.write("<br>Name="+car.Name+"<br>"+"Model="+car.Model+"<br>"+"color="+car.Color+"<br>"+"Price="+car.price+car.cash);
