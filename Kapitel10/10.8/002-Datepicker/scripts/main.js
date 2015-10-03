$(document).ready(function () {
  'use strict';
  $('#datepicker').datepicker({
    showOtherMonths: true,        // Andere Monate anzeigen
    selectOtherMonths: true,      // Andere Monate auswählbar
    showButtonPanel: true,        // Schaltflächen anzeigen
    minDate: -20,                 // Mindestdatum
    maxDate: '+1M +10D',          // Maximaldatum
    showWeek: true                // Kalenderwochen anzeigen
  });
});
