'use strict';
$(document).ready(() => {
  $('input#username')
    .keypress((event) => {
      console.log('Taste zur Eingabe des Nutzernamens gedrückt.');
    })
    .keydown((event) => {
      console.log('Taste wird gedrückt.');
    })
    .keyup((event) => {
      console.log('Taste zur Eingabe des Nutzernamens losgelassen.');
    });
});