
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width/-30;    
let y = canvas.height-190;  
let x1 = canvas.width/-30;
let y1 = canvas.height-90;
let yeet = canvas.width-20;
let wheeze = canvas.height-200;


function drawLine() {
	ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    x += 1;                
    y += -1;
}

function drawCircular() {
	ctx.beginPath();
    ctx.arc(x1, y1, 10, 0, Math.PI*2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    x1 += 1;                
    y1 += -1;
}

function drawNew() {
	ctx.beginPath();
	ctx.rect(yeet, wheeze, 35, 35);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
	yeet += -1;
	wheeze += 1;
}
   
setInterval(drawNew, 15); 

setInterval(drawCircular, 12);  

setInterval(drawLine, 10);  