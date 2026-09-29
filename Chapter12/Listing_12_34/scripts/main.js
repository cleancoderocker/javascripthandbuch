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
    const transaction = database.transaction('Books');
    const objectStore = transaction.objectStore('Books');
    const request = objectStore.get('978-3-8362-7272-8');
    request.onerror = (event) => {
      console.error(event.target.error.message);
    };
    request.onsuccess = (event) => {
      console.log(request.result);
    };
  };

}
document.addEventListener('DOMContentLoaded', init);