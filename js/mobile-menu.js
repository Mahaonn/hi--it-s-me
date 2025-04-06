const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const body = document.querySelector("body");

const toggleMenu = () => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (mobileMenu.classList.contains("is-open")) {
    mobileMenu.classList.remove("is-open");
    body.classList.remove("no-scroll");
    body.style.paddingRight = "";
  } else {
    mobileMenu.classList.add("is-open");
    body.classList.add("no-scroll");
    body.style.paddingRight = `${scrollBarWidth}px`;
  }
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
