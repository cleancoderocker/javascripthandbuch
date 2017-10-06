'use strict';
function openDatabaseConnection() {
  console.log('Datenbankverbindung geöffnet');
}
function closeDatabaseConnection() {
  console.log('Datenbankverbindung geschlossen');
}
function getUsersByName(name) {
  if(typeof name !== 'string') {
    throw new TypeError('Zeichenkette erwartet');
  }
  /* ... */
}
function accessDatabase() {
  openDatabaseConnection();   // 'Datenbankverbindung geöffnet'
  try {
    getUsersByName(22);
  } catch(error) {
    console.error(error);     // TypeError: Zeichenkette erwartet
  }
  closeDatabaseConnection();  // 'Datenbankverbindung geschlossen'
}
accessDatabase();