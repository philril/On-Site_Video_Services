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

});
