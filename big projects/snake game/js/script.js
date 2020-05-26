
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let rectSize = 20;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;
let score = 0;
//context.fillStyle = "#eee";
//context.fillRect(0, 0, 400, 400);



let drawBorder = function () {
	context.fillStyle = "Gray";
	context.fillRect(0, 0, width, blockSize);
	context.fillRect(0, height - blockSize, width, blockSize);
	context.fillRect(0, 0, blockSize, height);
	context.fillRect(width - blockSize, 0, blockSize, height);
};



//  ==========  drawing score


let drawScore = function () {
	context.font = "13px Courier";
	context.fillStyle = "Green";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Счет: " + score, 15, 20);
};

//drawScore();

let gameOver = function () {
	clearInterval(intervalId);
	context.font = "60px Courier";
	context.fillStyle = "Black";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("Game Over", width / 2, height / 2);
};

let circle = function (x, y, radius, fillCircle) {
	context.beginPath();
	context.arc(x, y, radius, Math.PI * 2, false);
	if (fillCircle) {
		context.fill();
	} else {
		context.stroke();
	}
};
//  =========  constructor for creating objects


//  constructor
let Block = function(col, row) {
    this.col = col;
	this.row = row;
};


//  ==========  drawing a square


//  adding a method drawSquare to a property of prototype constructor 
Block.prototype.drawSquare = function(color) {
    let x = this.col * blockSize;
	let y = this.row * blockSize;
	context.fillStyle = color;
	context.fillRect(x,y,blockSize, blockSize);
};

//   creating a new object
let sampleBlock = new Block(30,25);

sampleBlock.drawSquare("#000099");

//  ========  preparing to create a circle


//  function that creates a circle


// drwaing a circle 

//  adding a method drawCircle to a property of prototype constructor 
Block.prototype.drawCircle = function(color) {
	let centerX = this.col * blockSize + blockSize / 2;
	let centerY = this.row * blockSize + blockSize / 2;
	context.fillStyle = color;
	circle(centerX, centerY, blockSize / 2, true);
};

//   creating a new object
let sampleCircle = new Block(15,25);
	
sampleCircle.drawCircle("#e60000");

/*  creating method equal 
    & adding method equal to prototype property of constructor Block
	now constructor Block has one more method: equal


   the method returns true if there is a collision
   the method returns false if there is no collision
*/
Block.prototype.equal = function (otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;
}

//  =========  constructor for creating a snake

let Snake = function () {
	this.segments = [
	    new Block(7, 5),
		new Block(6, 5),
		new Block(5, 5)
	];   //  array made of objects
	
	this.direction = "right";
	this.nextDirection = "right";
};

//  =========  constructor for creating a snake


Snake.prototype.draw = function() {
	for (let i = 0; i < this.segments.length; i++) {
		this.segments[i].drawSquare("Blue");
	}
};




//snake.move();

Block.prototype.equal = function (otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;
};

//  =========  constructor for creating a snake





Snake.prototype.move = function () {
	let head = this.segments[0];
	let newHead;
	
	this.direction = this.nextDirection;
	
	if (this.direction === "right") {
		newHead = new Block(head.col + 1, head.row);
	} else if (this.direction === "down") {
		newHead = new Block(head.col, head.row + 1);
	} else if (this.direction === "left") {
		newHead = new Block(head.col - 1, head.row);
	} else if (this.direction === "up") {
		newHead = new Block(head.col, head.row - 1);
	}
	
	if (this.checkCollision(newHead)) {
		gameOver();
		return;
	}
	
	this.segments.unshift(newHead);
    
	if (newHead.equal(apple.position)) {
		score++;
		apple.move();
	} else {
		this.segments.pop();
	}
	
};

Snake.prototype.checkCollision = function (head) {
	let leftCollision = (head.col === 0);
	let topCollision = (head.row === 0);
	let rightCollision = (head.col === widthInBlocks - 1);
	let bottomCollision = (head.row === heightInBlocks - 1);
	
	let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
	
	let selfCollision = false;
	
	for (let i = 0; i < this.segments.length; i++) {
		if (head.equal(this.segments[i])) {
			selfCollision = true;
		}
	}
	
	return wallCollision || selfCollision;
};

Snake.prototype.setDirection = function (newDirection) {
	if (this.direction === "up" && newDirection === "down") {
		return;
	} else if (this.direction === "right" && newDirection === "left") {
		return;
	} else if (this.direction === "down" && newDirection === "up") {
	    return;
	} else if (this.direction === "left" && newDirection === "right") {
		return;
	}
	
	this.nextDirection = newDirection;
};

let Apple = function () {
	this.position = new Block(10,10);
};

Apple.prototype.draw = function () {
	this.position.drawCircle("LimeGreen");
};

Apple.prototype.move = function () {
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
	this.position = new Block(randomCol, randomRow);
};

let snake = new Snake();
let apple = new Apple();

let intervalId = setInterval(function() {
	context.clearRect(0, 0, width, height);
	drawScore();
	snake.move();
	snake.draw();
	apple.draw();
	drawBorder();
}, 100);

let directions = {
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};

$("body").keydown(function(event) {
	let newDirection = directions[event.keyCode];
	if (newDirection !== undefined) {
		snake.setDirection(newDirection);
	}
});

// HOMEWORK
/*
let rect = function(squareX, squareY) {
    this.squareX = squareX;
	this.squareY = squareY;
};
	
	rect.prototype.drawRect = function(color) {
    let x = this.squareX * rectSize;
	let y = this.squareY * rectSize;
	context.fillStyle = color;
	context.fillRect(x, y, rectSize + 40, rectSize);
	}
	
	let testRect = new rect(10, 15);
	
	testRect.drawRect("yellow");

	

rect.prototype.moveRect = function(color, x, y){
    context.fillStyle = color;
	context.fillRect(x, y, rectSize, rectSize);
	x += 2;
	y += 2;
};

let movingRect = new rect(10, 10);

setInterval(movingRect.moveRect, 2);

*/

