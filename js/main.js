$(function () {
  var i = 0; //索引
  var timer; //定时器
  var len = $('.dots span').length;


  /**=====================
   * 主轮播
   * ======================
   */

  // 悬浮圆点，跳转对应图片
  $('.dots').click(function (e) {
    //添加active类
    $(e.target).addClass('active').siblings().removeClass('active');
    //变换图片
    i = $(e.target).index();
    changeImg();
  })

  // 自动播放

  $('.banner').mouseenter(function () {
    clearInterval(timer);

  }).mouseleave(function () {
    timer = setInterval(function () {
      i++;
      changeImg();
    }, 2000);
  });

  //触发自动播放
  $('.banner').mouseleave();

  //切换方法
  function changeImg() {
    var width = $('.slide a').width() * (-1);

    if (i == len) {
      $('.dots span:first').addClass('active').siblings().removeClass('active');
    }
    if (i == len + 1) {
      $('.slide').css('left', 0);
      i = 1;
    }
    $('.slide').animate({
      left: width * i
    }, 500);
    $('.dots span').eq(i).addClass('active').siblings().removeClass('active');

  }

  /**=====================
   * 全业务轮播
   * ======================
   */

var index = 0;
var timerLo;
var widthLo = $('.logi-banner').width() * (-1);

$('.logi-banner').mouseenter(function(){
  clearInterval(timerLo);
}).mouseleave(function(){
  timerLo = setInterval(() => {
    index ++;
    changeLo();
  }, 3000);
});

$('.logi-banner').mouseleave();

function changeLo(){
 
  if( index == 3){
    $('.logi-slide').css('left', 0);
    index = 1;
  }
var zz = (widthLo - 20) * index ;

  $('.logi-slide').animate({
    left: zz
  }, 500);

  if( index == 2){
    $('.nav-dot span:first').addClass('active').siblings().removeClass('active');
  }else{
    $('.nav-dot span').eq(index).addClass('active').siblings().removeClass('active');
  }
}
})