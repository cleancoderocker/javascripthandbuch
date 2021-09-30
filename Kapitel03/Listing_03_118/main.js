'use strict';
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const max = createUser('Max Mustermann', 'max.mustermann@example.com', 'secret');
console.log(max.username);  // Max Mustermann
console.log(max.email);     // max.mustermann@example.com
console.log(max.password);  // secret