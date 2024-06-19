import { btnBurger } from './burger.js'

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