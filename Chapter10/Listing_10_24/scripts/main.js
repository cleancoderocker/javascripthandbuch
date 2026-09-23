'use strict';
$(document).ready(() => {
  $('input').on(
    'change',
    {
      value : 4711                       // Data object
    },
    (event) => {
      console.log(event.currentTarget);  // current element
      console.log(event.data);           // data object
      console.log(event.data.value);     // property of the data object
      console.log(event.pageX);          // x position of mouse
      console.log(event.pageY);          // y position of mouse
    }
  );  
});