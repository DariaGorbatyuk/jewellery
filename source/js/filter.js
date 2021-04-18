'use strict';

(function () {
  const TOGGLE_DETAILS_CLASS = '.filter-form__open-link';
  const TOGGLE_OPENED_CLASS = 'filter-form__open-link--opened';
  const CLOSED_DETAILS_CLASS = 'filter-form__check-container--closed';
  const FILTER_CLOSED_CLASS = 'filter-form__close';
  const FILTER_OPENED_CLASS = 'filter-form--opened';
  const filterForm = document.querySelector('.filter-form');
  const linkOpenFilter = document.querySelector('.catalog__link-to-filter');
  const closeBtn = filterForm.querySelector('.filter-form__close');

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

  filterForm.addEventListener('click', openDetails);
  linkOpenFilter.addEventListener('click', openFilter);
})();
