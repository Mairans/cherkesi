export const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
});

export const swiper2 = new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },

    }
})

