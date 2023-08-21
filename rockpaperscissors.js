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

// Play 5 rounds and keep track of the score
for(let i = 0; i < 5; i++) {
  let result = playRound(prompt("enter your choice of Rock, Paper, or Scissors"), getComputerChoice());
  console.log(result);
  if (result.split(" ")[1] === "win!") {
    playerScore++;
  }
  else if (result.split(" ")[1] === "lose.") {
    computerScore++;
  }
  else if (result === "Draw") {}
  else {
    console.log("please enter a valid move choice");
    i--
  }
  console.log(`score is player: ${playerScore} computer: ${computerScore}`);
}

// Determine winner of the best of five
if (playerScore > computerScore) {
  console.log(`You win! score is player: ${playerScore} computer: ${computerScore}`);
}
else if (computerScore > playerScore) {
  console.log(`You lose. score is player: ${playerScore} computer: ${computerScore}`); 
}
else {
  console.log(`Draw. score is player: ${playerScore} computer: ${computerScore}`)
}