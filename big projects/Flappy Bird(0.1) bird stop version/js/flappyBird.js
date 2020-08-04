let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let restartButton = document.getElementById("restartButton")
// load images
restartButton.hidden = true;


function EndCode(){ Error.apply(this, arguments); this.name = "Game Over"; }
EndCode.prototype = Object.create(Error.prototype);

let bird = new Image();
let bg = new Image();
let pipeNorth = new Image();
let fg = new Image();
let pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


// some variables

let gap = 85;
let constant;

let bX = 10;
let bY = 150;

let gravity = 1.5;

let score = 0;

// audio files

let fly = new Audio();
let scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 30;
    fly.play();
}

// pipe coordinates

let pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

function restart(){
	location.reload();
}
// draw images
function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision
        
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x 
		    + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height 
			|| bY+bird.height >= pipe[i].y+constant) 
			|| bY + bird.height >=  cvs.height - fg.height
			|| bY + bird.height >= 512){
				restartButton.hidden = false;
				gravity = 0;
				pipe[i].x++
				//console.log(pipe[i])
				document.removeEventListener("keydown",moveUp)
        } 
        
        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(bird,bX,bY);
    
    bY += gravity;
    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();
