'use strict';
const userIsLoggedIn = true;
if(userIsLoggedIn) {
  const message = 'Welcome, ' + userName;
  document.getElementById('message').textContent = message;
} else {
  displayLoginForm();
}
