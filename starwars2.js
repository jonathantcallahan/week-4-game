var starWarsGame = {

	characterChosen: false,
	defenderChosen: false,
	
	clickIterator: 0,
	wins: 0,

	selectedAttacker: false,
	selectedDefender: false,

	playerHealth: "",
	PlayerAttack: "",
	defenderHealth: "",
	defenderAttack: "",


	// character classes
	characterOne: {
		health: 100,
		attacker: 20,
		defender: false,
		attacker: false,
	},

	characterTwo: {
		health: 120,
		attacker: 20,
		defender: false,
		attacker: false,
	},

	characterThree: {
		health: 135,
		attacker: 20,
		defender: false,
		attacker: false,
	},

	characterFour: {
		health: 119,
		attacker: 20,
		defender: false,
		attacker: false,
	},
	// end character classes

	setPlayerStats: function(){
		$(".player-health").text(playerHealth);
	},

	setDefenderStats: function(){
		$(".opponent-health").text(defenderHealth);
	},

}

$(".image-placeholder").click(function(){

	if ($(this).attr("class") === "attacker"){
		return;
	}

	starWarsGame.clickIterator++;
	if(!characterChosen){
		$(this).removeClass("image-placeholder").addClass("attacker");
	}
})