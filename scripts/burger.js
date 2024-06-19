const burgerBtn = document.getElementById('burger');
const header = document.querySelector('.header');

export function btnBurger() {
    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('open')
    })
}