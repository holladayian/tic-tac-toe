class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins;
  }
  saveWinsToStorage() {
    this.retrieveWinsFromStorage();
    this.wins++;
    localStorage.setItem(this.id, JSON.stringify(this.wins));
  }
  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(this.id)) || 0;
  }
  // saveWinsToStorage() {
  //   this.retrieveWinsFromStorage();
  //   this.wins++;
  //   var `player${this.id}WinString` = JSON.stringify(this.wins);
  //   localStorage.setItem(`player${this.id}StoredWins`, `player${this.id}WinString`);
  //   console.log(this.wins)
  // }
  // retrieveWinsFromStorage() {
  //   var `player${this.id}SavedWins` = localStorage.getItem(`player${this.id}StoredWins`);
  //   this.wins = JSON.parse(`player${this.id}SavedWins`) || 0;
  //   console.log(`player${this.id}SavedWins`)
  // }
}
