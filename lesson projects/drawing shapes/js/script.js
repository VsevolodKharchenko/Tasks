

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

// circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// rectangular
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

// let's create 5 more shapes

ctx.beginPath();
ctx.arc(120, 30, 60, 0, Math.PI*2, false);
ctx.fillStyle = "orange";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(400, 250, 30, 50);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

// the triangle
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(250, 300);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(195, 232);
ctx.lineTo(188, 246);
ctx.lineTo(100, 200);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();