'use strict';
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
