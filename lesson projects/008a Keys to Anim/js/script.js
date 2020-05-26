
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;


//  ========  preparing to create a circle


//  function that creates a circle
let circle = function(x, y, radius, fillCircle) {
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	//if (fillCircle) {
		context.fill();
		
	/*} else {
		context.stroke();
	} */
};


//  =========  constructor for ball object

let Ball = function () {
	this.x = width / 2;
	this.y = height / 2;
	this.xSpeed = 5;
	this.ySpeed = 0;
};


//  Updating speed of the ball

Ball.prototype.move = function () {
    this.x += this.xSpeed;
	this.y += this.ySpeed;
	if (this.x < 0) {
		this.x = width;
	} else if (this.x > width){
		this.x = 0;
	} else if (this.y < 0) {
		this.y = height;
	} else if (this.y > height) {
		this.y = 0;
	}
};

Ball.prototype.draw = function () {
	circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function (direction) {
	let random = Math.random;
	if (direction === "up") {
		this.xSpeed = 0;
		this.ySpeed = -5;
	} else if (direction === "down") {
		this.xSpeed = 0;
		this.ySpeed = 5;
	} else if (direction === "left") {
		this.xSpeed = -20;
		this.ySpeed = 0;
	} else if (direction === "right") {
		this.xSpeed = 10;
		this.ySpeed = 0;
	} else if (direction === "stop") {
		this.xSpeed = 50;
		this.ySpeed = 50;
	}
};

let ball = new Ball();


//  =========  


let keyActions = {
	32: "stop",
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};

$("body").keydown(function(event) {
	let direction = keyActions[event.keyCode];
	ball.setDirection(direction);
});

setInterval(function () {
	context.clearRect(0, 0, width, height);
	ball.draw();
	ball.move();
	context.strokeRect(0, 0, width, height);
},  30);



















