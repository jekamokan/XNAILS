$(document).ready(function(){
  $('.team__slider').slick({
    dots: true,
    slidesToShow: 4,
    infinite: true,
    prevArrow:'<button class="portfolio__slider-btn portfolio__arrow-left"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="portfolio__slider-btn portfolio__arrow-right"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 427,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        }
      },
      
    ]
  });
  
  
  $('.header__burger-btn').click(function (event) {
    $('.header__burger-btn').toggleClass('header__burger-line--close');
  });
  $('.header__burger-btn').click(function (event) {
    $('.header__nav-list').toggleClass('header__nav-list--open');
  });
});


