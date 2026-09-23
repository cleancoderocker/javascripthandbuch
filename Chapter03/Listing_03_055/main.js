'use strict';
const john = {
  firstName: 'John',
  lastName: 'Doe',
  contact: {
    email: 'john.doe@javascripthandbuch.com'
  }
};
 
const james = {
  firstName: 'James',
  lastName: 'Doe',
};

// Access to nested property via 
// optional chaining operator:
console.log(john.contact?.email);
// Output: "john.doe@javascripthandbuch.com"
 
console.log(james.contact?.email);
// Output: undefined

// Alternative possibility: Using the
// operator on multiple hierarchy levels:
console.log(john?.contact?.email);
// Output: "john.doe@javascripthandbuch.com"
 
console.log(james?.contact?.email);
// Output: undefined
