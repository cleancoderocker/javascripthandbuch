function init() {

  (function() {
    const innerHTML = document.querySelector('#news li:nth-child(1)').innerHTML;
    console.log(innerHTML);
    // Ausgabe: <strong>Platten-News: </strong>Neues Album von
    // <em>Tool</em> erschienen.
  })();

}

document.addEventListener('DOMContentLoaded', init);