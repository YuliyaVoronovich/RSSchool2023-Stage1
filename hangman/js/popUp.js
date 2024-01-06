class PopUp {

  constructor (popUp = '', unlock = true) {
    this.popUp = popUp;
    this.unlock = unlock;
  }

  openPopUp() {
  if (this.popUp && this.unlock) {
      this.bodyLock();
      this.popUp.classList.add('open');
    }
  }

  closePopUp(popUp) {
    if (this.unlock) {
      popUp.classList.remove('open');
    }    
  }
    
  bodyLock() {
    document.querySelector('body').style.paddingRight = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    document.querySelector('body').classList.add('body-overflow');
  }
   
  bodyUnlock() {
    document.querySelector('body').style.paddingRight = '0px';
    document.querySelector('body').classList.remove('body-overflow');
  }
}

export default PopUp;
