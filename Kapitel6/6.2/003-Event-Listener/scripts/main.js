function checkAgeNotNegative() {
  let output = document.getElementById('output');           // Container für Meldung
  let element = document.getElementById('age');             // Eingabefeld Alter
  let age = element.value;                                  // Aktueller Wert Alter
  if(age < 0) {                                             // Falls Wert negativ ...
    output.textContent = 'Alter kann nicht negativ sein.';  // ... gebe Meldung aus ...
  } else {                                                  // ... ansonsten ...
    output.textContent = '';                                // ... lösche Meldung.
  }
}

function init() {
  let element = document.getElementById('age');       // Element holen
  element.addEventListener(                           // Event-Listener registrieren
    'blur',                                           // Name des Events
    checkAgeNotNegative,                              // Name des Event-Listeners
    false                                             // Ereignisfluss, Details später
  );
}

document.addEventListener('DOMContentLoaded', init);