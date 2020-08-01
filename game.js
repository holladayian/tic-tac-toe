class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    // this.player1 = new Player(1, "🤡");
    // this.player2 = new Player(2, "🔪");
    this.turn = true
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
        console.log(this.board[i]);
        this.whosTurn(targetedSquare)
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

  whoWon() {

  }

  isItADraw() {

  }

  saveWinningBoard() {

  }

  resetBoard() {

  }
}
