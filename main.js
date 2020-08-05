var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var turnDecider = document.querySelector(".turn");
var playableSpots = document.querySelectorAll(".square");

var newGame = new Game();

window.addEventListener("onload", loadWins());
gameBoard.addEventListener("click", checkClickLocation);

function loadWins() {
  player1Wins.innerHTML = `${newGame.retrievePlayerWins(1).length} Wins`;
  player2Wins.innerHTML = `${newGame.retrievePlayerWins(2).length} Wins`;
  updateTurnDecider();
}

function checkClickLocation(event) {
  if (!newGame.complete) {
    makeMoves(event);
  }
  checkToSeeIfWeNeedToResetTheGame();
}

function makeMoves(event) {
  newGame.gameBoardLogic(event.target.id);
  updateBoard();
  updateTurnDecider();
}

function checkToSeeIfWeNeedToResetTheGame() {
  if (newGame.complete) {
    loadWins();
    updateWinner();
    window.setTimeout(resetGame, 2000);
  }
}

function updateTurnDecider() {
  turnDecider.innerHTML = `${newGame.turn}s Turn`
}

function updateWinner() {
  turnDecider.innerHTML = `${newGame.winner} WINS`
}

function resetGame() {
  newGame.resetPlays();
  updateBoard();
  updateTurnDecider();
}

function updateBoard() {
  for (var i = 0; i < playableSpots.length; i++) {
    if (newGame.board[i].length === 2) {
      playableSpots[i].innerHTML = newGame.board[i];
    } else {
      playableSpots[i].innerHTML = '';
    }
  }
}
