'use strict';
import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017/exampleDB';  // URL zur Datenbank
const client = new MongoClient(url);                // Client erstellen
client.connect(url, (error, db) => { // Verbindung herstellen
  if (!error) { // Falls es keinen Fehler gibt ...
    console.log('Verbindung hergestellt'); // ... wurde die Verbindung ...
	// ... erfolgreich hergestellt.
  	db.close(); // Verbindung schließen
  }
});