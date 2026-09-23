'use strict';
const createUser = (username, email, password) =>
(
  {
    username: username,
    email: email,
    password: password
  }
);
// ... is the same as ...
function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    password: password
  }
  return user;
}
