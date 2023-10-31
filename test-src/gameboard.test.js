const GameBoard = require('../src/gameboard');
const Ship = require('../src/ship');
let ship;
let gameboard;
let battleField;
beforeEach(() => {
  ship = new Ship(5);
  gameboard = new GameBoard('Vlad');
  battleField = gameboard.getBattleField();
});
describe('Testing gameboard class', () => {
  it('Battlefield is created', () => {
    expect(battleField).not.toBeUndefined();
  });
  it('Ship is being placed on battlefield', () => {
    const x = 0;
    const y = 2;
    gameboard.placeShip(x, y, 5, 'x');
    expect(battleField[x][y].shipObject).not.toBeNull();
  });
  it('Battlefield is receiving attack', () => {
    const x = 0;
    const y = 0;
    gameboard.receiveAttack(x, y);
    expect(battleField[x][y].isHit).toBe(true);
  });
  it('Ship is received attack on Battlefield', () => {
    const x = 0;
    const y = 2;
    gameboard.receiveAttack(x, y);
    expect(battleField[x][y].isHit).toBe(true);
  });
  it('Ships are sinking', () => {
    const x = 0;
    const y = 2;
    gameboard.placeShip(x, y, 5);
    gameboard.receiveAttack(x, y);
    gameboard.receiveAttack(x, y + 1);
    gameboard.receiveAttack(x, y + 2);
    gameboard.receiveAttack(x, y + 3);
    gameboard.receiveAttack(x, y + 4);
    expect(gameboard.sunkShips).toBe(1);
  });
});
