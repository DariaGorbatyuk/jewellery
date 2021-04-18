'use strict';

(function () {
  const CONTENT_CLOSED_CLASS = 'faq-el__content--closed';
  const TITLE_CLOSED_CLASS = 'faq-el__title--closed';
  const faqList = document.querySelector('.faq__list');

  function startFaq() {
    document.querySelectorAll('.faq-el').forEach(function (item) {
      if (item.dataset.toggle === '0') {
        item.querySelector('.faq-el__title').classList.add(TITLE_CLOSED_CLASS);
        item.querySelector('.faq-el__content').classList.add(CONTENT_CLOSED_CLASS);
      }
    });
  }

  function onToggleFAQ(evt) {
    if (!evt.target.classList.contains('faq-el__link') && evt.key !== 'Enter') {
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

  startFaq();
  faqList.addEventListener('click', onToggleFAQ);
  faqList.addEventListener('keydown', onToggleFAQ);
})();
