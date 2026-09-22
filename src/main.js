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



const otherartistname = document.querySelector(".otherartist-name");
const searchbar = document.querySelector(".search-bar");
const showartist = document.querySelector(".otherartist-name");

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
 function searchfunction(){
const inputvalue = searchbar.value.trim().toUpperCase();
const functioninput = artistbox.find(artistname => artistname.name.toUpperCase() === inputvalue );
if(functioninput){
showartist.innerHTML = `<div class ="showname">
<div class = "artist-image">   <img src="${functioninput.image}" alt="${functioninput.name}"></div>
<div class = "artist-groupname">${functioninput.name}</div>

</div>`;
}
else{
  showartist.innerHTML =`<div class = "notfound">
  result not found<button class= "close-display">X</button></div>`;
}
const closedisplay = document.querySelector(".close-display");
const notfo = document.querySelector(".notfound");

closedisplay.addEventListener("click", () =>{
notfo.style.display = "none";

});
}

searchbar.addEventListener("input", searchfunction);


 
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