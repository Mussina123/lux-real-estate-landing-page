const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; //slide automatically //

const intervalTime = 12000; 
let slideInterval; 


const nextSlide = () => {
    // Get current slider class
    const current = document.querySelector('.current');
    // Remove curent class
    current.classList.remove('current');

    // check for next slide 

    if(current.nextElementSibling){
        // add current class to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
    // go back to start and add current 
    slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'), 300);
}

const prevSlide = () => {
    // Get current slider class
    const current = document.querySelector('.current');
    // Remove curent class
    current.classList.remove('current');

    // check for next slide 

    if(current.previousElementSibling){
        // add current class to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
    // Add current to last slide 
    slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'), 300);
}

// Button Events 

next.addEventListener('click', e => {
    nextSlide();
    if (auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto player // 

if(auto){
    // run next slide at speicific time 
    slideInterval = setInterval(nextSlide, intervalTime);
}
