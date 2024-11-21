const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const buttonContainer = document.querySelector('.button-container')
let playerScore = document.querySelector(".p-score");
let cpuScore = document.querySelector(".c-score");
let winOrLose = document.querySelector(".winorlose");
let score = 0;


rockButton.addEventListener('click', () => {
    console.log("rock");
});

paperButton.addEventListener('click',() => {
    console.log("Paper");

});

scissorButton.addEventListener('click', () => {
    console.log("Scissors");
});

function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        winOrLose.textContent = "Tie haha" + score;
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        winOrLose.textContent = "U got a point nice" + score;
    } else {
        winOrLose.textContent = "Wow u didnt win that XD" + score;
    }
}