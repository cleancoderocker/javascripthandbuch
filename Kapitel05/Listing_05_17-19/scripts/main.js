function init() {

  (function() {
    const tbody = document.querySelector('tbody');
    console.log(tbody.children.length);   // 4
    console.log(tbody.childElementCount); // 4
    console.log(tbody.childNodes.length); // 9
    console.log(tbody.hasChildNodes());   // true
  })();

  (function() {
    const tbody = document.querySelector('tbody');
    console.log(tbody.firstChild);        // Textknoten
    console.log(tbody.lastChild);         // Textknoten
    console.log(tbody.firstElementChild); // <tr>
    console.log(tbody.lastElementChild);  // <tr>
  })();

  (function() {
    const tableCell = document.querySelector('tbody tr:nth-child(2)');
    console.log(tableCell.previousSibling);        // Textknoten
    console.log(tableCell.nextSibling);            // Textknoten
    console.log(tableCell.previousElementSibling); // <tr>
    console.log(tableCell.nextElementSibling);     // <tr>
  })();

}

document.addEventListener('DOMContentLoaded', init);