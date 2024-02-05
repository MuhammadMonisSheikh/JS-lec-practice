// CREAT SECRET NUMBER 

var secretNumber = 4;

// ASK USER FOR GUESS

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// CHECK GUESS

if (guess === secretNumber) {
    alert("You GOT IT RIGHT!");
}

// CHECK IF GUESS HIGHER
else if (guess > secretNumber) {
    alert("Too high. Guess again!");
}


// CHECK IF GUESS LOWER 

else {
    alert("Too low. Guess again!");
}
