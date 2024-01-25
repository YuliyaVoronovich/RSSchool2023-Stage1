import CreateElement from './createElement.js';
import Timer from './timer.js';

let timerId = null;

const aside = new CreateElement('aside', ['aside']);

const timerWrap = new CreateElement('div', ['timer-wrap']);
aside.element.append(timerWrap.element);

export const timerInner = new CreateElement('div', ['timer'], '00:00');
timerWrap.element.append(timerInner.element);

export function setTimer () {
  const timer = new Timer();
  timerId = setInterval(function () {
    timerInner.element.innerHTML = timer.currentTime();
  }, 1000);
}

export function resetTimer() {
  return timerId = null;//текущее время игры
}

export function clearTimer () {
  clearInterval(timerId);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimer ();
});

export default aside;