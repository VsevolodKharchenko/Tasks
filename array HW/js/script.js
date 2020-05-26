let numbersArray = [1, 4, 2437626, 236, 1346, 8635, 7253, 275, 725, 1436];
    let evenCounter = 0;
	let oddCounter = 0;

for (let i = 0; i < numbersArray.length ; i++) {
	
	if (numbersArray[i] % 2 == 0) {
		evenCounter++;
	} else {
		oddCounter++;
	}
};

console.log("there are " + evenCounter + " even numbers"); 
console.log("there are " + oddCounter + " odd numbers"); 

let zoo = ["horse", "dog", "eagle", "frog", "llama", "cat", "alligator"];

let animalCounter = 0;


for(let i = 0; i < zoo.length; i++) {
	let count = zoo[i].length;
	if (count == 5 ){
		animalCounter++;
	}
}
	
	console.log(animalCounter)