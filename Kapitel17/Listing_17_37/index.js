'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
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