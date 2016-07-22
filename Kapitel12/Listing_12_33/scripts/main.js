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
    let transaction = database.transaction('Books');     // Öffnen der Transaktion
    let objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    let request = objectStore.get('978-3836223799');     // Suche nach Schlüssel
    request.onerror = function(event) {                  // Event-Handler für Fehlerfall
      console.error(event.target.error.message);         // Ausgabe der Fehlermeldung
    };
    request.onsuccess = function(event) {                // Event-Handler für Normalfall
      console.log(request.result);                       // Ausgabe des Objekts
    };
  };

}
document.addEventListener('DOMContentLoaded', init);