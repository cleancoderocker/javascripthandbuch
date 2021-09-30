'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { //
    const collection = db.collection('persons'); // Collection finden
    collection.updateOne( // Objekt aktualisieren ...
      { // ... welches auf ...
        firstName: 'Max', // ... diese Eigenschaften ...
        lastName: 'Mustermann' // ... zutrifft
      }, //
      { // das Objekt dann ...
        $set: { // ... mit diesen ...
          firstName: 'Moritz' // ... Eigenschaften ...
        } // ... aktualisieren
      },
      (error, results) => {
        if(!error) {
            console.log(results);
          }
        db.close();
      }
    )
  }
});