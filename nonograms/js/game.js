import cards from "./matrix.json" assert { type: "json" };
import {timerInner, clearTimer, resetTimer, setTimer} from './aside.js';

class Game {

  constructor(level = 'basic', name = 'Name1') {
    this.card;
    this.level = level;
    this.name = name;
    this.matrix;
  }

  getCard() {
    return this.card = cards.filter((item) => item.level === this.level)
      .filter((item) => item.name === this.name)[0];
  };

  getArrayFromMatrix() {
    let result = [];
    const array = this.card.matrix.split(',');
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

export default Game;
