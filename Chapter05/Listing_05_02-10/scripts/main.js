function init() {
  const mainElement = document.getElementById('main'); // Select element by ID.
  if(mainElement !== null) {                           // If the element is not 
                                                       // empty,
    mainElement.className = 'border';                  // assign new CSS class.
  }
  

//   const tableRowsEven = document
//   .getElementsByClassName('even');              // Select all even 
//                                                 // table rows.
// if(tableRowsEven.length > 0) {                  // If at least one element 
//                                                 // is found.
//   for(let i=0; i<tableRowsEven.length; i++) {   // Iterate all elements.
//     const tableRow = tableRowsEven[i];          // Assign element to a variable.
//     tableRow.style.backgroundColor = '#CCCCCC'; // Set new background color.
//   }
// }



  /*
  .getElementsByClassName('even');              // Select all even 
                                                // table rows.
if(tableRowsEven.length > 0) {                  // If at least one element 
                                                // is found.
  for(let i=0; i<tableRowsEven.length; i++) {   // Iterate all elements.
    const tableRow = tableRowsEven.item(i);     // Assign element to a variable.
    tableRow.style.backgroundColor = '#CCCCCC'; // Set new background color.
  }
}

  */

  /*
  Array.prototype.forEach.call(tableRowsEven, (tableRow) => {
    tableRow.style.backgroundColor = '#CCCCCC';
  });
  */

  // (function() {
    // const tableCells = document.getElementsByTagName('td');
    // if(tableCells.length > 0) {                  // If at lease one element is 
    //                                              // found.
    //   for(let i=0; i<tableCells.length; i++) {   // Iterate all elements.
    //     const tableCell = tableCells[i];         // Assign element to a variable.
    //     tableCell.style.fontFamily = 'Verdana';  // Set new font.
    //     tableCell.style.fontSize = '9pt';        // Set new font size.
    //   }
    // }    
  // })();
}

document.addEventListener('DOMContentLoaded', init);