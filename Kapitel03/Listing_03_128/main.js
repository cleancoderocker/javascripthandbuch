'use strict';
let createUser = (username, email, password) =>
(
{
  username: username,
  email: email,
  password: password
}
);
// ... ist das Gleiche wie ...
function createUser(username, email, password) {
  let user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}