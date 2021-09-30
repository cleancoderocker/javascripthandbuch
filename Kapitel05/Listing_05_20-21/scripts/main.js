function init() {

  (function() {
    const textContent = document.querySelector('#news li:nth-child(1)').textContent;
    console.log(textContent);
    // Ausgabe: Platten-News: Neues Album von Ben Harper erschienen.
  })();

}

document.addEventListener('DOMContentLoaded', init);