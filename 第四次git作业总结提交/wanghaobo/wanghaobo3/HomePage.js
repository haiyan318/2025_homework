document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.HomePage-Second-First .container');
    const slides = document.querySelectorAll('.HomePage-Second-First li');
    const circleContainer = document.querySelector('.circles');
    const slideCount = slides.length;
    let currentIndex = 0;
    let timer = null;
    const CAROUSEL_DURATION = 3000;

    function createCircles() {
        for (let i = 0; i < slideCount; i++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            if (i === 0) {
                circle.style.backgroundColor = 'white';
                circle.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
            } else {
                circle.style.backgroundColor = 'transparent';
                circle.style.border = '1px solid white';
            }
            circle.addEventListener('click', function() {
                currentIndex = i;
                updateSlidePosition();
                updateCircleStatus();
                resetTimer();
            });
            circleContainer.appendChild(circle);
        }
    }

    function updateSlidePosition() {
        const slideWidth = 100 / slideCount;
        container.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    function updateCircleStatus() {
        const circles = document.querySelectorAll('.circle');
        circles.forEach((circle, index) => {
            if (index === currentIndex) {
                circle.style.backgroundColor = 'white';
                circle.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
                circle.style.border = 'none';
            } else {
                circle.style.backgroundColor = 'transparent';
                circle.style.border = '1px solid white';
                circle.style.boxShadow = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
        updateCircleStatus();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlidePosition();
        updateCircleStatus();
    }

    function startTimer() {
        timer = setInterval(nextSlide, CAROUSEL_DURATION);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    createCircles();
    startTimer();

    const carousel = document.querySelector('.HomePage-Second-First');
    carousel.addEventListener('mouseenter', function() {
        clearInterval(timer);
    });

    carousel.addEventListener('mouseleave', function() {
        resetTimer();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});