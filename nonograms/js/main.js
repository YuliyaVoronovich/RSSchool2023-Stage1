import CreateElement from './createElement.js';
import LocalStorage from './localStorage.js';
import { tableWrap, card, loadTable}  from './table.js';
import {timerWrap, timerInner} from './timer/timer.js';
import formWrap from './form/form.js';

export const localStor = new LocalStorage();
console.log(card.matrix);

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
aside.element.append(formWrap.element);

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

buttonSave.element.addEventListener('click', (event) => {
  const currentTime = timerInner.element.innerHTML;
  localStor.saveState(card, currentTime);
});

buttonContinue.element.addEventListener('click', (event) => {

  const ls = localStor.loadState();
  card.matrix = ls.card.matrix;
  card.matrixState = ls.card.matrixState;
  tableWrap.element.innerHTML = '';
  loadTable(ls.card.matrixState);
});

 // ========= TABLE
gameField.element.append(tableWrap.element);