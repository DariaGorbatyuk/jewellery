'use strict';

(function () {
  let swiper;

  function initSwiper() {
    swiper = new window.Swiper('.swiper-container', {
      slidesPerView: 'auto',
      slidesPerColumn: 4,
      slidesPerGroup: 1,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      grabCursor: true,

      navigation: {
        prevEl: '.catalog__buttons-item--prev',
        nextEl: '.catalog__buttons-item--next',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        320: {
          slidesPerColumn: 6,
        },

        768: {
          slidesPerColumn: 4,
        },
      },
    });
  }

  initSwiper();
})();
