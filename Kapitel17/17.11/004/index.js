var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    var collection = db.collection('persons');    // Collection finden
    var cursor = collection.find();               // Cursor erstellen
    cursor.each(function (error, document) {      // Cursor iterieren
      if(document) {                              //
        console.log(                              //
          document._id,                           // Interne ID
          document.firstName,                     // Hier: "Max"
          document.lastName                       // Hier: "Mustermann"
        );
      } else {
        db.close();
      }
    });
  }
});

client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    var collection = db.collection('persons');    // Collection finden
    var cursor = collection.find(                 // Cursor erstellen
      {                                           // Nur Personen ...
        lastName:                                 // ... deren Nachname ...
        'Mustermann'                              // ... Mustermann lautet.
      }
    );
    cursor.each(function (error, document) {
      if(document) {
        console.log(
          document._id,
          document.firstName,
          document.lastName
        );
      } else {
        db.close();
      }
    });
  }
});