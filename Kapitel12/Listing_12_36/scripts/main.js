'use strict';
function init() {
  const idbFactory = window.indexedDB;
  const request = idbFactory.open('TestDatabase', 9);
  request.onerror = (event) => {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    const database = event.target.result;
    const transaction = database.transaction(              // Öffnen der Transaktion
      'Books',
      'readwrite'                                          // schreibender Zugriff
    );
    const objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    const request = objectStore.get('978-3-8362-7272-8');  // Lesen des Objekts
    request.onerror = (event) => {
      console.error(event.target.error.message);
    };
    request.onsuccess = (event) => {
      const book = request.result;
      book.title = 'Schrödinger programmiert Java'         // Aktualisieren des Objekts
        + ' - Das etwas andere Fachbuch';
      const requestUpdate = objectStore.put(book);         // Speichern des Objekts
      requestUpdate.onerror = (event) => { };
      requestUpdate.onsuccess = (event) => { };
    };
  };
}
document.addEventListener('DOMContentLoaded', init);