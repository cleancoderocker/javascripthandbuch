'use strict';
$(document).ready(() => {
  $('input').on(
    'change',
    {
      value: 4711
    },
    (event) => {
      console.log(event.currentTarget);
      console.log(event.data);
      console.log(event.data.value);
      console.log(event.pageX);
      console.log(event.pageY);
    }
  );
});