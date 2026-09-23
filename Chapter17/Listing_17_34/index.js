'use strict';
const mongoDB = require('mongodb');                 // Include mongodb package
const client = mongoDB.MongoClient;                 // Create client
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     //
    db.createCollection(                            // Create collection
      'persons',                                    // Name of collection
      (error, collection) => {                      // Callback handler
        if(!error) {
          console.log('Collection created');
        }
        db.close();
      }
    );
  }
});
