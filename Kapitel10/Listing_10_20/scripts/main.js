'use strict';
$(document).ready(() => {
  $('input#username')
    .on('keypress', (event) => {
      console.log('Taste zur Eingabe des Nutzernamens gedrückt.');
    })
    .on('keydown', (event) => {
      console.log('Taste wird gedrückt.');
    })
    .on('keyup', (event) => {
      console.log('Taste zur Eingabe des Nutzernamens losgelassen.');
    });

});