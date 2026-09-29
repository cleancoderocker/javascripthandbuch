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
    const transaction = database.transaction(
      'Books',
      'readwrite'
    );
    const objectStore = transaction.objectStore('Books');
    const request = objectStore.clear();
    request.onerror = (event) => {
      console.error(event.target.error.message);
    };
    request.onsuccess = (event) => {
      console.log('All objects deleted');
    };
  };

}
document.addEventListener('DOMContentLoaded', init);