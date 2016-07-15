function init() {

  (function() {
    let element = document.querySelector('#news li:nth-child(1)');
    element.textContent = 'Platten-News: Neues Album von Tool immer noch nicht erschienen.';
  })();

}

document.addEventListener('DOMContentLoaded', init);