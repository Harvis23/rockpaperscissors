const possibleChoises = ['rock', 'paper', 'scissors']
const computerChoise = getComputerChoice()
const playerchoice = getPlayerChoice()



function getComputerChoice(){
    computerSelection = possibleChoises[Math.floor(Math.random() * possibleChoises.length)]
    console.log('Computer Selection: ', computerSelection)

}


