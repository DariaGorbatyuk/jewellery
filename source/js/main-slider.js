'use strict';

(function () {
  let swiper;

  function initSwiper() {
    swiper = new window.Swiper('.novelty__slider', {
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
      centeredSlidesBounds: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      navigation: {
        prevEl: '.novelty__buttons-item--prev',
        nextEl: '.novelty__buttons-item--next',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },
    });
  }

  initSwiper();
})();
