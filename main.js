var gameBoard = document.querySelector(".game-board");
var player1Wins = document.querySelector(".player-1-wins");
var player2Wins = document.querySelector(".player-2-wins");
var turnDecider = document.querySelector(".turn");
var playableSpots = document.querySelectorAll(".square");

var newGame = new Game();

gameBoard.addEventListener("click", checkClickLocation);
// window.addEventListener("onload", updateWins());



function checkClickLocation(event) {
  updateTurnDecider();
  if (!newGame.reset) {
    newGame.gameBoardLogic(event.target.id);
    updateBoard();
    newGame.checkGameOver();
  }
  if (newGame.reset) {
    window.setTimeout(resetGame, 2000);
  }
}

function updateTurnDecider() {
  turnDecider.innerHTML = `${newGame.turn}s Turn`
}


function resetGame() {
  newGame.resetPlays();
  updateBoard();
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
