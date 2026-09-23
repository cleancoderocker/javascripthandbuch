function init() {

  (function() {
    const element = document.querySelector('#news li:nth-child(1)');
    element.innerHTML = '<strong>Record news:</strong> New album by <em>Tool</em> not yet released.';
  })();

}

document.addEventListener('DOMContentLoaded', init);