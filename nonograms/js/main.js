import CreateElement from './createElement.js';
import LocalStorage from './localStorage.js';
import { tableWrap, card, loadTable, audio } from './table.js';
import { timerWrap, timerInner } from './timer/timer.js';
import formWrap from './form/form.js';

export const localStor = new LocalStorage();

// ========= LAYOUT
const body = document.querySelector('body');
const container = new CreateElement('div', ['container']);
body.append(container.element);

const header = new CreateElement('header', ['header']);
container.element.append(header.element);

const title = new CreateElement('h1', ['title'], 'NONOGRAMS');
header.element.append(title.element);

const buttonWrapper = new CreateElement('div', ['button-wrapper']);
header.element.append(buttonWrapper.element);

const buttonTheme = new CreateElement('button', ['button-theme']);
buttonWrapper.element.append(buttonTheme.element);

const buttonSound = new CreateElement('button', ['button-sound']);
buttonWrapper.element.append(buttonSound.element);

const main = new CreateElement('main', ['main']);
container.element.append(main.element);

// ========= ASIDE
const aside = new CreateElement('aside', ['aside']);
main.element.append(aside.element);

aside.element.append(timerWrap.element);
aside.element.append(formWrap.element);

const resultWrap = new CreateElement('div', ['result']);
aside.element.append(resultWrap.element);

const resultTitle = new CreateElement('h3', ['result-title'], 'RESULTS');
resultWrap.element.append(resultTitle.element);

const ulResult = new CreateElement('ul', ['list'], '');
resultWrap.element.append(ulResult.element);

const results = localStor.loadResults();
if (results) {
  for (let i = 0; i < results.length; i++) {
    const time = (+results[i].time >= 60)? `${+Math.round(results[i].time / 60)} : ${results[i].time % 60} s`: `${+results[i].time} s`;
    const li = new CreateElement('li', ['item'], `${results[i].card.name} (${results[i].card.level}) - ${time}`);
    ulResult.element.append(li.element);
  }
}

const gameField = new CreateElement('div', ['game-field']);
main.element.append(gameField.element);

// ========= BUTTONS
const buttonsGame = new CreateElement('div', ['buttons-field']);
gameField.element.append(buttonsGame.element);

const buttonSolution = new CreateElement('button', ['button'], 'Solution');
buttonsGame.element.append(buttonSolution.element);

const buttonSave = new CreateElement('button', ['button', 'button-save'], 'Save');
buttonsGame.element.append(buttonSave.element);

const buttonContinue = new CreateElement('button', ['button', 'button-continue'], 'Continue');
if (!localStor.isStateLs()) {
  buttonContinue.element.classList.add('disabled');
}
buttonsGame.element.append(buttonContinue.element);

const buttonReset = new CreateElement('button', ['button'], 'Reset');
buttonsGame.element.append(buttonReset.element);

buttonSolution.element.addEventListener('click', (event) => {
  card.isSolution = true;
  tableWrap.element.innerHTML = '';
  loadTable('', card.isSolution);
  buttonSave.element.classList.add('disabled');
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
  card.isSolution = false;
  buttonSave.element.classList.remove('disabled');
  loadTable(ls.card.matrixState);
});

buttonReset.element.addEventListener('click', (event) => {
  card.resetGame();
  buttonSave.element.classList.remove('disabled');
});

buttonTheme.element.addEventListener('click', (event) => {
  body.classList.toggle('dark');
});

buttonSound.element.addEventListener('click', (event) => {
  event.target.classList.toggle('button-sound-off');
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
});

// ========= TABLE
gameField.element.append(tableWrap.element);

// ========= MODAL
export const modalWrapper = new CreateElement('div', ['modal-wrapper'], '', { 'id': 'modal-result' });
document.querySelector('body').append(modalWrapper.element);

const modalResult = new CreateElement('div', ['modal-result-wrap', 'modal-content']);
modalWrapper.element.append(modalResult.element);

export const modalImg = new CreateElement('img', ['img-delete'], '', { 'src': './img/cross.png', 'alt': 'delete' });
modalResult.element.append(modalImg.element);

const modalHeading = new CreateElement('h3', ['heading'], '');
modalResult.element.append(modalHeading.element);

export const modalWorldText = new CreateElement('div', ['modal-world__text']);
modalResult.element.append(modalWorldText.element);
