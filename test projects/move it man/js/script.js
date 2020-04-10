
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width/-30;    //  adding from here
let y = canvas.height-75;  
/*let dx = 2;
let dy = -2; */

function draw() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);  //  Clearing the canvas before each frame 
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    x += 1;                //  adding from here
    y += -1;
}
    
setInterval(draw, 10);
