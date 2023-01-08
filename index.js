let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');
//basic mechanic start
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice()); 
    });
});
function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}
//end

function playRound(playerSelection, computerSelection) {
    // let playerScore = 0;
    // let computerScore = 0;
    let result = document.getElementById('result');
    let string = '';
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`${player}, ${computer}`)
    if (player === computer) {
        string = "Tie, nobody won or lost";
    }
    else if ((player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors")) {
        string = `You won, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else if ((player === "paper" && computer === "scissors") || (player === "rock" && computer === "paper") || (player === "scissors" && computer === "rock")) {
        string = `Computer won, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    return result.innerHTML = string + "<br>" + `Player: ${playerScore} | Computer: ${computerScore}`;
}
