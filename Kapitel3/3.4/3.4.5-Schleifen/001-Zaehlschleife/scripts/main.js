(function () {
  for (
    var i = 1;      // Initialisierung: wird vor Ausführen der Schleife ausgeführt
    i < 11;         // Bedingung: wird vor Ausführen einer Iteration überprüft
    i++             // Inkrementierungsausdruck: wird am Ende einer Iteration ausgeführt
  ) {               // Schleifenkörper: wird in jeder Iteration einmal ausgeführt
    console.log(i);
  }
  // Und hier nochmal in alltagstauglicher Schreibweise:
  for (var i = 1; i < 11; i++) {
    console.log(i);
  }

})();