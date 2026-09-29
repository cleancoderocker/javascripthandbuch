'use strict';
// Definition of the function that expects another function as an argument
function function1(f) {
  console.log('Function 1 start'); // Calling the passed function
  f();
  console.log('Function 1 end');
}
function function2() {
  console.log('Function 2 start');
  console.log('Function 2 end');
}
// Call with a function using its name
function1(function2);
// function1(function2());        // This does not work.

// Call with an anonymous function as an argument
function1(function() {
  console.log('Anonymous function start');
  console.log('Anonymous function end');
});
