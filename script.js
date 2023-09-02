var firstPlayerDice = document.getElementById('firstDice');
var secondPlayerDice = document.getElementById('secondDice');

var randomDice1 = "dices/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var randomDice2 = "dices/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

firstPlayerDice.setAttribute("src", randomDice1);
secondPlayerDice.setAttribute("src", randomDice2);

var player1Wins = document.getElementById("winner1");
var player2Wins = document.getElementById("winner2");
var playersDraw = document.getElementById("draw");

if (randomDice1 > randomDice2) {
    player1Wins.style.display = "block";
} else if (randomDice1 < randomDice2) {
    player2Wins.style.display = "block";
} else {
    playersDraw.style.display = "block";
}