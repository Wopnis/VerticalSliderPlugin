const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    sideBar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    container = document.querySelector('.container'),
    slidesQuantity = mainSlide.querySelectorAll('div').length;


sideBar.style.top = `-${(slidesQuantity - 1) * 100}vh`;

let currentSlideIndex = 0;

upBtn.addEventListener('click', () => {
    listSlides('up')
});
downBtn.addEventListener('click', () => {
    listSlides('down')
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {listSlides('up')}
    else if (event.key === 'ArrowDown') {listSlides('down')}
})

function listSlides(direction) {
    if(direction === 'up') {
        currentSlideIndex++
        if(currentSlideIndex === slidesQuantity) {
            currentSlideIndex = 0
        }
    } else if (direction === 'down') {
        currentSlideIndex--
        if(currentSlideIndex < 0) {
            currentSlideIndex = slidesQuantity - 1
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${currentSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${currentSlideIndex * height}px)`;
};