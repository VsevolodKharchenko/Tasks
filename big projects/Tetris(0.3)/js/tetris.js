  
const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
let startGameButton = document.getElementById("startGame")
let restartGameButton = document.getElementById("restartGame")
let pauseGameButton = document.getElementById("pauseGame")
let continueGameButton = document.getElementById("continueGame")
let backgroundSound
let rowSound
rowSound = new sound('sound/rowClearSound.mp3')
let gameOverSound
gameOverSound = new sound('sound/endGame.wav')
restartGameButton.hidden = true;
pauseGameButton.hidden = true;
continueGameButton.hidden = true;
let fallTime = 400;
let moveVar = false
let score = 0;


const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 30;
const VACANT = "WHITE"; // color of an empty square

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

// draw a square
function drawSquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);

    ctx.strokeStyle = "gray";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

// create the board

let board = [];
for( r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}

// draw the board
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

// the pieces and their colors

const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

// generate random pieces

function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
    return new Piece( PIECES[r][0],PIECES[r][1]);
}

let p = randomPiece();

// The Object Piece

function Piece(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0;// we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces
    this.x = 3;
    this.y = -2;
}

// fill function

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

// draw a piece to the board

Piece.prototype.draw = function(){
    this.fill(this.color);
}

// undraw a piece


Piece.prototype.unDraw = function(){
    this.fill(VACANT);
}

// move Down the piece

Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw();
    }else{
        // we lock the piece and generate a new one
        this.lock();
        p = randomPiece();
    }
    
}

// move Right the piece
Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw();
    }
}

// move Left the piece
Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw();
    }
}

// rotate the piece
Piece.prototype.rotate = function(){
    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
    let kick = 0;
    
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
            // it's the right wall
            kick = -1; // we need to move the piece to the left
        }else{
            // it's the left wall
            kick = 1; // we need to move the piece to the right
        }
    }
    
    if(!this.collision(kick,0,nextPattern)){
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; // (0+1)%4 => 1
        this.activeTetromino = this.tetromino[this.tetrominoN];
        this.draw();
    }
}



Piece.prototype.lock = function(){
	let gameOverVar = 1;
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we skip the vacant squares
            if( !this.activeTetromino[r][c]){
                continue;
            }
            // pieces to lock on top = game over
            if(this.y + r < 0){
				if(gameOverVar === 1){
				backgroundSound.pause()
				gameOverSound.play()
				clearInterval(backgroundSoundPlayer)
				pauseGameButton.hidden = true;
				startGameButton.hidden = true;
				continueGameButton.hidden = true;
				document.removeEventListener("keydown",CONTROL);
                restartGameButton.hidden = false;
				restartGameButton.innerHTML += score + " points. Click here to try again";
                // stop request animation frame
                gameOver = true;
				gameOverVar++;
                break;
				}
            }
            // we lock the piece
            board[this.y+r][this.x+c] = this.color;
        }
    }
    // remove full rows
    for(r = 0; r < ROW; r++){
        let isRowFull = true;
        for( c = 0; c < COL; c++){
            isRowFull = isRowFull && (board[r][c] != VACANT);
        }
        if(isRowFull){
			rowSound.play()
            // if the row is full
            // we move down all the rows above it
            for( y = r; y > 1; y--){
                for( c = 0; c < COL; c++){
                    board[y][c] = board[y-1][c];
                }
            }
            // the top row board[0][..] has no row above it
            for( c = 0; c < COL; c++){
                board[0][c] = VACANT;
            }
            // increment the score
            score += 10;
        }
    }
    // update the board
    drawBoard();
    
    // update the score
    scoreElement.innerHTML = score;
}

// collision fucntion

Piece.prototype.collision = function(x,y,piece){
    for( r = 0; r < piece.length; r++){
        for(c = 0; c < piece.length; c++){
            // if the square is empty, we skip it
            if(!piece[r][c]){
                continue;
            }
            // coordinates of the piece after movement
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            
            // conditions
            if(newX < 0 || newX >= COL || newY >= ROW){
                return true;
            }
            // skip newY < 0; board[-1] will crush our game
            if(newY < 0){
                continue;
            }
            // check if there is a locked piece alrady in place
            if( board[newY][newX] != VACANT){
                return true;
            }
        }
    }
    return false;
}

// CONTROL the piece

document.addEventListener("keydown",CONTROL);

function CONTROL(event){
	if(moveVar == true){
    if(event.keyCode == 37){
        p.moveLeft();
        dropStart = Date.now();
    }else if(event.keyCode == 38){
        p.rotate();
        dropStart = Date.now();
    }else if(event.keyCode == 39){
        p.moveRight();
        dropStart = Date.now();
    }else if(event.keyCode == 40){
        p.moveDown();
    }
	} else {
		console.log("MUDAMUDAMUDAMUDA MUDAAA!!!");
}
}

// drop the piece every 400ms

let dropStart = Date.now();
let gameOver = false;

function drop(){
    let now = Date.now();
    let delta = now - dropStart;
	checkScore();
	
	  if(fallTime < 500){
		if(delta > fallTime){
		   p.moveDown();
			dropStart = Date.now();
		}
		if( !gameOver){
			requestAnimationFrame(drop);
		}
	  } else {
		  console.log("ZA WARUDO!");
		  return
	  }
		
	moveVar = true;
	startGameButton.hidden = true;
	pauseGameButton.hidden = false;
}

let backgroundSoundPlayer = function(){
	backgroundSound = new sound('sound/theme.mp3')
	backgroundSound.play()
	setInterval(backgroundSoundPlayer, 76750)
}

startGameButton.addEventListener('click', backgroundSoundPlayer)

//variables used to continue game with same speed/make pause button work
let fallTimeSaver;
let pauseGameSaver = false;


//pauses the game and shows continueGame button
function pauseGame(){
	pauseGameSaver = true;
	fallTimeSaver = fallTime;
    fallTime = 1000;
	document.removeEventListener("keydown", CONTROL);
	continueGameButton.hidden = false;
	pauseGameButton.hidden = true;
}

//continues game and shows pauseGame button
function continueGame(){
	pauseGameSaver = false;
	document.addEventListener("keydown", CONTROL);
    fallTime = fallTimeSaver;
	drop();
	pauseGameButton.hidden = false;
	continueGameButton.hidden = true;
}

let checkScore = function(){
		if(score === 50 && pauseGameSaver == false){
			fallTime = 300;
		} else if(score === 200 && pauseGameSaver == false){
			fallTime = 250;
		} else if(score === 500 && pauseGameSaver == false){
			fallTime = 100;
		} else if(score === 500 && pauseGameSaver == false){
			fallTime = 50;
		}
}

/*while(!gameOver){
	if(score === 10){
		fallTime = 200;
	}
}
*/
