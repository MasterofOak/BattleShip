const Ship = require('../src/ship')
describe('Testing ship class', () => {
  const ship = new Ship(4);
  it('Ship is taking damage', () => {
    expect(ship.hit()).toBe(1);
  });
  it('Ship is sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.checkIsSunk()).toBe(true);
  });
});
