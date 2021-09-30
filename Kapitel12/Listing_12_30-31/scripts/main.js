'use strict';
function init() {
  let idbFactory = window.indexedDB;
  let request = idbFactory.open(
    'TestDatabase',
    9
  );
  let books = [
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
    let error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = function (event) {
    let database = event.target.result;
    let transaction = database.transaction(              // Öffnen der Transaktion
      ['Books'],
      'readwrite'                                        // Schreibender Zugriff
    );
    let objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    books.forEach(function(book) {
      console.log(book);
      objectStore.add(book);                             // Hinzufügen der Objekte
    });
  };
  request.onupgradeneeded = function (event) {
    let database = event.target.result;
    let objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
  }
}
document.addEventListener('DOMContentLoaded', init);