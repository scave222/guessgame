let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    computerGuess = generateTarget();
  
   let humanPoint = Math.abs(humanGuess - targetGuess);
   let computerPoint = Math.abs(computerGuess - targetGuess );
    
    
    if (humanPoint < computerPoint || humanPoint === computerPoint ) {
      return true;
    } else if (humanGuess > 9 || humanGuess <  0){
        alert("input should be less than 10 and greater than 0") 
    }
    else return false
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