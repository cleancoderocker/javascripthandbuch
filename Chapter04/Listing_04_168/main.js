'use strict';
function logNames() {
  Array.prototype.forEach.call(arguments, function(argument) {
    console.log(argument);
  });
}
logNames('John', 'James');
