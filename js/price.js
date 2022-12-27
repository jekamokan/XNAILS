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


// выпадающий список к маникюру

const nails = document.querySelector(".services__tabs-item--nails");
const textNails = document.querySelector(".services__tabs-text--nails");
textNails.onclick = function () {
  nails.classList.toggle("services__tabs-item--active"),
    textNails.classList.toggle("services__tabs-text--nails-active");
};