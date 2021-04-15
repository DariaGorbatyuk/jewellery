'use strict';

(function () {
  const addToCartTemplate = document.querySelector('#add-product').content.querySelector('.add-product__overlay');
  const btnAddToCart = document.querySelector('.product-card__add-link');
  const body = document.querySelector('body');

  function addProduct(evt) {
    evt.preventDefault();
    const newAddToCart = addToCartTemplate.cloneNode(true);
    const btnClose = newAddToCart.querySelector('.add-product__close');
    body.insertAdjacentElement('afterbegin', newAddToCart);
    btnClose.addEventListener('click', closeAddToCart);

    function closeAddToCart(evt) {
      newAddToCart.remove();
    }
  }

  btnAddToCart.addEventListener('click', addProduct);
})();
