'use strict';
function checkUsername(userName) {
  if(userName.length < 5) {
    console.error('Username must contain at least 5 characters.');
  } else if(userName.length > 8) {
    console.error('Username may contain a maximum of 8 characters.');
  } else {
    console.log('Valid username');
  }
}
checkUsername('Max');             // error, too short
checkUsername('Max Mustermann');  // error, too long
checkUsername('MaxMuste');        // valid
