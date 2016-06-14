function init() {
  let fieldUserNameById = document.getElementById('username');
  let fieldPasswordById = document.getElementById('password');
  let fieldRememberById = document.getElementById('remember');
  let buttonSubmitById = document.getElementById('submit');
  console.log(fieldUserNameById.id);    // "username"
  console.log(fieldPasswordById.id);    // "password"
  console.log(fieldRememberById.id);    // "remember"
  console.log(buttonSubmitById.id);     // "submit"

  let form = document.getElementById('login');
  let formElements = form.elements;
  console.log(formElements.length);     // 4
  let fieldUserName = formElements[0];
  let fieldPassword = formElements[1];
  let fieldRemember = formElements[2];
  let buttonSubmit = formElements[3];
  console.log(fieldUserName.id);        // "username"
  console.log(fieldPassword.id);        // "password"
  console.log(fieldRemember.id);        // "remember"
  console.log(buttonSubmit.id);         // "submit"
}

document.addEventListener('DOMContentLoaded', init);
