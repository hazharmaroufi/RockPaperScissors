let humanScore = 0;
let computerScore = 0;
let choises = ["rock", "paper", "scissors"]

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultdiv = document.querySelector(".resultdiv")
const computerchoise = document.querySelector(".computerchoise");
const result = document.querySelector(".result")
const winner = document.querySelector(".winner")
const hscore = document.querySelector(".hscore")
const cscore = document.querySelector(".cscore")

function getComputerChoice() {
  const rnd = Math.floor((Math.random() * 3));
  // console.log(rnd);
  console.log(choises[rnd]);
  computerchoise.textContent = choises[rnd];
  return (choises[rnd]);
}
// getComputerChoice();
// function getHumanChoice() {
//   const hChoise = prompt("rock, paper, scissors").toLowerCase();
//   console.log(hChoise);
//   return (hChoise);
// }
// getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("draw");
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    result.textContent = "draw";
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("draw");
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    result.textContent = "draw";
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("draw");
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    result.textContent = "draw";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");


    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    result.textContent = "You win! Rock beats Scissors";
    humanScore++;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);

  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! scissors beats paper");
    result.textContent = "You win! scissors beats paper";
    humanScore++;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lost! rock beats scissors");
    result.textContent = "You lost! rock beats scissors";
    computerScore++;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lost! paper beats scissors");
    result.textContent = "You lost! paper beats scissors";
    computerScore++;
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! paper beats rock");


    result.textContent = "You win! paper beats rock";
    humanScore++;
    console.log("computer Score = " + computerScore);
    console.log("human Score = " + humanScore);
  }
  if (computerScore == 5 || humanScore == 5) {
    if (computerScore > humanScore) {
      console.log("Computer Wins");
      winner.textContent = "Computer Wins 😞";
    } else if (humanScore > computerScore) {
      console.log("you Wins");
      winner.textContent = "you Win 😁";
    }
  }

}

rock.addEventListener("click", () => { playRound("rock", getComputerChoice()); });
paper.addEventListener("click", () => { playRound("paper", getComputerChoice()) });
scissors.addEventListener("click", () => { playRound("scissors", getComputerChoice()) });

function playGame() {
  // for (let i = 0; i < 5; i++) {
  // const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  // playRound(humanSelection, computerSelection);
  // }
  console.log("computer Score = " + computerScore);
  console.log("human Score = " + humanScore);
  if (computerScore > humanScore) {
    winner.textContent = "Computer Wins 😞";
    console.log("Computer Wins 😞");

  } else if (humanScore > computerScore) {
    console.log("you Win 😁");
    winner.textContent = "you Win 😁";
  }
}
// playGame()


