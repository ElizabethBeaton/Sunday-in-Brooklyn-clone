const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/*
const toggleButtonBars = document.querySelector(".toggle-button");

toggleButtonBars.addEventListener("click", () => {
  toggleButtonBars.classList.toggle("active");
});
*/
