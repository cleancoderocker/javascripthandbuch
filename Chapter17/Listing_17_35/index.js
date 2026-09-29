'use strict';
import { MongoClient } from 'mongodb';              // Include mongodb package
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
const client = new MongoClient(url);                // Create client
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     //
    db.collection(                                  // Create collection
      'persons',                                    // Name of collection
      (error, collection) => {                      // Callback handler
        if(!error) {                                //
          const person = {                          // Object to be...
            firstName:'John',                       // ... saved
            lastName: 'Doe'                         //
          };                                        //
          collection.insert(                        // Saving the ...
            person,                                 // ... object
           (error, result) => {                     // Callback handler
              if(!error) {
                console.log(result);
              }
              db.close();
            }
          );
        }
      }
    );
  }
});
