// Generate a random number from 1-6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// Get Player1 dice image from DOM
var dice1 = document.querySelector(".img1")

// Change Player1 dice on refresh to new dice roll
dice1.setAttribute("src", "./images/dice"+randomNumber1+".png");

// Generate a random number from 1-6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Get Player2 dice image from DOM
var dice2 = document.querySelector(".img2")

// Change Player2 dice on refresh to new dice roll
dice2.setAttribute("src", "./images/dice"+randomNumber2+".png");

// If/Else statement to change H1 header text to the winner or draw
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";}
    
    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";}

    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

