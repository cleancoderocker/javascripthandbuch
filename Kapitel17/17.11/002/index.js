var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    db.createCollection(                          // Collection erstellen
      'persons',                                  // Name der Collection
      function(error, collection) {               // Callback-Handler
        if(!error) {
          console.log('Collection erstellt');
        }
        db.close();
      }
    );
  }
});