function init() {
  let emailElement = document.getElementById('email');
  emailElement.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  let event = (e ? e : window.event);               // Event
  let emailElement = (event.target                  // Zielelement
    ? event.target
    : event.srcElement);
  console.log(emailElement.willValidate);           // true
  console.log(emailElement.validity);               // ValidityState: ...
  console.log(emailElement.validity.valueMissing);  // ... Wert vorhanden?
  console.log(emailElement.validity.valid);         // ... Wert gültig?
  console.log(emailElement.validationMessage);      // Validierungsmeldung

  let errorContainer = document.getElementById('email-error');
  let messageContainer = errorContainer.querySelector('.error-message');
  if(!emailElement.validity.valid) {
    messageContainer.textContent = emailElement.validationMessage;
    errorContainer.style.display = 'block';
  } else {
    messageContainer.textContent = '';
    errorContainer.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', init);
