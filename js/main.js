var cards = ['queen','queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = 'queen';
cardsInPlay.push(cardOne);

console.log("User flipped queen");

var cardTwo = 'king';
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
}}