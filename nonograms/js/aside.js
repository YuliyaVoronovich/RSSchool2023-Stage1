import CreateElement from './createElement.js';
const aside = new CreateElement('aside', ['aside']);

const timerWrap = new CreateElement('div', ['timer-wrap']);
aside.element.append(timerWrap.element);

const timer = new CreateElement('div', ['timer'], 'XX-XX');
timerWrap.element.append(timer.element);

export default aside;