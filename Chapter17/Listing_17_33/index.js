'use strict';
import { MongoClient } from 'mongodb';              // Include mongodb package
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
const client = new MongoClient(url);                // Create client
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     // If there is no ...
                                                    // ... error, ...
    console.log('Connection established');          // ... the connection ...
                                                    // ... was established successfully.
    db.close();                                     // Close connection
  }                                               
});
