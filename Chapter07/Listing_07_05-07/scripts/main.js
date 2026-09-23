function init() {
  const inputUsername = document.getElementById('username');
  const inputPassword = document.getElementById('password');
  inputUsername.addEventListener('change', function (e) {
    console.log(this.value);              // entered value
  });
  inputPassword.addEventListener('change', function (e) {
    console.log(this.value);              // entered value
  });

  inputUsername.addEventListener('change', (e) => {
    console.log(inputUsername.value);     // entered value
    console.log(this.value);              // undefined
  });
  inputPassword.addEventListener('change', (e) => {
    console.log(inputPassword.value);     // entered value
    console.log(this.value);              // undefined
  });


  inputUsername.addEventListener('change', (e) => {
    console.log(e.target.value);          // entered value
  });
  inputPassword.addEventListener('change', (e) => {
    console.log(e.target.value);          // entered value
  });

};

document.addEventListener('DOMContentLoaded', init);
