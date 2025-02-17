const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });


}
