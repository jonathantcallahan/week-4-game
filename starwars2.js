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
		// setStats is run for each character both after characters and defenders are chosen. 
		// during the character selection the attacker or defender for the character chosen is set to true if 
		// it is selected based on it's corresponding character in the html. It is identified by 
		// the id of the div in the html. IF character-one is clicked in the html THEN the attacker/ defender
		// for that character will be set to true. The set stats function either sets the stats or 
		// does not based on whether or not that character is an attacker or a defender
		setStats: function(){
			if(starWarsGame.characterOne.attacker){
				// the return is to prevent player health from reseting when a defender is chosen
				if(starWarsGame.playerHealth){
					return;
				}
				starWarsGame.playerHealth = starWarsGame.characterOne.health;
				starWarsGame.playerAttack = starWarsGame.characterOne.attack;
			} 

			if(starWarsGame.characterOne.defender){
				starWarsGame.defenderHealth = starWarsGame.characterOne.health;
				starWarsGame.defenderAttack = starWarsGame.characterOne.attack;
			}
		}
	},

	characterTwo: {
		health: 120,
		attack: 20,
		defender: false,
		attacker: false,
		setStats: function(){
			if(starWarsGame.characterTwo.attacker){
				if(starWarsGame.playerHealth){
					return;
				}
				starWarsGame.playerHealth = starWarsGame.characterTwo.health;
				starWarsGame.playerAttack = starWarsGame.characterTwo.attack;
			} 

			if(starWarsGame.characterTwo.defender){
				defenderHealth = starWarsGame.characterTwo.health;
				defenderAttack = starWarsGame.characterTwo.attack;
			}
		}
	},

	characterThree: {
		health: 135,
		attack: 20,
		defender: false,
		attacker: false,
		setStats: function(){
			if(starWarsGame.characterThree.attacker){
				if(starWarsGame.playerHealth){
					return;
				}
				starWarsGame.playerHealth = starWarsGame.characterThree.health;
				starWarsGame.playerAttack = starWarsGame.characterThree.attack;
			} 

			if(starWarsGame.characterThree.defender){
				starWarsGame.defenderHealth = starWarsGame.characterThree.health;
				starWarsGame.defenderAttack = starWarsGame.characterThree.attack;
			}
		}
	},

	characterFour: {
		health: 119,
		attack: 20,
		defender: false,
		attacker: false,
		setStats: function(){
			if(starWarsGame.characterFour.attacker){
				if(starWarsGame.playerHealth){
					return;
				}
				starWarsGame.playerHealth = starWarsGame.characterFour.health;
				starWarsGame.playerAttack = starWarsGame.characterFour.attack;
			} 

			if(starWarsGame.characterOne.defender){
				starWarsGame.defenderHealth = starWarsGame.characterFour.health;
				starWarsGame.defenderAttack = starWarsGame.characterFour.attack;
			}
		}
	},
	// end character classes

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

		starWarsGame.characterOne.setStats();
		starWarsGame.characterTwo.setStats();
		starWarsGame.characterThree.setStats();
		starWarsGame.characterFour.setStats();

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

		starWarsGame.characterOne.setStats();
		starWarsGame.characterTwo.setStats();
		starWarsGame.characterThree.setStats();
		starWarsGame.characterFour.setStats();

		starWarsGame.setDefenderStats();
	}
})

$(".fight-button").click(function(){
	if($(".player-health").text() === ""){
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
	if(starWarsGame.defenderHealth < 1){
		starWarsGame.clickIterator = 1;
		$("#enemy").empty();
		starWarsGame.wins++;
		$(".opponent-health").text("")
		if(starWarsGame.wins === 3){
			alert("You Win!")
		}
	}

	console.log(starWarsGame.defenderHealth)
})