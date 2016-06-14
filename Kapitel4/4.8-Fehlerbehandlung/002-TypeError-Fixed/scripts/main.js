function sortArray(array) {
  if(array instanceof Array) {
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
  sortArray(object);                  // Kein Fehler
}

document.addEventListener('DOMContentLoaded', init);
