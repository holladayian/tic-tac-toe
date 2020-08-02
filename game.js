class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    // this.player1 = new Player(1, "🤡");
    // this.player2 = new Player(2, "🔪");
    this.turn = true;
    this.winningBoards = [
       [true, true, true, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, true, true, true, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, true, true, true],
       [true, 0, 0, true, 0, 0, true, 0, 0],
       [0, true, 0, 0, true, 0, 0, true, 0],
       [0, 0, true, 0, 0, true, 0, 0, true],
       [true, 0, 0, 0, true, 0, 0, 0, true],
       [0, 0, true, 0, true, 0, true, 0, 0],
     ];
  }

  // gameBoardLogic(targetedSquare) {
  //   if (targetedSquare.innerHTML === "") {
  //     console.log(targetedSquare);
  //     this.whosTurn(targetedSquare)
  //   }
  // }

  gameBoardLogic(targetedSquare) {
    for (var i = 0; i < this.board.length; i++) {
      if ((targetedSquare.classList.contains(this.board[i])) && (targetedSquare.innerHTML === "")) {
        // console.log(this.board[i]);
        this.whosTurn(targetedSquare);
        this.board[i] = this.turn;
        this.checkWin()
        // console.log(this.board[i]);
      }
    }
    // if (targetedSquare.innerHTML === "") {
    //   this.whosTurn(targetedSquare)
    // }
  }



  // loop through this.board
  // if targetedSquare.innerHTML.contains(this.gameboard[i]) {
  // fuckin do some shit at i
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

  checkWin() {

  }

  isItADraw() {

  }

  saveWinningBoard() {

  }

  resetBoard() {

  }
}
