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
    let request = objectStore.delete('978-3836217408');  // Löschvorgang
    request.onerror = function(event) {                  // Event-Handler für Normalfall
      console.error(event.target.error.message);         // Ausgabe der Fehlermeldung
    };
    request.onsuccess = function(event) {                // Event-Handler für Normalfall
      // Löschvorgang erfolgreich
      console.log('Objekt gelöscht');
    };
  };

}
document.addEventListener('DOMContentLoaded', init);