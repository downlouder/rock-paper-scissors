let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice()); 
    });
});
function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}
function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function playRound(playerSelection, computerSelection) {
    // let playerScore = 0;
    // let computerScore = 0;
    let wonGame = '';
    let result = document.getElementById('result');
    let string = '';
    let reload = '';
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`${player}, ${computer}`)
    if (player === computer) {
        string = "Tie, nobody won or lost this round";
    }
    else if ((player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors")) {
        string = `You won this round, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        if (playerScore === 5) {
            wonGame = "My Congratulations, You won this game!!!";
            reload = "Please reload this page to start new game";
            disableButtons();
        }
    }
    else if ((player === "paper" && computer === "scissors") || (player === "rock" && computer === "paper") || (player === "scissors" && computer === "rock")) {
        string = `Computer won this round, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        if (computerScore === 5) {
            wonGame = "I'm sorry, but Computer won this game, I hope you have better luck in the next game";
            reload = "Please reload this page to start new game";
            disableButtons();
        }
    }
    return result.innerHTML = `<p id="round">${string}</p><p id="info">Player: ${playerScore} | Computer: ${computerScore}</p><p id="game">${wonGame}</p><p id="reload">${reload}</p>`;
}
