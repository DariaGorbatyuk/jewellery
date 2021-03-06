/* eslint-disable no-unused-vars */
'use strict';
var swiper;

function initSwiper() {
  swiper = new window.Swiper('.catalog__slider', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: false,
    direction: 'horizontal',

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
  });
}

initSwiper();
