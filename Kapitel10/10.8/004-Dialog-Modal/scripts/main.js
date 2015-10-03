$(document).ready(function () {
  'use strict';
  $('#dialog').dialog({
    resizable: false,           // Größenänderung nicht erlaubt
    height: 140,                // Höhe des Dialogs
    modal: true,                // Modaler Dialog
    buttons: {                  // Schaltflächen
      'Löschen': function () {
        $(this).dialog('close');
      },
      'Abbrechen': function () {
        $(this).dialog('close');
      }
    }
  });
});
