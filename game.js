class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🤡");
    this.player2 = new Player(2, "🔪");
    this.complete = false;
    this.turn = this.player1.token;
    this.plays = 0;
    this.winner;
    this.winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
  }

  gameBoardLogic(clickLocation) {
    if (this.board.includes(clickLocation)) {
      var boardIndex = this.board.indexOf(clickLocation);
      this.board[boardIndex] = this.turn;
    }
  }

  checkGameOver() {
    if (!this.checkWin()) {
      this.checkDraw();
    }
  }

  nextTurn() {
    if (this.turn === this.player2.token) {
      this.turn = this.player1.token;
    } else {
      this.turn = this.player2.token;
    }
  }

  checkWin() {
    for (var i = 0; i < this.winningBoards.length; i++) {
      this.checkThreeVector(i);
    }
    return this.complete
  }

  checkThreeVector(i) {
    if (this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][1]] &&
       this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][2]]) {
         this.runWinCondish();
    }
  }

  runWinCondish() {
    this.winner = this.turn;
    this.saveWinningBoard();
    this.resetBoard();
  }

  checkDraw() {
    this.plays++;
    if (this.plays === 9) {
      this.winner = "NOBODY";
      this.resetBoard();
    }
  }

  saveWinningBoard() {
    if (this.turn === this.player1.token) {
      this.player1.saveWinsToStorage();
    } else {
      this.player2.saveWinsToStorage();
    }
  }

  resetBoard() {
    this.complete = true;
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
  }

  resetPlays() {
    this.complete = false;
    this.plays = 0;
  }

  retrievePlayerWins(id) {
    if (id === 1) {
      this.player1.retrieveWinsFromStorage();
      return this.player1.wins.length;
    } else {
      this.player2.retrieveWinsFromStorage();
      return this.player2.wins.length;
    }
  }
}
