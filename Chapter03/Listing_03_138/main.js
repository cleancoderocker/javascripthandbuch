'use strict';
function createUser(username, email, password) {
  const user = {
    username: username, 
    email: email, 
    password: password
  }
  return user;
}
const userData1 = ['John Doe', 'john.doe@example.com', 'secret']; 
const userData2 = ['James Doe', 'james.doe@example.com', 'password'];
const john = createUser(
  userData1[0], 
  userData1[1],
  userData1[2]
);
const james = createUser(
  userData2[0], 
  userData2[1],
  userData2[2]
);
