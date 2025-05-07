const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop',
    caption: 'Urban City Skyline',
  },
];

const track = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const autoPlayButton = document.getElementById('autoPlayButton');
const carouselNav = document.getElementById('carouselNav');

let currentIndex = 0;
let autoPlayInterval = null;
let isAutoPlaying = false;

// Add slides dynamically
images.forEach((img, index) => {
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  slide.style.backgroundImage = `url('${img.url}')`;
  track.appendChild(slide);

  // Add indicators
  const indicator = document.createElement('div');
  indicator.className = 'carousel-indicator';
  if (index === 0) indicator.classList.add('active');
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    stopAutoPlay();
  });
  carouselNav.appendChild(indicator);
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
  caption.textContent = images[currentIndex].caption;

  // Update indicators
  const indicators = document.querySelectorAll('.carousel-indicator');
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function startAutoPlay() {
  isAutoPlaying = true;
  autoPlayButton.textContent = 'Stop Auto Play';
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 2500);
}

function stopAutoPlay() {
  isAutoPlaying = false;
  autoPlayButton.textContent = 'Start Auto Play';
  clearInterval(autoPlayInterval);
}

prevButton.addEventListener('click', () => {
  showPrevSlide();
  stopAutoPlay();
});

nextButton.addEventListener('click', () => {
  showNextSlide();
  stopAutoPlay();
});

autoPlayButton.addEventListener('click', () => {
  isAutoPlaying ? stopAutoPlay() : startAutoPlay();
});

// Initial render
updateCarousel();
