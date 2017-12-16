var characterChosen = false;
var defenderChosen = false;
var clickIterator = 0;

character1 = {
	name: "Obi Wan",
	health: 100,
	attack: 20,
	Defender: false,
	Attacker: false,
}

character2 = {
	name: "Darth Vader",
	health: 100,
	attack: 20,
	Defender: false,
	Attacker: false,
}

character3 = {
	name: "Luke Skywalker",
	health: 100,
	attack: 20,
	Defender: false,
	Attacker: false,
}


character4 = {
	name: "Mace Windu",
	health: 100,
	attack: 20,
	Defender: false,
	Attacker: false,
}

$("#character-1-name").text(character1.name)
$("#character-1-health").text(character1.health)

console.log("test")

$(".image-placeholder").on("click", function(){
	clickIterator ++;
	if (!characterChosen) {
		$("#first-character-container").detach().appendTo("#enemies");
		$(this).detach().appendTo("#your-character")
		characterChosen = true;
	} 
	if (clickIterator === 2) {
		$(this).detach().appendTo("#enemy")
		
		defenderChosen = true;
	}

})