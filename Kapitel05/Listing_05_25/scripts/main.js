function init() {

  (function() {
    const element = document.querySelector('#news li:nth-child(1)');
    element.textContent = '<strong>Platten-News:</strong> Neues Album von <em>Tool</em> endlich erschienen.';
  })();

}

document.addEventListener('DOMContentLoaded', init);