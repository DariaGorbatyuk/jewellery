'use strict';

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
