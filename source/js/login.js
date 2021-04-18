'use strict';

var loginTemplate = document.querySelector('#login').content.querySelector('.overlay');
var btnOpenLogin = document.querySelector('.user-nav__login');
var btnOpenLoginSmall = document.querySelector('.nav__login');
var body = document.querySelector('body');

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
  var newLoginForm = loginTemplate.cloneNode(true);
  var email = newLoginForm.querySelector('#login-email');
  var btnClose = newLoginForm.querySelector('.close');
  var loginForm = newLoginForm.querySelector('.login-form');
  body.insertAdjacentElement('afterbegin', newLoginForm);
  body.classList.add('overflow');
  newLoginForm.classList.add('overflow--scroll');
  email.focus();
  btnClose.addEventListener('click', closeLoginForm);
  document.addEventListener('click', closeLoginForm);
  document.addEventListener('keydown', closeLoginForm);
  loginForm.addEventListener('submit', onLoginFormSubmit);
  setStorage(email);

  function closeLoginForm(e) {
    if (e.key !== 'Escape' && !e.target.matches('.close') && !e.target.matches('.overlay')) {
      return;
    }
    newLoginForm.remove();
    body.classList.remove('overflow');
  }

  function onLoginFormSubmit(ev) {
    ev.preventDefault();
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
