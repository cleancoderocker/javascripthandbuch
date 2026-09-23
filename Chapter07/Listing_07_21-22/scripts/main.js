function init() {
  const emailElement = document.getElementById('email');
  emailElement.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  const event = (e ? e : window.event);             // Event
  const emailElement = (event.target                // Target element
    ? event.target
    : event.srcElement);
  console.log(emailElement.willValidate);           // true
  console.log(emailElement.validity);               // ValidityState: ...
  console.log(emailElement.validity.valueMissing);  // ... Value present?
  console.log(emailElement.validity.valid);         // ... Value valid?
  console.log(emailElement.validationMessage);      // Validation message

  const errorContainer = document.getElementById('email-error');
  const messageContainer = errorContainer.querySelector('.error-message');
  if(!emailElement.validity.valid) {
    messageContainer.textContent = emailElement.validationMessage;
    errorContainer.style.display = 'block';
  } else {
    messageContainer.textContent = '';
    errorContainer.style.display = 'none';
  }

}

document.addEventListener('DOMContentLoaded', init);
