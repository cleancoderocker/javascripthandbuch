function init() {
  // Selektion nach ID
  let mainElement = document.getElementById('main');
  mainElement.className = 'border';

  // Selektion nach Klassennamen
  let tableRowsEven = document
    .getElementsByClassName('even');              // Selektiere alle geraden Tabellenzeilen
  if(tableRowsEven.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
    for(let i=0; i<tableRowsEven.length; i++) {   // Gehe alle Elemente durch
      let tableRow = tableRowsEven[i];            // Weise Element einer Variablen zu
      tableRow.style.backgroundColor = '#CCCCCC'; // Setze neue Hintergrundfarbe
    }
  }

  /*
  let tableRowsEven = document
    .getElementsByClassName('even');              // Selektiere alle ungeraden Tabellenzeilen
  if(tableRowsEven.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
    for(let i=0; i<tableRowsEven.length; i++) {   // Gehe alle Elemente durch
      let tableRow = tableRowsEven.item(i);       // Weise Element einer Variablen zu
      tableRow.style.backgroundColor = '#CCCCCC'; // Setze neue Hintergrundfarbe
    }
  }
  */

  /*
  Array.prototype.forEach.call(tableRowsEven, (tableRow) => {
    tableRow.style.backgroundColor = '#CCCCCC';
  });
  */

  (function() {
    let tableCells = document.getElementsByTagName('td');
    if(tableCells.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
      for(let i=0; i<tableCells.length; i++) {   // Gehe alle Elemente durch
        let tableCell = tableCells[i];           // Weise Element einer Variablen zu
        tableCell.style.fontFamily = 'Verdana';  // Setze neue Schriftart
        tableCell.style.fontSize = '9pt';        // Setze neue Schriftgröße
      }
    }
  })();

  (function() {
    let tableCell = document.querySelector('#main table td:nth-child(2)');
    tableCell.style.border = 'thick solid red';

    let tableCells = document.querySelectorAll('#main table td:nth-child(2)');
    if(tableCells.length > 0) {
      for(let i=0; i<tableCells.length; i++) {
        let tableCell = tableCells[i];
        tableCell.style.border = 'thick solid red';
      }
    }
  })();

  (function() {
    let table = document.querySelector('table');
    console.log(table.parentNode);     // <main>
    console.log(table.parentElement);  // <main>
  })();

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