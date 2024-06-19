import { peoples } from './peoples.js';
import { swiper, swiper2 } from './slider.js';
import {btnBurger} from './burger.js'

window.onload = setTimeout(function () {
    document.body.classList.add('loaded_hiding');
    document.querySelector('.preloader__image').classList.add('move');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.querySelector('.main').style.display = 'block';
        document.body.classList.remove('loaded_hiding');
    }, 500);
}, 3000)

window.addEventListener('scroll', function (e) {
    if (window.pageYOffset == 0) {
        document.querySelector('.part').style.display = 'block'
        document.querySelector('.hero__box').style.opacity = '1';
        document.querySelector('.sub__logo-title').style.display = 'none';
        document.querySelector('.logo__box').style.visibility = 'visible';
        document.querySelector('.logo').style.visibility = 'hidden';
    } else {
        document.querySelector('.part').style.display = 'none'
        document.querySelector('.hero__box').style.opacity = '0';
        document.querySelector('.sub__logo-title').style.display = 'block';
        document.querySelector('.logo__box').style.visibility = 'hidden';
        document.querySelector('.logo').style.visibility = 'visible';
    }
})

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

btnBurger()
peoples()
