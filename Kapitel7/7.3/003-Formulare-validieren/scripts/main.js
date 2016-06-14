function init() {
  let registerForm = document.getElementById('register');
  registerForm.noValidate = true;     // Native Validierung aus
  registerForm.addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);

function validateForm(e) {
  let event = (e ? e : window.event); // Event
  let form = (event.target            // Zielelement
    ? event.target
    : event.srcElement);
  let formIsValid = true;             // Gültigkeit des Formulars
  let formElements =                  // Formularelemente, die ...
    form.querySelectorAll(            // ... native Validierung ...
      'input, textarea, select');     // ... unterstützen.
  for (let i = 0; i < formElements.length; i++) {
    let formElement = formElements[i];
    if (formElement.willValidate !== 'undefined') {
      formElement.checkValidity();
    } else {
      // Browser unterstützt nicht
      // native HTML5-Validierung
    }
    if (!field.validity.valid) {      // Falls Wert nicht gültig ...
      formIsValid = false;            // ... Formulardaten nicht valide.
    }
  }
  if (!formIsValid) {                 // Falls Formulardaten nicht valide ...
    if (event.preventDefault) {       // ...
      event.preventDefault();         // ... Standardaktionen verhindern.
    }
  }
  return formIsValid;
}
