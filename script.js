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
    let playerChoiceLower = playerSelection.toLowerCase();

    if (playerChoiceLower === "rock" && computerSelection === "Scissors" || playerChoiceLower === "scissors" && computerSelection === "Paper" || playerChoiceLower === "paper" 
    && computerSelection === "Rock") {
        return "Win";
    } else if (playerChoiceLower === computerSelection.toLowerCase()) {
        return "Draw";
    } else {
        return "Lose";
    }
}

function game() {
    let playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    let computerSelection = getComputerChoice();

    if (round < 5) {
        let result = playRound(playerSelection, computerSelection);
        if (result === "Win") {
            ++playerScore;
            ++round;
            return `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}.`;
        } else if (result === "Draw") {
            ++round;
            return `Draw! You both chose ${playerSelection.toLowerCase()}`;
        } else {
            ++round;
            ++computerScore;
            return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
        }
    } else {
        let result = playRound(playerSelection, computerSelection);
        if (result === "Win") {
            ++playerScore;
            ++round;        
        } else if (result === "Lose") {
            ++computerScore;
            ++round;
        } else {
            ++round;
        }

        if (playerScore > computerScore) {
            return `You Win! ${playerScore} to ${computerScore}`;
        } else if (playerScore < computerScore) {
            return `You Lose! ${computerScore} to ${playerScore}`;
        } else {
            return `Looks like we have a tie!`
        }
    }
}

let round = 1
let playerScore = 0
let computerScore = 0

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());

