$(document).ready(function () {
  $('.header__burger-btn').click(function (event) {
    $('.header__burger-btn').toggleClass('header__burger-line--close');
  });
  $('.header__burger-btn').click(function (event) {
    $('.header__nav-list').toggleClass('header__nav-list--open');
  });
 });