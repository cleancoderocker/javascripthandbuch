'use strict';
const james = {
  firstName: 'James',
};
james.firstName ||= 'John';
james.lastName ||= 'Doe';
console.log(james);
// { firstName: 'James', lastName: 'Doe' }

// Prior to ES2021, the following was required:
const peter = {
  firstName: 'Peter'
};
peter.firstName || (peter.firstName = 'John');
peter.lastName || (peter.lastName = 'Doe');
console.log(peter);
// { firstName: 'Peter', lastName: 'Doe' }
