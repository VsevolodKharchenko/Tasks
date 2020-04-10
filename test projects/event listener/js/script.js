document.getElementById('lesson_button').addEventListener( "mouseover", myFunction, true);

function myFunction() {
	//alert("You have put your mouse over the orange element!");
	document.getElementById('lesson_button').style.backgroundColor = "red";
	document.getElementById("lesson_button").innerHTML = "Don't click!";
	document.getElementById('lesson_button').style.width = "500px";
	document.getElementById('lesson_button').style.height = "150px";
	alert("Don't click!");
	console.log("Don't click!");
	document.getElementById("lesson_text").innerHTML = "Don't click!";
}

document.getElementById('lesson_button').addEventListener( "click", myFunction2, true);

function myFunction2() {
	document.getElementById("lesson_text").innerHTML = "Now you'll become spaghetti HAHAHAHA";
}

document.getElementById('lesson_button').addEventListener( "mouseout", myFunction3, true);

function myFunction3() {
	document.getElementById('lesson_button').style.backgroundColor = "yellow";
	document.getElementById('lesson_button').style.width = "154px";
	document.getElementById('lesson_button').style.height = "50px";
	document.getElementById("lesson_button").innerHTML = "Click me!";
	
}

d