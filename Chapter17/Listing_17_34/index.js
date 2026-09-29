'use strict';
import { MongoClient } from 'mongodb';              // Include mongodb package
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
const client = new MongoClient(url);                // Create client
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
