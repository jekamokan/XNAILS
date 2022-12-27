// табы промо
const promoBtn = document.querySelectorAll(".promo__tab-btn");
const promoItem = document.querySelectorAll(".promo__box");


promoBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let nowBtnPromo = item;
    let btnIdPromo = nowBtnPromo.getAttribute("data-promo");
    let nowTabPromo = document.querySelector(btnIdPromo);

    if ( ! nowBtnPromo.classList.contains("promo__tab-btn--active")) {
      promoBtn.forEach(function (item) { 
      item.classList.remove("promo__tab-btn--active");
    });
    promoItem.forEach(function (item) { 
      item.classList.remove("promo__box--active");
    });

    nowBtnPromo.classList.add("promo__tab-btn--active");
    nowTabPromo.classList.add("promo__box--active");
    }

  });
});