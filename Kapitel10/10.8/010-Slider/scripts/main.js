$(document).ready(function () {
  'use strict';
  $('#slider').slider({
    range: true,                  // Wertebereich
    min: 50,                      // Minimum
    max: 500,                     // Maximum
    values: [200, 400],           // Standardwerte
    slide: function (event, ui) { // Event-Handler
      updateInput(                // Eingabefeld aktualisieren
        ui.values[0],             // Wert für Minimum
        ui.values[1]              // Wert für Maximum
      );
    }
  });

  function updateInput(min, max) {
    $('#amount').val(min + ' - ' + max);
  }

  updateInput(
    $('#slider').slider('values', 0),
    $('#slider').slider('values', 1)
  );
});
