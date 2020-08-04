const table = document.querySelector('table');
let elementsArray = document.querySelectorAll(".playerField");
let cpuElementsArray = document.querySelectorAll(".cpuField");
let shipSize = 1;
let randomNum;
const rowsArray = Array.from(elementsArray);
// function that paints cells blue
/*
elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
		if(elem.style.backgroundColor !== "blue"){
	elem.style.backgroundColor = "blue";
		} else if(elem.style.backgroundColor == "blue") {
			elem.style.backgroundColor = "whitesmoke";
		}
    });
});
*/

function getRandomNum() {
  randomNum = Math.floor(Math.random() * 100);
}

getRandomNum()

function putOneShip(){
    shipSize = 1;
}

function putTwoShip(){
	shipSize = 2;
}

function putThreeShip(){
	shipSize = 3;
}

function putFourShip(){
	shipSize = 4;
}

elementsArray.forEach(function(elem) {
	elem.addEventListener("click", function() {
		const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
		console.log(rowIndex)
		if(shipSize = 1) {
			if(elem.style.backgroundColor !== "blue"){
				elem.style.backgroundColor = "blue";
			} else if(elem.style.backgroundColor == "blue") {
				elem.style.backgroundColor = "whitesmoke";
		}
		}
    })
})



//just to test the code
setInterval(console.log(shipSize), 100)

/*
const testTable = document.querySelector('table');
const testRows = document.querySelectorAll('tr');
const testRowsArray = Array.from(testRows);

testTable.addEventListener('click', (event) => {
  const rowIndex = testRowsArray.findIndex(row => row.contains(event.target));
  const columns = Array.from(testRowsArray[rowIndex].querySelectorAll('td'));
  const columnIndex = columns.findIndex(column => column == event.target);
  console.log(rowIndex, columnIndex)
})
*/