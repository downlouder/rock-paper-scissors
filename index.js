const buttons = document.querySelectorAll('#choices button');
const result = document.getElementById('result');
const againBlock = document.getElementById('again');
const againBtn = document.createElement('button');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice()); 
    });
});
function getComputerChoice() {
    const items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}
function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function showAgainBtn() {
    againBtn.hidden = false
    againBtn.className = 'restart';
    againBtn.textContent = 'Play Again';
    againBlock.append(againBtn);
    againBtn.addEventListener('click', restartGame);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    result.innerHTML = '';
    buttons.forEach((button) => {
        button.disabled = false;
    })
    againBtn.hidden = true;
}

function playRound(playerSelection, computerSelection) {
    let wonGame = '';
    let string = '';
    let reload = '';
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log(`${player}, ${computer}`);
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
            showAgainBtn();
        }
    }
    else if ((player === "paper" && computer === "scissors") || (player === "rock" && computer === "paper") || (player === "scissors" && computer === "rock")) {
        string = `Computer won this round, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        if (computerScore === 5) {
            wonGame = "I'm sorry, but Computer won this game, I hope you have better luck in the next game";
            reload = "Please reload this page to start new game";
            disableButtons();
            showAgainBtn();
        }
    }
    return result.innerHTML = `<div class="players"><p>Player: ${playerScore}</p><p>Computer: ${computerScore}</p></div><p id="round">${string}!</p><p id="game">${wonGame}</p>`;
}


// HOVER EFFECT
const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
}

for (const button of document.querySelectorAll('button')) {
    button.onmousemove = e => handleOnMouseMove(e);
}