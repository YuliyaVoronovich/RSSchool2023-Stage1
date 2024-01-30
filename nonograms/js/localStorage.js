class LocalStorage {

  constructor() {
    this.state = false;
    this.key = 'currentStateMatrix_yuliyavoronovich-JSFE2023Q4';
    this.resultKey = 'results_yuliyavoronovich-JSFE2023Q4';
  }

  saveState(card, time) {

    const currentStateCard = {"card": card, "time": time};
    localStorage.setItem(this.key, JSON.stringify(currentStateCard));
    document.querySelector('.button-continue').classList.remove('disabled');
  }

  saveWin(card, time) {
    const currentStateCard = {"card": card, "time": time};
    let cardsArray = localStorage.getItem(this.resultKey)? JSON.parse(localStorage.getItem(this.resultKey)): [];
    cardsArray.push(currentStateCard);
    localStorage.setItem(this.resultKey, JSON.stringify(cardsArray));
  }

  loadState() {
    const card = localStorage.getItem(this.key);
    console.log(card);
    return JSON.parse(card);
  }

  loadResults() {
    const card = localStorage.getItem(this.resultKey);
    return  JSON.parse(card).reverse().slice(0,5);
  }

  isStateLs() {
    return this.state = (localStorage.getItem(this.key))? true : false;
  }
}

export default LocalStorage;