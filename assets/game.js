var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// a fight function
var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  while(enemyHealth > 0 && enemyHealth > 0) {

      // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');


        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {

        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney" , playerMoney);
            break;
            }
        }


    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack; 
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

     // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;    
    
        //leave while() loop since enemy is dead
      break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player's health by subtractig the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

         // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

        // pick new enemyNamr to ifht based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from runnign nad check what's going onat that momnent
        //debugger;

         // pass the pickedENemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }

    // if player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battele Game Over!");
        break;
          
    }
}