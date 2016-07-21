'use strict';
$(document).ready(() => {
  $('input#username')
    .focus((event) => {
      console.log('Eingabefeld fokussiert.');
    })
    .blur((event) => {
      console.log('Eingabefeld nicht mehr fokussiert.');
    })
    .change((event) => {
      console.log('Text geändert.');
    })
    .select((event) => {
      console.log('Text ausgewählt.');
    });
});