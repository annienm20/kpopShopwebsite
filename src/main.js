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
// Ensure this selector exactly matches your HTML class attribute
const searchInput = document.querySelector(".artist-search-input"); 

// Active character input listener routine for matching search queries


const otherartistname = document.querySelector(".otherartist-name");

const artistbox = [
  {
    image : "/src/assets/image/btslogo.jpg" ,
    name : "BTS"
},  {
    image : "/src/assets/image/txtlogo.jpg" ,
    name : "TXT"
}, {
    image : "/src/assets/image/aespalogo.jpg" ,
    name : "aespa"
}, {
    image : "/src/assets/image/cortislogo.jpg" ,
    name : "Cortis"
}, {
    image : "/src/assets/image/seventhlogo.jpg" ,
    name : "SEVENTEEN"
},
 {
    image : "/src/assets/image/twicelogo.jpg" ,
    name : "Twice"
}, {
    image : "/src/assets/image/illietlogo.jpg" ,
    name : "illiet"
}
];


artistbox.forEach(function(artist){
   const detailsartist = document.createElement("div");
  detailsartist.classList.add("artist-card");

  detailsartist.innerHTML = `
    <img src="${artist.image}" alt="${artist.name}" class="artist-img">
    <h3 class="artist-title">${artist.name}</h3>
  `;

  otherartistname.appendChild(detailsartist);
});

searchInput.addEventListener("input", function(e) {
  // Capture user typing string, convert to lowercase, and clear whitespace spaces
  const searchTerm = e.target.value.toLowerCase().trim();

  // Filter out original master artistbox array list
  const filteredArtists = artistbox.filter(function(artist) {
    return artist.name.toLowerCase().includes(searchTerm);
  });

  // Re-run the rendering script to dynamically paste ONLY matching elements
  displayArtists(filteredArtists);
});
 
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