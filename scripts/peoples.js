const items = document.querySelectorAll('.item');
const imageContainer = document.querySelector('.image__container');
const image = document.querySelector('.image');

export function peoples () {
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imageUrl = item.getAttribute('data-image');
            image.setAttribute('src', imageUrl);
        })
    })
}