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
        console.log(`You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}.`)
        return "Win";
    } else if (playerChoiceLower === computerSelection.toLowerCase()) {
        console.log(`Draw! You both chose ${playerSelection.toLowerCase()}`)
        return "Draw";
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
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
        } else if (result === "Draw") {
            ++round;
        } else {
            ++round;
            ++computerScore;
        }
    } else {
        let result = playRound(playerSelection, computerSelection);
        if (result === "Win") {
            ++playerScore;
            ++round;
            return resultsFinal();    
        } else if (result === "Lose") {
            ++computerScore;
            ++round;
            return resultsFinal();
        } else {
            ++round;
            return resultsFinal();
        }
    }
}

function resultsFinal() {
    if (playerScore > computerScore) {
        return `You Win! ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `You Lose! ${computerScore} to ${playerScore}`;
    } else {
        return `Looks like we have a tie!`
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

