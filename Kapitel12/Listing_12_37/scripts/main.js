'use strict';
function init() {
  let idbFactory = window.indexedDB;
  let request = idbFactory.open(
    'TestDatabase',
    1
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
  request.onerror = (event) => {
    let error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    let database = event.target.result;
    let transaction = database.transaction('Books');
    let objectStore = transaction.objectStore('Books');
    var request = objectStore.openCursor();
    let books = [];
    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        console.log(cursor.key);
        console.log(cursor.value);
        books.push(cursor.value);
        cursor.continue();
      } else {
        console.log(books);
      }
    };
  };
  request.onupgradeneeded = (event) => {
    let database = event.target.result;
    let objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
    books.forEach((book) => {
      objectStore.add(book);
    });
  }
}
document.addEventListener('DOMContentLoaded', init);