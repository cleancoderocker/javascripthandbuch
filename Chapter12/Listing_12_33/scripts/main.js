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
    const transaction = database.transaction('Books');    // Open the transaction
    const objectStore = transaction.objectStore('Books'); // Open the object store
    const request = objectStore.get('978-3-8362-5687-2'); // Search for key
    request.onerror = (event) => {                        // Event handler for ... 
      // ... Error case
      console.error(event.target.error.message);          // Output of the error message
    };
    request.onsuccess = (event) => {                      // Event handler for ...
      // ... Normal case
      console.log(request.result);                        // Output of the object
    };
  };
}
document.addEventListener('DOMContentLoaded', init);