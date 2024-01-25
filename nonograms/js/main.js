import CreateElement from './createElement.js';
import Game from './game.js';
import tableWrap from './table.js';

import cards from "./matrix.json" assert { type: "json" };

const card = new Game();
card.getCard();

 // ========= LAYOUT
const body = document.querySelector('body');
const container = new CreateElement('div', ['container']);
body.append(container.element);

const header = new CreateElement('header', ['header']);
container.element.append(header.element);

const main = new CreateElement('main', ['main']);
container.element.append(main.element);

const aside = new CreateElement('aside', ['aside']);
main.element.append(aside.element);

const gameField = new CreateElement('div', ['game-field']);
main.element.append(gameField.element);

const buttonsGame = new CreateElement('div', ['buttons-field']);
gameField.element.append(buttonsGame.element);

 // ========= TABLE
gameField.element.append(tableWrap.element);