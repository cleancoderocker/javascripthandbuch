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
 
if (john.contact && john.contact.email) {
  console.log(john.contact.email);
}
// Output: "john.doe@javascripthandbuch.com"
 
// Runtime error!
// console.log(james.contact.email);
 
if (james.contact && james.contact.email) {
  console.log(james.contact.email);
}
// No output
