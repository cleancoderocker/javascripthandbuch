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
    console.log(tbody.firstChild);        // Text node
    console.log(tbody.lastChild);         // Text node
    console.log(tbody.firstElementChild); // <tr>
    console.log(tbody.lastElementChild);  // <tr>
  })();

  (function() {
    const tableCell = document.querySelector('tbody tr:nth-child(2)');
    console.log(tableCell.previousSibling);        // Text node
    console.log(tableCell.nextSibling);            // Text node
    console.log(tableCell.previousElementSibling); // <tr>
    console.log(tableCell.nextElementSibling);     // <tr>
  })();

}

document.addEventListener('DOMContentLoaded', init);