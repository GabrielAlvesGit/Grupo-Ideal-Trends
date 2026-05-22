/* ============= Sliders ============= */

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main-slider', {
        type: 'fade',
        perPage: 1,
        autoplay: true,
        interval: 5000,
        arrows: true,
        pagination: true,
        pauseOnHover: true,
        resetProgress: true,
        rewind: true,
    }).mount();
});