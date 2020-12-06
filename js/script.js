const slides = document.querySelectorAll('.showcase-slide')
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = true;
const intervalTime = 8000;
let slideInterval;


const nextSlide = function(){
    const current = document.querySelector('.current');
    // REMOVE CURRENT CLASS
    current.classList.remove('current');
    // CHECK FOR NEXT SLIDES
    if(current.nextElementSibling){
        // ADD CURRENT SIBLING
        current.nextElementSibling.classList.add('current')
    } else {
        // ADD CURRRENT TO START
        slides[0].classList.add('current')
    }
    setTimeout(()=> current.classList.remove('current'));
}

const prevSlide = function(){
    const current = document.querySelector('.current');
    // REMOVE CURRENT CLASS
    current.classList.remove('current');
    // CHECK FOR NEXT SLIDES
    if(current.previousElementSibling){
        // ADD CURRENT SIBLING
        current.previousElementSibling.classList.add('current')
    } else{
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(()=> current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(prevSlide, intervalTime);
    }
});

//AUTO SLIDES
if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}
