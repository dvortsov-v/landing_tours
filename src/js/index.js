import './swiper'
import './mask'

const selectionTours = document.querySelector('.tours-section');
const selectionCallback = document.querySelector('.callback-section');
const selectionReview = document.querySelector('.review-section');

const btnTours = document.querySelector('.menu-item-tours');
const btnCallback = document.querySelector('.menu-item-callback');
const btnReview = document.querySelector('.menu-item-review');

const scrollToSection = (elem) => {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth',
    })
}

btnTours.addEventListener('click', () => {
    scrollToSection(selectionTours)
});

btnCallback.addEventListener('click', () => {
    scrollToSection(selectionCallback)
});

btnReview.addEventListener('click', () => {
    scrollToSection(selectionReview)
});
