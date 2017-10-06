function init() {

  (function() {
    let tbody = document.querySelector('tbody');
    console.log(tbody.children.length);   // 4
    console.log(tbody.childElementCount); // 4
    console.log(tbody.childNodes.length); // 9
    console.log(tbody.hasChildNodes());   // true
  })();

  (function() {
    let tbody = document.querySelector('tbody');
    console.log(tbody.firstChild);  // Textknoten
    console.log(tbody.lastChild);   // Textknoten
  })();

  (function() {
    let tbody = document.querySelector('tbody');
    console.log(tbody.firstElementChild);  // <tr>
    console.log(tbody.lastElementChild);   // <tr>
  })();

  (function() {
    let tableCell = document.querySelector('tbody tr:nth-child(2)');
    console.log(tableCell.previousSibling);        // Textknoten
    console.log(tableCell.nextSibling);            // Textknoten
    console.log(tableCell.previousElementSibling); // <tr>
    console.log(tableCell.nextElementSibling);     // <tr>
  })();

  (function() {
    let table = document.querySelector('table');
    console.log(Object.getPrototypeOf(table));  // HTMLTableElement
    console.log(table.caption);                 // null
    console.log(table.tHead);                   // thead
    console.log(table.tBodies);                 // [tbody]
    console.log(table.rows);                    // [tr, tr.row.odd, tr.row.even, tr.row.odd, tr.row.even]
    console.log(table.tFoot);                   // null

    let newRow   = table.insertRow(1);
    let newCellFirstName  = newRow.insertCell(0);
    newCellFirstName.textContent = 'Bob';
    let newCellLastName  = newRow.insertCell(1);
    newCellLastName.textContent = 'Mustermann';
    let newCellEmail  = newRow.insertCell(2);
    newCellEmail.textContent = 'bob.mustermann@javascripthandbuch.de';

  })();
}

document.addEventListener('DOMContentLoaded', init);