'use strict';
function init() {
  const form = document.getElementById('register');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'register', true);
    request.send(formData);
  });
}
document.addEventListener('DOMContentLoaded', init);
