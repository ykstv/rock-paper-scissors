let computerSelect = "";
let humanSelect = "";
let humanScore = 0;
let computerScore = 0;
let round = 0;

const container = document.querySelector(".container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundresult = document.querySelector("#roundresult");
const score = document.querySelector("#score");
const finalmessage = document.querySelector("#finalmessage");

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

rock.addEventListener("click", () => {
    humanSelect = "Rock";
    playRound(humanSelect, computerSelect);
})

paper.addEventListener("click", () => {
    humanSelect = "Paper";
    playRound(humanSelect, computerSelect);
})

scissors.addEventListener("click", () => {
    humanSelect = "Scissors";
    playRound(humanSelect, computerSelect);
})

function playRound(humanSelect, computerSelect) {
    computerSelect = getComputerChoice ();
    if (round < 5){
        if ((computerSelect === "Rock" && humanSelect === "Paper")||
        (computerSelect === "Paper" && humanSelect === "Scissors")||
        (computerSelect === "Scissors" && humanSelect === "Rock"))
            {
            humanScore++;
            roundresult.textContent = humanSelect+" VS "+computerSelect;
            score.textContent = humanScore+":"+computerScore;
            round++;
        }
        else if ((computerSelect === "Rock" && humanSelect === "Scissors")||
        (computerSelect === "Paper" && humanSelect === "Rock")||
        (computerSelect === "Scissors" && humanSelect === "Paper"))
        {
            computerScore++;
            roundresult.textContent = humanSelect+" VS "+computerSelect;
            score.textContent = humanScore+":"+computerScore;
            round++;
        }
        else 
            {roundresult.textContent = humanSelect+" VS "+computerSelect;
            round++;}
    }

    if (round === 5) {
        endgame();
    }
}

    function endgame() {
        if (humanScore > computerScore)
            {finalmessage.textContent = "You are winner!"
            document.querySelectorAll("button").forEach(btn => btn.remove());
            const newbutton = document.createElement('button');
            newbutton.textContent = 'Play again';
            newbutton.addEventListener("click", () => {
                window.location.reload()
            });
            container.appendChild(newbutton);}
        else if (humanScore < computerScore)
            {finalmessage.textContent = "You are loser!"
            document.querySelectorAll("button").forEach(btn => btn.remove());
            const newbutton = document.createElement('button');
            newbutton.textContent = 'Play again';
            newbutton.addEventListener("click", () => {
                window.location.reload()
            });
            container.appendChild(newbutton);}
        else {finalmessage.textContent = "It's a tie!"
            document.querySelectorAll("button").forEach(btn => btn.remove());
            const newbutton = document.createElement('button');
            newbutton.textContent = 'Play again';
            newbutton.addEventListener("click", () => {
                window.location.reload()
            });
            container.appendChild(newbutton);}
    }