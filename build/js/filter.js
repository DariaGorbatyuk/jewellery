'use strict';

(function () {
  const filterForm = document.querySelector('.filter-form');
  const BTN_CLASS_NAME = '.filter-form__open-link';
  const BTN_CLASS_NAME_OPENED = 'filter-form__open-link--opened';
  const CLASS_NAME_HIDDEN = 'visually-hidden';
  const linkOpenFilter = document.querySelector('.catalog__link-to-filter');
  const closeBtn = filterForm.querySelector('.filter-form__close');

  function openDetails(evt) {
    if (!evt.target.matches(BTN_CLASS_NAME)) {
      return;
    }
    let details = evt.target.nextElementSibling;
    if (evt.target.classList.contains(BTN_CLASS_NAME_OPENED)) {
      details.classList.add(CLASS_NAME_HIDDEN);
      evt.target.classList.remove(BTN_CLASS_NAME_OPENED);
    } else {
      details.classList.remove(CLASS_NAME_HIDDEN);
      evt.target.classList.add(BTN_CLASS_NAME_OPENED);
    }
  }

  function onCloseFilter(evt) {
    if (evt.key !== 'Escape' && !evt.target.classList.contains('filter-form__close')) {
      return;
    }
    filterForm.classList.remove('filter-form--opened');
  }

  function openFilter(evt) {
    evt.preventDefault();
    if (filterForm.classList.contains('filter-form--opened')) {
      filterForm.classList.remove('filter-form--opened');
    } else {
      filterForm.classList.add('filter-form--opened');
      closeBtn.addEventListener('click', onCloseFilter);
      document.addEventListener('keydown', onCloseFilter);
    }
  }

  filterForm.addEventListener('click', openDetails);
  linkOpenFilter.addEventListener('click', openFilter);
})();
