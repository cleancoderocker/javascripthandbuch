function init() {

  (function() {
    const innerHTML = document.querySelector('#news li:nth-child(1)').innerHTML;
    console.log(innerHTML);
    // Output: <strong>Record news: </strong>New album by 
    // <em>Ben Harper</em> released.    
  })();

}

document.addEventListener('DOMContentLoaded', init);