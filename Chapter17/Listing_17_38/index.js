'use strict';
const mongoDB = require('mongodb');                 // Include mongodb package
const client = mongoDB.MongoClient;                 // Create client
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     //
    const collection = db.collection('persons');    // Find collection
    collection.updateOne(                           // Update object ...
      {                                             // ... which applies ...
        firstName: 'John',                          // ... to these ...
        lastName: 'Doe'                             // ... properties
      },                                            //
      {                                             // Update the ...
        $set: {                                     // ... object with ...
          firstName: 'James'                        // ... these ...
        }                                           // ... properties
      }, 
      (error, results) => {
        if(!error) {
          console.log(results);
        }
        db.close();
      }
    )
  }
});
