'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { //
  db.collection( // Collection erstellen
    'persons', // Name der Collection
    (error, collection) => { // Callback-Handler
      if(!error) { //
        const person = { // Objekt, das gespeichert ...
          firstName:'Max', // ... werden soll
          lastName: 'Mustermann' //
        }; //
        cLollection.insert( // Speichern des ...
          person, // ... Objekts
          (error, result) => { // Callback-Handler
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