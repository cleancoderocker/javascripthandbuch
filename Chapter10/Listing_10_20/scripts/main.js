'use strict';
$(document).ready(() => {
  $('input#username')
    .on('keypress', (event) => {
      console.log('Key for entering username pressed.');
    })
    .on('keydown', (event) => {
      console.log('Key is pressed.');
    })
    .on('keyup', (event) => {
      console.log('Key for entering username released.');
    });

});