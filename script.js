const navbar = document.getElementById("main-navbar");
const menu = document.getElementById("main-menu");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};


