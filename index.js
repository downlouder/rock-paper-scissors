const items = ["Rock", "Paper", "Scissors"]
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(items);
const round = playRound(playerSelection, computerSelection);

function getComputerChoice(obj) {
    let indexOfAnswer = Math.floor(Math.random() * obj.length);
    return obj[indexOfAnswer];
}
function getPlayerChoice() {
    let answer = prompt("Choice Rock, Paper or Scissors");
    return answer;
}
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`${player}, ${computer}`)
    if (player === computer) {
        return "Tie, nobody won or lost";
    }
    else if (player === "scissors" && computer === "paper") {
        return "You won, Scissors beats Paper";
    }
    else if (player === "paper" && computer === "scissors") {
        return "Computer won, Scissors beats Paper";
    }
    else if (player === "paper" && computer === "rock") {
        return "You won, Paper beats Rock";
    }
    else if (player === "rock" && computer === "paper") {
        return "Computer won, Paper beats Rock";
    }
    else if (player === "rock" && computer === "scissors") {
        return "You won, Rock beats Scissors";
    }
    else if (player === "scissors" && computer === "rock") {
        return "Computer won, Rock beats Scissors";
    }
    else {
        return "Please enter correct words";
    }
}
function game(round) {
    // let computerWins = 0;
    // let playerWins = 0;
    // while (computerWins < 5 || playerWins < 5) {
    //     round;
    //     if()
    // }
    return round;
}
for (let i = 0; i < 5; i++) {
    console.log(game(round));
}