'use strict';
const createUser = (username, email, password) =>
(
  {
    username: username,
    email: email,
    password: password
  }
);
// ... ist das Gleiche wie ...
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}