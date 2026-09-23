'use strict';
$(document).ready(() => {
  $('input#username')
    .keypress((event) => {
      console.log('Key for entering username pressed.');
    })
    .keydown((event) => {
      console.log('Key is pressed.');
    })
    .keyup((event) => {
      console.log('Key for entering username released.');
    });
});