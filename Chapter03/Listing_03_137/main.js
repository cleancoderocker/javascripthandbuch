'use strict';
function createUser(username, email, password) {
  password = password !== undefined ? password : 'DeFaUlTPaSsWoRd';
  const user = {
    username: username, 
    email: email, 
    password: password
  }
  return user;
}
const john = createUser('John Doe', 'john.doe@example.com', 'secret');
console.log(john.username);     // John Doe
console.log(john.email);        // john.doe@example.com
console.log(john.password);     // secret
const james = createUser('James Doe', 'james.doe@example.com');
console.log(james.username);    // James Doe
console.log(james.email);       // james.doe@example.com
console.log(james.password);    // DeFaUlTPaSsWoRd
