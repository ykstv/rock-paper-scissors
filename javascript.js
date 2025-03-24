function getComputerChoice () {
    const computerNumber = Math.random();
    if (computerNumber < 0.333) {
        return "Rock";
    }
    else if (computerNumber < 0.666) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let computerSelect = "";
let humanSelect = "";
let humanScore = 0;
let computerScore = 0;
let message = "err"
let finalmessage = "err"

function playRound(humanSelect, computerSelect) {
    computerSelect = getComputerChoice ();
    humanSelect = prompt("Choose Rock OR Paper OR Scissors").toLowerCase();
    if (computerSelect === "Rock" && humanSelect === "rock"){
        message = "TIE"
    }
    else if (computerSelect === "Rock" && humanSelect === "paper"){
        message = "WIN";
        humanScore++
    }
    else if (computerSelect === "Rock" && humanSelect === "scissors"){
        message = "LOSE";
        computerScore++
    }
    else if (computerSelect === "Paper" && humanSelect === "rock"){
        message = "LOSE";
        computerScore++
    }
    else if (computerSelect === "Paper" && humanSelect === "paper"){
        message = "TIE"
    }
    else if (computerSelect === "Paper" && humanSelect === "scissors"){
        message = "WIN";
        humanScore++
    }
    else if (computerSelect === "Scissors" && humanSelect === "rock"){
        message = "WIN";
        humanScore++
    }
    else if (computerSelect === "Scissors" && humanSelect === "paper"){
        message = "LOSE";
        computerScore++
    }
    else if (computerSelect === "Scissors" && humanSelect === "scissors"){
        message = "TIE"
    }
    else 
        message =  "OUT OF SCOPE"
  }
    
function playGame() {
    playRound(humanSelect, computerSelect); 
    playRound(humanSelect, computerSelect); 
    playRound(humanSelect, computerSelect); 
    playRound(humanSelect, computerSelect); 
    playRound(humanSelect, computerSelect); 
    if (humanScore > computerScore)
        {finalmessage = "You are winner! Score: "+humanScore+":"+computerScore}
    else if (humanScore < computerScore)
        {finalmessage = "You are loser! Score: "+humanScore+":"+computerScore}
    else {finalmessage = "It's a tie! Score: "+humanScore+":"+computerScore}
}

playGame();
console.log(finalmessage);

