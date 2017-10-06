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
  openDatabaseConnection();     // 'Datenbankverbindung geöffnet'
  getUsersByName(22);           // TypeError: Zeichenkette erwartet
  closeDatabaseConnection();    // Wird nicht ausgeführt
}
accessDatabase();