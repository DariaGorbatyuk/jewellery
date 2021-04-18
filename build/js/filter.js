'use strict';

(function () {
  const filterForm = document.querySelector('.filter-form');
  const toggleDetails = '.filter-form__open-link';
  const toggleOpened = 'filter-form__open-link--opened';
  const closedDetails = 'filter-form__check-container--closed';

  document.querySelectorAll(toggleDetails).forEach(function (item) {
   if(!item.classList.contains(toggleOpened)){
     item.nextElementSibling.classList.add(closedDetails);
   }
  });

  /*
    const linkOpenFilter = document.querySelector('.catalog__link-to-filter');
    const closeBtn = filterForm.querySelector('.filter-form__close');
  */

  function openDetails(evt) {
    if (!evt.target.matches(toggleDetails)) {
      return;
    }
    let details = evt.target.nextElementSibling;
    if (evt.target.classList.contains(toggleOpened)) {
      details.classList.add(closedDetails);
      evt.target.classList.remove(toggleOpened);
    } else {
      details.classList.remove(closedDetails);
      evt.target.classList.add(toggleOpened);
    }
  }

  /*  function onCloseFilter(evt) {
      if (evt.key !== 'Escape' && !evt.target.classList.contains('filter-form__close')) {
        return;
      }
      filterForm.classList.remove('filter-form--opened');
    }*/

  /*  function openFilter(evt) {
      evt.preventDefault();
      if (filterForm.classList.contains('filter-form--opened')) {
        filterForm.classList.remove('filter-form--opened');
      } else {
        filterForm.classList.add('filter-form--opened');
        closeBtn.addEventListener('click', onCloseFilter);
        document.addEventListener('keydown', onCloseFilter);
      }
    }*/

  filterForm.addEventListener('click', openDetails);
  // linkOpenFilter.addEventListener('click', openFilter);
})();
