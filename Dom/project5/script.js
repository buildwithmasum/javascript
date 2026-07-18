// =========================
// ESCAPE THE DEATH GOD
// Part 3A - Game Logic
// =========================

let randomNumber = Math.floor(Math.random() * 100) + 1;

const submitBtn = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");

const guesses = document.querySelector(".guesses");
const hint = document.querySelector(".lowOrHigh");
const lives = document.querySelector(".lives");

const deathGod = document.querySelector("#deathGod");

let previousGuesses = [];
let attempts = 10;

let playGame = true;

submitBtn.addEventListener("click", function (e) {

    e.preventDefault();

    if (!playGame) return;

    const guess = Number(userInput.value);

    validateGuess(guess);if(bgMusic.paused){
    bgMusic.volume = 0.3;
    bgMusic.play();
}

});


// =========================
// Validate
// =========================

function validateGuess(guess){

    if(isNaN(guess)){

        displayMessage("⚠ Enter a valid number.");

        userInput.focus();

        return;
    }

    if(guess<1 || guess>100){

        displayMessage("⚠ Guess must be between 1 and 100.");

        userInput.value="";

        userInput.focus();

        return;
    }

    previousGuesses.push(guess);

    displayGuess(guess);

    checkGuess(guess);

}


// =========================
// Check Guess
// =========================

function checkGuess(guess){

    if(guess===randomNumber){

        displayMessage("🎉 YOU ESCAPED DEATH!");

        endGame(true);

        return;
    }

    attempts--;

    updateLives();
    if(attempts <= 3){

    heartbeat.currentTime = 0;
    heartbeat.play();

}

    if(attempts===0){
        evilLaugh.play();
        displayMessage("👑 YOU HAVE DEFEATED THE DEATH GOD");

        endGame(false);

        return;
    }

    if(guess>randomNumber){

        displayMessage("☠ Death moves closer... Too High!");

    }

    else{

       displayMessage("☠ Death moves closer... Too Low!");

    }

}


// =========================
// Previous Guesses
// =========================

function displayGuess(guess){

    previousGuesses.length===1
        ? guesses.textContent=guess
        : guesses.textContent+=", "+guess;

    userInput.value="";

    userInput.focus();

}


// =========================
// Hint
// =========================

function displayMessage(message){

    hint.textContent=message;

}


// =========================
// Hearts
// =========================

function updateLives(){

    let heartString="";

    for(let i=0;i<attempts;i++){
    heartString+="🩸 ";

    }

    lives.textContent=heartString;

}


// =========================
// End Game
// =========================

function endGame(win){

    playGame=false;

    userInput.disabled=true;

    submitBtn.disabled=true;

    const btn=document.createElement("button");

    btn.textContent="Play Again";

    btn.id="newGame";

    document.querySelector(".game").appendChild(btn);

    btn.addEventListener("click",newGame);
    if(!win){


    document.body.style.background="#200000";
    }

else{

document.body.style.background="#043d19";

}
displayMessage("☠ YOUR SOUL BELONGS TO THE DEATH GOD ☠");

deathGod.style.width="550px";

document.body.style.background="#300000";

}


// =========================
// Restart
// =========================

function newGame(){

    randomNumber=Math.floor(Math.random()*100)+1;

    previousGuesses=[];

    attempts=10;

    guesses.textContent="";

    hint.textContent="Make your first guess...";

    updateLives();

    userInput.disabled=false;

    submitBtn.disabled=false;

    userInput.value="";

    playGame=true;

    document.querySelector("#newGame").remove();

}

updateLives();
const deathGod = document.querySelector("#deathGod");
let deathSize = 220;
function horrorEffect() {

    // Death God comes closer
    deathSize += 18;
    deathGod.style.width = deathSize + "px";

    // Background becomes redder
    const darkness = 5 + (10 - attempts) * 7;

    document.body.style.background =
        `rgb(${darkness},0,0)`;

    // Shake the card
    document.querySelector(".game").classList.add("shake");

    setTimeout(() => {
        document.querySelector(".game").classList.remove("shake");
    },300);

       deathGod.classList.add("danger");

document.body.classList.add("flash");

setTimeout(()=>{

document.body.classList.remove("flash");
document.body.classList.add("lightning");

setTimeout(()=>{

document.body.classList.remove("lightning");

},300);

},250);
}
attempts--;

updateLives();
horrorEffect(){
 
};
endGame()

if(!win){

    deathGod.style.width="500px";


}

newGame()
deathSize = 220;

deathGod.style.width = "220px";

document.body.style.background="#050505";
const bgMusic = document.querySelector("#bgMusic");
const heartbeat = document.querySelector("#heartbeat");
const evilLaugh = document.querySelector("#evilLaugh");
const winSound = document.querySelector("#winSound");