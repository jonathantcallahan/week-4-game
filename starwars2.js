var starWarsGame = {

	characterChosen: false,
	defenderChosen: false,
	
	clickIterator: 0,
	wins: 0,

	selectedAttacker: false,
	selectedDefender: false,

	playerHealth: false,
	playerAttack: false,
	defenderHealth: false,
	defenderAttack: false,


	// character classes
	characterOne: {
		health: 100,
		attack: 20,
		defender: false,
		attacker: false,
	},

	characterTwo: {
		health: 120,
		attack: 20,
		defender: false,
		attacker: false,
	},

	characterThree: {
		health: 135,
		attack: 20,
		defender: false,
		attacker: false,
	},

	characterFour: {
		health: 119,
		attack: 20,
		defender: false,
		attacker: false,
	},
	// end character classes

	setCharStats: function(char){
		if(starWarsGame[char].attacker){
			if(starWarsGame.playerHealth){
				return;
			}
			starWarsGame.playerHealth = starWarsGame[char].health;
			starWarsGame.playerAttack = starWarsGame[char].attack;
		} 

		if(starWarsGame[char].defender){
			starWarsGame.defenderHealth = starWarsGame[char].health;
			starWarsGame.defenderAttack = starWarsGame[char].attack;
		}
	},

	setPlayerStats: function(){
		$(".player-health").text(starWarsGame.playerHealth);
	},

	setDefenderStats: function(){
		$(".opponent-health").text(starWarsGame.defenderHealth);
	},

}

$(".image-placeholder").click(function(){

	if ($(this).attr("class") === "attacker"){
		return;
	}

	//clickIterator is what allows the defender to be selected, defender can only be selected when the click iterator is equal to 2
	starWarsGame.clickIterator++;

	if(!starWarsGame.characterChosen){
		// removes the image-placeholder class and adds the attacker class so that the attacker cannot be clicked again and made the defender
		$(this).removeClass("image-placeholder").addClass("attacker");
		$("#first-character-container").detach().appendTo("#enemies");
		$(this).detach().appendTo("#your-character");

		starWarsGame.characterChosen = true;

		if ($(this).attr("id") === "character-1"){
			starWarsGame.characterOne.attacker = true;
		}

		if ($(this).attr("id") === "character-2"){
			starWarsGame.characterTwo.attacker = true;
		}

		if ($(this).attr("id") === "character-3"){
			starWarsGame.characterThree.attacker = true;
		}

		if ($(this).attr("id") === "character-4"){
			starWarsGame.characterFour.attacker = true;
		}

		starWarsGame.setCharStats('characterOne');
		starWarsGame.setCharStats('characterTwo');
		starWarsGame.setCharStats('characterThree');
		starWarsGame.setCharStats('characterFour');

		// sets the player health in the dom equal to the health of the selected character
		starWarsGame.setPlayerStats();
	} 

	if (starWarsGame.clickIterator === 2){

		$(this).detach().appendTo("#enemy")

		if($(this).attr("id") === "character-1"){
			starWarsGame.characterOne.defender = true;
		}

		if($(this).attr("id") === "character-2"){
			starWarsGame.characterTwo.defender = true;
		}

		if($(this).attr("id") === "character-3"){
			starWarsGame.characterThree.defender = true;
		}

		if($(this).attr("id") === "character-4") {
			starWarsGame.characterFour.defender = true;
		}

		starWarsGame.setCharStats('characterOne');
		starWarsGame.setCharStats('characterTwo');
		starWarsGame.setCharStats('characterThree');
		starWarsGame.setCharStats('characterFour');

		starWarsGame.setDefenderStats();
	}
})

$(".fight-button").click(function(){
	if($(".player-health").text() === ""){
		return;
	}
	if($(".opponent-health").text() === ""){
		return;
	}
	starWarsGame.playerHealth -= starWarsGame.defenderAttack;
	starWarsGame.defenderHealth -= starWarsGame.playerAttack;
	starWarsGame.playerAttack = starWarsGame.playerAttack * 1.5;
	starWarsGame.setPlayerStats();
	starWarsGame.setDefenderStats();
	if(starWarsGame.playerHealth < 1){
		alert("You Lost! Refresh The Browser to Play Again.")
	}
	if(starWarsGame.defenderHealth < 0){
		starWarsGame.clickIterator = 1;
		$("#enemy").empty();
		starWarsGame.wins++;
		$(".opponent-health").text("")
		if(starWarsGame.wins === 3){
		}
	}

	console.log(starWarsGame.defenderHealth)
})