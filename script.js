const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
