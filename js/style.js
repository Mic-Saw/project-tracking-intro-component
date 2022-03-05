const hamburger = document.querySelector('.main__hamburger');
const close = document.querySelector('.main__close');
const menu = document.querySelector('.main__navigation');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    close.classList.toggle('active');
    hamburger.classList.toggle('active');
});