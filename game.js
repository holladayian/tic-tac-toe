class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.player1 = new Player(1, "🤡");
    this.player2 = new Player(2, "🔪");
    this.turn;
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

  gameBoardLogic(checkClickLocation) {
    // var boardIndex = this.board.indexOf(checkClickLocation)
    for (var i = 0; i < this.board.length; i++) {
      if (checkClickLocation === this.board[i]) {
        this.whosTurn();
        this.board[i] = this.turn;
        this.checkWin();
        this.checkDraw()
      }
    }
  }

  whosTurn() {
    if (this.turn === this.player2.token) {
      this.turn = this.player1.token;
    } else {
      this.turn = this.player2.token;
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
         console.log('ya done won');
         this.saveWinningBoard();
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
      this.player2.saveWinsToStorage()
    }
    displayWin()
  }

  resetBoard() {
    console.log("board reset run");
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    this.plays = 0;
    window.setTimeout(clearBoard, 2000);
  }
}
