'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { //
    const collection = db.collection('persons'); // Collection finden
    collection.deleteMany( // Personen löschen ...
      { //
        lastName: // ... deren Nachname ...
          'Mustermann' // ... Mustermann lautet
      },
      (error, results) => {
        if(!error) {
          console.log(results);
        }
        db.close();
      }
    );
  }
});