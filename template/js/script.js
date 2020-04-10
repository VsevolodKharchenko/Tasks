

let number = 3;

if (number === 5) {
	console.log(5);
} else {
	console.log("it is not 5");
}


function divide (number1, number2) {
	if (number2 === 0) {
		console.log("Don't divide by zero.");
	} else {
		console.log(number1/number2);
	}
}

divide(4,2);
divide(5,0);