
$(document).ready(function () {
  const $track = $(".carousel-track");
  const $images = $track.children("img");
  const slideCount = $images.length;
  const slideWidth = $(window).width();

  // 克隆第一张用于无缝滚动
  $track.append($images.eq(0).clone());
  let currentIndex = 0;

  // 初始化圆点
  for (let i = 0; i < slideCount; i++) {
    $(".carousel-dots").append(`<span data-index="${i}"></span>`);
  }

  const $dots = $(".carousel-dots span");
  $dots.eq(0).addClass("active");

  function goToSlide(index) {
    $track.stop().animate({ "margin-left": -slideWidth * index }, 500);
    currentIndex = index;
    updateDots();
  }

  function updateDots() {
    $dots.removeClass("active");
    $dots.eq(currentIndex % slideCount).addClass("active");
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slideCount) {
      $track.animate({ "margin-left": -slideWidth * currentIndex }, 500, () => {
        $track.css("margin-left", 0);
        currentIndex = 0;
        updateDots();
      });
    } else {
      goToSlide(currentIndex);
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      $track.css("margin-left", -slideWidth * slideCount);
      currentIndex = slideCount - 1;
    } else {
      currentIndex--;
    }
    goToSlide(currentIndex);
  }

  // 自动轮播
  let timer = setInterval(nextSlide, 3000);

  // 鼠标移入暂停轮播，移出恢复
  $(".carousel-container").hover(
    () => clearInterval(timer),
    () => timer = setInterval(nextSlide, 3000)
  );

  // 按钮绑定
  $(".next").click(nextSlide);
  $(".prev").click(prevSlide);

  // 圆点点击
  $dots.click(function () {
    const index = $(this).data("index");
    goToSlide(index);
  });

  // 窗口改变重新定位
  $(window).resize(function () {
    const newWidth = $(window).width();
    $track.css("margin-left", -currentIndex * newWidth);
  });
});
