var characterChosen = false;
var defenderChosen = false;
var clickIterator = 0;
var selectedAttacker;
var selectedDefender;

//	character1 = {
//		name: "Obi Wan",
//		health: 100,
//		attack: 20,
//		Defender: false,
//		Attacker: false,
//	}
//	
//	character2 = {
//		name: "Darth Vader",
//		health: 100,
//		attack: 20,
//		Defender: false,
//		Attacker: false,
//	}
//	
//	character3 = {
//		name: "Luke Skywalker",
//		health: 100,
//		attack: 20,
//		Defender: false,
//		Attacker: false,
//	}
//	
//	
//	character4 = {
//		name: "Mace Windu",
//		health: 100,
//		attack: 20,
//		Defender: false,
//		Attacker: false,
//	}
var CharacterOneHealth = 130
var playerHealth;


$("#character-1").val(CharacterOneHealth);
console.log($("#character-1").val())

$(".image-placeholder").on("click", function(element){
	clickIterator ++;
	if (!characterChosen) {
		$("#first-character-container").detach().appendTo("#enemies");
		$(this).detach().appendTo("#your-character")
		console.log($(this).attr("id"))
		selectedAttacker = $(this).attr("id");
		$(".player-health").html($(this).val());
		characterChosen = true;
	} 
	if (clickIterator === 2) {
		$(this).detach().appendTo("#enemy")
		selectedDefender = $(this).attr("id")
		
		defenderChosen = true;
	}

console.log("selected attacker is " + selectedAttacker);
console.log("selected defender is " + selectedDefender);

})


