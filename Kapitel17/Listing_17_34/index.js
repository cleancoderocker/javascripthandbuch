'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { //
    db.createCollection( // Collection erstellen
      'persons', // Name der Collection
      (error, collection) => { // Callback-Handler
        if(!error) {
          console.log('Collection erstellt');
        }
        db.close();
      }
    );
  }
});