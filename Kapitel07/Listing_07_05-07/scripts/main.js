function init() {
  const inputUsername = document.getElementById('username');
  const inputPassword = document.getElementById('password');

  inputUsername.addEventListener('change', function(e) {
    console.log(inputUsername.value);     // Eingegebener Wert
    console.log(this.value);              // Eingegebener Wert
  });
  inputPassword.addEventListener('change', function(e) {
    console.log(inputPassword.value);     // Eingegebener Wert
    console.log(this.value);              // Eingegebener Wert
  });

  inputUsername.addEventListener('change', (e) => {
    console.log(inputUsername.value);     // Eingegebener Wert
    console.log(this.value);              // undefined
  });
  inputPassword.addEventListener('change', (e) => {
    console.log(inputPassword.value);     // Eingegebener Wert
    console.log(this.value);              // undefined
  });

  inputUsername.addEventListener('change', (e) => {
    console.log(inputUsername.value);     // Eingegebener Wert
    console.log(e.target.value);          // Eingegebener Wert
  });
  inputPassword.addEventListener('change', (e) => {
    console.log(inputPassword.value);     // Eingegebener Wert
    console.log(e.target.value);          // Eingegebener Wert
  });
};

document.addEventListener('DOMContentLoaded', init);
