function checkAgeNotNegative(age) {
  if(age < 0) {
    showMessage('Age cannot be negative.');
  }
}

function checkAgeIsNumber(age) {
  if(!(!isNaN(parseFloat(age)) && isFinite(age))) {
    showMessage('Age must be a number.');
  }
}

function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  const output = document.getElementById('output');
  output.textContent = message;
}

function getAgeValue() {
  const element = document.getElementById('age');
  const age = element.value;
  return age;
}

function init() {
  const element = document.getElementById('age');
  element.addEventListener(
    'blur',
    clearMessage
  );
  element.addEventListener(
    'blur',
    function() {                      // anonymous function
      const age = getAgeValue();      // get value for age
      checkAgeNotNegative(age);       // call the actual function
    }
  );
  element.addEventListener(
    'blur',
    function() {                      // anonymous function
      const age = getAgeValue();      // get value for age
      checkAgeIsNumber(age);          // call the actual function
    }
  );
}
document.addEventListener("DOMContentLoaded", init);
