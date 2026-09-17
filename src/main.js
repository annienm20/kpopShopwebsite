const barsicon = document.querySelector(".bars");
const navlinks = document.querySelector(".nav-links");
const wholecontent = document.querySelector("body");
const darkmode = document.querySelector(".dark-mode");
const prebtn = document.querySelector(".pre");
const nextbtn = document.querySelector(".next");
const slideContainer  = document.querySelector(".slide-container");

const slides = slideContainer.querySelectorAll(".slide");
let totalSlides = slides.length;

barsicon.addEventListener("click", function() {
navlinks.classList.toggle("nav-links-animation");
});
darkmode.addEventListener("click", function(){
wholecontent.classList.toggle("darkmode-animation");
});
let currentIndex = 0; // Tracks which slide is currently visible (0, 1, or 2)

// Function to move the slide container horizontally
function updateSlider() {
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
nextbtn.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlider();
});

// Previous slide button
prebtn.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Loop to the last slide
  }
  updateSlider();
});