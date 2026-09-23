function init() {
  const emailElement = document.getElementById('email');
  const emailElement2 = document.getElementById('email2');
  emailElement.addEventListener('change', validateEmail);
  emailElement2.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  const emailElement = document.getElementById('email');
  const emailElement2 = document.getElementById('email2');
  if (emailElement.value !== emailElement2.value) {
    emailElement.setCustomValidity('E-mails must match.');
    emailElement2.setCustomValidity('E-mails must match.');
  } else {
    emailElement.setCustomValidity('');
    emailElement2.setCustomValidity('');
  }

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
