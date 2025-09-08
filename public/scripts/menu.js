document.addEventListener("DOMContentLoaded", function () {
  const button = '.mt-header__toggle-button';
  const menu = '.mt-header__nav'

  $(button).on( "click", function() {
    console.log('hola')
    $(menu).toggleClass('mt-header__nav--open');
  });
});
