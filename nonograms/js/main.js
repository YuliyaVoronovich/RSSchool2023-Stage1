import CreateElement from './createElement.js';
import Game from './game.js';

import cards from "./matrix.json" assert { type: "json" };

 // ========= LAYOUT
const body = document.querySelector('body');
const main = new CreateElement('main', ['main']);
body.append(main.element);