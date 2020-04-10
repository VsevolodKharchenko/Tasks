/* function myMove() {
let elem = document.getElementById("animate");
let pos = 0;
let posTwo = 175
let id = setInterval(frame, 5);
function frame() {
if (pos <= 175){
pos++;
elem.style.top = pos + "px";
elem.style.left = pos + "px";
}
  else if (pos > 175) {
posTwo--;
pos++;
elem.style.top = pos + "px";
elem.style.left = posTwo + "px";
} else if (pos == 350){
	clearInterval(id);
}
}
}
*/

function myMove() {
  let elem = document.getElementById("animate");
  let pos = 0;
  let posTwo = 175;
  let id = setInterval(frame, 5);
  
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else if((pos < 175)){
      pos++;
      elem.style.top = pos + 'px';    
      elem.style.left = pos + 'px';
    } else if (pos >= 175) {
	  posTwo--;
	  pos++;
      elem.style.top = pos + 'px';    //  should increase
      elem.style.left = posTwo + 'px';   //  should decrease
	}
  }
}