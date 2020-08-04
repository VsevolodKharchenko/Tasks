
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let rectSize = 20;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;
let score = 0;
let changer = true;
let color = "#00ff00";
let blockColor1 = "green";
let blockColor2 = "blue";
let blockColor3 = "yellow";
let segmentsColor = "Red";
let fontColor = "#edff18"
let intervalTimer = 0;
let pauseVar = false;
let intervalId;
let scoreNum = score;
let startingSound;
let gameOverSound;
let appleEatingSound;
let backgroundSound;
let wallCollision;
let gameVar;
let themeIntervalId;
let x = 0;
let intervalForAnimatedString;
let widthChanger = 0;
let animationIntervalCounter = 0;
let lives = 7;

let background = new Image();
background.src = "img/grass.jpg";
background.onload = function(){
    context.drawImage(background,0,0); 
}	

function setDefault() {
    return background.src = "img/grass.jpg";
};

function setFootball() {
	return background.src = "img/football.jpg";
};

function setWater() {
	return background.src = "img/water.jpg";
};

function setMetal() {
	return background.src = "img/metal.jpg";	
};

let drawBorder = function () {
	context.fillStyle = "#595959";
	context.fillRect(0, 0, width, blockSize);
	context.fillRect(0, height - blockSize, width, blockSize);
	context.fillRect(0, 0, blockSize, height);
	context.fillRect(width - blockSize, 0, blockSize, height);
};

let drawScore = function () {
	context.font = "bold 16px Sans-serif";
	context.fillStyle = fontColor;
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Score: " + score, 15, 20);
};

let drawLives = function () {
	context.font = "bold 16px Sans-serif";
	context.fillStyle = fontColor;
	context.textAlign = "right";
	context.textBaseline = "top";
	context.fillText("Lives: " + lives, 550, 20);
};

let lettersForAnimatedString = ["G","a", "m", "e", " ", "O", "v", "e", "r"];

let i = 0;
let createAnimatedString = function () {
	for (; i < lettersForAnimatedString.length; i++) {
		let result = lettersForAnimatedString[i];
		i++;
		return result;
	}
};

let createText = function() {
	if (animationIntervalCounter === lettersForAnimatedString.length - 1) {
		clearInterval(intervalForAnimatedString);
	}
	context.font = "bold 60px Courier";
	context.fillStyle = "White";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText(createAnimatedString(), (width / 6 + widthChanger), height / 2);
	widthChanger += 50;
	animationIntervalCounter += 1;
};


function makeInterval() {
    intervalForAnimatedString = setInterval(createText, 200);
}


let gameOver = function () {
	if(lives === 0){
	let gameOverText;
	clearInterval(intervalId);
	clearInterval(themeIntervalId);
	backgroundSound.pause();
	gameOverSound = new sound("sound/gameover.mp3");
	gameOverSound.play();  
	makeInterval();
	setTimeout(printFinalScore, 2000);
	score -= scoreNum;
	} else {
		lives--;
	}
};
	

let printFinalScore = function() {
	context.font = "bold 30px Courier";
	context.fillStyle = "White";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillText("Your score is: " + score, width / 2, height / 1.5);
	if (score < 10) {
		context.fillText("Umm...It's horrible, sorry", width / 2, height / 1.3);
	}
	if (score >= 10 && score < 25) {
		context.fillText("Your result is...Pretty ok", width / 2, height / 1.3);
	}
	if (score >= 25 && score < 50) {
		context.fillText("Great Job! You are good at this!", width / 2, height / 1.3);
	} else if (score >= 50 && score < 250) {
		context.fillText("Incredible result!", width / 2, height / 1.3);
	} else if (score >= 250) {
		context.fillText("Magnificent result! You are really skilled!", width / 2, height / 1.3);
	}
}

let circle = function (x, y, radius, fillCircle) {
	context.beginPath();
	context.arc(x, y, radius, Math.PI * 2, false);
	if (fillCircle) {
		context.fill();
	} else {
		context.stroke();
	}
};

//  constructor
let Block = function(col, row) {
    this.col = col;
	this.row = row;
};


