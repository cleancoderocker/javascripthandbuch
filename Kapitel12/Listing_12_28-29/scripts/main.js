'use strict';
function init() {
  let idbFactory = window.indexedDB;      // Zugriff auf das Helferobjekt
  let request = idbFactory.open(          // Öffnen der Datenbank ...
    'TestDatabase',                       // ... anhand des Namens ...
    1                                     // ... und optional der Version.
  );
  request.onerror = (event) => {          // Event-Handler für den Fehlerfall
    let error = event.target.error;       // Zugriff auf den Fehler
    console.error(error.message);         // Ausgabe des Fehlers
  };
  request.onsuccess = (event) => {        // Event-Handler für den Normalfall
    let database = event.target.result;   // Zugriff auf die Datenbank
    console.log(database.name);           // Ausgabe: "TestDatabase"
    console.log(database.version);        // Ausgabe: 1
  };

  request.onupgradeneeded = (event) => {
    console.log(event.oldVersion);        // Alte Version der Datenbank
    console.log(event.newVersion);        // Neue Version der Datenbank
    let database = event.target.result;   // Zugriff auf die Datenbank
  }
}
document.addEventListener('DOMContentLoaded', init);