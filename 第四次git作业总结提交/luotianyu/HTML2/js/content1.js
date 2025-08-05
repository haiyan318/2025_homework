  $(document).ready(function () {
    $(".tab-btn").click(function () {
      var tabId = $(this).data("tab");

      $(".tab-btn").removeClass("active");
      $(this).addClass("active");

      $(".info-content").removeClass("active").hide();
      $("#" + tabId).addClass("active").show();
    });

    // 图片轮播逻辑
    let index = 0;
    const thumbnails = $(".thumbnail");
    const total = thumbnails.length;

    function showImage(i) {
      const src = "./images/" + thumbnails.eq(i).data("src");
      $("#previewImage").attr("src", src);
      thumbnails.removeClass("active");
      thumbnails.eq(i).addClass("active");
    }

    let interval = setInterval(() => {
      index = (index + 1) % total;
      showImage(index);
    }, 3000);

    thumbnails.on("click", function () {
      clearInterval(interval);
      index = $(this).index();
      showImage(index);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-btn');
    const contents = document.querySelectorAll('.accordion-content');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        contents.forEach((content, cIndex) => {
          if (index === cIndex) {
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
          } else {
            content.style.display = 'none';
          }
        });
      });
    });
  });