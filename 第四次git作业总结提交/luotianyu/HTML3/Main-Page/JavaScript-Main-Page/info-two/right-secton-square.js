
$(function () {
  $('.right-notice-item').each(function (index) {
    const offsetMap = [
      { x: -10, y: -10 }, // 左上
      { x: 10, y: -10 },  // 右上
      { x: -10, y: 10 },  // 左下
      { x: 10, y: 10 }    // 右下
    ];

    const offset = offsetMap[index] || { x: 0, y: 0 };

    $(this).hover(
      function () {
        $(this).css('transform', `translate(${offset.x}px, ${offset.y}px)`);
        $(this).find('img, .right-notice-item-info').css('transform', 'scale(1.1)');
        $(this).css('z-index', 2); // 提高 z-index，避免被遮挡
      },
      function () {
        $(this).css('transform', 'translate(0, 0)');
        $(this).find('img, .right-notice-item-info').css('transform', 'scale(1)');
        $(this).css('z-index', 0); // 恢复
      }
    );
  });
});

