function sortArray(array) {
  if(array) {
    array.sort(function(a, b) {
      return b-a;
    });
  }
}

function init() {
  var numbers = [8, 4, 4711, 334, 2345];
  sortArray(numbers);
  console.log(numbers);               // Ausgabe: [4711, 2345, 334, 8, 4]
  var object = {
    numbers: [8, 4, 4711, 334, 2345]
  };
  sortArray(object);                  // Uncaught TypeError: array.sort is not a function
}

document.addEventListener('DOMContentLoaded', init);
