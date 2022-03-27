"use strict";
window.addEventListener("DOMContentLoaded", function () {
  //  product details
  // Create and mount the thumbnails slider.
  const secondarySlider = new Splide("#product_details_secondary_slider", {
    rewind: true,
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 10,
    focus: "center",
    pagination: false,
    cover: true,
    breakpoints: {
      575: {
        fixedWidth: 50,
        fixedHeight: 40,
      },
    },
  }).mount();

  // Create the main slider.
  const primarySlider = new Splide("#product_details_primary_slider", {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
    fixedWidth: "100%",
    fixedHeight: 450,
    breakpoints: {
      575: {
        fixedWidth: "100%",
        fixedHeight: 300,
      },
    },
  });

  // Set the thumbnails slider as a sync target and then call mount.
  primarySlider.sync(secondarySlider).mount();

  //   end js
});
