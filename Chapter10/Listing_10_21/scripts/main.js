'use strict';
$(document).ready(() => {
  $('input#username')
    .on('focus', (event) => {
      console.log('Input field focused.');
    })
    .on('blur', (event) => {
      console.log('Input field no longer focused.');
    })
    .on('change', (event) => {
      console.log('Text changed.');
    })
    .on('input', (event) => {
      console.log('Value of field changed.');
    })
    .on('select', (event) => {
      console.log('Text selected.');
    });
});