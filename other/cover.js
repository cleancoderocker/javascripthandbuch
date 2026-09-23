const checkAgeNotNegative = () => {
  const age = getAgeValue();
  if (age < 0) {
    showMessage('Age cannot be negative.');
  }
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