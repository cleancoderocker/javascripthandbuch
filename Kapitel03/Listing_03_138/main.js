'use strict';
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
const userData1 = ['Max Mustermann', 'max.mustermann@example.com', 'secret'];
const userData2 = ['Moritz Mustermann', 'moritz.mustermann@example.com', 'password'];
const max = createUser(
  userData1[0],
  userData1[1],
  userData1[2]
);
const moritz = createUser(
  userData2[0],
  userData2[1],
  userData2[2]
);
console.log(max);
console.log(moritz);