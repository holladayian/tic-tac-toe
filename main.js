var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");

var newGame = new Game();

gameBoard.addEventListener("click", checkClickLocation);
// window.addEventListener("onload", displayWins);

function checkClickLocation(event) {
  // create a variable that is an array that has all the elements of the classlist, call it clicked playedLocation (name this something that doesn't have something to do with the DOM)
  // then you can still pass in that array and pass that array in at i
  // newGame.board[i]
  var playedLocation = event.target.classList;
  newGame.gameBoardLogic(playedLocation);
}

function playToken() {

}

function displayWin() {
  player1Wins.innerHTML = `${newGame.player1.wins} Wins`;
  player2Wins.innerHTML = `${newGame.player2.wins} Wins`;
}
