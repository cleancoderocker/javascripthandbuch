(function () {
  var numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    for (var j = i + 1; j < numbers.length; j++) {
      var number2 = numbers[j];
      console.log('Vergleiche ' + number + ' mit ' + number2);
      if (number === number2) {
        console.log('Gleiche Zahlen gefunden');
        continue;
      }
    }
  }
})();

console.log('*****');

(function () {
  var numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
  outerLoop:
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      innerLoop:
        for (var j = i + 1; j < numbers.length; j++) {
          var number2 = numbers[j];
          console.log('Vergleiche ' + number + ' mit ' + number2);
          if (number === number2) {
            console.log('Gleiche Zahlen gefunden');
            continue outerLoop;
          }
        }
    }
})();