'use strict';
function createUser(username, email, password) {
  let user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
let userData1 = ['Max Mustermann', 'max.mustermann@example.com', 'secret'];
let userData2 = ['Moritz Mustermann', 'moritz.mustermann@example.com', 'password'];
let max = createUser(
  userData1[0],
  userData1[1],
  userData1[2]
);
let moritz = createUser(
  userData2[0],
  userData2[1],
  userData2[2]
);
console.log(max);
console.log(moritz);