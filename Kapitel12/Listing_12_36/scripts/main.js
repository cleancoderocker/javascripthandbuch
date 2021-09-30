'use strict';
function init() {
  let idbFactory = window.indexedDB;
  let request = idbFactory.open('TestDatabase', 9);
  request.onerror = (event) => {
    let error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    let database = event.target.result;
    let transaction = database.transaction(              // Öffnen der Transaktion
      'Books',
      'readwrite'                                        // schreibender Zugriff
    );
    let objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    let request = objectStore.get('978-3-8362-7272-8');     // Lesen des Objekts
    request.onerror = (event) => {
      console.error(event.target.error.message);
    };
    request.onsuccess = (event) => {
      let book = request.result;
      book.title = 'Schrödinger programmiert Java'       // Aktualisieren des Objekts
        + ' - Das etwas andere Fachbuch';
      let requestUpdate = objectStore.put(book);         // Speichern des Objekts
      requestUpdate.onerror = (event) => { };
      requestUpdate.onsuccess = (event) => { };
    };
  };
}
document.addEventListener('DOMContentLoaded', init);