export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }
  hit() {
    this.hitCount = this.hitCount + 1;
    return this.hitCount;
  }
  isSunk() {
    return this.hitCount === this.length ? true : false;
  }
}
