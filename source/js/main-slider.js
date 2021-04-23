/* eslint-disable no-unused-vars */
'use strict';
var swiper;
var list = document.querySelector('.novelty__list');
if (list) {
  document.querySelectorAll('.card--nojs').forEach(function (card) {
    card.classList.remove('card--nojs');
  });
}

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

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,

        pagination: {
          type: 'fraction',
          el: '.swiper-pagination',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
              '<span class="swiper-pagination-of">\t&nbsp;of\t&nbsp;</span>' +
              '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        pagination: {
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: 'true',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },

      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,

        pagination: {
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: 'true',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
    },
  });
}

initSwiper();
