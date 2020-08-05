var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var turnDecider = document.querySelector(".turn");
var playableSpots = document.querySelectorAll(".square");
var player1Boards = document.querySelectorAll(".player-1-boards");
var player2Boards = document.querySelectorAll(".player-2-boards");

var newGame = new Game();

window.addEventListener("onload", loadWins());
gameBoard.addEventListener("click", checkClickLocation);

function loadWins() {
  var player1WinList = newGame.retrievePlayerWins(1);
  var player2WinList = newGame.retrievePlayerWins(2);
  player1Wins.innerHTML = `${player1WinList.length} Wins`;
  player2Wins.innerHTML = `${player2WinList.length} Wins`;
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
