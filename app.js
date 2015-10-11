$(document).ready(function(){

  $('.your-class').slick({
    // setting-name: 'setting-value',
    autoplay:true,
    infinite:true,
    fade:true,
    speed:2000,
    autoplaySpeed:3000,
    arrows:true,
    dots:true
  });

  $('.hamburger').click(function(){
    $('.secondary-nav').toggle()
  })

  $('.youtube').on('click', function () {
    $($('#video')[0]).attr('src', 'https://www.youtube.com/embed/k7i9Hz_mTJQ?html5=1')
  })

  $('.close').on('click', function () {
    $($('#video')[0]).attr('src', '')
  })

});
