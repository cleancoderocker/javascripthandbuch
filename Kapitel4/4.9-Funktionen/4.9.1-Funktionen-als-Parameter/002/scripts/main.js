(function() {
  var numbers = [2,3,4,5];
  function every(array, f) {
    for(var i=0; i<array.length; i++) {
      f(array[i]);
    }
  }
  function print(item) {
    console.log('Item: ' + item);
  }
  function modulo(item) {
    console.log(item + ' % 2 = ' + item % 2);
  }
  every(numbers, print);
  every(numbers, modulo);
})();

(function() {
  var numbers = [2,3,4,5];
  function print(item) {
    console.log('Item: ' + item);
  }
  function modulo(item) {
    console.log(item + ' % 2 = ' + item % 2);
  }
  numbers.forEach(print);
  numbers.forEach(modulo);
})();