'use strict';
const mongoDB = require('mongodb');                 // Include mongodb package
const client = mongoDB.MongoClient;                 // Create client
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     // If there is no ...
                                                    // ... error, ...
    console.log('Connection established');          // ... the connection ...
                                                    // ... was established successfully.
    db.close();                                     // Close connection
  }                                               
});
