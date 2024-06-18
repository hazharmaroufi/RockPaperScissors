let choises = ["rock", "paper", "scissors"]
function getComputerChoice() {
  const rnd = Math.floor((Math.random() * 3));
  // console.log(rnd);
  console.log(choises[rnd]);
}
getComputerChoice();

function getHumanChoice() {
  const hChoise = prompt("rock, paper, scissors");
  console.log(hChoise);
}
getHumanChoice();