'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { //
    const collection = db.collection('persons'); // Collection finden
    const cursor = collection.find(); // Cursor erstellen
    cursor.each( (error, document) => { // Cursor iterieren
      if(document) { //
        console.log( //
          document._id, // interne ID
          document.firstName, // hier: "Max"
          document.lastName // hier: "Mustermann"
        );
      } else {
        db.close();
      }
    });
  }
});