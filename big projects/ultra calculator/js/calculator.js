function insert(num) {
	document.form.typer.value = document.form.typer.value+num;
}

function clean() {
	document.form.typer.value = "";
}

function erase() {
 let back = document.form.typer.value;
 document.form.typer.value = back.substring(0,
 back.length-1);
}

/*function eq() {
 let fin = document.form.typer.value;
 let wrong = "infinity";
 if (fin = wrong) {
 document.form.typer.value = "DON'T DIVIDE BY ZERO!";
} else {
	document.form.typer.value = eval(fin);
}
}
*/

function eq() {
	let exp = document.form.typer.value;
	if (eval(exp) == "Infinity" || eval(exp) == "-Infinity" || isNaN(eval(exp))) {
		document.form.typer.value = "Don't. Divide. By. Zero.";
	} else {
		document.form.typer.value = eval(exp);
	}
}



