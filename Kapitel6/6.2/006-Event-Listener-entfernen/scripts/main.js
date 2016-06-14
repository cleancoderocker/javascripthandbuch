function checkAgeNotNegative() {
  var element = document.getElementById('age');         // Eingabefeld Alter
  var age = element.value;                              // Aktueller Wert Alter
  if(age < 0) {                                         // Falls Wert negativ ...
    showMessage('Alter kann nicht negativ sein.');      // ... gebe Warnung aus ...
  }
}

function checkAgeIsNumber() {
  var element = document.getElementById('age');         // Eingabefeld Alter
  var age = element.value;                              // Aktueller Wert Alter
  if(!(!isNaN(parseFloat(age)) && isFinite(age))) {     // Falls Wert ist Zahl ...
    showMessage('Alter muss Zahl sein.');               // ... gebe Meldung aus.
  }
}

function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  var output = document.getElementById('output');
  output.textContent = message;
}

function init() {
  var element = document.getElementById('age');       // Element holen
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
  let checkBox = document.getElementById('validation');
  checkBox.addEventListener('change', function() {
    if(checkBox.checked) {
      element.addEventListener('blur', checkAgeNotNegative);
      element.addEventListener('blur', checkAgeIsNumber);
    } else {
      clearMessage();
      element.removeEventListener('blur', checkAgeNotNegative);
      element.removeEventListener('blur', checkAgeIsNumber);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);