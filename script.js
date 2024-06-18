let humanScore = 0;
let computerScore = 0;
let choises = ["rock", "paper", "scissors"]

function getComputerChoice() {
  const rnd = Math.floor((Math.random() * 3));
  // console.log(rnd);
  console.log(choises[rnd]);
  return (choises[rnd]);
}
// getComputerChoice();

function getHumanChoice() {
  const hChoise = prompt("rock, paper, scissors").toLowerCase();
  console.log(hChoise);
  return (hChoise);
}
// getHumanChoice();


function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("draw");
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("draw");
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("draw");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! scissors beats paper");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lost! rock beats scissors");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lost! paper beats scissors");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! paper beats rock");
    humanScore++;
  }
}





function playGame() {

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(computerScore);
  console.log(humanScore);
  if (computerScore > humanScore) {
    console.log("Computer Wins");
  } else if (humanScore > computerScore) {
    console.log("you Wins");
  } else {
    console.log("draw");
  }
}
playGame()

