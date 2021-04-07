
function myFunction(max) {
  if (max.matches) { // If media query matches
    let background_img = document.querySelector("#background-heading");
    background_img.setAttribute("src", "images/bg-intro-mobile.svg");
    let background_mockup = document.querySelector("#background-mockups");
    background_mockup.setAttribute("src", "images/image-mockups_croppedimag2.png");
  }
}
function restore_image(min){
  if (min.matches) { // If media query matches
    let background_img = document.querySelector("#background-heading");
    background_img.setAttribute("src", "images/bg-intro-desktop.svg");
    let background_mockup = document.querySelector("#background-mockups");
    background_mockup.setAttribute("src", "images/cropped-image-mockups.png");
  }
}

var max = window.matchMedia("(max-width: 996px)")
myFunction(max) // Call listener function at run time
max.addListener(myFunction) // Attach listener function on state changes
var min = window.matchMedia("(min-width: 1024px)")
restore_image(min) // Call listener function at run time
min.addListener(restore_image) // Attach listener function on state changes
