class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    // this.player1 = new Player(1, "🤡");
    // this.player2 = new Player(2, "🔪");
    this.turn = true;
    this.plays = 0;
    // this.winningBoards = [
    //    [true, true, true, this.board[3], this.board[4], this.board[5], this.board[6], this.board[7], this.board[8]],
    //    [this.board[0], this.board[1], this.board[2], true, true, true, this.board[6], this.board[7], this.board[8]],
    //    [this.board[0], this.board[1], this.board[2], this.board[3], this.board[4], this.board[5], true, true, true],
    //    [true, this.board[1], this.board[2], true, this.board[4], this.board[5], true, this.board[7], this.board[8]],
    //    [this.board[0], true, this.board[2], this.board[3], true, this.board[5], this.board[6], true, this.board[8]],
    //    [this.board[0], this.board[1], true, this.board[3], this.board[4], true, this.board[6], this.board[7], true],
    //    [true, this.board[1], this.board[2], this.board[3], true, this.board[5], this.board[6], this.board[7], true],
    //    [this.board[0], this.board[1], true, this.board[3], true, this.board[5], true, this.board[7], this.board[8]],
    //  ];
  }

  gameBoardLogic(targetedSquare) {
    for (var i = 0; i < this.board.length; i++) {
      if ((targetedSquare.classList.contains(this.board[i])) && (targetedSquare.innerHTML === "")) {
        this.whosTurn(targetedSquare);
        this.board[i] = this.turn;
        // this.updateWinningBoards(i);
        this.checkWin(i);
      }
    }
  }

  // updateWinningBoards(boardLoop) {
  //   for (var j = 0; j < this.winningBoards.length; j++) {
  //     if (this.winningBoards[j][boardLoop] !== true) {
  //       this.winningBoards[j][boardLoop] = this.board[boardLoop]
  //     }
  //   }
  // }

  // check css to make sure board doesnt get overlayed

  whosTurn(targetedSquare) {
    if (this.turn) {
      this.turn = false;
      this.playO(targetedSquare);
    } else {
      this.turn = true;
      this.playX(targetedSquare);
    }
  }

  playO(targetedSquare) {
    updateDom(targetedSquare, "o")
  }

  playX(targetedSquare) {
    updateDom(targetedSquare, "x")
  }

  checkWin(boardLoop) {
    // console.log(this.board);
    // console.log(this.winningBoards[0]);
    // for (var i = 0; i < this.winningBoards.length; i++) {
    //   if (this.board === this.winningBoards[i]) {
    //     console.log('thats a w')
    //   }
    // }
    if ((this.board[0] === this.board[1] && this.board[0] === this.board[2]) ||
        (this.board[3] === this.board[4] && this.board[3] === this.board[5]) ||
        (this.board[6] === this.board[7] && this.board[6] === this.board[8]) ||
        (this.board[0] === this.board[3] && this.board[0] === this.board[6]) ||
        (this.board[1] === this.board[4] && this.board[1] === this.board[7]) ||
        (this.board[2] === this.board[5] && this.board[2] === this.board[8]) ||
        (this.board[0] === this.board[4] && this.board[0] === this.board[8]) ||
        (this.board[6] === this.board[4] && this.board[6] === this.board[2])) {
      console.log('thats a w')
    } else {
      this.checkDraw(boardLoop)
    }
  }

  checkDraw(boardLoop) {
    this.plays++;
    if (this.plays === 9) {
      console.log('ya done goofed')
    }
  }

  saveWinningBoard() {

  }

  resetBoard() {

  }
}
