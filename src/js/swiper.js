import Swiper from 'swiper';

const swiperHotPlaces = new Swiper('.swiper-container', {
        spaceBetween: 30,
        slidesPerView: 3,
        speed: 500,
        // loop: true,
        autoplay: {
            delay: 200,
        },
    },
);