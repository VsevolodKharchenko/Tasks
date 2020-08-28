//let dogs = new Image();
//dogs.src = "img/dogs.jpg";

//const btn = document.querySelector('button');
/*
btn.onclick = function() {
	
}
*/

document.getElementById("myBtn").addEventListener("mouseover", changeBackground);
document.getElementById("myBtn").addEventListener("mouseout", changeBackgroundToWhite);

function changeBackground() {
    document.body.style.backgroundColor = "green";
}

function changeBackgroundToWhite() {
    document.body.style.backgroundColor = "white";
}