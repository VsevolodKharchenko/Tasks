let pickword = function(words) {
	return words[Math.floor(Math.random() * words.length)];
};

let generateCompliment = function() {
    let randomBodyPart = ["eye", "leg", "ear", "eye", "nose", "body"];
	let randomGood = ["well-made", "boiled", "beautiful", "godlike", "yellow", "yeehaw"];
	let randomWord = ["ApachE combat helicopter", "Spaghetti", "door", "portrait", "person", "program"];
	
	let randomString = "you have a " + pickword(randomBodyPart) + " that looks like a " + pickword(randomGood) + " " + pickword(randomWord) + "!";
	
	return randomString;
}
	
	console.log(generateCompliment());
		console.log(generateCompliment());
			console.log(generateCompliment());
				console.log(generateCompliment());
					console.log(generateCompliment());