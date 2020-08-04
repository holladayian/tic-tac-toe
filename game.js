class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🤡");
    this.player2 = new Player(2, "🔪");
    this.reset = false;
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

  // findClickLocation()

  gameBoardLogic(clickLocation) {
    if (this.board.includes(clickLocation) && (!this.reset)) {
      var boardIndex = this.board.indexOf(clickLocation);
      this.board[boardIndex] = this.turn;
      this.whosTurn();

    }
  }

  checkGameOver() {
    this.checkWin();
    this.checkDraw();
  }

  whosTurn() {
    if (this.turn === this.player2.token) {
      this.turn = this.player1.token;
    } else {
      this.turn = this.player2.token;
      // displayTurn(this.player1.token)
    }
    // displayTurn()
  }

  checkWin() {
    for (var i = 0; i < this.winningBoards.length; i++) {
      this.checkThreeVector(i)
    }
  }

  checkThreeVector(i) {
    if (this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][1]] &&
       this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][2]]) {
         this.saveWinningBoard();
         this.resetBoard();
    }
  }

  checkDraw() {
    this.plays++;
    if (this.plays === 9) {
      this.resetBoard();

    }
  }

  saveWinningBoard() {
    if (this.turn === this.player2.token) {
      this.winner = this.player1.token;
      this.player1.saveWinsToStorage();
    } else {
      this.winner = this.player2.token;
      this.player2.saveWinsToStorage();
    }
  }

  resetBoard() {
    this.reset = true;
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];

  }

  resetPlays() {
    this.reset = false;
    this.plays = 0;
  }


}
