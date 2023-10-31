import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.battleField = this.createBattleField();
    this.sunkShips = 0;
  }
  createBattleField() {
    const battleField = new Array(10);
    for (let i = 0; i < 10; i++) {
      battleField[i] = [];
      for (let j = 0; j < 10; j++) {
        battleField[i][j] = { ship: null, hit: false };
      }
    }

    return battleField;
  }
  getBattleField() {
    return this.battleField;
  }
  receiveAttack(x, y) {
    const cell = this.battleField[x][y];
    if (!cell.ship) return (cell.hit = true);
    cell.ship.hit();
    cell.hit = true;
    return cell.ship.isSunk() ? this.sunkShips++ : this.sunkShips;
  }
  placeShipsRandom() {
    [5, 4, 3, 3, 2, 2].forEach((length) => {
      const ship = new Ship(length);
      let x = this.randomNum(length);
      let y = this.randomNum(length);
      let axis = Math.floor(Math.random() * 2);
      for (let i = 0; i < length; i++) {
        if (axis === 0) {
          this.battleField[x][y + i].ship = ship;
        } else {
          this.battleField[x + i][y].ship = ship;
        }
      }
    });
  }
  placeShips() {
    const ship1 = new Ship(5);
    const ship2 = new Ship(4);
    const ship3 = new Ship(3);
    const ship4 = new Ship(3);
    const ship5 = new Ship(2);
    const ship6 = new Ship(2);
    const shipArr = [ship1, ship2, ship3, ship4, ship5, ship6];
    for (let i = 0; i < shipArr.length; i++) {
      let x = this.randomNum(shipArr[i].length);
      let y = this.randomNum(shipArr[i].length);
      let axis = Math.floor(Math.random() * 2) === 0 ? 'x' : 'y';
      if (!this.isShip(x, y, shipArr[i].length, axis)) {
        for (let j = 0; j < shipArr[i].length; j++) {
          if (axis === 'x') {
            this.battleField[x][y + j].ship = shipArr[i];
          } else {
            this.battleField[x + j][y].ship = shipArr[i];
          }
        }
      } else {
        i--;
      }
    }
  }
  isHit(x, y) {
    return this.battleField[x][y].hit ? true : false;
  }
  isShip(x, y, length, axis) {
    for (let i = 0; i < length; i++) {
      if (axis === 'x') {
        if (this.battleField[x][y + i].ship) return true;
      } else {
        if (this.battleField[x + i][y].ship) return true;
      }
    }
    return false;
  }
  randomNum(length) {
    let random = Math.floor(Math.random() * 10);
    return random + length >= 10 ? this.randomNum(length) : random;
  }
  isShipsSunk() {
    if (this.sunkShips === 6) return true;
  }
}
