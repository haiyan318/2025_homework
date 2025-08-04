$(function () {
    // 当滚动条滚动超过300px时显示按钮
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    // 点击按钮，平滑滚动回顶部
    $('#back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
    });
});

