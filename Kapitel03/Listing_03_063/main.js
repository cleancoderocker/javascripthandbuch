'use strict';
const userIsLoggedIn = true;
if(userIsLoggedIn) {
  const message = 'Herzlich willkommen, ' + userName;
  document.getElementById('message').textContent = message;
} else {
  displayLoginForm();
}