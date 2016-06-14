let idbFactory = window.indexedDB;
let request = idbFactory.open(
  'TestDatabaseIndex',
  1
);
let books = [
  {
    'isbn': '978-3836217408',
    'title': 'Schrödinger programmiert Java',
    'author': 'Philip Ackermann'
  },
  {
    'isbn': '978-3836223799',
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
  let transaction = database.transaction('Books');
  let objectStore = transaction.objectStore('Books');
  let index = objectStore.index('author');
  index.get('Philip Ackermann').onsuccess = function(event) {
    console.log(event.target.result);
  };

  let books = [];
  index.openCursor().onsuccess = function(event) {
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

  let keys = [];
  index.openKeyCursor().onsuccess = function(event) {
    let cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key);
      console.log(cursor.primaryKey);
      keys.push(cursor.primaryKey);
      cursor.continue();
    } else {
      console.log(keys);
    }
  };
};
request.onupgradeneeded = function (event) {
  let database = event.target.result;
  let objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
  objectStore.createIndex('author', 'author', { unique: false });
  books.forEach(function(book) {
    objectStore.add(book);
  });
}
