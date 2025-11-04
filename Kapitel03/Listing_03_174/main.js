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
  try {
    getUsersByName(22);
  } catch(error) {
    console.log(error);         // TypeError: Zeichenkette erwartet
    throw new DBError('Fehler bei der Kommunikation mit der Datenbank');
  } finally {
    closeDatabaseConnection();  // 'Datenbankverbindung geschlossen'
  }
}
class DBError extends Error {

}
accessDatabase();