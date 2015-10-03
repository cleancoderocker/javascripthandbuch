function checkAgeNotNegative() {
  var output = document.getElementById('output');           // Container für Meldung
  var element = document.getElementById('age');             // Eingabefeld Alter
  var age = element.value;                                  // Aktueller Wert Alter
  if(age < 0) {                                             // Falls Wert negativ ...
    output.textContent = 'Alter kann nicht negativ sein.';  // ... gebe Meldung aus ...
  } else {                                                  // ... ansonsten ...
    output.textContent = '';                                // ... lösche Meldung.
  }
}