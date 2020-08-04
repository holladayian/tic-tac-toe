var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var turnDecider = document.querySelector(".turn");
var playableSpots = document.querySelectorAll(".square");

var newGame = new Game();

gameBoard.addEventListener("click", checkClickLocation);
window.addEventListener("onload", displayWin());

function checkClickLocation(event) {
  // create a variable that is an array that has all the elements of the classlist, call it clicked playedLocation (name this something that doesn't have something to do with the DOM)
  // then you can still pass in that array and pass that array in at i
  // newGame.board[i]
  newGame.gameBoardLogic(event.target.id);
  playToken(event.target);

}

function playToken(clickLocation) {
  if (!clickLocation.innerHTML) {
    clickLocation.innerHTML = newGame.turn;
    displayTurn()
  }
}

function displayWin() {
  newGame.player1.retrieveWinsFromStorage();
  newGame.player2.retrieveWinsFromStorage();
  player1Wins.innerHTML = `${newGame.player1.wins} Wins`;
  player2Wins.innerHTML = `${newGame.player2.wins} Wins`;
}

function displayTurn() {
  turnDecider.innerHTML = `${newGame.turn}s Turn!`
}

function clearBoard() {
  for (var i = 0; i < playableSpots.length; i ++) {
    playableSpots[i].innerHTML = ''
  }
}
