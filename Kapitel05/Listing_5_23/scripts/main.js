function init() {

  (function() {
    let element = document.querySelector('#news li:nth-child(1)');
    element.textContent = '<strong>Platten-News:</strong> Neues Album von <em>Tool</em> immer noch nicht erschienen.';
  })();

}

document.addEventListener('DOMContentLoaded', init);