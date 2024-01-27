class LocalStorage {

  constructor() {
    this.state = false;
    this.key = 'currentStateMatrix_yuliyavoronovich-JSFE2023Q4';
  }

  saveState(card, time) {
    const currentStateCard = {"card": card, "time": time};
    localStorage.setItem(this.key, JSON.stringify(currentStateCard));
    document.querySelector('.button-continue').classList.remove('disabled');
  }

  loadState() {
    const card = localStorage.getItem(this.key);
    console.log(card);
    return JSON.parse(card);
  }

  isStateLs() {
    return this.state = (localStorage.getItem(this.key))? true : false;
  }
}

export default LocalStorage;