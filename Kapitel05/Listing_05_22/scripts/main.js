function init() {

  (function() {
    const element = document.querySelector('#news li:nth-child(1)');
    element.textContent = 'Platten-News: Neues Album von Tool endlich erschienen.';
  })();

}

document.addEventListener('DOMContentLoaded', init);