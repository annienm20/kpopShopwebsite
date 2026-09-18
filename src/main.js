const barsicon = document.querySelector(".bars");
const navlinks = document.querySelector(".nav-links");

const darkmode = document.querySelector(".dark-mode");
const prebtn = document.querySelector(".pre");
const nextbtn = document.querySelector(".next");
const slideContainer  = document.querySelector(".slide-container");
const bodycontent = document.querySelector(".body-content")
const slides = slideContainer.querySelectorAll(".slide");
const loadingpage = document.querySelector(".loading-page");
const loadingpagetext = document.querySelector(".loadingpage-text");
let loadingtext = loadingpagetext.innerText;
let totalSlides = loadingtext.length;
let totalSlides1 = slides.length;
let startnumber = 0;


 
  const texttimer = setInterval(function(){
    startnumber++;
        loadingpagetext.innerText = loadingtext.substring(0, startnumber);
        loadingpagetext.style.display = "block";
    if(startnumber == totalSlides){
       clearInterval(texttimer);
       bodycontent.style.display = "block"; 
       loadingpage.style.display = "none";
       
    };
  },1000);
 



barsicon.addEventListener("click", function() {
navlinks.classList.toggle("nav-links-animation");
});
darkmode.addEventListener("click", function(){
document.body.classList.toggle("darkmode-animation");

});
let currentIndex = 0; // Tracks which slide is currently visible (0, 1, or 2)

// Function to move the slide container horizontally
function updateSlider() {
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
nextbtn.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= totalSlides1) {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlider();
});

// Previous slide button
prebtn.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides1 - 1; // Loop to the last slide
  }
  updateSlider();
});