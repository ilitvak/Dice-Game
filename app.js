/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

function newGame() {
    scores[0] = 0;
    scores[1] = 0;
    roundScore = 0;
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
    
}

newGame();

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){
    
    
    var currentPlayer = document.querySelector("#current-" + activePlayer);
    var finalScore = document.getElementById("score-" + activePlayer);
    var dice = Math.floor(Math.random() * 6 ) + 1;
    
    
    var diceDOM = document.querySelector(".dice");
    
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    
    
    if(dice !== 1) {
        roundScore += dice;
        currentPlayer.textContent = roundScore;
    }
    
    else {
        nextPlayer();
    }
    
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    
    // add current score to global score
    
    var currentGlobalPlayerScore = document.getElementById("score-" + activePlayer);
    
    scores[activePlayer] += roundScore;
    
    // Update the UI
    
    currentGlobalPlayerScore.textContent = scores[activePlayer];
    
    // Check if player won the game
    
    if(scores[activePlayer] >= 15) {
        document.getElementById("score-" + activePlayer).textContent = "Won";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    else {
        nextPlayer();
    }
    
    
    
    // since player selected hold, we added their score and now switch to differnt player

});

function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
    
}


// When user presses new game, it restarts all the values to 0

document.querySelector(".btn-new").addEventListener("click", function(){
    
    document.querySelector(".dice").style.display = "none";
    
    newGame();
    
});
   










