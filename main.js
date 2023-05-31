const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
    })
}