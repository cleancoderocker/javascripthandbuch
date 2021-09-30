'use strict';
let userIsLoggedIn = true;
if(userIsLoggedIn) {
  let message = 'Herzlich willkommen, ' + userName;
  document.getElementById('message').textContent = message;
}