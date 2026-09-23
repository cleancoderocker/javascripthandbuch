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
  const element = document.getElementById('age');
  element.addEventListener('blur', clearMessage); 
  element.addEventListener('blur', checkAgeNotNegative); 
  element.addEventListener('blur', checkAgeIsNumber);
  const checkBox = document.getElementById('validation'); 
  checkBox.addEventListener('change', () => {
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
document.addEventListener("DOMContentLoaded", init);
