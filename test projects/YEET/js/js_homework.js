let lesson1 = 2;
let lesson2 = 3;
let lesson_word = "I like spaghetti";
let result;
let number

function hw1(lesson1, lesson2) {
	let result = hw2(lesson1, lesson2);
	console.log(result);
}

function hw2(lesson1, lesson2){   
    let result = hw3(lesson1, lesson2, lesson_word);
    console.log(result);
	return lesson1 + lesson2;
}

function hw3(lesson1, lesson2, lesson_word){
    alert('hi!');
    let result = hw4(lesson1, lesson2, lesson_word);
	console.log(result);
	return lesson1 * lesson2;
}
/*function recieves arguments lesson1, lesson2, lesson_word
it prints lesson_word to the console
it prints result to the console
it returns the lesson_word
*/
function hw4(lesson1, lesson2, lesson_word){	
    let result = hw5(lesson1, lesson2);
	console.log(lesson_word);
	console.log(result);
	return lesson_word;
}
/*function recieves arguments lesson1 and lesson2
it prints result to the console
it returns result  */
function hw5(lesson1, lesson2){
	let result = lesson1 - lesson2;
	console.log(result);
	return result;		
}

hw1(lesson1, lesson2, result);
//console.log("test");
hw5(7, 5); 
hw4(8, 6, lesson_word );