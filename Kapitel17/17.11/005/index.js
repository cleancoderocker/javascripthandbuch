var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    var collection = db.collection('persons');    // Collection finden
    collection.updateOne(                         // Objekt aktualisieren ...
      {                                           // ... welches auf ...
        firstName: 'Max',                         // ... diese Eigenschaften ...
        lastName: 'Mustermann'                    // ... zutrifft.
      },                                          //
      {                                           // Das Objekt dann ...
        $set: {                                   // ... mit diesen ...
          firstName: 'Moritz'                     // ... Eigenschaften ...
        }                                         // ... aktualisieren.
      },
      function(error, results) {
        if(!error) {
          console.log(results);
        }
        db.close();
      }
    )
  }
});