import CreateElement from './createElement.js';
import CreateSvg from './createSvg.js';

const incorrectAnswer = 0;
const totalAnswer = 6;
const logoHtml = 'Hangman Game';
const resultTextHtml = 'Incorrect Guesses: ';
const lengthWorld = 10;
const questionTextHtml = 'Hint: A human-powered vehicle with two wheels man-powered vehicle';

 // ========= LAYOUT
const body = document.querySelector('body');
const main = new CreateElement('main', ['main']);
body.append(main.element);

const leftSection = new CreateElement('div', ['left-section', 'section-border__rigth']);
main.element.append(leftSection.element);

 // ========= LOGO
const logo = new CreateElement('div', ['logo', 'section-border__bottom']);
leftSection.element.append(logo.element);
const logoText = new CreateElement('span', ['logo-text'], logoHtml);
logo.element.append(logoText.element);

// ========= HANGMAN
const nangmnan = new CreateElement('div', ['hangman']);
leftSection.element.append(nangmnan.element);

const svgMain = new CreateSvg('svg', ['hangman-img__main'], {viewBox: '0 0 262 320'});
nangmnan.element.append(svgMain.element);
const pathMain = new CreateSvg('path', ['hangman-img__path'], {d: 'M0 318H43.9162M262 318H43.9162M43.9162 318V39M194.107 24.5V2H81.3448M81.3448 2H43.9162V39M81.3448 2L43.9162 39'});
svgMain.element.append(pathMain.element);

const svgHead = new CreateSvg('svg', ['hangman-img', 'hangman-img__head', 'hide'], {viewBox: '0 0 54 54'});
nangmnan.element.append(svgHead.element);
const pathHead = new CreateSvg('circle', ['hangman-img__path'], {cx: '27', cy: '27', r: '25'});
svgHead.element.append(pathHead.element);

const svgBody = new CreateSvg('svg', ['hangman-img', 'hangman-img__body', 'hide'], {viewBox: '0 0 5 119'});
nangmnan.element.append(svgBody.element);
const pathBody = new CreateSvg('path', ['hangman-img__path'], {d: 'M2.68701 0.5V118.575'});
svgBody.element.append(pathBody.element);

const svgLeftHand = new CreateSvg('svg', ['hangman-img', 'hangman-img__left-hand', 'hide'], {viewBox: '0 0 44 62'});
nangmnan.element.append(svgLeftHand.element);
const pathLeftHand = new CreateSvg('path', ['hangman-img__path'], {d: 'M41.6869 1.68518L2 60.0483'});
svgLeftHand.element.append(pathLeftHand.element);

const svgRightHand = new CreateSvg('svg', ['hangman-img', 'hangman-img__right-hand', 'hide'], {viewBox: '0 0 44 62'});
nangmnan.element.append(svgRightHand.element);
const pathRightHand = new CreateSvg('path', ['hangman-img__path'], {d: 'M1.68684 1.68518L41.3738 60.0483'});
svgRightHand.element.append(pathRightHand.element);

const svgLeftLeg = new CreateSvg('svg', ['hangman-img', 'hangman-img__left-leg', 'hide'], {viewBox: '0 0 42 74'});
nangmnan.element.append(svgLeftLeg.element);
const pathLeftLeg = new CreateSvg('path', ['hangman-img__path'], {d: 'M39.687 1.40796L2.72363 73.0001'});
svgLeftLeg.element.append(pathLeftLeg.element);

const svgRightLeg = new CreateSvg('svg', ['hangman-img', 'hangman-img__right-leg', 'hide'], {viewBox: '0 0 42 74'});
nangmnan.element.append(svgRightLeg.element);
const pathRightLeg = new CreateSvg('path', ['hangman-img__path'], {d: 'M2.2979 1.40796L39.2612 73.0001'});
svgRightLeg.element.append(pathRightLeg.element);

// ========= RESULTS
const results = new CreateElement('div', ['result', 'section-border__top']);
leftSection.element.append(results.element);

const resultText = new CreateElement('span', ['result-text'], resultTextHtml);
results.element.append(resultText.element);

const resultNumber = new CreateElement('span', ['result-number']);
resultText.element.append(resultNumber.element);

const resultNumberIncorrect = new CreateElement('span', ['result-number__incorrect'], incorrectAnswer);
resultNumber.element.append(resultNumberIncorrect.element);

const resultNumberTotal = new CreateElement('span', ['result-number__total'], ` / ${totalAnswer}`);
resultNumber.element.append(resultNumberTotal.element);

const rigthSection = new CreateElement('div', ['rigth-section']);
main.element.append(rigthSection.element);

// ========= INPUT WORLD
const inputWorlds = new CreateElement('div', ['input-world', 'section-border__bottom']);
rigthSection.element.append(inputWorlds.element);

for (let i = 0; i < lengthWorld; i++) {
  const worldLetter = new CreateElement('span', ['input-world-letter']);
  inputWorlds.element.append(worldLetter.element);
}

// ========= QUESTION
const question = new CreateElement('div', ['question', 'section-border__bottom']);
rigthSection.element.append(question.element);

const questionText = new CreateElement('div', ['question-text'], questionTextHtml);
question.element.append(questionText.element);

// ========= KEYBOARD
const keyboard = new CreateElement('div', ['keyboard']);
rigthSection.element.append(keyboard.element);

for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
    const keyboardLetter = new CreateElement('span', ['keyboard-letter'], String.fromCharCode(i));
    keyboard.element.append(keyboardLetter.element);
}
