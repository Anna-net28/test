let header__top = document.querySelector(".header__top")
window.onscroll = function () {

  if (window.scrollY > 100) {
    header__top.style.background = "#333333"
    header__top.style.opacity = "0.9"
    header__top.style.width = "100%"
  }
  else {
    header__top.style.background = "none"
    header__top.style.opacity = "none"
    header__top.style.gap = "6rem"
  }
}