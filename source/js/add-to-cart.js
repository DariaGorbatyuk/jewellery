'use strict';
var addToCartID = document.querySelector('#add-product');
var btnAddToCart = document.querySelector('.product-card__add-link');
var body = document.querySelector('body');

if (addToCartID) {
  var addToCartTemplate = addToCartID.content.querySelector('.overlay');
}


function addProduct(evt) {
  evt.preventDefault();
  var newAddToCart = addToCartTemplate.cloneNode(true);
  var btnClose = newAddToCart.querySelector('.add-product__close');
  body.insertAdjacentElement('afterbegin', newAddToCart);
  body.classList.add('overflow');
  newAddToCart.classList.add('overflow--scroll');
  newAddToCart.querySelector('.product-item-to-cart__btn--plus').focus();
  btnClose.addEventListener('click', closeAddToCart);
  document.addEventListener('click', closeAddToCart);
  document.addEventListener('keydown', closeAddToCart);

  function closeAddToCart(e) {
    if (e.key !== 'Escape' && !e.target.matches('.add-product__close') && !e.target.matches('.overlay')) {
      return;
    }
    newAddToCart.remove();
    body.classList.remove('overflow');
  }
}

if (addToCartTemplate) {
  btnAddToCart.addEventListener('click', addProduct);
}
