'use strict';
$(document).ready(() => {
  $('button#target').click((event) => {
    console.log('Schaltfläche wurde gedrückt');
  });
  $('button#target2').click((event) => {
    $('button#target').click();
  });
});