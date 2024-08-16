const krest1 = document.querySelector('.hz-krest1');

krest1.addEventListener('click', function() {
    krest1.classList.toggle('active'); 
});


const krest2 = document.querySelector('.hz-krest2');

krest2.addEventListener('click', function() {
    krest2.classList.toggle('active'); 
});


const krest3 = document.querySelector('.hz-krest3');

krest3.addEventListener('click', function() {
    krest3.classList.toggle('active'); 
});


const krest4 = document.querySelector('.hz-krest4');

krest4.addEventListener('click', function() {
    krest4.classList.toggle('active'); 
});


const krest5 = document.querySelector('.hz-krest5');

krest5.addEventListener('click', function() {
    krest5.classList.toggle('active'); 
});



const krestElements = document.querySelectorAll('.hz-krest');

krestElements.forEach(krest => {
  krest.addEventListener('click', () => {

    krestElements.forEach(element => {
      element.classList.remove('active');
    });

    krest.classList.add('active');
  });
});


const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(slides[0]).marginRight) * 2;

function showSlide(index) {
    sliderWrapper.style.transform = `translateX(${-index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    showSlide(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    showSlide(currentIndex);
}, 3000);

showSlide(currentIndex);
