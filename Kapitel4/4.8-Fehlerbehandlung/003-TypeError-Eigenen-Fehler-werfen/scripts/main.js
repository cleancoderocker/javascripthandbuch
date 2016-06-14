function sortArray(array) {
  if(array instanceof Array) {
    array.sort(function(a, b) {
      return b-a;
    });
  } else {
    throw new Error('Kann nur Arrays sortieren.')
  }
}

function init() {
  var numbers = [8, 4, 4711, 334, 2345];
  sortArray(numbers);
  console.log(numbers);               // Ausgabe: [4711, 2345, 334, 8, 4]
  var object = {
    numbers: [8, 4, 4711, 334, 2345]
  };
  sortArray(object);                  // Fehler: Kann nur Arrays sortieren.
}

document.addEventListener('DOMContentLoaded', init);
