
document.addEventListener('DOMContentLoaded', function () {

    const carousel = document.querySelector('.carousel');

    const inner = document.querySelector('.carousel-inner');

    const items = document.querySelectorAll('.carousel-item');

    const indicators = document.querySelectorAll('.carousel-indicators button');

    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    let currentIndex = 0;     
    const totalItems = items.length; 
    let intervalId;                  
    const slideInterval = 5000;      


    function initCarousel() {

        items.forEach(item => {
            item.style.minWidth = '100%';
        });

        updateCarousel(); 
        startAutoPlay();


        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);


        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopAutoPlay();
                goToSlide(index);
                startAutoPlay();
            });
        });


        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });


        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoPlay();
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoPlay();
        }, { passive: true });
    }


    function handleSwipe() {
        const threshold = 50;

        if (touchStartX - touchEndX > threshold) {
            nextSlide();
        } else if (touchEndX - touchStartX > threshold) {
            prevSlide(); 
        }
    }


    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;


        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }


    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }


    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }


    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }


    function startAutoPlay() {
        stopAutoPlay();
        intervalId = setInterval(nextSlide, slideInterval);
    }


    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }


    initCarousel();


    const backToTopBtn = document.getElementById('backToTop');
    
    if(backToTopBtn)
    {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});