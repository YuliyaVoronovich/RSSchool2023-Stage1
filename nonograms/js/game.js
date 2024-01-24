import cards from "./matrix.json" assert { type: "json" };

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
        result[i][j]=array[i][j];
      }
    }
    return result;
  }

  getCurrentMatrix() {
    this.matrix = this.getArrayFromMatrix();
  };

  getLengthMatrix() {
    return this.matrix.length;
  };
}

export default Game;
