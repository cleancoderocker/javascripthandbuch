'use strict';
import { MongoClient } from 'mongodb';              // Include mongodb package
const url = 'mongodb://localhost:27017/exampleDB';  // URL to the database
const client = new MongoClient(url);                // Create client
client.connect(url, (error, db) => {                // Establish connection
  if (!error) {                                     //
    const collection = db.collection('persons');    // Find collection
    const cursor = collection.find();               // Create cursor
    cursor.each( (error, document) => {             // Iterate cursor
      if(document) {                                //
        console.log(                                //
          document._id,                             // internal ID
          document.firstName,                       // here: "John"
          document.lastName                         // here: "Doe"
        );
      } else {
        db.close();
      }
    });
  }
});
