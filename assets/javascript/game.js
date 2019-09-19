// Generate a random number (between 19-120) that will represent the winning number.
var winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(winningNumber);
$("#winningNumber").append(winningNumber);
// Generate random numbers (between 1-12) for each crystal button
var randomOne = getRandomNumber();
console.log(randomOne);
var randomTwo = getRandomNumber();
console.log(randomTwo);
var randomThree = getRandomNumber();
console.log(randomThree);
var randomFour = getRandomNumber();
console.log(randomFour);

function getRandomNumber () {
    return Math.floor(Math.random() * 12) + 1;
}



//Create variable to keep track of the player's score
var scoreCounter = 0;
var winsCounter = 0;
var lossesCounter = 0;

// Update player's score counter whenever crystals are clicked
$("#crystalOne").on("click", function() {
    scoreCounter = scoreCounter + randomOne;
    console.log(scoreCounter);
    currentScore();
    winCheck();
});
$("#crystalTwo").on("click", function () {
    scoreCounter = scoreCounter + randomTwo;
    console.log(scoreCounter);
    currentScore();
    winCheck();
});
$("#crystalThree").on("click", function () {
    scoreCounter = scoreCounter + randomThree;
    console.log(scoreCounter);
    currentScore();
    winCheck();
});
$("#crystalFour").on("click", function () {
    scoreCounter = scoreCounter + randomFour;
    console.log(scoreCounter);
    currentScore();
    winCheck();
});

function currentScore () {
    $("#currentScore").text(scoreCounter);
}




// Create "You win" alert if player's score equals randomly generated number.
// Create "You lose" alert if player's score goes above randomly generated number.
function winCheck() {
    if (scoreCounter == winningNumber) {
        winsCounter++;
        alert ("You win!");
        $("#wins").text(winsCounter);
        reset ();
    }
    else if (scoreCounter > winningNumber) {
        lossesCounter++;
        $("#losses").text(lossesCounter);
        alert ("You lose!");
        reset ();
    }
}

// Reset the game after win/loss and update win/loss counter
function reset () {
    scoreCounter = 0;
    winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(winningNumber);
    // Generate random numbers (between 1-12) for each crystal button
    randomOne = getRandomNumber();
    console.log(randomOne);
    randomTwo = getRandomNumber();
    console.log(randomTwo);
    randomThree = getRandomNumber();
    console.log(randomThree);
    randomFour = getRandomNumber();
    console.log(randomFour);
    
}

