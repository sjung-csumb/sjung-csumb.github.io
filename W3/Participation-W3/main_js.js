let statusDisplay = document.getElementById('status-display');
let guessInput = document.getElementById('guess-input');
let guess= guessInput.value;
let guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', checkGuess);
let playAgainButton = document.getElementById('play-again');
playAgainButton.style.display = 'none';
let previousGuesses = document.getElementById('previous-guesses');
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Answer (for testing purposes):", randomNumber);
let attempts = 0;
const maxAttempts = 7;
let wins = 0;
let losses = 0;


function checkGuess() {
    
    console.log('f');
    guess= guessInput.value;
    //   d. If the input is outside the range of 1 to 100 display an error message
    if (guess < 1 || guess > 100) {
        statusDisplay.textContent = "Please enter a number between 1 and 100.";
        turnRed();
        return false;
    }
    //    a. If the guess is equal to the target number:
    //       i. Display a congratulatory message to the user along with the number of attempts taken.
    //      ii. Increase variable that keeps track of number of wins and display its value
    //     iii. Disable/Hide Guess button,  display "Play Again" button
    else if (guess == randomNumber) {
        statusDisplay.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts + 1} attempts.`;
        wins++;
        turnGreen();
        playAgainButton.style.display = 'inline';
        guessButton.style.display = 'none';
    }
    //    b. If the guess is less than the target number:
    //       i. Display a message asking the user to guess a higher number.
    //      ii.  Increment the attempts variable by 1.
    else if (guess < randomNumber) {
        statusDisplay.textContent = "Too low! Try guessing a higher number.";
        attempts++;
        previousGuesses.textContent += guess + " ";
        turnRed();
    }
    //    c. If the guess is greater than the target number:
    //       i. Display a message asking the user to guess a lower number.
    //      ii. Increment the attempts variable by 1.
    else if (guess > randomNumber) {
        statusDisplay.textContent = "Too high! Try guessing a lower number.";
        attempts++;
        previousGuesses.textContent += guess + " ";
        turnRed();
    }
    
    checkAttempts();
}



// 8. Check the number of attempts, if it's 7:
//     i. Display a "You Lost" mess`age
//    ii. Increase variable that keeps track of the number of losses and display its value
//    iii. Disable/Hide Guess button,  display "Play Again" button
function checkAttempts() {
    if (attempts >= maxAttempts) {
        statusDisplay.textContent = `Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`;
        losses++;
        guessButton.style.display = 'none';
        playAgainButton.style.display = 'inline';
    }
}




// 9. Create an event listener for the "Play Again" button
playAgainButton.addEventListener('click', resetgame);
function resetgame() {
    //    i.  Clear previous guesses
    previousGuesses.textContent = "Your Previous guesses: ";
    //    ii. Reset number of attempts
    attempts = 0;
    //   iii. Generate a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Answer (for testing purposes):", randomNumber);
    //   iv.  Enable/Show Guess button, hide "Play Again" button
    guessInput.style.backgroundColor = "white";
    guessInput.value = '';
    guessButton.style.display = 'inline';
    playAgainButton.style.display = 'none';
}



function turnGreen() {
    guessInput.style.backgroundColor = "lightgreen";

}
function turnYellow() {
    guessInput.style.backgroundColor = "yellow";
}
function turnRed() {
    guessInput.style.backgroundColor = "red";
}
    