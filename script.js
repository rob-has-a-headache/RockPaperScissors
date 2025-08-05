console.log("This is a simple JavaScript file.");
/* 
choices =  3;

function getComputerChoice(choices){
    return Math.floor(Math.random()* choices);            
}

 */
let humanChoice
let ComputerChoice
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    ComputerChoice = Math.random();
    //return ComputerChoice;
    if(ComputerChoice>=0.5)
    {ComputerChoice = "Rock";}
    else {ComputerChoice="Scissors";}
    return ComputerChoice;
}

function getHumanChoice(){
    humanChoice = prompt("Select Rock, Paper or Scissors to play");
}

getHumanChoice()
getComputerChoice()

console.log("Computer choice: " + ComputerChoice)
console.log("Human choice: " + humanChoice)
console.log("Computer score: "+computerScore)
console.log("Human Score: "+humanScore)
console.log("end")