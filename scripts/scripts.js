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

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]        
  // const colors = [null, "rgba(100,200,50,.2)", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]  
  const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1

  this.draw = function() {
    c.beginPath();
    c.strokeStyle = colors[randomIndex]
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    
    c.fillStyle = colors[randomIndex]
    c.fill()

    c.stroke()
  }

  this.update = function () {
    if(this.x + this.radius > innerWidth + 10 || this.x - this.radius < -10) {
      (this.dx = -this.dx)
    }

    if(this.y + this.radius > innerHeight +5 || this.y - this.radius < -5) {
      (this.dy = -this.dy)
    }  
    this.y += this.dy
    this.x += this.dx

    this.draw();
  }

}

let circleArray = [];

for (i = 0; i < 30; i++) {
  let radius = 50;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 3;
  let dy = (Math.random() - 0.5) * 3;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

const animate = () => {
  requestAnimationFrame(animate)    

  c.clearRect(0, 0, innerWidth, innerHeight) 

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}
  animate()