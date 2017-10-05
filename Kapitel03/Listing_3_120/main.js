'use strict';
function createUser(username, email, password) {
  password = password !== undefined ? password : 'StAnDaRdPaSsWoRt';
  let user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
let max = createUser('Max Mustermann', 'max.mustermann@example.com', 'secret');
console.log(max.username);    // Max Mustermann
console.log(max.email);       // max.mustermann@example.com
console.log(max.password);    // secret
let moritz = createUser('Moritz Mustermann', 'moritz.mustermann@example.com');
console.log(moritz.username); // Moritz Mustermann
console.log(moritz.email);    // moritz.mustermann@example.com
console.log(moritz.password); // StAnDaRdPaSsWoRt