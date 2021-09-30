function checkAgeNotNegative() {
  const output = document.getElementById('output');           // Container für Meldung
  const element = document.getElementById('age');             // Eingabefeld Alter
  const age = element.value;                                  // Aktueller Wert Alter
  if(age < 0) {                                             // Falls Wert negativ ...
    output.textContent = 'Alter kann nicht negativ sein.';  // ... gebe Meldung aus ...
  } else {                                                  // ... ansonsten ...
    output.textContent = '';                                // ... lösche Meldung.
  }
}

function init() {
  const element = document.getElementById('age');   // (1) Element holen
  element.onblur =                                // (2) Event definieren
    checkAgeNotNegative;                          // (3) Event-Handler definieren
}

window.onload = init;