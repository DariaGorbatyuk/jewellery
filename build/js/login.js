'use strict';

(function () {
  const loginTemplate = document.querySelector('#login').content.querySelector('.overlay');
  const btnOpenLogin = document.querySelector('.user-nav__login');
  const btnOpenLoginSmall = document.querySelector('.nav__login');
  const body = document.querySelector('body');

  function openLoginForm(evt) {
    evt.preventDefault();
    const newLoginForm = loginTemplate.cloneNode(true);
    const btnClose = newLoginForm.querySelector('.close');
    body.insertAdjacentElement('afterbegin', newLoginForm);
    btnClose.addEventListener('click', closeLoginForm);
    document.addEventListener('click', closeLoginForm);
    document.addEventListener('keydown', closeLoginForm);

    function closeLoginForm(evt) {
      if (evt.key !== 'Escape' && !evt.target.matches('.close') && !evt.target.matches('.overlay')) {
        return;
      }
      newLoginForm.remove();
    }
  }
  btnOpenLogin.addEventListener('click', openLoginForm);
  btnOpenLoginSmall.addEventListener('click', openLoginForm);
})();
