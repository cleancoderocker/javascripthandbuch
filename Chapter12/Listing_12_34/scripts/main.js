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
    const transaction = database.transaction(                // Open the transaction
      'Books',
      'readwrite'                                            // Write access
    );
    const objectStore = transaction.objectStore('Books');    // Open the object store
    const request = objectStore.delete('978-3-8362-7272-8'); // Delete operation
    request.onerror = (event) => {                           // Event handler for...
      // ... Error case
      console.error(event.target.error.message);             // Output the error message
    };
    request.onsuccess = (event) => {                         // Event handler for... 
      // ... Normal case
      console.log('Delete operation successful');
    };
  };

}
document.addEventListener('DOMContentLoaded', init);