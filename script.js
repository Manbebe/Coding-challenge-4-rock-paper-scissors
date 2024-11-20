const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const buttonContainer = document.querySelector('.button-container')
let playerScore = document.querySelector(".p-score");
let cpuScore = document.querySelector(".c-score");
let winOrLose = document.querySelector(".winorlose");
let score = 0;


rockButton.addEventListener('click', () => {

});

paperButton.addEventListener('click',() => {

});

scissorButton.addEventListener('click', () => {

});

function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        // It's a tie
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        // Player wins
    } else {
        // CPU wins
    }
}