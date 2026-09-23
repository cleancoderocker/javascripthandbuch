'use strict';
$(document).ready(() => {
  $('button#target').click((event) => {
    console.log('Button was pressed');
  });
  $('button#target2').click((event) => {
    $('button#target').click();
  });  
});