/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {
/*!**********************************!*\
  !*** ./source/js/add-to-cart.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var addToCartID = document.querySelector('#add-product');
var btnAddToCart = document.querySelector('.product-card__add-link');
var body = document.querySelector('body');

if (addToCartID) {
  var addToCartTemplate = addToCartID.content.querySelector('.overlay');
}


function addProduct(evt) {
  evt.preventDefault();
  var newAddToCart = addToCartTemplate.cloneNode(true);
  var btnClose = newAddToCart.querySelector('.add-product__close');
  body.insertAdjacentElement('afterbegin', newAddToCart);
  body.classList.add('overflow');
  newAddToCart.classList.add('overflow--scroll');
  newAddToCart.querySelector('.product-item-to-cart__btn--plus').focus();
  btnClose.addEventListener('click', closeAddToCart);
  document.addEventListener('click', closeAddToCart);
  document.addEventListener('keydown', closeAddToCart);

  function closeAddToCart(e) {
    if (e.key !== 'Escape' && !e.target.matches('.add-product__close') && !e.target.matches('.overlay')) {
      return;
    }
    newAddToCart.remove();
    body.classList.remove('overflow');
  }
}

if (addToCartTemplate) {
  btnAddToCart.addEventListener('click', addProduct);
}

}();
!function() {
/*!*************************************!*\
  !*** ./source/js/catalog-slider.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/* eslint-disable no-unused-vars */

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

}();
!function() {
/*!**************************!*\
  !*** ./source/js/faq.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var CONTENT_CLOSED_CLASS = 'faq-el__content--closed';
var TITLE_CLOSED_CLASS = 'faq-el__title--closed';
var FAQ_LIST_CLASS = 'faq__list';
var FAQ_EL_CLASS = 'faq-el';
var FAQ_LINK_CLASS = 'faq-el__link';
var faqList = document.querySelector('.' + FAQ_LIST_CLASS);

function startFaq() {
  document.querySelectorAll('.' + FAQ_EL_CLASS).forEach(function (item) {
    if (item.dataset.toggle === '0') {
      item.querySelector('.faq-el__title').classList.add(TITLE_CLOSED_CLASS);
      item.querySelector('.faq-el__content').classList.add(CONTENT_CLOSED_CLASS);
    }
  });
}

function onToggleFAQ(evt) {
  if (evt.key !== 'Tab') {
    evt.preventDefault();
  }
  if (!evt.target.classList.contains(FAQ_LINK_CLASS)) {
    return;
  }
  if (evt.type === 'click' || evt.key === 'Enter') {
    if (evt.target.querySelector('.faq-el__title').classList.contains(TITLE_CLOSED_CLASS)) {
      evt.target.querySelector('.faq-el__title').classList.remove(TITLE_CLOSED_CLASS);
      evt.target.querySelector('.faq-el__content').classList.remove(CONTENT_CLOSED_CLASS);
    } else {
      evt.target.querySelector('.faq-el__title').classList.add(TITLE_CLOSED_CLASS);
      evt.target.querySelector('.faq-el__content').classList.add(CONTENT_CLOSED_CLASS);
    }
  }
}

if (faqList) {
  startFaq();
  faqList.addEventListener('click', onToggleFAQ);
  faqList.addEventListener('keydown', onToggleFAQ);
}

}();
!function() {
/*!*****************************!*\
  !*** ./source/js/filter.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


var TOGGLE_DETAILS_CLASS = '.filter-form__open-link';
var TOGGLE_OPENED_CLASS = 'filter-form__open-link--opened';
var CLOSED_DETAILS_CLASS = 'filter-form__check-container--closed';
var FILTER_CLOSED_CLASS = 'filter-form__close';
var FILTER_OPENED_CLASS = 'filter-form--opened';
var filterForm = document.querySelector('.filter-form');
var linkOpenFilter = document.querySelector('.catalog__link-to-filter');
var closeBtn = document.querySelector('.filter-form__close');
var inputLowPrice = document.querySelector('#low-price');
var inputHighPrice = document.querySelector('#high-price');
var filterOverlay = document.querySelector('.catalog__filter-form');
var body = document.querySelector('body');

document.querySelectorAll('.filter-form__box').forEach(function (item) {
  if (item.dataset.toggle === '1') {
    item.firstElementChild.classList.add(TOGGLE_OPENED_CLASS);
  } else {
    item.lastElementChild.classList.add(CLOSED_DETAILS_CLASS);
  }
});

function openDetails(evt) {
  if (!evt.target.matches(TOGGLE_DETAILS_CLASS)) {
    return;
  }
  var details = evt.target.nextElementSibling;
  if (evt.target.classList.contains(TOGGLE_OPENED_CLASS)) {
    details.classList.add(CLOSED_DETAILS_CLASS);
    evt.target.classList.remove(TOGGLE_OPENED_CLASS);
  } else {
    details.classList.remove(CLOSED_DETAILS_CLASS);
    evt.target.classList.add(TOGGLE_OPENED_CLASS);
  }
}

function onCloseFilter(evt) {
  if (evt.key !== 'Escape' && !evt.target.classList.contains(FILTER_CLOSED_CLASS) && !evt.target.matches('.catalog__filter-form')) {
    return;
  }
  filterForm.classList.remove(FILTER_OPENED_CLASS);
  filterOverlay.classList.remove('catalog__filter-form--visible');
  body.classList.remove('overflow');
}

function openFilter(evt) {
  evt.preventDefault();
  filterForm.classList.add(FILTER_OPENED_CLASS);
  filterOverlay.classList.add('catalog__filter-form--visible');
  body.classList.add('overflow');
  closeBtn.addEventListener('click', onCloseFilter);
  document.addEventListener('click', onCloseFilter);
  document.addEventListener('keydown', onCloseFilter);

}

function onRangeInput(evt) {
  var max = evt.currentTarget.value;
  if (evt.currentTarget.value.length > 3) {
    evt.currentTarget.value = max.slice(0, 3);
  }
}

if (filterForm) {
  filterForm.addEventListener('click', openDetails);
  linkOpenFilter.addEventListener('click', openFilter);
  inputLowPrice.addEventListener('input', onRangeInput);
  inputHighPrice.addEventListener('input', onRangeInput);
}

}();
!function() {
/*!****************************!*\
  !*** ./source/js/login.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


var loginTemplate = document.querySelector('#login').content.querySelector('.overlay');
var btnOpenLogin = document.querySelector('.user-nav__login');
var btnOpenLoginSmall = document.querySelector('.nav__login');
var body = document.querySelector('body');

var isStorageSupport = true;
var storageSupportEmail;

try {
  storageSupportEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

function setStorage(email) {
  if (isStorageSupport) {
    email.value = storageSupportEmail;
  }
}

function openLoginForm(evt) {
  evt.preventDefault();
  var newLoginForm = loginTemplate.cloneNode(true);
  var email = newLoginForm.querySelector('#login-email');
  var btnClose = newLoginForm.querySelector('.close');
  var loginForm = newLoginForm.querySelector('.login-form');
  body.insertAdjacentElement('afterbegin', newLoginForm);
  body.classList.add('overflow');
  newLoginForm.classList.add('overflow--scroll');
  email.focus();
  btnClose.addEventListener('click', closeLoginForm);
  document.addEventListener('click', closeLoginForm);
  document.addEventListener('keydown', closeLoginForm);
  loginForm.addEventListener('submit', onLoginFormSubmit);
  setStorage(email);

  function closeLoginForm(e) {
    if (e.key !== 'Escape' && !e.target.matches('.close') && !e.target.matches('.overlay')) {
      return;
    }
    newLoginForm.remove();
    body.classList.remove('overflow');
  }

  function onLoginFormSubmit(ev) {
    ev.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem('email', email.value);
    }
    loginForm.submit();
    if (newLoginForm) {
      newLoginForm.remove();
      body.classList.remove('overflow');
    }
  }
}

btnOpenLogin.addEventListener('click', openLoginForm);
btnOpenLoginSmall.addEventListener('click', openLoginForm);

}();
!function() {
/*!**********************************!*\
  !*** ./source/js/main-slider.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/* eslint-disable no-unused-vars */

var swiper;
var list = document.querySelector('.novelty__list');

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

      480: {
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
        slidesPerView: 2,
        slidesPerGroup: 2,
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
        slidesPerView: 3,
        slidesPerGroup: 3,

        pagination: {
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: 'true',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },

      1280: {
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

function onResize() {
  swiper.destroy();
  initSwiper();
}

if (list) {
  document.querySelectorAll('.card--nojs').forEach(function (card) {
    card.classList.remove('card--nojs');
  });
  initSwiper();
  window.addEventListener('resize', onResize);
}

}();
!function() {
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');
var body = document.querySelector('body');

pageHeader.classList.remove('header--nojs');
pageHeader.classList.add('header--closed');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--opened');
    body.classList.add('overflow');
    pageHeader.classList.add('overflow--scroll');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--opened');
    body.classList.remove('overflow');
    pageHeader.classList.remove('overflow--scroll');
  }
});

}();
/******/ })()
;