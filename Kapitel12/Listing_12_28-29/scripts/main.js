'use strict';
function init() {
  const idbFactory = window.indexedDB;    // Zugriff auf das Helferobjekt
  const request = idbFactory.open(        // Öffnen der Datenbank ...
    'TestDatabase',                       // ... anhand des Namens ...
    1                                     // ... und optional der Version.
  );
  request.onerror = (event) => {          // Event-Handler für den Fehlerfall
    const error = event.target.error;     // Zugriff auf den Fehler
    console.error(error.message);         // Ausgabe des Fehlers
  };
  request.onsuccess = (event) => {        // Event-Handler für den Normalfall
    const database = event.target.result; // Zugriff auf die Datenbank
    console.log(database.name);           // Ausgabe: "TestDatabase"
    console.log(database.version);        // Ausgabe: 1
  };

  request.onupgradeneeded = (event) => {
    console.log(event.oldVersion);        // Alte Version der Datenbank
    console.log(event.newVersion);        // Neue Version der Datenbank
    const database = event.target.result;   // Zugriff auf die Datenbank
  }
}
document.addEventListener('DOMContentLoaded', init);