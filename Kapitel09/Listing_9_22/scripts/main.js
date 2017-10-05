'use strict';
function init() {
  let form = document.getElementById('register');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'register', true);
    request.send(formData);
  });
}
document.addEventListener('DOMContentLoaded', init);
