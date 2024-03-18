const possibleChoices = ['rock', 'paper', 'scissors']
const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()

function playGame(){

    player_score = 0;
    computer_score = 0;

    for (let i = 0; i < 6; i++){
        console.log(`Round number ${i}`)
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)

        if (result === "Player Win")
        {
            player_score += 1;
        }
        else if (result === "Computer Win")
        {
            computer_score += 1;
        }
    }
    console.log(`Player Score: ${player_score}`);
    console.log(`Computer Score: ${computer_score}`);

    if (player_score > computer_score)
    {
        console.log("Player wins!!!!")
    }
    else if (player_score === computer_score)
    {
        console.log("It's a tie")
    }
    else
    {
        console.log("Computer wins!!!")
    }
}




function getComputerChoice(){
    computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    console.log("Computer Selection: ", computerSelection)
    return computerSelection;



}


function getPlayerChoice() {
    playerSelection = prompt("Write one of these: Rock, Paper or Scissors").toLowerCase()
    return playerSelection;
    
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
    {
        return "It's a tie";
    }

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'scissors')
        {
            console.log("Player Win")
            return "Player Win";
        }
        else 
        {
            console.log("Computer Win")
            return "Computer Win";
        }
    }

    if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            console.log("Player Win")
            return "Player Win";
        }
        else 
        {
            console.log("Computer Win")
            return "Computer Win";
        }
    }

    if (playerSelection === 'scissors')
    {
        if (computerSelection === 'paper')
        {
            console.log("Player Win")
            return "Player Win";
        }
        else
        {
            console.log("Computer Win")
            return "Computer Win";
        }
    }

}




