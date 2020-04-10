let result;


function check_truck() {
let x = Math.random();
if (x < 0.33) {
	document.getElementById("result").innerHTML = "That's the right truck!";
} else if (x > 0.33) {
	document.getElementById("result").innerHTML ="this truck is empty...";
}
}



