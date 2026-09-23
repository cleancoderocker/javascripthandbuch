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
    const transaction = database.transaction(             // Open the transaction
      'Books',
      'readwrite'                                         // Write access
    );
    const objectStore = transaction.objectStore('Books'); // Open the object store
    const request = objectStore.get('978-3-8362-7272-8'); // Read the object
    request.onerror = (event) => {
      console.error(event.target.error.message);
    };
    request.onsuccess = (event) => {
      const book = request.result;
      book.title = 'Schrödinger programmiert Java'         // Update the object
        + ' - Das etwas andere Fachbuch';
      const requestUpdate = objectStore.put(book);         // Store the object
      requestUpdate.onerror = (event) => { };
      requestUpdate.onsuccess = (event) => { };
    };
  };

}
document.addEventListener('DOMContentLoaded', init);