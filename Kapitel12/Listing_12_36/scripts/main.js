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
    let request = objectStore.get('978-3836245838');     // Lesen des Objekts
    request.onerror = function(event) {
      console.error(event.target.error.message);
    };
    request.onsuccess = function(event) {
      let book = request.result;
      book.title = 'Schrödinger programmiert Java'       // Aktualisieren des Objekts
      + ' - Das etwas andere Fachbuch';
      let requestUpdate = objectStore.put(book);         // Speichern des Objekts
      requestUpdate.onerror = function(event) {};
      requestUpdate.onsuccess = function(event) {};
    };
  };
}
document.addEventListener('DOMContentLoaded', init);