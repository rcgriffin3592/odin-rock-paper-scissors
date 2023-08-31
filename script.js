function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === "rock" && computerSelection === "Scissors" || playerChoice === "scissors" && computerSelection === "Paper" || playerChoice === "paper" 
    && computerSelection === "Rock") {
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    } else if (playerChoice === computerSelection.toLowerCase()) {
        return `Draw! You both chose ${playerChoice}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));