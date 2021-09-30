'use strict';
$(document).ready(() => {
  $('#main').animate(
    { opacity: 0.75 },  // Eigenschaften
    'fast',             // Geschwindigkeit
    'swing',            // Easing
    () => {
      // Animation abgeschlossen
    }
  );
});