//var image = document.getElementById("oneblur");

window.onload = init;
function init() {
 var images = document.getElementsByTagName("img");
 for (var i = 0; i < images.length; i++) {
 images[i].onclick = showAnswer;
 //document.write(i);
 }

 };
 
function showAnswer(event) {
 
 //event.target.src = "one.jpg";
 var image=event.target;
// document.write("target= "+image);
 var name = image.id;
// document.write("<br/>name1="+name);
 name = name + ".jpg";
 //document.write("<br/>name2="+name);
 image.src = name;
 //document.write("<br/>image src = "+image.src);
setTimeout(reblur, 2000, image);
}

function reblur(image) {
 var name = image.id;
 name = name + "blur.jpg";
 image.src = name;
}