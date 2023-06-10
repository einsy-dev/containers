/* eslint-disable linebreak-style */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Игрок уже существует');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    players.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
