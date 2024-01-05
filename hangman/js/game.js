import { inputWorlds, question, resultNumberIncorrect} from './main.js';
import CreateElement from './createElement.js';
class Game {

  constructor (world, question) {
    this.world = world.toUpperCase();
    this.question = question;
    this.incorrectAnswer = 0;
  }
  startGame () {
    this.showWorld();
    this.showQuestion();
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

  checkKey (e, letter) {
    if (this.world.includes(letter)) {
        e.classList.add('correct');
        this.openLetter(letter);
    } else {
        this.incorrectAnswer += 1;
        e.classList.add('wrong');
        resultNumberIncorrect.element.innerHTML = this.incorrectAnswer;
        //open MAN
        const partMan = document.querySelector(`.hangman-img__${this.incorrectAnswer}`);
        partMan.classList.remove('hide');
        if (this.incorrectAnswer === 6) this.gameOver();
    }
  }

  openLetter (letter = '') {
    const inputWorldLetters = document.querySelectorAll('.input-world-letter');
    inputWorldLetters.forEach(item => {
      const el = item.querySelector('.input-world-letter__element');
      if (letter === el.innerHTML) {
        item.classList.add('show');
      }    
    });
  }

  gameOver() {
    console.log('modal');
  }
}

export default Game;
