'use strict';
$(document).ready(() => {
  $('input').on(
    'change',
    {
      value: 4711                       // Datenobjekt
    },
    (event) => {
      console.log(event.currentTarget); // aktuelles Element
      console.log(event.data);          // Datenobjekt
      console.log(event.data.value);    // Eigenschaft des Datenobjekts
      console.log(event.pageX);         // x-Position Maus
      console.log(event.pageY);         // y-Position Maus
    }
  );
});