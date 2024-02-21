"use strict";

/////////////Menus/////////////
const menuBtn = document.querySelector(".mobileMenuBtn");
const mainCloseBtn = document.querySelector(".mobileMenu .closeBtn");

const filterBtn = document.querySelector(".filterBtn");
const filterCloseBtn = document.querySelector(".mobileFilterMenu .closeBtn");

const mobileMenu = document.querySelector(".mobileMenu");
const filterMenu = document.querySelector(".mobileFilterMenu");
const mainFilter = document.querySelector(".filterMenu");
const mainFilterItems = document.querySelectorAll(".filterItem");

const mobileLinks = document.querySelectorAll(".mobNavLink");
const filterLinks = document.querySelectorAll(".filterLink");

/*Close menus when clicking on links */

mobileLinks.forEach(function (link) {
  link.addEventListener("click", () => hideMenu(mobileMenu));
});

filterLinks.forEach(function (link) {
  link.addEventListener("click", () => hideMenu(filterMenu));
});

//Show and hide menus

const showMenu = function (menu) {
  menu.classList.add("showMenu");
};

const hideMenu = function (menu) {
  menu.classList.remove("showMenu");
};

/*main mobile menu  */
menuBtn.addEventListener("click", () => showMenu(mobileMenu));
mainCloseBtn.addEventListener("click", () => hideMenu(mobileMenu));

///////////////////Mobile logo disappear on scroll//////////////////////

let scrollPos = 0;
const logo = document.querySelector("#logoMobile");
const main = document.querySelector("#scrollable");

function checkPos() {
  let windowY = main.scrollTop;
  if (windowY < scrollPos)
    //scrolling up
    logo.classList.remove("logoUp");

  if (windowY > scrollPos)
    //scrolling down
    logo.classList.add("logoUp");

  scrollPos = windowY;
}

main.addEventListener("scroll", checkPos);

//Project gallery slider

//4.1 ideas
//smooth scroll from project pages to home page sections
//project gallery image modal on click?
//make mobile and desktop menus into one so i don't have to make multiple variables like a noob
//play/pause videos on click
