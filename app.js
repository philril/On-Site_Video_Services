$(document).ready(function(){

  $('.your-class').addClass('show');

  $('.your-class').slick({
    // setting-name: 'setting-value',
    autoplay:true,
    infinite:true,
    fade:true,
    speed:2000,
    autoplaySpeed:2000,
    infinite:true,
    arrows:true,
    dots:true
  });

  $('.hamburger').click(function(){
    $('.secondary-nav').toggle()
  });

  $('.youtube').on('click', function () {
    $($('#video')[0]).attr('src', 'https://www.youtube.com/embed/c--IQCCyfsI?html5=1')
  });

  $('.close').on('click', function () {
    $($('#video')[0]).attr('src', '')
  });

});
