'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
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