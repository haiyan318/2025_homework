$(function () {
  $('.icon-wrapper').hover(
    function () {
      const $icon = $(this);
      const offset = $icon.offset();
      const width = $icon.outerWidth();
      const height = $icon.outerHeight();

      // 圆心坐标
      const centerX = offset.left + width / 2;
      const centerY = offset.top + height / 2;

      // 删除旧圆
      $('.pulse-circle').remove();

      // 创建新圆
      const $circle = $('<div class="pulse-circle"></div>');
      $circle.css({ left: centerX, top: centerY });
      $('body').append($circle);

      // 触发动画
      setTimeout(() => {
        $circle.addClass('active');
      }, 10);
    },
    function () {
      $('.pulse-circle').remove();
    }
  );
});
