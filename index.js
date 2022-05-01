
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
    return playerSelection;
}



function playRound(compSelection,playerSelection) {
    if (playerSelection == 'rock') {
        if (compSelection == 'scissors') {
            return console.log("You Win! Rock beats Scissors!");
        } else if (compSelection == 'paper') {
            return console.log("You Loser! Paper beats Rock!");
        } else {
            console.log("You both selected Rock! Try again.");
            game();
        }
   }if (playerSelection == 'paper') {
        if (compSelection == 'rock') {
            return console.log("You Win! Paper beats Rock!");
        } else if (compSelection == 'scissors') {
            return console.log("You Loser! Scissors beat Paper!");
        } else {
            console.log("You both selected Paper! Try again.");
            game();
        }
   }if (playerSelection == 'scissors') {
        if (compSelection == 'paper') {
            return console.log("You Win! Scissors beat Paper!");
        } else if (compSelection == 'rock') {
            return console.log("You Loser! Rock beats Scissors!");
        } else {
            console.log("You both selected Scissors! Try again.");
            game();
        }
    }
}

function game() {
    let compSelection = computerPlay();
    let playerSelection = userPlay();
    playRound(compSelection,playerSelection);
}

game();