/* ============= ScrollUp ============= */

document.addEventListener("DOMContentLoaded", function () {
    const scroll = document.getElementsByClassName('scrollup')[0];

    function scrollUp() {
        window.addEventListener("scroll", () => {

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    scroll.classList.add("active");
                } else {
                    scroll.classList.remove("active");
                }
            })
        });
    }
    scrollUp();
});