
function computerPlay() {
    let compRand = Math.floor(Math.random()*9)+1;
    let compSelection;
    if (compRand > 6) {
        compSelection = 'rock';
    } else if (compRand < 4) {
        compSelection = 'scissors';
    } else {
        compSelection = 'paper';
    }
    return compSelection;
}

function userPlay() {
    let playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
    console.log(playerSelection);
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt("Your input is not recognized. Please enter 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
        }
    }
    return playerSelection;
}

// If user wins, return 1, if computer wins, return 0.

function playRound(compSelection,playerSelection) {
    if (playerSelection == 'rock') {
        if (compSelection == 'scissors') {
            console.log("You Win! Rock beats Scissors!");
            return 1;
        } else if (compSelection == 'paper') {
            console.log("You Loser! Paper beats Rock!");
            return 0;
        } else {
            console.log("You both selected Rock! Try again.");
            return 2;
        }
   }if (playerSelection == 'paper') {
        if (compSelection == 'rock') {
            console.log("You Win! Paper beats Rock!");
            return 1;
        } else if (compSelection == 'scissors') {
            console.log("You Loser! Scissors beat Paper!"); 
            return 0;
        } else {
            console.log("You both selected Paper! Try again.");
            return 2;
        }
   }if (playerSelection == 'scissors') {
        if (compSelection == 'paper') {
            console.log("You Win! Scissors beat Paper!");
        } else if (compSelection == 'rock') {
            console.log("You Loser! Rock beats Scissors!");
        } else {
            console.log("You both selected Scissors! Try again.");
            return 2;
        }
    }
}

let compScore = 0;
let playerScore = 0;

function game() {
    for (let i=0; i<5; i){
        let compSelection = computerPlay();
        let playerSelection = userPlay();
        let round = playRound(compSelection,playerSelection);
        if (round == 0) {
            compScore = compScore+1;
            if (compScore >= 3){
                console.log("Game Over! The Computer WON!");
                break;
            }
        } else if (round == 1) {
            playerScore++;
            if (playerScore >= 3) {
                console.log("Congratulations! You WON!!!!");
                break;
            }
        } else if (round == 2) {
            i--;
        }
        console.log(`Score is (User) ${playerScore} to ${compScore} (Computer)`);
        i++;
    }
    return; 
}

game();