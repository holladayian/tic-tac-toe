var gameBoard = document.querySelector(".game-board");
var topLeft = document.querySelector(".top-left");
var topCenter = document.querySelector(".top-left");
var topRight = document.querySelector(".top-left");
var midLeft = document.querySelector(".top-left");
var midCenter = document.querySelector(".top-left");
var midRight = document.querySelector(".top-left");
var bottomLeft = document.querySelector(".top-left");
var bottomCenter = document.querySelector(".top-left");
var bottomRight = document.querySelector(".top-left");

var newGame = new Game();

gameBoard.addEventListener("click", checkClickLocation);
// window.addEventListener("onload", displayWins);


function updateDom(targetedSquare, letter) {
  if (letter === "o") {
    targetedSquare.innerHTML = "🤡"
  } else {
    targetedSquare.innerHTML = "🔪"
  }
}

function checkClickLocation(event) {
  newGame.gameBoardLogic(event.target)
}