//  adding a method drawSquare to a property of prototype constructor 
Block.prototype.drawSquare = function(color) {
    let x = this.col * blockSize;
	let y = this.row * blockSize;
	context.fillStyle = color;
	context.fillRect(x,y,blockSize, blockSize);
};

//   creating a new object
let sampleBlock = new Block(30,25);
sampleBlock.drawSquare("blue");

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
function nextSegmentsColor(){
	let random = Math.random();
	
	if (random <= 0.3 && color != "LimeGreen" ) {
	segmentsColor = "LimeGreen";
	} else if (random > 0.3 && random <= 0.6 && color != "Red" ) {
	segmentsColor = "Red";	
	} else if (random > 0.6 && color != "Yellow" ) {
	segmentsColor = "Yellow";
	} else if (random > 0.6 && color == "Yellow" ) {
    segmentsColor = "Red";
	} else if (random > 0.3 && random <= 0.6 && color == "Red" ) {
    segmentsColor = "LimeGreen";
	} else if (random <= 0.3 && color == "LimeGreen" ) {
    segmentsColor = "Yellow";
	}
};

let colorArray = ["#1aff1a", "Red", "#ff8000", "#cc00cc", "orange", "blue", "black", "brown"];

Snake.prototype.draw = function() {
	for (let i = 0; i < this.segments.length; i++ ) {
		this.segments[i].drawSquare(colorArray[i%8]);
	
		let random = Math.random();
		if(random <= 0.3) {
			this.segments[i].drawSquare("blockColor1");
		} else if (random > 0.3 && random <= 0.6) {
			this.segments[i].drawSquare("blockColor2");	
		} else {
			this.segments[i].drawSquare("blockColor3");
		} 
    }
};

Block.prototype.equal = function (otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;
};

function moveToNextLevel(){
		if(score == 1 && intervalTimer == 100){
			setHard();
		} else if(score == 25 && intervalTimer == 75){
			intervalTimer = 50;
		}
	}

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
		appleEatingSound = new sound("sound/coin.mp3");
	    appleEatingSound.play();  //   can put it in different places of the soft
		score++;
		apple.move();
		killObstacle.move();
		decreaseObstacle.move(); 
		
	} else if (newHead.equal(killObstacle.position)) {
	    gameOver();
	} else if (newHead.equal(decreaseObstacle.position)) {
        score--;
		apple.move();
		killObstacle.move();
		decreaseObstacle.move(); 
		decreaseSound = new sound("sound/hit.wav");
	    decreaseSound.play();  //   can put it in different places of the soft
		
	} else {
		this.segments.pop();
	}
};

