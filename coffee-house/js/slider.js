let autoplayInterval = null;
const startPosition = 100;
let movePosition;

let step = 0;
let endStep = 2;

const container = document.querySelector('.favorites-slides');
const track = document.querySelector('.favorites-list');
const nextArrow = document.querySelector('.favorites-button-right');
const prevArrow = document.querySelector('.favorites-button-left');

function startSlider() {
    if (!autoplayInterval) {
      autoplayInterval = setInterval(nextSlide, 5000);
    }
}

function stopSlider() {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
}

const nextSlide = () => {

    if (step >= endStep) {        
        step = 0;
        track.style.transform = `translateX(-${0}%)`;
    } else {
        step += 1; 
        movePosition = startPosition * step;
        track.style.transform = `translateX(-${movePosition}%)`;
    }    
    startSlider();
}
const prevSlide = () => {

    if (step === 0) {  
        step = endStep;       
        movePosition = startPosition * endStep;
        track.style.transform = `translateX(-${movePosition}%)`;
    } else {
        step -= 1; 
        movePosition = startPosition * step;
        track.style.transform = `translateX(-${movePosition}%)`;
    }    
    startSlider();
}

nextArrow.addEventListener ('click',  event => {  
    stopSlider();
    startSlider();
    nextSlide();
});

prevArrow.addEventListener ('click',  event => {  
    stopSlider();
    startSlider();
    prevSlide();
});

window.addEventListener('load', () => {
    startSlider();
  });