'use strict';
function logNames() {
  console.log(arguments); // Output: { '0': 'John', '1': 'Doe' }
  /* Error: arguments is not an array
  arguments.forEach(function(argument) {
    console.log(argument);
  });
  */
}
logNames('John', 'James');
