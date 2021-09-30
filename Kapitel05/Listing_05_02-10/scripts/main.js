function init() {
  // Selektion nach ID
  const mainElement = document.getElementById('main');
  mainElement.className = 'border';

  // Selektion nach Klassennamen
  const tableRowsEven = document
    .getElementsByClassName('even');              // Selektiere alle geraden Tabellenzeilen
  if(tableRowsEven.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
    for(let i=0; i<tableRowsEven.length; i++) {   // Gehe alle Elemente durch
      const tableRow = tableRowsEven[i];            // Weise Element einer Variablen zu
      tableRow.style.backgroundColor = '#CCCCCC'; // Setze neue Hintergrundfarbe
    }
  }

  /*
  const tableRowsEven = document
    .getElementsByClassName('even');              // Selektiere alle geraden Tabellenzeilen
  if(tableRowsEven.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
    for(let i=0; i<tableRowsEven.length; i++) {   // Gehe alle Elemente durch
      const tableRow = tableRowsEven.item(i);       // Weise Element einer Variablen zu
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
    const tableCells = document.getElementsByTagName('td');
    if(tableCells.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
      for(let i=0; i<tableCells.length; i++) {   // Gehe alle Elemente durch
        const tableCell = tableCells[i];           // Weise Element einer Variablen zu
        tableCell.style.fontFamily = 'Verdana';  // Setze neue Schriftart
        tableCell.style.fontSize = '9pt';        // Setze neue Schriftgröße
      }
    }
  })();
}

document.addEventListener('DOMContentLoaded', init);