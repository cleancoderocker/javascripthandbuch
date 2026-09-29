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

function init() {
  const ageInput = document.getElementById('age');
  ageInput.addEventListener('blur', clearMessage); 
  ageInput.addEventListener('blur', checkAgeNotNegative); 
  ageInput.addEventListener('blur', checkAgeIsNumber);
  const checkBox = document.getElementById('validation'); 
  checkBox.addEventListener('change', function() {
    if(checkBox.checked) {
      ageInput.addEventListener('blur', checkAgeNotNegative);
      ageInput.addEventListener('blur', checkAgeIsNumber);
    } else {
      clearMessage();
      ageInput.removeEventListener('blur', checkAgeNotNegative);
      ageInput.removeEventListener('blur', checkAgeIsNumber);
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
