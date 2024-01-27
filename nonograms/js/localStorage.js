class LocalStorage {

  constructor() {
    this.result = null;
    this.state = null;
  }

  saveState(card, time) {
    const currentStateCard = {"card": card, "time": time};
    localStorage.setItem('currentStateMatrix_yuliyavoronovich-JSFE2023Q4', JSON.stringify(currentStateCard));
  }
}

export default LocalStorage;