
const slides = document.querySelectorAll('.image-slide');
let currentSlide = 0;

// Show the first image immediately
slides[currentSlide].classList.add('active');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

// Set the slope image as the default
const slopeImage = document.querySelector('.image-slide img[src="storage/ag/g/slope/IMG_5256.jpeg"]');
if (slopeImage) {
  slopeImage.parentElement.classList.add('active');
}
