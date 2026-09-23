'use strict';
function init() {
  const idbFactory = window.indexedDB;
  const request = idbFactory.open(
    'TestDatabase',
    1
  );
  const books = [
    {
      'isbn': '978-1-4932-2286-5',
      'title': 'JavaScript: The Comprehensive Guide',
      'author': 'Philip Ackermann'
    },
    {
      'isbn': '978-1-4932-2292-6',
      'title': 'Node.js: The Comprehensive Guide',
      'author': 'Sebastian Springer'
    }
  ] 
  request.onerror = (event) => {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    const database = event.target.result;
    const transaction = database.transaction('Books');
    const objectStore = transaction.objectStore('Books');
    var request = objectStore.openCursor();
    const books = [];
    request.onsuccess = (event) => {
      const cursor = event.target.result;
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
    const database = event.target.result;
    const objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
    books.forEach((book) => {
      objectStore.add(book);
    });
  }
}
document.addEventListener('DOMContentLoaded', init);