class Game {
  constructor() {
    this.board = [[], [], [], [], [], [], [], [], []]
    this.player1 = new Player();
    this.player2 = new Player();
    this.turn = true
  }

  gameBoardLogic(event) {

  }

  whosTurn() {
    if (this.turn) {
      this.turn = false
    } else {
      this.turn = true
    }

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
