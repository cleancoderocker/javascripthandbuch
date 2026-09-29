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
  openDatabaseConnection();
  try {
    getUsersByName(22);
  } catch(error) {
    console.log(error);
    closeDatabaseConnection();
    throw new DBError('Error communicating with the database');
  }
  closeDatabaseConnection();
}
class DBError extends Error {

}
accessDatabase();