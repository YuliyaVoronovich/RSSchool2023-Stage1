class LocalStorage {

  constructor() {
    this.result = null;
    this.state = null;
  }

  saveState(card) {
    console.log(card);
   // localStorage.setItem('currentStateMatrix_yuliyavoronovich-JSFE2023Q4', JSON.stringify(card));
  }
}

export default LocalStorage;