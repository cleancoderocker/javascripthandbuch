'use strict';
function printPersonInformation(firstName, lastName, age, ...restArgs) {
  console.log('First name: ' + firstName);
  console.log('Last name: ' + lastName);
  console.log('Age: ' + age);
  if(restArgs.length > 0) {
    console.log(`Size: ${restArgs[0]}`);
  }
  if(restArgs.length > 1) {
    console.log(`Weight: ${restArgs[1]}`);
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
