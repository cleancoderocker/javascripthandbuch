var idbFactory = window.indexedDB;
var request = idbFactory.open('TestDatabase5', 9);
request.onerror = function (event)
  var error = event.target.error;
  console.error(error.message);
};
request.onsuccess = function (event) {
  var database = event.target.result;
  var transaction = database.transaction(              // Öffnen der Transaktion
      'Books',
      'readwrite'                                      // Schreibender Zugriff
  );
  var objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
  var request = objectStore.delete('978-3836217408');  // Löschvorgang
  request.onerror = function(event) {                  // Event-Handler für Normalfall
    console.error(event.target.error.message);         // Ausgabe der Fehlermeldung
  };
  request.onsuccess = function(event) {                // Event-Handler für Normalfall
                                                       // Löschvorgang erfolgreich
  };
};
