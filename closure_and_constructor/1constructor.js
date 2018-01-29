function Dog(name,age,weight)//define constructor .make a habit of constructor names initial should be capital.
{
this.name=name;
this.age=age;
this.weight=weight;
}
var lab=new Dog("lio",1,5);//creating objects of constructor(Dog)
var lab1=new Dog("lion",2,15);
var lab2=new Dog("amit",3.1,25);

var dogs=[lab,lab1,lab2];//creating array of objects

for(var i=0;i<dogs.length;i++)
{
var size="small";
	if(dogs[i].weight>15)
  {
  //console.log(dogs[i].weight);
  	size="large";
  	
  }
  console.log("name= "+dogs[i].name+"  age=  "+dogs[i].age+"  weight=  "+dogs[i].weight+"   "+size)


}