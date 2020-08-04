const square = document.querySelectorAll('.square')
let mole = document.querySelectorAll('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

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

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}



square.forEach(id => {
  id.addEventListener('click', () => {
    if(id.id === hitPosition){
      hitSound = new sound("sound/hit.mp3");
	  hitSound.play();  
      result = result + 1
      score.textContent = result + " hit(-s)"
      hitPosition=null
    }
  })
})


function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveMole();


function countDown() {
	if(currentTime != 0){
  currentTime--
  timeLeft.textContent = currentTime + "s";
  
	}
    else if(currentTime === 0 || currentTime < 0 ) {
        clearInterval(timerId);
    alert('GAME OVER! Your score is ' + result + " point(-s)")
  }
}

let timerId = setInterval(countDown, 1000)