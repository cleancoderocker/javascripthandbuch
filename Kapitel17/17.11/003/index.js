var mongoDB = require('mongodb');                 // mongodb-Modul einbinden
var client = require('mongodb').MongoClient;      // Client erstellen
var url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
client.connect(url, function (error, db) {        // Verbindung herstellen
  if (!error) {                                   //
    db.collection(                                // Collection erstellen
      'persons',                                  // Name der Collection
      function(error, collection) {               // Callback-Handler
        if(!error) {                              //
          var person = {                          // Objekt, das gespeichert ...
            firstName:'Max',                      // ... werden soll.
            lastName: 'Mustermann'                //
          };                                      //
          collection.insert(                      // Speichern des ...
            person,                               // ... Objekts.
            function(error, result) {             // Callback-Handler
              if(!error) {
                console.log(result);
              }
              db.close();
            }
          );
        }
      }
    );
  }
});