var css = document.querySelector('h3');
var color1 = document.querySelector('.color1'); // we do class selector so we put .
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

// checking if there are correct in the console.
// click, mouseenter, keypress.
// there are events for inputs -> input

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// body.style.background = 'red'

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
   css.textContent = body.style.background + ';'; // add text content, there are many ways to add things to DOM.
}


color1.addEventListener("input", setGradient); // this events automatically trigger the function so you do not need to call the function
color2.addEventListener("input", setGradient); // the second arguments ran automatically.

// color1.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; // a thing we need to get used to it .
// 	// console.log(color1.value);
// })

// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// 	// console.log(color2.value);
// }) // now we can see in the console the color is updating.

// we grabed the value of colors.
// now change the background color -> click inspect we see that bg is in the body tag
// so we change this 


