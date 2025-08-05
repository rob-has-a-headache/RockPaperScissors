let humanChoice
let ComputerChoice
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    ComputerChoice = Math.floor(Math.random()*3);
    switch(ComputerChoice)
    {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}

function getHumanChoice(){
    humanChoice = prompt("Select Rock, Paper or Scissors to play");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}   

function PlayRound(humanChoice, ComputerChoice){

    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + ComputerChoice)

    if (humanChoice == ComputerChoice)
    {console.log("It's a draw, no points awarded!")}
    else if(humanChoice == "scissors" && ComputerChoice =="rock" 
        || humanChoice == "rock" && ComputerChoice=="paper" 
        || humanChoice == "paper" && ComputerChoice=="scissors")
        {
            console.log(`${ComputerChoice} beats ${humanChoice} - 1 point to the computer!`)
            computerScore +=1;
        }
    else if(
        humanChoice == "rock" && ComputerChoice == "scissors"
        || humanChoice == "scissors" && ComputerChoice == "paper"
        || humanChoice == "paper" && ComputerChoice == "rock")
        {
            console.log(`${humanChoice} beats ${ComputerChoice} - you get 1 point!`)
            humanScore +=1;
        }
} 

let rounds = 5;

function PlayGame(){
    let round = 0;
    console.log("playgame started " + round + " " + rounds)
    while (round<rounds){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        PlayRound(humanSelection, computerSelection)
        round++;
        console.log("round complete your score: " + humanScore + "   computer:" + computerScore)
    }
    if(humanScore<computerScore){
            alert("You lose, try again?")
    }
    else if(humanScore>computerScore){
            alert("You Win Congrats... wait did you?")
    }
    else{alert("It's a draw, good effort... have another go")}
}

PlayGame()

console.log("Human Score: "+humanScore +"   Computer score: "+computerScore)
console.log()
console.log("end")