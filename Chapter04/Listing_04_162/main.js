'use strict';
function sayHello() {
  console.log('Hello');
  return function() {
    console.log('World');
    return function() {
      console.log('My name is John Doe.');
    }
  }
}

sayHello();      // Calling the "outer" function
                 // Output: 
                 // "Hello"
sayHello()();    // Calling the "outer" and "middle" functions
                 // Output:
                 // "Hello"
                 // "World"
sayHello()()();  // Calling all functions 
                 // Output:
                 // "Hello"
                 // "World"
                 // "My name is John Doe."
