"use strict";

//HOME PAGE STUFF
////////*mobile filter menu  *////////
filterBtn.addEventListener("click", () => showMenu(filterMenu));

filterCloseBtn.addEventListener("click", () => hideMenu(filterMenu));

/*main filter menu btn */

filterBtn.addEventListener("click", function () {
  filterBtn.classList.toggle("darkPurple");
  mainFilter.classList.toggle("filter");
});

/*Remove menu when clicking on one of the links */
mainFilterItems.forEach(function (link) {
  link.addEventListener("click", function () {
    mainFilter.classList.toggle("filter");
  });
});

/////////////Making the filters work////////////////
const design = document.querySelector(".filterDesign");
const mDesign = document.querySelector(".design");

const web = document.querySelector(".filterWeb");
const mWeb = document.querySelector(".web");

const illustration = document.querySelector(".filterIllustration");
const mIllustration = document.querySelector(".illustration");

const animation = document.querySelector(".filterAnimation");
const mAnimation = document.querySelector(".animation");

const photography = document.querySelector(".filterPhotography");
const mPhotography = document.querySelector(".photography");

const all = document.querySelector(".filterAll");
const mAll = document.querySelector(".all");

const galleryItem = document.querySelectorAll(".galleryItem");

const filter = function (e, i) {
  let t = e.target.innerText;

  galleryItem.forEach(function (item) {
    gallery.scrollLeft = 0;

    let f = item.dataset.cat;

    if (f !== t) {
      item.classList.add("stealth");
    } else {
      item.classList.remove("stealth");
    }
  });
};

design.addEventListener("click", (e) => filter(e, galleryItem));
mDesign.addEventListener("click", (e) => filter(e, galleryItem));

web.addEventListener("click", (e) => filter(e, galleryItem));
mWeb.addEventListener("click", (e) => filter(e, galleryItem));

illustration.addEventListener("click", (e) => filter(e, galleryItem));
mIllustration.addEventListener("click", (e) => filter(e, galleryItem));

animation.addEventListener("click", (e) => filter(e, galleryItem));
mAnimation.addEventListener("click", (e) => filter(e, galleryItem));

photography.addEventListener("click", (e) => filter(e, galleryItem));
mPhotography.addEventListener("click", (e) => filter(e, galleryItem));

all.addEventListener("click", function (e) {
  gallery.scrollLeft = 0;
  galleryItem.forEach(function (item) {
    item.classList.remove("stealth");
  });
});

mAll.addEventListener("click", function (e) {
  gallery.scrollLeft = 0;
  galleryItem.forEach(function (item) {
    item.classList.remove("stealth");
  });
});

////////*Mission 2: Smooth Scroll for Menu Btns *//////////

const homeBtn = document.querySelector(".homeLink");
const logoBtn = document.querySelector(".logo");
const mLogoBtn = document.querySelector(".logoMobile");
const workBtn = document.querySelector(".workLink");
const aboutBtn = document.querySelector(".aboutLink");
const contactBtn = document.querySelector(".contactLink");

const sectionHome = document.querySelector(".sectionHome");
const sectionWork = document.querySelector(".sectionWork");
const sectionAbout = document.querySelector(".sectionAbout");
const sectionContact = document.querySelector(".sectionContact");

const liHome = document.querySelector(".home");
const liAbout = document.querySelector(".about");
const liContact = document.querySelector(".contact");
const liWork = document.querySelector(".work");

const gallery = document.querySelector(".gallery");

const allLinks = [liHome, liWork, liAbout, liContact];

const removeActive = function () {
  allLinks.forEach(function (el) {
    el.classList.remove("active");
  });
};

const addActive = function (l) {
  l.classList.add("active");
};

const btnScroll = function (event, list, section) {
  event.preventDefault();
  removeActive();
  section.scrollIntoView({ behavior: "smooth" });

  // addActive(list);
};

homeBtn.addEventListener("click", (e) => btnScroll(e, liHome, sectionHome));
logoBtn.addEventListener("click", (e) => btnScroll(e, liHome, sectionHome));
mLogoBtn.addEventListener("click", (e) => btnScroll(e, liHome, sectionHome));
workBtn.addEventListener("click", (e) => btnScroll(e, liWork, sectionWork));
aboutBtn.addEventListener("click", (e) => btnScroll(e, liAbout, sectionAbout));
contactBtn.addEventListener("click", (e) =>
  btnScroll(e, liContact, sectionContact)
);

///////*Mission 2.5: Change menu when scrolling to section *////////////

const homeScroll = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    removeActive();
    addActive(liHome);
  }
};

const workScroll = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    removeActive();
    addActive(liWork);
  }
};

const aboutScroll = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    removeActive();
    addActive(liAbout);
  }
};

const socials = document.querySelector(".socials");

const contScroll = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    removeActive();
    addActive(liContact);
  }
};

const obsOptions = {
  root: null,
  threshold: 0.3,
};

const homeObs = new IntersectionObserver(homeScroll, obsOptions);
const workObs = new IntersectionObserver(workScroll, obsOptions);
const aboutObs = new IntersectionObserver(aboutScroll, obsOptions);
const contObs = new IntersectionObserver(contScroll, obsOptions);

homeObs.observe(sectionHome);
workObs.observe(sectionWork);
aboutObs.observe(sectionAbout);
contObs.observe(sectionContact);

///////* Gallery Scroll *////////////

//////tried some stuff that failed so we're going to do buttons

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");
const even = 300;

let maxScrollLeft = gallery.scrollWidth - gallery.clientWidth,
  scrollAmt = gallery.clientWidth - even;

buttonRight.onclick = function () {
  console.log("this button works");
  maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
  scrollAmt = gallery.clientWidth - even;
  if (gallery.scrollLeft == maxScrollLeft) gallery.scrollLeft = 0;

  if (gallery.scrollLeft != maxScrollLeft) gallery.scrollLeft += scrollAmt;
};
buttonLeft.onclick = function () {
  console.log("this one too");
  maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
  scrollAmt = gallery.clientWidth - even;
  if (gallery.scrollLeft == 0) gallery.scrollLeft = maxScrollLeft;

  if (gallery.scrollLeft != 0) gallery.scrollLeft -= scrollAmt;
};

/////home page down button////

const downButton = document.querySelector(".arrowDown");
downButton.addEventListener("click", (e) => btnScroll(e, liWork, sectionWork));
