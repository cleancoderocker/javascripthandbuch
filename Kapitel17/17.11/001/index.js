var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   // Falls es keinen Fehler gibt ...
    console.log('Verbindung hergestellt');        // ... wurde die Verbindung ...
                                                  // ... erfolgreich hergestellt.
    db.close();                                   // Verbindung schließen
  }
});