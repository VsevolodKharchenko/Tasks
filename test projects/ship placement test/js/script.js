let table = document.getElementById("Player")
let cpuTable = document.getElementById("CPU")
let cells = []

let buildTable = function(table, color){
	for(let i = 0; i < 10; i++){
		let row = []
		let tr = document.createElement('tr')
		let td = document.createElement('td')
		td.style.width = '20px'
		td.style.height = '30px'
		td.style.border = '0px solid ' + color
		td.style.borderRightWidth = '3px'
		td.innerText = '' + (i + 1)
		table.appendChild(tr)
		tr.appendChild(td)
		cells.push(row)
		for(let j = 0; j < 10; j++){
			let td = document.createElement('td')
			tr.appendChild(td)
			td.style.width = '30px'
		    td.style.height = '30px'
		    td.style.border = '1px solid black'
			row.push(td)
			td.addEventListener('mousedown', function(){
				if(td.style.backgroundColor != color){
				    td.style.backgroundColor = color;
				} else {
					td.style.backgroundColor = null;
				}
				})
			td.addEventListener('mouseover', function(){
				if(td.style.backgroundColor != color){
				td.style.backgroundColor = "lightblue";
				}
			})
			td.addEventListener('mouseout', function(){
				if(td.style.backgroundColor != color){
				td.style.backgroundColor = null;
				} else {
				td.style.backgroundColor = color;
				}
			})
		}
	}
}


buildTable(table, 'blue')
buildTable(cpuTable, 'red')
