var idbFactory = window.indexedDB;      // Zugriff auf das Helferobjekt
var request = idbFactory.open(          // Öffnen der Datenbank ...
  'TestDatabase',                       // ... anhand des Namens ...
  1                                     // ... und optional der Version.
);
request.onerror = function (event) {    // Event-Handler für den Fehlerfall
  var error = event.target.error;       // Zugriff auf den Fehler
  console.error(error.message);         // Ausgabe des Fehlers
};
request.onsuccess = function (event) {  // Event-Handler für den Normalfall
  var database = event.target.result;   // Zugriff auf die Datenbank
  console.log(database.name);           // Ausgabe: "TestDatabase"
  console.log(database.version);        // Ausgabe: 1
};

request.onupgradeneeded = function (event) {
  console.log(event.oldVersion);        // Alte Version der Datenbank
  console.log(event.newVersion);        // Neue Version der Datenbank
  var database = event.target.result;   // Zugriff auf die Datenbank
}