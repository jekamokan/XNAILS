$(document).ready(function(){
  $('.team__slider').slick({
    dots: true,
    slidesToShow: 4,
    infinite: true,
    prevArrow:'<button class="portfolio__slider-btn portfolio__arrow-left"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="portfolio__slider-btn portfolio__arrow-right"><img src="images/arrow-right.svg" alt=""></button>',
  });
  
  $('.header__burger-btn').click(function (event) {
    $('.header__burger-btn').toggleClass('header__burger-line--close');
  });
 
});