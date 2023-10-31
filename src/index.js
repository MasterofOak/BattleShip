import './style.css';
import GameBoard from './gameboard';
import Player from './player';

addBlur();
formHandler();
const player = new Player('');
const bot = new Player('bot');
const playerBoard = new GameBoard();
const botBoard = new GameBoard();
playerBoard.placeShips();
console.log('player');
botBoard.placeShips();
console.log('bot');
generatePlayerGrid();
generateBotGrid();
const playerGrid = document.getElementById('player-field');
const botGrid = document.getElementById('bot-field');
function formHandler() {
  const form = document.getElementById('start');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    player.name = name;
    form.style.display = 'none';
    removeBlur();
    updateGrid(playerGrid, playerBoard);
  });
}
function generatePlayerGrid() {
  const fields = document.querySelector('.fields');
  const player = document.createElement('div');
  player.setAttribute('id', 'player-field');
  fields.appendChild(player);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const playerDiv = document.createElement('div');

      player.appendChild(playerDiv);
      playerDiv.dataset.column = i;
      playerDiv.dataset.row = j;
    }
  }
}
function generateBotGrid() {
  const fields = document.querySelector('.fields');
  const bot = document.createElement('div');
  bot.setAttribute('id', 'bot-field');
  fields.appendChild(bot);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const botDiv = document.createElement('div');

      bot.appendChild(botDiv);
      botDiv.addEventListener('click', (e) => attackHandler(e.target));
      botDiv.dataset.column = i;
      botDiv.dataset.row = j;
    }
  }
}
function updateGrid(grid, gameBoard) {
  const children = grid.childNodes;
  const board = gameBoard.getBattleField();
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = board[i][j];
      let index = (i === 0 ? '' : i.toString()) + j.toString();
      let child = children[index];
      if (cell.ship && grid.getAttribute('id') === 'player-field') {
        child.classList.add('ship');
      }
      if (cell.hit && cell.ship) {
        child.classList.add('attacked');
        child.classList.remove('ship');
        child.style.pointerEvents = 'none';
        continue;
      }
      if (cell.hit && !cell.ship) {
        child.classList.add('missed');
        child.classList.remove('ship');
        child.style.pointerEvents = 'none';
        continue;
      }
    }
  }
}
function attackHandler(element) {
  let x = element.dataset.column;
  let y = element.dataset.row;

  player.playerAttack(x, y, botBoard);
  updateGrid(botGrid, botBoard);

  bot.botAttack(playerBoard);
  updateGrid(playerGrid, playerBoard);

  if (playerBoard.isShipsSunk()) return showWinner(bot.name);
  if (botBoard.isShipsSunk()) return showWinner(player.name);
}
function addBlur() {
  const blur = document.createElement('div');
  blur.setAttribute('id', 'blur');
  document.body.append(blur);
}
function removeBlur() {
  const blur = document.getElementById('blur');
  document.body.removeChild(blur);
}
function showWinner(name) {
  const form = document.getElementById('winner');
  const winner = document.getElementById('winner-congrats');
  addBlur();
  form.style.display = 'block';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    location.reload();
  });
  winner.textContent = `Congratulations captain ${name} won!`;
}
