import { inputWorlds, question, resultNumberIncorrect, 
  modalWorld, modalWrapper, modalHeading} from './main.js';
import CreateElement from './createElement.js';
import PopUp from './popUp.js';

import questions from "./questions.json" assert { type: "json" };

class Game {

  constructor (world, question) {
    this.world = world.toUpperCase();
    this.question = question;
    this.incorrectAnswer = 0;
    this.popUp;
  }

  randomQiestion () {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  restartGame () {
    const result = this.randomQiestion();
    if (this.question === result.question) {
      console.log('same question');
      this.restartGame();
    } else {
      this.world = result.answer.toUpperCase();
      this.question = result.question;
      // clean input world
      inputWorlds.element.textContent = '';
      this.showWorld();
      // clean question
      question.element.textContent = '';
      this.showQuestion();
      // clean keyboard
      const letters = document.querySelectorAll(`.keyboard-letter`);
      letters.forEach(item => {
        item.classList.remove('wrong'); 
        item.classList.remove('correct'); 
      });
      // clean MAN
      const hangmanImgs = document.querySelectorAll(`.hangman-img`);
      hangmanImgs.forEach(item => {
        item.classList.add('hide'); 
      });
      // clean incorrect answer
      this.incorrectAnswer = 0;
      resultNumberIncorrect.element.textContent = this.incorrectAnswer;
    }    
    //close popUp
    this.popUp.closePopUp(modalWrapper.element);
  }

  showWorld () { 
    console.log(this.world);
    for (let i = 0; i < this.world.length; i++) {
      const worldLetterWrap = new CreateElement('span', ['input-world-letter']);
      inputWorlds.element.append(worldLetterWrap.element);
      const worldLetter = new CreateElement('span', ['input-world-letter__element'], this.world[i]);
      worldLetterWrap.element.append(worldLetter.element);  
    }
  }
  
  showQuestion () {        
      const questionText = new CreateElement('div', ['question-text'], this.question);
      question.element.append(questionText.element);
  }

  checkLetter (event, letter) {
    if (this.incorrectAnswer === 6) {
      return;
    }
    if (this.world.includes(letter)) {     
      event.classList.add('correct');
      this.openLetter(letter);
      const count = document.querySelectorAll(`.input-world-letter.show`).length;
      if (count === this.world.length) {
        this.gameOver('win');
      }
    } else {
      this.incorrectAnswer += 1;
      event.classList.add('wrong');
      resultNumberIncorrect.element.textContent = this.incorrectAnswer;
      //open MAN
      const partMan = document.querySelector(`.hangman-img__${this.incorrectAnswer}`);
      partMan.classList.remove('hide');
      if (this.incorrectAnswer === 6) {
        this.gameOver('loser');
      }          
    }
  }

  openLetter (letter = '') {
    const inputWorldLetters = document.querySelectorAll('.input-world-letter');
    inputWorldLetters.forEach(item => {
      const el = item.querySelector('.input-world-letter__element');
      if (letter === el.textContent) {
        item.classList.add('show');
      }    
    });
  }

  gameOver(result) {

    const currentPopUp =  modalWrapper.element;
    this.popUp = new PopUp(currentPopUp);
    
    if (result === 'win') {
      modalHeading.element.textContent = 'You win! Congratulations 🎉';
    }
    if (result === 'loser') {
      modalHeading.element.textContent = 'Game over! ;(';
    }   
    const world = document.querySelector('.modal-world');
    world.textContent = '';
    world.textContent = this.world;
    this.popUp.openPopUp(); 
  } 

}

export default Game;
