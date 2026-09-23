'use strict';
function openDatabaseConnection() {
  console.log('Database connection open');
}

function closeDatabaseConnection() {
  console.log('Database connection closed');
}

function getUsersByName(name) {
  if(typeof name !== 'string') {
    throw new TypeError('String expected');
  }
  /* ... */ 
}

function accessDatabase() {
  openDatabaseConnection();    // 'Database connection open'
  getUsersByName(22);          // TypeError: String expected
  closeDatabaseConnection();   // will not be executed
}
accessDatabase();
