import CreateElement from './createElement.js';
import Game from './game.js';

export const card = new Game();
card.getCard();
const tableWrap = new CreateElement('div', ['table-wrap']);
loadTable();

export function loadTable(matrixState = null) {

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
      if (matrixState && matrixState[i][j] === 1) {
        tbodyTd.element.classList.add('black');
      }      
      tbodyTr.element.append(tbodyTd.element);
    }
  }

  tbody.element.addEventListener('click', (event) => {
    event.preventDefault();   
    if (event.target.classList.contains('cell')) {
      if (!card.isTimer) {
        card.startTime();
        card.isTimer = true;
      }
      event.target.classList.toggle('black');
      event.target.classList.remove('cross');
      card.pushMatrixState(event);
    }
  });

  thead.element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  tbody.element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('cell')) {
      event.target.classList.toggle('cross');
      event.target.classList.remove('black');
    }
  });
}
export { tableWrap };