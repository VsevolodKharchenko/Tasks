function insert(num) {
	document.form.textview.value = document.form.textview.value+num
}

function equal() {
	var exp = document.form.textview.value;
	if (eval(exp) == "Infinity") {
		document.form.textview.value = "Error";
	} else {
		document.form.textview.value = eval(exp);
	}
}

function clean() {
	document.form.textview.value = "";
}