import { inputWorlds, question, resultNumberIncorrect} from './main.js';
import CreateElement from './createElement.js';
import PopUp from './popUp.js';

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

  checkLetter (event, letter) {
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
      resultNumberIncorrect.element.innerHTML = this.incorrectAnswer;
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
      if (letter === el.innerHTML) {
        item.classList.add('show');
      }    
    });
  }

  gameOver(result) {
    // ========= MODAL
    const modalWrapper = new CreateElement('div', ['modal-wrapper'], '', {'id': 'modal-result'});
    document.querySelector('body').append(modalWrapper.element);

    const modalResult = new CreateElement('div', ['modal-result-wrap', 'modal-content']);
    modalWrapper.element.append(modalResult.element);

    const modalHeading = new CreateElement('h3', ['heading'], '', {'id': 'modal-result__text'});
    modalResult.element.append(modalHeading.element);

    const modalWorldText = new CreateElement('div', ['modal-world__text'], 'Your world is ');
    modalResult.element.append(modalWorldText.element);

    const modalWorld = new CreateElement('span', ['modal-world'], this.world);
    modalWorldText.element.append(modalWorld.element);

    const modalButton = new CreateElement('button', ['modal-button'], 'PLAY AGAIN');
    modalResult.element.append(modalButton.element);

    const currentPopUp = modalWrapper.element;
    const popUp = new PopUp(currentPopUp);
    
    if (result === 'win') {
       document.getElementById('modal-result__text').innerHTML = 'You win! Congratulations 🎉';
    }
    if (result === 'loser') {
      document.getElementById('modal-result__text').innerHTML = 'Game over! ;(';
    }   
    popUp.openPopUp(); 
  } 

}

export default Game;
