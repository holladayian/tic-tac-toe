class Game {
  constructor() {
    this.board = ["top-left", "top-center", "top-right", "mid-left", "mid-center", "mid-right", "bottom-left", "bottom-center", "bottom-right"];
    // this.player1 = new Player(1, "🤡");
    // this.player2 = new Player(2, "🔪");
    this.turn = true;
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

  // this doesn't separate the DOM from the data model
  // switch targetedSquare out for checkClickLocation

  gameBoardLogic(checkClickLocation) {
    for (var i = 0; i < this.board.length; i++) {
      if (checkClickLocation.contains(this.board[i])) {
        this.whosTurn();
        // maybe swith true/false with this.player1.token/this.player2.token
        this.board[i] = this.turn;
        this.checkWin();
        this.checkDraw()

      }
    }
  }

  whosTurn() {
    if (this.turn) {
      this.turn = false;
      // this.playO(targetedSquare);
    } else {
      this.turn = true;
      // this.playX(targetedSquare);
    }
  }


  // playO(targetedSquare) {
  //   updateDom(targetedSquare, "o")
  // }
  //
  // playX(targetedSquare) {
  //   updateDom(targetedSquare, "x")
  // }


  checkWin() {
    for (var i = 0; i < this.winningBoards.length; i++) {
      this.checkThreeVector(i)
    }
  }

  checkThreeVector(i) {
      if (this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][1]] &&
         this.board[this.winningBoards[i][0]] === this.board[this.winningBoards[i][2]]) {
        console.log('thats a w')
      // } else {
      //   this.checkDraw()
      // }
    }
  }



  checkDraw() {
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
