let choises = ["rock", "paper", "scissors"]
function getComputerChoice() {
  const rnd = Math.floor((Math.random() * 3));
  // console.log(rnd);
  console.log(choises[rnd]);
}
getComputerChoice();