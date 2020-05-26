
let name;
let color;
let age;
let size;




//  constructor for creating objects
let Dog = function (name, color, age, size) {
	this.name = name;
	this.color = color;
	this.age = age;
	this.size = size;
	this.sayName = function (name) {
        console.log("Bark-bark. I am " + name + ".");
    };
};


//  new object created
let dog = new Dog("Bob", "grey", 5, "big");



console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog.size);
dog.sayName("Tuzik");




//   call the method
document.getElementById("demo2").innerHTML =
"My dog's name is " + dog.name + "."; 


let spaghetti = function(taste, temperature, freshness, weight, color, smell) {
    this.taste = taste;
	this.temperature = temperature;
	this.freshness = freshness;
	this.weight = weight;
	this.color = color;
	this.smell = smell;
	this.makeSmell = function(smell){
		alert("This spaghetti smells " + smell);
	};
}

let bolognese = new spaghetti("incredible", "warm", "just cooked", "450g", "black", "godlike and motivating");

let playstation = function(design, hardware, games, price, software) {
	this.color = hardware;
	this.price = price;
	this.software = software;
	this.games = games;
	this.design = design;
	this.reportSoftware = function(software){
	    console.log("The software is " + software);
};
}

let ps4 = new playstation("minimalistic", "powerful", "incredible", "pretty low", "bug-free");

	ps4.reportSoftware(ps4.software);
//alert(bolognese.taste);
bolognese.makeSmell(bolognese.smell);

/*
Dog.prototype.bark = function () {
	console.log("Bark-bark");
}
*/


let game = function(name, price, gameplay, story, graphics, difficulty, rating) {
	this.name = name;
	this.price = price;
	this.gameplay = gameplay;
	this.story = story;
	this.graphics = graphics;
	this.difficulty = difficulty;
	this.rating = rating;
	this.rateGame = function(name, rating){
	    console.log("The " + name + " will get " + rating + "/10");
};
}

let DMC5 = new game("DMC5", "50$", "high-octane", "interesting", "incredible", "too easy", 8);

DMC5.rateGame(DMC5.name, DMC5.rating);