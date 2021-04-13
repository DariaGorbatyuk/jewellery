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

      navigation: {
        prevEl: '.novelty__buttons-item--prev',
        nextEl: '.novelty__buttons-item--next',
      },

      pagination: {
        el: '.swiper-pagination',
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
        }
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,

          pagination: {
            el: '.swiper-pagination',
            renderFraction: function (currentClass, totalClass) {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            }
          },
        },
        768: {
/*          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },*/
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
/*
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          },*/
        },
      },
    });
  }

  initSwiper();
})();
