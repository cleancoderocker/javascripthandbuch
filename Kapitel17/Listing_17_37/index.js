'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) {
    const collection = db.collection('persons'); // Collection finden
    const cursor = collection.find( // Cursor erstellen
      { // nur Personen ...
        lastName: // ... deren Nachname ...
          'Mustermann' // ... Mustermann lautet
      }
    );
    cursor.each( (error, document) => {
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