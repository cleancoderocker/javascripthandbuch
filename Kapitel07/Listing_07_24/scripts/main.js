function init() {
  const registerForm = document.getElementById('register');
  registerForm.noValidate = true;       // Native Validierung aus
  registerForm.addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);

function validateForm(e) {
  const event = (e ? e : window.event);   // Event
  const form = (event.target              // Zielelement
    ? event.target
    : event.srcElement);
  let formIsValid = true;               // Gültigkeit des Formulars
  const formElements =                  // Formularelemente, die ...
    form.querySelectorAll(              // ... native Validierung ...
      'input, textarea, select');       // ... unterstützen.
  for (let i = 0; i < formElements.length; i++) {
    const formElement = formElements[i];
    if (formElement.willValidate !== 'undefined') {
      formElement.checkValidity();
    } else {
      // Browser unterstützt nicht
      // native HTML5-Validierung
    }
    if (!formElement.validity.valid) {  // Falls Wert nicht gültig ...
      formIsValid = false;              // ... Formulardaten nicht valide.
    }
  }
  if (!formIsValid) {                   // Falls Formulardaten nicht valide ...
    if (event.preventDefault) {         // ...
      event.preventDefault();           // ... Standardaktionen verhindern.
    }
  }
  return formIsValid;
}
