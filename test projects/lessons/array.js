let arr = new Array("Word1", "Word2", "Word3");
let text1 = ["Word6", "Word4", "Word5","Word7","Word69"];

console.log(arr);
console.log(text1);
arr[2] = 'Different';
text1[0] = 'More_Different';
text1[4] = 'WordNice';




/*
for (let i = 0; i < arr.length; i++) { 
    console.log(arr[i]);
} 

for (let y = 0; y < text1.length; y++) {
    console.log(text1[y]);
}
*/
for (let q = 1; q < 3; q++) {
    console.log(text1[q]);
}

for (let yeet = 0; yeet < text1.length; yeet++) {
    console.log(text1[yeet]);
}
	
	
// HOMEWORK

let zoo = ["Alpaca", "Giraffe", "Dog","Tiger","Puma"];


function print_hello() {
    console.log('Hello');
}
	
print_hello();    

function print_animal() {
	console.log(zoo[1]);
}

print_animal();

let a;
let b;
let result;

function print_result(a, b) {
	result = multiply(a, b);
	console.log(result);
}

function multiply(a, b) {
    return a * b;
}

print_result(3, 5);

let lesson1;
let lesson2;
let lesson_result;

function print_lesson(lesson1, lesson2, lesson_result) {
    lesson_result = add(lesson1, lesson2);
	console.log(lesson_result);
}

function add(lesson1, lesson2) {
    return lesson1 + lesson2;
}

print_lesson(1, 68);
	


