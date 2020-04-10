
var curScene = 1;

function changeScene(option) {
	
	// Сцена 1
	if (curScene == 1 && option == 1) {
		curScene = 2;
		message = "Вам точно нужна машина? (curScene = 2.)";
	}
	else if (curScene == 1 && option == 2) {
		curScene = 3;
		message = "Вам точно нужен дом? (curScene = 3.)";
	}
	
	// Сцена 2
	else if (curScene == 2 && option == 1) {
		curScene = 4;
		message = "Хотите денег? Они уже идут к Вам. (curScene = 4.)";
	}
	else if (curScene == 2 && option == 2) {
		curScene = 5;
		message = "Скоро появится ваш спутник жизни, и будет Вам счастье. (curScene = 5.)";
	}
	
	// Сцена 3
	else if (curScene == 3 && option == 1) {
		curScene = 6;
		message = "Вам везут шикарную итальянскую мебель. Вы счастливы? (curScene = 6.)";
	}
	else if (curScene == 3 && option == 2) {
		curScene = 7;
		message = "Вот вам путевка! Езжайте-ка в Египет послезавтра! (curScene = 7.)";
	}
	
	// Сцена 4
	else if (curScene == 4 && (option == 1||option == 2)) {
		curScene = 8;
		message = "Вы идете навстречу к своему счастью! Приготовьтесь!!!. (curScene = 8.)";
	}
	
	// Сцена 5
	else if (curScene == 5 && (option == 1||option == 2)) {
		curScene = 8;
		message = "Вы идете навстречу к своему счастью! Приготовьтесь!!!. (curScene = 8.)";
	}
	
	// Сцена 6
	else if (curScene == 6 && (option == 1||option == 2)) {
		curScene = 8;
		message = "Вы идете навстречу к своему счастью! Приготовьтесь!!!. (curScene = 8.)";
	}	
	
	// Сцена 7
	else if (curScene == 7 && (option == 1||option == 2)) {
		curScene = 8;
		message = "Вы идете навстречу к своему счастью! Приготовьтесь!!!. (curScene = 8.)";
	}	
	
	// Сцена 8
	else if (curScene == 8 && (option == 1||option == 2)) {
		curScene = 8;
		message = "Вы уже пришли к своему счастью! Вот оно!!! (curScene = 8.)";
	};	

	document.getElementById("sceneimg").src = "img/scene" + curScene + ".jpg";
	alert(message);
};
