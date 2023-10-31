export default class Player {
  constructor(name) {
    this.name = name;
  }
  playerAttack(x, y, enemyBoard) {
    return enemyBoard.receiveAttack(x, y);
  }
  botAttack(enemyBoard) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    if (enemyBoard.isHit(x, y)) return this.botAttack(enemyBoard);
    return enemyBoard.receiveAttack(x, y);
  }
}

