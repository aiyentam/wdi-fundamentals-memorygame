var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var score = 0;

var checkForMatch = function(cardId, card) {
	card.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			score++;
			alert("You found a match! Current score is: " + score);
		} else {
			alert("Sorry, try again.");
		}
	}
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");	
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage); 
	console.log(cards[cardId].suit);
	checkForMatch(cardId, this);	
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

var reset = function () {
	cardsInPlay = [];
	var childNodes = document.getElementById("game-board").childNodes;
	for (var i = 0; i < childNodes.length; i++) {
		childNodes[i].setAttribute("src", "images/back.png");
	}
}

createBoard();










