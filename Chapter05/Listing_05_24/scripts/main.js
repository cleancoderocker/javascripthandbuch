function init() {

  (function() {
    const element = document.querySelector('#news li:nth-child(1)');
    element.textContent = 'Record news: New album by Tool not yet released.';    
  })();

}

document.addEventListener('DOMContentLoaded', init);