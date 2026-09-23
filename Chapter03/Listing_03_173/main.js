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
  try {
    getUsersByName(22);
  } catch(error) {
    console.log(error);        // TypeError: String expected
    throw new DBError('Error communicating with the database');
  } finally {
    closeDatabaseConnection(); // 'Database connection closed'
  }
  
}
class DBError extends Error {

}
accessDatabase();