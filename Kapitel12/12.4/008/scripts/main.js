var idbFactory = window.indexedDB;
var request = idbFactory.open(
  'TestDatabaseIndex',
  1
);
var books = [
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
  var error = event.target.error;
  console.error(error.message);
};
request.onsuccess = function (event) {
  var database = event.target.result;
  var transaction = database.transaction('Books');
  var objectStore = transaction.objectStore('Books');
  var index = objectStore.index('author');
  index.get('Philip Ackermann').onsuccess = function(event) {
    console.log(event.target.result);
  };

  index.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key);
      console.log(cursor.value);
      cursor.continue();
    }
  };

  index.openKeyCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key);
      console.log(cursor.primaryKey);
      cursor.continue();
    }
  };
};
request.onupgradeneeded = function (event) {
  var database = event.target.result;
  var objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
  objectStore.createIndex('author', 'author', { unique: false });
  books.forEach(function(book) {
    objectStore.add(book);
  });
}
