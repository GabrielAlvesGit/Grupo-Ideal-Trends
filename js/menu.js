/* ============= Menu ============= */

const menuOpen = document.querySelector(".menu__burguer");
const nav = document.querySelector(".header__bottom__nav");

menuOpen.addEventListener("click", () => {
    menuOpen.classList.toggle("active");
    nav.classList.toggle("active");
});