var idbFactory = window.indexedDB;
var request = idbFactory.open('TestDatabase5', 9);
request.onerror = function (event) {
  var error = event.target.error;
  console.error(error.message);
};
request.onsuccess = function (event) {
  var database = event.target.result;
  var transaction = database.transaction(              // Öffnen der Transaktion
    'Books',
    'readwrite'                                        // Schreibender Zugriff
  );
  var objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
  var request = objectStore.get('978-3836217408');     // Lesen des Objekts
  request.onerror = function(event) {
    console.error(event.target.error.message);
  };
  request.onsuccess = function(event) {
    var book = request.result;
    book.title = 'Schrödinger programmiert Java'       // Aktualisieren des Objekts
    + ' - Das etwas andere Fachbuch';
    var requestUpdate = objectStore.put(book);         // Speichern des Objekts
    requestUpdate.onerror = function(event) {};
    requestUpdate.onsuccess = function(event) {};
  };
};
