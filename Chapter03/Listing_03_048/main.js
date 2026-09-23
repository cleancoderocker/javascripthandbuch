'use strict';
const john = {
    firstName: 'John',
    lastName: 'Doe'
  };
   
  const james = {
    firstName: 'James',
    lastName: 'Doe'
  };
   
  const isJohnOrJames = john || james;
  console.log(isJohnOrJames);
  // Output: Object {firstName: "John", lastName: "Doe"}
  console.log(false || 'John'); // Output: John
  console.log('John' || null);  // Output: John
  console.log(null || 'John');  // Output: John
  