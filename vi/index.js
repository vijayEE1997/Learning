const track=document.querySelector('.carousal_track');
const slides=Array.from(track.children);
const nextButton= document.querySelector('.btn-right');
const prevButton= document.querySelector('.btn-left');
const dotsnav=document.querySelector('.carousal_nav');
const dots=Array.from(dotsnav.children);

const slideWidth=slides[0].getBoundingClientRect().width;
const setSlidePosition=(slide,i)=>{
    slide.style.left=(i*slideWidth)+'px';
}
slides.forEach(setSlidePosition)


const moveToSlide=(track,currentSlide,targetSlide)=>{
    track.style.transform='translateX(-'+targetSlide.style.left+')'; 
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}


nextButton.addEventListener('click',e=>{
    const currentSlide=track.querySelector('.current_slide');
    const nextSlide=currentSlide.nextElementSibling;

    moveToSlide(track,currentSlide,nextSlide)
 })