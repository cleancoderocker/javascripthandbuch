function init() {
  // 1.) Access via DOM selection methods
  const formById = document.getElementById('login');
  const formByName = document.getElementsByName('login')[0];
  const formBySelector = document.querySelector('form');
  // 2.) Access via forms property
  const formByFormsField = document.forms[0];
  // 3.) Access via the name of the form
  const formByNameField = document.login;
  console.log(formById.id);              // "login"
  console.log(formByName.id);            // "login"
  console.log(formBySelector.id);        // "login"
  console.log(formByFormsField.id);      // "login"
  console.log(formByNameField.id);       // "login"

  const form = document.getElementById('login');
  console.log(form.elements);           // Form elements, details to follow
  console.log(form.length);             // Number of form elements
  console.log(form.name);               // Name of the form, "login" in this case
  console.log(form.action);             // Content of the "action" attribute
  console.log(form.method);             // HTTP method, "post" in this case
}

document.addEventListener('DOMContentLoaded', init);
