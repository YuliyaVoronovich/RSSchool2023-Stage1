import CreateElement from './createElement.js';
import Game from './game.js';

import cards from "./matrix.json" assert { type: "json" };

const card = new Game();
card.getCard();
card.getCurrentMatrix();
console.log(card.matrix);


 // ========= TABLE
const body = document.querySelector('body');
const main = new CreateElement('main', ['main']);
body.append(main.element);

const table = new CreateElement('table', ['table']);
main.element.append(table.element);

const thead = new CreateElement('thead');
table.element.append(thead.element);

const theadTr = new CreateElement('tr');
thead.element.append(theadTr.element);

const theadTh = new CreateElement('th', ['head']);
theadTr.element.append(theadTh.element);

for (let i = 0; i < card.getLengthMatrix(); i++) {
  const theadTh = new CreateElement('th', ['line']);
  theadTr.element.append(theadTh.element);
}
const tbody = new CreateElement('tbody');
table.element.append(tbody.element);

for (let i = 0; i < card.getLengthMatrix(); i++) {
  const tbodyTr = new CreateElement('tr');
  tbody.element.append(tbodyTr.element); 

  const tbodyTd = new CreateElement('th', ['line']);
  tbodyTr.element.append(tbodyTd.element);

  for (let j = 0; j < card.getLengthMatrix(); j++) {
    const tbodyTd = new CreateElement('td');
    tbodyTr.element.append(tbodyTd.element);
  }
}