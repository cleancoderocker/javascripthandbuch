'use strict';
const mongoDB = require('mongodb'); // mongodb-Package einbinden
const client = require('mongodb').MongoClient; // Client erstellen
const url = 'mongodb://localhost:27017/exampleDB'; // URL zur Datenbank
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { // Falls es keinen Fehler gibt ...
    console.log('Verbindung hergestellt'); // ... wurde die Verbindung ...
	// ... erfolgreich hergestellt.
  	db.close(); // Verbindung schließen
  }
});