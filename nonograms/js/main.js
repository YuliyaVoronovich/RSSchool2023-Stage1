import CreateElement from './createElement.js';
import { tableWrap, card}  from './table.js';
import timerWrap from './timer/timer.js';

import cards from "./matrix.json" assert { type: "json" };
console.log(card);

 // ========= LAYOUT
const body = document.querySelector('body');
const container = new CreateElement('div', ['container']);
body.append(container.element);

const header = new CreateElement('header', ['header']);
container.element.append(header.element);

const title = new CreateElement('h1', ['title'], 'NONOGRAMM');
header.element.append(title.element);

const main = new CreateElement('main', ['main']);
container.element.append(main.element);

 // ========= ASIDE
const aside = new CreateElement('aside', ['aside']);
main.element.append(aside.element);

aside.element.append(timerWrap.element);

const gameField = new CreateElement('div', ['game-field']);
main.element.append(gameField.element);

 // ========= BUTTONS
const buttonsGame = new CreateElement('div', ['buttons-field']);
gameField.element.append(buttonsGame.element);

const buttonSolution = new CreateElement('button', ['button'], 'Solution');
buttonsGame.element.append(buttonSolution.element);

const buttonSave = new CreateElement('button', ['button'], 'Save');
buttonsGame.element.append(buttonSave.element);

const buttonContinue = new CreateElement('button', ['button'], 'Continue');
buttonsGame.element.append(buttonContinue.element);

const buttonReset = new CreateElement('button', ['button'], 'Reset');
buttonsGame.element.append(buttonReset.element);

buttonReset.element.addEventListener('click', (event) => {
  card.resetGame();
});

 // ========= TABLE
gameField.element.append(tableWrap.element);