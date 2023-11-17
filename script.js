// Navigation button
const navButton = document.querySelector(".navigation-button");
const navButtonSpan = document.querySelector(".navigation-button > span");
const navUl = document.querySelector(".nav-ul");
const nav = document.querySelector("nav");

navButton.addEventListener("click", () => {
  if (navButtonSpan.innerText === "menu") {
    navButtonSpan.innerText = "close";
  } else if (navButtonSpan.innerText === "close") {
    navButtonSpan.innerText = "menu";
  }
  nav.classList.toggle("nav-change");
  navUl.classList.toggle("ul-transform");
});
