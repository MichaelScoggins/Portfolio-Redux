function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





// define the canvas
let canvas = document.getElementById("my-canvas")
// console.log(canvas)

// adjust the canvas
canvas.width = 300;
canvas.height = 300;

canvas.style.backgroundColor = "blue";

// capture the drawing context in a variable
const c = canvas.getContext('2d')

// TODO follow the instructions in the Canvas Pt. 2 Pre-Lesson to see how to build this project

let x = 500;
let y = 500;
let xVelocity = 4;
let yVelocity = 4;
let radius = 20;

const animate = () => {
  const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
        
  const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1
  // use this special Window method to refresh the Window and call `animate` again, and again, and again...
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  c.beginPath();
  c.strokeStyle = colors[randomIndex];
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.stroke();

  

    // Conditional, if x is greater than innerWidth
    if(x + radius > innerWidth || x - radius < 0) {
      (xVelocity = -xVelocity)
    }

    if(y + radius > innerHeight || y - radius < 0) {
      (yVelocity = -yVelocity)
    }

    // // Conditional, if x is greater than innerWidth
    // if(y + radius > innerWidth || y - radius < 0) {
    //   yVelocity = -yVelocity
    // }  
  y += yVelocity
  x += xVelocity
}

animate()