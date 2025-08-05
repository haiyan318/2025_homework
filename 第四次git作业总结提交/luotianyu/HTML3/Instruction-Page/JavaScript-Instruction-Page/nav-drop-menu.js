// jQuery 同时监听父项和子菜单，消除闪烁
$(function(){
  $('.nav-li, .nav-li .dropdown').hover(
    function(){
      $(this).closest('.nav-li').children('.dropdown')
             .stop(true,true).slideDown(200);
    },
    function(){
      $(this).closest('.nav-li').children('.dropdown')
             .stop(true,true).slideUp(200);
    }
  );
});
