function init() {
  const fieldUserNameById = document.getElementById('username');
  const fieldPasswordById = document.getElementById('password');
  const fieldRememberById = document.getElementById('remember');
  const buttonSubmitById = document.getElementById('submit');
  console.log(fieldUserNameById.id);    // "username"
  console.log(fieldPasswordById.id);    // "password"
  console.log(fieldRememberById.id);    // "remember"
  console.log(buttonSubmitById.id);     // "submit"

  const form = document.getElementById('login');
  const formElements = form.elements;
  console.log(formElements.length);     // 4
  const fieldUserName = formElements[0];
  const fieldPassword = formElements[1];
  const fieldRemember = formElements[2];
  const buttonSubmit = formElements[3];
  console.log(fieldUserName.id);        // "username"
  console.log(fieldPassword.id);        // "password"
  console.log(fieldRemember.id);        // "remember"
  console.log(buttonSubmit.id);         // "submit"
}

document.addEventListener('DOMContentLoaded', init);
