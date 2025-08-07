document.addEventListener('DOMContentLoaded', function() {
    let left = document.querySelector(".button-left");
    let right = document.querySelector(".button-right");
    let m = document.querySelectorAll(".m");
    let images = document.querySelector(".images");
    let index = 0;
    let time;

    function position() {
        images.style.left = (index * -100) + "%";
    }
    function add() {
        index = (index + 1) % m.length;
    }

    function desc() {
        index = (index - 1 + m.length) % m.length;
    }

    function timer() {
        time = setInterval(() => {
            add();
            position();
        }, 3000);
    }

    left.addEventListener("click", () => {
        desc();
        position();
        resetTimer();
    });

    right.addEventListener("click", () => {
        add();
        position();
        resetTimer();
    });
    function resetTimer() {
        clearInterval(time);
        timer();
    }

        function updateIndicators() {
        m.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    m.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            index = i;
            position();
            resetTimer();
        });
    });
    timer();
});