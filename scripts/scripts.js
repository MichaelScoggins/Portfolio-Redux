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

// document.getElementsByClassName("prev").addEventListener()

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
  for (i = 0; i < 400; i++) {
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