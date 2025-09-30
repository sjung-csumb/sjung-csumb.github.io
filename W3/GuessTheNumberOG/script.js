//alert("running external JS code!")

//Global variables

let randomNumber;
let attempts = 0;
let win = 0;
let lose = 0;


displayAttempts = document.querySelector("#attemptsLeft");
displayWin = document.querySelector("#win");
displayLose = document.querySelector("#lose");

initializeGame();

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click",initializeGame);

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   displayAttempts.textContent = `${7 - attempts}`;
   displayWin.textContent = `${win}`;
   displayLose.textContent = `${lose}`;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   //showing the Guess button
   document.querySelector("#guessBtn").style.display = "inline";
  
   //adding focus to textbox
   let playerGuess = document.querySelector("#playerGuess");
   //playerGuess.focus();
   playerGuess.value = "";

   let feedback = document.querySelector("#feedback");
   feedback.textContent = "";

   //clearing previous guesses
   document.querySelector("#guesses").textContent = "";

}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if(guess < 1 || guess > 99){
        feedback.textContent = "Enter a number  between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;

    //Display the number of attempts left
    console.log("Attemps:"+attempts);
    displayAttempts.textContent = `${7-attempts}`;

    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        //Display the total number of wins.
        win++;
        displayWin.textContent = `${win}`;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost! The random number was " + `${randomNumber}`;
            feedback.style.color = "red";

            //Display the total number of losses. 
            lose++;
            displayLose.textContent = `${lose}`;
            gameOver();
        } else if(guess>randomNumber){
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");

    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}