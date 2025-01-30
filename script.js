const carouselImages = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel(index) {
    const imageWidth = document.querySelector('.carousel').offsetWidth;
    carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Move to the next image
function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel(currentIndex);
}

// Move to the previous image
function prevSlide() {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateCarousel(currentIndex);
}

// Add event listeners to buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Add event listeners to dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});

// Auto-slide functionality
setInterval(nextSlide, 5000); // Slides every 5 seconds
