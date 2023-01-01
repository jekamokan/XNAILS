$(document).ready(function(){
  $('.about__slider').slick({
    dots: true,
    arrows: false,
  });
});

$(document).ready(function(){
  $('.portfolio__slider').slick({
    dots: true,
    slidesToShow: 4,
    infinite: true,
    prevArrow:'<button class="portfolio__slider-btn portfolio__arrow-left"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="portfolio__slider-btn portfolio__arrow-right"><img src="images/arrow-right.svg" alt=""></button>', 
  });
});

$(document).ready(function(){
  $('.feedback__slider').slick({
    prevArrow:'<button class="feedback__slider-btn feedback__arrow-left"><img src="images/feed-arrow-left.svg" alt=""></button>',
    nextArrow:'<button class="feedback__slider-btn feedback__arrow-right"><img src="images/feed-arrow-right.svg" alt=""></button>',
  });
});

// выпадающий список к маникюру

const nails = document.querySelector(".services__tabs-item--nails");
const textNails = document.querySelector(".services__tabs-text--nails");
textNails.onclick = function () {
  nails.classList.toggle("services__tabs-item--active"),
  textNails.classList.toggle("services__tabs-text--nails-active");
};




// табы

// табы с услугами

const tabsBtn   = document.querySelectorAll(".services__tabs-btn");
const tabsItems = document.querySelectorAll(".services__tabs-box");


tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let curentBtn = item;
    let tabId = curentBtn.getAttribute('data-tab');
    let curentTab = document.querySelector(tabId);

    if ( ! curentBtn.classList.contains('services__tabs-btn--active')) {
      
      tabsBtn.forEach(function (item) {
      item.classList.remove('services__tabs-btn--active')
    });
    tabsItems.forEach(function (item) {
      item.classList.remove('services__tabs-box--active')
    });

    curentBtn.classList.add('services__tabs-btn--active');
    curentTab.classList.add('services__tabs-box--active');
      
    }
 
  });
});

// табы с адрессами
const studiosBtn = document.querySelectorAll(".studios__tab-btn");
const studiosItem = document.querySelectorAll(".studios__tab-box");


studiosBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let nowBtn = item;
    let btnId = nowBtn.getAttribute("data-btn");
    let nowTab = document.querySelector(btnId);

    if ( ! nowBtn.classList.contains("studios__tab-btn--active")) {
      studiosBtn.forEach(function (item) { 
      item.classList.remove("studios__tab-btn--active");
    });
    studiosItem.forEach(function (item) { 
      item.classList.remove("studios__tab-box--active");
    });

    nowBtn.classList.add("studios__tab-btn--active");
    nowTab.classList.add("studios__tab-box--active");
    }

  });
});









// выпадающий текст для отзыва

const text = document.querySelector(".feedback__slider-half");
const btn = document.querySelector(".feedback__slider-more");
const fullText = document.querySelector(".feedback__slider-full");  
const littleText = document.querySelector(".feedback__slider-little"); 

btn.onclick = function () {
  text.classList.toggle("feedback__slider-half--active");
  fullText.classList.toggle("feedback__slider-full--active");
  littleText.classList.toggle("feedback__slider-little--active");
};
