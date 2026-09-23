function init() {

  (function() {
    const tableCell = document.querySelector('#main table td:nth-child(2)');
    tableCell.style.border = 'thick solid red';

    const tableCells = document.querySelectorAll('#main table td:nth-child(2)');
    if(tableCells.length > 0) {
      for(let i=0; i<tableCells.length; i++) {
        const tableCell = tableCells[i];
        tableCell.style.border = 'thick solid red';
      }
    }
  })();

  (function() {
    const table = document.querySelector('table');
    console.log(table.parentNode);     // <main>
    console.log(table.parentElement);  // <main>
  })();

}

document.addEventListener('DOMContentLoaded', init);