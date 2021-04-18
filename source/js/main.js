/******/ "use strict";
!function() {
/*!**********************************!*\
  !*** ./source/js/add-to-cart.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


(function () {
  const addToCartID = document.querySelector('#add-product');
  const btnAddToCart = document.querySelector('.product-card__add-link');
  const body = document.querySelector('body');

  if(addToCartID){
    var addToCartTemplate = addToCartID.content.querySelector('.overlay');
  }


  function addProduct(evt) {
    evt.preventDefault();
    const newAddToCart = addToCartTemplate.cloneNode(true);
    const btnClose = newAddToCart.querySelector('.add-product__close');
    body.insertAdjacentElement('afterbegin', newAddToCart);
    body.classList.add('overflow');
    newAddToCart.classList.add('overflow--scroll');
    btnClose.addEventListener('click', closeAddToCart);
    document.addEventListener('click', closeAddToCart);
    document.addEventListener('keydown', closeAddToCart);

    function closeAddToCart(evt) {
      if (evt.key !== 'Escape' && !evt.target.matches('.add-product__close') && !evt.target.matches('.overlay')) {
        return;
      }
      newAddToCart.remove();
      body.classList.remove('overflow');
    }
  }

  if (addToCartTemplate) {
    btnAddToCart.addEventListener('click', addProduct);
  }
})();

}();
!function() {
/*!*************************************!*\
  !*** ./source/js/catalog-slider.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


(function () {
  let swiper;

  function initSwiper() {
    swiper = new window.Swiper('.swiper-container', {
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
})();

}();
!function() {
/*!**************************!*\
  !*** ./source/js/faq.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


(function () {
  const CONTENT_CLOSED_CLASS = 'faq-el__content--closed';
  const TITLE_CLOSED_CLASS = 'faq-el__title--closed';
  const FAQ_LIST_CLASS = 'faq__list';
  const FAQ_EL_CLASS = 'faq-el';
  const FAQ_LINK_CLASS = 'faq-el__link';
  const faqList = document.querySelector('.' + FAQ_LIST_CLASS);

  function startFaq() {
    document.querySelectorAll('.' + FAQ_EL_CLASS).forEach(function (item) {
      if (item.dataset.toggle === '0') {
        item.querySelector('.faq-el__title').classList.add(TITLE_CLOSED_CLASS);
        item.querySelector('.faq-el__content').classList.add(CONTENT_CLOSED_CLASS);
      }
    });
  }

  function onToggleFAQ(evt) {
    if (!evt.target.classList.contains(FAQ_LINK_CLASS) && evt.key !== 'Enter') {
      return;
    }
    if (evt.target.querySelector('.faq-el__title').classList.contains(TITLE_CLOSED_CLASS)) {
      evt.target.querySelector('.faq-el__title').classList.remove(TITLE_CLOSED_CLASS);
      evt.target.querySelector('.faq-el__content').classList.remove(CONTENT_CLOSED_CLASS);
    } else {
      evt.target.querySelector('.faq-el__title').classList.add(TITLE_CLOSED_CLASS);
      evt.target.querySelector('.faq-el__content').classList.add(CONTENT_CLOSED_CLASS);
    }
  }

  if (faqList) {
    startFaq();
    faqList.addEventListener('click', onToggleFAQ);
    faqList.addEventListener('keydown', onToggleFAQ);
  }

})();

}();
!function() {
/*!*****************************!*\
  !*** ./source/js/filter.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


(function () {
  const TOGGLE_DETAILS_CLASS = '.filter-form__open-link';
  const TOGGLE_OPENED_CLASS = 'filter-form__open-link--opened';
  const CLOSED_DETAILS_CLASS = 'filter-form__check-container--closed';
  const FILTER_CLOSED_CLASS = 'filter-form__close';
  const FILTER_OPENED_CLASS = 'filter-form--opened';
  const filterForm = document.querySelector('.filter-form');
  const linkOpenFilter = document.querySelector('.catalog__link-to-filter');
  const closeBtn = document.querySelector('.filter-form__close');
  const inputLowPrice = document.querySelector('#low-price');
  const inputHighPrice = document.querySelector('#high-price');

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
    let details = evt.target.nextElementSibling;
    if (evt.target.classList.contains(TOGGLE_OPENED_CLASS)) {
      details.classList.add(CLOSED_DETAILS_CLASS);
      evt.target.classList.remove(TOGGLE_OPENED_CLASS);
    } else {
      details.classList.remove(CLOSED_DETAILS_CLASS);
      evt.target.classList.add(TOGGLE_OPENED_CLASS);
    }
  }

  function onCloseFilter(evt) {
    if (evt.key !== 'Escape' && !evt.target.classList.contains(FILTER_CLOSED_CLASS)) {
      return;
    }
    filterForm.classList.remove(FILTER_OPENED_CLASS);
  }

  function openFilter(evt) {
    evt.preventDefault();
    if (filterForm.classList.contains(FILTER_OPENED_CLASS)) {
      filterForm.classList.remove(FILTER_OPENED_CLASS);
    } else {
      filterForm.classList.add(FILTER_OPENED_CLASS);
      closeBtn.addEventListener('click', onCloseFilter);
      document.addEventListener('keydown', onCloseFilter);
    }
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

})();

}();
!function() {
/*!****************************!*\
  !*** ./source/js/login.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


(function () {
  const loginTemplate = document.querySelector('#login').content.querySelector('.overlay');
  const btnOpenLogin = document.querySelector('.user-nav__login');
  const btnOpenLoginSmall = document.querySelector('.nav__login');
  const body = document.querySelector('body');

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
    const newLoginForm = loginTemplate.cloneNode(true);
    const email = newLoginForm.querySelector('#login-email');
    const btnClose = newLoginForm.querySelector('.close');
    const loginForm = newLoginForm.querySelector('.login-form');
    body.insertAdjacentElement('afterbegin', newLoginForm);
    body.classList.add('overflow');
    newLoginForm.classList.add('overflow--scroll');
    email.focus();
    btnClose.addEventListener('click', closeLoginForm);
    document.addEventListener('click', closeLoginForm);
    document.addEventListener('keydown', closeLoginForm);
    loginForm.addEventListener('submit', onLoginFormSubmit);
    setStorage(email);

    function closeLoginForm(evt) {
      if (evt.key !== 'Escape' && !evt.target.matches('.close') && !evt.target.matches('.overlay')) {
        return;
      }
      newLoginForm.remove();
      body.classList.remove('overflow');
    }

    function onLoginFormSubmit(evt) {
      evt.preventDefault();
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
})();

}();
!function() {
/*!**********************************!*\
  !*** ./source/js/main-slider.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


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

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,

          pagination:{
            type: 'fraction',
            el: '.swiper-pagination',
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                '<span class="swiper-pagination-of">\t&nbsp;of\t&nbsp;</span>'+
                '<span class="' + totalClass + '"></span>';
            }
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
})();

}();
!function() {
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

(function () {
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
})();


}();
