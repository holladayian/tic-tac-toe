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
  addMiniBoard(player1WinList, player1Wins);
  addMiniBoard(player2WinList, player2Wins);
}

function addMiniBoard(playerWins, playerBoard) {
  for (var i = 0; i < playerWins.length; i++) {
    if (playerWins[i].length === 2) {
      playerBoard.insertAdjacentHTML('afterbegin',
      `
      <section class="mini-board">
        <section class="top left square">${playerWins[i][0]}</section>
        <section class="top square">${playerWins[i][1]}</section>
        <section class="top right square">${playerWins[i][2]}</section>
        <section class="left square">${playerWins[i][3]}</section>
        <section class="square">${playerWins[i][4]}</section>
        <section class="right square">${playerWins[i][5]}</section>
        <section class="bottom left square">${playerWins[i][6]}</section>
        <section class="bottom square">${playerWins[i][7]}</section>
        <section class="bottom right square">${playerWins[i][8]}</section>
      </section>
      `)
    }
  }
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
