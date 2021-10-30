"use strict"
// Kero's changes

function question1 = prompt("What is your name?") 
    alert("Welcome " + question1 + ". I have some questions for you")
        //console.log("What is your name?")
     

function question2 = prompt("Do I like football?").toLowerCase 
    if (question2 === "yes" || question2 === "y") {
        alert("Incorrect! I don't watch football")
    } else {
        alert("Yep. Don't watch football. What a crime")
}

function question3 = prompt("Do I like cheese?").toLowerCase;
    if (question3 === "yes" || question3 === "y") {
    alert("I love cheese. Try Lactaid")
} else {
    "Favorite cheeses are Havarti"
}
//console.log("Glad you like cheese. Try Lactaid")
function question4 = prompt("Have I left the country for vacation?").toLowerCase
if (question4 === "yes" || question4 === "y") {
    alert("Correct! I went to Greece and Italy last summer. It was fun")
} else {
    alert("Nope, I went to Europe before Covid-19 started.")
}
//console.log("Correct! I went to Greece and Italy last summer. It was fun")
function question5 = prompt("What is my favorite activity?").toLowerCase
if (question5 === "gaming" || question5 === "playing games") {
    alert("Good answer " + question1 + "!. My favorite right now is New World. Welcome to the website")
} else {
    alert("Oops. Good try " + question1 + ". Well that's all for now, welcome to the website!")
}
guessingGameTries = 5
function userGuessingGame() {
    function userLives = 4;
    function userAnswer;
    while (userLives > 0) {
        userAnswer = prompt("Guess a number between 1 and 100");
        if (userAnswer < 47) {
            alert("User input is too low")
        } else if (userAnswer > 47) {
            alert("User input is too high")
        } else if (userAnswer === 47) {
            alert("")
            break
        } else {
            alert("Input is not a valid #")
        }
        userLives -= 1
    }
    // Respond to user input below and above below

}
// Take user input, compare it to a list of favorite movies given 6 attempts

function guessAnother2ndQuestion() {

    function secondGuessGameTries = 6
    function secondGuessGameCorrectAnswer = ["interstellar", "avatar", "john wick"]
    while (secondGuessGameTries > 0) {
        function secondGameUseranswer = prompt("What is one of my favorite movies?").toLowerCase()
        if (secondGameUseranswer != secondGuessGameCorrectAnswer) {
            alert("That is not a correct answer please try again")
        } else (secondGameUseranswer === secondGuessGameCorrectAnswer) 
            alert("That is correct")
            break
        }
        secondGuessGameTries -= 1
    }

guessingGameTries()
guessAnother2ndQuestion()
question1();
question2();
question3();
question4();
question5();
userGuessingGame();
