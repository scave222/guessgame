let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    computerGuess = generateTarget();
  
    humanGuess = Math.abs(targetGuess - humanGuess);
    computerGuess = Math.abs(targetGuess - computerGuess);
    
    
    if (computerGuess > humanGuess && computerGuess >= computerGuess || computerGuess < humanGuess && computerGuess <= computerGuess ) {
      return true;
    } else if (computerGuess < humanGuess) {
      return false;
    }
    else if (humanGuess > 9){
        alert("input should be less than 10 ") 
    }
  }
  
  
  function updateScore(winner) {
    if (winner == 'human') {
      humanScore = humanScore + 1;
    } else {
      computerScore = computerScore + 1;
    }
  }
  
  function advanceRound() {
    currentRoundNumber++
  }