Snake.prototype.checkCollision = function (head) {
	let leftCollision = (head.col === 0);
	let topCollision = (head.row === 0);
	let rightCollision = (head.col === widthInBlocks - 1);
	let bottomCollision = (head.row === heightInBlocks - 1);
	
	wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
	
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

function tooLowScoreGameOver(){
	if(score < 0){
		gameOver();
	}
};

let KillObstacle = function() {
	this.position = new Block(7, 10);
}
KillObstacle.prototype.draw = function () {
	this.position.drawSquare("Red");
};

let DecreaseObstacle = function() {
	this.position = new Block(4, 8);
}
DecreaseObstacle.prototype.draw = function () {
	this.position.drawSquare("Blue");
};

let Apple = function () {
	this.position = new Block(10,10);
};
Apple.prototype.draw = function () {
	this.position.drawCircle(color);
};

function nextColor(){
	let random = Math.random();
	
	if (random <= 0.3 && color != "#00ff00" ) {
	color = "#00ff00";
	} else if (random > 0.3 && random <= 0.6 && color != "Red" ) {
	color = "Red";	
	} else if (random > 0.6 && color != "Yellow" ) {
	color = "Yellow";
	} else if (random > 0.6 && color == "Yellow" ) {
    color = "Red";
	} else if (random > 0.3 && random <= 0.6 && color == "Red" ) {
    color = "#00ff00";
	} else if (random <= 0.3 && color == "#00ff00" ) {
    color = "Yellow";
	}
};

Apple.prototype.move = function () {
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
	this.position = new Block(randomCol, randomRow);
	nextColor();
};

KillObstacle.prototype.move = function () {
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
	this.position = new Block(randomCol, randomRow);
};

DecreaseObstacle.prototype.move = function () {
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
	this.position = new Block(randomCol, randomRow);
};


let snake = new Snake();
let killObstacle = new KillObstacle();
let decreaseObstacle = new DecreaseObstacle();
let apple = new Apple();


function setEasy() {
	if (confirm("Nope, you won't choose easy difficulty")) {
		let choice = prompt("So, what are you gonna do next?");
		if(choice == "I'm bad at snake"){
			alert("ah ok, sorry, then I'll set the game to an easy mode, now just press 'begin'");
			intervalTimer = 175;
		} else if (choice == "hard mode"){
			intervalTimer = 5;
			alert('hard mode set, now press "begin"');
		} else {
			alert("Well, I'm closing the game then");
			window.close();
	    }
	}
};

function setNormal() {
	intervalTimer = 100;
}

function setHard() {
	intervalTimer = 50;
}

function setNuclear() {
	intervalTimer = 10;
}

function pauseGame() {
	backgroundSound.pause();
	clearInterval(intervalId);
 //alert("Paused!");
}

function continueGame() {
	startGame();
}

function openFullscreen() {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.mozRequestFullScreen) { /* Firefox */
    canvas.mozRequestFullScreen();
  } else if (canvas.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) { /* IE/Edge */
    canvas.msRequestFullscreen();
  }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
		this.sound.volume = 0.2;
		this.sound.play();
    }
    this.pause = function(){
        this.sound.pause();
    }    
}

function increaseVolume(){
	if(backgroundSound.sound.volume === 0.02){
		backgroundSound.sound.volume = 0.2;
	} else if(backgroundSound.sound.volume === 0.2){
		backgroundSound.sound.volume = 0.5;
	} else if(backgroundSound.sound.volume === 0.5){
		backgroundSound.sound.volume = 1;
	} else if(backgroundSound.sound.volume === 1){
		console.log('If you are reading this, stop pressing "Volume +" button');
	}
}



function decreaseVolume(){
	if(backgroundSound.sound.volume === 1){
		backgroundSound.sound.volume = 0.5;
	}
	else if(backgroundSound.sound.volume === 0.5){
		backgroundSound.sound.volume = 0.2;
	}
	else if(backgroundSound.sound.voulme === 0.2){
	    backgroundSound.sound.volume = 0.02;
	} else if(backgroundSound.sound.volume === 0.02){
		console.log('If you are reading this, stop pressing "Volume -" button');
	}
}

let soundSaver = true;
let soundToggle = true;





function toggleSound(){
	if(soundToggle == true){
		soundToggle = false;
		alert("Music is now turned off");
	} else if (soundToggle == false){
		soundToggle = true;
		alert("Music is now turned on");
	}
}

let toggleVar = true;

backgroundSound = new sound("sound/theme.mp3");

function toggleNav(){
	if (toggleVar == true ){
		document.getElementById("control").hidden = true;
		toggleVar = false;
	} else if (toggleVar == false){
		document.getElementById("control").hidden = false;
		toggleVar = true;
}
}

function startGame(){
    startingSound = new sound("sound/start.wav");
	startingSound.play();  
	if(intervalTimer == 0){
		alert("Please, choose your difficulty");
	} else {
	
    intervalId = setInterval(function() {
	let playTheme = function(){	
	if(soundToggle == true && soundSaver == true){
		backgroundSound.play();
		soundSaver = false;
	} else if (soundToggle == false && soundSaver == false){
		backgroundSound.pause();
		soundSaver = true;
	}
	}
	playTheme();
	
	context.clearRect(0, 0, width, height);
	background.onload();
	tooLowScoreGameOver();
	snake.move();
	snake.draw();
    decreaseObstacle.draw();
	killObstacle.draw();
	apple.draw();
	drawScore();
	drawLives();
	drawBorder();
	moveToNextLevel();
    }, intervalTimer);
  }
}


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

function restart(){
	location.reload();
};

