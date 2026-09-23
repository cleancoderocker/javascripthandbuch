'use strict';
$(document).ready(() => {
  $('input#username')
    .focus((event) => {
      console.log('Input field focused.');
    })
    .blur((event) => {
      console.log('Input field no longer focused.');
    })
    .change((event) => {
      console.log('Text changed.');
    })
    .select((event) => {
      console.log('Text selected.');
    });
});