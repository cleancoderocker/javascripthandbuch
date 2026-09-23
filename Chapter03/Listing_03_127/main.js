'use strict';
function printPersonInformation(firstName, lastName, age) {
  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);
  console.log(`Age: ${age}`);

  if(arguments.length > 3) {
    console.log(`Size: ${arguments[3]}`);
  }
  if(arguments.length > 4) {
    console.log(`Weight: ${arguments[4]}`);

  }
}
printPersonInformation('John', 'Doe', 44, 1.88, 88);

/* Output
First name: John
Last name: Doe
Age: 44
Size: 1.88
Weight: 88
*/
