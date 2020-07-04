const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

currentSlide = 0


function reset() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        
    }
}

function starSlide(){
    reset();
    slides[0].style.display = 'flex'
}



function prevSlide(){
    reset();
    slides[currentSlide - 1].style.display = 'flex';
    currentSlide--;
    }


function nextSlide(){
    reset();
    slides[currentSlide + 1].style.display = 'flex';
    currentSlide++;
}    

prev.addEventListener('click', function (){
    if(currentSlide === 0){
        currentSlide = slides.length;
    }
    prevSlide ()
});

next.addEventListener('click', function (){
    if(currentSlide === slides.length - 1){
        currentSlide = -1;
    }
    nextSlide ();
})
starSlide ()