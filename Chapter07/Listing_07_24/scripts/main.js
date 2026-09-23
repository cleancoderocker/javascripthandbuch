function init() {
  const registerForm = document.getElementById('register');
  registerForm.noValidate = true; 
  registerForm.addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);

function validateForm(e) {
  const event = (e ? e : window.event); // Event
  const form = (event.target            // Target element
            ? event.target
            : event.srcElement);
  let formIsValid = true;               // Validity of the form
  const formElements =                  // Form elements ...
    form.querySelectorAll(              // ... that support ...
      'input, textarea, select');       // ... native validation
  for (let i = 0; i < formElements.length; i++) {
    const formElement = formElements[i];
    if (formElement.willValidate !== 'undefined') {
      formElement.checkValidity();
    } else {
                                        // Browser does not support
                                        // native HTML5 validation.
    }
    if (!formElement.validity.valid) {  // If the value is not valid ...
      formIsValid = false;              // ... the form data is not valid.
    }
  }
  if (!formIsValid) {                   // If the form data is not valid ...
    if (event.preventDefault) {         // ...
      event.preventDefault();           // ... prevent default actions.
    }
  }
  return formIsValid;
}
