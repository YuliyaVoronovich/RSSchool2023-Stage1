import CreateElement from './createElement.js';
import Game from './game.js';
import cards from "./matrix.json" assert { type: "json" };

export const card = new Game();
card.getCard();
card.getCurrentMatrix();
console.log(card.matrix);

 const tableWrap = new CreateElement('div', ['table-wrap']);
 
 const table = new CreateElement('table', ['table']);
 tableWrap.element.append(table.element);
 
 const thead = new CreateElement('thead');
 table.element.append(thead.element);
 
 const theadTr = new CreateElement('tr');
 thead.element.append(theadTr.element);
 
 const theadTh = new CreateElement('th', ['head']);
 theadTr.element.append(theadTh.element);
 
 for (let i = 0; i < card.getLengthMatrix(); i++) {
   const theadTh = new CreateElement('th', ['line', 'small-line'], card.getTopLines()[i].map(item => `<span>${item}<br></span>`).join(''));
   theadTr.element.append(theadTh.element);
 }
 const tbody = new CreateElement('tbody');
 table.element.append(tbody.element);
 
 for (let i = 0; i < card.getLengthMatrix(); i++) {
   const tbodyTr = new CreateElement('tr');
   tbody.element.append(tbodyTr.element); 
 
   const tbodyTd = new CreateElement('th', ['line', 'small-line', 'left-line'], card.getLeftLines()[i].map(item => `<span>${item} </span>`).join(''));
   tbodyTr.element.append(tbodyTd.element);
 
   for (let j = 0; j < card.getLengthMatrix(); j++) {
     const tbodyTd = new CreateElement('td', ['white'], '', {id: `${i}_${j}`});
     tbodyTr.element.append(tbodyTd.element);
   }
 }
 
 tbody.element.addEventListener('click', (event) => {
   event.target.classList.toggle('black');
   event.target.classList.remove('cross');
 });
 
 tbody.element.addEventListener('contextmenu', (event) => {
   event.preventDefault();
   event.target.classList.toggle('cross');
   event.target.classList.remove('black');
 });

 export {tableWrap};