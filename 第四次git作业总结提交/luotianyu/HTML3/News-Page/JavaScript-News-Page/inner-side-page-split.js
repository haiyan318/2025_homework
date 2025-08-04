$(function () {
  const totalItems = $('.content-info-list li').length;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let currentPage = 1;

  function showPage(page) {
    $('.content-info-list li').hide();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    $('.content-info-list li').slice(start, end).show();
    currentPage = page;
  }

  // 初始化显示第一页
  showPage(1);

  // 点击事件
  $('.content-info-page-item-span').click(function () {
    const text = $(this).text().trim();

    if (text === '首页') {
      showPage(1);
    } else if (text === '上页' && currentPage > 1) {
      showPage(currentPage - 1);
    } else if (text === '下页' && currentPage < totalPages) {
      showPage(currentPage + 1);
    } else if (text === '最后一页') {
      showPage(totalPages);
    } else if (!isNaN(parseInt(text))) {
      showPage(parseInt(text));
    }
  });

  // 可选：设置分页文字中的总条数
  $('.content-info-page-item-amount').text(`共计 ${totalItems} 条`);
});
$(function () {
  $('.content-info-page-item-span').click(function () {
    // 1. 移除所有页码的高亮样式
    $('.content-info-page-item-span').removeClass('content-info-page-item-active');

    // 2. 给当前点击的页码加上高亮样式
    $(this).addClass('content-info-page-item-active');

    // 3. 你可以在这里添加分页逻辑，比如 ajax 加载内容或翻页函数
    // const pageNum = parseInt($(this).text());
    // loadPageData(pageNum);
  });
});
