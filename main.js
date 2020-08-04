var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var turnDecider = document.querySelector(".turn");
var playableSpots = document.querySelectorAll(".square");

var newGame = new Game();

gameBoard.addEventListener("click", checkClickLocation);
window.addEventListener("onload", loadWins());

function loadWins() {
  player1Wins.innerHTML = `${newGame.retrievePlayerWins(1)} Wins`;
  player2Wins.innerHTML = `${newGame.retrievePlayerWins(2)} Wins`;
  updateTurnDecider();
}

function checkClickLocation(event) {
  if (!newGame.reset) {
    newGame.gameBoardLogic(event.target.id);
    updateTurnDecider();
    updateBoard();
    newGame.checkGameOver();
  }
  checkToSeeIfWeNeedToResetTheGame()
}

function checkToSeeIfWeNeedToResetTheGame() {
  if (newGame.reset) {
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
