const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game function
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const Winner = getWinner(playerChoice, computerChoice);

    showWinner(Winner, computerChoice);
}

//Get winner
function getWinner(p, c) {
    if(p === c) {
        return "Draw";
    } else if(p === "rock") {
        if(c === "paper") {
            return "computer"
        } else {
            return "player";
        }
    } else if(p === "paper") {
        if(c === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    } else if(p === "scissors") {
        if(c === "rock") {
            return "computer"
        } else {
            return "player"
        }
    }
}

//Get computer's choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return "rock"
    } else if(rand <= 0.67) {
        return "paper"
    } else {
        return "scissors"
    }
}

function showWinner(winner, computerChoice) {
    if(winner === "player") {
        //increase player score
        scoreboard.player++;
        //show Modal result
        result.innerHTML = 
        `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>`;
    } else if(winner === "computer") {
       //increase player score
       scoreboard.computer++;
       //show Modal result
       result.innerHTML = 
       `<h1 class="text-lose">You Lose</h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
       <p>Computer Chose <strong>${computerChoice}</strong></p>`;
    } else {
        result.innerHTML = 
       `<h1>Draw</h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
       <p>Computer Chose <strong>${computerChoice}</strong></p>`;
    }
    //show score
    score.innerHTML = 
        `<p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;

    modal.style.display = "block";    
}

//Restart Game function
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

//clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

//add event listeners
//choices.forEach(choice => choice.addEventListener("click", play));
choices.forEach(function(choice){
    choice.addEventListener("click", play)
});
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);

