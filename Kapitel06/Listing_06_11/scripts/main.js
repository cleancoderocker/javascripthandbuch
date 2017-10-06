function checkAgeNotNegative() {
  let element = document.getElementById('age');         // Eingabefeld Alter
  let age = element.value;                              // Aktueller Wert Alter
  if(age < 0) {                                         // Falls Wert negativ ...
    showMessage('Alter kann nicht negativ sein.');      // ... gebe Warnung aus ...
  }
}

function checkAgeIsNumber() {
  let element = document.getElementById('age');         // Eingabefeld Alter
  let age = element.value;                              // Aktueller Wert Alter
  if(!(!isNaN(parseFloat(age)) && isFinite(age))) {     // Falls Wert Zahl ist ...
    showMessage('Alter muss Zahl sein.');               // ... gebe Meldung aus.
  }
}

function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  let output = document.getElementById('output');
  output.textContent = message;
}

function init() {
  let element = document.getElementById('age');       // Element holen
  element.addEventListener(                           // Event-Listener registrieren
    'blur',                                           // Name des Events
    clearMessage                                      // Name des Event-Listeners
  );
  element.addEventListener(                           // Event-Listener registrieren
    'blur',                                           // Name des Events
    checkAgeNotNegative                               // Name des Event-Listeners
  );
  element.addEventListener(                           // Event-Listener registrieren
    'blur',                                           // Name des Events
    checkAgeIsNumber                                  // Name des Event-Listeners
  );
}

document.addEventListener('DOMContentLoaded', init);