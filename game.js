class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🤡");
    this.player2 = new Player(2, "🔪");
    this.reset = false;
    this.turn = this.player1.token;
    this.plays = 0;
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
      this.whosTurn();
      this.board[boardIndex] = this.turn;
      this.checkWin();
      this.checkDraw();
    }
  }

  whosTurn() {
    displayTurn();
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
         updateWinner(this.turn);
         this.resetBoard()
    }
  }

  checkDraw() {
    this.plays++;
    if (this.plays === 9) {
      console.log('ya done goofed');
      this.resetBoard()

    }
  }

  saveWinningBoard() {
    if (this.turn === this.player1.token) {
      this.player1.saveWinsToStorage();
    } else {
      this.player2.saveWinsToStorage();
    }
    updateWins()
  }

  resetBoard() {
    this.reset = true;
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.plays = 0;
    window.setTimeout(this.resetTimeout, 2000);
  }
  resetTimeout() {
    clearBoard(this.board);
    newGame.reset = false;
    console.log("🤡");
  }
}
