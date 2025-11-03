'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
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