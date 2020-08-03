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
    for (var i = 0; i < this.board.length; i++) {
      if (checkClickLocation.contains(this.board[i])) {
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
  }

  checkWin() {
    for (var i = 0; i < this.winningBoards.length; i++) {
      this.checkThreeVector(i)
    }
  }

  checkThreeVector(i) {
    if (this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][1]] &&
       this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][2]]) {
         // return console.log('thats a w');
         this.saveWinningBoard();
         // i want to save a win

         // update a DOM
         setTimeout(this.resetBoard(), 2000);
         // set a timeout
         // resetboard
    }
  }

  checkDraw() {
    this.plays++;
    if (this.plays === 9) {
      console.log('ya done goofed')
    }
  }

  saveWinningBoard() {
    if (this.turn === this.player1.token) {
      this.player1.saveWinsToStorage();
      displayWin(this.player1.token)
    } else {
      this.player2.saveWinsToStorage()
      displayWin(this.player2.token)
    }
  }

  resetBoard() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    console.log('board reset');
  }
}
