var idbFactory = window.indexedDB;
var request = idbFactory.open(
  'TestDatabase',
  9
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
  var transaction = database.transaction(              // Öffnen der Transaktion
    ['Books'],
    'readwrite'                                        // Schreibender Zugriff
  );
  var objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
  books.forEach(function(book) {
    console.log(book);
    objectStore.add(book);                             // Hinzufügen der Objekte
  });
};
request.onupgradeneeded = function (event) {
  var database = event.target.result;
  var objectStore = database.createObjectStore('Books', { keyPath: 'isbn' });
}
