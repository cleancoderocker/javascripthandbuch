'use strict';
const john = {
  firstName: 'John'
}
const johnDoe = Object.create(john, {
  lastName: {
    value: 'Doe',
    enumerable: true
  }
});
console.log(john.firstName);      // John
console.log(john.lastName);       // undefined
console.log(johnDoe.firstName);   // John
console.log(johnDoe.lastName);    // Doe
// Output: lastName, firstName
for(let i in johnDoe) {
  console.log(i);
}
const properties = Object.keys(johnDoe);
// Output: ["lastName"]
console.log(properties);
