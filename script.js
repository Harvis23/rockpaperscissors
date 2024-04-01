let player_score = 0;
let computer_score = 0;
let roundsPlayed = 5;

function playGame() {

    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", () => playRound("scissors"));
}
    
        
function getComputerChoice() {

    const possibleChoices = ['rock', 'paper', 'scissors']
    let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    document.querySelector('.computer_selection').textContent = `Computer Selection: ${computerSelection}`;
    return computerSelection;
    
}

function playRound(playerSelection){

    computerSelection = getComputerChoice();

    document.querySelector('.player_selection').textContent = `Player Selection: ${playerSelection}`;
    document.querySelector('.computer_selection').textContent = `Computer Selection: ${computerSelection}`;

    if (playerSelection === computerSelection)
    {
        checkEndGame();
        return;
    }

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'scissors')
        {
            player_score++;
            document.querySelector(".player_score").textContent = `Player Score: ${player_score}`;
            checkEndGame();
            
        }
        else 
        {
            computer_score++;
            document.querySelector(".computer_score").textContent = `Computer Score: ${computer_score}`;
            checkEndGame();
        }
    }

    if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            player_score++;
            document.querySelector(".player_score").textContent = `Player score: ${player_score}`;
            checkEndGame();
        }
        else 
        {
            computer_score++;
            document.querySelector(".computer_score").textContent = `Computer Score: ${computer_score}`;
            checkEndGame();

        }
    }

    if (playerSelection === 'scissors')
    {
        if (computerSelection === 'paper')
        {
            player_score++;
            document.querySelector(".player_score").textContent = `Player score: ${player_score}`;
            checkEndGame();
            
        }
        else
        {
            computer_score++;
            document.querySelector(".computer_score").textContent = `Computer Score: ${computer_score}`;
            checkEndGame();

        }
    }
}

function checkEndGame() {
    document.querySelector(".round").textContent = `Round: ${roundsPlayed}`;
    roundsPlayed--;

    if (roundsPlayed === 0) {
        endGame();
    }
}


function endGame(){
    if (player_score > computer_score) {
        document.querySelector(".result").textContent = `Result: PLAYER WON`;
    } else if (player_score === computer_score) {
        document.querySelector(".result").textContent = `Result: TIE`;
    } else {
        document.querySelector(".result").textContent = `Result: COMPUTER WON`;
    }

    player_score = 0;
    computer_score = 0;
    roundsPlayed = 5;
    document.querySelector(".player_score").textContent = `Player Score: ${player_score}`;
    document.querySelector(".computer_score").textContent = `Computer Score: ${computer_score}`;
    document.querySelector(".round").textContent = `Round: ${roundsPlayed}`;
    document.querySelector(".player_selection").innerHTML = "Player Selection: ";
    document.querySelector(".computer_selection").textContent = "Computer Selection: ";
    
}
playGame();
 













