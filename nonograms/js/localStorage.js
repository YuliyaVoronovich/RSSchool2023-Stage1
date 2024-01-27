class LocalStorage {

  constructor() {
    this.state = null;
    this.key = 'currentStateMatrix_yuliyavoronovich-JSFE2023Q4';
  }

  saveState(card, time) {
    const currentStateCard = {"card": card, "time": time};
    localStorage.setItem(this.key, JSON.stringify(currentStateCard));
  }

  loadState() {
    const card = localStorage.getItem(this.key);
    console.log(card);
    return JSON.parse(card);
  }
}

export default LocalStorage;