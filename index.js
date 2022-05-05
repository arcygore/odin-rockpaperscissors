const defaultDomState = document.body.innerHTML;

const btn = document.querySelectorAll('button:not(.reset)');
    for (let i = 0; i < btn.length; i++) {
        if (btn[i]) {
            btn[i].addEventListener("click", function() {
                this.playSel = btn[i].innerText.toLowerCase();
                this.compSel = computerPlay();
                round = playRound(this.compSel, this.playSel);
                userScore = document.querySelector('.user-score');
                newUserScore = parseInt(userScore.innerText);
                cpuScore = document.querySelector('.cpu-score');
                newCpuScore = parseInt(cpuScore.innerText);
                gameText = document.querySelector('.winner-declaration');
                if (round == 0) {
                    newCpuScore++;
                    cpuScore.innerText = newCpuScore;
                    if (newCpuScore >= 6){ //Added high score for UI update, should be 3
                        gameText.innerText += "\n Game Over! The Computer WON!";
                        for (let j = 0; j < btn.length; j++) btn[j].disabled = true;
                        // return;
                    }
                } else if (round == 1) {
                    newUserScore++;
                    userScore.innerText = newUserScore;
                    if (newUserScore >= 6) { //Added high score for UI update, should be 3
                        gameText.innerText += "\n Congratulations! You WON!!!!";
                        for (let j = 0; j < btn.length; j++) btn[j].disabled = true;
                        // return;
                    }
                } else if (round == 2) {
                    return;
                }
            })
        }
    }


const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener("click", function() {
        document.querySelector('.user-score').innerText = 0;
        document.querySelector('.cpu-score').innerText = 0;
        document.querySelector('.winner-declaration').innerText = "Play RPS against the CPU! Make your selection below:";
        for (let j = 0; j < btn.length; j++) btn[j].disabled = false;
    })

// function buttonClick() {
//     let playSel;
//     const btn = document.querySelectorAll('button');
//     for (let i = 0; i < btn.length; i++) {
//         if (btn[i]) {
//             btn[i].addEventListener("click", function() {
//                 playSel = btn[i].innerText.toLowerCase();

//             })
//             compSel = computerPlay();
//             playRound(compSel, playSel);
//         }
//     }
// }


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
    gameText = document.querySelector('.winner-declaration');
    if (playerSelection == 'rock') {
        if (compSelection == 'scissors') {
            gameText.innerText = "You Win! Rock beats Scissors!";
            return 1;
        } else if (compSelection == 'paper') {
            gameText.innerText = "You Loser! Paper beats Rock!";
            return 0;
        } else {
            gameText.innerText = "You both selected Rock! Try again.";
            return 2;
        }
   }if (playerSelection == 'paper') {
        if (compSelection == 'rock') {
            gameText.innerText = "You Win! Paper beats Rock!";
            return 1;
        } else if (compSelection == 'scissors') {
            gameText.innerText = "You Loser! Scissors beat Paper!"; 
            return 0;
        } else {
            gameText.innerText = "You both selected Paper! Try again.";
            return 2;
        }
   }if (playerSelection == 'scissors') {
        if (compSelection == 'paper') {
            gameText.innerText = "You Win! Scissors beat Paper!";
            return 1;
        } else if (compSelection == 'rock') {
            gameText.innerText = "You Loser! Rock beats Scissors!";
            return 0;
        } else {
            gameText.innerText = "You both selected Scissors! Try again.";
            return 2;
        }
    }
}

let compScore = 0;
let playerScore = 0;

function game() {
    for (let i=0; i<5; i) {
        let compSelection = computerPlay();
        let playerSelection = buttonClick(); //userPlay();
        let round = playRound(compSelection,playerSelection);
        if (round == 0) {
            compScore++;
            if (compScore >= 100){ //Added high score for UI update, should be 3
                console.log("Game Over! The Computer WON!");
                break;
            }
        } else if (round == 1) {
            playerScore++;
            if (playerScore >= 100) { //Added high score for UI update, should be 3
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

// game();