'use strict';
$(document).ready(() => {
  $('main').animate(
    { opacity: 0.75 }, // Properties
    'fast',            // Speed
    'swing',           // Easing 
    () => {
      // Animation completed
    }
  );
});