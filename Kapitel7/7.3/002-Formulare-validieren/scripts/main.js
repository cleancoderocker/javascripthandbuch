function init() {
  let emailElement = document.getElementById('email');
  let emailElement2 = document.getElementById('email2');
  emailElement.addEventListener('change', validateEmail);
  emailElement2.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  let emailElement = document.getElementById('email');
  let emailElement2 = document.getElementById('email2');
  if (emailElement.value !== emailElement2.value) {
    emailElement.setCustomValidity('E-Mails müssen übereinstimmen.');
    emailElement2.setCustomValidity('E-Mails müssen übereinstimmen.');
  } else {
    emailElement.setCustomValidity('');
    emailElement2.setCustomValidity('');
  }

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
