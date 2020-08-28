let moveVar = 0;
let button = document.getElementById("eventObject")
let pos = 0;
let width = 48;




let getRandomColor = function(){
	let random = Math.random()
	
	if(random > 0.2&& random <= 0.4){
		document.body.style.backgroundColor = "red";
	} else if(random > 0.4 && random <= 0.6){
		document.body.style.backgroundColor = "blue";
	} else if(random > 0.6&& random <= 0.8){
		document.body.style.backgroundColor = "green";
	} else if(random > 0.8){
		document.body.style.backgroundColor = "orange";
	}
}

document.addEventListener("mouseover", getRandomColor);

document.addEventListener("mouseout", getRandomColor);

button.addEventListener("click", move);

function move(){

  
  if(moveVar == 0){
	 let id = setInterval(frame, 5);
	  
     function frame() {
			if (pos == 744) {
			  clearInterval(id);
			  moveVar++;
			} else {
			  pos++;
			  width++;
			  button.style.width = width + 'px'
			  button.style.left = pos + 'px';
			}
	  }    
  } else if(moveVar == 1){
	  let id = setInterval(frame, 5);
	  
	  function frame() {
		if (pos == 0) {
		  clearInterval(id);
		  moveVar--;
		} else {
		  pos--;
		  width--;
		  button.style.width = width + 'px'
		  button.style.left = pos + 'px';
		}
	  }
	}
  }
