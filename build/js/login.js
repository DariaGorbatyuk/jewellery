'use strict';

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
