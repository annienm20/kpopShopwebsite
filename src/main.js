const barsicon = document.querySelector(".bars");
const navlinks = document.querySelector(".nav-links");
const wholecontent = document.querySelector("body");
const darkmode = document.querySelector(".dark-mode")

barsicon.addEventListener("click", function() {
navlinks.classList.toggle("nav-links-animation");
});
darkmode.addEventListener("click", function(){
wholecontent.classList.toggle("darkmode-animation");
});