'use strict';
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

