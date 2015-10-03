var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    var collection = db.collection('persons');    // Collection finden
    collection.deleteMany(                        // Personen löschen ...
      {                                           //
        lastName:                                 // ... deren Nachname ...
        'Mustermann'                              // ... Mustermann lautet.
      },
      function(error, results) {
        if(!error) {
          console.log(results);
        }
        db.close();
      }
    );
  }
});