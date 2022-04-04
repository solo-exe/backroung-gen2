var css = document.querySelector('h3');
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var game = document.querySelector(".buzz")

// console.log(body);

function colorbind(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorbind);
color2.addEventListener("input", colorbind);




function game(direction){
	var whathappens;
	switch(direction) {
		case "forward":
			whathappens = "you encounter a wizard";
			break;
		case "backward":
			whathappens = "you encounter a genie";
			break;
		case "left":
			whathappens = "you encounter a simp";
			break;				
		case "right":
			whathappens = "you encounter a million dollars";
			break;	
	}
	return whathappens;
}



// function keyadd(event){
// 	if (event.which==38){
// 		addList(); 
// 	}
// }

game.addEventListener("keypress", function(event){
	console.log(event);
	if (event.which == 87){
		var direction = "forward";
	} else if ( event.which == 83){
		var direction = "backward";
	} else if ( event.which == 65){
		var direction = "left";
	} else if ( event.which == 68){
		var direction = "right";
	} else {
		var direction = "";
	}
});
