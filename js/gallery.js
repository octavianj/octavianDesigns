//gallery pls

import PhotoSwipeLightbox from "../photoswipe/dist/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
  // may select multiple galleries
  gallery: "#photoGallery",

  // elements within gallery (slides)
  children: "a",

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import("../photoswipe/dist/photoswipe.esm.js"),
});
lightbox.init();
