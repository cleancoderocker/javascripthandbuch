'use strict';
function init() {
  const idbFactory = window.indexedDB;     // Access to the helper object
  const request = idbFactory.open(         // Open the database...
    'TestDatabase',                        // ... based on the name...
    1                                      // ... and optionally the version
  );
  request.onerror = (event) => {           // Event handler in case of error
    const error = event.target.error;      // Access to the error
    console.error(error.message);          // Output of the error
  };
  request.onsuccess = (event) => {         // Event handler for the normal case
    const database = event.target.result;  // Access to the database
    console.log(database.name);            // Output: "TestDatabase"
    console.log(database.version);         // Output: 1
  };
}
document.addEventListener('DOMContentLoaded', init);