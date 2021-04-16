'use strict';

(function () {
  const addToCartTemplate = document.querySelector('#add-product').content.querySelector('.overlay');
  const btnAddToCart = document.querySelector('.product-card__add-link');
  const body = document.querySelector('body');

  function addProduct(evt) {
    evt.preventDefault();
    const newAddToCart = addToCartTemplate.cloneNode(true);
    const btnClose = newAddToCart.querySelector('.add-product__close');
    body.insertAdjacentElement('afterbegin', newAddToCart);
    btnClose.addEventListener('click', closeAddToCart);
    document.addEventListener('click', closeAddToCart);
    document.addEventListener('keydown', closeAddToCart);

    function closeAddToCart(evt) {
      if (evt.key !== 'Escape' && !evt.target.matches('.add-product__close') && !evt.target.matches('.overlay')) {
        return;
      }
      newAddToCart.remove();
    }
  }
  btnAddToCart.addEventListener('click', addProduct);
})();
