// Navigation button
const navButton = document.querySelector(".navigation-button");
const navButtonSpan = document.querySelector(".navigation-button > span");
const navUl = document.querySelector(".nav-ul");
const nav = document.querySelector("nav");

// banner-button
const bannerButton = document.querySelector(".banner-button");
const banner = document.querySelector(".banner-container");

//Year
const copyright = document.querySelector('.copyright > span')
const getYear = new Date().getFullYear()

//Year function
copyright.innerHTML = getYear 


//Nav control
navButton.addEventListener("click", () => {
  if (navButtonSpan.innerText === "menu") {
    navButtonSpan.innerText = "close";
  } else if (navButtonSpan.innerText === "close") {
    navButtonSpan.innerText = "menu";
  }
  nav.classList.toggle("nav-change");
  navUl.classList.toggle("ul-transform");
});


//Banner button control
bannerButton.addEventListener("click", () => {
  banner.classList.add("banner-close");
});
