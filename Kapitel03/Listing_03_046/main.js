'use strict';
let userIsLoggedIn = true;
if(userIsLoggedIn) {
  let message = 'Herzlich Willkommen, ' + userName;
  document.getElementById('message').textContent = message;
}