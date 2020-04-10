let scene = 1;



function decision(option) {
    if(scene == 1 && option == 1) {
		scene = 2;	
	}
	
	else if(scene == 1 && option == 2) {
		scene = 3;
	}
	
	else if(scene == 2 && option == 1) {
		scene = 6;
	}
	
	else if(scene == 2 && option == 2) {
		scene= 7;
    }
	
	else if(scene == 3 && option == 1) {
		scene= 4;
    }
	
	else if(scene == 3 && option == 2) {
		scene = 7;
    }
	
	else if(scene == 4 && option == 1) {
		scene = 5;
    }
	
	else if(scene == 4 && option == 2) {
		scene = 8;
    }
	
	else if(scene == 5 && option == 1) {
		scene = 8;
    }
	
	else if(scene == 5 && option == 2) {
		scene = 2;
    }
	
	else if(scene == 6 && option == 1) {
		scene = 9;
    }
	
	else if(scene == 6 && option == 2) {
		scene = 7;
    }
	
	else if(scene == 7 && option == 1) {
		scene = 10;
    }
	
	else if(scene == 7 && option == 2) {
		scene = 11;
    }
	
	else if(scene == 8 && option == 1) {
		scene = 12;
    }
	
	else if(scene == 8 && option == 2) {
		scene = 9;
    }
	
	else if(option == 3) {
	    scene = 1;
	}

	
	document.getElementById("image").src = "img/scene" + scene + ".jpg";
    }