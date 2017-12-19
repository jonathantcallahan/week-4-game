var characterChosen = false;
var defenderChosen = false;
var clickIterator = 0;
var selectedAttacker;
var selectedDefender;
var playerHealth;
var playerAttack;
var defenderHealth;
var defenderAttack;
var wins = 0;

character1 = {
	name: "Obi Wan",
	health: 100,
	attack: 20,
	Defender: false,
	Attacker: false,
	setStats: function(){
		that = this;
		if (that.attacker === true) {
				console.log("test success");
				if (playerHealth) {
				return;
			}
				playerHealth = that.health;
				playerAttack = that.attack;
		}

		if (that.defender === true) {
			defenderHealth = that.health;
			defenderAttack = that.attack;
		}
	}
}

character2 = {
	name: "Darth Vader",
	health: 120,
	attack: 20,
	Defender: false,
	Attacker: false,
	setStats: function(){
		that = this;
		if (that.attacker === true) {
			console.log("test success");
			if (playerHealth) {
				return;
			}
			playerHealth = that.health;
			playerAttack = that.attack;
		}

		if (that.defender === true) {
			defenderHealth = that.health;
			defenderAttack = that.attack;
		}
	}
}

character3 = {
	name: "Luke Skywalker",
	health: 135,
	attack: 20,
	Defender: false,
	Attacker: false,
	setStats: function(){
		that = this;
		if (that.attacker === true) {
			console.log("test success");
			if (playerHealth) {
				return;
			}
			playerHealth = that.health;
			playerAttack = that.attack;
		}

		if (that.defender === true) {
			defenderHealth = that.health;
			defenderAttack = that.attack;
		}
	}
}


character4 = {
	name: "Mace Windu",
	health: 119,
	attack: 20,
	Defender: false,
	Attacker: false,
	setStats: function(){
		that = this;
		if (that.attacker === true) {
			console.log("test success");
			if (playerHealth) {
				return;
			}
			playerHealth = that.health;
			playerAttack = that.attack;
		}

		if (that.defender === true) {
			defenderHealth = that.health;
			defenderAttack = that.attack;
		}
	}
}

var setPlayerStats = function() {
	$(".player-health").text(playerHealth)
}

var setDefenderStats = function() {
	$(".opponent-health").text(defenderHealth)
	console.log(defenderHealth)
}

var setIconStats = function() {
	if (character1.attacker) {
		$("#char-1-health").text(playerHealth)
	}
	if (character2.attacker) {
		$("#char-2-health").text(playerHealth)
	}
	if (character3.attacker) {
		$("#char-3-health").text(playerHealth)
	}
	if (character4.attacker) {
		$("#char-4-health").text(playerHealth)
	}

	if (character1.defender) {
		$("#char-1-health").text(defenderHealth)
	}
	if (character2.defender) {
		$("#char-2-health").text(defenderHealth)
	}	
	if (character3.defender) {
		$("#char-3-health").text(defenderHealth)
	}	
	if (character4.defender) {
		$("#char-4-health").text(defenderHealth)
	}		
}


//$("#character-1").data("Character", {name: "obiwan", health: 130, attack: 15});
//console.log($("#character-1").data());

$(".image-placeholder").on("click", function(element){

	if ($(this).attr("class") === "attacker") {
		return;
	}

	clickIterator ++;
	if (!characterChosen) {

		$(this).removeClass("image-placeholder").addClass("attacker");




	//	console.log($(this).data("character").health);

		$("#first-character-container").detach().appendTo("#enemies");
		$(this).detach().appendTo("#your-character")
	//	selectedAttacker = $(this).data("character").name;
	//	$(".player-health").html($(this).data("character").health);
		characterChosen = true;


		if ($(this).attr("id") === "character-1") {
			character1.attacker = true;
		}

		if ($(this).attr("id") === "character-2") {
			character2.attacker = true;
		}

		if ($(this).attr("id") === "character-3") {
			character3.attacker = true;
		}

		if ($(this).attr("id") === "character-4") {
			character4.attacker = true;
		}

		character1.setStats();
		character2.setStats();
		character3.setStats();
		character4.setStats();
		setPlayerStats();


		

//		$("#attacker-health").text(playerHealth);



		//if ($(this).attr("id") ===
	} 
	if (clickIterator === 2 && ($(this).attr("class") === "image-placeholder")) {

		$(this).detach().appendTo("#enemy")
		selectedDefender = $(this).attr("id")

		if ($(this).attr("id") === "character-1") {
			character1.defender = true;
			console.log("test");
		}

		if ($(this).attr("id") === "character-2") {
			character2.defender = true;
		}

		if ($(this).attr("id") === "character-3") {
			character3.defender = true;
		}

		if ($(this).attr("id") === "character-4") {
			character4.defender = true;
		}

		character1.setStats();
		character2.setStats();
		character3.setStats();
		character4.setStats();
		setDefenderStats();
		
		defenderChosen = true;

	}

})

$(".fight-button").on("click", function(){
	if (clickIterator < 2) {
		return;
	} else {
	defenderHealth -= playerAttack;
	$(".opponent-health").text(defenderHealth);
	playerHealth -= defenderAttack;
	$(".player-health").text(playerHealth);
	}

	if (playerHealth < 0) {
		alert("You lose!");
	}

	if (defenderHealth < 0) {
		wins ++;
		clickIterator = 1;
		$("#enemy").empty();
		$(".opponent-health").text("");
		console.log(wins)
	}

	if (wins === 3) {
		alert("You win!!!")
	}
	setIconStats();
	playerAttack += 15;
})



