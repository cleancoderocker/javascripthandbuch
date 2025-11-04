'use strict';
function checkUsername(userName) {
  if(userName.length < 5) {
    console.error('Nutzername muss mindestens 5 Zeichen enthalten.');
  } else if(userName.length > 8) {
    console.error('Nutzername darf maximal 8 Zeichen enthalten.');
  } else {
    console.log('Gültiger Nutzername');
  }
}
checkUsername('Max');             // Fehler, da zu kurz
checkUsername('Max Mustermann');  // Fehler, da zu lang
checkUsername('MaxMuste');        // gültig