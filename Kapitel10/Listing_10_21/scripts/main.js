'use strict';
$(document).ready(() => {
  $('input#username')
    .on('focus', (event) => {
      console.log('Eingabefeld fokussiert.');
    })
    .on('blur', (event) => {
      console.log('Eingabefeld nicht mehr fokussiert.');
    })
    .on('change', (event) => {
      console.log('Text geändert.');
    })
    .on('input', (event) => {
      console.log('Wert des Feldes geändert.');
    })
    .on('select', (event) => {
      console.log('Text ausgewählt.');
    });
});