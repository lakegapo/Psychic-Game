var lettersRange = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
//  The array below will start empty and begin populating as letters are pressed
var guessedRange = [];

//  No value yet for the letter to guess, we will set its value when a function is called
var letterToGuess;

//  We will set the opening number of guesses/"lives" to use based on the screenshot from the homework instructions
var guessesLeft = 9;

//  When the game initially begins, the wins and losses will both be at 0.
var wins = 0;
var losses = 0;

//  Functions we'll need to call at some point

//  A function what will update the letter for the player to guess
var updateLetterToGuess = function() {
    //  Below is random generator that will select a letter from variable lettersRange
    letterToGuess = lettersRange[Math.floor(Math.random() * lettersRange.length)];
};

//  A function that will update how many guesses the players has left
var updateGuessesLeft = function (){
    //  Set HTML span ID guesses-left equal to variable guessesLeft.
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};
//  A function that will update the array of letters that have been used up by the player in each round
var updateGuessedArray  = function (){
    //  We will use the join function to combined the items in the array into one block to push into the guessed-array span in HTML.
    document.querySelector("#guessed-array").innerHTML = guessedRange.join(", ");
}

//  A function that will call the above functions to reset/set counters when a player wins or loses--without reloading the page
var newRound = function() {
    //  Reset the guesses back 9 per round
    guessesLeft = 9;
    //  Empty out the guessed letters bucket
    guessedRange = [];
    //  Change the HTML spans back to default
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessedArray();
};

   // Set the guesses left to 9 because when the page is initially loaded/refreshed, the value is blank.
    updateGuessesLeft();

//  Now onto the user keyboard clicks

// This function will capture the keyboard clicks.
document.onkeyup = function(event) {
    //  Convert the pressed key to lowercase
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //  Decrement the number of guesses left.
    guessesLeft--;

    //  Add the keypress into the array of guessed letters
    guessedRange.push(letterGuessed);

    //  Call the functions to reflect the changes in HTML
    updateGuessesLeft();
    updateGuessedArray();


    //  Was the correct letter guessed?
    if (letterGuessed === letterToGuess) {

        //  If the letters match, increment wins variable.
        wins++;
        //  Update span ID wins in HTML
        document.querySelector("#wins").innerHTML = wins;

        // Start a new round.
        newRound();
    }

    //  If we run out of guesses, increment losses row and go the next round.
    if (guessesLeft === 0) {
        losses++;
        //  Update span ID losses in HTML.
        document.querySelector("#losses").innerHTML = losses;

        // Start a new round.
        newRound();
    }
    };

    
