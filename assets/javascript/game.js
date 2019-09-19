// Generate a random number (between 19-120) that will represent the winning number.
var winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(winningNumber);
// Generate random numbers (between 1-12) for each crystal button
var randomOne = Math.floor(Math.random() * 12) + 1;
console.log(randomOne);
var randomTwo = Math.floor(Math.random() * 12) + 1;
console.log(randomTwo);
var randomThree = Math.floor(Math.random() * 12) + 1;
console.log(randomThree);
var randomFour = Math.floor(Math.random() * 12) + 1;
console.log(randomFour);

var scoreCounter = 0;
// Update player's score counter whenever crystals are clicked
$("#crystalOne").on("click", function() {
    scoreCounter = scoreCounter + randomOne;
    console.log(scoreCounter);
});
$("#crystalTwo").on("click", function () {
    scoreCounter = scoreCounter + randomTwo;
    console.log(scoreCounter);
});
$("#crystalThree").on("click", function () {
    scoreCounter = scoreCounter + randomThree;
    console.log(scoreCounter);
});
$("#crystalFour").on("click", function () {
    scoreCounter = scoreCounter + randomFour;
    console.log(scoreCounter);
});




// Create "You win" alert if player's score equals randomly generated number.
// Create "You lose" alert if player's score goes above randomly generated number.
// Reset the game after win/loss and update win/loss counter

