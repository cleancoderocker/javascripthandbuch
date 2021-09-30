'use strict';
function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password
  }
}
const max = createNewUser('Max', 'max@example.com', 'secret');