'use strict';

(function () {
  const filterForm = document.querySelector('.filter-form');
  const BTN_CLASS_NAME = '.filter-form__open-link';
  const BTN_CLASS_NAME_OPENED = 'filter-form__open-link--opened';
  const CLASS_NAME_HIDDEN = 'visually-hidden';

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

  filterForm.addEventListener('click', openDetails);
})();
