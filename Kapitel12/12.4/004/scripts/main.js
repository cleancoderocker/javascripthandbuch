var idbFactory = window.indexedDB;
var request = idbFactory.open('TestDatabase5', 9);
request.onerror = function (event) {
  var error = event.target.error;
  console.error(error.message);
};
request.onsuccess = function (event) {
  var database = event.target.result;
  var transaction = database.transaction('Books');     // Öffnen der Transaktion
  var objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
  var request = objectStore.get('978-3836223799');     // Suche nach Schlüssel
  request.onerror = function(event) {                  // Event-Handler für Fehlerfall
    console.error(event.target.error.message);         // Ausgabe der Fehlermeldung
  };
  request.onsuccess = function(event) {                // Event-Handler für Normalfall
    console.log(request.result);                       // Ausgabe des Objekts
  };
};
