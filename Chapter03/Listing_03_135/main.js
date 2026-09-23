'use strict';
function createUser(username, email, password) {
  const user = {
    username: username, 
    email: email, 
    password: password
  }
  return user;
}
const john = createUser('John Doe', 'john.doe@example.com', 'secret');
console.log(john.username);  // John Doe
console.log(john.email);     // john.doe@example.com
console.log(john.password);  // secret
