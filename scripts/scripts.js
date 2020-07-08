// click anywhere to close [resume handler]
$('html').click(function() {
  $('#resume-modal').hide(); 
});

$('li').click(function(event){
  event.stopPropagation();
});

$('#trigger').click(function(event){
  $('#resume-modal').toggle();      
  document.getElementById("parallax-modal-container").style.display = "none";

});

//  click anywhere to close [portfolio handler]
$('html').click(function() {
  $('#parallax-modal-container').hide(); 
});

$('#parallax-modal').click(function(event){
  event.stopPropagation();
});

$('#portmodal-trigger').click(function(event){
  $('#parallax-modal-container').toggle();    
  document.getElementById("resume-modal").style.display = "none";
});

// click anywhere to close [about-me handler]
$('html').click(function() {
$('#about-modal-container').hide(); 
});

$('#about-modal').click(function(event){
event.stopPropagation();
});

$('#about-trigger').click(function(event){
$('#about-modal-container').toggle();    
document.getElementById("resume-modal").style.display = "none";
document.getElementById("myModal").style.display = "none";
});



// click anywhere to close [inspiration handler]
$('html').click(function() {
$('#inspiration-modal-container').hide(); 
});

$('#inspiration-modal').click(function(event){
event.stopPropagation();
});

$('#inspiration-trigger').click(function(event){
$('#inspiration-modal-container').toggle();    
document.getElementById("resume-modal").style.display = "none";
document.getElementById("myModal").style.display = "none";
});





//link/screensaver/wallpaper event listeners
document.getElementById("macWallpaper").addEventListener("click", wallpaper2blog);

document.getElementById("portmodal-trigger").addEventListener("mouseover", portfolioHover);
document.getElementById("portmodal-trigger").addEventListener("mouseout", noPortfolioHover);
document.getElementById("trigger").addEventListener("mouseenter", resumeHover);
document.getElementById("trigger").addEventListener("mouseleave", noResumeHover);
document.getElementById("blog-trigger").addEventListener("mouseenter", handleBlogHover);
document.getElementById("blog-trigger").addEventListener("mouseleave", noBlogHover);
document.getElementById("about-trigger").addEventListener("mouseenter", aboutHover);
document.getElementById("about-trigger").addEventListener("mouseleave", noAboutHover);  
document.getElementById("contact-trigger").addEventListener("mouseenter", contactHover);
document.getElementById("contact-trigger").addEventListener("mouseleave", noContactHover);


document.getElementById("inspiration-trigger").addEventListener("mouseenter", inspirationHover);
document.getElementById("inspiration-trigger").addEventListener("mouseleave", noInspirationHover);  


function inspirationHover() {
  document.getElementById("mini-inspiration-mac-preview-container").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
}

function noInspirationHover() {
  document.getElementById("mini-inspiration-mac-preview-container").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
}






function aboutHover() {
  document.getElementById("mini-about-me-div").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "block";
}

function noAboutHover() {
  document.getElementById("mini-about-me-div").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
}


function wallpaper2blog() {    
  window.open('https://medium.com/me/stories/public', '_blank');
}

function portfolioHover() {
  document.getElementById("mini-slideshow-div").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "block";
}

