'use strict';
function init() {
  const idbFactory = window.indexedDB;
  const request = idbFactory.open(
    'TestDatabase',
    9
  );
  const books = [
    {
      'isbn': '978-3-8362-7272-8',
      'title': 'Schrödinger programmiert Java',
      'author': 'Philip Ackermann'
    },
    {
      'isbn': '978-3-8362-5687-2',
      'title': 'Professionell entwickeln mit JavaScript',
      'author': 'Philip Ackermann'
    }
  ]
  request.onerror = (event) => {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    const database = event.target.result;
    const transaction = database.transaction(              // Open the transaction
      ['Books'],
      'readwrite'                                          // write access
    );
    const objectStore = transaction.objectStore('Books');  // Open the object store
    books.forEach(function (book) {
      objectStore.add(book);                               // Adding the objects
    });
  };
  request.onupgradeneeded = (event) => {
    const database = event.target.result;
    const objectStore = database
      .createObjectStore('Books', { keyPath: 'isbn' });
  }
}
document.addEventListener('DOMContentLoaded', init);