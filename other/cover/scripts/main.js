const getAgeValue = () => {
  const element = document.getElementById('age');
  const age = element.value;
  return age;
}

const checkAgeNotNegative = () => {
  const age = getAgeValue();
  if (age < 0) {
    showMessage('Age cannot be negative.');
  }
}

const checkAgeIsNumber = () => {
  const age = getAgeValue();
  if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
    showMessage('Age must be a number.');
  }
}

const clearMessage = () => {
  showMessage('');
}

const showMessage = (message) => {
  const output = document.getElementById('output');
  output.textContent = message;
}

const init = () => {
  const element = document.getElementById('age');
  element.addEventListener('blur', clearMessage, false);
  element.addEventListener('blur', () => {
    checkAgeIsNumber(getAgeValue());
  }, false);
  element.addEventListener('blur', () => {
    checkAgeNotNegative(getAgeValue());
  }, false);
}

document.addEventListener('DOMContentLoaded', init);