function noPortfolioHover() {    
  document.getElementById("mini-slideshow-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
  // document.getElementById("my-canvas").removeProperty('display');
}

function resumeHover() {
  document.getElementById("mini-resume-div").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "block";
}

function noResumeHover() {    
  document.getElementById("mini-resume-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
}

function handleBlogHover() {
  document.getElementById("mini-blog-div").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "block";
}

function noBlogHover() {    
  document.getElementById("mini-blog-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
}

function contactHover() {
  document.getElementById("mini-contact-me-div").style.display = "block";
  document.getElementById("canvas-div").style.display = "none";
  document.getElementById("macWallpaper").style.display = "block";
}

function noContactHover() {
  document.getElementById("mini-contact-me-div").style.display = "none";
  document.getElementById("canvas-div").style.display = "block";
  document.getElementById("macWallpaper").style.display = "none";
}







// screensaver hover effect
$(document).ready(function(){
  var x;
  $("#my-canvas").mouseover(function(){
    x = $("#my-canvas").detach();      
  document.getElementById("macWallpaper").style.display = "block";
  });
  $("#macWallpaper").mouseout(function(){      
  document.getElementById("macWallpaper").style.display = "none";
    $("#canvas-div").prepend(x);
  });
});







// popup modal (portfolio)
// function openModal() {
//   document.getElementById("parallax-modal-container").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("parallax-modal-container").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// document.getElementsByClassName("prev").addEventListener()

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }


// mini-slideshow modal
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusMiniSlides(n) {
showSlides1(slideIndex1 += n);
}

// function currentMiniSlide(n) {
//   showSlides1(slideIndex1 = n);
// }

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
var i;
var slides = document.getElementsByClassName("mini-slides");
var dots = document.getElementsByClassName("mini-dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex1++;
if (slideIndex1 > slides.length) {slideIndex1 = 1}    
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex1-1].style.display = "block";  
dots[slideIndex1-1].className += " active";
setTimeout(showSlides1, 2000);
}




// about-page-modal
let aboutModal = document.getElementById("about-modal-container");
let aboutTrigger = document.getElementById("about-trigger");
let aboutSpan = document.getElementsByClassName("about-modal-close")[0];
aboutTrigger.onclick = function() {
aboutModal.style.display = "block";
}
aboutSpan.onclick = function() {
aboutModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == aboutModal) {
  aboutModal.style.display = "none";
}
}


// inspiration-page-modal
let inspirationModal = document.getElementById("inspiration-modal-container");
let inspirationTrigger = document.getElementById("inspiration-trigger");
let inspirationSpan = document.getElementsByClassName("inspiration-modal-close")[0];
inspirationTrigger.onclick = function() {
inspirationModal.style.display = "block";
}
inspirationSpan.onclick = function() {
inspirationModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == inspirationModal) {
  inspirationModal.style.display = "none";
}
}




// contact-page-modal
let contactModal = document.getElementById("contact-modal-container");
let contactTrigger = document.getElementById("contact-trigger");
let contactSpan = document.getElementsByClassName("contact-modal-close")[0];
contactTrigger.onclick = function() {
contactModal.style.display = "block";
}
contactSpan.onclick = function() {
contactModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == contactModal) {
  contactModal.style.display = "none";
}
}





// screensaver particles
let canvas = document.getElementById("my-canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d')

window.addEventListener('resize', function() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init()
})

function Circle(x, y, dx, dy, radius) {
this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;

const colors = [null, "rgba(255,0,4,0.25)", "rgba(0,255,43,0.25)", "#00ffef", "#00b6ff", "#0042ff", "rgba(255,0,212,0.2)", "#rgba(197,255,0,0.48)", "rgba(255,0,221,0.25)", "rgba(255,0,4,0.3)", "rgba(255,0,0,0.1)", "rgba(255,251,0,0.5)", "rgba(0,138,255,0.5)", "rgba(236,0,4,0.45)", "#rgba(236,0,4,0.45)", "rgba(255,139,0,0.82)", "rgba(255,254,0,0.22)", "rgba(0,255,29,0.92)", "rgba(0,255,118,0.72)", "rgba(0,223,255,0.62)", "rgba(115,0,255,0.92)", "rgba(255,0,21,0.92)", "rgba(255,0,253,0.92)", "rgba(255,255,0,1)", "rgba(255,255,0,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)"]    

// const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462", ]  
const randomIndex = Math.floor(Math.random() * (27 - 1)) + 1

this.draw = function() {
  c.beginPath();
  c.strokeStyle = colors[randomIndex]
  c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);    
  c.fillStyle = colors[randomIndex]
  c.fill()
  c.stroke()
}

this.update = function () {
  if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    (this.dx = -this.dx)
  }

  if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    (this.dy = -this.dy)
  }  
  this.y += this.dy
  this.x += this.dx

  this.draw();
}
}

let circleArray = [];

function init() {

circleArray = [];
for (i = 0; i < 150; i++) {
  let radius = 4;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 3;
  let dy = (Math.random() - 0.5) * 3;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}
}

const animate = () => {
requestAnimationFrame(animate)

c.clearRect(0, 0, innerWidth, innerHeight) 
for (i = 0; i < circleArray.length; i++) {
  circleArray[i].update();
}
}

init()
animate()

