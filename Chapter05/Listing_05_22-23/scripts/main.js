function init() {

  (function() {
    const textContent = document.querySelector('#news li:nth-child(1)').textContent;
    console.log(textContent);
    // Output: Record news: New album by Ben Harper released.    
  })();

}

document.addEventListener('DOMContentLoaded', init);