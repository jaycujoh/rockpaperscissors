
//get computer choice by using switch case, where a random number between 1-3 will choose a case number which returns rock, scissors or paper.

function getComputerChoice() {

    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
        case 0:
            return "rock";
        case 1: 
            return "scissors";
        case 2: 
            return "paper";
    }

}

//get human choice by asking for input


function getHumanChoice() {
    return choice = prompt("Rock, Paper or Scissors?");
}



//if human input === computer choice then return 'draw'
//if human input === rock and computer choice === scissors then return 'you win'
//if human input === paper and computer choice === rock then return 'you win'
//if human input === scissors and computer choice === paper then return 'you win'
//else return 'you lose'

const computerChoice = getComputerChoice();

const humanChoice = getHumanChoice();
console.log("You chose " + humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {

    console.log("Computer chose " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    } else {
    if (humanChoice == 'scissors' && computerChoice === 'paper') {
        console.log("You Win!"); 
        humanScore += 1;       
    } else {
    if (humanChoice == 'paper' && computerChoice === 'rock') {
        console.log("You Win!");
        humanScore += 1;  
    } else {
    if (humanChoice == 'rock' && computerChoice === 'scissors') {
        console.log("You Win!");
        humanScore += 1;  
    } else {
        console.log("You Lose!");
        computerScore += 1;  
             }
        }
    }
}

}

for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
}


console.log("Your score = " + humanScore);
console.log("Computer score = " + computerScore);