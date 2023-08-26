// Randomly choose either rock, paper, or scissors
function getComputerChoice() {
  // randomly pick either 0, 1, or 2
  let choice = Math.floor(Math.random() * 3);
  // based on this choice return Rock, Paper, or Scissors
  if (choice === 0) {
    return 'Rock';
  }
  else if (choice === 1) {
    return 'Paper';
  }
  else {
    return 'Scissors';
  }
}

// compare playerSelection and computerSelection and return the appropriate result.
function playRound(playerSelection, computerSelection) {
  // convert playerSelection to the same capitalization as computerSelection
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  console.log(`You chose: ${playerSelection}. computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "Draw";
  }
  else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "You win! Rock beats scissors.";
    } else {
      return "You lose. Paper beats rock.";
    }
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You win! Paper beats rock.";
    } else {
      return "You lose. Scissors beat paper.";
    }
  }
  else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      return "You win! Scissors beat paper.";
    } else {
      return "You lose. Rock beats scissors.";
    }  
  }
  else {
    return "Player Choice must be either rock, paper, or scissors.";
  }
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    result = playRound(button.classList.value, getComputerChoice());
    resultDiv.textContent = result;
    if (result.split(" ")[1] === "win!") {
      playerScore++;
    }
    else if (result.split(" ")[1] === "lose.") {
      computerScore++;
    }
    roundsPlayed++;
    resultDiv.textContent = `${result} score is player: ${playerScore} computer: ${computerScore}. ${roundsPlayed} rounds played.`;
    if (roundsPlayed >= 5) {
      if (playerScore > computerScore) {
        resultDiv.textContent += ` You win the game!`;
      }
      else if (computerScore > playerScore) {
        resultDiv.textContent += ` You lose the game.`; 
      }
      else {
        resultDiv.textContent += ` The game is a draw.`;
      }
      roundsPlayed = 0;
      playerScore = 0;
      computerScore = 0;
    }
  });
});