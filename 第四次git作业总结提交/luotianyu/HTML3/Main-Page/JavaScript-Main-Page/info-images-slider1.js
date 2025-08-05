$(function(){
  // —— 1. 时间格式化（保留你现有的逻辑） ——
  $('.slider-time').each(function(){
    var p = $(this).text().trim().split('-');
    if(p.length===3){
      $(this).html(p[1]+'-'+p[2]+'<br>'+p[0]);
    }
  });

  // —— 2. 轮播核心变量 ——
  var $slider   = $('.info-images-slider'),
      $items    = $slider.find('.slider-item'),
      count     = $items.length,
      current   = 0,
      speed     = 500,
      delay     = 5000,
      timer;

  // —— 3. 生成指示器 ——
  var $indicators = $('<div class="slider-indicators"></div>').appendTo($slider);
  for(var i=0; i<count; i++){
    $('<span class="slider-indicator">')
      .appendTo($indicators)
      .on('click', (function(idx){
        return function(){
          clearInterval(timer);
          goTo(idx);
          timer = setInterval(next, delay);
        }
      })(i));
  }
  // 默认激活第一个
  $indicators.find('.slider-indicator').eq(0).addClass('active');


  // —— 4. 切换函数 ——
  function goTo(index){
    if(index===current) return;
    var $cur = $items.eq(current),
        $nxt = $items.eq(index);

    $nxt.css({ left: '100%', display: 'block' });
    $cur.animate({ left: '-100%' }, speed);
    $nxt.animate({ left: '0%' }, speed, function(){
      $cur.hide().css('left','0%');
      current = index;

      // 更新指示器高亮
      $indicators
        .find('.active').removeClass('active')
        .end()
        .find('.slider-indicator').eq(index).addClass('active');
    });
  }
  function next(){
    goTo((current + 1) % count);
  }
  function prev(){
    goTo((current - 1 + count) % count);
  }


  // —— 5. 绑定控制、自动轮播 ——
  $('.slider-next').on('click', function(){
    clearInterval(timer); next(); timer = setInterval(next, delay);
  });
  $('.slider-prev').on('click', function(){
    clearInterval(timer); prev(); timer = setInterval(next, delay);
  });
  $slider.hover(
    ()=> clearInterval(timer),
    ()=> timer = setInterval(next, delay)
  );
  timer = setInterval(next, delay);


  // —— 6. 初始化：隐藏除第一张外所有 slide ——
  $items.hide().css('left','0%').eq(0).show();
});

$(function(){
  $('.info-list-item h1').each(function(){
    var $this = $(this);
    var text = $this.text().trim();
    var maxLen = 20;
    if (text.length > maxLen) {
      $this.text(text.slice(0, maxLen) + '…');
    }
  });
});
$(function(){
  $('.slider-comment').each(function(){
    var $this = $(this);
    var text = $this.text().trim();
    var maxLen = 20;
    if (text.length > maxLen) {
      $this.text(text.slice(0, maxLen) + '…');
    }
  });
});

$(function(){
  var $box = $('.Content-info-one');

  // 1. 先把容器立即设置成“看不见&缩放到0”
  $box.css({
    opacity: 0,
    transform: 'scale(0)',
    transformOrigin: 'center center'
  });

  // 2. 强制浏览器先应用上面样式（读一次 layout）
  $box[0].getBoundingClientRect();

  // 3. 设置过渡效果的时长和 timing function
  $box.css('transition', 'transform 0.5s ease-out, opacity 0.8s ease-out');

  // 4. 延迟一点，再触发“弹入”到略大状态
  setTimeout(function(){
    $box.css({
      opacity: 1,
      transform: 'scale(1.1)'
    });

    // 5. 在过渡接近尾声时（这里取 0.8s 的 60% 约 480ms），再回弹到 1
    setTimeout(function(){
      $box.css('transform', 'scale(1)');
    }, 480);

  }, 50);
});

$(function () {
  $('.slider-img').hover(
    function () {
      $(this).css('transform', 'scale(1.05)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );
});
