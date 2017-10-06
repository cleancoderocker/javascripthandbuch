'use strict';
function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password
  }
}
let max = createNewUser('Max', 'max@example.com', 'secret');