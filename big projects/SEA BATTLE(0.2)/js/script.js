const playerCell = document.getElementById('playerFieldCell')




playerCell.addEventListener('click', putPlayerShip)

function putPlayerShip() {
	let shipCell = playerCell.style.background-color;
	if(shipCell !== "black"){
		shipCell = black;
	} else {
		shipCell = white;
	}
};