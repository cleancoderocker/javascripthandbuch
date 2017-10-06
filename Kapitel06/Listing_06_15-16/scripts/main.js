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
  let output = document.getElementById('output');
  output.textContent = message;
}

function getAgeValue() {
  let element = document.getElementById('age');
  let age = element.value;
  return age;
}

function addEvent(element, eventType, eventHandler) {
  if (window.addEventListener) {
    element.addEventListener(eventType, eventHandler, false);
  }
  else if (window.attachEvent) {
    element.attachEvent('on' + eventType, eventHandler);
  }
  else {
    element['on' + eventType] = eventHandler;
  }
}

function init() {
  let element = document.getElementById('age');
  addEvent(
    element,
    'blur',
    clearMessage
  );
  addEvent(
    element,
    'blur',
    function() {
      let age = getAgeValue();
      checkAgeNotNegative(age);
    }
  );
  addEvent(
    element,
    'blur',
    function() {
      let age = getAgeValue();
      checkAgeIsNumber(age);
    }
  );
}

document.addEventListener('DOMContentLoaded', init);