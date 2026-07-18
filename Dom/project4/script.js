let generaterandom=parseInt (Math.random()*100+1);
const submit=document.querySelector("#submit")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHigh")
const startOver=document.querySelector(".resultParas")

const p=document.createElement("p")
let prevGuess=[]
let numGuess=0

let playGame=true;
if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a valid number:")
        userInput.value = "";
        userInput.focus();
        return;

    }
    else if(guess<1){
        displayMessage("Enter a valid number more than 0")
        userInput.value = "";
        userInput.focus();
        return;
    }
    else if(guess>100){
        displayMessage("Enter a valid number less than 100")
        userInput.value = "";
        userInput.focus();
        return;
    }else{
        prevGuess.push(guess)
        displayGuess(guess)
        if(numGuess>=10){
           
            displayMessage(`Game Over. Random Number was ${generaterandom}`)
            endGame()
        }
        else{
             
             checkGuess(guess)

        }
    }
}

function checkGuess(guess){
    if (guess > generaterandom) {
    displayMessage("Too high! Try a smaller number.");
} else if (guess < generaterandom) {
    displayMessage("Too low! Try a bigger number.");
} else {
    displayMessage("🎉 Congratulations! You guessed the correct number.");
}
}
function displayGuess(guess){
    userInput.value=""
    guessSlot.innerHTML+=`${guess} , `
    numGuess++
    remaining.innerHTML=`${10-numGuess}`

}
    
function displayMessage(message){
 lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    generaterandom= parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

})
}
