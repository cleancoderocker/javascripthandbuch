function init() {

  (function() {
    const table = document.querySelector('table');
    console.log(Object.getPrototypeOf(table));  // HTMLTableElement
    console.log(table.caption);                 // null
    console.log(table.tHead);                   // thead
    console.log(table.tBodies);                 // [tbody]
    console.log(table.rows);                    // [tr, tr.row.odd, tr.row.even, tr.row.odd, tr.row.even]
    console.log(table.tFoot);                   // null

    const newRow   = table.insertRow(1);
    const newCellFirstName  = newRow.insertCell(0);
    newCellFirstName.textContent = 'Bob';
    const newCellLastName  = newRow.insertCell(1);
    newCellLastName.textContent = 'Doe';
    const newCellEmail  = newRow.insertCell(2);
    newCellEmail.textContent = 'bob.doe@javascripthandbuch.de';    

  })();
}

document.addEventListener('DOMContentLoaded', init);