'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
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