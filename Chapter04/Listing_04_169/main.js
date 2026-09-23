'use strict';
function logNames() {
  Array.prototype.forEach.apply(arguments, [function(argument) {
    console.log(argument);
  }]);
}
logNames('John', 'James');
