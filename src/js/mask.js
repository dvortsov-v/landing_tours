import IMask from 'imask';

const element = document.querySelector('.callback-section-form__phone');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);