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
  request.onerror = function (event) {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = function (event) {
    const database = event.target.result;
    const transaction = database.transaction(              // Öffnen der Transaktion
      ['Books'],
      'readwrite'                                          // Schreibender Zugriff
    );
    const objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    books.forEach(function(book) {
      console.log(book);
      objectStore.add(book);                               // Hinzufügen der Objekte
    });
  };
  request.onupgradeneeded = function (event) {
    const database = event.target.result;
    const objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
  }
}
document.addEventListener('DOMContentLoaded', init);