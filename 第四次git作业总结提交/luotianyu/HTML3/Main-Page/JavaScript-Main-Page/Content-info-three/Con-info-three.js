$(function() {
  $('.info-three-item').hover(
    function() {
      // 鼠标移入：相对上浮 + 字体变天蓝色
      $(this).css('position', 'relative').stop().animate({
        top: '-5px'
      }, 300);
      $(this).find('.info-three-item-li').css({
        transition: 'color 0.3s',
        color: '#00bfff'  // 天蓝色
      });
    },
    function() {
      // 鼠标移出：还原位置 + 颜色
      $(this).stop().animate({
        top: '0px'
      }, 300);
      $(this).find('.info-three-item-li').css({
        color: '',
        transition: 'color 0.3s'
      });
    }
  );
});
