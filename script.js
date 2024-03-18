const possibleChoices = ['rock', 'paper', 'scissors']
const computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()




function getComputerChoice(){
    computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    console.log("Computer Selection: ", computerSelection)



}


function getPlayerChoice() {
    playerSelection = prompt("Write one of these: Rock, Paper or Scissors").toLowerCase()
    
    return getPlayerChoice();

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
            return "Player win";
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




