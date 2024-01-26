import cards from "./matrix.json" assert { type: "json" };
import { timerInner, clearTimer, resetTimer, setTimer } from './timer/timer.js';

class Game {

  constructor() {
    this.card = null;
    this.grade = null;
    this.matrix = null;
    this.level = 'basic';
    this.name = 'flower';
  }

  setLevel(level) {
    this.level = level;
  }

  setName(name) {
    this.name = name;
  }

  getCard() {
    console.log(this.name);
    const conditions = {};
    if (this.level) conditions.level = this.level;
    if (this.name) conditions.name = this.name;
    this.card = cards.filter((item) => {
      return Object.keys(conditions).every(key => {
        return conditions[key] === item[key];
      });
    });

    this.card = this.card[0];
    return this.card;
  };

  getCards(level = 'basic', name) {
    const conditions = {};
    if (level) conditions.level = level;
    if (name) conditions.name = name;

    return cards.filter((item) => {
      return Object.keys(conditions).every(key => {
        return conditions[key] === item[key];
      });
    });
  };

  getArrayFromMatrix() {
    let result = [];
    const array = (this.card) ? this.card.matrix.split(',') : [];
    for (let i = 0; i < array.length; i++) {
      result[i] = [];
      array[i] = array[i].slice(1, -1);
      for (let j = 0; j < array[i].length; j++) {
        result[i][j] = +array[i][j];
      }
    }

    return result;
  }

  getLeftLines() {
    let result = {};
    for (let i = 0; i < this.matrix.length; i++) {
      let count = 0;
      let array = [];
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[i][j] === 1) {
          count++;
          if (j === this.matrix.length - 1) {
            array.push(count);
          }
        }
        else if (count > 0) {
          array.push(count);
          count = 0;
        }
      }
      result[i] = array;
    }
    return result;
  }

  getTopLines() {
    let result = {};
    for (let i = 0; i < this.matrix[0].length; i++) {
      let count = 0;
      let array = [];
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[j][i] === 1) {
          count++;
          if (j === this.matrix.length - 1) {
            array.push(count);
          }
        }
        else if (count > 0) {
          array.push(count);
          count = 0;
        }
      }
      result[i] = array;
    }
    return result;
  }

  getCurrentMatrix() {
    this.matrix = this.getArrayFromMatrix();
  };

  getLengthMatrix() {
    return this.matrix.length;
  };

  resetGame() {
    const tbodyTd = document.querySelectorAll('.white');
    for (let i = 0; i < tbodyTd.length; i++) {
      tbodyTd[i].classList.remove('cross');
      tbodyTd[i].classList.remove('black');
    }
    timerInner.element.innerHTML = '00:00';
    clearTimer();
    resetTimer();
    setTimer();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimer();
});

export default Game;
