import CreateElement from '../createElement.js';
import FormComponent from './formComponent.js';
import { tableWrap, card, loadTable } from '../table.js';

//Form
const formWrap = new CreateElement('div', ['form-wrap']);

const form = new CreateElement('form', ['form'], '', { name: 'cardForm' });
//Class
const formComponent = new FormComponent();
formComponent.setForm(form.element);
formWrap.element.append(form.element);

const buttonRandom = new CreateElement('button', ['button', 'button-random'], 'Random', { name: 'random', type: 'button'});
form.element.append(buttonRandom.element);

const radioButtonsWrap = new CreateElement('div', ['form-radio-buttons']);
form.element.append(radioButtonsWrap.element);

const radioButtonWrap = new CreateElement('div', ['form-radio-btn']);
radioButtonsWrap.element.append(radioButtonWrap.element);

const radioButtonFirst = new CreateElement('input', ['input-radio'], '', { id: 'radio1', name: 'level', value: 'basic', type: 'radio', checked: 'checked' });
radioButtonWrap.element.append(radioButtonFirst.element);
const labelButtonFirst = new CreateElement('label', ['label-radio'], '5x5', { for: 'radio1' });
radioButtonWrap.element.append(labelButtonFirst.element);

const radioButtonWrapTwo = new CreateElement('div', ['form-radio-btn']);
radioButtonsWrap.element.append(radioButtonWrapTwo.element);

const radioButtonSecond = new CreateElement('input', ['input-radio'], '', { id: 'radio2', name: 'level', value: 'advanced', type: 'radio' });
radioButtonWrapTwo.element.append(radioButtonSecond.element);
const labelButtonSecond = new CreateElement('label', ['label-radio'], '10x10', { for: 'radio2' });
radioButtonWrapTwo.element.append(labelButtonSecond.element);

const radioButtonWrapThree = new CreateElement('div', ['form-radio-btn']);
radioButtonsWrap.element.append(radioButtonWrapThree.element);

const radioButtonThird = new CreateElement('input', ['input-radio'], '', { id: 'radio3', name: 'level', value: 'hacker', type: 'radio' });
radioButtonWrapThree.element.append(radioButtonThird.element);
const labelButtonThird = new CreateElement('label', ['label-radio'], '15x15', { for: 'radio3' });
radioButtonWrapThree.element.append(labelButtonThird.element);

const selectElementWrap = new CreateElement('div', ['select-wrapper'], '');
form.element.append(selectElementWrap.element);


/*Загрузка карточек в select*/
let cardsLevel = card.getCards();
createSelect();

function createSelect() {
  const selectElement = new CreateElement('select', ['select'], '', { name: 'cardName' });
  selectElementWrap.element.append(selectElement.element);
 
  const option = new CreateElement('option', ['name-card-option', 'first-option'], 'Select card', {disabled: 'disabled', selected: 'selected'});
  selectElement.element.append(option.element);

  for (let i = 0; i < cardsLevel.length; i++) {
    //const option = new CreateElement('option', ['name-card-option'], `${cardsLevel[i].name} ` + `★`.repeat(cardsLevel[i].grade));
    const option = new CreateElement('option', ['name-card-option'], cardsLevel[i].name);
    selectElement.element.append(option.element);
  }

  selectElement.element.addEventListener('change', (event) => {
    formComponent.changeName();
    const name = formComponent.changeName();
    card.setName(name);
    card.getCard();
    card.getCurrentMatrix();
    //new draw
    tableWrap.element.innerHTML = '';
    card.resetGame();
    loadTable();
  });
}

radioButtonsWrap.element.addEventListener('click', (event) => {
  const level = formComponent.changeLevel();
  card.setLevel(level);
  cardsLevel = card.getCards(level);
  selectElementWrap.element.innerHTML = '';
  createSelect();
});

buttonRandom.element.addEventListener('click', (event) => {
  card.setRandomCard();
  card.getCard();
  card.getCurrentMatrix();
  tableWrap.element.innerHTML = '';
  card.resetGame();
  loadTable();
});

export default formWrap;