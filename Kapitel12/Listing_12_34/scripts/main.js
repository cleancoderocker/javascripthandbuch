'use strict';
function init() {
  const idbFactory = window.indexedDB;
  const request = idbFactory.open('TestDatabase', 9);
  request.onerror = (event) => {
    const error = event.target.error;
    console.error(error.message);
  };
  request.onsuccess = (event) => {
    const database = event.target.result;
    const transaction = database.transaction('Books');     // Öffnen der Transaktion
    const objectStore = transaction.objectStore('Books');  // Öffnen des Objektspeichers
    const request = objectStore.get('978-3-8362-5687-2');  // Suche nach Schlüssel
    request.onerror = (event) => {                         // Event-Handler für Fehlerfall
      console.error(event.target.error.message);           // Ausgabe der Fehlermeldung
    };
    request.onsuccess = (event) => {                       // Event-Handler für Normalfall
      console.log(request.result);                         // Ausgabe des Objekts
    };
  };

}
document.addEventListener('DOMContentLoaded', init);