function init() {
  let formById = document.getElementById('login');
  let formByName = document.getElementsByName('login')[0];
  let formBySelector = document.querySelector('form');
  let formByFormsField = document.forms[0];
  let formByNameField = document.login;
  console.log(formById.id);              // "login"
  console.log(formByName.id);            // "login"
  console.log(formBySelector.id);        // "login"
  console.log(formByFormsField.id);      // "login"
  console.log(formByNameField.id);       // "login"


  let form = document.getElementById('login');
  console.log(form.elements);           // Formularelemente, Details später
  console.log(form.length);             // Anzahl Formularelemente
  console.log(form.name);               // Name des Formulars, hier "login"
  console.log(form.acceptCharset);      //
  console.log(form.action);             // Inhalt des "action"-Attributs
  console.log(form.enctype);            //
  console.log(form.encoding);           //
  console.log(form.method);             // HTTP-Methode, hier "post"
  console.log(form.target);             //
}

document.addEventListener('DOMContentLoaded', init);
