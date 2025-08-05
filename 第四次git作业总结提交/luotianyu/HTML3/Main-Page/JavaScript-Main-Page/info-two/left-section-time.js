$(function(){
  $('.left-notice-time').each(function(){
    var txt = $(this).text().trim();
    var parts = txt.split('-');       // ["2025","06","27"]
    var year  = parts[0],
        month = parts[1],
        day   = parts[2];

    // 重新写入两行：上面月日、下面年份
    $(this).html(
      '<span class="date-top">'    + month + '/' + day   + '</span>' +
      '<span class="date-bottom">' + year                + '</span>'
    );
  });
});
$(function(){
  $('.left-notice-info').each(function(){
    var $this = $(this);
    var text = $this.text().trim();
    var maxLen = 23;
    if (text.length > maxLen) {
      $this.text(text.slice(0, maxLen) + '…');
    }
  });
});


$(function(){
  $('.left-notice-list-item').hover(
    function(){
      $(this).addClass('hovered');
    },
    function(){
      $(this).removeClass('hovered');
    }
  );
});