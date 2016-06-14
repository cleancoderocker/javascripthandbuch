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
  var element = document.getElementById('age');
  addEvent(
    element,
    'blur',
    clearMessage
  );
  addEvent(
    element,
    'blur',
    function() {
      var age = getAgeValue();
      checkAgeNotNegative(age);
    }
  );
  addEvent(
    element,
    'blur',
    function() {
      var age = getAgeValue();
      checkAgeIsNumber(age);
    }
  );
}

document.addEventListener('DOMContentLoaded', init);