class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];
  }
  saveWinsToStorage() {
    this.retrieveWinsFromStorage();
    this.wins.push(newGame.board);
    localStorage.setItem(this.id, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(this.id)) || [];
  }
}
