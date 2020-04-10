

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function draw() {
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//draw();

setInterval(draw, 10);  

/*  running the function over and over again using a JavaScript 
    timing function setInterval();
	
    the draw() function will be called every 10 milliseconds forever, 
    or until we stop it
*/
