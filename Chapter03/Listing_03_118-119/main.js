'use strict';
function createNewUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password
  }
}
const john = createNewUser('John', 'john@example.com', 'secret');