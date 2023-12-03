//let autoplayInterval;
let progressInterval;
const startPosition = 100;
let movePosition;

let step = 0;
let endStep = 2;
let progressStep = 0;
let predBar = 0;

let currentSlide = 0;

const container = document.querySelector('.favorites-slides');
const track = document.querySelector('.favorites-list');
const nextArrow = document.querySelector('.favorites-button-right');
const prevArrow = document.querySelector('.favorites-button-left');

const progressBarButtons = document.querySelectorAll('.carousel-button');

function startSlider() {
   // stopSlider();
   // autoplayInterval = setInterval(nextSlide, 4000);  
    progressInterval = setInterval(progressBar, 200);
}

function stopSlider() {
   // clearInterval(autoplayInterval);
    clearInterval(progressInterval);
}

const progressBar = () => {

    if (progressStep >= 100) {
        progressStep = 0;
        progressBarButtons[step].style.width = `0%`;
        nextSlide();
    } else {
        progressStep +=4;
        progressBarButtons[step].style.width = `${progressStep}%`;
    }
   
}

const nextSlide = () => {

    if (step >= endStep) {        
        step = 0;
        currentSlide = endStep;
        track.style.transform = `translateX(${0}%)`;
    } else {
        step += 1; 
        movePosition = startPosition * step;
        track.style.transform = `translateX(-${movePosition}%)`;
    }    
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
}

nextArrow.addEventListener ('click',  event => { 

    progressBarButtons[step].style.width = `0%`;
    progressStep = 0;
    stopSlider();
    startSlider();  
    nextSlide();  
});

prevArrow.addEventListener ('click',  event => {     
     
    progressBarButtons[step].style.width = `0%`;
    progressStep = 0;
    stopSlider();
    startSlider();    
    prevSlide();
   
});

container.addEventListener ('mouseover',  event => { 
    stopSlider();   
});

container.addEventListener ('mouseout',  event => {    
    startSlider();   
});

// container.addEventListener ('mouseup',  event => { 
//     stopSlider();   
// });

// container.addEventListener ('mousedown',  event => {    
//     startSlider();   
// });

window.addEventListener('load', () => {
    startSlider(); 
  });