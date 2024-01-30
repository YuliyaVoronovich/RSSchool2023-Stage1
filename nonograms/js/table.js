import CreateElement from './createElement.js';
import Game from './game.js';
import PopUp from './popUp.js';
import { timerInner } from './timer/timer.js';
import { localStor, modalWrapper, modalWorldText, modalImg } from './main.js';

let popUp = null;
export const card = new Game();
card.getCard();
const audio = new Audio();
audio.currentTime = 0;

const tableWrap = new CreateElement('div', ['table-wrap']);
loadTable();

export function loadTable(matrixState = null, isSolution = false) {

  const table = new CreateElement('table', ['table']);
  tableWrap.element.append(table.element);

  const thead = new CreateElement('thead');
  table.element.append(thead.element);

  const theadTr = new CreateElement('tr');
  thead.element.append(theadTr.element);

  const theadTh = new CreateElement('th', ['head']);
  theadTr.element.append(theadTh.element);

  for (let i = 0; i < card.matrix.length; i++) {
    const theadTh = new CreateElement('th', ['line'], card.getTopLines()[i].map(item => `<span>${item}<br></span>`).join(''));
    theadTr.element.append(theadTh.element);
  }
  const tbody = new CreateElement('tbody');
  table.element.append(tbody.element);

  for (let i = 0; i < card.matrix.length; i++) {
    const tbodyTr = new CreateElement('tr');
    tbody.element.append(tbodyTr.element);

    const tbodyTd = new CreateElement('th', ['line', 'left-line'], card.getLeftLines()[i].map(item => `<span>${item} </span>`).join(''));
    tbodyTr.element.append(tbodyTd.element);

    for (let j = 0; j < card.matrix.length; j++) {
      const tbodyTd = new CreateElement('td', ['cell', 'white'], '', { id: `${i}_${j}` });
      if (matrixState && matrixState[i][j] === 1 || isSolution && card.matrix[i][j] === 1) {
        tbodyTd.element.classList.add('black');
      }
      tbodyTr.element.append(tbodyTd.element);
    }
  }

  tbody.element.addEventListener('click', (event) => {
    if (card.isSolution) return false;
    event.preventDefault();
    if (event.target.classList.contains('cell')) {
      if (!card.isTimer) {
        card.startTime();
        card.isTimer = true;
      }
      event.target.classList.toggle('black');
      event.target.classList.remove('cross');
      card.pushMatrixState(event);
      //audio
      audio.src = `./audio/up.wav`;
      audio.play();

      if (card.checkSolution()) {
        card.isSolution = true;
        const currentTime = timerInner.element.innerHTML;
        localStor.saveWin(card, currentTime);
        //open popup
        const currentPopUp = modalWrapper.element;
        console.log(currentPopUp);
        popUp = new PopUp(currentPopUp);

        const array = currentTime.split(':');
        const seconds = +array[0] * 60 + +array[1];
        modalWorldText.element.textContent = `Great! You have solved the nonogram in ${seconds} seconds!`;
        popUp.openPopUp();
        card.stoptTime();
        //audio
        audio.src = `./audio/win.mp3`;
        audio.play();

        modalImg.element.addEventListener('click', event => {
          popUp.closePopUp(event.target.closest('.modal-wrapper'));
          event.preventDefault();
        });
      }
    }
  });

  thead.element.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  tbody.element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (card.isSolution) return false;
    if (event.target.classList.contains('cell')) {
      event.target.classList.toggle('cross');
      event.target.classList.remove('black');
      card.pushMatrixState(event);
      //audio
      audio.src = `./audio/cross.wav`;
      audio.play();
    }
  });


}
export { tableWrap };