'use strict';
function init() {
  let idbFactory = window.indexedDB;
  let request = idbFactory.open('TestDatabase', 9);
  request.onerror = function (event) {
    let error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = function (event) {
    let database = event.target.result;
    let transaction = database.transaction(              // Öffnen der Transaktion
      'Books',
      'readwrite'                                        // Schreibender Zugriff
    );
    let objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    let request = objectStore.clear();                   // Löschvorgang
    request.onerror = function(event) {                  // Event-Handler für Fehlerfall
      console.error(event.target.error.message);         // Ausgabe der Fehlermeldung
    };
    request.onsuccess = function(event) {                // Event-Handler für Normalfall
      // Löschvorgang erfolgreich
      console.log('Alle Objekte gelöscht');
    };
  };

}
document.addEventListener('DOMContentLoaded', init);