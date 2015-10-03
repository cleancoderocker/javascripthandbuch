function checkAgeNotNegative(age) {
  if(age < 0) {
    showMessage('Alter kann nicht negativ sein.');
  }
}

function checkAgeIsNumber(age) {
  if(!(!isNaN(parseFloat(age)) && isFinite(age))) {
    showMessage('Alter muss Zahl sein.');
  }
}

function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  var output = document.getElementById('output');
  output.textContent = message;
}

function getAgeValue() {
  var element = document.getElementById('age');
  var age = element.value;
  return age;
}

function init() {
  var element = document.getElementById('age');
  element.addEventListener(
    'blur',
    clearMessage
  );
  element.addEventListener(
    'blur',
    function() {                      // Anonyme Funktion
      var age = getAgeValue();        // Wert für Alter holen
      checkAgeNotNegative(age);       // Aufruf der eigentlichen Funktion
    }
  );
  element.addEventListener(
    'blur',
    function() {                      // Anonyme Funktion
      var age = getAgeValue();        // Wert für Alter holen
      checkAgeIsNumber(age);          // Aufruf der eigentlichen Funktion
    }
  );
}

document.addEventListener('DOMContentLoaded', init);