///////////////////////////
//GALLERY

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slideRight");
const btnLeft = document.querySelector(".slideLeft");
const img = document.querySelectorAll(".image");
let imgHighlight;

let curSlide = 0;
const maxSlide = slides.length;

// //adds .imageActive to currently selected image in
// const activeSlide = function (slide) {
//   removeActive();
//   imgHighlight = document.querySelector(`.image${curSlide}`);

//   if (curSlide - slide === 0) {
//     imgHighlight.classList.add("imageActive");
//   }
// };

// //removes .imageActive. needed for other functions
// const removeActive = function () {
//   img.forEach((i) => i.classList.remove("imageActive"));
// };

//go to slide in gallery
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

//next slide function for right button
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

//prev slide function for left button
const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

//enables user to go to image in gallery by clicking on it
img.forEach((pic) => {
  pic.addEventListener("click", function () {
    curSlide = pic.dataset.image;
    goToSlide(curSlide);
  });
});

goToSlide(0);

//button function calls. also allows for arrowkey movement
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  e.key == "ArrowLeft" && prevSlide();
  e.key == "ArrowRight" && nextSlide();
});

//play video on click

// const video = document.getElementsByTagName("video");

// video.forEach((v) => {
//   v.addEventListener("click", function (event) {
//     if (v.paused == true) {
//       v.play();
//     } else {
//       v.pause();
//     }
//   });
// });

/////stop all the logos from zoomy zooming

const octopus = document.querySelectorAll(".logo");

octopus.forEach(function (o) {
  o.setAttribute("data-image-zoom-disabled", "");
});

//gallery pls work
