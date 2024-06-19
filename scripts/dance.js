import { btnBurger } from './burger.js';

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element__show')
        } else {
            change.target.classList.remove('element__show')
        }
    });
}

let options = {
    rootMargin: "0px",
    threshold: .25,
};

let observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.animation__el');

for (const el of elements) {
    observer.observe(el);
}

const btn = document.querySelector('.btn');
const artists = document.querySelector('.artists');
const slider = document.querySelector('.swiper');
const artistsInfo = document.querySelector('.artists__info');

btn.addEventListener('click', () => {
    artistsInfo.style.display = 'none';
    slider.style.display = 'flex';
    btn.style.display = 'none'
})

const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

document.querySelector('.delete').addEventListener('click', () => {
    artistsInfo.style.display = 'block';
    slider.style.display = 'none';
    btn.style.display = 'block'
})

btnBurger()