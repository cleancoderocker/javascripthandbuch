(function () {
  for (
    var i = 0;      // Initialisierung: wird vor Ausführen der Schleife ausgeführt
    i < 10;         // Bedingung: wird vor Ausführen einer Iteration überprüft
    i++             // Inkrementierungsausdruck: wird am Ende einer Iteration ausgeführt
  ) {               // Schleifenkörper: wird in jeder Iteration einmal ausgeführt
    console.log(i);
  }
  // Und hier nochmal in alltagstauglicher Schreibweise:
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

})();