//let dogs = new Image();
//dogs.src = "img/dogs.jpg";

document.getElementById("myBtn").addEventListener("click", showImage);

function showImage() {
    let x = document.createElement("IMG");
	x.setAttribute("src", "img/dogs.jpg");
	x.setAttribute("width", "304");
	x.setAttribute("height", "228");
	x.setAttribute("alt", "dogs");
	document.body.appendChild(x);
}
