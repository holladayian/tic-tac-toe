class Game {
  constructor() {
    this.board = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
    // this.player1 = new Player(1, "🤡");
    // this.player2 = new Player(2, "🔪");
    this.turn = true
  }

  gameBoardLogic(targetedSquare) {
    if (targetedSquare.innerHTML === "") {
      console.log(targetedSquare);
      this.whosTurn(targetedSquare)
    }
  }


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
